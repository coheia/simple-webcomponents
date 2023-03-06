import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './swc-amount.css.js';

@customElement('swc-amount')
export class SwcAmount extends LitElement {
  static override shadowRootOptions:
      ShadowRootInit = {mode: 'open', delegatesFocus: true};

  static styles = styles;

  @property({type: String}) color: 'primary' | 'secondary' | 'info' | 'success' | 'error' | 'warning' | string = 'primary';
  @property({type: Boolean, reflect: true}) disabled = false;
  @property({type: Boolean, reflect: true}) outlined = false;

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
    <div class="swc-amount__wrapper">
      <swc-button ?outlined=${this.outlined} ?disabled=${this.disabled} color=${this.color} @click=${this._decrement} label="-"></swc-button>
      <div class="counter">${this._value}</div>
      <swc-button ?outlined=${this.outlined} ?disabled=${this.disabled} color=${this.color} @click=${this._increment} label="+"></swc-button>
    </div>
    `;
  }
}
