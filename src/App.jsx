import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import IndexPage from "./pages/IdCardTab/IndexPage";
import IDCardPreview from "./pages/IdCardTab/IDCardPreview";
import SideNavbar from "./components/SideNavbar";
// import Settings from "./pages/Settings";

function App() {
  return (
    <HashRouter>
      <div className="flex h-screen">
        <SideNavbar />
        <div className="flex-1 overflow-auto bg-gray-100">
          <Routes>
            <Route path="/" element={<Navigate to="/idcard" replace />} />
            <Route path="/idcard" element={<IndexPage />} />
            <Route path="/idcard/preview" element={<IDCardPreview />} />
            {/* <Route path="/settings" element={<Settings />} /> */}
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
