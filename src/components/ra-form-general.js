import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './ra-label.js';
import '../stylesheets/shared-styles.js';
import {setNewLocalStorage} from '../helpers/setNewLocalStorage.js';

class FormGeneral extends PolymerElement {
  static get template() {
    return html`
      <style  include="shared-styles">

      </style>
    
      <form action="#" method:"post">    
        <fieldset>  
          <legend>Algemene informatie over het kind</legend>
        
            <div class="inputForm">
              <label for="firstname">Voornaam</label>
              <input name="firstname" on-change="onChangeInput" placeholder="Jane" id="firstname">
            </div>

            <div class="inputForm">
              <label for="surname">Achternaam</label>
              <input name="surname" on-change="onChangeInput" placeholder="Doe" id="surname">
            </div>

            <div class="inputForm">
              <label for="email">Email</label>
              <input name="email" on-change="onChangeInput" placeholder="jane.doe@example.com" id="email">
            </div>

            <div class="inputForm">
              <label for="genderKid">Geslacht</label>
              <select on-change="onChangeSelect" name="genderKid" id="genderKid">
                  <option value="man">Man</option>
                  <option value="woman">Vrouw</option>
              </select>
            </div>

            <div class="inputForm">
              <label for="ageKid">Leeftijd</label>
                <select on-change="onChangeSelect" name="ageKid" id="ageKid">
                  <option value="Under4">0 tot 4 jaar</option>
                  <option value="Plus4">4 tot 8 jaar</option>
                  <option value="Plus8">8 tot 12 jaar</option>
                  <option value="Plus12">12 tot 16 jaar</option>
                  <option value="Plus16">16 tot 18 jaar</option>
                </select>
            </div>

            <div class="inputForm">
            <label for="help">Hulptraject</label>
              <select on-change="onChangeSelect" name="help" id="help">
                <option value="Under20>Geen jeugdhulp zonder verblijf gehad</option>
                <option value="Plus20">Jeugdhulp zonder verblijf gehad</option>
              </select>
            </div>
        </fieldset>

      </form>
    `;
  }

  onChangeSelect (event) {
    const { target } = event
    const { options } = target
    const { name: inputName } = target
    const selectedValue = options[target.selectedIndex].value

    setNewLocalStorage(inputName, selectedValue, "general");
  }

  onChangeInput (event) {
    //Get target in event
    const { target } = event
    //Get value in target
    const { value } = target
    //name: same as input name in target
    const { name: inputName } = target

    setNewLocalStorage(inputName, value, "general");
  }

  // onChange(event){
  //   const target = event.target;
  //   const options = event.options;
  //   const selected = options[target.selectedIndex].value;
  //   console.log(selected);
  // }

}

window.customElements.define('ra-form-general', FormGeneral);