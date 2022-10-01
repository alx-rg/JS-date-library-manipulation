const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const daysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

class D {
  constructor(...args) {
    this._date = new Date (...args)
  }

  get year() {
    return this._date.getFullYear()
  }

  get yr() {
    return this.year % 100
  }

  get month() {
    return months[this._date.getMonth()]
  }

  get mon() {
    return monthsShort[this._date.getMonth()]
  }

  get day() {
    return days[this._date.getDay()]
  }
  
  get dy() {
    return daysShort[this._date.getDay()]
  }

  get date() {
    return this._date.getDate();
  }

  get datePadded() {
    return String(this.date).padStart(2, 0)
  }

  get hours() {
    return this._date.getHours();
  }

  get hoursPadded() {
    return String(this.hours).padStart(2, 0)
  }

  get mins() {
    return this._date.getMinutes();
  }

  get minsPadded() {
    return String(this.mins).padStart(2, 0)
  }

  get secs() {
    return this._date.getSeconds();
  }

  get secsPadded() {
    return String(this.secs).padStart(2, 0)
  }

  get ending() {
    const today = this._date.getDate()
    const nth = function(d) {
      if (d > 3 && d < 21) return 'th';
      switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
      }
    }
    return `${today}${nth(today)}`
  }

  format(mask = '') {
    if (mask === '') {
      return `${this.year} ${this.month} ${this.datePadded}`
    }
  
    const dateComponents = {
      'Y': this.year,
      'y': this.yr,
      'M': this.month,
      'm': this.mon,
      'D': this.day,
      'd': this.dy,
      '#': this.ending,
      'H': this.hoursPadded,
      'h': this.hours,
      'I': this.minsPadded,
      'i': this.mins,
      'S': this.secsPadded,
      's': this.secs
    }
    let dateStr = ''

    for (let i = 0; i < mask.length; i += 1) {
      if (dateComponents[mask[i]] !== undefined) {
        dateStr += dateComponents[mask[i]]
      } else {
        dateStr += mask[i]
      }
  }
  return dateStr
  }

  // Take in/ receive an input string
  // initialize an output string
  // loop over each character in the inputted string 
  //  starting with the first character, if recognised (year, month, day)
  //  append the formated value into the output string 
  //  if not recognized, pass the character into the output string
  // once complete, return the output string

}

// console.log("><><><><><><><><><><><><><><><><><><><><><><>")
// console.log("<><><><><><><><>New Date Test<><><><><><><><>")
// const date = new D(2020, 09, 1, 5, 6, 7)
// console.log( date.year )        //Full Year   = 2020
// console.log( date.yr )          //Short Year  = 20
// console.log( date.month )       //Full Month  = October
// console.log( date.mon )         //Short Month = Oct
// console.log( date.day )         //Full Day    = Friday
// console.log( date.dy )          //Short Day   = Fri
// console.log( date.datePadded )  //Date        = 01
// console.log( date.date)         //Date        = 1
// console.log( date.ending)       //DateEnding  = 1st
// console.log( date.hours)        //Hours       = 5
// console.log( date.hoursPadded)  //HoursPadded = 05
// console.log( date.mins)         //Minutes     = 6
// console.log( date.minsPadded)   //MinPadded   = 06
// console.log( date.secs)         //Seconds     = 7
// console.log( date.secsPadded)   //SecPadded   = 07
// console.log("><><><><><><><><><><><><><><><><><><><><><><>")
// console.log("<><><><><><><><>New Date Test<><><><><><><><>")
// const d = new D(2017, 0, 2, 3, 4, 5)
// console.log(d.format())              // 2017 January 02
// console.log(d.format('y/m/d'))       // 17/Jan/2
// console.log(d.format('H:I:S'))       // 03:04:05
// console.log(d.format('h:i:s'))       // 3:4:5
// console.log(d.format('Y-M-D h:I:S')) // 2017-January-02 3:04:05 
// console.log("><><><><><><><><><><><><><><><><><><><><><><>")


// @ts-ignore: Unreachable code error
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// Number(this.date) - Number(date)

module.exports = D