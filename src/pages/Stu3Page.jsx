export default function Stu3Page() {


  return (
    <Wrapper>
      <TopBar>
        <Title>Student3's Sneakers</Title>
        <Controls>
          <SortToggle ref={sortRef}>
            <button onClick={() => setSortOpen((p) => !p)}>정렬</button>
            {sortOpen && (
              <Dropdown>
                <DropdownOption onClick={() => handleSort("asc")}>
                  낮은 가격순
                </DropdownOption>
                <Divider />
                <DropdownOption onClick={() => handleSort("desc")}>
                  높은 가격순
                </DropdownOption>
              </Dropdown>
            )}
          </SortToggle>

          <FilterToggle ref={filterRef}>
            <button onClick={() => setFilterOpen((p) => !p)}>필터</button>
            {filterOpen && (
              <Dropdown>
                <DropdownOption onClick={() => handleSizeSelect("260")}>
                  사이즈 260
                </DropdownOption>
                <Divider />
                <DropdownOption onClick={() => handleSizeSelect("270")}>
                  사이즈 270
                </DropdownOption>
                <Divider />
                <DropdownOption onClick={() => handleSizeSelect("280")}>
                  사이즈 280
                </DropdownOption>
                <Divider />
                <DropdownOption onClick={() => handleColorSelect("white")}>
                  화이트
                </DropdownOption>
                <Divider />
                <DropdownOption onClick={() => handleColorSelect("black")}>
                  블랙
                </DropdownOption>
                <Divider />
                <DropdownOption onClick={() => handleColorSelect("grey")}>
                  그레이
                </DropdownOption>
              </Dropdown>
            )}
          </FilterToggle>
        </Controls>
      </TopBar>

      <ProductList>
        {filteredProducts.map((item) => (
          <Link
            key={item.id}
            to={`/detail/${item.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ProductCard
              id={item.id}
              title={item.title}     
              price={item.price}
              images={item.images}   
            />
          </Link>
        ))}
      </ProductList>
    </Wrapper>
  );
}

