import { useState } from "react";
import "./App.css";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(150);
  const [product2, setProduct2] = useState(800);
  const [product3, setProduct3] = useState(300);

  return (
    <div className="App">
      <div>
        <h3>จำนวนสินค้าในตะกร้า {totalItems}</h3>
        <h3>ราคาสินค้าในตะกร้าทั้งหมด {totalPrice} บาท</h3>
      </div>
      <div>
        <img src="case.jpg" alt="case" width="8%" />
        <br></br>
        เคสโทรศัพท์ ราคา {product1} บาท
      </div>
      <br></br>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product1);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>{" "}
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(totalPrice - product1);
          }
        }}
      >
        นำออกจากตะกร้า
      </button>
      <br></br>
      <div>
        <img src="cap.jpg" alt="cap" width="15%;" />
        <br></br>
        หมวก ราคา {product2} บาท
      </div>
      <br></br>
      <button
        onClick={() => {
          setTotalItems(totalItems + 2);
          setTotalPrice(totalPrice + product2);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>{" "}
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 2);
            setTotalPrice(totalPrice - product2);
          }
        }}
      >
        นำออกจากตะกร้า
      </button>
      <br></br>
      <div>
        <br></br>
        <img src="tshirt.jpg" alt="tshirt" width="15%;" />
        <br></br>
        เสื้อ ราคา {product3} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 3);
          setTotalPrice(totalPrice + product3);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>{" "}
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 3);
            setTotalPrice(totalPrice - product3);
          }
        }}
      >
        นำออกจากตะกร้า
      </button>
      <br></br>
    </div>
  );
}

export default App;
