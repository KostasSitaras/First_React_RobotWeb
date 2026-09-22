import test from 'node:test';
import assert from 'node:assert/strict';
import { getChapterSnapTarget } from '../src/chapterSnapTarget.js';

const ranges = [0, 700, 1400].map((top) => ({ top, bottom: top }));

test('a short deliberate scroll advances in either direction', () => {
  assert.equal(getChapterSnapTarget(ranges, 50, 0, 1, 700), 700);
  assert.equal(getChapterSnapTarget(ranges, 650, 700, -1, 700), 0);
});

test('tiny movements settle back without changing chapter', () => {
  assert.equal(getChapterSnapTarget(ranges, 8, 0, 1, 700), 0);
  assert.equal(getChapterSnapTarget(ranges, 692, 700, -1, 700), 700);
});

test('direction reversal uses the most recent gesture', () => {
  assert.equal(getChapterSnapTarget(ranges, 400, 460, -1, 700), 0);
});

test('tall chapters remain readable, then snap after their reading area', () => {
  const tall = [{ top: 0, bottom: 0 }, { top: 700, bottom: 1100 }, { top: 1800, bottom: 1800 }];
  assert.equal(getChapterSnapTarget(tall, 850, 700, 1, 700), 850);
  assert.equal(getChapterSnapTarget(tall, 1150, 1100, 1, 700), 1800);
  assert.equal(getChapterSnapTarget(tall, 1750, 1800, -1, 700), 1100);
});

test('aligned endpoints do not skip a chapter and footer remains reachable', () => {
  assert.equal(getChapterSnapTarget(ranges, 700, 0, 1, 700), 700);
  assert.equal(getChapterSnapTarget(ranges, 1400, 1350, 1, 700), 1400);
});
