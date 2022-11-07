import React, { useState } from "react";
import Data from "./Data";
import Form from "react-bootstrap/Form";

const Buttons = ({
  setItem,
  menuItems,
  property,
  setProperty,
  range,
  setRange,
}) => {

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      if(range === "All" ) {
        if(property === "All") return true;
        else return newVal.category === property
      }
      else if(property === "All" )  return newVal.price >=  range && newVal.price <= (range + 1000);
      return newVal.price >=  range && newVal.price <= (range + 1000) && newVal.category === property;
    });
    setItem(newItem);
  };

  return (
    <>
      <div className="my-4 d-flex justify-content-center align-items-center">
        <div className="mx-5 d-flex justify-content-center align-items-center">
          <label className="mx-2 fw-bold">Property Type</label>
          <Form.Select
            aria-label="Property Type"
            style={{
              width: "180px",
            }}
            value={property}
            onChange={(e) => setProperty(e.target.value)}
          >
            <option value={"All"}>All</option>
            {menuItems.map((Val, id) => {
              return <option value={Val}>{Val}</option>;
            })}
          </Form.Select>
        </div>
        <label className="mx-2 fw-bold">Price</label>
        <Form.Select
          aria-label="Price"
          style={{
            width: "180px",
          }}
          value={range}
          onChange={(e) => setRange(e.target.value)}
        >
          <option value={"All"}>All</option>
          <option value={500}>$500-$1500</option>
          <option value={1500}>$1500-$2500</option>
          <option value={2500}>$2500-$3500</option>
        </Form.Select>
        <button
          className="text-white p-1 px-4 mx-5 fw-bold btn "
          style={{
            background: "#8a2be2",
            height: "fit-content",
          }}
          onClick={() => filterItem()}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Buttons;
