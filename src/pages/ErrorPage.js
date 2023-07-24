import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const ErrorPage = () => {
  window.scrollTo(0, 0);
  return (
    <Wrapper className="page-100">
      <Helmet>
        <title>The Home Use</title>
        <meta name="description" content="Page Not Found | The Home Use" />
      </Helmet>
      <section>
        <h1>404</h1>
        <h3>Page not found</h3>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
