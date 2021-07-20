import React, { Component } from "react";

const dragTest = [
  {
    id: "1",
    name: "The Empress",
    image: "../images/cards/m03.jpg",
  },
  {
    id: "2",
    name: "The Empreror",
    image: "../images/cards/m04.jpg",
  },
  {
    id: "3",
    name: "The Hanged Man",
    image: "../images/cards/m12.jpg",
  },
  {
    id: "4",
    name: "Two of Cups",
    image: "../images/cards/c02.jpg",
  },
  {
    id: "5",
    name: "Four of Wands",
    image: "../images/cards/w04.jpg",
  },
];

class HomePage extends Component {
  renderCards = () => {
    dragTest.map(({ id, name, image }) => {
      return (
        <li className="tarot-card" key={id}>
          <p className="tarot-name">{name}</p>
          <img src={image} alt={name} />
        </li>
      );
    });
  };

  render() {
    return <ul>{this.renderCards}</ul>;
  }
}

export default HomePage;
