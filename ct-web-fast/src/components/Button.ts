import {
  FASTElement,
  attr,
  customElement,
  html,
} from "@microsoft/fast-element";

@customElement({
  name: "button-component",
  template: html<Button>`
    <button @click=${(x) => x.onClick()}>${(x) => x.title}</button>
  `,
})
export class Button extends FASTElement {
  @attr
  title!: string;

  onClick() {
    this.dispatchEvent(new CustomEvent("submit", { detail: "hello" }));
  }
}
