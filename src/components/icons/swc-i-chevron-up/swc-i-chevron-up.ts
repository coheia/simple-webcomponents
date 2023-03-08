import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('swc-i-chevron-up')
export class SwcIChevronUp extends LitElement {
  @property({type: String}) size = '16px';
  @property({type: String}) color = 'currentColor';

  render() {
    return html`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="${this.color}" width="${this.size}" height="${this.size}" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M15.3 15.32a1.026 1.026 0 0 1-.727-.302L8.5 8.946l-6.073 6.072a1.03 1.03 0 0 1-1.456-1.455l6.801-6.8a1.03 1.03 0 0 1 1.456 0l6.8 6.8a1.03 1.03 0 0 1-.727 1.757z"/></svg>`;
  }
}