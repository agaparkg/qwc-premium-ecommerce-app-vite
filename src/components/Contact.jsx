import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const Contact = () => {
  return (
    <Container style={{ padding: "20px" }}>
      <Row>
        <Col>
          <h1>Contact Us</h1>
          <p>
            <strong>Address:</strong> 123 Tech Avenue, Innovation City, TX 75001
          </p>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p>
            <strong>Email:</strong> support@qwcpremium.com
          </p>
          <p>We look forward to hearing from you!</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="w-50">
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="email">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="message">Message or Comments</Label>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Enter your message"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="file">Attach a File</Label>
                  <Input type="file" id="file" name="file" />
                </FormGroup>
                <Button color="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
