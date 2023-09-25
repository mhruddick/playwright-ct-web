import { FASTElement, customElement, html } from "@microsoft/fast-element";

@customElement('default-slot-component')
export class DefaultSlot extends FASTElement {
  render() {
    return html`
      <div>
        <h1>Welcome!</h1>
        <main><slot></slot></main>
        <footer>Thanks for visiting.</footer>
      </div>
    `;
  }
}
