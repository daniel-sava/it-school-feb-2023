import { Container, Table } from "react-bootstrap";

export default function UsersList({ users }) {
    return (
        <Container>
            <h2>Utilizatori inregistrati</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    );
}
