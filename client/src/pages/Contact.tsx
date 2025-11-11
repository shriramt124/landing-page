import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useGsapFadeIn } from '@/hooks/useGsapAnimation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@shared/schema';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const formRef = useGsapFadeIn({ y: 30, duration: 0.8 });
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    toast({
      title: 'Message sent!',
      description: 'Thank you for contacting us. We\'ll get back to you soon.',
    });
    form.reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Design District\nSan Francisco, CA 94103',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567\nMon-Sat, 10am-6pm',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@homeaura.com\ninfo@homeaura.com',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Monday - Saturday\n10:00 AM - 6:00 PM',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6" data-testid="text-contact-title">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our furniture or need design consultation? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div ref={formRef}>
            <Card className="p-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Send us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-name" />
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} data-testid="input-email" />
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
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea rows={5} {...field} data-testid="input-message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" data-testid="button-submit">
                    Send Message
                  </Button>
                </form>
              </Form>
            </Card>
          </div>

          <div>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="p-6" data-testid={`card-contact-${index}`}>
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-sm text-muted-foreground whitespace-pre-line">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Book a Consultation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Schedule a one-on-one consultation with our design experts to discuss your furniture needs and explore our collections.
              </p>
              <Button variant="outline" className="w-full" data-testid="button-book-consultation">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg overflow-hidden h-96">
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Map placeholder - 123 Design District, San Francisco, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
