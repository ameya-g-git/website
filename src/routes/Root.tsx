import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Root() {
    return (
        <div className="w-full bg-yellow h-fit">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}