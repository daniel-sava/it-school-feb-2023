import { Button, TextField } from "@mui/material";
import ShoppingListItem from "./ShoppingListItem";

import { memo, useState } from "react";
import styles from "./ShoppingList.module.css";

function ShoppingList({ items, addItem }) {
    const [newItem, setNewItem] = useState("");

    console.log("render");

    function addItemToList(event) {
        if (!newItem) {
            return;
        }

        addItem(newItem);
    }

    return (
        <>
            <h3>Shopping List</h3>
            <div className={styles.formContainer}>
                <TextField
                    onChange={(event) => {
                        setNewItem(event.target.value);
                    }}
                    variant="outlined"
                    size="small"
                    placeholder="New item name..."
                    error={newItem ? false : true}
                />
                <Button onClick={addItemToList} variant="contained">
                    Add item
                </Button>
            </div>
            {items.map((item, index) => {
                return <ShoppingListItem key={index} item={item} />;
            })}
        </>
    );
}

export default memo(ShoppingList);
