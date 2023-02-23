import React, { useEffect, useState } from "react";
import { getTrending } from "../../apis/trending";
import Loader from "../../assets/loader/Loader";
import "./style.css";

const Home = () => {
  const [pageLoading, setPageLoading] = useState(true);
  const [trendingGifs, setTrendingGifs] = useState([]);

  useEffect(() => {
    getTrending()
      .then((res) => {
        console.log(res);
      })
      .finally(() => {
        setPageLoading(false);
      });
  }, []);

  return (
    <div className="home">
      <Loader />
    </div>
  );
};

export default Home;
