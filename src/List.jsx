function List ({products, cart, setCart}) {
    return (
        <div className="list-group">
            {
                products.map((item) => {
                    return (
                    <a key={item.id} href="#" className="list-group-item list-group-item-action" onClick={(e) => {
                        e.preventDefault();
                        // 不重複加入同樣的品項
                        const findIdx = cart.findIndex((cartItem) => item.id === cartItem.id)
                        let newCart;
                        if (findIdx !== -1) {
                            newCart = [...cart];
                            newCart[findIdx].qty += 1;
                        } else {
                            newCart = [...cart, { ...item, qty: 1}]
                        }
                        setCart(newCart);
                    }}>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{ item.name }</h5>
                            <small>{ item.price }</small>
                        </div>
                        <p className="mb-1">{ item.description }</p>
                    </a>
                    )
                })
            }
        </div>
    )
}

export default List;