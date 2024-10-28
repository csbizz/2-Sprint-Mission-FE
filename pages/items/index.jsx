/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BestProducts from '@/src/components/product/BestProducts';
import ProductsOnSale from '@/src/components/product/ProductsOnSale.jsx';
import c from '@/src/utils/constants.js';
import DropdownProvider from '@/src/contexts/DropdownContext';

const style = {
  itemsPage: css`
    padding-top: 2.4rem;
    padding-bottom: 14rem;

    @media (max-width: ${c.BREAKPOINTS.TABLET}px) {
      padding-right: 2.4rem;
      padding-left: 2.4rem;
    }

    @media (max-width: ${c.BREAKPOINTS.MOBILE}px) {
      padding-right: 1.6rem;
      padding-left: 1.6rem;
    }
  `,
  bestProductWrapper: css`
    margin: 2.4rem auto 4rem auto;

    @media (max-width: ${c.BREAKPOINTS.MOBILE}px) {
      max-width: 36rem;
    }
  `,
};

export default function ItemsPage() {
  return (
    <div id="items" css={style.itemsPage}>
      {/* <div css={style.bestProductWrapper}>
          <BestProducts />
        </div> */}
      <DropdownProvider>
        <ProductsOnSale />
      </DropdownProvider>
    </div>
  );
}