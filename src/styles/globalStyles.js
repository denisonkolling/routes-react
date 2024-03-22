import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  *::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: #FFFFFF;
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb {
  background-color: #8ac788;
  border-radius: 10px;
  border: 2px solid #FFFFFF;
}
}

body {
  background-image: linear-gradient(-90deg, #7bc079 0%, #8ac788 100%);
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optmizeLegibility;
}

`