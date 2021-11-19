const settings = {
  name: "wpfront",
  state: {
    frontity: {
      url: "https://cms.aqabah.org",
      title: "TQNN",
      description: "Media berita dan informasi ikhwan-akhwat TQN Pontren Suryalaya, serta inspirasi ketasawufan dan ketarekatan",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["home", "/"],
            ["news", "/kanal/news/"],
            ["esai", "/kanal/blog/"],
            ["inspirasi", "/kanal/inspirasi/"],
            ["media", "/kanal/media/"],
            ["agenda", "/agenda/"],
            ["tqn", "/docs/"],
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
          url: "https://cms.aqabah.org",
          // categoryBase: "kanal", // Kategori dari WP-TQNN 
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
