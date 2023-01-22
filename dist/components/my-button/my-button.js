import{s as t,i as o,y as r}from"../../index.js";class e extends t{static get styles(){return o`
      button {
        background-color: var(--button-bg, blue);
        color: var(--button-color, white);
        padding: var(--button-padding, 0.5em 1em);
        border-radius: var(--button-border-radius, 0.25em);
      }
    `}render(){return r`
      <button>
        <slot></slot>
      </button>
    `}}customElements.define("my-button",e);export{e as MyButton};
