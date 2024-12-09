import React, { useEffect, useState, PureComponent } from "react";
import { Helmet } from "react-helmet-async";
import Container from "./Container";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
} from "recharts";

const Statistics = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <Container>
        <Helmet>
          <title>GadgetHeaven | Statistics</title>
        </Helmet>
        <h1 className="mb-10 text-2xl font-bold text-secondary">Statistics</h1>
        <BarChart
          width={1200}
          height={400}
          data={products}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product_title" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#8884d8" name="Price (USD)" />

          <Bar dataKey="rating" fill="#82ca9d" name="Rating (out of 5)" />
        </BarChart>
      </Container>
    </div>
  );
};

export default Statistics;
