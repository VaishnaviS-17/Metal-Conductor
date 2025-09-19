import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { User, MessageSquare, Package } from 'lucide-react';

// Form validation schema
const enquiryFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  company: z.string().optional(),
  location: z.string().min(2, 'Location is required'),
  enquiryType: z.enum(['product', 'service', 'quote', 'support', 'other']),
  productInterest: z.string().optional(),
  budget: z.enum(['under-1000', '1000-5000', '5000-10000', '10000-50000', 'above-50000', 'not-specified']),
  timeline: z.enum(['immediate', '1-month', '3-months', '6-months', 'flexible']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type EnquiryFormData = z.infer<typeof enquiryFormSchema>;

export const EnquiryForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<EnquiryFormData>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      location: '',
      enquiryType: 'product',
      productInterest: '',
      budget: 'not-specified',
      timeline: 'flexible',
      message: '',
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    try {
      // Prepare WhatsApp message using the company owner's number (from Support.tsx)
      // Assumption: using the first number listed in Support: +91 98331 37158
      const ownerPhone = '919372904186'; // international format without '+'

      // Friendly labels for select values
      const enquiryTypeLabelMap: Record<string, string> = {
        product: 'Product Information',
        service: 'Service Request',
        quote: 'Price Quote',
        support: 'Technical Support',
        other: 'Other',
      };

      const budgetLabelMap: Record<string, string> = {
        'under-1000': 'Under $1,000',
        '1000-5000': '$1,000 - $5,000',
        '5000-10000': '$5,000 - $10,000',
        '10000-50000': '$10,000 - $50,000',
        'above-50000': 'Above $50,000',
        'not-specified': 'Not Specified',
      };

      const timelineLabelMap: Record<string, string> = {
        immediate: 'Immediate',
        '1-month': 'Within 1 Month',
        '3-months': 'Within 3 Months',
        '6-months': 'Within 6 Months',
        flexible: 'Flexible',
      };

      const lines = [
        'New Enquiry from website:',
        `Name: ${data.fullName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Company: ${data.company || 'N/A'}`,
        `Location: ${data.location}`,
        `Enquiry Type: ${enquiryTypeLabelMap[data.enquiryType] || data.enquiryType}`,
        `Product Interest: ${data.productInterest || 'N/A'}`,
        `Budget: ${budgetLabelMap[data.budget] || data.budget}`,
        `Timeline: ${timelineLabelMap[data.timeline] || data.timeline}`,
        `Message: ${data.message}`,
      ];

      const message = encodeURIComponent(lines.join('\n'));

      // Use wa.me link to open chat with prefilled message
      const waUrl = `https://wa.me/${ownerPhone}?text=${message}`;

      // Try to open in a new tab/window. If blocked, provide fallback to navigate.
      const newWindow = window.open(waUrl, '_blank');
      if (!newWindow) {
        // Popup blocked — navigate the current tab as fallback
        window.location.href = waUrl;
      }

      // Provide user feedback and reset form
      alert('Your enquiry has been prepared. WhatsApp should open in a new tab to send it to the owner.');
      form.reset();
      setIsOpen(false);
    } catch (error) {
      console.error('Error preparing WhatsApp message:', error);
      alert('There was an error opening WhatsApp. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <MessageSquare className="w-4 h-4 mr-2" />
          Contact Us
        </Button>
      </DialogTrigger>
  <DialogContent className="max-w-2xl w-full sm:max-w-lg max-h-[90vh] overflow-y-auto px-4 sm:px-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            <Package className="w-6 h-6 inline mr-2" />
            Enquiry Form
          </DialogTitle>
          <DialogDescription className="text-center">
            Get in touch with us for metal detector products, services, or support.
            We'll respond within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <User className="w-5 h-5 mr-2" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Location *</FormLabel>
                      <FormControl>
                        <Input placeholder="City, State/Province, Country" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Enquiry Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Enquiry Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="enquiryType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type of Enquiry *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select enquiry type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="product">Product Information</SelectItem>
                          <SelectItem value="service">Service Request</SelectItem>
                          <SelectItem value="quote">Price Quote</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="productInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product of Interest</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Gold Detector, Security Scanner" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget Range</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="under-1000">Under $1,000</SelectItem>
                          <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                          <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10000-50000">$10,000 - $50,000</SelectItem>
                          <SelectItem value="above-50000">Above $50,000</SelectItem>
                          <SelectItem value="not-specified">Not Specified</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Timeline</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate</SelectItem>
                          <SelectItem value="1-month">Within 1 Month</SelectItem>
                          <SelectItem value="3-months">Within 3 Months</SelectItem>
                          <SelectItem value="6-months">Within 6 Months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Additional Details
              </h3>
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please provide details about your enquiry, specific requirements, or any questions you may have..."
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}; 