function Product({ title, price, onAdd }) {
    return (
        <div className="product" style={{border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px'}}>
            <h3>{title}</h3>
            <p className="price">${price}</p>
            <button onClick={onAdd} className="add-button">
                Add to Cart
            </button>
        </div>
    );
}

export default Product;