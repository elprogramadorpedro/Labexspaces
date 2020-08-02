import React from "react";
import styled from "styled-components"

import {
  BrowserRouter as Router,
  Switch,
  Route} 

from "react-router-dom";
import HomePage from "./pages/HomePage";
import ApplicationPage from "./pages/ApplicationPage";
import CreateTripPage from "./pages/CreateTripPage";
import TripDetailPage from "./pages/TripDetailPage";
import TripsListPage from "./pages/TripsListPage";
import LoginPage from "./pages/LoginPage";
import { CssBaseline } from "@material-ui/core";
//import { MuiPickersUtilsProvider } from "@material-ui/pickers";
//import MomentUtils from '@date-io/date-fns';

const AppContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:16px;
`

const App = () => {
  return (
    <Router>
      {/*<MuiPickersUtilsProvider utils={MomentUtils}>*/} {/*Se coloca uma vez so para fechas e horas*/}
      <CssBaseline>
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
   <AppContainer>     
        <Switch>

        <Route path="/Login">
          <LoginPage/>
          </Route>


          <Route path="/viagens/detalhe">
          <TripDetailPage/>
          </Route>

          <Route path="/viagens">
          <TripsListPage/>
          </Route>

          <Route  path="/create">
          <CreateTripPage/>
          </Route>
          
          <Route path="/inscricao">
          <ApplicationPage/>
          </Route>  

          <Route path="/">
          <HomePage/>
          
          </Route>  
  

              </Switch>
            </AppContainer>      
           </CssBaseline>
          {/*</MuiPickersUtilsProvider>*/}
    </Router>
  );
}

export default App;


//pode crear um arquivo router o creat dentro de App.js 