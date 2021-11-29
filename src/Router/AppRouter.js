import React from "react";
import jwt_decode from 'jwt-decode'
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
import { ActualizarEmpleado } from "../pages/GestorEmpleados-page/ActualizarEmpleado";
import { VerReservasCliente } from "../pages/VerReservasCliente/VerReservasCliente";
import { NuevoEmpleado } from "../pages/GestorEmpleados-page/NuevoEmpleado";

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
          <Route exact path="/DashboardAdmin" render={() => {
            const permission = jwt_decode(localStorage.getItem('token')).role === 0
            return permission ? <DashboardAdmin /> : <Redirect to='/Inicio' />
          }} />
          <Route exact path="/InfoRestaurante" render={() => {
            const permission = jwt_decode(localStorage.getItem('token')).role === 0
            return permission ? <InfoRestaurante /> : <Redirect to='/Inicio' />
          }} />
          <Route exact path="/Empleados" render={() => {
            const permission = jwt_decode(localStorage.getItem('token')).role === 0
            return permission ? <Empleados /> : <Redirect to='/Inicio' />
          }} />
          <Route exact path="/Comentarios" render={() => {
            const permission = jwt_decode(localStorage.getItem('token')).role === 0
            return permission ? <Comentario /> : <Redirect to='/Inicio' />
          }} />
          <Route exact path="/Platos" render={() => {
            const permission = jwt_decode(localStorage.getItem('token')).role === 0
            return permission ? <Platos /> : <Redirect to='/Inicio' />
          }} />
          <Route exact path="/Reservas" render={() => {
            const permission = jwt_decode(localStorage.getItem('token')).role === 0
            return permission ? <Reservas /> : <Redirect to='/Inicio' />
          }} />
          <Route exact path="/VerServicios" render={() => {
            const permission = jwt_decode(localStorage.getItem('token')).role === 0
            return permission ? <Servicios /> : <Redirect to='/Inicio' />
          }} />
          <Route exact path="/AgregarPlato" render={() => {
            const permission = jwt_decode(localStorage.getItem('token')).role === 0
            return permission ? <AgregarPlato /> : <Redirect to='/Inicio' />
          }} />
          <Route exact path="/EditarPlato/:id" render={() => {
            const permission = jwt_decode(localStorage.getItem('token')).role === 0
            return permission ? <EditarPlato /> : <Redirect to='/Inicio' />
          }} />
          <Route exact path="/AgregarServicio/:id" render={() => {
            const permission = jwt_decode(localStorage.getItem('token')).role === 0
            return permission ? <AgregarServicio /> : <Redirect to='/Inicio' />
          }} />
          <Route exact path="/EditarServicio/:id" render={() => {
            const permission = jwt_decode(localStorage.getItem('token')).role === 0
            return permission ? <EditarServicio /> : <Redirect to='/Inicio' />
          }} />
          <Route exact path="/DashboardClient" render={() => {
            const permission = jwt_decode(localStorage.getItem('token')).role === 1
            return permission ? <DashboardClient /> : <Redirect to='/Inicio' />
          }} />
          <Route exact path="/AgregarComentario" render={() => {
            const permission = jwt_decode(localStorage.getItem('token')).role === 1
            return permission ? <AgregarComentario /> : <Redirect to='/Inicio' />
          }} />
          <Route exact path="/EditarReserva/:id" render={() => {
            const permission = jwt_decode(localStorage.getItem('token')).role === 0
            return permission ? <EditarReserva /> : <Redirect to='/Inicio' />
          }} />
          <Route exact path="/VerReservasCliente" render={() => {
            const permission = jwt_decode(localStorage.getItem('token')).role === 1
            return permission ? <VerReservasCliente /> : <Redirect to='/Inicio' />
          }} />
          <Route exact path="/NuevoEmpleado" render={() => {
            const permission = jwt_decode(localStorage.getItem('token')).role === 0
            return permission ? <NuevoEmpleado /> : <Redirect to='/Inicio' />
          }} />
          <Route exact path="/ActualizarEmpleado/:id" render={() => {
            const permission = jwt_decode(localStorage.getItem('token')).role === 0
            return permission ? <ActualizarEmpleado /> : <Redirect to='/Inicio' />
          }} />

          <Redirect to="/Inicio" />
        </Switch>
      </div>
      <FooterComponent />
    </Router>
  );
}
