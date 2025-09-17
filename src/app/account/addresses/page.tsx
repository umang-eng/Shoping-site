"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const initialAddresses = [
  {
    id: 1,
    isDefault: true,
    name: 'Jane Doe',
    street: '123 Artisan Lane',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11201',
    country: 'USA',
  },
  {
    id: 2,
    isDefault: false,
    name: 'Jane Doe',
    street: '456 Maker Street',
    city: 'San Francisco',
    state: 'CA',
    zip: '94107',
    country: 'USA',
  },
];

const AddressForm = ({ address, onSave }: { address?: any; onSave: (address: any) => void }) => {
  const [formData, setFormData] = useState({
    name: address?.name || '',
    street: address?.street || '',
    city: address?.city || '',
    state: address?.state || '',
    zip: address?.zip || '',
    country: address?.country || 'USA',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...address, ...formData });
  };
  
  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
       <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" value={formData.name} onChange={handleChange} className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="street" className="text-right">Street</Label>
        <Input id="street" value={formData.street} onChange={handleChange} className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="city" className="text-right">City</Label>
        <Input id="city" value={formData.city} onChange={handleChange} className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="state" className="text-right">State/Province</Label>
        <Input id="state" value={formData.state} onChange={handleChange} className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="zip" className="text-right">ZIP Code</Label>
        <Input id="zip" value={formData.zip} onChange={handleChange} className="col-span-3" />
      </div>
      <DialogFooter>
         <DialogClose asChild>
            <Button type="submit">Save Address</Button>
         </DialogClose>
      </DialogFooter>
    </form>
  )
}

export default function MyAddressesPage() {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSave = (addressToSave: any) => {
    if (addressToSave.id) {
      setAddresses(addresses.map(addr => addr.id === addressToSave.id ? addressToSave : addr));
    } else {
      setAddresses([...addresses, { ...addressToSave, id: Date.now() }]);
    }
  };

  const handleRemove = (id: number) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };
  
  const handleSetDefault = (id: number) => {
    setAddresses(addresses.map(addr => ({ ...addr, isDefault: addr.id === id })));
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-bold font-headline mb-8">My Addresses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map(address => (
          <Card key={address.id} className={address.isDefault ? "border-primary" : ""}>
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <span>{address.name} {address.isDefault && <span className="text-sm font-normal text-primary ml-2">(Default)</span>}</span>
                <div className="flex gap-2">
                   <Dialog>
                    <DialogTrigger asChild>
                       <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader><DialogTitle>Edit Address</DialogTitle></DialogHeader>
                      <AddressForm address={address} onSave={handleSave} />
                    </DialogContent>
                  </Dialog>
                  <Button variant="ghost" size="icon" onClick={() => handleRemove(address.id)}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>{address.street}</p>
              <p>{address.city}, {address.state} {address.zip}</p>
              <p>{address.country}</p>
              {!address.isDefault && (
                <Button variant="link" className="p-0 h-auto mt-4" onClick={() => handleSetDefault(address.id)}>
                  Set as Default
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
         <Dialog>
            <DialogTrigger asChild>
              <button className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg p-6 text-muted-foreground hover:bg-secondary hover:border-primary transition-colors">
                  <PlusCircle className="h-8 w-8" />
                  <span>Add a New Address</span>
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>Add New Address</DialogTitle></DialogHeader>
              <AddressForm onSave={handleSave} />
            </DialogContent>
          </Dialog>
      </div>
    </div>
  );
}
