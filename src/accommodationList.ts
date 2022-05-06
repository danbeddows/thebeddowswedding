import { HotelProps } from "./components/pages/accomodation/Hotel";

const theMereGolfResort: HotelProps = {
  name: "The Mere Golf Resort & Spa",
  description:
    "The Mere Golf Resort & Spa in Knutsford, Cheshire, a 4* deluxe destination offering 81 luxurious guest bedrooms.",
  priceEstimate: 3,
  link: {
    url: "https://themereresort.co.uk/",
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
  appleMaps:
    "https://maps.apple.com/?address=Manchester%20Road,%20Knutsford,%20Cheshire,%20WA16%200SU,%20England&auid=8924307650768476424&ll=53.319108,-2.392725&lsp=9902&q=Cottons%20Hotel%20%26%20Spa&_ext=CjIKBQgEEOEBCgQIBRADCgQIBhALCgQIChAACgQIUhADCgQIVRANCgQIWRABCgUIpAEQARImKaWR4IZVqEpAMebW9EhkMgPAOSNnBuN7qUpAQbqHx9+XEwPAUAQ%3D",
  googleMaps:
    "https://www.google.com/maps/place/Cottons+Hotel+%26+Spa/@53.4740486,-2.5647201,10z/data=!3m1!5s0x487a5459997592e9:0xfa17aec95bf97d83!4m8!3m7!1s0x487a546a1c45944d:0xfe588544a4e35f7f!5m2!4m1!1i2!8m2!3d53.3194444!4d-2.3927778?shorturl=1",
};

const mereCourtHotel: HotelProps = {
  name: "Mere Court Hotel",
  description:
    "Set in the heart of Cheshire, Mere Court Hotel was originally built as a wedding present for William and Amy Dunkerley in 1903 and has now been lovingly and skilfully restored as a 4-star deluxe country house hotel.",
  priceEstimate: 2,
  link: {
    url: "https://www.merecourt.co.uk/",
  },
  bookingLinks: [
    {
      type: "booking.com",
      url: "https://www.booking.com/hotel/gb/merecourthotel.en-gb.html",
    },
    {
      type: "expedia",
      url: "https://www.expedia.co.uk/Knutsford-Hotels-Mere-Court-Hotel.h1066582.Hotel-Information",
    },

    { type: "hotels.com", url: "https://uk.hotels.com/ho35130624/" },
  ],
  image: "/img/pages/accommodation/hotels/mere-court-hotel.jpg",
  googleMaps:
    "https://www.google.com/maps/place/Mere+Court+Hotel/@53.4847147,-2.5819956,10z/data=!4m8!3m7!1s0x487a551605f0ba35:0x2b60ca84a28c93dc!5m2!4m1!1i2!8m2!3d53.3438256!4d-2.4298182?shorturl=1",
  appleMaps:
    "https://maps.apple.com/?address=Warrington%20Road,%20Mere,%20Knutsford,%20Cheshire,%20WA16%200RW,%20England&auid=4543902621677806028&ll=53.344223,-2.429722&lsp=9902&q=Mere%20Court%20Hotel&_ext=CjIKBQgEEOEBCgQIBRADCgQIBhALCgQIChAACgQIUhADCgQIVRANCgQIWRABCgUIpAEQARIkKfm1NO6LoEpAMQCloE1TpATAObAVt+SMt0pAQQBbX9LQOwLA",
};

const accomList = [theMereGolfResort, cottonsHotelAndSpa, mereCourtHotel];

export default accomList;
