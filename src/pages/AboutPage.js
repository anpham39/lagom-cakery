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
          <section class="intro">
            <p>Welcome to <span class="bakery-name">Lagom Cakery</span> — Where Every Bite Feels Like Home 🍰✨</p>
            <p>
              We're a small-batch online bakery passionate about crafting unique, flavor-packed treats that blend classic comfort with creative twists.
              From fluffy roll cakes to delicate pastries, each item is handmade with love, using quality ingredients and thoughtful flavor pairings.
              Whether you're craving something cozy, bold, or just a little sweet, we’ve baked it just for you.
            </p>
            <p>
              Treat yourself or surprise someone special — we deliver straight to your door! 💌
            </p>
          </section>

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

  .bakery-name {
    color: #d77f5b;
    font-weight: bold;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
