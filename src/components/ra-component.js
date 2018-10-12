import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

export class Component extends PolymerElement {
  constructor() {
    super();
    console.log('I\'m a custom-element.');
  }
  static get template() {
    return html`
    <style include="shared-styles">
      :host {
        display: block;

        padding: 10px;
      }

      .card {
        text-align: center;
        margin: 24px;
        padding: 16px;
        color: white;
        border-radius: 5px;
        background-color: lightblue;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
    </style>

      <div class="card">
        <h2>Dit is een component</h2>
      </div>
    `;
  }
}
customElements.define('ra-component', Component);
