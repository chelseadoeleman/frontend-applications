import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './ra-label.js';
import '../stylesheets/shared-styles.js';
import { setNewLocalStorage } from '../helpers/setNewLocalStorage.js';
import { getLocalStorageValue } from '../helpers/getLocalStorageValue.js';

class FormBirth extends PolymerElement {
  static get template() {
    return html`
      <style  include="shared-styles">

      </style>
    
      <fieldset>
            <legend>Informatie over de geboorte</legend>
                <div class="inputForm">
                  <label for="ageMotherBirth">Leeftijd moeder bij geboorte</label>
                    <select on-change="onChangeSelect" name="ageMotherBirth" id="ageMotherBirth">
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
                    <select on-change="onChangeSelect" name="ageFatherBirth" id="ageFatherBirth">
                        <option value="Under20>Jonger dan 25 jaar</option>
                        <option value="Plus20">25 tot 30 jaar</option>
                        <option value="Plus25">30 tot 35 jaar</option>
                        <option value="Plus35">35 tot 40 jaar</option>
                        <option value="Plus40">40 jaar en ouder</option>
                    </select>
            </div> 

            <div class="inputForm">
                <label for="ageDifference">Leeftijdsverschil moeder en vader</label>
                <select on-change="onChangeSelect" name="ageDifference" id="ageDifference">
                    <option value="Under20>Minder dan 5 jaar</option>
                    <option value="Plus20">Meer dan 5 jaar</option>
                </select>
            </div>  

            <div class="inputForm">
                <label for="ethnicity">Herkomst Ouders</label>
                <select on-change="onChangeSelect" name="ethnicity" id="ethnicity">
                    <option value="Under20>Beide ouders Nederlands</option>
                    <option value="Plus20">Beide ouders niet Nederlands</option>
                    <option value="Plus20">Een ouder Nederlands de ander niet</option>
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

    setNewLocalStorage(inputName, selectedValue, "birth");
  }

  ready () {
    super.ready()

    const inputNames = [
        "ageMotherBirth",
        "ageFatherBirth",
        "ageDifference",
        "ethnicity"
    ]

    // loop over inputNames, get all inputNames
    inputNames.map(inputNames => {
        // acces via shadowRoot html elements with inputNames
        const select = this.shadowRoot.getElementById(inputNames)
        // get local storage 
        const valueLocalStorage = getLocalStorageValue('birth', inputNames)
        console.log(valueLocalStorage)

        if (valueLocalStorage) {
            select.value = valueLocalStorage
        }
    })
}
}

window.customElements.define('ra-form-birth', FormBirth);