import React from "react";
import { Basket } from "../Basket/Basket";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Section } from "../Section/Section";

import "./Layout.scss";

export const Layout = ({ children }) => (
  <>
    <Header />
    <Section>{children}</Section>
    <Basket />
    <Footer />
  </>
);
