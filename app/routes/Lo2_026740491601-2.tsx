import React, { useState } from "react";

const ProductManagement = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "ผงโกโก้ดัทช์ สูตรดัทช์ออริจินัล",
      price: 300,
      image: "/Chocolasia01.png",
    },
    {
      id: 2,
      name: "ผงโกโก้ สกัดเย็น สูตรเฮาส์เบลนด์",
      price: 300,
      image: "/Chocolasia02.png",
    },
    {
      id: 3,
      name: "ผงโกโก้ สีเข้ม สูตรเอ็กซ์ตร้าดาร์ค",
      price: 300,
      image: "/Chocolasia03.png",
    },
  ]);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  const handleAddProduct = () => {
    if (productName && productPrice && productImage) {
      const newProduct = {
        id: Date.now(),
        name: productName,
        price: parseFloat(productPrice),
        image: productImage,
      };
      setProducts([...products, newProduct]);
      setProductName("");
      setProductPrice("");
      setProductImage("");
    } else {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  };

  const handleDeleteProduct = (id) => {
    const confirmDelete = window.confirm("คุณต้องการลบสินค้านี้หรือไม่?");
    if (confirmDelete) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* ส่วนเพิ่มข้อมูลสินค้า */}
      <div
        style={{
          backgroundColor: "#87CEEB",
          padding: "15px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ margin: "0 0 10px 0" }}>เพิ่มข้อมูลสินค้า</h2>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <label>
            ชื่อสินค้า:
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              style={{ marginLeft: "5px", padding: "5px", borderRadius: "3px" }}
            />
          </label>
          <label>
            ราคา:
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              style={{ marginLeft: "5px", padding: "5px", borderRadius: "3px" }}
            />
          </label>
          <label>
            รูปภาพ:
            <input
              type="text"
              placeholder="ใส่ URL รูปภาพ"
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
              style={{ marginLeft: "5px", padding: "5px", borderRadius: "3px" }}
            />
          </label>
          <button
            onClick={handleAddProduct}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "5px 15px",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            บันทึก
          </button>
          <button
            onClick={() => {
              setProductName("");
              setProductPrice("");
              setProductImage("");
            }}
            style={{
              backgroundColor: "#f44336",
              color: "white",
              padding: "5px 15px",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            เคลียร์
          </button>
        </div>
      </div>

      {/* ส่วนแสดงรายการสินค้า */}
      
      <table
        border="1"
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#87CEEB" }}>
            <th>No.</th>
            <th>ชื่อสินค้า</th>
            <th>ราคา</th>
            <th>รูปภาพสินค้า</th>
            <th>ดำเนินการ</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price.toFixed(2)} บาท</td>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  style={{
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  ลบ
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;
