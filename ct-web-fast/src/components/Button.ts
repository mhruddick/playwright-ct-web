import { FASTElement, attr, customElement, html } from "@microsoft/fast-element";

@customElement('button-component')
export class Button extends FASTElement {
  @attr
  title!: string;

  onClick() {
    this.dispatchEvent(new CustomEvent('submit', { detail: 'hello' }));
  }

  render() {
    return html`<button @click=${this.onClick}>${this.title}</button>`;
  }
}
