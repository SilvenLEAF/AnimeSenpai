import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import AuthContextProvider from './contexts/AuthContext';
import Navbar from './components/layout/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <div className="App">
        <AuthContextProvider>
          <Navbar/>
          <h1>Hello there!</h1>     

        </AuthContextProvider>
      </div>
    </BrowserRouter>

  );
}

export default App;
