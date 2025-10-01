
"use client";

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { CreditCard, Landmark } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const paymentSchema = z.object({
  cardNumber: z.string().length(16, "Card number must be 16 digits."),
  nameOnCard: z.string().min(2, "Name is required."),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiry date (MM/YY)."),
  cvv: z.string().min(3).max(4, "Invalid CVV."),
});

import { ShippingFormValues } from './shipping-form';

export type PaymentFormValues = z.infer<typeof paymentSchema>;

type PaymentFormProps = {
  onContinue: () => void;
  setPaymentData: (data: PaymentFormValues) => void;
  shippingData: ShippingFormValues | null;
  onEdit: () => void;
};

const PaymentForm = ({ onContinue, setPaymentData, shippingData, onEdit }: PaymentFormProps) => {
  const form = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema),
    mode: 'onBlur',
  });

  function onSubmit(data: PaymentFormValues) {
    setPaymentData(data);
    onContinue();
  }

  return (
    <div className="animate-fade-in-up">
      <div className="border border-border rounded-lg p-4 mb-8 text-sm">
        <div className="flex justify-between items-center">
            <div>
                <h3 className="text-muted-foreground">Ship To</h3>
                <p className="font-medium">{shippingData?.address}, {shippingData?.city}</p>
            </div>
            <Button variant="link" onClick={onEdit}>Edit</Button>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold font-headline mb-6">Payment</h2>
      
      <Tabs defaultValue="credit-card" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="credit-card"><CreditCard className="mr-2"/> Credit Card</TabsTrigger>
          <TabsTrigger value="paypal" disabled><Landmark className="mr-2"/> PayPal</TabsTrigger>
        </TabsList>
        <TabsContent value="credit-card">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Card Number</FormLabel>
                    <FormControl>
                      <Input placeholder="0000 0000 0000 0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nameOnCard"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name on Card</FormLabel>
                    <FormControl>
                      <Input placeholder="Jane Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="expiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expiration Date</FormLabel>
                      <FormControl>
                        <Input placeholder="MM/YY" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cvv"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CVV</FormLabel>
                      <FormControl>
                        <Input placeholder="123" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="text-right">
                <Button type="submit" size="lg" className="h-12 px-8 font-bold mt-4">
                  Review Your Order
                </Button>
              </div>
            </form>
          </Form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentForm;
