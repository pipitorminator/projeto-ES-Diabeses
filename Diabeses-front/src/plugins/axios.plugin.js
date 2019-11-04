import axios from 'axios'

const AxiosPlugin = {
  install (Vue, options) {
    Vue.mixin({
      methods: {
        $api () {
          const updateProgress = (e) => {
            this.$NProgress().set((Math.floor(e.loaded * 1.0) / e.total))
          }
          const http = axios.create({
            baseURL: options.http.root,
            onDownloadProgress: updateProgress,
            onUploadProgress: updateProgress
          })
          return http
        },
        $http () {
          const http = axios.create()
          return http
        }
      }
    })
  }
}

export default AxiosPlugin
