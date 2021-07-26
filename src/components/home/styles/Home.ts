/* eslint-disable no-shadow */
import { ifError } from "assert";
import styled from "styled-components/macro";
import { media } from "../../../styles/global-style";
import {
  gradientMain,
  gradientSecond,
  neutral800,
  primary600,
  primary700,
} from "../../../styles/style-guide";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${gradientMain};
  position: relative;

  ${media.desktop} {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: ${gradientMain};
    background-image: url(/images/bg-pattern-desktop.svg);
    background-size: cover;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  width: 375px;

  ${media.desktop} {
    margin: 0 0;
    padding: 0 10.3rem;
    width: 1440px;
    z-index: 5;
  }
`;

export const Nav = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;

  ${media.desktop} {
    height: 10rem;
  }
`;

export const Logo = styled.img`
  height: 21px;

  ${media.desktop} {
    height: 33px;
  }
`;

const TOP_GAP = "250px";

export const Section = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: ${TOP_GAP};
  text-align: center;

  ${media.desktop} {
    text-align: initial;
    padding-top: 12px;
    width: 445.406px;
  }
`;

export const Image = styled.div`
  background: url(/images/hero-mobile.jpg) no-repeat;
  background-size: cover;
  width: 100%;
  height: ${TOP_GAP};
  position: absolute;
  top: 84px;
  left: 0;

  ${media.desktop} {
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: url(/images/hero-desktop.jpg) no-repeat;
    background-size: contain;
    background-position: right;
    z-index: -5;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  color: ${primary600};
  font-size: 2.5rem;
  letter-spacing: 11px;
  line-height: 43px;
  margin: 3.9rem auto 0;

  span {
    font-weight: 600;
    color: ${neutral800};
  }

  ${media.desktop} {
    font-size: 4rem;
    letter-spacing: 17.3px;
    line-height: 68px;
    margin: 3.75rem auto 0;
  }
`;

export const Description = styled.p`
  color: ${primary600};
  font-size: 14.1px;
  padding-top: 2px;
  line-height: 22px;

  ${media.desktop} {
    font-size: 1.004rem;
    padding-block: 0.5rem;
    line-height: 27px;
  }
`;

export const Newsletter = styled.form`
  width: 100%;
  border: 1px solid ${primary600};
  margin-top: 1rem;
  height: 3rem;
  border-radius: 1.5rem;
  display: flex;

  ${media.desktop} {
    height: 3.5rem;
    border-radius: 1.75rem;
  }
`;

export const Input = styled.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  padding: 1.5rem;
  font-size: 13.8px;
  color: ${neutral800};

  &:-internal-autofill-selected {
    appearance: menulist-button;
    background-color: rgb(232, 240, 254) !important;
    background-image: none !important;
    color: -internal-light-dark(black, white) !important;
  }

  &::placeholder {
    color: hsl(0, 36%, 70%, 0.5);
  }

  ${media.desktop} {
    padding: 1.75rem;
    padding-left: 1.9rem;
    font-size: 1rem;
  }
`;

export const SubmitButton = styled.button<{ ifError: boolean }>`
  width: 4rem;
  border-radius: 1.5rem;
  border: none;
  outline: none;
  background: ${gradientSecond};
  padding-top: 6px;
  padding-left: 8px;
  box-shadow: 0px 16px 24px hsl(0deg 36% 70% / 45%);
  cursor: pointer;
  transition: all 200ms ease;
  position: relative;

  &::after {
    content: ${({ ifError }) => ifError && "url(/images/icon-error.svg)"};
    position: absolute;
    top: 10px;
    left: -36px;
  }

  &:focus,
  &:hover {
    background: linear-gradient(
      135deg,
      hsl(0deg 80% 86% / 80%),
      hsl(0deg 74% 74% / 80%)
    );
    box-shadow: 0px 16px 24px hsl(0deg 36% 70% / 55%);
    transform: scale(1.05);
  }

  ${media.desktop} {
    width: 6.25rem;
    border-radius: 3.5rem;

    &::after {
      top: 14px;
    }
  }
`;

export const Error = styled.p`
  text-align: left;
  color: ${primary700};
  padding-left: 1.5rem;
`;
