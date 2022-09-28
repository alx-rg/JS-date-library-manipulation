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

  get hours() {
    return this._date.getHours();
  }

  get mins() {
    return this._date.getMinutes();
  }

  get secs() {
    return this._date.getSeconds();
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
      return `${this.day} ${this.month} ${this.date}, ${this.year}`
    }
  
    const dateComponents = {
      'Y': this.year,
      'y': this.yr,
      'M': this.month,
      'm': this.mon,
      'D': this.day,
      'd': this.dy,
      '#': this.ending
      // 'H' -> 05 (Hours padded)
      // 'h' -> 5 (Hours)
      // 'I' -> 08 (Minutes padded)
      // 'i' -> 8 (Minutes)
      // 'S' -> 04 (Seconds padded)
      // 's' -> 4 (Seconds)
    }
    let dateStr = ''

    for (let i = 0; i < mask.length; i += 1) {
      if (dateComponents[mask[i]] !== undefined) {
        dateStr += dateComponents[mask[i]]

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

const date = new D(2020, 09, 10, 5, 6, 27)
console.log( date.year )    //Full Year   = 2020
console.log( date.yr )      //Short Year  = 20
console.log( date.month )   //Full Month  = October
console.log( date.mon )     //Short Month = Oct
console.log( date.day )     //Full Day    = Sunday
console.log( date.dy )      //Short Day   = Sun
console.log( date.date)     //Date        = 10
console.log( date.hours)    //Hours       = 5
console.log( date.mins)     //Minutes     = 6
console.log( date.secs)     //Seconds     = 27

console.log(date.format())
console.log(date.format('y/m/d'))
console.log(date.ending)


// List of formatting characters:

// 'Y' -> 2019 (Year full)
// 'y' -> 19 (Year short)
// 'M' -> July (Month full)
// 'm' -> Jul (Month short)
// 'D' -> 01 (date padded)
// 'd' -> 1 (date)
// '#' -> 1st (date with ordinal suffix: st, nd, rd or th)
// 'H' -> 05 (Hours padded)
// 'h' -> 5 (Hours)
// 'I' -> 08 (Minutes padded)
// 'i' -> 8 (Minutes)
// 'S' -> 04 (Seconds padded)
// 's' -> 4 (Seconds)
// The format() method should provide an acceptable default formatted date with no parameters.