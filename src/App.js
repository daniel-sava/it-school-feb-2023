import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./App.css";
import CurrentTime from "./components/CurrentTime";
import Section from "./components/Section";
import UsersList from "./components/UsersList";
import WindowSize from "./components/WindowSize";

function App() {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            });
    }, []);

    function onEnroll(email, name) {
        setUsers((prevState) => [...prevState, { name, email }]);
    }

    function onDelete(index) {
        setUsers((prevUsers) => {
            users.splice(index, 1);

            return [...users];
        });
    }

    function updateCount() {
        setCount(count + 1);
    }

    return (
        <div className="App">
            <Container className="mt-4">
                {count % 2 !== 0 && (
                    <div>
                        {" "}
                        <WindowSize />
                        <CurrentTime />
                    </div>
                )}
            </Container>

            <Section title="Sesiunea 32" onEnroll={onEnroll}>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </Section>

            <UsersList users={users} handleDelete={onDelete} />

            <Container>
                <p>Counter curent: {count}</p>
                <Button onClick={updateCount} variant="primary">
                    Counter
                </Button>
            </Container>
        </div>
    );
}

export default App;
