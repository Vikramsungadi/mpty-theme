class SpliderComponent extends HTMLElement {
  constructor() {
    super();
    this.options = {};
    this.addedExtensions = {};
  }

  connectedCallback() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initSplide();
    });
  }

  extractOptions() {
    this.options = JSON.parse(this.dataset.options || '{}');
    this.autoScroll = this.dataset.autoScroll === 'true';
  }

  addExtensions() {
    this.splideExtensions = window.splide.Extensions;
    this.addedExtensions.Intersection = this.splideExtensions.Intersection;

    if (this.autoScroll) {
      this.addedExtensions.AutoScroll = this.splideExtensions.AutoScroll;
    }
  }

  initSplide() {
    this.extractOptions();
    this.addExtensions();

    this.splide = new Splide(this, this.options).mount(this.addedExtensions);
    console.log('this.splide', this.splide);
  }
}

customElements.define('splider-component', SpliderComponent);
