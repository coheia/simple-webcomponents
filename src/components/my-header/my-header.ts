import { LitElement, html } from 'lit';
import { styles } from './my-header.css'
import {customElement, property, eventOptions, query} from 'lit/decorators.js';

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