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
    return html`
      <button
        ?disabled=${this.loading}
        style="background-color: ${this.color};"
      >
        ${this.icon ? html`<i>+</i>` : null}
        ${this.loading ? `Carregando...` : html`<slot></slot>`}
      </button>
    `;
  }
}