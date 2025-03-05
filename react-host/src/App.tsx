import {BrowserRouter, Route, Routes} from "react-router-dom";
import RemoteWrapper from "./remote/RemoteWrapper";
import Host from "./host/Host";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Host />} />
        <Route path="/remote" element={<RemoteWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
