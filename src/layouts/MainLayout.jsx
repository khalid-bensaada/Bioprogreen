import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
    return (
        <div className="overflow-x-hidden">

            <Navbar />

            <main className="min-h-screen">
                <Outlet />
            </main>

            <Footer />

        </div>
    );
}

export default MainLayout;