import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../components/ra-component.js';
import { Property } from '../components/ra-property.js';
import '../stylesheets/shared-styles.js';

class Homeview extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        input {
          border-radius: .5em;
          border-width: thin;
          border-style: solid;
          border-color: lightgrey;
          color: white;
          padding: .5em;
        }

        button{
          padding: .5em;
          border-radius: .5em;
          border-style: none;
          background: lightblue;
        }
      </style>

      <div class="card">
        <div class="circle">1</div>
        <h1>Home</h1>
        <p>Dit is de hompepage</p>
        <form action="#" method="post">
          <label>Naam</label>
          <input type="text" name="name" id="name" required>
          <button type="submit">Volgende</button>
        </form>
        <ra-component></ra-component>
        <ra-property greeting="hoi"></ra-property>
      </div>
    `;
  }
}

window.customElements.define('ra-home', Homeview);
