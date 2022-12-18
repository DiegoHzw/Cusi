import Footer from "../components/layout/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "../components/layout/menu/ResponsiveAppBar";
import Home from "../features/Home/Home";
import Circuits from "../features/circuits/circuits";
// import YouAreLost from "../features/404/YouAreLost";
import Autos from "../features/autos/Autos";

const Router = () => {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Circuitos" element={<Circuits />} />
        {/* <Route exact path="/about" element={<AboutPage/>}/>
        <Route exact path="/notfound" element={<NotFoundPage/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/bannercontents" element={<BannerContents/>}/> */}
        <Route exact path="/autos" element={<Autos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
