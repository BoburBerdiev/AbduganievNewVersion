import {  Footer, Navbar , StartProject } from "@/components";
import { useEffect } from "react";
import Aos from "aos";

const Layout = ({ children }) => {
  useEffect(() => {
    Aos.init({
        once: true
    });
}, []);
  return (
    
    <div className="relative">
      <Navbar />
      <div className={"min-h-screen pt-[100px]  bg-neutral-950 overflow-hidden" }>{children}</div>
      <StartProject />
      <Footer />
    </div>
  );
};

export default Layout;
