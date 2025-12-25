import React, { useState } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  MessageSquare,
  Trash2,
  LogOut,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useAuth } from "@/context/AuthContext";
import { useProducts } from "@/context/ProductContext";
import { useEnquiry } from "@/context/EnquiryContext";
import { useToast } from "@/hooks/use-toast";
import { EnquiryStatus, EnquiryStatusLabel } from "@/types/enquiry";

const AdminDashboard: React.FC = () => {
  const { logoutAdmin } = useAuth();
  const {
    addManufacturedProduct,
    updateManufacturedProduct,
    deleteManufacturedProduct,
    addTradingProduct,
    updateTradingProduct,
    deleteTradingProduct,
  } = useProducts();

  const { enquiries, updateEnquiryStatus, deleteEnquiry } = useEnquiry();
  const { toast } = useToast();

  const [activeTab, setActiveTab] = useState<
    "dashboard" | "manufactured" | "trading" | "enquiries"
  >("dashboard");

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [productType, setProductType] = useState<
    "manufactured" | "trading"
  >("manufactured");

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    type: "",
    brand: "",
    description: "",
    shortDescription: "",
    specifications: "",
    applications: "",
    images: "",
    featured: false,
  });

  const resetForm = () => {
    setFormData({
      name: "",
      category: "",
      type: "",
      brand: "",
      description: "",
      shortDescription: "",
      specifications: "",
      applications: "",
      images: "",
      featured: false,
    });
    setEditingProduct(null);
  };

  const handleSubmit = () => {
    const specs: Record<string, string> = {};
    formData.specifications.split("\n").forEach((line) => {
      const [key, ...val] = line.split(":");
      if (key && val.length) specs[key.trim()] = val.join(":").trim();
    });

    if (productType === "manufactured") {
      const data = {
        name: formData.name,
        category: formData.category,
        description: formData.description,
        shortDescription: formData.shortDescription,
        specifications: specs,
        applications: formData.applications.split("\n").filter(Boolean),
        images: formData.images.split("\n").filter(Boolean),
        featured: formData.featured,
        productType: "manufactured" as const,
      };

      editingProduct
        ? updateManufacturedProduct(String(editingProduct.id), data)
        : addManufacturedProduct(data);
    } else {
      const data = {
        name: formData.name,
        category: formData.category,
        description: formData.description,
        shortDescription: formData.shortDescription,
        specifications: specs,
        applications: formData.applications.split("\n").filter(Boolean),
        images: formData.images.split("\n").filter(Boolean),
        featured: formData.featured,
        type: formData.type,
        brand: formData.brand,
        productType: "trading" as const,
      };

      editingProduct
        ? updateTradingProduct(String(editingProduct.id), data)
        : addTradingProduct(data);
    }

    toast({
      title: editingProduct ? "Product updated" : "Product added",
    });

    setIsDialogOpen(false);
    resetForm();
  };

  const getStatusColor = (status: EnquiryStatus) => {
    switch (status) {
      case "new":
        return "bg-accent/20 text-accent";
      case "in_progress":
        return "bg-cyan-500/20 text-cyan-600";
      case "resolved":
        return "bg-muted-foreground/20 text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-muted">
      <header className="bg-card border-b">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={logoutAdmin}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-2 mb-6">
          <Button
            variant={activeTab === "dashboard" ? "default" : "outline"}
            onClick={() => setActiveTab("dashboard")}
          >
            <LayoutDashboard className="w-4 h-4 mr-2" />
            Overview
          </Button>
          <Button
            variant={activeTab === "manufactured" ? "default" : "outline"}
            onClick={() => setActiveTab("manufactured")}
          >
            <Package className="w-4 h-4 mr-2" />
            Manufactured
          </Button>
          <Button
            variant={activeTab === "trading" ? "default" : "outline"}
            onClick={() => setActiveTab("trading")}
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Trading
          </Button>
          <Button
            variant={activeTab === "enquiries" ? "default" : "outline"}
            onClick={() => setActiveTab("enquiries")}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Enquiries
          </Button>
        </div>

        {activeTab === "enquiries" && (
          <div className="space-y-4">
            {enquiries.map((enquiry) => (
              <div key={enquiry.id} className="bg-card p-4 rounded border">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{enquiry.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {enquiry.email} · {enquiry.phone}
                    </p>
                    <p className="mt-2 text-sm">{enquiry.message}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(enquiry.status)}`}>
                      {EnquiryStatusLabel[enquiry.status]}
                    </span>

                    <Select
                      value={enquiry.status}
                      onValueChange={(v) =>
                        updateEnquiryStatus(String(enquiry.id), v as EnquiryStatus)
                      }
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="in_progress">Contacted</SelectItem>
                        <SelectItem value="resolved">Closed</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button
                      size="icon"
                      variant="outline"
                      className="text-destructive"
                      onClick={() => deleteEnquiry(enquiry.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingProduct ? "Edit Product" : "Add Product"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            <Input
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData((p) => ({ ...p, name: e.target.value }))
              }
            />
            <Textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) =>
                setFormData((p) => ({ ...p, description: e.target.value }))
              }
            />
            <Button onClick={handleSubmit}>
              {editingProduct ? "Update" : "Add"} Product
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
