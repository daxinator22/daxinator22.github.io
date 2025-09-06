import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar2 from "@/components/headers/Topbar2";
import Breadcumb from "@/components/products/Breadcumb";
import Features2 from "@/components/products/Features2";

import Products4 from "@/components/products/Products4";
import Subcollections from "@/components/products/Subcollections";
import React from "react";

export const metadata = {
  title:
    "Shop Horaizontal Filter || Vineta - Multipurpose React Nextjs eCommerce",
  description: "Vineta - Multipurpose React Nextjs eCommerce",
};
export default function page() {
  return (
    <>
      <Topbar2 parentClass="tf-topbar bg-dark-5 topbar-bg" />
      <Header1 />
      <Breadcumb />
      <Products4 />
      <Features2 />
      <Footer1 />
    </>
  );
}
