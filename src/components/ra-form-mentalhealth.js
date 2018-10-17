import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './ra-label.js';
import '../stylesheets/shared-styles.js';
import { setNewLocalStorage } from '../helpers/setNewLocalStorage.js';
import { getLocalStorageValue } from '../helpers/getLocalStorageValue.js';


class FormMentalHealth extends PolymerElement {
  static get template() {
    return html`
      <style  include="shared-styles">

      </style>
        
    <fieldset>
        <legend>Geestelijke gezondheid kind</legend>
            <div class="inputForm">
                <label for="support">Als slachtoffer bekend bij slachtofferhulp</label>
                <select on-change="onChangeSelect" name="support" id="support">
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

    setNewLocalStorage(inputName, selectedValue, "mentalHealth");
  }

  ready () {
    super.ready()

    const inputNames = [
        "support"
    ]

    // loop over inputNames, get all inputNames
    inputNames.map(inputNames => {
        // acces via shadowRoot html elements with inputNames
        const select = this.shadowRoot.getElementById(inputNames)
        // get local storage 
        const valueLocalStorage = getLocalStorageValue('mentalHealth', inputNames)
        console.log(valueLocalStorage)

        if (valueLocalStorage) {
            select.value = valueLocalStorage
        }
    })
}

}

window.customElements.define('ra-form-mentalhealth', FormMentalHealth);
