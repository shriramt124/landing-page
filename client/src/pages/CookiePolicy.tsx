import { Card } from '@/components/ui/card';
import { Cookie, Settings, BarChart, Shield } from 'lucide-react';

export default function CookiePolicy() {
    const cookieTypes = [
        {
            icon: Shield,
            title: 'Essential Cookies',
            description: 'These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.',
            examples: 'Session cookies, security cookies, load balancing cookies',
            canDisable: false,
        },
        {
            icon: BarChart,
            title: 'Analytics Cookies',
            description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
            examples: 'Google Analytics, page view tracking, user behavior analysis',
            canDisable: true,
        },
        {
            icon: Settings,
            title: 'Functional Cookies',
            description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences and choices.',
            examples: 'Language preferences, theme selection, shopping cart',
            canDisable: true,
        },
        {
            icon: Cookie,
            title: 'Marketing Cookies',
            description: 'These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.',
            examples: 'Retargeting cookies, social media cookies, advertising network cookies',
            canDisable: true,
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6" data-testid="text-cookie-title">
                        Cookie Policy
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Last updated: December 1, 2024
                    </p>
                </div>

                <Card className="p-8 mb-8">
                    <h2 className="text-2xl font-serif font-bold mb-4">What Are Cookies?</h2>
                    <p className="text-muted-foreground mb-4">
                        Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.
                    </p>
                    <p className="text-muted-foreground">
                        Cookies allow websites to remember your actions and preferences (such as login, language, font size, and other display preferences) over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.
                    </p>
                </Card>

                <h2 className="text-3xl font-serif font-bold mb-6">Types of Cookies We Use</h2>

                <div className="space-y-6 mb-8">
                    {cookieTypes.map((type, index) => {
                        const Icon = type.icon;
                        return (
                            <Card key={index} className="p-6" data-testid={`card-cookie-type-${index}`}>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-semibold">{type.title}</h3>
                                            <span
                                                className={`text-xs px-3 py-1 rounded-full ${type.canDisable
                                                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                                                    }`}
                                            >
                                                {type.canDisable ? 'Optional' : 'Required'}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground mb-3">{type.description}</p>
                                        <p className="text-sm text-muted-foreground">
                                            <strong>Examples:</strong> {type.examples}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                <Card className="p-8 mb-8 bg-primary/5">
                    <h2 className="text-2xl font-serif font-bold mb-4">How to Manage Cookies</h2>
                    <p className="text-muted-foreground mb-4">
                        You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                    </p>
                    <div className="space-y-3">
                        <div>
                            <h3 className="font-semibold mb-2">Browser Settings</h3>
                            <p className="text-muted-foreground text-sm">
                                Most web browsers allow some control of cookies through browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit{' '}
                                <a
                                    href="https://www.allaboutcookies.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    www.allaboutcookies.org
                                </a>
                                .
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Opt-Out Tools</h3>
                            <p className="text-muted-foreground text-sm">
                                To opt out of being tracked by Google Analytics across all websites, visit{' '}
                                <a
                                    href="https://tools.google.com/dlpage/gaoptout"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    Google Analytics Opt-out Browser Add-on
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </Card>

                <Card className="p-8 mb-8">
                    <h2 className="text-2xl font-serif font-bold mb-4">Third-Party Cookies</h2>
                    <p className="text-muted-foreground mb-4">
                        In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website.
                    </p>
                    <p className="text-muted-foreground">
                        These third parties have their own privacy policies, and we do not have access to or control over these cookies. Please check the third-party websites for more information about their cookies and how to manage them.
                    </p>
                </Card>

                <Card className="p-8">
                    <h2 className="text-2xl font-serif font-bold mb-4">Changes to This Cookie Policy</h2>
                    <p className="text-muted-foreground mb-4">
                        We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
                    </p>
                    <p className="text-muted-foreground">
                        You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
                    </p>
                </Card>

                <Card className="p-8 mt-8 bg-primary/5">
                    <h2 className="text-2xl font-serif font-bold mb-4">Contact Us</h2>
                    <p className="text-muted-foreground mb-4">
                        If you have any questions about our use of cookies, please contact us:
                    </p>
                    <div className="text-muted-foreground space-y-2">
                        <p><strong>Email:</strong> privacy@homeaura.com</p>
                        <p><strong>Address:</strong> INDORE, India</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}
