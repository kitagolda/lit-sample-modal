import { LitElement } from "lit-element";
export declare class TryOnModal extends LitElement {
    open: boolean;
    onClose: Function | undefined;
    static styles: import("lit").CSSResult;
    private _hide;
    private _show;
    private _onKeypress;
    private _onClickOutside;
    showModal(): void;
    hideModal(): void;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "try-on-modal": TryOnModal;
    }
}
//# sourceMappingURL=tryOnModal.d.ts.map