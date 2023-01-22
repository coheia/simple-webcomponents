import { LitElement, html, css } from 'lit-element';

export class MyHeader extends LitElement {
  static get styles() {
    return css`
      header {
        padding: var(--button-padding, 0.5em 1em);
        border: 1px solid red;
        display: flex;
        justify-content:space-between;
        align-items: center;
      }
    `;
  }

  render() {
    return html`
      <header id="main-header">
        <my-button>Olá</my-button>
        <slot></slot>
        menu
      </header>
    `;
  }
}

customElements.define('my-header', MyHeader);