import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductProvider } from "@/context/ProductContext";
import { AuthProvider } from "@/context/AuthContext";
import { EnquiryProvider } from "@/context/EnquiryContext";

import EnquiryModal from "@/components/enquiry/EnquiryModal";

import Index from "@/pages/Index";
import ManufacturedShowcase from "@/pages/ManufacturedShowcase";
import ManufacturedProductsList from "@/pages/ManufacturedProductsList";
import TradingProductsList from "@/pages/TradingProductsList";
import Contact from "@/pages/Contact";
import AdminDashboard from "@/pages/AdminDashboard";
import AdminLogin from "@/pages/admin/AdminLogin";
import NotFound from "@/pages/NotFound";

import AdminRoute from "@/routes/AdminRoute";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ProductProvider>
          <EnquiryProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <EnquiryModal />

              <BrowserRouter>
                <Routes>
                  {/* 🌍 Public routes */}
                  <Route path="/" element={<Index />} />
                  <Route
                    path="/manufactured-showcase"
                    element={<ManufacturedShowcase />}
                  />
                  <Route
                    path="/manufactured-products"
                    element={<ManufacturedProductsList />}
                  />
                  <Route
                    path="/trading-products"
                    element={<TradingProductsList />}
                  />
                  <Route path="/contact" element={<Contact />} />

                  {/* 🔐 Admin auth */}
                  <Route path="/admin/login" element={<AdminLogin />} />

                  {/* 🧱 Protected admin dashboard */}
                  <Route
                    path="/admin"
                    element={
                      <AdminRoute>
                        <AdminDashboard />
                      </AdminRoute>
                    }
                  />

                  {/* ❌ 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </EnquiryProvider>
        </ProductProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
