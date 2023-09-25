import { FASTElement, attr, customElement, html } from "@microsoft/fast-element";

let remountCount = 0 

@customElement('counter-component')
export class Counter extends FASTElement {
  @attr
  count!: number;

  constructor() {
    super();
    remountCount++;
  }

  onClick() {
    this.dispatchEvent(new CustomEvent('submit', { detail: 'hello' }));
  }
  
  render() {
    return html`
      <div  @click=${this.onClick}>
        <div id="props">${this.count}</div>
        <div id="remount-count">${remountCount}</div>
        <slot name="main"></slot>
        <slot></slot>
      </div>
    `;
  }
}
