import test from 'node:test';
import assert from 'node:assert/strict';
import { submitContact } from '../src/submitContact.js';

const message = { name: ' Visitor ', email: ' visitor@example.com ', message: ' A test enquiry. ' };

test('missing access key never sends a request', async (context) => {
  const request = context.mock.method(globalThis, 'fetch', async () => {});
  await assert.rejects(submitContact(message, ''), /temporarily unavailable/);
  assert.equal(request.mock.callCount(), 0);
});

test('sends the expected payload and accepts confirmed success', async (context) => {
  const request = context.mock.method(globalThis, 'fetch', async () => ({
    ok: true, json: async () => ({ success: true }),
  }));
  await submitContact(message, ' public-test-key ');
  const [url, options] = request.mock.calls[0].arguments;
  assert.equal(url, 'https://api.web3forms.com/submit');
  assert.equal(options.method, 'POST');
  const payload = JSON.parse(options.body);
  assert.equal(payload.access_key, 'public-test-key');
  assert.equal(payload.email, 'visitor@example.com');
  assert.equal(payload.name, 'Visitor');
  assert.equal(payload.message, 'A test enquiry.');
  assert.equal(payload.botcheck, false);
});

test('requires both HTTP success and Web3Forms confirmation', async (context) => {
  for (const [ok, success] of [[false, true], [true, false], [true, undefined]]) {
    const request = context.mock.method(globalThis, 'fetch', async () => ({
      ok, json: async () => ({ success }),
    }));
    await assert.rejects(submitContact(message, 'key'), /could not be sent/);
    request.mock.restore();
  }
});

test('handles a network failure or invalid server response', async (context) => {
  const request = context.mock.method(globalThis, 'fetch', async () => {
    throw new TypeError('Failed to fetch');
  });
  await assert.rejects(submitContact(message, 'key'), /check your connection/);
  request.mock.mockImplementation(async () => ({
    ok: true, json: async () => { throw new SyntaxError('Invalid JSON'); },
  }));
  await assert.rejects(submitContact(message, 'key'), /could not be sent/);
});

test('reports uncertain delivery after timeout without automatically retrying', async (context) => {
  const request = context.mock.method(globalThis, 'fetch', async () => {
    throw new DOMException('Aborted', 'AbortError');
  });
  await assert.rejects(submitContact(message, 'key'), /Delivery could not be confirmed/);
  assert.equal(request.mock.callCount(), 1);
});
