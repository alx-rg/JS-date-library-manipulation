const D = require('../src/index.js');

const testToday = new D();
const testYear = new D('8/04/1999');
const testDate = new D(2022, 10, 30, 6, 7, 8);
const testDate2 = new D(2021, 11, 3, 26, 11, 55);
const testDate3 = new D('1/6/2023');
const testDate4 = new D('2/7/2022');



test('Full year with ".year"', () => {
  expect(testYear.year).toBe(1999);
})

test('Short year with ".mon"', () => {
  expect(testYear.yr).toBe(99);
})

test('Full month with ".month"', () => {
  expect(testDate2.month).toBe('December');
})

test('Short month with ".mon"', () => {
  expect(testYear.mon).toBe('Aug');
})

test('Full day with ".day"', () => {
  expect(testDate2.day).toBe('Sunday');
})

test('Short day with ".dy"', () => {
  expect(testDate.dy).toBe('Thu');
})

test('Date with ".date"', () => {
  expect(testDate2.date).toBe(4);
})

test('Hours with ".hours"', () => {
  expect(testDate2.hours).toBe(2);
})

test('Hours padded with ".hoursPadded"', () => {
  expect(testDate2.hoursPadded).toBe('02');
})

test('Minutes with ".mins"', () => {
  expect(testDate.mins).toBe(7);
})

test('Minutes padded with ".minsPadded"', () => {
  expect(testDate.minsPadded).toBe('07');
})

test('Seconds with ".secs"', () => {
  expect(testDate.secs).toBe(8);
})

test('Seconds padded with ".secsPadded"', () => {
  expect(testDate.secsPadded).toBe('08');
})

test('Formated outputs', () => {
  expect(testDate.format('y/m/d')).toBe( '22/Nov/Thu' );
  expect(testDate.format('H:I:S')).toBe( '06:07:08' );
  expect(testDate.format('h:i:s')).toBe( '6:7:8' );
  expect(testDate.format('Y-M-D h:I:S')).toBe( '2022-November-Thursday 6:07:08' );
})