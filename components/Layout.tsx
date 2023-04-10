import React, { FunctionComponent, ReactNode } from "react";
import NavBar from "./NavBar";
import Head from "next/head";
import SideNav from "./SideNav";

interface LayoutProps {}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <NavBar />
        <SideNav />
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
