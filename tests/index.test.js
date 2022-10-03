const D = require('../src/index.js');

const testToday = new D();
const testYear = new D('8/04/1999');
const testDate = new D(2022, 10, 30, 6, 7, 8);
const testDate2 = new D(2021, 11, 3, 26, 11, 55);
const testDate3 = new D('1/6/2023');
const testDate4 = new D('2/7/2022');


describe('The year, month, day, hours, minutes, seconds methods', function () {
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
})

describe('The format() method', function () {
  test('Formated outputs', () => {
      expect(testDate.format('y/m/d')).toBe( '22/Nov/Thu' );
      expect(testDate.format('H:I:S')).toBe( '06:07:08' );
      expect(testDate.format('h:i:s')).toBe( '6:7:8' );
      expect(testDate.format('Y-M-D h:I:S')).toBe( '2022-November-Thursday 6:07:08' );
    })
})
  

describe('The when() method', function() {
  test('Years ago D.When(2019, 6, 1)', () => {
    const date = new Date(2019, 6, 1)
    const newDate = new D(date)
    expect(newDate.when()).toBe( '3 years ago' )
  })

  test('Months ago D.When(2022, 3, 30)', () => {
    const date = new Date(2022, 3, 30)
    const newDate = new D(date)
    expect(newDate.when()).toBe( '5 months ago' )
  })

  test('Days ago D.When(2022, 8, 22)', () => {
    const date = new Date(2022, 8, 22)
    const newDate = new D(date)
    expect(newDate.when()).toBe( '9 days ago' )
  })

  test('Years from now D.When(2044, 6, 1)', () => {
    const date = new Date(2044, 6, 1)
    const newDate = new D(date)
    expect(newDate.when()).toBe( '21 years from now' )
  })

  test('Months from now D.When(2023, 8, 30)', () => {
    const date = new Date(2023, 8, 30)
    const newDate = new D(date)
    expect(newDate.when()).toBe( '11 months from now' )
  })

  test('Days from now D.When(2022, 10, 2)', () => {
    const date = new Date(2022, 10, 2)
    const newDate = new D(date)
    expect(newDate.when()).toBe( '31 days from now' )
  })
})