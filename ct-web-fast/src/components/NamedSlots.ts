import { FASTElement, customElement, html } from "@microsoft/fast-element";

@customElement({
  name: "named-slots-component",
  template: html<NamedSlots>`
    <div>
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  `,
})
export class NamedSlots extends FASTElement {}
