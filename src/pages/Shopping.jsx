import Container from "@mui/material/Container";
import ShoppingList from "../components/ShoppingList";

import { Button } from "@mui/material";
import { useCallback, useState } from "react";

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
    const [count, setCount] = useState(0);
    const [items, setItems] = useState(shoppingListItems);

    const addItem = useCallback(
        (newItem) => {
            setItems((prevItems) => [
                ...prevItems,
                { id: prevItems.length + 1, name: newItem },
            ]);
        },
        [items]
    );

    return (
        <Container>
            <Button
                onClick={() => {
                    setCount((prevCount) => prevCount + 1);
                }}
                variant="outlined"
            >
                Increment counter {count}
            </Button>
            <ShoppingList items={items} addItem={addItem} />
        </Container>
    );
}
