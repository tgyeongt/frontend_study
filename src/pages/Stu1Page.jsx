import { useState, useEffect } from "react";
import ProductCard from "@components/stu1/ProductCard";
import styled from "styled-components";
import CategoryNav from "@components/stu1/toppage/CategoryNav";
import { APIService } from "@components/stu1/api/api";

export default function Stu1Page() {
  const [sortOption, setSortOption] = useState("date");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      setProducts([]); // 카테고리 변경 시 즉시 상품 목록 초기화
      
      try {
        let endpoint = "/products";
        if (category === "mydata") endpoint = "/mydata";
        else if (category === "clothes") endpoint = "/clothes";
        else if (category === "shoes") endpoint = "/shoes";
        
        const data = await APIService.public.get(endpoint);
        console.log(`API 응답 (${endpoint}):`, data); // 디버깅용 로그
        
        // API 응답이 배열인지 확인하고 설정
        if (Array.isArray(data)) {
          setProducts(data);
          console.log(`상품 설정 완료: ${data.length}개`); // 디버깅용 로그
        } else {
          setProducts([]);
          setError("올바르지 않은 데이터 형식입니다.");
          console.warn("API 응답이 배열이 아닙니다:", data);
        }
      } catch (err) {
        setError("상품 목록을 불러오는 데 실패했습니다.");
        setProducts([]);
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
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
