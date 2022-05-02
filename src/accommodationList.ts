import { HotelProps } from "./components/pages/accomodation/Hotel";

const theMereGolfResort: HotelProps = {
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
  appleMaps:
    "https://maps.apple.com/?address=Chester%20Road,%20Knutsford,%20WA16%206LJ,%20England&auid=10392072167547714137&ll=53.332007,-2.406070&lsp=9902&q=The%20Mere%20Golf%20Resort%20%26%20Spa&_ext=CjIKBQgEEOEBCgQIBRADCgQIBhAJCgQIChAACgQIUhANCgQIVRAMCgQIWRABCgUIpAEQARIkKbtjMp77nkpAMQADbozMcwTAOeGzv5f8tUpAQcD8kfN2CwLA",
  googleMaps:
    "https://www.google.com/maps/place/The+Mere+Golf+Resort+%26+Spa/@53.332023,-2.4083192,17z/data=!3m1!4b1!4m8!3m7!1s0x487a5502468e548b:0xc4e6700cb52d4b5b!5m2!4m1!1i2!8m2!3d53.332421!4d-2.4062476?shorturl=1",
  image: "/img/pages/accommodation/hotels/the-mere-golf-resort.jpg",
};

const cottonsHotelAndSpa: HotelProps = {
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
