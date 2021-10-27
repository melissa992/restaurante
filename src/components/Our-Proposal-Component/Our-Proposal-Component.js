import React from "react";
import proposal from '../Our-Proposal-Component/Our-Proposal.module.css';

export const OurProposal = ()=> {

  return (
  <section  className={ proposal.proposal__container } 
            id="PROPUESTA">
    <h2 className={ proposal.proposal__title }>
      Nuestra propuesta
    </h2>
    <p className={ proposal.proposal__description }>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque officiis inventore recusandae veritatis veniam totam non rerum laudantium cum iusto, debitis quisquam quo velit illo! Dolorem soluta at asperiores dignissimos aperiam molestiae tempore vitae consequuntur quisquam sequi ab rerum quo sunt enim error velit dolores placeat, ducimus itaque! Tenetur, ex consectetur iure quis alias fugit eius aliquam laboriosam illum voluptas aliquid. Ipsa recusandae delectus cumque ullam excepturi labore blanditiis magni quidem temporibus explicabo eius est vel suscipit dicta fuga, maiores sint quibusdam. Ullam adipisci suscipit excepturi. Impedit quis voluptate facere blanditiis incidunt exercitationem ipsam autem nisi deleniti, esse voluptatem minus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam repellat praesentium esse doloribus corporis, mollitia laboriosam accusamus adipisci blanditiis, beatae optio non deserunt facilis consequuntur.
    </p>
  </section>
  );
}