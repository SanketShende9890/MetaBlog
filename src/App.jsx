import {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Home from "./components/Home";
import Footer from "./common/Footer";
import BlogListing from "./components/BlogListing";
import SinglePost from "./components/SinglePost";
import AuthorPage from "./components/AuthorPage";
import Contact from "./components/Contact.jsx";
import { ModeContextState } from "./ModeContext.jsx";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
    <ModeContextState.Provider value={{darkMode, setDarkMode}}>

      <BrowserRouter>
        <Header />
        <section className="pt-20">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/blogs" Component={BlogListing} />
          <Route path="/post" Component={SinglePost} />
          <Route path="/author" Component={AuthorPage} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </ModeContextState.Provider>
    </>
  );
}

export default App;
