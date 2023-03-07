import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('swc-i-chevron-down')
export class SwcIChevronDown extends LitElement {
  @property({type: String}) size = '16px';
  @property({type: String}) color = 'currentColor';

  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" width="${this.size}" height="${this.size}" fill="currentColor" class="bi bi-5-circle" viewBox="0 0 24 24">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.8839 15.5303C12.3957 16.0185 11.6043 16.0185 11.1161 15.5303L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="currentColor"/>
</svg>`;
  }
}