import React, { useEffect, useState } from "react";
import Card from "./Card";

const App = () => {
  const [input, setInput] = useState("");
  const [brandInput, setBrandInput] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  useEffect(() => {
    (async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setAllProducts(data.products);
      setProducts(data.products);
    })();
  }, []);

  const search = async () => {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${encodeURIComponent(input)}`,
    );
    const data = await res.json();
    setAllProducts(data.products);
    setProducts(data.products);
    setBrandInput("");
    setCurrentPage(1);
  };

  const filterByBrand = () => {
    const filtered = allProducts.filter((product) =>
      product.brand?.toLowerCase().includes(brandInput.trim().toLowerCase()),
    );
    setProducts(filtered);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-3.5">
        <input
          type="text"
          placeholder="Search products"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          className="button-19"
          onClick={() => {
            if (input.trim() !== "") search();
          }}
        >
          Search
        </button>

        <input
          type="text"
          placeholder="Filter by brand"
          value={brandInput}
          onChange={(e) => setBrandInput(e.target.value)}
        />

        <button className="button-19" onClick={filterByBrand}>
          Filter
        </button>

        <button
          className="button-19"
          onClick={() => {
            let temp = [...products];
            temp.sort((a, b) => a.price - b.price);
            setProducts(temp);
            setCurrentPage(1);
          }}
        >
          Ascending
        </button>
        <button
          className="button-19"
          onClick={() => {
            let temp = [...products];
            temp.sort((a, b) => b.price - a.price);
            setProducts(temp);
            setCurrentPage(1);
          }}
        >
          Decending
        </button>
      </div>

      <div>
        {paginatedProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4">
        <button
          className="button-19"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        <span>
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </span>
        <button
          className="button-19"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
