import { FormNewsAndPromotions } from "../FormNewsAndPromotions";
import { Container } from "./style";

import instagram from "../../assets/044-instagram.svg";
import facebook from "../../assets/023-facebook.svg";
import youtube from "../../assets/116-youtube.svg";

import econverse from "../../assets/Grupo 1999.svg";
import vtex from "../../assets/Group 35 (1).svg";

import visa from "../../assets/Group 1351.svg"
import elo from "../../assets/elo.svg"
import alelo from "../../assets/alelo.svg"
import dinners from "../../assets/dinners.svg"
import ifood from "../../assets/ifood.svg"
import mastercard from "../../assets/mastercard.svg"
import pix from "../../assets/pix.svg"
import amex from "../../assets/amex.svg"
import ticket from "../../assets/ticket.svg"
import sodexo from "../../assets/sodexo.svg"

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
              <img src={visa} alt="visa" />
              <img src={elo} alt="elo" />
              <img src={alelo} alt="alelo" />
              <img src={dinners} alt="dinners" />
              <img src={ifood} alt="ifood" />
              <img src={mastercard} alt="mastercard" />
              <img src={pix} alt="pix" />
              <img src={amex} alt="american express" />
              <img src={ticket} alt="ticket" />
              <img src={sodexo} alt="sodexo" />
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
