import React from "react";
import ChartComponent from "../components/Chart";

const Home = () => {
    const sampleData = [
        { date: new Date(2025, 3, 1), open: 100, high: 120, low: 90, close: 110, volume: 1000 },
        { date: new Date(2025, 3, 2), open: 110, high: 130, low: 105, close: 125, volume: 1200 },
        { date: new Date(2025, 3, 3), open: 125, high: 135, low: 120, close: 130, volume: 1500 },
        { date: new Date(2025, 3, 4), open: 130, high: 140, low: 125, close: 135, volume: 1700 },
        { date: new Date(2025, 3, 5), open: 135, high: 145, low: 130, close: 140, volume: 1800 },
        { date: new Date(2025, 3, 6), open: 100, high: 120, low: 90, close: 110, volume: 1000 },
        { date: new Date(2025, 3, 7), open: 110, high: 130, low: 105, close: 125, volume: 1200 },
        { date: new Date(2025, 3, 8), open: 125, high: 135, low: 120, close: 130, volume: 1500 },
        { date: new Date(2025, 3, 9), open: 130, high: 140, low: 125, close: 135, volume: 1700 },
        { date: new Date(2025, 3, 10), open: 135, high: 145, low: 130, close: 140, volume: 1800 },

    ];



  return (
    <div>
      <ChartComponent data={sampleData} />
    </div>
  );
};

export default Home;
