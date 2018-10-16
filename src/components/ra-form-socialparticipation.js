import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './ra-label.js';
import '../stylesheets/shared-styles.js';
import {setNewLocalStorage} from '../helpers/setNewLocalStorage.js';

class FormSocialParticipation extends PolymerElement {
  static get template() {
    return html`
      <style  include="shared-styles">

      </style>
        
      <fieldset>
        <legend>Maatschappelijke participatie ouders</legend>
            <div class="inputForm">
                <label for="socialParticipationFather">Maatschappelijke participatie van vader</label>
                <select on-change="onChangeSelect" name="socialParticipationFather" id="socialParticipationFather">
                    <option value="no">Werkend of overig actief</option>
                    <option value="yes">Geen werk en niet actief</option>
                    <option value="unknown">Onbekend</option>
                </select>
            </div>

            <div class="inputForm">
                <label for="socialParticipationMother">Maatschappelijke participatie van moeder</label>
                <select on-change="onChangeSelect" name="socialParticipationMother" id="socialParticipationMother">
                    <option value="no">Werkend of overig actief</option>
                    <option value="yes">Geen werk en niet actief</option>
                    <option value="unknown">Onbekend</option>
                </select>
            </div>

            <div class="inputForm">
                <label for="statusFather">Socio economische status van vader</label>
                <select on-change="onChangeSelect" name="statusFather" id="statusFather">
                    <option value="welfareRecipient">Bijstandsontvanger</option>
                    <option value="incapacitated">Arbeidsongeschikte</option>
                    <option value="socialServices">Ontvanger overige sociale voorzieningen</option>
                    <option value="unemploymentBenefits">Ontvanger werkloosheidsuitkering</option>
                    <option value="official">Ambtenaar</option>
                    <option value="director">Directeur groot aandeelhouder</option>
                    <option value="active">Overig actief</option>
                    <option value="nonActive">Overig niet actief</option>
                    <option value="retired">Pensioen</option>
                    <option value="fatherUnknown">Vader onbekend</option>
                    <option value="employee">Werknemer particulier bedrijf</option>
                    <option value="self-employed">Zelfstandige</option>
                    <option value="noIncome">Zonder inkomen</option>
                    <option value="student">Student</option>
                </select>
            </div>


            <div class="inputForm">
                <label for="statusMother">Socio economische status van moeder</label>
                <select on-change="onChangeSelect" name="statusMother" id="statusMother">
                    <option value="welfareRecipient">Bijstandsontvanger</option>
                    <option value="incapacitated">Arbeidsongeschikte</option>
                    <option value="socialServices">Ontvanger overige sociale voorzieningen</option>
                    <option value="unemploymentBenefits">Ontvanger werkloosheidsuitkering</option>
                    <option value="official">Ambtenaar</option>
                    <option value="director">Directeur groot aandeelhouder</option>
                    <option value="active">Overig actief</option>
                    <option value="nonActive">Overig niet actief</option>
                    <option value="retired">Pensioen</option>
                    <option value="fatherUnknown">Vader onbekend</option>
                    <option value="employee">Werknemer particulier bedrijf</option>
                    <option value="self-employed">Zelfstandige</option>
                    <option value="noIncome">Zonder inkomen</option>
                    <option value="student">Student</option>
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

window.customElements.define('ra-form-socialparticipation', FormSocialParticipation);