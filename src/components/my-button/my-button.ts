import { LitElement, css, html, unsafeCSS } from 'lit';
import style from './my-button.scss' 

export class MyButton extends LitElement {
  static styles = unsafeCSS(style)

  render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('my-button', MyButton);