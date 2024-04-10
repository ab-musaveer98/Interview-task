import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
import Record from "./components/Record";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/record" element={<Record />} />
      </Routes>
    </>
  );
}

export default App;
