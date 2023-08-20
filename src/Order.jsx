function Order({ order }) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-title">
                    <h5>訂單</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">品項</th>
                                <th scope="col">數量</th>
                                <th scope="col">小計</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order.cart.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.qty}</td>
                                            <td>{item.qty * item.price}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="text-end">備註: <span>{order.message}</span></div>
                    <div className="text-end">
                        <h5>總計: <span>${order.totalPrice}</span></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;