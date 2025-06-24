console.clear()

class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.timerRef = document.querySelector(selector);
      this.targetDate = targetDate;
      this.refs = {
        days: this.timerRef.querySelector('[data-value="days"]'),
        hours: this.timerRef.querySelector('[data-value="hours"]'),
        mins: this.timerRef.querySelector('[data-value="mins"]'),
        secs: this.timerRef.querySelector('[data-value="secs"]'),
      };
      this.start();
    }
  
    start() {
      this.update();
      this.intervalId = setInterval(() => {
        this.update();
      }, 1000);
    }
  
    update() {
      const now = new Date().getTime();
      const time = this.targetDate.getTime() - now;
  
      if (time <= 0) {
        clearInterval(this.intervalId);
        this.updateFields(0, 0, 0, 0);
        return;
      }
  
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
  
      this.updateFields(days, hours, mins, secs);
    }
  
    updateFields(days, hours, mins, secs) {
      this.refs.days.textContent = days;
      this.refs.hours.textContent = this.pad(hours);
      this.refs.mins.textContent = this.pad(mins);
      this.refs.secs.textContent = this.pad(secs);
    }
  
    pad(value) {
      return String(value).padStart(2, '0');
    }
  }
  
  new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('2025-12-31T23:59:59'),
  });
  