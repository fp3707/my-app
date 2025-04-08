import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const Right = () => {
  const [tableData, setTableData] = useState([
    { id: 1, category: "7일", support: "", resistance: "", settlement: "" },
    { id: 2, category: "15일", support: "", resistance: "", settlement: "" },
    { id: 3, category: "50일", support: "", resistance: "", settlement: "" },
    { id: 4, category: "100일", support: "", resistance: "", settlement: "" },
    { id: 5, category: "200일", support: "", resistance: "", settlement: "" },
    { id: 6, category: "400일", support: "", resistance: "", settlement: "" },
    { id: 7, category: "매물대 VPVR POC", support: "", resistance: "", settlement: "" },
    { id: 8, category: "거래량 이동평균", support: "", resistance: "", settlement: "" },
  ]);

  const handleEditCellChange = (params) => {
    const updatedTableData = tableData.map((row) =>
      row.id === params.id ? { ...row, [params.field]: params.value } : row
    );
    setTableData(updatedTableData);
  };

  const columns = [
    { field: "category", headerName: "이동평균선", flex: 1, editable: false },
    { field: "support", headerName: "지지(매수)", flex: 1, editable: true },
    { field: "resistance", headerName: "저항(매도)", flex: 1, editable: true },
    { field: "settlement", headerName: "채결여부", flex: 1, editable: true },
  ];

  return (
    <div
      style={{
        top: 0, // 상단에 배치
        left: 0, // 좌측에 배치
        right: 0, // 우측 끝까지 확장
        height: "400px", // 고정된 높이
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        zIndex: 1000, // 다른 요소 위에 렌더링
      }}
    >
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={8}
        onCellEditCommit={handleEditCellChange}
        disableSelectionOnClick
      />
    </div>
  );
};

export default Right;
