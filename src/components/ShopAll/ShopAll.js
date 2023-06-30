import { useEffect, useState } from "react";
import Card from "../Home/Card";
import "./ShopAll.css";

const ShopAll = (props) => {
  const [productsList, setProductsList] = useState(props.products);

  const hasItmesInLst = productsList.length;

  const priceArr = props.products.map((ele) => {
    return ele.offerprice;
  });

  const minPrice = Math.min(...priceArr);
  const maxPrice = Math.max(...priceArr);

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);

  const minrangeHandler = (e) => {
    if (maxValue - e.target.value >= 10) {
      setLeft(
        (e.target.value - minPrice) / ((maxPrice - minPrice) / 100)
      );
      setMinValue(e.target.value);
    }
  };

  const maxrangeHandler = (e) => {
    if (e.target.value - minValue >= 10) {
      setRight(
        (maxPrice - e.target.value) / ((maxPrice - minPrice) / 100)
      );
      setMaxValue(e.target.value);
    }
  };

  const priceFliter = (min, max) => {
    let sortedProduclst = props.products.filter((ele) => {
      return (
        ele.offerprice >= Number(min) && ele.offerprice <= Number(max)
      );
    });
    setProductsList(sortedProduclst);
  };

  useEffect(() => {
    priceFliter(minValue, maxValue);
  }, [minValue, maxValue]);

  const selectHandler = (e) => {
    let sortedProduclst;
    if (e.target.value === "Price(low to High)") {
      sortedProduclst = [...productsList].sort(
        (a, b) => a.offerprice - b.offerprice
      );
    } else if (e.target.value === "Price(High to Low)") {
      sortedProduclst = [...productsList].sort(
        (a, b) => b.offerprice - a.offerprice
      );
    } else if (e.target.value === "Name(A-Z)") {
      sortedProduclst = [...productsList].sort((a, b) => {
        if (a.productname < b.productname) return -1;

        if (a.productname > b.productname) return 1;

        return 0;
      });
    } else if (e.target.value === "Name(Z-A)") {
      sortedProduclst = [...productsList].sort((a, b) => {
        if (a.productname > b.productname) return -1;

        if (a.productname < b.productname) return 1;

        return 0;
      });
    } else {
      sortedProduclst = props.products;
    }
    setProductsList(sortedProduclst);
  };

  return (
    <div>
      <h1>ShopAll</h1>
      <div className="shopall-cont">
        <div className="p-filter-sec">
          <h3>Filters</h3>
          <div>
            <h4>Price</h4>
            <div className="slider">
              <div
                style={{ left: `${left}%`, right: `${right}%` }}
                className="progress"
              ></div>
            </div>
            <div className="range-inp">
              <input
                id="min-price-range"
                type="range"
                min={minPrice}
                max={maxPrice}
                value={minValue}
                onChange={minrangeHandler}
              />
              <input
                id="max-price-range"
                type="range"
                min={minPrice}
                max={maxPrice}
                value={maxValue}
                onChange={maxrangeHandler}
              />
            </div>
            <div className="range-display">
              <span>{minValue}</span>
              <span>{maxValue}</span>
            </div>
          </div>
          <div className="drop-down">
            <select onChange={selectHandler}>
              <option>Sort by</option>
              <option>Price(low to High)</option>
              <option>Price(High to Low)</option>
              <option>Name(A-Z)</option>
              <option>Name(Z-A)</option>
            </select>
          </div>
        </div>
        <div className="shopall">
          {!hasItmesInLst && (
            <h2>No Items matched your search criteria</h2>
          )}
          {productsList.map((ele) => {
            return (
              <Card
                className="shop-all-cards"
                key={ele._id}
                product={ele}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopAll;
