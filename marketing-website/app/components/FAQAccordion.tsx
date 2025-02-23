import React from 'react';
import { AccordionContent } from './accordion/AccordionContent';
import { AccordionItem } from './accordion/AccordionItem';
import { AccordionTrigger } from './accordion/AccordionTrigger';
import { Accordion } from './accordion/Accordion';

const FAQAccordion = () => {
    const faqs = [
        {
            question: "What platforms is FusionSpace available on?",
            answer: "FusionSpace is available on multiple platforms including web browsers, desktop applications (Windows, macOS, Linux), and mobile devices (iOS, Android). You can access your workspace seamlessly across all your devices."
        },
        {
            question: "How much does FusionSpace cost?",
            answer: "FusionSpace offers flexible pricing options:\n\n• Free Tier: Basic features with limited storage\n• Pro: $9.99/month with advanced features and 100GB storage\n• Enterprise: Custom pricing for organizations with dedicated support and unlimited storage\n\nAll plans come with a 14-day free trial."
        },
        {
            question: "Can I integrate third-party applications?",
            answer: "Yes! FusionSpace supports integration with popular tools like Google Workspace, Microsoft 365, Slack, and many more. You can connect and manage your favorite apps directly within FusionSpace's interface."
        },
        {
            question: "How secure is my data?",
            answer: "We take security seriously. FusionSpace implements end-to-end encryption, two-factor authentication, and regular security audits. Your data is stored in secure, encrypted servers with regular backups."
        },
        {
            question: "Is there a limit on the number of environments I can create?",
            answer: "Free tier users can create up to 3 environments. Pro users can create unlimited environments, while Enterprise users get additional features like environment templates and advanced management tools."
        },
        {
            question: "Do you offer customer support?",
            answer: "Yes, we provide multiple support channels:\n\n• 24/7 email support for all users\n• Live chat support for Pro users\n• Dedicated support manager for Enterprise customers\n• Comprehensive documentation and community forums"
        }
    ];

    return (
        <div className="w-full max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-semibold">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted whitespace-pre-line">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default FAQAccordion;