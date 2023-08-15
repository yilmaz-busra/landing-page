import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Form from "./Components/Form";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Main />
        <Form />
      </div>
    </BrowserRouter>
  );
}

export default App;
