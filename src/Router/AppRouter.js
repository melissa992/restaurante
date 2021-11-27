import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { HomePage } from "../pages/Home/Home";
import { MenuPage } from "../pages/Menu-page/Menu-page";
import { Navbar } from "../components/Navbar-component/Navbar-component";
import { NosotrosPage } from "../pages/Nosotros-page/Nosotros-page";
import { ServiciosPage } from "../pages/Servicios-page/Servicios-page";
import { ContactanosPage } from "../pages/Contactanos-page/Contactanos-page";
import { CarritoPage } from "../pages/Carrito-page/Carrito-page";
import { Widget } from "../components/Social-Networks-component/Social-Networks-component";
import { MapaPage } from "../pages/Mapa-page/Mapa-page";
import { FooterComponent } from "../components/Footer-component/Footer-component";
import { Formulario } from "../pages/Confirmar-compra-page/Confirmar-compra";
import { Login } from "../pages/Login-page/Login-page";
import { Registration } from '../pages/Registration-page/Registration-page'
import { DashboardAdmin } from "../pages/Dashboard-admin-page/Dashboard-admin";
import { InfoRestaurante } from "../pages/InformacionRest-page/InformacionRest-page";
import { Empleados } from "../pages/GestorEmpleados-page/GestorEmpleados-page";
import { Comentario } from "../pages/GestorComentarios-page/GestorComentarios-page";
import { Platos } from "../pages/GestorPlatos-page/GestorPlatos-page";
import { Reservas } from "../pages/GestorReservas-page/GestorReservas-page";
import { AgregarPlato } from "../pages/AgregarPlato-page/AgregarPlato";
import { EditarPlato } from "../pages/EditarPlato-page/EditarPlato-page";
import { Servicios } from "../pages/GestorServicios-page/GestorServicios-page";
import { AgregarServicio } from "../pages/AgregarServicio-page/AgregarServicio-page";
import { EditarServicio } from "../pages/EditarServicio-page/EditarServicio-page";
import { DashboardClient } from "../pages/Dashboard-client-page/Dashboard-client";
import { AgregarComentario } from "../pages/AgregarComentario-page/AgregarComentario";
import { EditarReserva } from "../pages/EditarReserva/EditarReserva";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Widget />

        <Switch>
          <Route exact path="/Inicio" component={HomePage} />
          <Route exact path="/Nosotros" component={NosotrosPage} />
          <Route exact path="/Menu" component={MenuPage} />
          <Route exact path="/Servicios" component={ServiciosPage} />
          <Route exact path="/Contactanos" component={ContactanosPage} />
          <Route exact path="/Carrito" component={CarritoPage} />
          <Route exact path="/Mapa" component={MapaPage} />
          <Route exact path="/Confirmar-Compra" component={Formulario} />
          <Route exact path="/Ingresar" component={Login} />
          <Route exact path="/Registro" component={Registration} />
          <Route exact path="/DashboardAdmin" component={DashboardAdmin} />
          <Route exact path="/InfoRestaurante" component={InfoRestaurante} />
          <Route exact path="/Empleados" component={Empleados} />
          <Route exact path="/Comentarios" component={Comentario} />
          <Route exact path="/Platos" component={Platos} />
          <Route exact path="/Preguntas" component={Preguntas} />
          <Route exact path="/Reservas" component={Reservas} />
          <Route exact path="/VerServicios" component={Servicios} />
          <Route exact path="/AgregarPlato" component={AgregarPlato} />
          <Route exact path="/EditarPlato/:id" component={EditarPlato} />
          <Route exact path="/AgregarServicio" component={AgregarServicio} />
          <Route exact path="/EditarServicio/:id" component={EditarServicio} />
          <Route exact path="/DashboardClient" component={DashboardClient} />
          <Route exact path="/AgregarComentario" component={AgregarComentario} />
          <Route exact path="/EditarReserva/:id" component={ EditarReserva}/>


          <Redirect to="/Inicio" />
        </Switch>
      </div>
      <FooterComponent />
    </Router>
  );
}
