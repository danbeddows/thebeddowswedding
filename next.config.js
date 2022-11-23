module.exports = {
  pageExtensions: ["tsx"],
  async redirects() {
    return [
      {
        source: "/applemaps",
        destination:
          "https://maps.apple.com/?address=Chester%20Road,%20Plumley,%20WA16%200UA,%20England&auid=15639567001811483483&ll=53.275505,-2.437565&lsp=9902&q=The%20Holford%20Estate&_ext=CjMKBQgEEOEBCgQIBRADCgUIBhDfAQoECAoQAAoECFIQAwoECFUQDwoECFkQAgoFCKQBEAESJilZkk30paJKQDHY2dXfGJADwDnXZ3NQzKNKQEE+vcOoVHEDwFAE",
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
