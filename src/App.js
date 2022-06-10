import "./App.css";
import { NavBar } from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./Screens/Landingpage/Landing";
import { PomoDoroPage } from "./Screens/PomodoroPage/pomodoroPage";
import { LoginPage } from "./Screens/LoginPage/login";
import { TodoPage } from "./Screens/TodoPage/Todo";
import { TodoAddPage } from "./Screens/TodoPage/ToDoPage";
import Modal from "./Components/Navbar/TimerComponent/Modal";
import Todomodal from "./Components/TodoComponent/Todomodal";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pomopage" element={<PomoDoroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/todoaddpage" element={<TodoAddPage />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/todomodal" element={<Todomodal />} />
      </Routes>
    </div>
  );
}

export default App;
