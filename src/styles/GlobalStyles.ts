'use client'

import styled, { createGlobalStyle, css } from 'styled-components'

const styles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`

export const Container = styled.div`
  margin-top: 4vmin;
  padding-inline: 2rem;
  width: min(1110px, 100% - 1rem * 2);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const GlobalStyles = createGlobalStyle`
  ${styles}
`
export default GlobalStyles
