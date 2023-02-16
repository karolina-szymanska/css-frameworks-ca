import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "react-bootstrap/Image";
import Paragraph from "../typography/Paragraph";

// the images for tabs
import tabsImage1 from "../../images/tab/tab-1.jpg";
import tabsImage2 from "../../images/tab/tab-2.jpg";
import tabsImage3 from "../../images/tab/tab-3.jpg";

function TabsProducts() {
  return (
    <Tabs
      defaultActiveKey="one"
      id="uncontrolled-tab-example"
      className="mb-3 tabs-main-container"
    >
      <Tab eventKey="one" title="First">
        <Row>
          <Col md={3}>
            <Image src={tabsImage1} className="tabs-img" />
          </Col>
          <Col md={9}>
            <div className="tabs-container">
              <Paragraph
                content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus."
              ></Paragraph>
              <div className="tabs-media">
                <div>SHARE</div>
                <i class="fa-brands fa-facebook-f fa-xl"></i>
                <i class="fa-brands fa-twitter fa-xl"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="two" title="Second">
        <Row>
          <Col md={3}>
            <Image src={tabsImage2} className="tabs-img" />
          </Col>
          <Col md={9}>
            <div className="tabs-container">
              <Paragraph
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
              ></Paragraph>
              <div className="tabs-media">
                <div>SHARE</div>
                <i class="fa-brands fa-facebook-f fa-xl"></i>
                <i class="fa-brands fa-twitter fa-xl"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="three" title="Third">
        <Row>
          <Col md={3}>
            <Image src={tabsImage3} className="tabs-img" />
          </Col>

          <Col md={9}>
            <div className="tabs-container">
              <Paragraph
                content="Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
              ></Paragraph>
              <div className="tabs-media">
                <div>SHARE</div>
                <i class="fa-brands fa-facebook-f fa-xl"></i>
                <i class="fa-brands fa-twitter fa-xl"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Tab>
    </Tabs>
  );
}

export default TabsProducts;