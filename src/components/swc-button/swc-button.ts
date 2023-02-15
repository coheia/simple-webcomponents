import { LitElement, html } from 'lit';
import { styles } from './swc-button.css' 
import {customElement, property} from 'lit/decorators.js';

@customElement('swc-button')
export class SwcButton extends LitElement {
  static styles = styles

  render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }
}