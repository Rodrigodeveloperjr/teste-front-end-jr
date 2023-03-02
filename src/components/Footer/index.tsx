import instagram from "../../assets/044-instagram.svg";
import facebook from "../../assets/023-facebook.svg";
import youtube from "../../assets/116-youtube.svg";

import econverse from "../../assets/Grupo 1999.svg";
import vtex from "../../assets/Group 35 (1).svg";

import { Container } from "./style";
import { FormNewsAndPromotions } from "../FormNewsAndPromotions";

const Footer = () => {
  return (
    <Container>
      <div>
        <div>
          <div>
            <h3>Sobre nós</h3>

            <nav>
              <a>Conheça</a>
              <a>COMO COMPRAR</a>
              <a>Indicação e Desconto</a>
            </nav>

            <nav className="navSocialMedia">
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={youtube} alt="youtube" />
            </nav>
          </div>
          <div>
            <h3>INFORMAÇÕES ÚTEIS</h3>

            <nav>
              <a>FALE CONOSCO</a>
              <a>DÚVIDAS</a>
              <a>Prazos de Entrega</a>
              <a>Formas de Pagamento</a>
              <a>Política de privacidade</a>
              <a>Trocas e Devoluções</a>
            </nav>
          </div>
          <div>
            <h3>FORMAS DE PAGAMENTO</h3>

            <div>
              <img />
              <img />
              <img />
              <img />
              <img />
              <img />
              <img />
              <img />
              <img />
              <img />
            </div>
          </div>
        </div>

        <FormNewsAndPromotions />
      </div>

      <div>
        <p>
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. É vedada a
          reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </p>

        <div>
          <img src={econverse} alt="econverse" />
          <img src={vtex} alt="VTEX" />
        </div>
      </div>
    </Container>
  );
};

export { Footer };
