# Labexspaces
Labex projeto

## Stack
Esse é um projeto de Frontend Web feito utilizando ReactJS, HTML, CSS e uma API integrada; 
e como gerenciador de pacotes do NodeJS o npm
Sobre a divisão dos arquivos, há dois grandes setores. Os `components` são 
os componentes em si do meu projeto (balão de fala, botão de enviar, 
inputs dos usuários e outros). Já os `Containers` são as páginas em si e 
podem ser pensadas como a união dos componentes para se mostrar na tela. 

##Dependências
npm install @material-ui/core@latest
npm install @material-ui/core@3.9.3
npm install @material-ui/icons
npm install styled-components
npm install axios
npm install react-router-dom
 
## Sobre Labexspaces
"Encontre as melhores viagens espaciais!"
Esse foi um dos primeiros projetos que fiz em React.

A ideia será criar uma plataforma de gerenciamento de viagens espaciais. A plataforma tem
uma parte pública e uma privada.

Ele consiste em uma página que permite ao usuário colocar seu nome e senha; 
casdastro de viagens,lista de viagens, detalhes da viagem, criar viagem
e, essas informações aparecem na tela.  

Na parte pública qualquer usuário deverá ser capaz de:

- Se inscrever para uma viagem já existente
- Na parte privada, o administrador deverá ser capaz de:

- Listar todas as Viagens
- Criar novas viagens
- Listar, aprovar e rejeitar inscrições feitas pela parte pública da aplicação

Antes de começar mexer meu  código eu precisei:
- Criar um **fluxograma** representando os caminhos que o usuário poderá percorrer na aplicação.
- Depois disso Criei um Wireframe de todas as páginas (um para cada) descritas no fluxograma. 

Principais componentes da página
- HomePage  → Para o usuário escolher entre login e formulário de inscrição
- ApplicationFormPage → Para o usuário se candidatar à viagem, página com o form de inscrição.
- ListTripsPage → Para vermos todas as viagens
- CreateTripPage → Para criarmos uma viagem
- TripDetailsPage → Para o detalhe de uma viagem em específico
- LoginPage → Para fazermos login como administrador


## Instruções para rodar
Por ser um projeto com ReactJS, há a necessidade do NodeJS. Com ele em 
sua máquina, basta abrir o terminal e navegar até o repositório clonado e 
rodar:

1. `npm install` para instalar todas as dependências;
1. `npm run start` para rodar localmente o projeto
1. `npm run build` para gerar uma versão estática do projeto 
(que ficará na pasta `build`)

## Link surge do projeto: http://hot-border.surge.sh
Para visitantes:
-Login: astrodev@gmail.com.br
-senha: 123456

## Contato
Pedro Villalba
elprogramadorpedro@gmail.com
Celular: +55 21 990554342
