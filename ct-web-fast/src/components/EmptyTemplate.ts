import { FASTElement, customElement, html } from "@microsoft/fast-element";

@customElement('empty-template-component')
export class EmptyTemplate extends FASTElement {
  render() {
    return html`<template></template>`;
  }
}
