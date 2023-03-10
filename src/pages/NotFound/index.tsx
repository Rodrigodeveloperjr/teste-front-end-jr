import { Helmet, HelmetProvider } from "react-helmet-async";
import logo from "../../assets/Group 35.svg";
import { Link } from "react-router-dom";
import { Container } from "./style";
import React from "react";

const NotFound = () => {
  const currentUrl = window.location.href.split("/")[3];

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Página não encontrada | VTEX" />
      </HelmetProvider>
      <Container>
        <div>
          <div>
            <Link to="/">
              <img src={logo} alt="VTEX" />
            </Link>

            <p>
              <b>404.</b> Isso é um erro.
            </p>

            <p>
              A URL solicitada /{currentUrl} não foi encontrada neste servidor.
            </p>
            <p>Isso é tudo que sabemos.</p>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export { NotFound };
