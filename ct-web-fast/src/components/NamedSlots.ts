import { FASTElement, customElement, html } from "@microsoft/fast-element";

@customElement('named-slots-component')
export class NamedSlots extends FASTElement {
  render() {
    return html`
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
    `;
  }
}
