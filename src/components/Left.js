import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const Left = () => {
  const cryptocurrencies = [
    { id: 1, name: "BTC", price: "$28K", change: "+2.5%", volume: "$50B" },
    { id: 2, name: "ETH", price: "$1.8K", change: "+1.8%", volume: "$30B" },
    { id: 3, name: "BNB", price: "$310", change: "-0.5%", volume: "$10B" },
    { id: 4, name: "SOL", price: "$22", change: "+3.1%", volume: "$5B" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCryptocurrencies = cryptocurrencies.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { field: "name", headerName: "자산", flex: 1 },
    { field: "price", headerName: "현재가", flex: 1 },
    {
      field: "change",
      headerName: "변동률",
      flex: 1,
      renderCell: (params) => (
        <span style={{ color: params.value.includes("+") ? "green" : "red" }}>
          {params.value}
        </span>
      ),
    },
    { field: "volume", headerName: "거래금액", flex: 1 },
  ];

  return (
    <div
      style={{
        height: "100vh",
        padding: "10px",
        backgroundColor: "#ffffff",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <input
        type="text"
        placeholder="검색"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          boxSizing: "border-box",
        }}
      />
      <DataGrid
        rows={filteredCryptocurrencies}
        columns={columns}
        pageSize={5}
        disableColumnMenu
        autoHeight
        style={{
          backgroundColor: "#f8f9fa",
        }}
      />
    </div>
  );
};

export default Left;
