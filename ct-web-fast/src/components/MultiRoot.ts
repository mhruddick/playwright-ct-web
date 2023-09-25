import { FASTElement, customElement, html } from "@microsoft/fast-element";

@customElement('multi-root-component')
export class MultiRoot extends FASTElement {
  render() {
    return html`
      <div>root 1</div>
      <div>root 2</div>
    `;
  }
}
