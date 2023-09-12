import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import CostumersPage from "./pages/CostumersPage";
import CostumerEditPage from "./pages/CostumerEditPage";
import YscProcessPage from "./pages/YscProcessPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/costumeredit" element={<CostumerEditPage />}></Route>
          <Route path="/costumers" element={<CostumersPage />}></Route>
          <Route exact path="/dashboard" element={<DashboardPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/ysc" element={<YscProcessPage />}></Route>
          <Route path="/" element={<DashboardPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
