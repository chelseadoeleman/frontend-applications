import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

export class Property extends PolymerElement {
  static get template() {
    return html`
    <div class="card">
        <h2>[[greeting]]</h2>
      </div>
    `;
  }

  static get properties() {
    return {
      greeting: {
        type: String
      }
    }
  }

  constructor() {
    super();
    this.greeting = "Hello!"
  }

}
customElements.define('ra-property', Property);
