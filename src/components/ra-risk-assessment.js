import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './ra-label.js';
import '../stylesheets/shared-styles.js';
import { calculateRiskAssessment } from '../helpers/calculateRiskAssessment'


class RiskAssessment extends PolymerElement {
  static get template() {
    return html`
        <style include="shared-styles">

        </style>
        
        <h2 class="RiskPercentage">[[calculateRiskPercentage()]]%</h2>

    `;
  }

  calculateRiskPercentage () {
      try {
          return calculateRiskAssessment(JSON.parse(window.localStorage.getItem('factors')))
      } catch (error) {
          throw new Error (error)          
      }
  }

  ready () {
      super.ready()
      // launch fake event
      document.addEventListener('launchEvent', () => {
            const shadowDomNode = this.shadowRoot.querySelector('.RiskPercentage')
                try {
                    // retrigger calculation when another option is clicked
                    const calculatePercentage = calculateRiskAssessment(JSON.parse(window.localStorage.getItem('factors')))
                    // add to h2
                    shadowDomNode.textContent = `${calculatePercentage}%`
                } catch (error) {
                    throw new Error (error)
                }
      })
  }

}

window.customElements.define('ra-risk-assessment', RiskAssessment);
