import React from "react";
import Main from './components/Main'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Search from "./components/Search";

function App() {
  return (
  <>
 <BrowserRouter>
 <Main/>
 <Routes>
  <Route path="/search" element={<Search/>}/>
 </Routes>
 </BrowserRouter>
  </>
  );
}

export default App;
