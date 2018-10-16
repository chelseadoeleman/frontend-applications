import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './ra-label.js';
import '../stylesheets/shared-styles.js';

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
              <input name="firstname" placeholder="Jane" id="firstname">
            </div>

            <div class="inputForm">
              <label for="surname">Achternaam</label>
              <input name="surname" placeholder="Doe" id="surname">
            </div>

            <div class="inputForm">
              <label for="email">Email</label>
              <input name="email" placeholder="jane.doe@example.com" id="email">
            </div>

            <div class="inputForm">
              <label for="genderKid">Geslacht</label>
              <select name="genderKid" id="genderKid">
                  <option value="men">Man</option>
                  <option value="woman">Vrouw</option>
              </select>
            </div>

            <div class="inputForm">
              <label for="ageKid">Leeftijd</label>
                <select name="ageKid" id="ageKid">
                  <option value="Under4">0 tot 4 jaar</option>
                  <option value="Plus4">4 tot 8 jaar</option>
                  <option value="Plus8">8 tot 12 jaar</option>
                  <option value="Plus12">12 tot 16 jaar</option>
                  <option value="Plus16">16 tot 18 jaar</option>
                </select>
            </div>

            <div class="inputForm">
            <label for="help">Hulptraject</label>
              <select name="help" id="help">
                <option value="Under20>Geen jeugdhulp zonder verblijf gehad</option>
                <option value="Plus20">Jeugdhulp zonder verblijf gehad</option>
              </select>
            </div>
        </fieldset>
        
      </form>
    `;
  }
}

window.customElements.define('ra-form-general', FormGeneral);
