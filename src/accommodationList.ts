const theMereGolfResort = {
  name: "The Mere Golf Resort & Spa",
  description:
    "The Mere Golf Resort & Spa in Knutsford, Cheshire, a 4* deluxe destination offering 81 luxurious guest bedrooms.",
  priceEstimate: 3,
  link: {
    url: "https://themereresort.co.uk/",
    label: "Visit The Mere Golf Resort website",
  },
  bookingLinks: [
    {
      type: "booking.com",
      url: "https://www.booking.com/hotel/gb/themeregolfresort.en-gb.html",
    },
    {
      type: "expedia",
      url: "https://www.expedia.co.uk/Knutsford-Hotels-The-Mere-Golf-Resort-Spa.h4801165.Hotel-Information",
    },
    {
      type: "hotels.com",
      url: "https://uk.hotels.com/ho399405/",
    },
  ],
  image: "/img/pages/accommodation/hotels/the-mere-golf-resort.jpg",
};

const cottonsHotelAndSpa = {
  name: "Cotton's Hotel & Spa",
  description:
    "A great location in the heart of Cheshire, yet with easy access to Tatton Park and the quaint village of Knutsford.",
  priceEstimate: 3,
  link: {
    url: "https://www.cottonshotel.co.uk/",
    label: "Visit Cotton's Hotel & Spa website",
  },
  bookingLinks: [
    {
      type: "booking.com",
      url: "https://www.booking.com/hotel/gb/cottons-a-shire-spa.en-gb.html",
    },
    {
      type: "expedia",
      url: "https://www.expedia.co.uk/Knutsford-Hotels-Cottons-Hotel-Spa.h891773.Hotel-Information",
    },
    { type: "hotels.com", url: "https://uk.hotels.com/ho204345/" },
  ],
  image: "/img/pages/accommodation/hotels/cottons-hotel-spa.jpg",
};

const accomList = [theMereGolfResort, cottonsHotelAndSpa];

export default accomList;
