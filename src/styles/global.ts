import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --red: #F15156;
    --white:  #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: var(--white);
  }

  button {
    cursor: pointer;
  }

  body, input, button, textarea, select  {
    font: 400 16px 'Nunito', sans-serif;
  }
`
