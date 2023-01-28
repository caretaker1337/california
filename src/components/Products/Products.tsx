import React, { useEffect, useState } from "react";

import { Loader } from "~/components";
import { Item } from "./Item";
import { TProduct } from "./Item/types";
import { Heading } from "~/theme/components";
import { StyledWrapper, StyledList } from "./styled";

const Products: React.FC = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [productsLoading, toggleLoading] = useState<boolean>(true);

  const getProducts = (): void => {
    fetch(`data/products.json`)
      .then((response: Response): Promise<TProduct[]> => response.json())
      .then((data: TProduct[]): void => {
        setProducts(data);
      })
      .catch((): void => {
        setProducts([]);
      })
      .finally((): void => {
        toggleLoading(false);
      });
  };

  useEffect((): void => {
    getProducts();
  }, []);

  return (
    <StyledWrapper>
      <Heading
        title="Save on our most selled items."
        text="Our new Limited Edition Winter Design BESPOKE 4-Door Flex™"
      />

      {productsLoading && <Loader />}

      {products && !!products.length && (
        <StyledList>
          {products.map(
            ({ id, imageURL, ...rest }: TProduct): React.ReactElement => (
              <Item imageURL={`images/${imageURL}`} key={id} {...{ id }} {...rest} />
            )
          )}
        </StyledList>
      )}
    </StyledWrapper>
  );
};

export { Products };
