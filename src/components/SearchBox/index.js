import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
// import { Range, Tooltip, Handle } from "rc-slider";
import "rc-slider/assets/index.css";

const SearchBox = () => {
  const [pricing, setPricing] = useState([300, 2000]);

  // const handle = () => {
  //   <Tooltip
  //     prefixCls="rc-slider-tooltip"
  //     overlay={pricing}
  //     visible={true}
  //     placement="top"
  //     key={0}
  //   >
  //     <Handle value={pricing} />
  //   </Tooltip>;
  // };

  const Slider = require("rc-slider");
  const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Range = createSliderWithTooltip(Slider.Range);

  return (
    <Container className="searchBoxContainer">
      <Row className="searchBoxHeader"></Row>
      <Form className="searchBoxFormContainer">
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalBrands">
          <Form.Label sm={2}>
            <h6>brands</h6>
          </Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalColor">
          <Form.Label>
            <h6>color</h6>
          </Form.Label>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPricing">
          <Form.Label>
            <h6>pricing</h6>
          </Form.Label>
          <Range
            className="searchBoxPriceRange"
            value={pricing}
            min={0}
            max={3000}
            onChange={(value) => setPricing(value)}
            allowCross={false}
            tipProps={{ visible: true, placement: "bottom" }}
            // tipFormatter={(value) => <span className="tooltip">{value}€</span>}
          />
        </Form.Group>

        <Row className="align-items-center justify-content-center">
          <Button className="searchBoxButton">
            <FontAwesomeIcon className="searchBoxIcon" icon={faSearch} />
            Search
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default SearchBox;
