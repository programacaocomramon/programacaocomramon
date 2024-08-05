import React from "react";
import { Sidebar } from "./_components/sidebar";
import { Navbar } from "./_components/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-[300px] fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-[300px] pt-[80px] min-h-full bg-gray-50">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
