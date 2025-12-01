import { Card } from '@/components/ui/card';
import { Scale, UserCheck, AlertCircle, FileCheck } from 'lucide-react';

export default function TermsOfService() {
    const sections = [
        {
            icon: UserCheck,
            title: 'Acceptance of Terms',
            content: [
                'By accessing and using the HomeAura website, you accept and agree to be bound by the terms and provisions of this agreement.',
                'If you do not agree to abide by the above, please do not use this service.',
                'We reserve the right to modify these terms at any time, and such modifications shall be effective immediately upon posting.',
            ],
        },
        {
            icon: FileCheck,
            title: 'Use License',
            content: [
                'Permission is granted to temporarily download one copy of the materials on HomeAura\'s website for personal, non-commercial transitory viewing only.',
                'This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials, use the materials for any commercial purpose or for any public display, attempt to reverse engineer any software contained on HomeAura\'s website, remove any copyright or other proprietary notations from the materials, or transfer the materials to another person or "mirror" the materials on any other server.',
                'This license shall automatically terminate if you violate any of these restrictions and may be terminated by HomeAura at any time.',
            ],
        },
        {
            icon: Scale,
            title: 'Intellectual Property',
            content: [
                'All content included on this site, such as text, graphics, logos, images, and software, is the property of HomeAura or its content suppliers and is protected by international copyright laws.',
                'The compilation of all content on this site is the exclusive property of HomeAura and is protected by international copyright laws.',
                'All trademarks, service marks, and trade names are proprietary to HomeAura.',
            ],
        },
        {
            icon: AlertCircle,
            title: 'Limitation of Liability',
            content: [
                'In no event shall HomeAura or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on HomeAura\'s website.',
                'HomeAura does not warrant that the materials on its website are accurate, reliable, or correct; that the website will be available at any particular time or location; or that the website is free of viruses or other harmful components.',
                'Your use of the website is at your own risk.',
            ],
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6" data-testid="text-terms-title">
                        Terms of Service
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Last updated: December 1, 2024
                    </p>
                </div>

                <Card className="p-8 mb-8 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900">
                    <p className="text-muted-foreground mb-4">
                        <strong>Please read these Terms of Service carefully before using our website.</strong>
                    </p>
                    <p className="text-muted-foreground">
                        These Terms of Service ("Terms") govern your access to and use of the HomeAura website and services. By accessing or using our website, you agree to be bound by these Terms.
                    </p>
                </Card>

                <div className="space-y-8">
                    {sections.map((section, index) => {
                        const Icon = section.icon;
                        return (
                            <Card key={index} className="p-8" data-testid={`card-terms-section-${index}`}>
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

                <div className="mt-8 space-y-8">
                    <Card className="p-8">
                        <h2 className="text-2xl font-serif font-bold mb-4">Product Descriptions</h2>
                        <p className="text-muted-foreground mb-3">
                            HomeAura attempts to be as accurate as possible in product descriptions. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.
                        </p>
                        <p className="text-muted-foreground">
                            If a product offered by HomeAura is not as described, your sole remedy is to return it in unused condition following our refund policy.
                        </p>
                    </Card>

                    <Card className="p-8">
                        <h2 className="text-2xl font-serif font-bold mb-4">Pricing and Availability</h2>
                        <p className="text-muted-foreground mb-3">
                            We reserve the right to modify prices at any time without notice. All prices are subject to change, and we are not responsible for typographical errors.
                        </p>
                        <p className="text-muted-foreground">
                            Product availability is subject to change. We make every effort to display available inventory accurately, but we cannot guarantee that products will be in stock.
                        </p>
                    </Card>

                    <Card className="p-8">
                        <h2 className="text-2xl font-serif font-bold mb-4">Governing Law</h2>
                        <p className="text-muted-foreground">
                            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Indore, India.
                        </p>
                    </Card>
                </div>

                <Card className="p-8 mt-8 bg-primary/5">
                    <h2 className="text-2xl font-serif font-bold mb-4">Contact Information</h2>
                    <p className="text-muted-foreground mb-4">
                        If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="text-muted-foreground space-y-2">
                        <p><strong>Email:</strong> legal@homeaura.com</p>
                        <p><strong>Address:</strong> INDORE, India</p>
                        <p><strong>Phone:</strong> Available Monday - Saturday, 10am - 6pm</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}
