import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Pages/index';
import './css/style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
