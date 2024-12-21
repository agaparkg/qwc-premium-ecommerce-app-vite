import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const NewUserForm = ({ onFormSubmit }) => {
  return (
    <Card className="w-50">
      <CardTitle tag="h2" className="text-center">
        Add New User
      </CardTitle>
      <CardBody>
        <Form onSubmit={() => onFormSubmit(false)}>
          <FormGroup>
            <Label for="firstName">Full Name</Label>
            <Input type="text" id="firstName" name="firstName" required />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email Address</Label>
            <Input type="email" id="email" name="email" required />
          </FormGroup>
          <Button color="primary" type="submit">
            Submit
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default NewUserForm;
