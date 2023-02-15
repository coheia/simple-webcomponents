import { LitElement, html } from 'lit';
import { styles } from './swc-button.css' 
import {customElement, property} from 'lit/decorators.js';

@customElement('swc-button')
export class SwcButton extends LitElement {
  static styles = styles

  @property({attribute: 'icon', type: Boolean})
  icon = false;

  @property({attribute: 'loading', type: Boolean})
  loading = false;

  @property({attribute: 'color', type: String})
  color = 'white';

  render() {
    console.log("===> this.icon:", this.icon)
    return html`
      <button
        ?disabled=${this.loading}
        style="background-color: ${this.color};"
      >
        ${this.icon ? html`<i>icone</i>` : null}
        ${this.loading ? `Loading...` : html`<slot></slot>`}
      </button>
    `;
  }
}