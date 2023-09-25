import { FASTElement, customElement, html } from "@microsoft/fast-element";

@customElement('component-component')
export class Component extends FASTElement {
  render() {
    return html`<div>test</div>`;
  }
}
