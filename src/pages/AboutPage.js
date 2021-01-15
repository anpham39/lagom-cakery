import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lagom is an online bakery that makes cakes freshly upon orders. We
            do not bake beforehand to make sure our customers get the freshest
            treats, and we can personalize them to your liking. All you need to
            do is send us a message, telling us what you like, and we will take
            care of the rest! To us, every cake is made with as much care as if
            they were made for our family. We sincerely believe that our passion
            and love will be present in every bite you take.
          </p>

          <div className="social-media">
            <li>
              <a href="https://www.instagram.com/lagom.cakery/" target="_blank">
                Instagram: @lagom.cakery
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Lagomcakery" target="_blank">
                Facebook: Lagom Cakery
              </a>
            </li>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p,
  li a {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  .social-media {
    margin-top: 20px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
