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
    this.autoScroll = Object.hasOwn(this.dataset, 'autoScroll');
    this.playOnIntersection = Object.hasOwn(this.dataset, 'playOnView');

    if (this.playOnIntersection) {
      this.options = {
        ...this.options,
        intersection: {
          inView: {
            autoScroll: true,
            autoplay: true
          },
          outView: {
            autoScroll: false,
            autoplay: false
          }
        }
      };
    }

    console.log('this.options', this.options);
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
  }
}

customElements.define('splider-component', SpliderComponent);
