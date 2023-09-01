import {  Footer, Navbar , StartProject } from "@/components";

const Layout = ({ children }) => {
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
