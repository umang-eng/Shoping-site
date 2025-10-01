
"use client";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  email: z.string().email("Invalid email address."),
  orderNumber: z.string().optional(),
  subject: z.string({ required_error: "Please select a subject." }),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        mode: 'onBlur',
    });

    const { control, handleSubmit, formState: { errors } } = form;

    const onSubmit = (data: ContactFormValues) => {
        console.log(data);
        setIsSubmitted(true);
    };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        {/* Section 1: Page Header */}
        <section className="relative py-20 md:py-32 flex items-center justify-center text-center text-foreground overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="https://picsum.photos/seed/workspace/1920/1080"
                    alt="Organized workspace"
                    fill
                    priority
                    className="object-cover"
                    data-ai-hint="organized workspace"
                />
                <div className="absolute inset-0 bg-background/70" />
            </div>
            <div 
                className="relative z-10 px-6 max-w-2xl mx-auto animate-fade-in-up"
                style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-balance">We&apos;re Here to Help.</h1>
                <p className="mt-4 text-lg text-foreground/80 text-balance">
                    Whether you have a question about an order, our artisans, or just want to share your thoughts, we&apos;d love to hear from you.
                </p>
            </div>
        </section>

        {/* Section 2: Main Content */}
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Right Column (Mobile Order 1) */}
                    <div className="lg:col-span-2 order-1 lg:order-2">
                        <div className="bg-secondary/30 rounded-lg p-8">
                            <h3 className="text-2xl font-headline font-semibold mb-6">More Ways to Connect</h3>
                            <div className="space-y-6 text-foreground/80">
                                <p>
                                    For immediate answers, you might find what you&apos;re looking for on our <Link href="/faq" className="font-bold text-primary hover:underline">FAQ Page</Link>.
                                </p>
                                <a href="mailto:support@vervecurations.com" className="flex items-center gap-4 group">
                                    <Mail className="h-6 w-6 text-primary shrink-0"/>
                                    <span className="group-hover:text-primary transition-colors">support@vervecurations.com</span>
                                </a>
                                <a href="tel:+917912345678" className="flex items-center gap-4 group">
                                    <Phone className="h-6 w-6 text-primary shrink-0"/>
                                    <span className="group-hover:text-primary transition-colors">+91 79 1234 5678</span>
                                </a>
                                <div className="flex items-center gap-4">
                                    <Clock className="h-6 w-6 text-primary shrink-0"/>
                                    <span>Support available Monday - Friday, 10:00 AM – 6:00 PM IST.</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="h-6 w-6 text-primary shrink-0"/>
                                    <span>Based in the heart of Ahmedabad, Gujarat.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Left Column (Mobile Order 2) */}
                    <div className="lg:col-span-3 order-2 lg:order-1">
                        <h2 className="text-3xl font-headline font-semibold mb-6">Send a Message</h2>
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center text-center bg-secondary/30 rounded-lg p-12 min-h-[400px] animate-fade-in">
                                <h3 className="text-2xl font-headline font-semibold text-primary">Thank you!</h3>
                                <p className="mt-2 text-foreground/80">We&apos;ve received your message and will be in touch within one business day.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name</label>
                                        <Input id="fullName" {...form.register('fullName')} placeholder="Jane Doe" className="bg-background" />
                                        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                                        <Input id="email" type="email" {...form.register('email')} placeholder="you@example.com" className="bg-background"/>
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="orderNumber" className="block text-sm font-medium mb-1">Order Number (Optional)</label>
                                    <Input id="orderNumber" {...form.register('orderNumber')} placeholder="e.g., #VERVE-12345" className="bg-background"/>
                                </div>
                                 <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                                    <Controller
                                        name="subject"
                                        control={control}
                                        render={({ field }) => (
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className="w-full bg-background">
                                                    <SelectValue placeholder="Select a subject..." />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Order Inquiry">Order Inquiry</SelectItem>
                                                    <SelectItem value="Product Question">Product Question</SelectItem>
                                                    <SelectItem value="Press & Partnerships">Press & Partnerships</SelectItem>
                                                    <SelectItem value="General Feedback">General Feedback</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                     {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                                    <Textarea id="message" {...form.register('message')} placeholder="Tell us how we can help..." rows={5} className="bg-background"/>
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                                </div>
                                <div className="text-right">
                                    <Button type="submit" size="lg" className="h-12 px-8 font-bold" disabled={Object.keys(errors).length > 0}>
                                        SUBMIT
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
