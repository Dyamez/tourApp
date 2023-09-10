import manilaHotel from "../images/manilaHotel.jpg";
import bellagio from "../images/bellagio.tif";
import pyongyang from "../images/pyongyang.jpg";
import hotelCali from "../images/hotelCali.jpg";
import morgan from "../images/morgan.jpeg";
import mizpah from "../images/mizpah.webp";

const hotels = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
  {
    id: "4",
    title: "Hotel California",
    city: "Baja, California",
    distance: 300,
    price: 100,
    maxGroupSize: 4,
    desc: "Plenty of room, Any time of year, You can find it here.",
    reviews: [
      {
        name: "Don",
        rating: 4.0,
      },
      {
        name: "Joe",
        rating: 4.6,
      },
      {
        name: "Timothy",
        rating: 4.5,
      },
    ],
    avgRating: 4.9,
    photo: hotelCali,
    featured: false,
  },
  {
    id: "5",
    title: "Emily Morgan Hotel",
    city: "San Antonio, Texas",
    distance: 200,
    price: 150,
    maxGroupSize: 3,
    desc: "Not Spooky.",
    reviews: [
      {
        name: "Freddy",
        rating: 4.0,
      },
      {
        name: "Jason",
        rating: 4.6,
      },
    ],
    avgRating: 4.9,
    photo: morgan,
    featured: false,
  },
  {
    id: "6",
    title: "Mizpah Hotel",
    city: "Tonopah Nevada",
    distance: 200,
    price: 300,
    maxGroupSize: 2,
    desc: "Victorian inspired, Ladies in red approved.",
    reviews: [
      {
        name: "Lady",
        rating: 4.1,
      },
      {
        name: "Red",
        rating: 4.2,
      },
      {
        name: "Sherlock",
        rating: 3.9,
      },
    ],
    avgRating: 4.9,
    photo: mizpah,
    featured: false,
  },
];

export default hotels;
