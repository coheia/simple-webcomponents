import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './my-header.css';

@customElement('my-header')
export class MyHeader extends LitElement {
  static styles = styles

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