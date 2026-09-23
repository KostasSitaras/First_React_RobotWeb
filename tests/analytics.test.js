import test from 'node:test';
import assert from 'node:assert/strict';
import { CONSENT_KEY, MEASUREMENT_ID, disableAnalytics, loadAnalytics, readAnalyticsConsent, saveAnalyticsConsent } from '../src/analytics.js';

function stubGlobal(context, name, value) {
  const original = Object.getOwnPropertyDescriptor(globalThis, name);
  Object.defineProperty(globalThis, name, { value, configurable: true, writable: true });
  context.after(() => {
    if (original) Object.defineProperty(globalThis, name, original);
    else delete globalThis[name];
  });
}

function browserFixture(context, cookie = '') {
  const cookieWrites = [];
  const scripts = new Map();
  const page = {
    get cookie() { return cookie; },
    set cookie(value) { cookieWrites.push(value); },
    getElementById: (id) => scripts.get(id),
    createElement: () => ({ addEventListener() {} }),
    head: { appendChild: (script) => scripts.set(script.id, script) },
  };
  const browser = { location: { hostname: 'portfolio.example.com', pathname: '/portfolio/' } };
  stubGlobal(context, 'window', browser);
  stubGlobal(context, 'document', page);
  return { browser, scripts, cookieWrites };
}

test('blocked storage leaves analytics opt-in and does not crash choices', (context) => {
  stubGlobal(context, 'localStorage', {
    getItem() { throw new Error('Blocked'); },
    setItem() { throw new Error('Blocked'); },
  });
  assert.equal(readAnalyticsConsent(), null);
  assert.doesNotThrow(() => saveAnalyticsConsent('denied'));
});

test('only explicit stored choices are accepted', (context) => {
  let value = 'unexpected';
  stubGlobal(context, 'localStorage', {
    getItem: () => value,
    setItem: (key, next) => { assert.equal(key, CONSENT_KEY); value = next; },
  });
  assert.equal(readAnalyticsConsent(), null);
  saveAnalyticsConsent('granted');
  assert.equal(readAnalyticsConsent(), 'granted');
  saveAnalyticsConsent('denied');
  assert.equal(readAnalyticsConsent(), 'denied');
});

test('rejecting disables analytics without loading Google or deleting unrelated cookies', (context) => {
  const { browser, scripts, cookieWrites } = browserFixture(context, '_ga=1; _ga_24TD66K0LY=2; preference=keep');
  disableAnalytics();
  assert.equal(browser[`ga-disable-${MEASUREMENT_ID}`], true);
  assert.equal(scripts.size, 0);
  assert.ok(cookieWrites.some((value) => value.includes('domain=portfolio.example.com')));
  assert.ok(cookieWrites.some((value) => value.includes('domain=example.com')));
  assert.ok(cookieWrites.some((value) => value.includes('path=/portfolio/')));
  assert.ok(cookieWrites.every((value) => value.startsWith('_ga')));
});

test('accept, reject and accept again reuse one script and toggle the opt-out flag', (context) => {
  const { browser, scripts } = browserFixture(context);
  loadAnalytics();
  loadAnalytics();
  assert.equal(scripts.size, 1);
  assert.equal(browser.dataLayer.length, 2);
  const config = Array.from(browser.dataLayer[1]);
  assert.equal(config[0], 'config');
  assert.equal(config[2].send_page_view, false);
  assert.equal(config[2].allow_google_signals, false);
  disableAnalytics();
  assert.equal(browser[`ga-disable-${MEASUREMENT_ID}`], true);
  loadAnalytics();
  assert.equal(browser[`ga-disable-${MEASUREMENT_ID}`], false);
  assert.equal(scripts.size, 1);
});
