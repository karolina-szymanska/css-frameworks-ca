import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import PageHeading from "../../components/typography/PageHeading";
import CardSingle from "../../components/card/Card";

// the images for the cards
import cardImage1 from "../../images/news/news-1.jpg";
import cardImage2 from "../../images/news/news-2.jpg";
import cardImage3 from "../../images/news/news-3.jpg";
import cardImage4 from "../../images/news/news-4.jpg";
import cardImage5 from "../../images/news/news-5.jpg";
import cardImage6 from "../../images/news/news-6.jpg";
import cardImage7 from "../../images/news/news-7.jpg";
import cardImage8 from "../../images/news/news-8.jpg";

const images = [
  cardImage1,
  cardImage2,
  cardImage3,
  cardImage4,
  cardImage5,
  cardImage6,
  cardImage7,
  cardImage8,
];

let active = 1;
let items = [];
for (let number = 1; number <= 4; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

function News() {
  return (
    <>
      <Container>
        <PageHeading content="News"></PageHeading>
        <Pagination className="pagination-1">{items}</Pagination>

        <Row>
          {images.map((item, index) => (
            <Col sm={12} md={3}>
              <CardSingle
                key={`newscard_${index}`}
                image={item}
                title="Nunc porttitor vel"
                text="Nunc malesuada eget est fringilla dapibus."
              />
            </Col>
          ))}
        </Row>

        <Pagination className="pagination-2">{items}</Pagination>
      </Container>
    </>
  );
}

export default News;