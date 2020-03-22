import VLink from './VLink.js'

const install = (Vue, options) => {
  options = {
    extendLink: Vue.component('NuxtLink') || Vue.component('RouterLink'),
    tag: 'VLink',
    ...options
  }
  Vue.component(options.tag, VLink(options))
}

const plugin = {
  install
}

export { VLink }
export default plugin
