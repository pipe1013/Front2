import { LitElement, html } from "lit-element";


export class LoginComponent extends LitElement {

    constructor() {
        super();
        this.saludo="mundo";
        this.mensaje="";
    }

    static get properties(){
        return{
            saludo:{
                type: String
            },
            mensaje: {
                type: String
            }
        }
    }
   

    ingresarLogin(){
        let username = this.shadowRoot.querySelector("#username").value;
        let password = this.shadowRoot.querySelector("#password").value;

        if(username == null || username == undefined || username == ""){
            this.mensaje ="Atencion.... campo vacio Username";
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
        <title>Document</title>
        <style>
            /* Estilos para superponer la primera tarjeta */
            .overlay-card {
                position: relative;
            }
    
            .overlay-card .card {
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Añade una sombra para crear el efecto de superposición */
                border-radius: 15px; /* Redondea los bordes de la tarjeta */
                background-color: #c0c0c0; /* Cambia el color de la tarjeta a gris */
            }
        </style>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-lg-4 overlay-card">
                    <!-- Tarjeta principal (campos de entrada) -->
                    <div class="card" style="background-color: #CEDAE3;">
                        <div class="card-body">
                            <!-- Contenido de la tarjeta principal -->
                            <div class="d-flex justify-content-center mb-3">
                                <!-- Utiliza Bootstrap Icons -->
                                <i class="bi bi-person-fill" style="font-size: 3rem;"></i>
                            </div>
                            <form>
                                <div class="mb-3">
                                    <label for="username" class="form-label">
                                        <!-- Utiliza FontAwesome para el ícono de usuario -->
                                        <i class="fa fa-user"></i> Usuario
                                    </label>
                                    <input class="form-control" id="username" type="email" placeholder="Nombre">
                                </div>
                                <div class="mb-3">
                                    <label for "password" class="form-label">
                                        <!-- Utiliza Bootstrap Icons para el ícono de candado -->
                                        <i class="bi bi-lock-fill"></i> Contraseña
                                    </label>
                                    <input class="form-control" id="password" type="password" placeholder="Password">
                                </div>
                                <div class="mb-3 form-check d-flex justify-content-between align-items-center">
                                    <div>
                                        <input type="checkbox" class="form-check-input" id="rememberMe">
                                        <label class="form-check-label" for="rememberMe">Recuérdame</label>
                                    </div>
                                    <a href="#">Recuperar Contraseña</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- Tarjeta secundaria (botón de inicio de sesión) -->
                <div class="col-12 col-md-8">
                    <div class="card " style="background-color: #CEDAE3;">
                        <div class="card-body">
                            <!-- Botón de Login -->
                            <button class="btn btn-primary btn-block">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            ${this.mostrarError()}
    
        `;
    }

}
customElements.define("login-component" , LoginComponent );