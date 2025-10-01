"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function DashboardPage() {
  const user = {
    firstName: 'Jane',
  };

  const recentOrder = {
    id: 'VERVE-12345',
    status: 'Shipped',
  };

  const defaultAddress = {
    street: '123 Artisan Lane',
    city: 'Brooklyn, NY 11201',
  };
  
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-bold font-headline mb-8">
        Welcome back, {user.firstName}.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Order</CardTitle>
            <CardDescription>Here&apos;s the latest on your purchase.</CardDescription>
          </CardHeader>
          <CardContent>
            {recentOrder ? (
              <>
                <p className="font-semibold">Order #{recentOrder.id} is {recentOrder.status}.</p>
                <div className="mt-4 flex gap-2">
                    <Button>Track Shipment</Button>
                    <Button asChild variant="outline"><Link href="/account/orders">View Details</Link></Button>
                </div>
              </>
            ) : (
                <>
                    <p>Ready to find your next piece?</p>
                    <Button asChild className="mt-4"><Link href="/collections/all">Start Shopping</Link></Button>
                </>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Primary Address</CardTitle>
            <CardDescription>Your default shipping information.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {defaultAddress.street}<br/>
              {defaultAddress.city}
            </p>
             <Button asChild variant="secondary" className="mt-4"><Link href="/account/addresses">Edit Address</Link></Button>
          </CardContent>
        </Card>

         <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Account Info</CardTitle>
            <CardDescription>Manage your login and personal details.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
                Jane Doe<br/>
                jane.doe@example.com
            </p>
            <Button asChild variant="secondary" className="mt-4"><Link href="/account/details">Update Details</Link></Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
