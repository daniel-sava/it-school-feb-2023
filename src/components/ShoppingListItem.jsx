export default function ShoppingListItem({ item }) {
    return (
        <>
            <h4>
                {item.id}. {item.name}
            </h4>
        </>
    );
}
