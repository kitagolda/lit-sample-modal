var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from "lit";
import { property } from "lit/decorators.js";
import { LitElement, customElement } from "lit-element";
import { SAMPLE_MODAL_STYLES } from "./styles";
let TryOnModal = class TryOnModal extends LitElement {
    constructor() {
        super(...arguments);
        this.open = false;
    }
    _hide() {
        document.body.style.overflow = "initial";
        document.removeEventListener("keydown", this._onKeypress);
        document.removeEventListener("mousedown", this._onClickOutside);
        this.open = false;
        this.style.display = "none";
        if (this.onClose) {
            this.onClose();
        }
    }
    _show() {
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", this._onKeypress.bind(this));
        document.addEventListener("mousedown", this._onClickOutside.bind(this));
        this.open = true;
        this.style.display = "block";
    }
    _onKeypress(e) {
        if (e.key === "Escape") {
            this._hide();
        }
    }
    _onClickOutside(e) {
        if (this.style.display === "none" ||
            e
                .composedPath()
                .includes(this.shadowRoot?.querySelector(".modal-content"))) {
            return;
        }
        this._hide();
    }
    showModal() {
        this._show();
    }
    hideModal() {
        this._hide();
    }
    updated(changedProperties) {
        if (changedProperties.has("open")) {
            if (this.open) {
                this._show();
            }
            else {
                this._hide();
            }
        }
    }
    render() {
        return html `
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
};
TryOnModal.styles = SAMPLE_MODAL_STYLES;
__decorate([
    property({ type: Boolean, reflect: true })
], TryOnModal.prototype, "open", void 0);
__decorate([
    property({ attribute: false })
], TryOnModal.prototype, "onClose", void 0);
TryOnModal = __decorate([
    customElement("try-on-modal")
], TryOnModal);
export { TryOnModal };
