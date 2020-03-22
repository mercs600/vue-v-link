const VLink = ({ extendLink, rules, attrs }) => {
  return {
    name: 'VLink',
    functional: true,
    extends: extendLink,
    props: {
      rules: {
        type: Array,
        required: false,
        default: () => []
      },
      external: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    render (createElement, { props, data, children }) {
      const defaultRules = rules || ['http(s)?:', 'ftp:', 'mailto:']
      const externalRules = props.rules.length
        ? [].concat(defaultRules, props.rules)
        : defaultRules
      const externalTest = new RegExp(externalRules.join('|'), 'i')
      const isExternal = props.external || externalTest.test(props.to)

      return createElement(
        isExternal ? 'a' : extendLink.extendOptions.name,
        {
          ...data,
          attrs: {
            ...data.attrs,
            ...(isExternal
              ? {
                href: props.to,
                ...attrs
              }
              : {})
          },
          props: {
            ...props,
            ...(isExternal ? {} : { to: props.to || '/' })
          }
        },
        children
      )
    }
  }
}

export default VLink
