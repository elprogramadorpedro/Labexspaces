import styled from "styled-components";
import banner from "../pics/banner.svg";
import sol from "../pics/sol.svg";
import urano from "../pics/urano.svg";
import saturno from "../pics/saturno.svg";
import venus from "../pics/venus.svg";


export const DivBodys=styled.body`
 //border: 1px solid red;
    //position: relative;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction:column;
    overflow: hidden;
`

export const DivParrafoAgencia=styled.div`
display:flex;
`
export const ParrafoEspecialistas=styled.p`

font-weight: 300;
font-size: 18px;
line-height: 21px;
margin-left:55px;

letter-spacing: 0.5em;

color:#E3E0D1;

`

export const ParrafoAgencia=styled.p`
display:flex;
justify-content:flex-end;
margin-right:500px;

padding-top:60px;
font-weight: 300;
font-size: 48px;
line-height: 56px;
letter-spacing: 0.1em;

color: #FFFFFF;
`

export const Divimgs=styled.div`
width:100%;
height:60vh;
background-image: url(${sol});
flex-direction:column;

display:flex;

padding:0;

box-sizing: border-box;

`
export const DivPositionBottonn = styled.div`
justify-content:flex-end;
display:flex;

`

export const DivBottonn = styled.div`
width:200px;;
height:50px;

	box-shadow:inset 0px 1px 0px 0px #e184f3;
	background:linear-gradient(to bottom, #760071 5%, #a20dbd 100%);
	background-color:#760071;
	border-radius:6px;
	border:1px solid #a511c0;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	
;
font-weight: 300;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.1em;

color: #FFFFFF;
     
     display:flex;
     justify-content:center;
     align-items:center;
     margin-right:1100px;
	text-decoration:none;
	text-shadow:0px 1px 0px #9b14b3;

&:hover {
	background:linear-gradient(to bottom, #a20dbd 5%, #c123de 100%);
	background-color:#a20dbd;
}

` 



export const DivPositionimg1=styled.div`
width:100%;
height:100px;

position:relative;
background:#242424;
display:flex;
flex-direction:column;

`

export const DivPosititexto=styled.div`
display: flex;
justify-content:center;
flex-direction:column;

`

export const ParrafoSomos = styled.p`

font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: 0.1em;
color:white;
position: relative;
top:-100px;
padding-left:115px;
padding-right:115px;
`

export const ParrafoPositonSomos=styled.div`
display: flex;
justify-content:center;
flex-direction:column;
`


export const ParrafoPositonGraca=styled.div`
display: flex;
justify-content:center;
flex-direction:column;
`

export const ParrafoGracas=styled.p`
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: 0.1em;
color:white;
position: relative;
top:-100px;
padding-left:120px;
padding-right:120px;
position:relative;
top:-120px;
`

export const Parrafoporquesomosmelhores=styled.p`

font-weight: 100;
font-size: 22px;
line-height: 37px;
text-align: center;
letter-spacing: 0.3em;
position: relative;
color: #FFFFFF;
top:-25px;
`

export const ParrafoEspaciais= styled.p`
font-weight: 100;
font-size: 22px;
line-height: 37px;
text-align: center;
letter-spacing: 0.5em;
position:relative;
color: #FFFFFF;
top:-80px;
`

export const Divpositionlogoplaneta= styled.div`
width:100%;
height:40px;

`
export const Imagedecoplaneta=styled.img`
display:flex;
position: relative;
top:-290px;
right:70px;
transform:rotate(136.12deg);
-ms-transform:rotate(136.12deg); /* IE 9 */
-webkit-transform:rotate(136.12deg); /* Opera, Chrome, and Safari */
`

export const Imagedecoplaneta1 = styled.img`
display:flex;
position: relative;
top:-290px;
right:-250px;
transform:rotate(190.12deg);
-ms-transform:rotate(190.12deg); /* IE 9 */
-webkit-transform:rotate(190.12deg); /* Opera, Chrome, and Safari */
`

export const Imagedecoplaneta2 = styled.img`
display:flex;
position: relative;
top:-290px;
right:-450px;
transform:rotate(350deg);
-ms-transform:rotate(350eg); /* IE 9 */
-webkit-transform:rotate(350deg); /* Opera, Chrome, and Safari */
`
export const Imagedecoplaneta3 = styled.img`
display:flex;
position: relative;
top:-290px;
right:-750px;
transform:rotate(-190.12deg);
-ms-transform:rotate(-190.12deg); /* IE 9 */
-webkit-transform:rotate(-190.12deg); /* Opera, Chrome, and Safari */
`












export const DivinfoPlanetas= styled.div`
width:100%auto;
height:200px;
background:#242424;

display:flex;
justify-content:space-around;
`
export const Divinfo1 = styled.div`
width:200px;
height:50px;
border:1px solid red;
justify-content:center;
display:flex;
`
export const DivPaUrano = styled.p`

font-weight: 500;
font-size: 18px;
line-height: 21px;
text-align: center;
letter-spacing: 0.1em;
color: #FFFFFF;
`


export const Divinfo2 = styled.div`
width:200px;
height:50px;
border:1px solid red;
`

export const DiviPaSaturno= styled.p`
font-weight: 500;
font-size: 18px;
line-height: 21px;
text-align: center;
letter-spacing: 0.1em;
color: #FFFFFF;

`


export const Divinfo3 = styled.div`
width:200px;
height:50px;
border:1px solid red;
`
export const DivPaPluton = styled.p`

font-weight: 500;
font-size: 18px;
line-height: 21px;
text-align: center;
letter-spacing: 0.1em;
color: #FFFFFF;
`




















export const Divimgs1=styled.div`

background-color:red;
width:150px;
height:150px;

     -webkit-transform: rotate(45deg);
     -moz-transform: rotate(45deg);
     -ms-transform: rotate(45deg);
     -o-transform: rotate(45deg);
     transform: rotate(45deg);


     border-radius: 50px;
background: #E0722D;
box-shadow:  20px 20px 60px #be6126, 
             -20px -20px 60px #ff8334;
background-image: url(${urano});


`
export const  Divimgs2=styled.div`
background-color:red;
width:150px;
height:150px;

     -webkit-transform: rotate(45deg);
     -moz-transform: rotate(45deg);
     -ms-transform: rotate(45deg);
     -o-transform: rotate(45deg);
     transform: rotate(45deg);


     border-radius: 50px;
background: #E0722D;
box-shadow:  20px 20px 60px #be6126, 
             -20px -20px 60px #ff8334;
             background-image: url(${saturno});

`
export const Divimgs3=styled.div`
background-color:red;
width:150px;
height:150px;

     -webkit-transform: rotate(45deg);
     -moz-transform: rotate(45deg);
     -ms-transform: rotate(45deg);
     -o-transform: rotate(45deg);
     transform: rotate(45deg);


     border-radius: 50px;
background: #E0722D;
box-shadow:  20px 20px 60px #be6126, 
             -20px -20px 60px #ff8334;
background-image: url(${venus});

`
export const Divanuncios= styled.div`

width: 100vw;
height: 313px;

box-sizing:border-box;
background: #242424;
justify-content:space-around;
align-items:center;
display:flex;
margin-top:0px;
padding:0;

box-sizing: border-box;
`

export const Divconsulta = styled.div`
display:flex;
width: 100%;
height: 602px;
left: 0px;
top: 863px;

background:#0E0010;
border: 1px solid #000000;
box-sizing: border-box;
`

export const Divparrafo= styled.div`

display:flex;
width: 100%;
height: 214px;
left: 0px;
top: 1459px;
align-items:center;
background: #2D0028;
justify-content:center;

`





export const Divanunciobacground=styled.div`
display:flex;
width: 100%;
height: 362px;
background-image: url(${banner});
`

export const DivPositionConsultas =styled.div`
display: flex;
position:relative;
right:350px;
top:200px;
width:80%;
height:300px;

border-radius: 38px;
background: #0E0010;
box-shadow:  29px 29px 57px #080009, 
             -29px -29px 57px #140017;
`

export const DivParrafoAdoramos = styled.p`
font-weight: normal;
font-size: 14px;
line-height: 40px;
text-align: center;
letter-spacing: 0.1em;

color: #FFFFFF;
`
export const DivParrafoAspas=styled.p`
font-weight: normal;
font-size: 144px;
line-height: 169px;
text-align: center;
letter-spacing: 0.1em;

color: #FFFFFF;
`


