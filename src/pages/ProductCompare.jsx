import React from "react";
import { Table, Button } from "antd";
import { useState } from "react";

import { addCompareProduct, removeCompareProduct } from "../redux/detailsSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductCompare = () => {
  const compareProduct = useSelector((state) => state.details.compareProduct);
  const allProduct = useSelector((state) => state.details.productData);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddProduct = (text) => {
    if (compareProduct.length >= 4) {
      alert("you can not compare more than 4 products");
    } else {
      dispatch(addCompareProduct(text));
    }
    setIsModalOpen(false);
  };
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleRemoveProduct = (text) => {
    dispatch(removeCompareProduct(text.id));
  };
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
      title: "Remove",
      render: (text, record) => (
        <Button
          disabled={false}
          onClick={() => {
            handleRemoveProduct(text);
          }}
          className="text-red-500"
        >
          Remove
        </Button>
      ),
    },
  ];

  const filterColumns = [
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
      title: "Add",
      render: (text, record) => (
        <Button
          disabled={false}
          onClick={() => handleAddProduct(text)}
          className="text-green-600"
        >
          Add
        </Button>
      ),
    },
  ];

  const filterProduct = allProduct.filter(
    (product) => !compareProduct.includes(product)
  );

  console.log(filterProduct);

  return (
    <div className="bg-white p-4 rounded-[20px] w-[90%] mx-auto h-auto">
      <button
        className="bg-black text-white px-4 py-2 rounded-3xl my-5"
        onClick={() => handleModalOpen()}
      >
        Add Product in compare
      </button>

      <Table
        columns={columns}
        dataSource={compareProduct}
        pagination={{ pageSize: 10 }}
      />
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-scroll ">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-[80%] w-full h-[80vh] overflow-scroll">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold mb-4">Add Product</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white bg-gray-700 rounded-md px-4 py-2"
              >
                Close
              </button>
            </div>
            <Table
              columns={filterColumns}
              dataSource={filterProduct}
              pagination={{ pageSize: 10 }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCompare;
