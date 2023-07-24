import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, price, description, slug, wholesale_price } =
          product;
        console.log("product is", product);
        return (
          <article key={id}>
            <Link to={`/products/${slug}`}>
              <img src={image} alt={name} />
            </Link>
            <div>
              <h4>{name}</h4>
              <h5 className="pricee">{formatPrice(price)}</h5>
              <h5 className="price">{formatPrice(wholesale_price)}</h5>
              {/* <p>{description.substring(0, 150)}...</p> */}
              <div>{renderHTML(description.substring(0, 150))}</div>
              <Link to={`/products/${slug}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: unset;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }

  .pricee {
    font-size: 14px;
    text-decoration: line-through;
    font-weight: 400;
  }
  .price {
    color: var(--clr-primary-5);
    margin-bottom: 0.75rem;
    font-weight: 700;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
