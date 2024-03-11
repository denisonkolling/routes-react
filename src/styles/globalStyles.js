import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-image: linear-gradient(-90deg, #7bc079 0%, #8ac788 100%);
  font-family: Roboto, sans-serif;
}
`