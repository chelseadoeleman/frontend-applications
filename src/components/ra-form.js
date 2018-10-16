import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './ra-label.js';
import '../stylesheets/shared-styles.js';

class Form extends PolymerElement {
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
              <input name="genderKid" placeholder="Man" id="genderKid">
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

        <fieldset> 
        <legend>Informatie over de geboorte</legend>
            <div class="inputForm">
              <label for="ageMotherBirth">Leeftijd moeder bij geboorte</label>
              <select name="ageMotherBirth" id="ageMotherBirth">
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
              <select name="ageFatherBirth" id="ageFatherBirth">
                <option value="Under20>Jonger dan 25 jaar</option>
                <option value="Plus20">25 tot 30 jaar</option>
                <option value="Plus25">30 tot 35 jaar</option>
                <option value="Plus35">35 tot 40 jaar</option>
                <option value="Plus40">40 jaar en ouder</option>
              </select>
            </div> 
            
            <div class="inputForm">
            <label for="ageDifference">Leeftijdsverschil moeder en vader</label>
              <select name="ageDifference" id="ageDifference">
                <option value="Under20>Minder dan 5 jaar</option>
                <option value="Plus20">Meer dan 5 jaar</option>
              </select>
            </div>  

            <div class="inputForm">
            <label for="ethnicity">Herkomst Ouders</label>
              <select name="ethnicity" id="ethnicity">
                <option value="Under20>Beide ouders Nederlands</option>
                <option value="Plus20">Beide ouders niet Nederlands</option>
                <option value="Plus20">Een ouder Nederlands de ander niet</option>
              </select>
            </div>
        </fieldset>
        
        <fieldset>
          <legend>Werk & opleiding kind</legend>
            <div class="inputForm">
            <label for="education">Soort onderwijs van het kind</label>
              <select name="education" id="education">
                <option value="regular">Regulier onderwijs</option>
                <option value="nonRegular">Niet-regulier onderwijs</option>
                <option value="unknown">Onbekend</option>
              </select>
            </div>

            <div class="inputForm">
            <label for="educationNow">Huidig onderwijs van het kind</label>
              <select name="educationNow" id="educationNow">
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
              <select name="educationChange" id="educationChange">
                <option value="noChange">Opschalen of gelijkblijvend</option>
                <option value="down">Afschalen</option>
                <option value="unknown">Onbekend</option>
              </select>
            </div>

            <div class="inputForm">
            <label for="dropout">Voortijdig schoolverlater</label>
              <select name="dropout" id="dropout">
                <option value="resumeEducation">Door in onderwijs</option>
                <option value="unknown">Onbekend</option>
                <option value="notApply">Niet van toepassing</option>
                <option value="startingQualification">Uit onderwijs met startkwalificatie</option>
                <option value="dropout">Voortijdig school verlaten</option>
              </select>
            </div>

            <div class="inputForm">
            <label for="educationLevelFather">Hoogst behaalde onderwijsniveau vader</label>
              <select name="educationLevelFather" id="educationLevelFather">
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
              <select name="educationLevelMother" id="educationLevelMother">
  ]             <option value="elementary">Basisonderwijs</option>
                <option value="basis">Vmbo b/k, mbo 1 en mbo 2</option>
                <option value="higherBasis">Vmbo g/t, mbo 3 en mbo 4</option>
                <option value="havo">Havo onderbouw, Havo onderbouw, Hbo-bachelor</option>
                <option value="vwo">Vwo of Wo bachelor</option>
                <option value="unknown">Onderwijs onbekend</option>
              </select>
            </div>
        </fieldset> 

        <fieldset> 
          <legend>Huishouden gezin</legend>
            <div class="inputForm">
            <label for="housing">Soort woning</label>
              <select name="housing" id="housing">
                <option value="house">Eigen woning</option>
                <option value="rentalWithAllowance">Huurwoning met huurtoeslag</option>
                <option value="rentalNoAllowance">Huurwoning zonder huurtoeslag</option>
                <option value="unknown">Onbekend</option>
              </select>
            </div>

            <div class="inputForm">
            <label for="household">Soort woning</label>
              <select name="household" id="household">
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
              <select name="seperated" id="seperated">
                <option value="no">Nee</option>
                <option value="yes">Ja</option>
              </select>
            </div>
        </fieldset> 

        <fieldset>
        <legend>Geestelijke gezondheid kind</legend>
          <div class="inputForm">
          <label for="support">Als slachtoffer bekend bij slachtofferhulp</label>
            <select name="support" id="support">
              <option value="no">Nee</option>
              <option value="yes">Ja</option>
            </select>
          </div>
        </fieldset> 

        <fieldset>
        <legend>Maatschappelijke participatie ouders</legend>
          <div class="inputForm">
          <label for="socialParticipationFather">Maatschappelijke participatie van vader</label>
            <select name="socialParticipationFather" id="socialParticipationFather">
              <option value="no">Werkend of overig actief</option>
              <option value="yes">Geen werk en niet actief</option>
              <option value="unknown">Onbekend</option>
            </select>
          </div>

          <div class="inputForm">
          <label for="socialParticipationMother">Maatschappelijke participatie van moeder</label>
            <select name="socialParticipationMother" id="socialParticipationMother">
              <option value="no">Werkend of overig actief</option>
              <option value="yes">Geen werk en niet actief</option>
              <option value="unknown">Onbekend</option>
            </select>
          </div>

          <div class="inputForm">
          <label for="statusFather">Socio economische status van vader</label>
            <select name="statusFather" id="statusFather">
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
            <select name="statusMother" id="statusMother">
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

        <fieldset>
        <legend>Justitie</legend>
          <div class="inputForm">
            <label for="crime">Kind in het verleden verdacht geweest van een delict</label>
            <select name="crime" id="crime">
              <option value="no">Nee</option>
              <option value="yes">Ja</option>
            </select>
          </div>

          <div class="inputForm">
            <label for="halt">Kind in aanraking geweest met bureau HALT voor een delict</label>
            <select name="halt" id="halt">
              <option value="no">Nee</option>
              <option value="yes">Ja</option>
            </select>
          </div>

          <div class="inputForm">
            <label for="crimeParents">Vader of moeder verdacht van delict in het verleden</label>
            <select name="crimeParents" id="crimeParents">
              <option value="no">Nee</option>
              <option value="yes">Ja</option>
            </select>
          </div>

          <div class="inputForm">
            <label for="crimeFather">Vader verdacht van delict in het verleden</label>
            <select name="crimeFather" id="crimeFather">
              <option value="no">Nee</option>
              <option value="yes">Ja</option>
            </select>
          </div>

          <div class="inputForm">
            <label for="crimeMother">Moeder verdacht van delict in het verleden</label>
            <select name="crimeMother" id="crimeMother">
              <option value="no">Nee</option>
              <option value="yes">Ja</option>
            </select>
          </div>
        </fieldset> 

      </form>
    `;
  }
}

window.customElements.define('ra-form', Form);
