import React from "react";
import Logon from "../Imagens/logon.png";
import {  Link } from "react-router-dom";
import { DivHeader, DivLogo, DivLoginSignup,DivSignup, DivViagens, DivExperiecia, DivNos} from "./styles";

export function Headers() {
    
  return (
    <div>
      <DivHeader>
        <DivLogo>
           <Link to={'/HomePage'}>
          <img src={Logon} alt="" />
          </Link>
        </DivLogo>

        <DivLoginSignup>
        <Link to={'/login'}>
            Login
        </Link>
        </DivLoginSignup>

        <DivSignup>
        <Link to={'/inscricao'}>
            Signup
        </Link>
        </DivSignup>

        <DivViagens>
            <Link to={'/planetas'}>
               Viagens
            </Link>
        </DivViagens>

        <DivNos>
            <Link to={'/nosotros'}>
             Nós
            </Link>
        </DivNos>

        <DivExperiecia>
        <Link to={'/Experiencias'}>
             Experiencias
            </Link>
        </DivExperiecia>

      

      </DivHeader>
    </div>
  );
}
