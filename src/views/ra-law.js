import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../stylesheets/shared-styles.js';
import '../components/ra-form-law.js';

class Law extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <form action="#" method-"post">
        <ra-form-law></ra-form-law>
      </form>
    `;
  }
}

window.customElements.define('ra-law', Law);