import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import abuotimg1 from "../assets/New Project (1).png";
import abuotimg2 from "../assets/New Project (2).png";
import abuotimg3 from "../assets/New Project (3).png";
import abuotimg4 from "../assets/New Project (4).png";
import abuotimg5 from "../assets/New Project (5).png";
import abuotimg6 from "../assets/New Project (6).png";
import abuotimg7 from "../assets/New Project (7).png";
import abuotimg8 from "../assets/New Project (8).png";
import abuotimg9 from "../assets/New Project (9).png";
import abuotimg10 from "../assets/New Project (10).png";
import abuotimg11 from "../assets/New Project (11).png";

import abouticon1 from "../assets/New Project (12).png";
import abouticon2 from "../assets/New Project (13).png";
import abouticon3 from "../assets/New Project (14).png";

const AboutPage = () => {
  window.scrollTo(0, 0);
  return (
    <main>
      <PageHero title="About" />
      <Wrapper className="page section section-center">
        <div className="row">
          <h1>THE HOME USE STORY</h1>

          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Derived From
            The Gujarati Word ‘gruh-vaprash’ Meaning The Household Items, We At
            ‘the Home Use’ Have Redefined The Art Of E-retailing Plasticwares
            Products, Homewares, Kitchenwares And Household Items To Reach At
            Every Home In India. Before Our Launch, We Have Been Attached With
            350+ Dealer Stores In Gujarat Selling Plasticwares And Household
            Items Physically To Consumers. Our Diverse Dealer Network Is More
            Proficient In Taking Care Of The Needs And Requirements Of
            Customers. With Our Vast Experience In Reviewing Plasticwares, We
            Are Well Aware About Understanding The Quality And Preferences Of
            The Consumers. From Bringing You Domestic Brands From Prestigous
            Manufacturers And Best Importers In Housewares, Coupled With Our
            Expertise In Selection Of Products, We Are Now Growing Online
            Community For Plasticwares, Household Items And Kitchenwares.
          </p>
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Recalling
            Our Past, In 1984, Starting With A Small Warehouse In Rajkot,
            Gujarat, A Young Man In His 30’s, Lit A Culture Of Selling Quality
            Plasticwares Products Across Districts Near Rajkot. His Relations
            With Manufacturers And Experience For What Was Known To Buy & Sell
            Only A Quality Household Itmes Sparked A Culture That Would Make Us
            The Most Trustable E-commerce Brand In Plasticwares, Housewares &
            Kitchenwares Across India And World. Today, We Define This Culture
            To Continue In His Next Generation And That Will Reflect In Every
            Products We Deliver At ‘the Home Use’.
          </p>
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Today, Our
            Team Is Truely Passionate About Catering Every Household Needs
            Because After All We Know What You Use At The Home !
          </p>
        </div>
      </Wrapper>
      {/* <Service>
        <div className="page section section-center">
          <div className="row">
            <div className="col-md-4">
              <div className="service-box">
                <div className="icon-img">
                  <img src={abouticon1} alt="" />
                </div>
                <div className="service-content">
                  <span>customization</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="icon-img">
                  <img src={abouticon2} alt="" />
                </div>
                <div className="service-content">
                  <span>HANDMADE WITH LOVE</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="icon-img">
                  <img src={abouticon3} alt="" />
                </div>
                <div className="service-content">
                  <span>WORLD WIDE SHIPPING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Service> */}
      {/* <VideoSection>
      <div className="page section section-center">
      <iframe src="https://www.youtube.com/embed/nWwpyclIEu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      </VideoSection> */}
      {/* <Socialshare>
        <div className="page section section-center">
          <h2>ALSO IN</h2>
          <ul className="social-icon">
            <li>
              <a href="https://www.facebook.com/DeepkalaSilkHeritage">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/deepkalaheritage/">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <FaTwitterSquare />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </Socialshare> */}
    </main>
  );
};

const Wrapper = styled.section`
  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0 -15px 35px;
    text-align: center;
    h1 {
      color: var(--clr-heading-main);
      margin-bottom: 2rem;
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      text-transform: capitalize !important;
      text-align: justify;
    }
  }

  @media screen and (max-width: 767px) {
    .page.section.section-center {
      min-height: unset !important;
      padding: 30px 0;
    }
    .row {
      .col-md-6 {
        flex: 0 0 100%;
        max-width: 100%;
        p {
          text-align: left !important;
          font-size: 18px !important;
          letter-spacing: normal;
          margin: 15px 0 0 0;
        }
      }
    }
  }
`;
const Service = styled.section`
  .page.section.section-center {
    background: #f3ece6;
    height: unset;
    min-height: unset;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
    .col-md-4 {
      flex: 0 0 33.33%;
      max-width: 33.33%;
      padding: 0 15px;
    }
  }
  .service-box {
    text-align: center;
    .icon-img {
      max-width: 140px;
      border-radius: 100px;
      background-color: #86430f;
      margin: 0 auto 20px;
    }
    .service-content {
      padding: 0 15px;
      span {
        font-size: 26px;
        text-transform: uppercase;
        color: #864310;
        font-weight: 600;
        margin: 0 0 10px 0;
        display: inline-block;
      }
      p {
        font-size: 18px;
        letter-spacing: 0.2em;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .row {
      .col-md-4 {
        flex: 0 0 100%;
        max-width: 100%;
        padding: 0 15px;
      }
    }
  }
`;

const VideoSection = styled.section`
  .page.section.section-center {
    min-height: unset !important;
    padding: 40px 0;
  }
  iframe {
    width: 100%;
    height: 450px;
    display: inline-block;
  }
  @media screen and (max-width: 767px) {
    .page.section.section-center {
      min-height: unset !important;
      padding: 30px 0;
    }
    iframe {
      height: unset;
    }
  }
`;

const Socialshare = styled.section`
  .section-center {
    background-color: #f3ece6;
    text-align: center;
    height: unset;
    min-height: unset;
  }
  h2 {
    font-size: 32px;
    margin: 0 0 15px 0;
    font-weight: 400;
  }
  ul.social-icon {
    justify-content: center;
    li {
      display: inline-block !important;
      margin: 0 10px;
    }
    a {
      font-size: 29px;
      color: #864310;
    }
  }
  @media screen and (max-width: 767px) {
    .page.section.section-center {
      min-height: unset !important;
      padding: 30px 0;
    }
  }
`;

export default AboutPage;
