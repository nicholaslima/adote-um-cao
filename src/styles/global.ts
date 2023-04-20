import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --red:#F15156;
    --red-500:#E44449;
    --white:#FFFFFF;
    --yellow:#F4D35E;
    --background:#FDECED;
    --blue:#0D3B66;
    --gray:#8FA7B2;
    --gray-light: #DDE3F0;
    --gray-light-3: rgba(13,59,102,0.05);
    --gray-light-2: #E6F7FB;
    --gray-blue: #D3E2E5;
    --orange: #F27006;
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
