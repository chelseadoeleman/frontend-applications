import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../components/ra-component.js';
import '../components/ra-property.js';
import '../stylesheets/shared-styles.js';

class Homeview extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>Home</h1>
        <p>Dit is de hompepage</p>
        
        <ra-component></ra-component>
        <ra-property greeting="hoi"></ra-property>
      </div>
    `;
  }
}

window.customElements.define('ra-home', Homeview);
