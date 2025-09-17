
"use client";

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

type ReviewStepProps = {
  shippingData: any;
  paymentData: any;
  onEditShipping: () => void;
  onEditPayment: () => void;
};

const ReviewStep = ({ shippingData, paymentData, onEditShipping, onEditPayment }: ReviewStepProps) => {
  const router = useRouter();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const handlePlaceOrder = () => {
    setIsPlacingOrder(true);
    // Simulate API call
    setTimeout(() => {
      const orderId = `VERVE-${Math.floor(10000 + Math.random() * 90000)}`;
      router.push(`/checkout/confirmation?orderId=${orderId}&name=${shippingData.fullName.split(' ')[0]}`);
    }, 2000);
  };

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-2xl font-bold font-headline mb-6">Review & Place Order</h2>
      
      <div className="space-y-6">
        <div className="border border-border rounded-lg p-4 text-sm">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-semibold text-base mb-1">Ship To</h3>
                    <p className="text-muted-foreground">{shippingData?.fullName}</p>
                    <p className="text-muted-foreground">{shippingData?.address}, {shippingData?.city}, {shippingData?.postalCode}</p>
                </div>
                <Button variant="link" onClick={onEditShipping}>Edit</Button>
            </div>
        </div>
        
        <div className="border border-border rounded-lg p-4 text-sm">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-semibold text-base mb-1">Payment Method</h3>
                    <p className="text-muted-foreground">Visa ending in •••• {paymentData?.cardNumber.slice(-4)}</p>
                </div>
                <Button variant="link" onClick={onEditPayment}>Edit</Button>
            </div>
        </div>
      </div>
      
      <div className="mt-8 text-right">
        <Button 
          size="lg" 
          className="w-full sm:w-auto h-14 text-lg font-bold"
          onClick={handlePlaceOrder}
          disabled={isPlacingOrder}
        >
          {isPlacingOrder ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Placing Order...
            </>
          ) : (
            'PLACE ORDER'
          )}
        </Button>
      </div>
    </div>
  );
};

export default ReviewStep;
