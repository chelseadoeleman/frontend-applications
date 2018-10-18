import { PolymerElement, html } from "@polymer/polymer/polymer-element.js"
import "../stylesheets/shared-styles.js"
import "../components/ra-form-birth.js"

class Birth extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <form action="#" method-"post">
        <ra-form-birth></ra-form-birth>
      </form>
    `
  }
}

window.customElements.define("ra-birth", Birth)
