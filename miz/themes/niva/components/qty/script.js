class Quantity {
  constructor(selector, options = {}) {
    this.plusBtns = document.querySelectorAll('.qty-plus');
    this.minusBtns = document.querySelectorAll('.qty-minus');

    if (!this.plusBtns.length && !this.minusBtns.length) return;

    this.min = options.min ?? 1;
    this.max = options.max ?? Infinity;

    this.init();
  }

  init() {
    this.plusBtns.forEach(btn => {
      const valueElement = btn.parentElement.querySelector('.qty-value');
      if (!valueElement) return;
      btn.addEventListener('click', () => this.increment(valueElement));
    });

    this.minusBtns.forEach(btn => {
      const valueElement = btn.parentElement.querySelector('.qty-value');
      if (!valueElement) return;
      btn.addEventListener('click', () => this.decrement(valueElement));
    });
  }

  increment(valueElement) {
    let val = Number(valueElement.textContent.trim());
    if (isNaN(val)) val = this.min;
    if (val < this.max) {
      valueElement.textContent = val + 1;
    }
  }

  decrement(valueElement) {
    let val = Number(valueElement.textContent.trim());
    if (isNaN(val)) val = this.min;
    if (val > this.min) {
      valueElement.textContent = val - 1;
    }
  }
}

new Quantity('.qty', { min: 1, max: 50 });