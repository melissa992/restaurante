import React from "react";
import { HashLink } from 'react-router-hash-link';

export const SubLink = ( { subLink }) => {

  return (
    <li>
      <HashLink to={ subLink.url }>
        {subLink.title}
      </HashLink>
    </li>
  )
}