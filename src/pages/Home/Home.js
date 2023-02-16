import React from "react";
import Container from "react-bootstrap/Container";
import CarouselHome from "../../components/carousel/Carousel";
import PageHeading from "../../components/typography/PageHeading";
import Paragraph from "../../components/typography/Paragraph";
import AccordionProducts from "../../components/accordion/Accordion";
import TabsProducts from "../../components/tabs/Tabs";

function Home() {
  return (
    <>
      <CarouselHome />
      <Container>
        <PageHeading content="We do YAY things"></PageHeading>
        <Paragraph content="Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa."></Paragraph>
      </Container>

      <Container>
        <AccordionProducts />
        <div className="d-none d-md-block">
          <TabsProducts />
        </div>
      </Container>
    </>
  );
}

export default Home;