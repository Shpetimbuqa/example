import { generate as id } from "shortid";

const images = [
  {
    _id: id(),
    title: "Example 1",
    img: "/img/birds.jpeg",
    description: "Bird",
    featured: true,
  },
  {
    _id: id(),
    title: "Example 2",
    img: "/img/highway.jpeg",
    description: "Street",
    featured: true,
  },
  {
    _id: id(),
    title: "Example 3",
    img: "/img/NashPoint.png",
    description: "Nothing",
    featured: false,
  },
  {
    _id: id(),
    title: "Example 4",
    img: "/img/Sea.png",
    description: "Beach",
    featured: true,
  },
  {
    _id: id(),
    title: "Example 5",
    img: "/img/Philipines.png",
    description: "Country",
    featured: true,
  },
];

export const fetchData = () => {
  return new Promise((resolve) => setTimeout(() => resolve(images), 1000));
};
