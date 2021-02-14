import React from "react";

import Header from "../shared/Header";
import { Container } from "reactstrap";

const BaseLayout = (props) => {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
};

export default BaseLayout;
