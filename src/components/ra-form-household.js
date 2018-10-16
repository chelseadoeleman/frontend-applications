import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './ra-label.js';
import '../stylesheets/shared-styles.js';
import {setNewLocalStorage} from '../helpers/setNewLocalStorage.js';

class FormHousehold extends PolymerElement {
  static get template() {
    return html`
      <style  include="shared-styles">

      </style>
    
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
                        <option value="maariedKids">Gehuwd paar met kinderen</option>
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

    setNewLocalStorage(inputName, selectedValue, "general");
  }
}

window.customElements.define('ra-form-household', FormHousehold);