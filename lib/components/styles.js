import { css } from "lit";
export const SAMPLE_MODAL_STYLES = css `
  :host {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
  .modal-content {
    position: absolute;
    width: 600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 25px;
    padding: 20px;
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  .icon-button {
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-left: auto;
  }
  .icon-button svg {
    fill: none;
    stroke: black;
    position: absolute;
    right: 24px;
    top: 24px;
  }
  header {
    text-align: center;
    width: 366px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 18px;
    font-weight: 500;
  }
`;
