import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import FilterDrawer from "../../Components/FilterDrawer/FilterDrawer";
import { Header } from "../../Components/Header/Header";
import ProductItem from "../../Components/ProductItem/ProductItem";
import { fetchProducts } from "../../Store/Filter/FilterAction";
function FilteredProducts() {
  const dispatch = useDispatch();
  const location = useLocation();
  const filteredProducts = useSelector(
    (state) => state.filter.filteredProducts
  );
  console.log(filteredProducts);
  // Получаем выбранные фильтры из URL
  const queryParams = new URLSearchParams(location.search);

  // Получаем значения фильтров
  const brands = queryParams.getAll("brand");
  const sizes = queryParams.getAll("size");
  // ...

  useEffect(() => {
    // Отправляем GET-запрос с выбранными фильтрами
    dispatch(fetchProducts({ brands, sizes }));
  }, [brands, sizes]);

  return (
    <div>
      <Header />
      <FilterDrawer />
      <div style={{display: 'flex'}}>

      {Array.isArray(filteredProducts)
        ? filteredProducts.map((product) => (
            <div>
              <ProductItem item={product} />
            </div>
          ))
        : filteredProducts.results.map((product) => (
            <div>
              <ProductItem item={product} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default FilteredProducts;
