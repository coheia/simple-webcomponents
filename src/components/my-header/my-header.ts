import { LitElement, html, css, unsafeCSS } from 'lit';
import style from './my-header.scss'
export class MyHeader extends LitElement {
  static styles = unsafeCSS(style)

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