import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inknut Antiqua", serif;
    background: #f5f5f5;
    color: #333;
    text-align: center;
  }
`
