import React from "react";
import { Carousel } from "../../components/Carousel-component/Carousel-component";
import { EventsComponent } from "../../components/Events-component/Events-component";
import { OurProposal } from "../../components/Our-Proposal-Component/Our-Proposal-Component";
import { Recommendations } from "../../components/Recommendations-component/Recommendations-component";
import { Testimonials } from "../../components/Testimonials-component/Testimonials-component";
import { Formulario } from "../Confirmar-compra-page/Confirmar-compra";

export const HomePage = () => {

  return (
    <div>
      <Carousel />
      <OurProposal />
      <Recommendations />
      <EventsComponent />
      <Testimonials />
    </div>
  )
}