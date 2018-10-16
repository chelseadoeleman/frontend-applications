import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './ra-label.js';
import '../stylesheets/shared-styles.js';
import {setNewLocalStorage} from '../helpers/setNewLocalStorage.js';

class FormLaw extends PolymerElement {
  static get template() {
    return html`
      <style  include="shared-styles">

      </style>
        
      <fieldset>
        <legend>Justitie</legend>
            <div class="inputForm">
                <label for="crime">Kind in het verleden verdacht geweest van een delict</label>
                <select on-change="onChangeSelect" name="crime" id="crime">
                    <option value="no">Nee</option>
                    <option value="yes">Ja</option>
                </select>
            </div>

            <div class="inputForm">
                <label for="halt">Kind in aanraking geweest met bureau HALT voor een delict</label>
                <select on-change="onChangeSelect" name="halt" id="halt">
                    <option value="no">Nee</option>
                    <option value="yes">Ja</option>
                </select>
            </div>

            <div class="inputForm">
                <label for="crimeParents">Vader of moeder verdacht van delict in het verleden</label>
                <select on-change="onChangeSelect" name="crimeParents" id="crimeParents">
                    <option value="no">Nee</option>
                    <option value="yes">Ja</option>
                </select>
            </div>

            <div class="inputForm">
                <label for="crimeFather">Vader verdacht van delict in het verleden</label>
                <select on-change="onChangeSelect" name="crimeFather" id="crimeFather">
                    <option value="no">Nee</option>
                    <option value="yes">Ja</option>
                </select>
            </div>

            <div class="inputForm">
                <label for="crimeMother">Moeder verdacht van delict in het verleden</label>
                <select on-change="onChangeSelect" name="crimeMother" id="crimeMother">
                    <option value="no">Nee</option>
                    <option value="yes">Ja</option>
                </select>
            </div>
        </fieldset> 


    `;
  }
  onChangeSelect (event) {
    const { target } = event
    const { options } = target
    const { name: inputName } = target
    const selectedValue = options[target.selectedIndex].value

    setNewLocalStorage(inputName, selectedValue, "general");
  }
}

window.customElements.define('ra-form-law', FormLaw);