import React from "react";
import { getImage } from "../../shared/utility";

import "./CardTechlist.scss";

type CardTechlistProps = {
  techlist: Array<string>;
};

const CardTechlist = (props: CardTechlistProps) => {
  const { techlist } = props;
  return (
    <ul className="CardTechlist">
      {techlist.map(function (tech, key) {
        return (
          <li key={key} className="CardTechlist__item">
            <img alt="technology logo" src={getImage(tech, "tech")} />
          </li>
        );
      })}
    </ul>
  );
};

export default CardTechlist;
