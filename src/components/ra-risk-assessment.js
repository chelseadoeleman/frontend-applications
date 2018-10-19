import { PolymerElement, html } from "@polymer/polymer/polymer-element.js"
import "../stylesheets/shared-styles.js"
import { calculateRiskAssessment } from "../helpers/calculateRiskAssessment"


class RiskAssessment extends PolymerElement {
  static get template() {
    return html`
        <style include="shared-styles">

        </style>

      
        <h3 class="riskWarning">
            [[riskText]]
        </h3>
        <h2 class="RiskPercentage">
            [[calculateRiskPercentage()]]%
        </h2>

    `
  }
  static get properties() {
    return {
      riskText: {
        type: String
      }
    }
  }

  constructor() {
    super()
    this.riskText = "Laag risico"
  }

  // Shoutout to Maikel van Veen
  calculateRiskPercentage () {
        try {
            return calculateRiskAssessment(JSON.parse(window.localStorage.getItem("factors")))
        } catch (error) {
            throw new Error (error)          
        }
  }

  // access to shadow Dom tree, call super to override ready in shadow Dom tree.
  ready () {
      super.ready()
      // launch fake event to recalculate the value in factor to show percentage in real-time
      document.addEventListener("launchEvent", () => {
            const shadowDomNode = this.shadowRoot.querySelector(".RiskPercentage")
                try {
                    // retrigger calculation when another option is clicked
                    const calculatePercentage = calculateRiskAssessment(JSON.parse(window.localStorage.getItem("factors")))
                    // add to h2
                    // change text above percentage with information about that percentage
                    // if for example the percentage poises a high risk
                    const shadowDomNodeText = this.shadowRoot.querySelector(".riskWarning")
                    // checks value of calculatepercentage and adds text    
                    if (calculatePercentage >= 5) {
                            shadowDomNodeText.textContent = `${"Hoog risico"}`
                        } else if (calculatePercentage >= 2) {
                            shadowDomNodeText.textContent = `${"Middelmatig risico"}`
                        } else {
                            shadowDomNodeText.textContent = `${"Laag risico"}`
                        }
                    shadowDomNode.textContent = `${calculatePercentage}%`
                } catch (error) {
                    throw new Error (error)
                }
      })
  }

}

window.customElements.define("ra-risk-assessment", RiskAssessment)
