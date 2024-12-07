import { HashRouter, Route, Routes } from "react-router-dom";
import { Task1, Task2 } from "./pages";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
