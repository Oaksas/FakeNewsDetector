import NavBar from "./Components/NavBar";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Detail from "./Pages/Detail";
import Tech from "./Pages/Tech";
import Africa from "./Pages/AllAboutAfrica";

import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState(["Tesla"]);
  const [outPut, setOutput] = useState(["output"]);

  useEffect(() => {
    var url =
      "https://newsapi.org/v2/everything?q=" +
      { input } +
      "&from=2021-12-14&sortBy=publishedAt&apiKey=dda2bbd515a64537b0176995b68f3eba";

    axios.get(url).then((response) => {
      setOutput(response.data);
    });
  }, [input]);
  return (
    <>
      <Router>
        <NavBar input={input} setInput={setInput} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/predict" element={<News />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/africa" element={<Africa />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
