import { LitElement, html } from "lit-element";
/* import { format } from "format"; */
export class AlertMatchesElement extends LitElement {
  static get properties() {
    return {
      msg: { type: String },
      opened: { type: Boolean }
    };
  }
  render() {
    return html`
      <style>
        div {
          position: fixed;
          top: 100px;
          right: 50px;
          overflow: hidden;
          height: 0px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            90deg,
            rgba(10, 0, 36, 1) 0%,
            rgba(9, 74, 121, 1) 35%,
            rgba(0, 212, 255, 1) 100%
          );
          color: white;
          width: 20%;
          transition: all 0.4s ease-in;
          font-size: 1px;
          border-radius: 20px;
        }

        .opened {
          height: 80px;
          font-size: 20px;
        }
      </style>

      <div class="${this.opened ? "opened" : ""}">
        ${this.msg}
      </div>
    `;
  }

  open(mensaje) {
    this.msg = mensaje;
    this.opened = true;

    setTimeout(() => (this.opened = false), 1000);
  }
}
customElements.define("alert-matches-element", AlertMatchesElement);
