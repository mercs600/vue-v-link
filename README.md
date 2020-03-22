# vue-v-link

Detect external/(nuxt-link/router-link) by simple functional component. You can use the same component for each link type.

# Install
## npm

```sh
npm install vue-v-link
```

## yarn 

```sh
yarn add vue-v-link
```

# How to use 

## Global Registration

```js
import VLink from 'vue-v-link'

Vue.use(VLink)
```

Simple usage

```html
<v-link to="/internal-page"> internal page </v-link>
<v-link to="https://google.com"> external page </v-link>
<v-link to="mailto:joe@kowalski.com"> mailto link </v-link>
```