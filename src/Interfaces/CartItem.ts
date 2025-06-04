import type { Product } from "./Product";

interface CartItem {
    product: Product;
    quantity: number;
}

export type { CartItem };
