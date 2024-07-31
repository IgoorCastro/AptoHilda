import { useEffect } from 'react';
import './App.css';
import RoutesApp from './Routes';

function App() {
  useEffect(() => {
    document.title = 'Apartamento Hilda';
  });

  return (
    <RoutesApp />
  );
}

export default App;
