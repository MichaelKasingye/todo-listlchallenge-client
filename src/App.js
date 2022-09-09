import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClientProvider, QueryClient } from "react-query";

import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./Components/NavBar";
import Todos from "./Pages/Todos";

import TasksDone from "./Pages/TasksDone";
import Error from "./Pages/Error";
import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <main id="main" className="main">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Nav />

          <Routes>
            <Route index element={<Todos />} />
            <Route path="/tasks-done" element={<TasksDone />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
