import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './ra-label.js';
import '../stylesheets/shared-styles.js';
import { setNewLocalStorage } from '../helpers/setNewLocalStorage.js';
import { getLocalStorageValue } from '../helpers/getLocalStorageValue.js';

class FormCareer extends PolymerElement {
  static get template() {
    return html`
      <style  include="shared-styles">

      </style>
        
        <div class="riskAssessment">
            <ra-risk-assessment></ra-risk-assessment>
        </div>
    
        <fieldset>

            <legend>Werk & opleiding kind</legend>
                <div class="inputForm">
                    <label for="education">Soort onderwijs van het kind</label>
                    <select on-change="onChangeSelect" name="education" id="education">
                        <option value="regular">Regulier onderwijs</option>
                        <option value="nonRegular">Niet-regulier onderwijs</option>
                        <option value="unknown">Onbekend</option>
                    </select>
                </div>

                <div class="inputForm">
                    <label for="educationNow">Huidig onderwijs van het kind</label>
                    <select on-change="onChangeSelect" name="educationNow" id="educationNow">
                        <option value="elementary">Basisonderwijs</option>
                        <option value="basis">Vmbo b/k, mbo 1 en mbo 2</option>
                        <option value="higherBasis">Vmbo g/t, mbo 3 en mbo 4</option>
                        <option value="havo">Havo onderbouw, Havo onderbouw, Hbo-bachelor</option>
                        <option value="vwo">Vwo of Wo bachelor</option>
                        <option value="unknown">Onderwijs onbekend</option>
                    </select>
                </div>

                <div class="inputForm">
                    <label for="educationChange">Verandering in het voortgezet onderwijs niveau</label>
                    <select on-change="onChangeSelect" name="educationChange" id="educationChange">
                        <option value="noChange">Opschalen of gelijkblijvend</option>
                        <option value="down">Afschalen</option>
                        <option value="unknown">Onbekend</option>
                    </select>
                </div>

                <div class="inputForm">
                    <label for="dropout">Voortijdig schoolverlater</label>
                    <select on-change="onChangeSelect" name="dropout" id="dropout">
                        <option value="resumeEducation">Door in onderwijs</option>
                        <option value="unknown">Onbekend</option>
                        <option value="notApply">Niet van toepassing</option>
                        <option value="startingQualification">Uit onderwijs met startkwalificatie</option>
                        <option value="dropout">Voortijdig school verlaten</option>
                    </select>
                </div>

                <div class="inputForm">
                    <label for="educationLevelFather">Hoogst behaalde onderwijsniveau vader</label>
                    <select on-change="onChangeSelect" name="educationLevelFather" id="educationLevelFather">
                        <option value="elementary">Basisonderwijs</option>
                        <option value="basis">Vmbo b/k, mbo 1 en mbo 2</option>
                        <option value="higherBasis">Vmbo g/t, mbo 3 en mbo 4</option>
                        <option value="havo">Havo onderbouw, Havo onderbouw, Hbo-bachelor</option>
                        <option value="vwo">Vwo of Wo bachelor</option>
                        <option value="unknown">Onderwijs onbekend</option>
                    </select>
                </div>

                <div class="inputForm">
                    <label for="educationLevelMother">Hoogst behaalde onderwijsniveau moeder</label>
                    <select on-change="onChangeSelect" name="educationLevelMother" id="educationLevelMother">
]                       <option value="elementary">Basisonderwijs</option>
                        <option value="basis">Vmbo b/k, mbo 1 en mbo 2</option>
                        <option value="higherBasis">Vmbo g/t, mbo 3 en mbo 4</option>
                        <option value="havo">Havo onderbouw, Havo onderbouw, Hbo-bachelor</option>
                        <option value="vwo">Vwo of Wo bachelor</option>
                        <option value="unknown">Onderwijs onbekend</option>
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

    setNewLocalStorage(inputName, selectedValue, "career");
  }

  ready () {
    super.ready()

    const inputNames = [
        "education",
        "educationNow",
        "educationChange",
        "dropout",
        "educationLevelFather",
        "educationLevelMother"
    ]

    // loop over inputNames, get all inputNames
    inputNames.map(inputNames => {
        // acces via shadowRoot html elements with inputNames
        const select = this.shadowRoot.getElementById(inputNames)
        // get local storage 
        const valueLocalStorage = getLocalStorageValue('career', inputNames)
        console.log(valueLocalStorage)

        if (valueLocalStorage) {
            select.value = valueLocalStorage
        }
    })
}
}

window.customElements.define('ra-form-career', FormCareer);