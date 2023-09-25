import { FASTElement, customElement, html } from "@microsoft/fast-element";

@customElement({
  name: "component-component",
  template: html<Component>`<div>test</div>`,
})
export class Component extends FASTElement {}
