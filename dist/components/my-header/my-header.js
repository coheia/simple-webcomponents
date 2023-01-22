import{s as e,i as t,y as n}from"../../index.js";class r extends e{static get styles(){return t`
      header {
        padding: var(--button-padding, 0.5em 1em);
        border: 1px solid red;
        display: flex;
        justify-content:space-between;
        align-items: center;
      }
    `}render(){return n`
      <header id="main-header">
        <my-button>Olá</my-button>
        <slot></slot>
        menu
      </header>
    `}}customElements.define("my-header",r);export{r as MyHeader};
