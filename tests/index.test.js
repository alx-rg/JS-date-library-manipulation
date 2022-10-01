/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { D } = require('../src/index.js');

const testToday = new D();
const testYear = new D('8/04/1999');
const testDate = new D(2022, 10, 30, 6, 7, 8);
const testDate2 = new D(2021, 11, 03, 26, 11, 55);
const testDate3 = new D('1/6/2023');
const testDate4 = new D('2/7/2022');
const testDate5 = new D('3/8/2025');
const testDate6 = new D('4/9/2020');
const testDate7 = new D('5/10/2021');

test('Full year method return full year', () => {
  expect(testYear.year).toBe(1999);
  expect(testDate.year).toBe(2022);
})

