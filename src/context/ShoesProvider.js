import React, { useState, createContext } from "react";

export const ShoesContext = createContext();

export const ShoesProvider = (props) => {
  const [boots, setBoots] = useState([
    {
      title: "Hargrave Ankle Boot",
      id: "1",
      brand: "Superbalist",
      price: 500,
      image: "../images/boots/hargrave.png",
    },
    {
      title: "Cameron Leather",
      id: "2",
      brand: "Superbalist",
      price: 539,
      image: "../images/boots/cameron.png",
    },
    {
      title: "Grayson Brogue",
      id: "3",
      brand: "Superbalist",
      price: 420,
      image: "../images/boots/grayson.png",
    },
    {
      title: "Orca",
      id: "4",
      brand: "Superbalist",
      price: 500,
      image: "../images/boots/orca.png",
    },
    {
      title: "Jean Hiker Boots",
      id: "5",
      brand: "Superbalist",
      price: 600,
      image: "../images/boots/jean.png",
    },
    {
      title: "Dylan Hiker Boot",
      id: "6",
      brand: "Superbalist",
      price: 599,
      sale: 40,
      salePrice: 359,
      color: "Brown",
      fabrication: "Faux Leather",
      details: ["Hiking Boot", "Speed Laces", "Lace-up Design", "Rubber Sole"],
      image: "../images/boots/dylan01.png",
    },
  ]);

  return (
    <ShoesContext.Provider value={[boots]}>
      {props.children}
    </ShoesContext.Provider>
  );
};
