export interface TProduct {
  id: string | number;
  imageURL: string;
  name: string;
  description: string;
  price: number;
}

export type TProps = TProduct;
