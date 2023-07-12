import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Table } from "react-bootstrap";

export default function UsersList({ users, handleDelete }) {
    return (
        <Container>
            <h2>Utilizatori inregistrati</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actiuni</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <FontAwesomeIcon
                                        onClick={() => {
                                            handleDelete(index);
                                        }}
                                        style={{ color: "red" }}
                                        icon={faTrash}
                                    ></FontAwesomeIcon>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    );
}
