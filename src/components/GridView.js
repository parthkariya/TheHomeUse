import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          // console.log("products are", products);
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 200px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
    margin-bottom: 40px;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media (min-width: 1466px) {
    .products-container {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;

export default GridView;
