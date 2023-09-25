import { FASTElement, customElement, html } from "@microsoft/fast-element";

@customElement({
  name: "empty-template-component",
  template: html<EmptyTemplate>`<template></template>`,
})
export class EmptyTemplate extends FASTElement {}
