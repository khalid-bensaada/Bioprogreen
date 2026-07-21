import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Categories from "../pages/Categories";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Search from "../pages/Search";
import TermsConditions from "../pages/TermsConditions";
import NotFound from "../pages/NotFound";


function AppRouter() {
    return (
        <BrowserRouter>

            <Routes>

                <Route element={<MainLayout />}>

                    {/* Main Pages */}

                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/products" element={<Products />} />

                    <Route 
                        path="/products/:id" 
                        element={<ProductDetails />} 
                    />

                    <Route 
                        path="/categories" 
                        element={<Categories />} 
                    />

                    <Route 
                        path="/services" 
                        element={<Services />} 
                    />

                    <Route 
                        path="/blog" 
                        element={<Blog />} 
                    />

                    <Route 
                        path="/contact" 
                        element={<Contact />} 
                    />


                    {/* Search */}

                    <Route 
                        path="/search" 
                        element={<Search />} 
                    />


                    {/* Legal */}

                    <Route 
                        path="/terms-conditions" 
                        element={<TermsConditions />} 
                    />


                    {/* 404 */}

                    <Route 
                        path="*" 
                        element={<NotFound />} 
                    />

                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default AppRouter;