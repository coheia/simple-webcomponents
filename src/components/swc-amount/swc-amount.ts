import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './swc-amount.css';

@customElement('swc-amount')
export class SwcAmount extends LitElement {
  static styles = styles;

  private _value = 0;

  private _increment() {
    this._value += 1;
    this.requestUpdate('_value');
  }

  private _decrement() {
    this._value -= 1;
    this.requestUpdate('_value');
  }

  render() {
    return html`
    <div id="wrapper">
      <swc-button @click=${this._decrement}>-</swc-button>
      <div class="counter">${this._value}</div>
      <swc-button @click=${this._increment}>+</swc-button>
    </div>
    `;
  }
}
