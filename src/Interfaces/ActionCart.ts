import type { Product } from "./Product";

export type ActionCart =
    {
      type: "ADD_ITEM";
      payload: Product;
    } 
    |
    { type: "REMOVE_ITEM"; 
      payload: Product["id"]
    }
    | 
    {
      type: "UPDATE_QUANTITY";
      payload: { productId: Product["id"]; quantity: number };
    }
