const settings = {
  name: "wpfront",
  state: {
    frontity: {
      url: "https://cms.aqabah.org/",
      title: "TQNN",
      description: "Media berita dan informasi ikhwan-akhwat TQN Pontren Suryalaya. Inspirasi ketasawufan dan ketarekatan",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          activated: "off",
          menu: [
            // ["home", "/"],
            ["news", "/cat/news/"],
            ["esai", "/cat/esai/"],
            ["inspirasi", "/cat/inspirasi/"],
            ["media", "/cat/media/"],
            ["agenda", "/agenda/"],
            ["dok", "/dok/"],
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://cms.aqabah.org/",
          categoryBase: "cat", // Custom Category dari WP di menu setting permalinks 
          tagBase: "", // Custom Tag dari WP di menu setting permalinks
          homepage: "", // Custom tampilan static page dari WP di menu setting reading
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags",
  ],
};

export default settings;
