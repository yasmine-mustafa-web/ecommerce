import { useEffect, useState } from "react";
import { getProducts } from "../../Services/productApi";

const TopProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => { loadTopProducts(); }, []);

  const loadTopProducts = async () => {
    try {
      const res = await getProducts();
      const sorted = [...res.data]
        .sort((a, b) => b.countInStock - a.countInStock)
        .slice(0, 4);
      setProducts(sorted);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="topProducts">
      <h5 className="mb-4">Top Selling Products</h5>
      {products.map((item) => (
        <div key={item._id} className="productItem">
          <img src={item.images?.[0]} alt={item.name} />
          <div className="info">
            <h6>{item.name}</h6>
            <span>{item.countInStock} in stock</span>
          </div>
          <div className="stock"><sup>EGP</sup>{item.price}</div>
        </div>
      ))}
    </div>
  );
};

export default TopProducts;