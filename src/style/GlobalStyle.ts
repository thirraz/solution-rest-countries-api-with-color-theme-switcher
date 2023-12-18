import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    // BOX-SHADOW
  --box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
		rgba(17, 17, 26, 0.05) 0px 8px 32px;

    // TEXTS
    --font-primary: "Nunito Sans", sans-serif;
    --text-size: 1.4rem;

    // SPACINGS
    --padding-md: 8rem;
    --card-gap-desktop: 5rem;
    --card-gap-mobile: 2rem;

    // ANIMATIONS
    --click-animation: clicked 0.7s;

    // RADIUS
    --sm-radius:8px;
    --md-radius:16px;

    &,&.dark-mode {
      --color-bg: hsl(207, 26%, 17%);
      --color-elements: hsl(209, 23%, 22%);
      --color-text: hsl(0, 0%, 100%);
      --color-input: hsl(0, 0%, 52%);
      --color-title-bg: hsl(207, 26%, 17%);
      --color-title: hsl(0, 0%, 100%);
    }

    &,&.light-mode {
      --color-bg: hsl(0, 0%, 98%);
      --color-elements: hsl(0, 0%, 100%);
      --color-text: hsl(200, 15%, 8%);
      --color-input: hsl(0, 0%, 52%);
      --color-title-bg: hsl(0, 0%, 77%) ;
      --color-title: hsl(200, 15%, 8%);
    }
  }

  *,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  *{    transition: background-color .3s ease-out;
}

  html{
    font-size: 62.5%;
  }

  body{
    max-width:100vw;
    min-height:100dvh;
    font-family: 'Nunito Sans',sans-serif;    
  }

  @keyframes clicked{
    0%{
      scale: .95;
    }

    100%{
      scale:1
    }
  }
`

export default GlobalStyles
