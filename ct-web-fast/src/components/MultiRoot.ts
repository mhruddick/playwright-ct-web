import { FASTElement, customElement, html } from "@microsoft/fast-element";

@customElement({
  name: "multi-root-component",
  template: html<MultiRoot>`
    <div>root 1</div>
    <div>root 2</div>
  `,
})
export class MultiRoot extends FASTElement {}
