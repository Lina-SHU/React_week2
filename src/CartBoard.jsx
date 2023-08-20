import { useState, useEffect } from 'react'
import './CartBoard.css';

function Cart ({cart, setCart, setOrder}) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [message, setMessage] = useState('');

    // 總數量加總
    useEffect(() => {
        const sum = cart.reduce((acc, cur) => acc + cur.price * cur.qty, 0);
        setTotalPrice(sum);
    }, [cart]);

    // 送出訂單
    const submit = () => {
        const order = {
            cart,
            message,
            totalPrice
        }
        setOrder(order);
        // init cart
        setCart([]);
        setMessage('');
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" width="50">操作</th>
                        <th scope="col">品項</th>
                        <th scope="col">描述</th>
                        <th scope="col" width="90">數量</th>
                        <th scope="col">單價</th>
                        <th scope="col">小計</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>
                                        <button type="button" className="btn btn-sm" onClick={() => {
                                            // 移除購物車品項
                                            const removeItem = cart.filter((remove) => remove.id !== item.id)
                                            setCart(removeItem);
                                        }}>x</button>
                                    </td>
                                    <td>{item.name}</td>
                                    <td><small>{item.description}</small></td>
                                    <td>
                                    <select className="form-select" value={item.qty} onChange={(e) => {
                                        // 改變品項數量
                                        const findIdx = cart.findIndex((cartItem) => item.id === cartItem.id)
                                        const newCart = [...cart];
                                        newCart[findIdx].qty = parseInt(e.target.value);
                                        setCart(newCart);
                                    }}>
                                        {
                                            Array.from({ length: item.qty > 10 ? item.qty : 10 }, (value, index) => index + 1).map((values) => {
                                                return (
                                                    <option key={values} value={values}>{values}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    </td>
                                    <td>{item.price}</td>
                                    <td>{item.price * item.qty}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="text-end mb-3">
                <h5>總計: <span>{totalPrice}</span></h5>
            </div>
            <textarea
                className="form-control mb-3"
                rows="3"
                placeholder="備註"
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                }}
            ></textarea>
            <div className="text-end">
                <button className="btn btn-primary" onClick={submit} disabled={ !cart.length }>送出</button>
            </div>
        </>
    )
}

export default Cart;