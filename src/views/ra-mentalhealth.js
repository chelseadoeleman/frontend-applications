import { PolymerElement, html } from "@polymer/polymer/polymer-element.js"
import "../stylesheets/shared-styles.js"
import "../components/ra-form-mentalhealth.js"

class MentalHealth extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <form action="#" method-"post">
        <ra-form-mentalhealth></ra-form-mentalhealth>
      </form>
    `
  }
}

window.customElements.define("ra-mentalhealth", MentalHealth)