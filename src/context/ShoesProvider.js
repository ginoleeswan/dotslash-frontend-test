import React, { useState, createContext } from "react";

import dylan01 from "../images/boots/dylan01.png";
import dylan02 from "../images/boots/dylan02.png";
import dylan03 from "../images/boots/dylan03.png";
import dylan04 from "../images/boots/dylan04.png";
import dylan05 from "../images/boots/dylan05.png";

import hargrave from "../images/boots/hargrave.png";
import cameron from "../images/boots/cameron.png";
import grayson from "../images/boots/grayson.png";
import orca from "../images/boots/orca.png";
import jean from "../images/boots/jean.png";

export const ShoesContext = createContext();

export const ShoesProvider = (props) => {
  const [boots] = useState([
    {
      title: "Hargrave Ankle Boot",
      id: "1",
      brand: "Superbalist",
      price: 500,
      sale: true,
      discount: 40,
      image: hargrave,
    },
    {
      title: "Cameron Leather",
      id: "2",
      brand: "Superbalist",
      price: 539,
      lowStock: true,
      image: cameron,
    },
    {
      title: "Grayson Brogue",
      id: "3",
      brand: "Superbalist",
      price: 420,
      sale: true,
      discount: 40,
      lowStock: true,
      image: grayson,
    },
    {
      title: "Orca",
      id: "4",
      brand: "Superbalist",
      price: 500,
      sale: true,
      discount: 40,
      lowStock: true,
      image: orca,
    },
    {
      title: "Jean Hiker Boots",
      id: "5",
      brand: "Superbalist",
      price: 600,
      image: jean,
    },
    {
      title: "Dylan Hiker Boot",
      id: "6",
      brand: "Superbalist",
      price: 599,
      sale: true,
      discount: 40,
      salePrice: 359,
      color: "Brown",
      fabrication: "Faux Leather",
      details: ["Hiking Boot", "Speed Laces", "Lace-up Design", "Rubber Sole"],

      images: [
        {
          original: dylan01,
          thumbnail: dylan01,
        },
        {
          original: dylan02,
          thumbnail: dylan02,
        },
        {
          original: dylan03,
          thumbnail: dylan03,
        },
        {
          original: dylan04,
          thumbnail: dylan04,
        },
        {
          original: dylan05,
          thumbnail: dylan05,
        },
      ],
    },
  ]);

  return (
    <ShoesContext.Provider value={[boots]}>
      {props.children}
    </ShoesContext.Provider>
  );
};
