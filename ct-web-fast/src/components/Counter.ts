import {
  FASTElement,
  observable,
  customElement,
  html,
} from "@microsoft/fast-element";

let remountCount = 0;

@customElement({
  name: "counter-component",
  template: html<Counter>`
    <div @click=${(x) => x.onClick()}>
      <div id="props">${(x) => x.count}</div>
      <div id="remount-count">${_ => remountCount}</div>
      <slot name="main"></slot>
      <slot></slot>
    </div>
  `,
})
export class Counter extends FASTElement {
  @observable
  count!: number;

  constructor() {
    super();
    remountCount++;
  }

  onClick() {
    this.dispatchEvent(new CustomEvent("submit", { detail: "hello" }));
  }
}
