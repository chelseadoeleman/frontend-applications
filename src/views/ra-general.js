import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../stylesheets/shared-styles.js';
import '../components/ra-form-general.js';

class General extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <form action="#" method-"post">
        <ra-form-general></ra-form-general>
      </form>
    `;
  }
}

window.customElements.define('ra-general', General);
