import * as React from "react";

import Container from "@material-ui/core/Container";
import Navbar from "./Navbar";

export interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
