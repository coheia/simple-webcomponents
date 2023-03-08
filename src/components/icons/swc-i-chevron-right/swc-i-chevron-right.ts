import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('swc-i-chevron-right')
export class SwcIChevronRight extends LitElement {
  @property({type: String}) size = '16px';
  @property({type: String}) color = 'currentColor';

  render() {
    return html`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="${this.color}" width="${this.size}" height="${this.size}" viewBox="-4.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M1.6 17.262a1.03 1.03 0 0 1-.728-1.757l6.073-6.073L.872 3.36a1.03 1.03 0 0 1 1.455-1.455l6.8 6.8a1.03 1.03 0 0 1 0 1.456l-6.8 6.8a1.025 1.025 0 0 1-.727.302z"/></svg>`;
  }
}