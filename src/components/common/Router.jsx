import { BrowserRouter, Route, Routes } from "react-router-dom";

import Page404 from "../../pages/404";
import RecruitPage from "../../pages/recruitPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecruitPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
