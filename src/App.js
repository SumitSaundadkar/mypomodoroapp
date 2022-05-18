import "./App.css";
import { NavBar } from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./Screens/Landingpage/Landing";
import { PomoDoroPage } from "./Screens/PomodoroPage/pomodoroPage";
import { LoginPage } from "./Screens/LoginPage/login";
import { TodoPage } from "./Screens/TodoPage/Todo";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pomopage" element={<PomoDoroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
