import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './ra-label.js';
import '../stylesheets/shared-styles.js';

class FormMentalHealth extends PolymerElement {
  static get template() {
    return html`
      <style  include="shared-styles">

      </style>
        
    <fieldset>
        <legend>Geestelijke gezondheid kind</legend>
            <div class="inputForm">
                <label for="support">Als slachtoffer bekend bij slachtofferhulp</label>
                <select name="support" id="support">
                    <option value="no">Nee</option>
                    <option value="yes">Ja</option>
                </select>
            </div>
    </fieldset> 

    `;
  }
}

window.customElements.define('ra-form-mentalhealth', FormMentalHealth);
