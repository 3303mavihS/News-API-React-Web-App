import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import Search from "../pages/search/Search";
import Categories from "../pages/categories/Categories";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:code" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/categories/" element={<Categories />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
