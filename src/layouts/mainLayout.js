import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";

import MetropolisMedium from "../../static/Metropolis-Medium.otf";
import MetropolisRegular from "../../static/Metropolis-Regular.otf";
import MetropolisSemiBold from "../../static/Metropolis-SemiBold.otf";

const GlobalStyle = createGlobalStyle`
  @font-face {
		font-family: 'Metropolis';
		src: local('Metropolis'), 
		url(${MetropolisMedium}) format('opentype'),
		url(${MetropolisRegular}) format('opentype'),
		url(${MetropolisSemiBold}) format('opentype');
		font-style: normal;
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}

	html, body {
		margin: 0;
		padding: 0;
	}

	html {
		min-height: 100%;
		font-family: Metropolis;
	}

	body {
		min-height: 100%;
		min-width: 100%;
  }
`;

export default function MainLayout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Navbar />
    </>
  );
}
