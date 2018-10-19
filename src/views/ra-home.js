import { PolymerElement, html } from "@polymer/polymer/polymer-element.js"
import "../stylesheets/shared-styles.js"

class Homeview extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      
      <div class="explanation">
        <h1>Uitleg Risicotaxatie berekenen</h1>
        <p>
          Deze beslissingondersteuningstool kan gebruikt worden door hulpverleners om een 
          objectieve risico-indicatie te krijgen op een zwaardere maatregel op basis van 
          kenmerken van het kind, de ouders en het huishouden. Onder zwaardere maatregelen 
          vallen in dit geval jeugdhulp met verblijf, jeugdbeschermingsmaatregelen en 
          jeugdreclasseringsmaatregelen.
        </p>
        
        <div class="circle">1</div>
        <p>
          Vul de vragen in naar kunnen, door te kiezen uit de verschillende opties
        </p>
      
        <div class="circle">2</div>
        <p>
          Het risicotaxatie percentage veranderd mee tijdens het invullen van de vragen.
          Daarbij ziet u gelijk onder welk risico niveau het percentage valt.
        </p>
      
        <div class="circle">3</div>
        <p>
          Klaar met invullen? Klik op afronden.
        </p>
      
        <div class="circle">4</div>
        <p>
          Heeft u nog op- en/of aanmerking op de desbetreffende vraag vul deze dan graag in.
          Door op het 'bericht' icoon te klikken.
        </p>
      
        <div class="circle">5</div>
        <p>
          Alles stappen doorlopen? Klik op opslaan.
        </p>
        
        <button on-click="clickReset">Begin opnieuw met invullen van het risicotaxatie formulier</button> 
      </div>
    `
  }

  clickReset() {
    window.localStorage.clear()
    location.reload()
  }

}

window.customElements.define("ra-home", Homeview)
