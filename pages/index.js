import React from "react";

import BaseLayout from "../components/layout/BaseLayout";
import { Button } from "reactstrap";

const Index = () => {
  return (
    <BaseLayout>
      <h1>Index.js</h1>
      <Button color='danger'>Danger</Button>
    </BaseLayout>
  );
};

export default Index;
