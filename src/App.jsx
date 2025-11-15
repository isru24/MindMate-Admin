import Analysis from "./pages/Analysis";
import Resource from "./pages/Resources";
import Profile from "./pages/Profile";
import { Route,Routes } from "react-router-dom";
function App() {
  return(
    <main>
      <Routes>
        <Route path="/" element={<Resource/>}/>
        <Route path="/analysis" element={<Analysis/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </main>
  )
}
export default App;
