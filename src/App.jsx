import { useState } from 'react'
import List from './List'
import CartBoard from './CartBoard';
import Order from './Order';

const list = [
  {
    id: 1,
    name: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: 45
  },
  {
    id: 3,
    name: '翡翠檸檬',
    description: '綠茶與檸檬的完美結合',
    price: 55
  },
  {
    id: 4,
    name: '四季春茶',
    description: '香醇四季春茶，回甘無比',
    price: 45
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50
  },
  {
    id: 6,
    name: '檸檬冰茶',
    description: '檸檬與冰茶的清新組合',
    price: 45
  },
  {
    id: 7,
    name: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: 55
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: 60
  }
]


function App() {
  const [products, setProduct] = useState(list);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({});

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <List products={products} cart={cart} setCart={setCart} />
          </div>
          <div className="col-md-8">
            <CartBoard cart={cart} setCart={setCart} setOrder={setOrder} />
          </div>
        </div>
        <hr />
        {
          Object.keys(order).length ? 
              <div className="row justify-content-center">
                <div className="col-8">
                  <Order order={order} />
                </div>
              </div> : ''
        }
      </div>
    </>
  )
}

export default App
