import { CartContext, CartProduct } from "@/providers/cart";
import Image from "next/image";
import { Button } from "./button";
import { Minus, Plus, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  const handleDecreaseProductQuantityClick = () => {
    decreaseProductQuantity(product.id);
  };

  const handleIncreaseProductQuantityClick = () => {
    increaseProductQuantity(product.id);
  };

  const handleRemoveProductFromCartClick = () => {
    removeProductFromCart(product.id);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent lg:h-[120px] lg:w-[120px]">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>

        <div className="flex flex-col gap-1 lg:gap-2">
          <p className="text-xs lg:text-sm">{product.name}</p>

          <div className="flex items-center gap-2">
            <p className="text-sm font-bold lg:text-base">
              R$ {product.totalPrice.toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-75 lg:text-sm">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1 lg:gap-3">
            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8 lg:h-9 lg:w-9"
              onClick={handleDecreaseProductQuantityClick}
            >
              <Minus size={16} />
              
            </Button>

            <span className="text-xs lg:text-sm">{product.quantity}</span>

            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8 lg:h-9 lg:w-9"
              onClick={handleIncreaseProductQuantityClick}
            >
              <Plus size={16}/>
            </Button>
          </div>
        </div>
      </div>

      <Button
        size="icon"
        variant="outline"
        onClick={handleRemoveProductFromCartClick}
      >
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
