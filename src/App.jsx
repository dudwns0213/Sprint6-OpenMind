import React from "react";
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import GlobalStyle from "./styles/GlobalStyle";
import HomePage from "./pages/homepage/HomePage";
import Answer from "./pages/post/Answer";
import UserList from "./pages/post/UserList";



function App() {
  return (
    <>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/post/:id" element={<Answer/>}/>
        <Route path="/list" element={<UserList/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
