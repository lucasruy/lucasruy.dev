module.exports = {
  siteMetadata: {
    description: "Site pessoal de Lucas Ruy, desenvolvedor frontend, que atua na área profissionalmente desde 2016. Atualmente residindo em São Paulo, Brasil.",
    locale: "pt-BR",
    showThemeLogo: true,
    title: "Lucas Ruy",
    formspreeEndpoint: "https://formspree.io/f/mlezgoeb",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss")(require("./tailwind.config")('classic')),
          require("postcss-input-range"),
          require("autoprefixer"),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: 'content/',
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
