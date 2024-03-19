import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root() {
    return (
        <div className="w-full bg-yellow h-fit">
            <Navbar />
            <Outlet />
        </div>
    )
}