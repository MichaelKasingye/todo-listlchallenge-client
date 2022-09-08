import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import Aos from "aos";

import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./Components/NavBar";
// import Footer from "./Components/Footer";
import Modals from "./Components/Modals";
import Todos from "./Pages/Todos";
import SubmitFeedBack from "./Pages/SubmitFeedBack";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchTodoAsync } from "./redux/features/Todo/TodoSlice";



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodoAsync());
    Aos.init({ duration: 900 });
  }, [dispatch]);

  return (
    <main id="main" className="main">

    <BrowserRouter>
      <Nav/>
      {/* <Sidebar /> */}

      <Routes>
        <Route index element={<Home />} />
        <Route path="/todo" element={<Todos />} />
        <Route path="/about" element={<About />} />
        <Route path="/submit-feedback" element={<SubmitFeedBack />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Modals/>
      {/* <Footer/> */}
    </BrowserRouter>
    </main>

  );
}

export default App;
