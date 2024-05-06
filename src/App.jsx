import React from "react";
import { BrowserRouter as Router} from 'react-router-dom';
import GlobalStyle from "./styles/GlobalStyle";
import HomePage from "./pages/HomePage";
import RoutesComponent from "./components/Routes";



function App() {
  return (
    <>
    <Router>
      <RoutesComponent />
      <GlobalStyle />
      <HomePage/>
    </Router>
    </>
  );
}

export default App;
