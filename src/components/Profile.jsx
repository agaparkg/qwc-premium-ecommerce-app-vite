import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import userImg from "../assets/user.avif";

const Profile = () => {
  return (
    <Container style={{ padding: "20px" }}>
      <Row>
        <Col
          md="4"
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src={userImg}
            alt="User"
            style={{ width: "300px", height: "300px" }}
          />
        </Col>
        <Col md="8">
          <h1>User Profile</h1>
          <Form>
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
              <Label for="phone">Phone Number</Label>
              <Input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
              />
            </FormGroup>
            <FormGroup>
              <Label for="bio">Bio</Label>
              <Input
                type="textarea"
                id="bio"
                name="bio"
                rows="3"
                placeholder="Tell us about yourself"
              />
            </FormGroup>
            <Button color="primary" type="submit">
              Save Profile
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
