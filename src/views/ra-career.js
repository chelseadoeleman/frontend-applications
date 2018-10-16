import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../stylesheets/shared-styles.js';
import '../components/ra-form-career.js';

class Career extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <form action="#" method-"post">
        <ra-form-career></ra-form-career>
      </form>
    `;
  }
}

window.customElements.define('ra-career', Career);
