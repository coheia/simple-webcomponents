import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ClassInfo, classMap } from 'lit/directives/class-map.js';
import { styles } from './swc-button.css.js';

@customElement('swc-button')
export class SwcButton extends LitElement {
  static override shadowRootOptions:
      ShadowRootInit = {mode: 'open', delegatesFocus: true};
  
  static styles = styles

  @property({type: String}) label = '';
  @property({type: String}) color: 'primary' | 'secondary' | 'info' | 'success' | 'error' | 'warning' = 'primary';
  @property({type: Boolean, reflect: true}) disabled = false;
  @property({type: Boolean, reflect: true}) outlined = false;

  render() {
    return html`
      <button
        type="button"
        class="swc-button${classMap(this.getRenderClasses())}"
        ?disabled="${this.disabled}"
      >
        ${this.renderLabel()}
      </button>
    `;
  }

  protected renderLabel(): TemplateResult {
    return html`<span class="swc-button__label">${this.label}</span>`;
  }

  protected getRenderClasses(): ClassInfo {
    return {
      'swc-button--primary': this.color === 'primary',
      'swc-button--secondary': this.color === 'secondary',
      'swc-button--info': this.color === 'info',
      'swc-button--success': this.color === 'success',
      'swc-button--error': this.color === 'error',
      'swc-button--warning': this.color === 'warning',
      'swc-button--outlined': this.outlined === true,
    };
  }
}