module.exports = {
  pageExtensions: ["ts", "tsx"],
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
      {
        source: "/honeymoon",
        destination: "https://prezola.com/wishlists/10270430/3663762",
        permanent: false,
        basePath: false,
      },
      {
        source: "/apple-music",
        destination:
          "https://music.apple.com/gb/playlist/the-one-with-the-wedding/pl.u-ajjDu0Aq56",
        permanent: false,
        basePath: false,
      },
      ,
      {
        source: "/spotify",
        destination:
          "https://open.spotify.com/playlist/5Gtxp0pORR3cfQw8bfRuSV?si=83b7e602a6174206",
        permanent: false,
        basePath: false,
      },
    ];
  },
};
