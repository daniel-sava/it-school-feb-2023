import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function SessionForm({ onEnroll }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        onEnroll(email, name);
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    onChange={handleEmailChange}
                    type="email"
                    placeholder="example@domain.com"
                ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    onChange={handleNameChange}
                    type="text"
                    placeholder="Mihai"
                ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
                Inregistreaza-te!
            </Button>
        </Form>
    );
}
