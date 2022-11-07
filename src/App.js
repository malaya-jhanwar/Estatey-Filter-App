import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";
import Navbar1 from "./Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const App = () => {
  const [item, setItem] = useState(Data);
  const [range, setRange] = useState("All");
  const [property, setProperty] = useState("All");

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  return (
    <>
      <Navbar1 />

      <div>
        <h1 className="mainHeading">Search properties to rent </h1>
        <Form className="d-flex searchBox">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>

      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">
            Food Filtering App
          </h1>
          <Buttons
            filterItem={item}
            setItem={setItem}
            menuItems={menuItems}
            range={range}
            setRange={setRange}
            property= {property}
            setProperty= {setProperty}
          />
          <div class="card-deck">
            <Card item={item} className="card-deck" />
          </div>
          {console.log(property, " ==== ", range)}
        </div>
      </div>
    </>
  );
};

export default App;
