import pic01 from "../images/pic1.jpg";
import pic02 from "../images/pic2.jpg";
import pic03 from "../images/pic3.jpg";
import pic04 from "../images/pic4.jpg";
import pic05 from "../images/pic5.jpg";
import pic06 from "../images/pic6.jpg";
import pic07 from "../images/pic7.jpg";

const events = [
  {
    id: "01",
    title: "Big Ben",
    city: "London",
    distance: 300,
    price: 998,
    maxGroupSize: 10,
    desc: "Big Ben",
    reviews: [
      {
        name: "James",
        rating: 4.9,
      },
    ],
    avgRating: 4.5,
    photo: pic01,
    featured: true,
  },
  {
    id: "02",
    title: "Indonesia",
    city: "Indonesia",
    distance: 400,
    price: 400,
    maxGroupSize: 8,
    desc: "paradise",
    reviews: [
      {
        name: "mary",
        rating: 3.6,
      },
    ],
    avgRating: 4.5,
    photo: pic02,
    featured: true,
  },
  {
    id: "03",
    title: "Thailand",
    city: "Thailand",
    distance: 500,
    price: 800,
    maxGroupSize: 8,
    desc: "Dreamy",
    reviews: [
      {
        name: "Randy",
        rating: 4.0,
      },
    ],
    avgRating: 4.5,
    photo: pic03,
    featured: true,
  },
  {
    id: "04",
    title: "Thailand",
    city: "Thailand",
    distance: 500,
    price: 700,
    maxGroupSize: 8,
    desc: "Spectacular",
    reviews: [
      {
        name: "George",
        rating: 3.6,
      },
    ],
    avgRating: 4.9,
    photo: pic04,
    featured: true,
  },
  {
    id: "05",
    title: "Indonesia",
    city: "Indonesia",
    distance: 500,
    price: 940,
    maxGroupSize: 8,
    desc: "Relaxing",
    reviews: [
      {
        name: "Samantha",
        rating: 3.6,
      },
    ],
    avgRating: 4.5,
    photo: pic05,
    featured: false,
  },
  {
    id: "06",
    title: "Spring",
    city: "Japan",
    distance: 500,
    price: 634,
    maxGroupSize: 8,
    desc: "Breathtaking",
    reviews: [
      {
        name: "Pat",
        rating: 4.5,
      },
    ],
    avgRating: 4.4,
    photo: pic06,
    featured: false,
  },
  {
    id: "07",
    title: "Frenchy",
    city: "France",
    distance: 500,
    price: 674,
    maxGroupSize: 8,
    desc: "Very French",
    reviews: [
      {
        name: "Mario",
        rating: 4.3,
      },
    ],
    avgRating: 4.2,
    photo: pic07,
    featured: false,
  },
  {
    id: "08",
    title: "Thailand",
    city: "Thailand",
    distance: 500,
    price: 578,
    maxGroupSize: 8,
    desc: "Fun",
    reviews: [
      {
        name: "Gerard",
        rating: 4.1,
      },
    ],
    avgRating: 4.6,
    photo: pic03,
    featured: false,
  },
];

export default events;
