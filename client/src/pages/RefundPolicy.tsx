import { Card } from '@/components/ui/card';
import { RotateCcw, CheckCircle, XCircle, Clock, Package, CreditCard } from 'lucide-react';

export default function RefundPolicy() {
    const eligibleItems = [
        'Products must be in original condition with all tags attached',
        'Items must be unused and in their original packaging',
        'Returns must be initiated within 30 days of delivery',
        'Proof of purchase (order confirmation or receipt) is required',
    ];

    const nonEligibleItems = [
        'Custom or personalized furniture items',
        'Clearance or final sale items',
        'Items that have been assembled or installed',
        'Products damaged due to misuse or improper care',
    ];

    const processSteps = [
        {
            icon: RotateCcw,
            title: 'Initiate Return',
            description: 'Contact our customer service within 30 days of delivery to request a return authorization.',
        },
        {
            icon: Package,
            title: 'Prepare Package',
            description: 'Pack the item securely in its original packaging with all components and accessories.',
        },
        {
            icon: CheckCircle,
            title: 'Ship Item',
            description: 'Ship the item to our returns center using the provided return label and tracking number.',
        },
        {
            icon: CreditCard,
            title: 'Receive Refund',
            description: 'Once inspected and approved, your refund will be processed within 5-7 business days.',
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6" data-testid="text-refund-title">
                        Refund Policy
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Your satisfaction is our priority
                    </p>
                </div>

                <Card className="p-8 mb-8 bg-primary/5">
                    <p className="text-muted-foreground mb-4">
                        At HomeAura, we want you to be completely satisfied with your purchase. If you're not happy with your furniture for any reason, we offer a 30-day return policy for most items.
                    </p>
                    <p className="text-muted-foreground">
                        Please read this refund policy carefully to understand our guidelines and process for returns and refunds.
                    </p>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30">
                                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                            </div>
                            <h2 className="text-xl font-serif font-bold">Eligible for Return</h2>
                        </div>
                        <ul className="space-y-2">
                            {eligibleItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30">
                                <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                            </div>
                            <h2 className="text-xl font-serif font-bold">Not Eligible for Return</h2>
                        </div>
                        <ul className="space-y-2">
                            {nonEligibleItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <XCircle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>

                <h2 className="text-3xl font-serif font-bold mb-6">Return Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <Card key={index} className="p-6" data-testid={`card-process-step-${index}`}>
                                <div className="flex items-start gap-4">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">
                                            {index + 1}. {step.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                <Card className="p-8 mb-8">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                            <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-4">Refund Timeline</h2>
                        </div>
                    </div>
                    <div className="ml-16 space-y-3">
                        <p className="text-muted-foreground">
                            Once we receive your returned item, our team will inspect it to ensure it meets our return criteria. This inspection typically takes 2-3 business days.
                        </p>
                        <p className="text-muted-foreground">
                            If your return is approved, we will process your refund within 5-7 business days. The refund will be credited to your original payment method.
                        </p>
                        <p className="text-muted-foreground">
                            Please note that it may take additional time for your bank or credit card company to process the refund and post it to your account.
                        </p>
                    </div>
                </Card>

                <Card className="p-8 mb-8">
                    <h2 className="text-2xl font-serif font-bold mb-4">Shipping Costs</h2>
                    <div className="space-y-3 text-muted-foreground">
                        <p>
                            <strong>Return Shipping:</strong> For returns due to defects or errors on our part, we will provide a prepaid return shipping label at no cost to you.
                        </p>
                        <p>
                            <strong>Customer-Initiated Returns:</strong> For returns initiated for other reasons (e.g., change of mind), the customer is responsible for return shipping costs. We will deduct the actual shipping cost from your refund.
                        </p>
                        <p>
                            <strong>Original Shipping:</strong> Original shipping charges are non-refundable unless the return is due to our error.
                        </p>
                    </div>
                </Card>

                <Card className="p-8 mb-8">
                    <h2 className="text-2xl font-serif font-bold mb-4">Exchanges</h2>
                    <p className="text-muted-foreground mb-4">
                        We do not offer direct exchanges at this time. If you would like to exchange an item for a different product, please:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Return the original item following our return process</li>
                        <li>Wait for your refund to be processed</li>
                        <li>Place a new order for the desired item</li>
                    </ol>
                    <p className="text-muted-foreground mt-4">
                        This ensures you receive your preferred item as quickly as possible and helps us maintain accurate inventory.
                    </p>
                </Card>

                <Card className="p-8 mb-8 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900">
                    <h2 className="text-2xl font-serif font-bold mb-4">Damaged or Defective Items</h2>
                    <p className="text-muted-foreground mb-4">
                        If you receive a damaged or defective item, please contact us immediately with photos of the damage. We will arrange for a replacement or full refund at no cost to you, including return shipping.
                    </p>
                    <p className="text-muted-foreground">
                        <strong>Important:</strong> Please inspect your furniture upon delivery and report any damage within 48 hours of receipt.
                    </p>
                </Card>

                <Card className="p-8 bg-primary/5">
                    <h2 className="text-2xl font-serif font-bold mb-4">Contact Customer Service</h2>
                    <p className="text-muted-foreground mb-4">
                        For any questions about returns or refunds, or to initiate a return, please contact our customer service team:
                    </p>
                    <div className="text-muted-foreground space-y-2">
                        <p><strong>Email:</strong> returns@homeaura.com</p>
                        <p><strong>Phone:</strong> Available Monday - Saturday, 10am - 6pm</p>
                        <p><strong>Address:</strong> INDORE, India</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}
