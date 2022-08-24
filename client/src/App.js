import { Route, Routes } from "react-router-dom";
import Admin from "./Routes/Admin";
import User from "./Routes/User";


function App() {
  return (
    <div>
     <Routes>
      <Route path="/*" element={<User/>}/>
      <Route path="/admin/*" element={<Admin/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
