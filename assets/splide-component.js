class SpliderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initSplide();
    });
  }

  extractOptions() {
    this.options = JSON.parse(this.dataset.options || '{}');
    this.autoScroll = JSON.parse(this.dataset.autoScroll || 'null');
  }

  addExtensions() {
    if (this.splideExtensions) {
      this.splideExtensions = window.splide.Extensions;
    }

    if (this.autoScroll) {
      this.addedExtensions.AutoScroll = this.splideExtensions.AutoScroll;
    }
  }

  initSplide() {
    this.extractOptions();
    this.addExtensions();

    this.splide = new Splide(this, this.options).mount(this.addedExtensions);
  }
}

customElements.define('splider-component', SpliderComponent);
