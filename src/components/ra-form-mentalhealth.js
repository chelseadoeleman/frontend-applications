import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import './ra-label.js'
import '../stylesheets/shared-styles.js'
import './ra-risk-assessment.js'
import { setNewLocalStorage } from '../helpers/setNewLocalStorage.js'
import { getLocalStorageValue } from '../helpers/getLocalStorageValue.js'
import { setValueToFactor } from '../helpers/setValueToFactor.js'

class FormMentalHealth extends PolymerElement {
  static get template() {
    return html`
        <style  include="shared-styles">

        </style>
        
        <div class="riskAssessment">
            <ra-risk-assessment></ra-risk-assessment>
        </div>
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

    setNewLocalStorage(inputName, selectedValue, "mentalHealth")

    if (inputName === "support") {
        if (selectedValue === "yes") {
            setValueToFactor(inputName, 0.23639124)
        } else {
            setValueToFactor(inputName, 0)
        }
    }

    try {
        window.localStorage.setItem('factors', JSON.stringify(window.factors))
        // triggers an event, which in this is case is fake
        document.dispatchEvent(new Event ('launchEvent'))
    } catch (error) {
        throw new Error (error)
    }
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

        if (valueLocalStorage) {
            select.value = valueLocalStorage
        }
    })
}

}

window.customElements.define('ra-form-mentalhealth', FormMentalHealth);
