export default {
    app: {
      name: process.env.VUE_APP_NAME,
      version: process.env.VUE_APP_VERSION,
    },
    http: {
      root: process.env.VUE_APP_API,
    }
  }