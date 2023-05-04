import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('lbk-app')
export class LbkApp extends LitElement {
	static styles = 
		css`
			:host {
				display: block;
			}
		`;

  render() {
    return html`
      <slot name="app-container"></slot>
    `;
  }
}
