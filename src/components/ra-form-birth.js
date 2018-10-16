import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './ra-label.js';
import '../stylesheets/shared-styles.js';

class FormBirth extends PolymerElement {
  static get template() {
    return html`
      <style  include="shared-styles">

      </style>
    
      <fieldset>
            <legend>Informatie over de geboorte</legend>
                <div class="inputForm">
                  <label for="ageMotherBirth">Leeftijd moeder bij geboorte</label>
                    <select name="ageMotherBirth" id="ageMotherBirth">
                        <option value="Under20">Jonger dan 20 jaar</option>
                        <option value="Plus20">20 tot 25 jaar</option>
                        <option value="Plus25">25 tot 30 jaar</option>
                        <option value="Plus30">30 tot 35 jaar</option>
                        <option value="Plus35">35 tot 40 jaar</option>
                        <option value="Plus40">40 jaar en ouder</option>
                    </select>
                </div>

            <div class="inputForm">
                <label for="ageFatherBirth">Leeftijd vader bij geboorte</label>
                    <select name="ageFatherBirth" id="ageFatherBirth">
                        <option value="Under20>Jonger dan 25 jaar</option>
                        <option value="Plus20">25 tot 30 jaar</option>
                        <option value="Plus25">30 tot 35 jaar</option>
                        <option value="Plus35">35 tot 40 jaar</option>
                        <option value="Plus40">40 jaar en ouder</option>
                    </select>
            </div> 

            <div class="inputForm">
                <label for="ageDifference">Leeftijdsverschil moeder en vader</label>
                    <select name="ageDifference" id="ageDifference">
                        <option value="Under20>Minder dan 5 jaar</option>
                        <option value="Plus20">Meer dan 5 jaar</option>
                    </select>
            </div>  

            <div class="inputForm">
                <label for="ethnicity">Herkomst Ouders</label>
                <select name="ethnicity" id="ethnicity">
                    <option value="Under20>Beide ouders Nederlands</option>
                    <option value="Plus20">Beide ouders niet Nederlands</option>
                    <option value="Plus20">Een ouder Nederlands de ander niet</option>
                </select>
            </div>

        </fieldset>
    `;
  }
}

window.customElements.define('ra-form-birth', FormBirth);