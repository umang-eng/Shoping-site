
"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ProductDetailsProps = {
  description: string;
  specifications: { name: string; value: string }[];
};

const ProductDetails = ({ description, specifications }: ProductDetailsProps) => {
  const tabsContent = [
    { value: "description", title: "Full Description", content: description },
    { 
      value: "specifications", 
      title: "Specifications", 
      content: (
        <ul className="list-disc list-inside space-y-2">
          {specifications.map(spec => (
            <li key={spec.name}><strong>{spec.name}:</strong> {spec.value}</li>
          ))}
        </ul>
      )
    },
    { value: "shipping", title: "Shipping & Returns", content: "Free standard shipping on orders over $100. Returns accepted within 30 days of purchase. Items must be in original condition." },
    { value: "reviews", title: "Customer Reviews", content: "No reviews yet. Be the first to share your thoughts!" },
  ];

  return (
    <div className="w-full bg-background mt-12 sm:mt-16">
      <div className="container mx-auto px-6 py-12">
        {/* Desktop: Tabs */}
        <div className="hidden sm:block">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-secondary">
              {tabsContent.map(tab => (
                 <TabsTrigger key={tab.value} value={tab.value}>{tab.title}</TabsTrigger>
              ))}
            </TabsList>
            {tabsContent.map(tab => (
              <TabsContent key={tab.value} value={tab.value} className="py-6 px-4 prose prose-invert max-w-none">
                {tab.content}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Mobile: Accordion */}
        <div className="sm:hidden">
          <Accordion type="single" collapsible className="w-full">
            {tabsContent.map(item => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent className="prose prose-invert max-w-none">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
