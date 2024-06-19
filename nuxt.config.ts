// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        // Bootstrap
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity: "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
          crossorigin: "anonymous"
        }
      ],
      script: [
        // Plotly
        {
          // src: "plotly-2.32.0.min.js",
        },
        {
          src: "https://cdn.plot.ly/plotly-2.32.0.min.js"
        },
        // Bootstrap
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        }
      ]
    }
  },
  // Adiciona o arquivo CSS global à configuração.
  // css:['~/assets/main.css'],
  devtools: { enabled: true },
  // Eu obrigo a funcionar como uma aplicação normal
  // de 'Client Side Rendering'. Mas seria legal aprender
  // a usar o 'Server Side Rendering'.
  ssr: false,
  // nitro: {
  //   // IIS options default
  //   iis: {
  //     // merges in a pre-existing web.config file to the nitro default file
  //     mergeConfig: true,
  //     // overrides the default nitro web.config file all together
  //     overrideConfig: false,
  //   },
  // },
});