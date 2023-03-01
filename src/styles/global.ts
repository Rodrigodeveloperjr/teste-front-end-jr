import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
		scroll-behavior: smooth;
	}

	:root {
    --color-pink: #F71963;
    --color-gray: #9F9F9F;
    --color-gray-two: #3F3F40;
    --color-gray-three: #4E4E4E;
    --color-black: #1E1E1E;
    --color-black-two: #2A2A2A;
    --color-black-three: #000000;
    --color-white: #FFFFFF;
    --color-white-two: #F6F5F2;
    --color-white-three: #F4F4F4;
    --color-white-four: #F0F0F0;
    --coloer-white-five: #F7F5F2;
    --shadow: rgba(0, 0, 0, 0.13);
    --shadow-two: rgba(57, 48, 19, 0.12);
  }

	body {
    background-color: var(--color-white);
    color: var(--color-gray-two);
  }

  button, a {
		cursor: pointer;
	}

  a {
		text-decoration: none;
	}
`;
