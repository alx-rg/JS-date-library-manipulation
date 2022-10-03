# Date-Maker - NPM Date Library

![npm](https://img.shields.io/npm/v/@alxrg/date-maker)

Allows you to quickly transform the javascript date to human readable strings

## Installation

Use the package manager [npm](https://docs.npmjs.com/cli/v8/commands/npm) to install.

```bash
npm i @alxrg/date-maker
```

[Link to npm library](https://www.npmjs.com/package/@alxrg/date-maker)

## Usage

```ts
const D = require("../src/index.js");
const dateTesting = new D(2022, 0, 8, 8, 4, 6);
const testDate = new D(2022, 10, 30, 6, 7, 8);
const testToday = new D();

// Full year
dateTesting.year; // 2022
// Short year
dateTesting.yr; // 22

// Full month
dateTesting.month; // 'January'
// Short month
dateTesting.mon; // 'Jan'

// Full day
dateTesting.day; // 'Saturday'
// Short day
dateTesting.dy; // 'Sat'

// Date Number
dateTesting.date; // 8

// Hour Number
dateTesting.hours; // 8
// Hour Padded (string)
dateTesting.hoursPadded; // '08'

// Minute Number
dateTesting.mins; // 4
// Minute Padded (string)
dateTesting.minsPadded; // '04'

// Second Number
dateTesting.secs; // 6
// Second Padded (string)
dateTesting.secsPadded; // '06'

// Examples of some formated dates
testDate.format("y/m/d"); // '22/Nov/Thu'
testDate.format("H:I:S"); // '06:07:08'
testDate.format("h:i:s"); // '6:7:8'
testDate.format("Y-M-D h:I:S"); // '2022-November-Thursday 6:07:08'

// Use the .when() will return the difference in time between two dates
const mockDate = new Date(2022, 10, 4);
dateTesting8.when(mockDate); // '16 days from now'
dateTesting7.when(mockDate); // '7 days ago'
dateTesting.when(mockDate); // '1 month 2 days from now'
dateTesting6.when(mockDate); // '9 months 29 days ago'
dateTesting5.when(mockDate); // '5 years 7 month 22 days from now'
dateTesting2.when(mockDate); // '12 years 10 month 3 days ago'
testToday.when(new Date()); // 'today'
```

## Testing

The tests are running correctly = To run tests:

```bash
npm test
```

To check code test coverage:

```bash
npx jest --coverage
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
