import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./Components/Login/Login";
import {Register} from "./Components/Register/Register";
import {Profaile} from "./Components/Profail/Profaile";
import {NotFound} from "./Components/NotFound/NotFound";
import {PassRecovery} from "./Components/PassRecovery/PassRecovery";
import {NewPassword} from "./Components/NewPassword/NewPassword";
import {Test} from "./Components/Test/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/Login'} element={<Login/>}/>
          <Route path={'/Register'} element={<Register/>}/>
          <Route path={'/Profaile'} element={<Profaile/>}/>
          <Route path={'/NotFound'} element={<NotFound/>}/>
          <Route path={'/PassRecovery'} element={<PassRecovery/>}/>
          <Route path={'/NewPassword'} element={<NewPassword/>}/>
        </Routes>
      </BrowserRouter>
      <Test/>
    </div>
  );
}

export default App;
