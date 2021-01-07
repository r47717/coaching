import React from "react";
import { Card, CardBody, ProductsContainer } from "./styled";

import facilitation from "./images/facilitation.png";
import fromSmToCoach from "./images/from-sm-to-coach.png";
import level from "./images/level.png";
import newbies from "./images/newbies.png";
import po from "./images/po.png";
import whatTodo from "./images/what-todo.png";

const Products = () => {
  return (
    <>
      <h2>Продукты</h2>
      <ProductsContainer>
        <Card>
          <CardBody>
            <img src={facilitation} alt="Facilitation" />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img src={fromSmToCoach} alt="From SM to Agile Coach" />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img src={level} alt="SM Level" />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img src={newbies} alt="What new SM should start from" />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img src={po} alt="SM's helo to PO" />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img src={whatTodo} alt="What SM should do" />
          </CardBody>
        </Card>
      </ProductsContainer>
    </>
  );
};

export default Products;
