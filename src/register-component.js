import { LitElement, html } from "lit-element";
import styleScss from "./login-componentStyle";

export class RegisterComponent extends LitElement {

    constructor() {
        super();
        this.mensaje="";
    }

    static get properties(){
        return{
            mensaje: {
                type: String
            }
        }
    }
   
    static get styles(){
        return [styleScss];
    }

    Register(){
        let username = this.shadowRoot.querySelector("#username").value;
        let lastname = this.shadowRoot.querySelector("#lastname").value;
        let email = this.shadowRoot.querySelector("#email").value;
        let cellphone = this.shadowRoot.querySelector("#cellphone").value;
        let password = this.shadowRoot.querySelector("#password").value;

        if(username == null || username == undefined || username == ""){
            this.mensaje ="Atencion.... campo vacio Username";
            return false;
        }
        if(lastname == null || lastname == undefined || lastname == ""){
            this.mensaje ="Atencion.... campo vacio lastname";
            return false;
        }
        if(email == null || email == undefined || email == ""){
            this.mensaje ="Atencion.... campo vacio email";
            return false;
        }
        if(cellphone == null || cellphone == undefined || cellphone == ""){
            this.mensaje ="Atencion.... campo vacio cellphone";
            return false;
        }
        if(password == null || password == undefined || password == ""){
            this.mensaje ="Atencion.... campo vacio Password";
            return false;
        }else{
            this.mensaje="";
        }
    }

    mostrarError(){
        return html`<div>${this.mensaje}</div>`;
    }

    render(){
        return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
             <h1 class="titulo">REGRISTRO</h1>
            <input class="cajaLogin" id="username" type="text"  placeholder="Nombre"><br><br>
            <input class="cajaLogin" id="lastname" type="text"  placeholder="Apellido"><br><br>
            <input class="cajaLogin" id="email" type="email"  placeholder="Email"><br><br>
            <input class="cajaLogin" id="cellphone" type="number"  placeholder="Telefono"><br><br>
            <input class="cajaLogin" id="password" type="password"  placeholder="password"><br><br>
            <button class="btn" @click=${(e)=>this.Register()}>Ingresar</button>
            ${this.mostrarError()}
    
        `;
    }

}
customElements.define("register-component" , RegisterComponent );