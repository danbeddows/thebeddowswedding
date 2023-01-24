import { HotelProps } from "./components/pages/accomodation/Hotel";

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

const accomList = [cottonsHotelAndSpa];

export default accomList;
