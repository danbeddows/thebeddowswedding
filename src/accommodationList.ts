import { HotelProps } from "./components/pages/accomodation/Hotel";

const theMereGolfResort: HotelProps = {
  name: "The Mere Golf Resort & Spa",
  description:
    "The Mere Golf Resort & Spa in Knutsford, Cheshire, a 4* deluxe destination offering 81 luxurious guest bedrooms.",
  priceEstimate: 4, // £200+
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
  priceEstimate: 3, // £150-200
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
  priceEstimate: 2, // £100-150
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

const lostockTravelodge: HotelProps = {
  name: "Lostock Travelodge",
  description:
    "Travelodge Northwich Lostock Gralam offers a family-friendly environment alongside helpful amenities such as free parking.",
  priceEstimate: 1, // <£100
  link: {
    url: "https://www.travelodge.co.uk/hotels/520/Northwich-Lostock-Gralam-hotel?checkIn=22/04/2023&checkOut=23/04/2023&rooms[0][adults]=2&rooms[0][children]=0",
  },
  bookingLinks: [],
  image: "/img/pages/accommodation/hotels/lostock-travelodge.jpg",
  googleMaps:
    "https://www.google.com/maps/place/Travelodge+Northwich+Lostock+Gralam/@53.4283824,-2.5890047,10z/data=!4m22!1m13!4m12!1m4!2m2!1d-2.0709376!2d53.5560192!4e1!1m6!1m2!1s0x487af8ed71f8d61f:0x6d0eb4bb81823333!2slostock+travelodge!2m2!1d-2.4549946!2d53.2715103!3m7!1s0x487af8ed71f8d61f:0x6d0eb4bb81823333!5m2!4m1!1i2!8m2!3d53.2715103!4d-2.4549946",
  appleMaps:
    "https://maps.apple.com/?address=10%20Cheshire%20Business%20Park,%20Cheshire%20Ave,%20Lostock%20Gralam,%20Northwich,%20CW9%207UA,%20England&auid=13930028748534928211&ll=53.272047,-2.458516&lsp=9902&q=Travelodge%20Northwich%20Lostock%20Gralam&_ext=CjIKBQgEEOEBCgQIBRADCgQIBhALCgQIChAACgQIUhADCgQIVRANCgQIWRABCgUIpAEQARImKW6YlBUdokpAMQPEhFvntAPAOextunFDo0pAQS0lc+kjlgPAUAQ%3D",
};

const roseAndCrown: HotelProps = {
  name: "Rose & Crown Inn",
  description:
    "Set in Knutsford in the Cheshire Region, 2.5 miles from Tatton Park, Rose & Crown Inn features a sun terrace. Guests can enjoy the on-site bar. Free WiFi is featured and free private parking is available on site.",
  priceEstimate: 2, // £100-150
  link: {
    url: "https://www.knutsfordroseandcrown.co.uk/",
  },
  bookingLinks: [
    {
      type: "booking.com",
      url: "https://www.booking.com/hotel/gb/rose-39-n-crown.en-gb.html",
    },
    {
      type: "hotels.com",
      url: "https://uk.hotels.com/ho632195808/rose-crown-inn-knutsford-united-kingdom/",
    },
    {
      type: "expedia",
      url: "https://www.expedia.co.uk/Knutsford-Hotels-Rose-Crown-Inn.h19724869.Hotel-Information",
    },
  ],
  image: "/img/pages/accommodation/hotels/rose-and-crown-inn.jpg",
  googleMaps:
    "https://www.google.com/maps/place/Rose+%26+Crown/@53.3042636,-2.3752822,17z/data=!3m1!4b1!4m8!3m7!1s0x487a546c9273332f:0x5466a20d6d2ca1d3!5m2!4m1!1i2!8m2!3d53.3042715!4d-2.3730725?shorturl=1",
  appleMaps:
    "https://maps.apple.com/?address=62%20King%20St,%20Knutsford,%20WA16%206DT,%20England&auid=2026411623853097427&ll=53.304256,-2.373090&lsp=9902&q=The%20Rose%20and%20Crown&_ext=CjIKBQgEEOEBCgQIBRADCgQIBhALCgQIChAACgQIUhADCgQIVRANCgQIWRABCgUIpAEQARImKSOo0CBWpkpAMfbbljD6CgPAOaF99nx8p0pAQdyBMakw7ALAUAQ%3D",
};

const accomList = [
  theMereGolfResort,
  cottonsHotelAndSpa,
  mereCourtHotel,
  lostockTravelodge,
  roseAndCrown,
];

export default accomList;
