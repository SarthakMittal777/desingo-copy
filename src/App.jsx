import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./global/GlobalStyles";
import Header from "./components/global/Header/Header";
import Footer from "./components/global/Footer/Footer";
import { menuData, aboutData } from "./data";
import { Home, About, Contact, Locations, Portfolio, Error } from "./pages";
import { ScrollToTop } from "./helpers";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Header data={menuData} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About data={aboutData} />} />
        <Route exact path="/locations" element={<Locations />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/services/:id" element={<Portfolio />}></Route>
        <Route exact path="*" element={<Error />} />
      </Routes>
      <Footer data={menuData} />
    </Router>
  );
};

export default App;
