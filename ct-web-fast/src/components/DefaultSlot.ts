import { FASTElement, customElement, html } from "@microsoft/fast-element";

@customElement({
  name: "default-slot-component",
  template: html<DefaultSlot>`
    <div>
      <h1>Welcome!</h1>
      <main><slot></slot></main>
      <footer>Thanks for visiting.</footer>
    </div>
  `,
})
export class DefaultSlot extends FASTElement {}
