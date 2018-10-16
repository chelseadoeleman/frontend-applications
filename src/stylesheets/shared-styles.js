import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>

      .card {
        margin: 24px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: white;
        border-radius: 50%;
        background: lightblue;
        font-size: 30px;
        line-height: 64px;
      }

      h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
      }

      .inputForm {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    
      .inputForm > * {
          flex: 2;
      }
    
      .inputForm > label {
          flex: 1;
      }

      .inputForm label {
        margin: 1em;
        margin-left: 0;
      }

      .inputForm select {
        border-radius: .5em;
        border-style: none;
        color: rgb(108, 119, 135);
        background: rgb(232, 235, 238);
        height: 35px;
        padding: 5px;
      }

      select option {
        padding: 2em;
      }

      .inputForm input {
        border-radius: .5em;
        border-style: none;
        color: rgb(108, 119, 135);
        padding: 1em;
        background: rgb(232, 235, 238);
        margin: .5em;
        margin-left: 2em;
      }

      ::placeholder {
        color: rgb(108, 119, 135);
        font-size: 12px;
        font-family: roboto;
      }
    
      button{
        padding: .5em;
        border-radius: .5em;
        border-style: none;
        background: lightblue;
      } 

      fieldset {
        border: none;
      }

    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
