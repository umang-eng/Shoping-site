
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const faqItems = [
  {
    question: "What is Verve Curations?",
    answer: "Verve Curations is a curated marketplace for unique, high-quality artisanal goods. We partner directly with skilled creators from around the world to bring you a collection of objects with soul and stories with heart."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order has shipped, you will receive an email with a tracking number and a link to the carrier's website. You can also find your order status and tracking information in the 'My Orders' section of your account page."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns on most items within 30 days of delivery. Items must be in their original, unused condition with all tags attached. Some items, such as custom-made products or final sale items, are not eligible for return. Please see our full Shipping & Returns policy for details."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by destination. Please proceed to checkout to see the available shipping options and costs for your location."
  },
  {
    question: "How do I care for my product?",
    answer: "Care instructions are unique to each product. You can find detailed care information on the product detail page under the 'Specifications' or 'Full Description' tab. For any specific questions, feel free to contact us."
  },
  {
    question: "How can I partner with Verve Curations as an artisan?",
    answer: "We are always looking for passionate creators with exceptional craftsmanship. If you are interested in joining our community of artisans, please visit our 'Contact Us' page and send us a message with the subject 'Press & Partnerships', including a link to your work."
  }
];

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">Frequently Asked Questions</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                Have a question? We&apos;ve compiled a list of our most common inquiries to help you out.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border border-border rounded-lg px-6 bg-secondary/20">
                  <AccordionTrigger className="hover:no-underline text-left text-lg font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 prose">
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div 
            className="text-center mt-16 p-8 bg-secondary/30 rounded-lg max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-headline font-semibold mb-4">Can&apos;t find your answer?</h2>
            <p className="text-muted-foreground mb-6">Our team is here to help. Reach out to us directly for any further questions.</p>
            <Button asChild size="lg" className="h-12 px-8 font-bold">
                <Link href="/contact">CONTACT US</Link>
            </Button>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
