import React, { useState } from 'react';
import { Plus, Edit2, Trash2, LogOut, Package, ShoppingBag, LayoutDashboard, MessageSquare, Mail, Phone, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useAuth } from '@/context/AuthContext';
import { useProducts } from '@/context/ProductContext';
import { useEnquiry } from '@/context/EnquiryContext';
import { productCategories, tradingProductTypes } from '@/data/mockProducts';
import { useToast } from '@/hooks/use-toast';
import { EnquiryStatus } from '@/types/enquiry';

const AdminDashboard: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const { manufacturedProducts, tradingProducts, addManufacturedProduct, updateManufacturedProduct, deleteManufacturedProduct, addTradingProduct, updateTradingProduct, deleteTradingProduct } = useProducts();
  const { enquiries, updateEnquiryStatus, deleteEnquiry } = useEnquiry();
  const { toast } = useToast();

  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'manufactured' | 'trading' | 'enquiries'>('dashboard');
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [productType, setProductType] = useState<'manufactured' | 'trading'>('manufactured');

  const [formData, setFormData] = useState({
    name: '', category: '', type: '', brand: '', description: '', shortDescription: '',
    specifications: '', applications: '', images: '', featured: false,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(loginData.username, loginData.password)) {
      setLoginError('');
    } else {
      setLoginError('Invalid credentials. Try admin / admin123');
    }
  };

  const resetForm = () => {
    setFormData({ name: '', category: '', type: '', brand: '', description: '', shortDescription: '', specifications: '', applications: '', images: '', featured: false });
    setEditingProduct(null);
  };

  const openAddDialog = (type: 'manufactured' | 'trading') => {
    setProductType(type);
    resetForm();
    setIsDialogOpen(true);
  };

  const openEditDialog = (product: any, type: 'manufactured' | 'trading') => {
    setProductType(type);
    setEditingProduct(product);
    setFormData({
      name: product.name, category: product.category, type: product.type || '', brand: product.brand || '',
      description: product.description, shortDescription: product.shortDescription,
      specifications: Object.entries(product.specifications).map(([k, v]) => `${k}: ${v}`).join('\n'),
      applications: product.applications.join('\n'), images: product.images.join('\n'), featured: product.featured,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = () => {
    const specs: Record<string, string> = {};
    formData.specifications.split('\n').forEach(line => {
      const [key, ...val] = line.split(':');
      if (key && val.length) specs[key.trim()] = val.join(':').trim();
    });

    const productData = {
      name: formData.name, category: formData.category, description: formData.description,
      shortDescription: formData.shortDescription, specifications: specs,
      applications: formData.applications.split('\n').filter(Boolean),
      images: formData.images.split('\n').filter(Boolean), featured: formData.featured,
    };

    if (productType === 'manufactured') {
      if (editingProduct) {
        updateManufacturedProduct(editingProduct.id, { ...productData, productType: 'manufactured' });
        toast({ title: 'Product Updated' });
      } else {
        addManufacturedProduct({ ...productData, productType: 'manufactured' });
        toast({ title: 'Product Added' });
      }
    } else {
      const tradingData = { ...productData, type: formData.type, brand: formData.brand, productType: 'trading' as const };
      if (editingProduct) {
        updateTradingProduct(editingProduct.id, tradingData);
        toast({ title: 'Product Updated' });
      } else {
        addTradingProduct(tradingData);
        toast({ title: 'Product Added' });
      }
    }
    setIsDialogOpen(false);
    resetForm();
  };

  const handleDelete = (id: string, type: 'manufactured' | 'trading') => {
    if (confirm('Are you sure you want to delete this product?')) {
      type === 'manufactured' ? deleteManufacturedProduct(id) : deleteTradingProduct(id);
      toast({ title: 'Product Deleted' });
    }
  };

  const handleStatusChange = (enquiryId: string, status: EnquiryStatus) => {
    updateEnquiryStatus(enquiryId, status);
    toast({ title: `Enquiry marked as ${status}` });
  };

  const handleDeleteEnquiry = (id: string) => {
    if (confirm('Are you sure you want to delete this enquiry?')) {
      deleteEnquiry(id);
      toast({ title: 'Enquiry Deleted' });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status: EnquiryStatus) => {
    switch (status) {
      case 'New': return 'bg-accent/20 text-accent';
      case 'Contacted': return 'bg-cyan-light/20 text-cyan-light';
      case 'Closed': return 'bg-muted-foreground/20 text-muted-foreground';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted p-4">
        <div className="w-full max-w-md bg-card p-8 rounded-2xl border border-border">
          <h1 className="font-heading font-bold text-2xl text-center mb-6">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div><Label>Username</Label><Input value={loginData.username} onChange={e => setLoginData(p => ({ ...p, username: e.target.value }))} /></div>
            <div><Label>Password</Label><Input type="password" value={loginData.password} onChange={e => setLoginData(p => ({ ...p, password: e.target.value }))} /></div>
            {loginError && <p className="text-sm text-destructive">{loginError}</p>}
            <Button type="submit" className="w-full btn-accent">Login</Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="font-heading font-bold text-xl">Admin Dashboard</h1>
          <Button variant="outline" onClick={logout}><LogOut className="w-4 h-4 mr-2" />Logout</Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'dashboard', icon: LayoutDashboard, label: 'Overview' },
            { id: 'manufactured', icon: Package, label: 'Manufactured' },
            { id: 'trading', icon: ShoppingBag, label: 'Trading' },
            { id: 'enquiries', icon: MessageSquare, label: 'Enquiries' },
          ].map(tab => (
            <Button key={tab.id} variant={activeTab === tab.id ? 'default' : 'outline'} onClick={() => setActiveTab(tab.id as any)}>
              <tab.icon className="w-4 h-4 mr-2" />{tab.label}
              {tab.id === 'enquiries' && enquiries.filter(e => e.status === 'New').length > 0 && (
                <span className="ml-2 bg-accent text-accent-foreground text-xs px-1.5 py-0.5 rounded-full">
                  {enquiries.filter(e => e.status === 'New').length}
                </span>
              )}
            </Button>
          ))}
        </div>

        {activeTab === 'dashboard' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border"><h3 className="text-muted-foreground text-sm">Manufactured Products</h3><p className="font-heading font-bold text-3xl mt-2">{manufacturedProducts.length}</p></div>
            <div className="bg-card p-6 rounded-xl border border-border"><h3 className="text-muted-foreground text-sm">Trading Products</h3><p className="font-heading font-bold text-3xl mt-2">{tradingProducts.length}</p></div>
            <div className="bg-card p-6 rounded-xl border border-border"><h3 className="text-muted-foreground text-sm">Featured Products</h3><p className="font-heading font-bold text-3xl mt-2">{manufacturedProducts.filter(p => p.featured).length + tradingProducts.filter(p => p.featured).length}</p></div>
            <div className="bg-card p-6 rounded-xl border border-border"><h3 className="text-muted-foreground text-sm">New Enquiries</h3><p className="font-heading font-bold text-3xl mt-2 text-accent">{enquiries.filter(e => e.status === 'New').length}</p></div>
          </div>
        )}

        {(activeTab === 'manufactured' || activeTab === 'trading') && (
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="p-4 border-b border-border flex justify-between items-center">
              <h2 className="font-heading font-semibold">{activeTab === 'manufactured' ? 'Manufactured' : 'Trading'} Products</h2>
              <Button onClick={() => openAddDialog(activeTab)} className="btn-accent"><Plus className="w-4 h-4 mr-2" />Add Product</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted"><tr><th className="text-left p-4">Name</th><th className="text-left p-4">Category</th><th className="text-left p-4">Featured</th><th className="text-left p-4">Actions</th></tr></thead>
                <tbody>
                  {(activeTab === 'manufactured' ? manufacturedProducts : tradingProducts).map(product => (
                    <tr key={product.id} className="border-t border-border">
                      <td className="p-4 font-medium">{product.name}</td>
                      <td className="p-4 text-muted-foreground">{product.category}</td>
                      <td className="p-4">{product.featured ? <span className="text-accent">Yes</span> : 'No'}</td>
                      <td className="p-4 flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => openEditDialog(product, activeTab)}><Edit2 className="w-4 h-4" /></Button>
                        <Button size="sm" variant="outline" className="text-destructive" onClick={() => handleDelete(product.id, activeTab)}><Trash2 className="w-4 h-4" /></Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'enquiries' && (
          <div className="space-y-4">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="p-4 border-b border-border">
                <h2 className="font-heading font-semibold">Product Enquiries</h2>
              </div>
              {enquiries.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground">
                  No enquiries yet.
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {enquiries.map(enquiry => (
                    <div key={enquiry.id} className="p-4">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                        {/* Enquiry Info */}
                        <div className="flex-1 space-y-3">
                          {/* Product & Status Row */}
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-heading font-semibold text-foreground">{enquiry.productName}</span>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded capitalize">{enquiry.productType}</span>
                            <span className={`text-xs px-2 py-0.5 rounded ${getStatusColor(enquiry.status)}`}>{enquiry.status}</span>
                          </div>

                          {/* User Details */}
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{enquiry.name}</span>
                            <span className="flex items-center gap-1.5"><Mail className="w-4 h-4" />{enquiry.email}</span>
                            <span className="flex items-center gap-1.5"><Phone className="w-4 h-4" />{enquiry.phone}</span>
                            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{formatDate(enquiry.createdAt)}</span>
                          </div>

                          {/* Message */}
                          <p className="text-sm text-foreground bg-muted p-3 rounded-lg">{enquiry.message}</p>
                        </div>

                        {/* Actions */}
                        <div className="flex lg:flex-col gap-2">
                          <Select value={enquiry.status} onValueChange={(v) => handleStatusChange(enquiry.id, v as EnquiryStatus)}>
                            <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
                            <SelectContent className="bg-card border border-border z-50">
                              <SelectItem value="New">New</SelectItem>
                              <SelectItem value="Contacted">Contacted</SelectItem>
                              <SelectItem value="Closed">Closed</SelectItem>
                            </SelectContent>
                          </Select>
                          <Button size="sm" variant="outline" className="text-destructive" onClick={() => handleDeleteEnquiry(enquiry.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Product Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card">
          <DialogHeader><DialogTitle>{editingProduct ? 'Edit' : 'Add'} {productType === 'manufactured' ? 'Manufactured' : 'Trading'} Product</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div><Label>Name</Label><Input value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} /></div>
              <div><Label>Category</Label>
                <Select value={formData.category} onValueChange={v => setFormData(p => ({ ...p, category: v }))}>
                  <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                  <SelectContent className="bg-card border border-border z-50">{(productType === 'manufactured' ? productCategories.manufactured : productCategories.trading).map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            </div>
            {productType === 'trading' && (
              <div className="grid md:grid-cols-2 gap-4">
                <div><Label>Type</Label>
                  <Select value={formData.type} onValueChange={v => setFormData(p => ({ ...p, type: v }))}>
                    <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                    <SelectContent className="bg-card border border-border z-50">{tradingProductTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div><Label>Brand</Label><Input value={formData.brand} onChange={e => setFormData(p => ({ ...p, brand: e.target.value }))} /></div>
              </div>
            )}
            <div><Label>Short Description</Label><Input value={formData.shortDescription} onChange={e => setFormData(p => ({ ...p, shortDescription: e.target.value }))} /></div>
            <div><Label>Full Description</Label><Textarea rows={3} value={formData.description} onChange={e => setFormData(p => ({ ...p, description: e.target.value }))} /></div>
            <div><Label>Specifications (Key: Value per line)</Label><Textarea rows={4} value={formData.specifications} onChange={e => setFormData(p => ({ ...p, specifications: e.target.value }))} placeholder="Voltage: 24V&#10;Power: 100W" /></div>
            <div><Label>Applications (one per line)</Label><Textarea rows={3} value={formData.applications} onChange={e => setFormData(p => ({ ...p, applications: e.target.value }))} /></div>
            <div><Label>Image URLs (one per line)</Label><Textarea rows={2} value={formData.images} onChange={e => setFormData(p => ({ ...p, images: e.target.value }))} /></div>
            <div className="flex items-center gap-2"><Switch checked={formData.featured} onCheckedChange={v => setFormData(p => ({ ...p, featured: v }))} /><Label>Featured Product</Label></div>
            <Button onClick={handleSubmit} className="w-full btn-accent">{editingProduct ? 'Update' : 'Add'} Product</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
