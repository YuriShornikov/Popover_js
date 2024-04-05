export class Tooltip {
  constructor(element) {
    this.element = element;
    this.btn = this.element.querySelector('.btn');
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  static get markup() {
    return `
      <div class="tooltip" role="tooltip">
        <div class="tooltip-title">Popover title</div>
        <div class="tooltip-content">Look at that content. It's complete.</div>
      </div>
    `;
  }

  static get selector() {
    return '.tooltip';
  }

  bindToDOM() {
    this.btn.insertAdjacentHTML('afterend', Tooltip.markup);
    this.el = this.element.querySelector(Tooltip.selector);
    this.btn.addEventListener('click', this.onChangeInput);
  }

  onChangeInput() {
    if (this.el.style.display === 'block') {
      this.el.style.display = 'none';
    } else {
      this.el.style.display = 'block';
      this.positionTooltip();
    }
  }

  positionTooltip() {
    const position = this.btn.getBoundingClientRect();
    this.el.style.top = `${position.top - this.el.offsetHeight - 10}px`;
    this.el.style.left = `${position.left + position.width / 2 - this.el.offsetWidth / 2}px`;
  }
}

const element = document.body;
const tooltip = new Tooltip(element);
tooltip.bindToDOM(element);
