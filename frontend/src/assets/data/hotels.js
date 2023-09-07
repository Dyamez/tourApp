import manilaHotel from "../images/manilaHotel.jpg";

const hotels = [
  {
    id: "01",
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
];

export default hotels;
