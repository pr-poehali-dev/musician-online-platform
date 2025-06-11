import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/layout/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar />
      <main className="flex-1 overflow-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
