
import { type CartItem } from '@/app/cart/page';
import CartItemRow from './cart-item-row';
import { Separator } from '@/components/ui/separator';

type CartItemsListProps = {
  items: CartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
};

const CartItemsList = ({ items, onUpdateQuantity, onRemoveItem }: CartItemsListProps) => {
  return (
    <div className="bg-background/50 rounded-lg p-0 sm:p-6">
       <div className="hidden sm:flex justify-between font-semibold text-muted-foreground text-sm uppercase pb-4 border-b border-border">
        <div className="w-2/5">Product</div>
        <div className="w-1/5 text-center">Quantity</div>
        <div className="w-1/5 text-right">Total</div>
        <div className="w-1/5 text-right"></div>
      </div>
      <div>
        {items.map((item, index) => (
          <CartItemRow
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItemsList;
