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
        <Route path="/share/:shareId" Component={Dashboard}/>
        {/* todo - add the fontend for get share , implement the delete functionality */}
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
