import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('swc-i-chevron-up')
export class SwcIChevronUp extends LitElement {
  @property({type: String}) size = '16px';
  @property({type: String}) color = 'currentColor';

  render() {
    return html`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="${this.size}" height="${this.size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1161 8.46969C11.6043 7.98154 12.3957 7.98154 12.8839 8.46969L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0977 17.6834 16.0977 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0977 5.68342 16.0977 5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.1161 8.46969Z" fill="#0F1729"/>
</svg>`;
  }
}