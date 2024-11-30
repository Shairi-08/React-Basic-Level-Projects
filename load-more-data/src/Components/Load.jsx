import { useEffect, useState } from "react";
import './Load.css';

const Load = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}&select=title,price,thumbnail`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        // Reset the product state if count is 0, otherwise append
        setProduct((prevData) => (count === 0 ? result.products : [...prevData, ...result.products]));
      }
      console.log(result);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    // Disable button if we have reached 100 products
    if (product.length >= 100) setDisableButton(true);
  }, [product]);

  if (loading) return <div>Loading Data! Please Wait.....</div>;

  return (
    <div className="load-more-container">
      <div className="product-container">
        {product && product.length
          ? product.map((item, index) => (
              <div className="product" key={`${item.id}-${index}`}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
                <p>Price: ${item.price}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached 100 products</p> : null}
      </div>
    </div>
  );
};

export default Load;