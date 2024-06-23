import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('swc-i-wireless-round')
export class SwcIWirelessRound extends LitElement {
  @property({type: String}) size = '16px';
  @property({type: String}) color = 'currentColor';

  render() {
    return html`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="${this.color}" width="${this.size}" height="${this.size}" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zM14.3 8.2a.396.396 0 0 0 0-.56 8.196 8.196 0 0 0-11.6 0 .396.396 0 1 0 .56.56 7.405 7.405 0 0 1 10.48 0 .396.396 0 0 0 .56 0zm-1.738 1.18a5.74 5.74 0 0 0-8.123-.001.396.396 0 0 0 .56.56 4.952 4.952 0 0 1 7.003 0 .396.396 0 0 0 .56-.56zm-1.74 1.738a3.285 3.285 0 0 0-4.645 0 .396.396 0 0 0 .56.56 2.493 2.493 0 0 1 3.526 0 .396.396 0 0 0 .56-.56zM9.63 13.481a1.123 1.123 0 1 0-1.123 1.123A1.123 1.123 0 0 0 9.63 13.48z"/></svg>`;
  }
}