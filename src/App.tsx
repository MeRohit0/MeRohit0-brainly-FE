import { Dashboard } from "./pages/Dashboard"
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { BrowserRouter, Route , Routes } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
      <Routes >
        <Route path="/signup" Component={Signup}/>
        <Route path="/signin" Component={Signin}/>
        <Route path="/dashboard" Component={Dashboard}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
