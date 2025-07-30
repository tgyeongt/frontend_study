import { useState, useEffect } from "react";
import ProductCard from "@components/stu1/ProductCard";
import styled from "styled-components";
import CategoryNav from "@components/stu1/toppage/CategoryNav";
import axios from "axios";

export default function Stu1Page() {
  const [sortOption, setSortOption] = useState("date");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    setLoading(true);
    let url = "http://localhost:3000/products";
    if (category === "mydata") url = "http://localhost:3000/mydata";
    else if (category === "clothes") url = "http://localhost:3000/clothes";
    else if (category === "shoes") url = "http://localhost:3000/shoes";
    
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
        setError(null);
      })
      .catch((err) => {
        setError("상품 목록을 불러오는 데 실패했습니다.");
        setProducts([]);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [category]);

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case "high":
        return b.price - a.price;
      case "low":
        return a.price - b.price;
      case "name":
        return a.name.localeCompare(b.name);
      case "reviews":
        return (b.reviews || 0) - (a.reviews || 0);
      case "rating":
        return (b.rating || 0) - (a.rating || 0);
      case "date":
      default:
        return new Date(b.arrived) - new Date(a.arrived);
    }
  });

  return (
    <Wrapper>
      <CategoryNav
        onSortChange={setSortOption}
        onCategoryChange={setCategory}
        activeCategory={category}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <LoadingMessage>로딩 중...</LoadingMessage>}
      <ProductList>
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            brand={product.brand}
          />
        ))}
      </ProductList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 10px 10px 10px;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  padding: 16px;
  background-color: #fdf2f2;
  border: 1px solid #fbb6b6;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const LoadingMessage = styled.div`
  color: #2980b9;
  padding: 16px;
  background-color: #f0f8ff;
  border: 1px solid #b8daff;
  border-radius: 4px;
  margin-bottom: 16px;
  text-align: center;
`;
