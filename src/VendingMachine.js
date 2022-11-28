import { Routes, Route } from 'react-router-dom';


function VendingMachine() {
  return (
    <div className="VendingMachine">
      <Routes>
        <Route path="/chicharron" element={<Chicharron/>} />
        <Route path="/polvoron" element={<Polvoron/>} />
        <Route path="/shrimp-chips" element={<ShrimpChips/>} />
      </Routes>
    </div>
  );
}

export default VendingMachine