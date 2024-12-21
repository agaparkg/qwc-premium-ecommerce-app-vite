import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Button, Container, Spinner, Table } from "reactstrap";
import EditUserForm from "./EditUserForm";
import NewUserForm from "./NewUserForm";

const Dashboard = () => {
  const [addNew, setAddNew] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mock data for users
  const users = [
    { id: "A123", fullName: "John Doe", email: "john.doe@example.com" },
    { id: "B456", fullName: "Jane Smith", email: "jane.smith@example.com" },
    {
      id: "C789",
      fullName: "Alice Johnson",
      email: "alice.johnson@example.com",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <>
      <Container style={{ padding: "20px" }}>
        {addNew || editMode ? (
          !editMode ? (
            <NewUserForm onFormSubmit={setAddNew} />
          ) : (
            <EditUserForm onFormSubmit={setEditMode} />
          )
        ) : (
          <Button
            onClick={() => setAddNew(true)}
            className="mb-2"
            color="primary"
          >
            Add New User
          </Button>
        )}
        {/* {editMode && <EditUserForm onFormSubmit={setEditMode} />} */}
        <h1>Users List</h1>
        {!loading ? (
          <div className="text-center">
            <Spinner color="primary" />
          </div>
        ) : (
          <Table bordered responsive className="text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Id</th>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.id}</td>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button color="link" className="p-0 me-2" title="Edit">
                      <FaEdit onClick={() => setEditMode(true)} size={18} />
                    </Button>
                    <Button color="link" className="p-0" title="Delete">
                      <FaTrash size={18} style={{ color: "red" }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
