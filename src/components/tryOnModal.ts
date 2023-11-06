import { html } from "lit";
import { property } from "lit/decorators.js";
import { LitElement, customElement } from "lit-element";

import { SAMPLE_MODAL_STYLES } from "./styles";

@customElement("try-on-modal")
export class TryOnModal extends LitElement {
  @property({ type: Boolean, reflect: true }) open = false;

  @property({ type: Object }) onClose = () => {};

  static styles = SAMPLE_MODAL_STYLES;

  private _hide() {
    document.body.style.overflow = "initial";
    document.removeEventListener("keydown", this._onKeypress);
    document.removeEventListener("mousedown", this._onClickOutside);
    this.open = false;
    this.style.display = "none";
    if (this.onClose) {
      this.onClose();
    }
  }

  private _show() {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", this._onKeypress.bind(this));
    document.addEventListener("mousedown", this._onClickOutside.bind(this));
    this.open = true;
    this.style.display = "block";
  }

  private _onKeypress(e: KeyboardEvent) {
    if (e.key === "Escape") {
      this._hide();
    }
  }

  private _onClickOutside(e: MouseEvent) {
    if (
      this.style.display === "none" ||
      e
        .composedPath()
        .includes(this.shadowRoot?.querySelector(".modal-content") as Element)
    ) {
      return;
    }

    this._hide();
  }

  public showModal() {
    this._show();
  }

  public hideModal() {
    this._hide();
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has("open")) {
      if (this.open) {
        this._show();
      } else {
        this._hide();
      }
    }
  }

  render() {
    return html`
      <div class="modal-content">
        <button class="icon-button" @click="${this.onClose}">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <header>
          <h1>Transform your photo into your Digital Twin</h1>
        </header>
        <div>
          <h2>Sample modal content</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "try-on-modal": TryOnModal;
  }
}
