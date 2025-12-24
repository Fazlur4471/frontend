import React from 'react';
import { X, Send, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useEnquiry } from '@/context/EnquiryContext';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const enquirySchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  phone: z.string().trim().min(1, 'Phone is required').max(20),
  message: z.string().trim().min(1, 'Message is required').max(1000),
});

const EnquiryModal: React.FC = () => {
  const { isEnquiryModalOpen, enquiryProductContext, closeEnquiryModal, addEnquiry } = useEnquiry();
  const { toast } = useToast();

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
  };

  const handleClose = () => {
    resetForm();
    closeEnquiryModal();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = enquirySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    if (!enquiryProductContext) return;

    setIsSubmitting(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    addEnquiry({
      productId: enquiryProductContext.id,
      productName: enquiryProductContext.name,
      productType: enquiryProductContext.type,
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    });

    toast({
      title: 'Enquiry Submitted',
      description: `Your enquiry for "${enquiryProductContext.name}" has been sent successfully.`,
    });

    setIsSubmitting(false);
    handleClose();
  };

  if (!isEnquiryModalOpen || !enquiryProductContext) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-card rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-muted p-6 border-b border-border">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="font-heading font-bold text-xl text-foreground">
            Product Enquiry
          </h2>
          <div className="flex items-center gap-2 mt-2 text-muted-foreground">
            <Package className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">{enquiryProductContext.name}</span>
            <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded capitalize">
              {enquiryProductContext.type}
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
              placeholder="Your full name"
              className={errors.name ? 'border-destructive' : ''}
            />
            {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
              placeholder="your@email.com"
              className={errors.email ? 'border-destructive' : ''}
            />
            {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
              placeholder="+1 555-0123"
              className={errors.phone ? 'border-destructive' : ''}
            />
            {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
          </div>

          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
              placeholder="Tell us about your requirements..."
              className={errors.message ? 'border-destructive' : ''}
            />
            {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
          </div>

          <Button type="submit" className="w-full btn-accent" disabled={isSubmitting}>
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
