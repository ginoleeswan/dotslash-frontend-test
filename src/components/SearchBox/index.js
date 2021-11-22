import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faSearch, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Button, Form } from "react-bootstrap";
import "@pathofdev/react-tag-input/build/index.css";
import ReactTagInput from "@pathofdev/react-tag-input";
// import { Range, Tooltip, Handle } from "rc-slider";
import "rc-slider/assets/index.css";

const SearchBox = () => {
  const [pricing, setPricing] = useState([300, 2000]);
  const [tags, setTags] = useState(["example tag"]);

  const Slider = require("rc-slider");
  const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Range = createSliderWithTooltip(Slider.Range);

  return (
    <Container className="searchBoxContainer">
      <Row className="searchBoxHeader">
        <Row className="sbHeader1 align-items-center justify-content-center">
          <p className="pLight">
            <FontAwesomeIcon
              className="searchBoxTitleBackIcon"
              icon={faChevronLeft}
            />
            Hide
          </p>
        </Row>
        <Row className="sbHeader2 align-items-center justify-content-center">
          <h4 className="searchBoxTitle">
            Search Reway{" "}
            <FontAwesomeIcon className="searchBoxTitleIcon" icon={faSearch} />
          </h4>
        </Row>
      </Row>
      <Form className="searchBoxFormContainer">
        <Form.Group as={Row} className="mb-4" controlId="formHorizontalBrands">
          <Form.Label sm={2}>
            <h5>brands</h5>
          </Form.Label>
          <ReactTagInput
            tags={tags}
            onChange={(newTags) => setTags(newTags)}
            placeholder=" "
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-4" controlId="formHorizontalColor">
          <Form.Label>
            <h5>color</h5>
          </Form.Label>
          <Form.Select aria-label="Default select example">
            <option>SELECT COLOR</option>
            <option value="1">Brown</option>
            <option value="2">Black</option>
            <option value="3">White</option>
            <option value="4">Red</option>
            <option value="5">Blue</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Row} className="mb-5" controlId="formHorizontalPricing">
          <Form.Label>
            <h5>pricing</h5>
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
