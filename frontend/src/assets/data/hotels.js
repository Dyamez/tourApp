import manilaHotel from "../images/manilaHotel.jpg";
import bellagio from "../images/bellagio.tif";
import pyongyang from "../images/pyongyang.jpg";

const hotels = [
  {
    id: "20",
    title: "Manila Hotel",
    city: "Manila",
    distance: 700,
    price: 788,
    maxGroupSize: 5,
    desc: "Historical landmark in Manila",
    reviews: [
      {
        name: "Edward",
        rating: 5.0,
      },
      {
        name: "James",
        rating: 5.0,
      },
      {
        name: "Justine",
        rating: 5.0,
      },
    ],
    avgRating: 4.9,
    photo: manilaHotel,
    featured: true,
  },
  {
    id: "21",
    title: "Bellagio",
    city: "Las Vegas",
    distance: 30,
    price: 999,
    maxGroupSize: 10,
    desc: "Great Premier Hotel in Las Vegas",
    reviews: [
      {
        name: "Goku",
        rating: 5.0,
      },
      {
        name: "Krillin",
        rating: 5.0,
      },
      {
        name: "Piccolo",
        rating: 5.0,
      },
    ],
    avgRating: 4.9,
    photo: bellagio,
    featured: true,
  },
  {
    id: "22",
    title: "Ryugyong Hotel",
    city: "Pyongyang, North Korea",
    distance: 900,
    price: 200,
    maxGroupSize: 1,
    desc: "Supremely Approved with Guide Included",
    reviews: [
      {
        name: "Kim",
        rating: 5.0,
      },
      {
        name: "Psy",
        rating: 4.0,
      },
      {
        name: "BTS",
        rating: 3.5,
      },
    ],
    avgRating: 4.9,
    photo: pyongyang,
    featured: true,
  },
];

export default hotels;
