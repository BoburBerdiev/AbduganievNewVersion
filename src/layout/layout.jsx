import {  Footer, Navbar , StartProject } from "@/components";
import { useEffect } from "react";
import Aos from "aos";
import {btnForm} from "@/slice/formSlice";
import {useDispatch, useSelector} from "react-redux";
import {btnContact} from "@/slice/contactSlice";

const Layout = ({ children }) => {
    const {form} = useSelector(state => state.formSlice)
    const {contact} = useSelector(state => state.contactSlice)
    const dispatch = useDispatch()
  useEffect(() => {
    Aos.init({
        once: true
    });
}, []);
    useEffect(() => {
        const handleWindow = () => {
            dispatch(btnForm(false))
            dispatch(btnContact(false))
        }

        window.addEventListener('click', handleWindow)

        return () => {
            window.removeEventListener('click', handleWindow)

        }

    }, [form,contact]);
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
