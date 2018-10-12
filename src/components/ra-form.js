import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-item';
import '@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-layout';
import '../stylesheets/shared-styles.js';

class Form extends PolymerElement {
  static get template() {
    return html`
      <style>
      </style>

      <vaadin-form-layout>

        <vaadin-form-item>
          <label slot="label">First Name</label>
          <input class="full-width" value="Jane">
        </vaadin-form-item>

        <vaadin-form-item>
          <label slot="label">Last Name</label>
          <input class="full-width" value="Doe">
        </vaadin-form-item>

        <vaadin-form-item>
          <label slot="label">Email</label>
          <input class="full-width" value="jane.doe@example.com">
        </vaadin-form-item>

      </vaadin-form-layout>
    `;
  }
}

window.customElements.define('ra-form', Form);
