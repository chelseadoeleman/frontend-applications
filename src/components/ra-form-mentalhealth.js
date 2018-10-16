import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './ra-label.js';
import '../stylesheets/shared-styles.js';
import {setNewLocalStorage} from '../helpers/setNewLocalStorage.js';


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

    setNewLocalStorage(inputName, selectedValue, "general");
  }
  
  onChange(event){
    const target = event.target;
    const options = event.options;
    const selected = options[target.selectedIndex].value;
    console.log(selected);
  }

}

window.customElements.define('ra-form-mentalhealth', FormMentalHealth);
