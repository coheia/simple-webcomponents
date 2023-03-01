import { LitElement, html } from 'lit';
import { styles } from './swc-button.css.js'
import {customElement, property} from 'lit/decorators.js';

@customElement('swc-button')
export class SwcButton extends LitElement {
  static styles = styles

  @property({attribute: 'icon', type: Boolean})
  icon = false;

  @property({attribute: 'loading', type: Boolean})
  loading = false;

  @property({attribute: 'color', type: String})
  color = 'grey';

  @property({attribute: 'hotpink60', type: String})
  hotpink60 = 'grey';

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