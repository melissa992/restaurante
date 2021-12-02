import React from "react";
import proposal from '../Our-Proposal-Component/Our-Proposal.module.css';

export const OurProposal = ()=> {

  return (
  <section id="PROPUESTA" className={ proposal.proposal__container }>
    <h2 className={ proposal.proposal__title }>
      Nosotros somos
    </h2>
    <p className={ proposal.proposal__description }>
    Un día Albert citó a su amigo Javier para comentarle que quería abrir un restaurante, una de esas asignaturas pendientes. Para ello necesitaba un socio en el que confiase ciegamente y allí en un sofá de su casa, cerveza en mano, se empezó a forjar la idea. No tardaron en empezar a hablar de una de sus pasiones, la hamburguesa, e hicieron un recorrido por las mejores hamburgueserías de Chicago, NY, Londres, Berlín… y llegaron a una conclusión: no hay hamburgueserías que traten su producto desde un punto de vista estrictamente gourmet.

Javier no dudó en contactar con su buen amigo Paco Pérez, Chef reconocido, cinco estrellas Michelin. Paco lo vio clarísimo desde el principio “Es una idea fantástica pero arriesgada, ¿os atrevéis?” Para hacer hamburguesas gourmet la cocina debe funcionar como un restaurante gourmet, con mucho personal de cocina cualificado y bien organizado.
    </p>
  </section>
  );
}