import { LitElement, html, css } from 'lit-element';

export class MyButton extends LitElement {
  static get styles() {
    return css`
      button {
        background-color: var(--button-bg, blue);
        color: var(--button-color, white);
        padding: var(--button-padding, 0.5em 1em);
        border-radius: var(--button-border-radius, 0.25em);
      }
    `;
  }

  render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('my-button', MyButton);