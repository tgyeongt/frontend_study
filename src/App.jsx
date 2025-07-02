import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./layouts/RootLayout";
import Stu1Page from "./pages/Stu1Page";
import Stu2Page from "./pages/Stu2Page";
import Stu3Page from "./pages/Stu3Page";
import Stu4Page from "./pages/Stu4Page";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route index element={<HomePage />} />
          <Route path="stu1" element={<Stu1Page />}/>
          <Route path="stu2" element={<Stu2Page />}/>
          <Route path="stu3" element={<Stu3Page />}/>
          <Route path="stu4" element={<Stu4Page />}/>
          {/* 여기에 다른 페이지 추가 */}
        </Route>
      </Routes>
    </Router>
  );
}