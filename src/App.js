import React,{ StrictMode } from 'react';
import HomeProvider from "./context/homeContext";
import Routes from "./routes/routes";
import './styles/style.css'

function App() {

  return (
    <StrictMode>
      <HomeProvider>
        <Routes />
      </HomeProvider>
    </StrictMode>
  );
}

export default App;
