import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-item';
import '@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-layout';
import '../stylesheets/shared-styles.js';

class Label extends PolymerElement {
  static get template() {
    return html`
      <style>
        input {
          border-radius: .5em;
          border-width: thin;
          border-style: solid;
          border-color: lightgrey;
          color: white;
          padding: .75em;
          background: lightgrey;
        }
          
        label {
          padding: 1.5em;
        }

        ::placeholder {
          color: white;
          font-size: 12px;
          font-family: roboto;
        } 
      </style>

        <label slot="label">Voornaam</label>
    `;
  }
}

window.customElements.define('ra-label', Label);