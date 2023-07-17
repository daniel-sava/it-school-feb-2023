import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ items, addItem }) {
    return (
        <>
            <h3>Shopping List</h3>
            {items.map((item, index) => {
                return <ShoppingListItem key={index} item={item} />;
            })}
        </>
    );
}

export default ShoppingList;
