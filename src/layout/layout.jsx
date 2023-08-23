import {  Footer, Navbar , StartProject } from "@/components";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className={"min-h-screen pt-[120px] bg-black overflow-hidden" }>{children}</div>
      <StartProject />
      <Footer />
    </div>
  );
};

export default Layout;
