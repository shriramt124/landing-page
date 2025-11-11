import { Link } from 'wouter';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4" data-testid="text-footer-brand">
              HomeAura
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Premium furniture crafted for modern living. Transforming spaces with elegance and comfort.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" data-testid="button-facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/collections" data-testid="footer-link-collections">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Collections
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" data-testid="footer-link-about">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="footer-link-contact">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">FAQ</li>
              <li className="text-sm text-muted-foreground">Shipping</li>
              <li className="text-sm text-muted-foreground">Returns</li>
              <li className="text-sm text-muted-foreground">Care Guide</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for design inspiration and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button data-testid="button-newsletter-subscribe">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-card-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 HomeAura. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Accessibility</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
