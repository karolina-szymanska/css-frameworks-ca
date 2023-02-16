import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import Paragraph from "../typography/Paragraph";

// the images for accordion
import accordionImage1 from "../../images/tab/tab-1.jpg";
import accordionImage2 from "../../images/tab/tab-2.jpg";
import accordionImage3 from "../../images/tab/tab-3.jpg";

function AccordionProducts() {
  return (
    <Accordion defaultActiveKey="one" className="d-md-none">
      <Accordion.Item eventKey="one">
        <Accordion.Header>First</Accordion.Header>
        <Accordion.Body>
          <Paragraph
            content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
          venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
          ullamcorper turpis. Cras vehicula pharetra lectus non maximus."
          ></Paragraph>

          <Image src={accordionImage1} />
          <div className="accordion-media">
            <div>SHARE</div>
            <i class="fa-brands fa-facebook-f fa-xl"></i>
            <i class="fa-brands fa-twitter fa-xl"></i>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="two">
        <Accordion.Header>Second</Accordion.Header>
        <Accordion.Body>
          <Paragraph
            content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus."
          ></Paragraph>
          <Image src={accordionImage2} />
          <div className="accordion-media">
            <div>SHARE</div>
            <i class="fa-brands fa-facebook-f fa-xl"></i>
            <i class="fa-brands fa-twitter fa-xl"></i>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="three">
        <Accordion.Header>Third</Accordion.Header>
        <Accordion.Body>
          <Paragraph
            content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus."
          ></Paragraph>
          <Image src={accordionImage3} />
          <div className="accordion-media">
            <div>SHARE</div>
            <i class="fa-brands fa-facebook-f fa-xl"></i>
            <i class="fa-brands fa-twitter fa-xl"></i>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionProducts;