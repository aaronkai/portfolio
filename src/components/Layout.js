import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="grid grid-row-layout h-screen bg-green-50 lg:max-w-screen-lg lg:border-l-2 lg:border-r-2 lg:border-gray-800 lg:m-auto">
      <NavigationBar />
      <main className="overflow-auto">{children}</main>
      <Footer />
    </div>
  );
}
