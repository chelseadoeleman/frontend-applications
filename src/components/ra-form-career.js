import { PolymerElement, html } from "@polymer/polymer/polymer-element.js"
import "../stylesheets/shared-styles.js"
import "./ra-risk-assessment.js"
import { setNewLocalStorage } from "../helpers/setNewLocalStorage.js"
import { getLocalStorageValue } from "../helpers/getLocalStorageValue.js"
import { setValueToFactor } from "../helpers/setValueToFactor.js"

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
]                   <option value="elementary">Basisonderwijs</option>
                    <option value="basis">Vmbo b/k, mbo 1 en mbo 2</option>
                    <option value="higherBasis">Vmbo g/t, mbo 3 en mbo 4</option>
                    <option value="havo">Havo onderbouw, Havo onderbouw, Hbo-bachelor</option>
                    <option value="vwo">Vwo of Wo bachelor</option>
                    <option value="unknown">Onderwijs onbekend</option>
                </select>
            </div>
        </fieldset> 
    `
  }

  onChangeSelect (event) {
    const { target } = event
    const { options } = target
    const { name: inputName } = target
    const selectedValue = options[target.selectedIndex].value

    setNewLocalStorage(inputName, selectedValue, "career")

    if (inputName === "education") {
        if (selectedValue === "regular") {
            setValueToFactor(inputName, 0)
        } else if (selectedValue === "nonRegular") {
            setValueToFactor(inputName, -0.33030829)
        } else {
            setValueToFactor(inputName, -0.76956641)
        }
    } else if (inputName === "educationNow") {
        if (selectedValue === "elementary") {
            setValueToFactor(inputName, 0)
        } else if (selectedValue === "basis") {
            setValueToFactor(inputName, 0.87841913)
        }else if (selectedValue === "higherBasis") {
            setValueToFactor(inputName, 0.56881862)
        } else if (selectedValue === "havo") {
            setValueToFactor(inputName, 0)
        } else if (selectedValue === "vwo") {
            setValueToFactor(inputName, -0.8356626)
        } else {
            setValueToFactor(inputName, 0)
        }
    } else if (inputName === "educationChange") {
        if (selectedValue === "noChange") {
            setValueToFactor(inputName, 0)
        }  else if (selectedValue === "down") {
            setValueToFactor(inputName, 0.58732282)
        } else {
            setValueToFactor(inputName, -1.11681655)
        }
    } else if (inputName === "dropout") {
        if (selectedValue === "resumeEducation") {
            setValueToFactor(inputName, 0)
        } else if (selectedValue === "unknown") {
            setValueToFactor(inputName, 0.80563824)
        } else if (selectedValue === "notApply") {
            setValueToFactor(inputName, 0.38735846)
        } else if (selectedValue === "startingQualification") {
            setValueToFactor(inputName, -13.64192657)
        } else {
            setValueToFactor(inputName, 0.34683899)
        }
    } else if (inputName === "educationLevelFather") {
        if (selectedValue === "elementary") {
            setValueToFactor(inputName, 0)
        } else if (selectedValue === "basis") {
            setValueToFactor(inputName, -0.21629522)
        }else if (selectedValue === "higherBasis") {
            setValueToFactor(inputName, 0.67119088)
        } else if (selectedValue === "havo") {
            setValueToFactor(inputName, 0)
        } else if (selectedValue === "vwo") {
            setValueToFactor(inputName, -12.08994875)
        } else {
            setValueToFactor(inputName, 0.88463779)
        }
    } else if (inputName === "educationLevelMother") {
        if (selectedValue === "elementary") {
            setValueToFactor(inputName, 0)
        } else if (selectedValue === "basis") {
            setValueToFactor(inputName, 0.15935901)
        }else if (selectedValue === "higherBasis") {
            setValueToFactor(inputName, 0.03334141)
        } else if (selectedValue === "havo") {
            setValueToFactor(inputName, 0)
        } else if (selectedValue === "vwo") {
            setValueToFactor(inputName, -13.03161926)
        } else {
            setValueToFactor(inputName, 0.03655114)
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
        const valueLocalStorage = getLocalStorageValue("career", inputNames)
        console.log(valueLocalStorage)

        if (valueLocalStorage) {
            select.value = valueLocalStorage
        }
    })
}
}

window.customElements.define("ra-form-career", FormCareer)