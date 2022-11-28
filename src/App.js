import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine'
import Chicharron from './Chicharron';
import Polvoron from './Polvoron';
import ShrimpChips from './ShrimpChips';

/** Renders routes
 *
 *  Props: None
 *
 *  State: None
 *
 *  App -> {VendingMachine: Chicharron, Polvoron, ShrimpChips}
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine/>} />
          <Route path="/chicharron" element={<Chicharron/>} />
          <Route path="/polvoron" element={<Polvoron/>} />
          <Route path="/shrimp-chips" element={<ShrimpChips/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
