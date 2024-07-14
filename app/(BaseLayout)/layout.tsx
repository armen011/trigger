import Header from "@/components/Header";
import React, { ReactNode } from "react";

const BaseLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default BaseLayout;
