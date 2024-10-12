class SpliderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initSplide();
    });
  }

  initSplide() {
    this.options = JSON.parse(this.dataset.options || '{}');
    this.splide = new Splide(this, this.options).mount();
  }
}

customElements.define('splider-component', SpliderComponent);
