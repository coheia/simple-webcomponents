import { LitElement, html } from 'lit';
import { styles } from './my-button.css' 
import {customElement, property} from 'lit/decorators.js';
@customElement('my-button')
export class MyButton extends LitElement {
  static styles = styles

  @property({attribute: 'icon', type: String})
  icon = 'false';

  @property({attribute: 'loading', type: String})
  loading = 'false';

  @property({attribute: 'color', type: String})
  color = 'black';

  render() {
    return html`
      <button
        ?disabled=${this.loading === 'true'}
        style="background-color: ${this.color};"
      >
        ${this.icon === 'true' ? html`<i></i>` : null}
        ${this.loading === 'true' ? `Loading...` : html`<slot></slot>`}
      </button>
    `;
  }
}