import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine'
import Chicharron from './Chicharron';
import Polvoron from './Polvoron';
import ShrimpChips from './ShrimpChip';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/chicharron" element={<Chicharron/>} />
          <Route path="/polvoron" element={<Polvoron/>} />
          <Route path="/shrimp-chips" element={<ShrimpChips/>} />
          <Route path="/" element={<VendingMachine/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
