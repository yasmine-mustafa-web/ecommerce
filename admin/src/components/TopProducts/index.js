const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/60",
    name: "Vitamin C",
    sales: 245,
    stock: 52,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/60",
    name: "Pain Relief",
    sales: 210,
    stock: 34,
  },
  {
    id: 3,
     image: "https://via.placeholder.com/60",
    name: "Face Wash",
    sales: 184,
    stock: 12,
  },
  {
    id: 4,
    image: "https://via.placeholder.com/60",
    name: "Protein Powder",
    sales: 150,
    stock: 19,
  },
];

const TopProducts = () => {
  return (
    <div className="topProducts">

      <h5 className="mb-4">Top Selling Products</h5>
       {products.map((item) => (
        <div
          key={item.id}
          className="productItem"
        >
          <img
            src={item.image}
            alt={item.name}
          />

          <div className="info">

            <h6>{item.name}</h6>

            <span>{item.sales} Sales</span>

          </div>

          <div className="stock">
                 {item.stock} Left

          </div>

        </div>
      ))}

    </div>
  );
};

export default TopProducts;