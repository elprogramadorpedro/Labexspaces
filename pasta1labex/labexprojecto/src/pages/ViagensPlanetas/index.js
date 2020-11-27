import React from "react";
import { useHistory } from "react-router-dom";
import Titlesroboto from "../../components/Titlesroboto";
import { Footer } from "../Footer";
import planetica from "../pics/planetica.svg";
import {
  DivBodys,
  Divimgs,
  Divimgs3,
  Divimgs2,
  Divimgs1,
  Divanuncios,
  Divconsulta,
  Divparrafo,
  Divanunciobacground,
  ParrafoAgencia,
  ParrafoEspecialistas,
  DivParrafoAgencia,
  DivBottonn,
  DivPositionBottonn,
  DivPositionimg1,
  DivPosititexto,
  Parrafoporquesomosmelhores,
  ParrafoEspaciais,
  ParrafoPositonSomos,
  ParrafoSomos,
  ParrafoPositonGraca,
  ParrafoGracas,
  DivinfoPlanetas,
  Imagedecoplaneta,
  Imagedecoplaneta1,
  Imagedecoplaneta2,
  Imagedecoplaneta3,
  Divinfo1,
  Divinfo2,
  Divinfo3,
  DivPaUrano,
  DiviPaSaturno,
  DivPaPluton,
  DivPositionConsultas,
  DivParrafoAdoramos,
  DivParrafoAspas,
} from "./styles";

function ViagensPlanetas() {
  const history = useHistory();
  history.push("/planetas");

  return (
    <DivBodys>
      <Divimgs>
        <ParrafoAgencia>LABEX AGÊNCIA DE VIAGENS</ParrafoAgencia>
        <DivParrafoAgencia>
          <ParrafoEspecialistas>
            Especialistas em viagens espaciais.
          </ParrafoEspecialistas>
        </DivParrafoAgencia>

        <DivPositionBottonn>
          <DivBottonn>Ler Mais</DivBottonn>
        </DivPositionBottonn>
      </Divimgs>

      <DivPositionimg1>
        <DivPosititexto>
          <Parrafoporquesomosmelhores>
            POR QUE SOMOS MELHORES PARA PLANEJAR SEU VIAGEM
          </Parrafoporquesomosmelhores>
        </DivPosititexto>

        <DivPosititexto>
          <ParrafoEspaciais>ESPACIAIS?</ParrafoEspaciais>
        </DivPosititexto>

        <ParrafoPositonSomos>
          <ParrafoSomos>
            Somos os aliados perfeitos para trabalhar em Viagens de Negócios,
            somos especialistas em fornecer soluções e propostas que se adaptem
            às suas necessidades, buscando sempre a qualidade dos dois serviços
            que oferecemos para que sua experiência seja agradável.
          </ParrafoSomos>
        </ParrafoPositonSomos>

        <ParrafoPositonGraca>
          <ParrafoGracas>
            Graças à nossa capacidade de personalizar suas viagens, conseguimos
            superar suas expectativas, nos destacando por ser mais que um Agente
            de Viagens.
          </ParrafoGracas>
        </ParrafoPositonGraca>
      </DivPositionimg1>

      <Divanuncios>
        <Divimgs1></Divimgs1>
        <Divimgs2></Divimgs2>
        <Divimgs3></Divimgs3>
      </Divanuncios>

      <DivinfoPlanetas>
        <Divinfo1>
          <DivPaUrano>Executivo de conta</DivPaUrano>
        </Divinfo1>

        <Divinfo2>
          <DiviPaSaturno>Especialistas em viagens</DiviPaSaturno>
        </Divinfo2>

        <Divinfo3>
          <DivPaPluton>Experiência</DivPaPluton>
        </Divinfo3>
      </DivinfoPlanetas>

      <Divparrafo>
        <DivParrafoAspas>"</DivParrafoAspas>
        <DivParrafoAdoramos>
          Adoramos estar em contacto com os nossos clientes, marcamos visitas e{" "}
          <br /> deixamos-nos visitá-lo nos seus escritórios para que conheça a
          nossa forma <br />
          de trabalhar.
        </DivParrafoAdoramos>
      </Divparrafo>

      <Divanunciobacground></Divanunciobacground>
      <Footer></Footer>
    </DivBodys>
  );
}
export default ViagensPlanetas;
