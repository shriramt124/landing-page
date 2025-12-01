import { Card } from '@/components/ui/card';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: FileText,
      title: 'Information We Collect',
      content: [
        'We collect information you provide directly to us when you create an account, make a purchase, or contact our customer service.',
        'This includes your name, email address, postal address, phone number, and payment information.',
        'We also automatically collect certain information about your device when you use our website, including your IP address, browser type, and operating system.',
      ],
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'We use the information we collect to process your orders, communicate with you about products and services, and improve our website.',
        'We may also use your information to send you marketing communications, but you can opt out at any time.',
        'Your payment information is processed securely and is never stored on our servers.',
      ],
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or destruction.',
        'All sensitive data is encrypted during transmission using SSL/TLS technology.',
        'We regularly review and update our security practices to ensure the highest level of protection.',
      ],
    },
    {
      icon: Shield,
      title: 'Your Rights',
      content: [
        'You have the right to access, correct, or delete your personal information at any time.',
        'You can opt out of marketing communications by clicking the unsubscribe link in our emails.',
        'For any privacy-related questions or requests, please contact us at privacy@homeaura.com.',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6" data-testid="text-privacy-title">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: December 1, 2024
          </p>
        </div>

        <Card className="p-8 mb-8">
          <p className="text-muted-foreground mb-4">
            At HomeAura, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.
          </p>
          <p className="text-muted-foreground">
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </Card>

        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card key={index} className="p-8" data-testid={`card-privacy-section-${index}`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold mt-1">{section.title}</h2>
                </div>
                <div className="space-y-3 ml-16">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 mt-8 bg-primary/5">
          <h2 className="text-2xl font-serif font-bold mb-4">Cookies and Tracking</h2>
          <p className="text-muted-foreground mb-4">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
          <p className="text-muted-foreground">
            For more information about how we use cookies, please see our{' '}
            <a href="/cookie-policy" className="text-primary hover:underline font-medium">
              Cookie Policy
            </a>
            .
          </p>
        </Card>

        <Card className="p-8 mt-8">
          <h2 className="text-2xl font-serif font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="text-muted-foreground space-y-2">
            <p><strong>Email:</strong> privacy@homeaura.com</p>
            <p><strong>Address:</strong> INDORE, India</p>
            <p><strong>Phone:</strong> Available Monday - Saturday, 10am - 6pm</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
