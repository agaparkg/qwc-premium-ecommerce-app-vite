import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import tv from "../assets/tv.jpeg";
import vacuum from "../assets/vacuum.avif";
import washer from "../assets/washer.jpeg";

const Home = () => {
  return (
    <Container fluid style={{ padding: "20px" }}>
      <Row>
        <Col>
          <h1 className="text-center">Welcome to QWC Premium</h1>
          <p className="text-center">
            At QWC Premium, we specialize in offering top-notch consumer
            technology products designed to elevate your everyday life.
          </p>
        </Col>
      </Row>
      <Row className="mt-4" xs="1" sm="2" md="3">
        <Col className="mb-2">
          <Card>
            <CardBody>
              <img src={washer} alt="Washer" className="card-img-top" />
              <CardTitle tag="h5" className="mt-3">
                Premium Washers
              </CardTitle>
              <CardText>
                Efficient and durable washers for all your laundry needs.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <img src={tv} alt="TV" className="card-img-top" />
              <CardTitle tag="h5" className="mt-3">
                Smart TVs
              </CardTitle>
              <CardText>
                Experience entertainment like never before with our advanced
                TVs.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <img src={vacuum} alt="Vacuum Cleaner" className="card-img-top" />
              <CardTitle tag="h5" className="mt-3">
                Vacuum Cleaners
              </CardTitle>
              <CardText>
                Keep your home spotless with our powerful vacuum cleaners.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
