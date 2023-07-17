import Container from "@mui/material/Container";
import ShoppingList from "../components/ShoppingList";

import { useState } from "react";

const shoppingListItems = [
    {
        id: 1,
        name: "Mere",
    },
    {
        id: 2,
        name: "Pere",
    },
    {
        id: 3,
        name: "Mici",
    },
    {
        id: 4,
        name: "Bere",
    },
];

export default function Shopping() {
    const [items, setItems] = useState(shoppingListItems);

    return (
        <Container>
            <ShoppingList items={items} />
        </Container>
    );
}
