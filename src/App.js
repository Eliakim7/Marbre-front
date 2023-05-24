import {Route, Routes} from "react-router-dom";
import Template from "./component/template";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Accueil/>} />
        <Route path="/contact" element={<Contact/>} />
      </Route>
    </Routes>
   </>
  );
}

export default App;
