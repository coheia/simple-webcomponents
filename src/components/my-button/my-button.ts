import { LitElement, html } from 'lit';
import { styles } from './my-button.css' 

export class MyButton extends LitElement {
  static styles = styles

  render() {
    return html`
      <button>
        <i></i>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('my-button', MyButton);