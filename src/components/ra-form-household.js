import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import './ra-label.js'
import '../stylesheets/shared-styles.js'
import './ra-risk-assessment.js'
import { setNewLocalStorage } from '../helpers/setNewLocalStorage.js'
import { getLocalStorageValue } from '../helpers/getLocalStorageValue.js'
import { setValueToFactor } from '../helpers/setValueToFactor.js'

class FormHousehold extends PolymerElement {
  static get template() {
    return html`
      <style  include="shared-styles">

      </style>

        <div class="riskAssessment">
            <ra-risk-assessment></ra-risk-assessment>
        </div>
    
        <fieldset>
            
            <legend>Huishouden gezin</legend>
                <div class="inputForm">
                    <label for="housing">Soort woning</label>
                    <select on-change="onChangeSelect" name="housing" id="housing">
                        <option value="house">Eigen woning</option>
                        <option value="rentalWithAllowance">Huurwoning met huurtoeslag</option>
                        <option value="rentalNoAllowance">Huurwoning zonder huurtoeslag</option>
                        <option value="unknown">Onbekend</option>
                    </select>
                </div>

                <div class="inputForm">
                    <label for="household">Soort woning</label>
                    <select on-change="onChangeSelect" name="household" id="household">
                        <option value="oneParent">Eenouderhuishouden</option>
                        <option value="marriedKids">Gehuwd paar met kinderen</option>
                        <option value="onePersonHousehold">Eenpersoonshuishouden</option>
                        <option value="unmarriedKids">Niet-gehuwd paar met kinderen</option>
                        <option value="marriedNoKids">Gehuwd paar zonder kinderen</option>
                        <option value="institutional">Institutioneel huishouden</option>
                        <option value="unmarriedNoKids">Niet-gehuwd paar zonder kinderen</option>
                        <option value="remaining">Overig huishouden</option>
                        <option value="unknown">Onbekend huishouden</option>
                    </select>
                </div>

                <div class="inputForm">
                    <label for="seperated">Ouders gescheiden?</label>
                    <select on-change="onChangeSelect" name="seperated" id="seperated">
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

    setNewLocalStorage(inputName, selectedValue, "household")

    if (inputName === "housing") {
        if (selectedValue === "house") {
            setValueToFactor(inputName, 0)
        } else if (selectedValue === "rentalWithAllowance") {
            setValueToFactor(inputName, 0.3840103)
        } else if (selectedValue === "rentalNoAllowance") {
            setValueToFactor(inputName, 0.40420458)
        }  else {
            setValueToFactor(inputName, 2.40126358)
        }
    } else if (inputName === "household") {
        if (selectedValue === "oneParent") {
            setValueToFactor(inputName, 0.49608469)
        } else if (selectedValue === "marriedKids") {
            setValueToFactor(inputName, 0)
        }else if (selectedValue === "onePersonHousehold") {
            setValueToFactor(inputName, 1.7185851)
        } else if (selectedValue === "unmarriedKids") {
            setValueToFactor(inputName, 0.32693636)
        } else if (selectedValue === "marriedNoKids") {
            setValueToFactor(inputName, 1.06108193)
        } else if (selectedValue === "institutional") {
            setValueToFactor(inputName, 1.92321053)
        } else if (selectedValue === "unmarriedNoKids") {
            setValueToFactor(inputName, -14.15530169)
        } else if (selectedValue === "remaining") {
            setValueToFactor(inputName, 0.91364613)
        } else {
            setValueToFactor(inputName, -13.81002181)
        }
    } else if (inputName === "seperated") {
        if (selectedValue === "no") {
            setValueToFactor(inputName, 0)
        } else {
            setValueToFactor(inputName, 0.27683414)
        }
    } else {
        setValueToFactor(inputName, 0)
    }

    try {
        window.localStorage.setItem("factors", JSON.stringify(window.factors))
        // triggers an event, which in this case is fake
        document.dispatchEvent(new Event ("launchEvent"))
    } catch (error) {
        throw new Error (error)
    }
  }

  ready () {
    super.ready()

    const inputNames = [
        "housing",
        "household",
        "seperated"
    ]

    // loop over inputNames, get all inputNames
    inputNames.map(inputNames => {
        // acces via shadowRoot html elements with inputNames
        const select = this.shadowRoot.getElementById(inputNames)
        // get local storage 
        const valueLocalStorage = getLocalStorageValue('household', inputNames)
        console.log(valueLocalStorage)

        if (valueLocalStorage) {
            select.value = valueLocalStorage
        }
    })
}
}

window.customElements.define('ra-form-household', FormHousehold);