const settings = {
  name: "wpfront",
  state: {
    frontity: {
      url: "https://tqnnews.com",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development. Frontity is the easiest way to create lightning fast websites using WordPress and React. Open source and free to use.",
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
            ["inspirasi", "/kanal/inspirasi/"],
            ["blog", "/kanal/blog/"],
            ["media", "/kanal/media/"],
            ["agenda", "/agenda/"],
            ["about us", "/about-us/"],
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
          url: "https://tqnnews.com",
          categoryBase: "kanal", // Kategori dari WP-TQNN
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
