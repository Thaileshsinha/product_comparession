import React from "react";
import { Table, Button } from "antd";
import { useEffect } from "react";

import { addCompareProduct, addProduct } from "../redux/detailsSlice";
import { useDispatch, useSelector } from "react-redux";
const ProductDetails = () => {
  const compareProduct = useSelector((state) => state.details.compareProduct);
  const allProduct = useSelector((state) => state.details.productData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (allProduct.length === 0) {
      // Only fetch if the data is not already in the store
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          dispatch(addProduct(data.products));
        });
    }
  }, [dispatch, allProduct]);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      render: (thumbnail) => (
        <img src={thumbnail} alt="Product" style={{ width: 50 }} />
      ),
    },
    {
      title: "Compare",
      render: (text, record) => (
        <Button
          disabled={compareProduct.includes(text) ? true : false}
          onClick={() => handleCompare(text, record)}
        >
          {compareProduct.includes(text) ? "compared" : "compare"}
        </Button>
      ),
    },
  ];

  const handleCompare = (text, record) => {
    if (compareProduct.length >= 4) {
      alert("you can not compare more than 4 products");
    } else {
      dispatch(addCompareProduct(text));
    }
  };

  return (
    <div className="bg-white p-4 rounded-[20px] w-[90%] mx-auto h-auto">
      <Table
        columns={columns}
        dataSource={allProduct}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default ProductDetails;
