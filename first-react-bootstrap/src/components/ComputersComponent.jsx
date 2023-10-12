import { Card, Col, Row } from "react-bootstrap";
import { MenuComponent } from "./base-components/MenuComponent";
import { NavbarComonent } from "./base-components/NavbarComponent";

export const ComputerComponent = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <>
      <NavbarComonent />
      <Row className="partation">
        <MenuComponent />
        <Col className="main-area">
          <Row>
            {products.map((product) => (
              <Col lg={3} md={4} sm={6} key={product}>
                <Card className="mt-2 p-1">
                  <Card.Img
                    src="/computer.jpeg"
                    variant="top"
                    height={200}
                    width={100}
                    alt="computer image"
                  />
                  <Card.Body>
                    <Card.Title>Computer</Card.Title>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Nulla, optio delectus! Illum vel voluptas placeat.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      {/* <div className="row partation">
        <div className="col-md-10 main-area">

          <div className="card">
            <img src="/computer.jpeg" className="card-img-top" alt="computer image" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
