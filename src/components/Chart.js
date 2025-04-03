// src/components/Chart.js
import React from "react";
import {
  ChartCanvas,
  Chart,
  CandlestickSeries,
  XAxis,
  YAxis,
  discontinuousTimeScaleProvider,
} from "react-financial-charts";
import { timeFormat } from "d3-time-format";

const ChartComponent = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>데이터가 없습니다.</div>;
  }

  // 날짜 값이 문자열인 경우를 대비해서 Date 객체로 변환 (이미 Date 객체여도 안전합니다.)
  const parsedData = data.map((d) => ({
    ...d,
    date: new Date(d.date),
  }));

  // discontinuousTimeScaleProvider를 사용해 날짜 기반의 스케일과 accessor를 생성
  const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor((d) => d.date);
  //const { data: chartData, xScale, xAccessor, displayXAccessor } = xScaleProvider(parsedData);
// parsedData를 기준으로 xScaleProvider 함수를 호출하여, X축 관련 정보를 계산한다.
const result = xScaleProvider(parsedData);

// 반환된 객체에서 각 속성을 추출한다.
const chartData = result.data; // 처리 및 정렬된 데이터를 chartData에 저장
const xScale = result.xScale; // X축의 스케일링 함수(예: d3스케일 객체)
const xAccessor = result.xAccessor; // 각 데이터 항목에서 X값(날짜)을 추출하는 함수
const displayXAccessor = result.displayXAccessor; // 차트에 원래의 X값(예: Date 객체)을 표시하기 위한 함수

  // xExtents: 첫번째와 마지막 데이터로 x축 범위를 지정
  const start = xAccessor(chartData[0]);
  const end = xAccessor(chartData[chartData.length - 1]);
  const xExtents = [start, end];

  // d3 timeFormat을 이용하여 날짜 포맷 함수를 생성
  const dateFormat = timeFormat("%Y-%m-%d");

  return (
    <ChartCanvas
      height={400}
      width={800}
      ratio={1}
      margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
      data={chartData}
      xScale={xScale}
      xAccessor={xAccessor}
      displayXAccessor={displayXAccessor}
      xExtents={xExtents}
      panEvent={true}      // 기본적으로 true 입니다.
      zoomEvent={true}     // 기본적으로 true 입니다.
    >
      <Chart id={1} yExtents={(d) => [d.high, d.low]}>
        {/* tickFormat에 displayXAccessor를 적용하여 원래의 Date 객체로 변환 후 포맷 */}
        <XAxis tickFormat={(d) => dateFormat(new Date(data[d].date))} />
        <YAxis />
        <CandlestickSeries />
      </Chart>
    </ChartCanvas>
  );
};

export default ChartComponent;
