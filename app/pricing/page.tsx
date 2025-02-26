"use client"

import React from 'react';
import { Check, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import ContentContainer from '@/layouts/ContentContainer';
import PageLayout from '@/layouts/PageLayout';

// Types for our pricing data
interface PricingFeature {
    name: string;
    description?: string;
    included: boolean[];
}

interface PricingTier {
    name: string;
    description: string;
    price: {
        monthly: number;
        yearly: number;
    };
    buttonText: string;
    buttonLink: string;
    highlighted?: boolean;
    features: boolean[];
}

interface FAQ {
    question: string;
    answer: string;
}

// Pricing page component
export default function PricingPage() {
    const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'yearly'>('monthly');

    // Features list that will be shown in the comparison table
    const features: PricingFeature[] = [
        {
            name: 'Customizable User Interface',
            description: 'Personalize your workspace with our component-based UI system',
            included: [true, true, true]
        },
        {
            name: 'Environment Isolation',
            description: 'Create separate environments for different work roles and projects',
            included: [true, true, true]
        },
        {
            name: 'File Management',
            description: 'Send, receive, and manage files with advanced features',
            included: [true, true, true]
        },
        {
            name: 'Real-time Collaboration',
            description: 'Work together with team members in real-time',
            included: [false, true, true]
        },
        {
            name: 'Third-party App Integration',
            description: 'Connect with your favorite tools and services',
            included: [false, true, true]
        },
        {
            name: 'AI Features',
            description: 'Leverage AI for content summarization and smart assistance',
            included: [false, false, true]
        },
        {
            name: 'API Access',
            description: 'Access our API for custom integrations',
            included: [false, false, true]
        },
        {
            name: 'Priority Support',
            description: '24/7 dedicated customer support',
            included: [false, false, true]
        },
    ];

    // Pricing tiers data
    const pricingTiers: PricingTier[] = [
        {
            name: 'Free',
            description: 'For individuals getting started',
            price: {
                monthly: 0,
                yearly: 0
            },
            buttonText: 'Get Started',
            buttonLink: '/download',
            features: features.map(feature => feature.included[0]),
        },
        {
            name: 'Pro',
            description: 'For professionals and small teams',
            price: {
                monthly: 12,
                yearly: 120
            },
            buttonText: 'Upgrade Now',
            buttonLink: '/checkout?plan=pro',
            highlighted: true,
            features: features.map(feature => feature.included[1]),
        },
        {
            name: 'Enterprise',
            description: 'For organizations with advanced needs',
            price: {
                monthly: 49,
                yearly: 490
            },
            buttonText: 'Contact Sales',
            buttonLink: '/contact',
            features: features.map(feature => feature.included[2]),
        }
    ];

    // FAQs data
    const faqs: FAQ[] = [
        {
            question: 'Can I change my plan later?',
            answer: 'Yes, you can upgrade, downgrade, or cancel your plan at any time. If you downgrade or cancel, you will continue to have access to your current plan until the end of your billing period.'
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards, PayPal, and for Enterprise plans, we also support invoicing and purchase orders.'
        },
        {
            question: 'Is there a free trial?',
            answer: 'Yes! You can try FusionSpace Pro for 14 days before deciding to subscribe. No credit card is required for the trial.'
        },
        {
            question: 'How does the yearly billing discount work?',
            answer: "When you choose yearly billing, you'll receive a discount equivalent to 2 months free compared to monthly billing."
        },
        {
            question: 'What kind of support can I expect?',
            answer: 'All plans include community support. Pro plans include email support with a 24-hour response time, while Enterprise plans include priority 24/7 support via email, chat, and phone.'
        }
    ];

    // Calculate the discount percentage for yearly billing
    const yearlyDiscountPercentage =
        Math.round((1 - (pricingTiers[1].price.yearly / (pricingTiers[1].price.monthly * 12))) * 100);

    return (
        <PageLayout fullHeight className="py-16">
            <ContentContainer>
                {/* Header section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {`Choose the plan that's right for you and start transforming how you work.`}
                    </p>

                    {/* Billing toggle */}
                    <div className="mt-8 inline-flex items-center p-1 bg-secondary rounded-lg">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${billingCycle === 'monthly'
                                ? 'bg-primary text-primary-foreground'
                                : 'text-foreground/70 hover:text-foreground'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${billingCycle === 'yearly'
                                ? 'bg-primary text-primary-foreground'
                                : 'text-foreground/70 hover:text-foreground'
                                }`}
                        >
                            Yearly
                            {billingCycle === 'yearly' ? (
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-medium">
                                    Save {yearlyDiscountPercentage}%
                                </span>
                            ) : (
                                <span className="bg-secondary text-muted-foreground text-xs px-2 py-0.5 rounded-full font-medium">
                                    Save {yearlyDiscountPercentage}%
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Pricing table */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {pricingTiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`rounded-lg border ${tier.highlighted
                                ? 'border-blue-accent shadow-lg ring-1 ring-blue-accent relative'
                                : 'border-border'
                                } bg-card overflow-hidden`}
                        >
                            {tier.highlighted && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-accent text-white text-xs font-bold px-4 py-1 rounded-b-md">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="p-6">
                                <h3 className="text-xl font-bold">{tier.name}</h3>
                                <p className="text-muted-foreground mt-1">{tier.description}</p>

                                <div className="mt-4 mb-6">
                                    <span className="text-4xl font-bold">
                                        ${billingCycle === 'monthly' ? tier.price.monthly : tier.price.yearly}
                                    </span>
                                    {tier.price.monthly > 0 && (
                                        <span className="text-muted-foreground">
                                            /{billingCycle === 'monthly' ? 'month' : 'year'}
                                        </span>
                                    )}
                                </div>

                                <Link
                                    href={tier.buttonLink}
                                    className={`block w-full text-center py-2 px-4 rounded-md font-medium ${tier.highlighted
                                        ? 'bg-blue-accent text-white hover:bg-blue-accent-hover'
                                        : 'bg-secondary text-foreground hover:bg-secondary/80'
                                        } transition-colors`}
                                >
                                    {tier.buttonText}
                                </Link>
                            </div>

                            <div className="border-t border-border">
                                <div className="p-6">
                                    <h4 className="font-medium mb-4">Includes:</h4>
                                    <ul className="space-y-3">
                                        {features.map((feature, featureIndex) => (
                                            <li
                                                key={feature.name}
                                                className={`flex items-start gap-2 ${!tier.features[featureIndex] ? 'text-muted-foreground' : ''
                                                    }`}
                                            >
                                                {tier.features[featureIndex] ? (
                                                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                ) : (
                                                    <div className="h-5 w-5 flex-shrink-0" />
                                                )}
                                                <span className="text-sm">{feature.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Feature comparison section */}
                <div className="mb-16 overflow-hidden">
                    <h2 className="text-2xl font-bold mb-8 text-center">Feature Comparison</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse min-w-[800px]">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="py-4 px-6 text-left">Features</th>
                                    {pricingTiers.map((tier) => (
                                        <th
                                            key={tier.name}
                                            className={`py-4 px-6 text-center ${tier.highlighted ? 'bg-blue-50 dark:bg-blue-950/20' : ''
                                                }`}
                                        >
                                            {tier.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((feature) => (
                                    <tr key={feature.name} className="border-b border-border">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2">
                                                <span>{feature.name}</span>
                                                {feature.description && (
                                                    <div className="group relative">
                                                        <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-popover text-popover-foreground text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-10">
                                                            {feature.description}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </td>

                                        {feature.included.map((included, tierIndex) => (
                                            <td
                                                key={tierIndex}
                                                className={`py-4 px-6 text-center ${pricingTiers[tierIndex].highlighted ? 'bg-blue-50 dark:bg-blue-950/20' : ''
                                                    }`}
                                            >
                                                {included ? (
                                                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                                                ) : (
                                                    <span className="h-5 w-5 text-gray-300 inline-block">—</span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* FAQ section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

                    <div className="max-w-3xl mx-auto divide-y divide-border">
                        {faqs.map((faq, index) => (
                            <div key={index} className="py-5">
                                <details className="group">
                                    <summary className="flex items-center justify-between cursor-pointer">
                                        <h3 className="text-lg font-medium">{faq.question}</h3>
                                        <span className="transition group-open:rotate-180">
                                            <svg
                                                width="24"
                                                height="24"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="text-muted-foreground"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-3 text-muted-foreground">{faq.answer}</p>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA section */}
                <div className="text-center bg-card rounded-lg p-8 border border-border">
                    <h2 className="text-2xl font-bold mb-2">Ready to get started?</h2>
                    <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                        Join thousands of satisfied users who are already enhancing their productivity with FusionSpace.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/download"
                            className="bg-blue-accent hover:bg-blue-accent-hover text-white px-6 py-3 rounded-md font-medium transition-colors"
                        >
                            Get Started for Free
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 rounded-md font-medium transition-colors"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </ContentContainer>
        </PageLayout>
    );
}