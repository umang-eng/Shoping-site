
"use client";

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ProgressIndicator from '@/components/sections/checkout/progress-indicator';
import CheckoutOrderSummary from '@/components/sections/checkout/checkout-order-summary';
import ShippingForm from '@/components/sections/checkout/shipping-form';
import PaymentForm from '@/components/sections/checkout/payment-form';
import ReviewStep from '@/components/sections/checkout/review-step';
import type { CartItem } from '@/app/cart/page';
import { getAllProducts } from '@/lib/product-data';

// Mock data for checkout
const initialCartProducts = getAllProducts().slice(0, 3);
const initialCartItems: CartItem[] = initialCartProducts.map((product, index) => ({
  ...product,
  quantity: index + 1,
}));
const subtotal = initialCartItems.reduce((sum, item) => sum + (item.salePrice || item.price) * item.quantity, 0);

type CheckoutStep = 'shipping' | 'payment' | 'review';

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [shippingData, setShippingData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);

  const goToNextStep = () => {
    if (currentStep === 'shipping') setCurrentStep('payment');
    else if (currentStep === 'payment') setCurrentStep('review');
  };
  
  const goToStep = (step: CheckoutStep) => {
    setCurrentStep(step);
  }

  const renderStep = () => {
    switch (currentStep) {
      case 'shipping':
        return <ShippingForm onContinue={goToNextStep} setShippingData={setShippingData} />;
      case 'payment':
        return <PaymentForm shippingData={shippingData} onContinue={goToNextStep} setPaymentData={setPaymentData} onEdit={() => goToStep('shipping')} />;
      case 'review':
        return <ReviewStep shippingData={shippingData} paymentData={paymentData} onEditShipping={() => goToStep('shipping')} onEditPayment={() => goToStep('payment')} />;
      default:
        return <ShippingForm onContinue={goToNextStep} setShippingData={setShippingData} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-8 sm:py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
            {/* Left Column: Form Steps */}
            <div className="order-2 lg:order-1">
              <ProgressIndicator currentStep={currentStep} />
              <div className="mt-8">
                {renderStep()}
              </div>
            </div>
            {/* Right Column: Order Summary */}
            <div className="order-1 lg:order-2 mb-12 lg:mb-0">
               <CheckoutOrderSummary items={initialCartItems} subtotal={subtotal} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
