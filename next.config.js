module.exports = {
  pageExtensions: ["tsx"],
  async redirects() {
    return [
      {
        source: "/applemaps",
        destination:
          "https://maps.apple.com/?address=Holford%20Mill,%20Chester%20Road,%20Plumley,%20Knutsford,%20WA16%200UA,%20England&ll=53.277014,-2.441687&q=Holford%20Mill&_ext=EiYpuJuW/+GiSkAxTd2JXfWXA8A5NnG8WwikSkBBdVUH0DB5A8BQBA%3D%3D",
        permanent: false,
        basePath: false,
      },
      {
        source: "/googlemaps",
        destination: "https://goo.gl/maps/qNtTC4xCpFxhiYm68",
        permanent: false,
        basePath: false,
      },
    ];
  },
};
