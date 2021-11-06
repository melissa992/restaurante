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

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Widget />

        <Switch>
          <Route exact path="/Inicio" component={ HomePage } />
          <Route exact path="/Nosotros" component={ NosotrosPage } />
          <Route exact path="/Menu" component={ MenuPage } />
          <Route exact path="/Servicios" component={ ServiciosPage } />
          <Route exact path="/Contactanos" component={ ContactanosPage } />
          <Route exact path="/Carrito" component={ CarritoPage } />
          <Route exact path="/Mapa" component={ MapaPage } />
          <Route exact path="/Confirmar-Compra" component={ Formulario } />

          <Redirect to="/Inicio"/>
        </Switch>
      </div>
      <FooterComponent />
    </Router>
  );
}