import { PolymerElement, html } from "@polymer/polymer/polymer-element.js"
import "../stylesheets/shared-styles.js"
import "./ra-risk-assessment.js"
import { setNewLocalStorage } from "../helpers/setNewLocalStorage.js"
import { getLocalStorageValue } from "../helpers/getLocalStorageValue.js"
import { setValueToFactor } from "../helpers/setValueToFactor.js"

class FormBirth extends PolymerElement {
  static get template() {
    return html`
        <style  include="shared-styles">
    
        </style>

        <div class="riskAssessment">
            <ra-risk-assessment></ra-risk-assessment>
        </div>
    
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
                    <option value="Under20">Jonger dan 25 jaar</option>
                    <option value="Plus20">25 tot 30 jaar</option>
                    <option value="Plus25">30 tot 35 jaar</option>
                    <option value="Plus35">35 tot 40 jaar</option>
                    <option value="Plus40">40 jaar en ouder</option>
                </select>
            </div> 

            <div class="inputForm">
                <label for="ageDifference">Leeftijdsverschil moeder en vader</label>
                <select on-change="onChangeSelect" name="ageDifference" id="ageDifference">
                    <option value="Under5">Minder dan 5 jaar</option>
                    <option value="Plus5">Meer dan 5 jaar</option>
                </select>
            </div>  

            <div class="inputForm">
                <label for="ethnicity">Herkomst Ouders</label>
                <select on-change="onChangeSelect" name="ethnicity" id="ethnicity">
                    <option value="Nl">Beide ouders Nederlands</option>
                    <option value="notNl">Beide ouders niet Nederlands</option>
                    <option value="Nl-other">Een ouder Nederlands de ander niet</option>
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

    setNewLocalStorage(inputName, selectedValue, "birth")

    if (inputName === "ageMotherBirth") {
        if (selectedValue === "Under20") {
            setValueToFactor(inputName, 0)
        } else if (selectedValue === "Plus20") {
            setValueToFactor(inputName, 0.10851786)
        } else if (selectedValue === "Plus25") {
            setValueToFactor(inputName, -0.08840876)
        } else if (selectedValue === "Plus30") {
            setValueToFactor(inputName, 0)
        } else if (selectedValue === "Plus35") {
            setValueToFactor(inputName, 0.23987545)
        } else {
            setValueToFactor(inputName, -0.11153052)
        }
    } else if (inputName === "ageFatherBirth") {
        if (selectedValue === "Under25") {
            setValueToFactor(inputName, 0)
        } else if (selectedValue === "Plus25") {
            setValueToFactor(inputName, 0.031069)
        }else if (selectedValue === "Plus30") {
            setValueToFactor(inputName, 0)
        } else if (selectedValue === "Plus35") {
            setValueToFactor(inputName, -0.2162358)
        } else {
            setValueToFactor(inputName, -0.32645414)
        }
    } else if (inputName === "ageDifference") {
        if (selectedValue === "Under5") {
            setValueToFactor(inputName, 0)
        }  else {
            setValueToFactor(inputName, 0.28580939)
        }
    } else if (inputName === "ethnicity") {
        if (selectedValue === "Nl") {
            setValueToFactor(inputName, 0)
        } else if (selectedValue === "notNl") {
            setValueToFactor(inputName, 0.16972268)
        } else {
            setValueToFactor(inputName, 0.08942976)
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
        const valueLocalStorage = getLocalStorageValue("birth", inputNames)
        console.log(valueLocalStorage)

        if (valueLocalStorage) {
            select.value = valueLocalStorage
        }
    })
}
}

window.customElements.define("ra-form-birth", FormBirth)