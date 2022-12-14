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

  when() {
    const now = new Date()
    const difference = this._date.getTime() - now.getTime()
    const seconds = difference / 1000 
    const mins = seconds / 60    
    const hrs = mins / 60    
    const days = hrs / 24   
    console.log(days) 
    const months = days / 30.437
    const years = months / 12 
    let displayString = ''

    if ( Math.abs(years) > 1) {
        const displayYears = Math.floor(years)
        displayString = years > 1 ? (`${displayYears} years from now`) : (`${Math.abs(displayYears) - 1} years ago`)
    } else if (years < 1 && (Math.abs(months) > 1)) {
        const displayMonth = Math.floor(months)
        displayString = months > 1? (`${displayMonth} months from now`) : (`${Math.abs(displayMonth) - 1} months ago`)
    } else {
        const displayDays = Math.ceil(days)
        displayString = days > 1? (`${displayDays} days from now`) : (`${Math.abs(displayDays) - 1} days ago`)
    } 
    return displayString
  }
}

const octDate = new D (2022, 9, 1)
console.log(octDate.format())
console.log(octDate.when())

// @ts-ignore: Unreachable code error
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// Number(this.date) - Number(date)

module.exports = D