import { LitElement, html } from "lit-element";

export class MyElement extends LitElement {

    constructor() {
        super();
        this.saludo="mundo";
    }

    render(){
        return html`
        <p>soy ${this.saludo}</p>
        `;
    }

    static get properties(){
        return {
            saludo: {
                type: String
            }
        }
    }
}
customElements.define("my-element" , MyElement);