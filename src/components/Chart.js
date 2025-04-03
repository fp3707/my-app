import React from "react";
import {
  ChartCanvas,
  Chart,
  CandlestickSeries,
  BarSeries,
  XAxis,
  YAxis,
  discontinuousTimeScaleProvider,
} from "react-financial-charts";
import { timeFormat } from "d3-time-format";

const ChartComponent = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>데이터가 없습니다.</div>;
  }

  const parsedData = data.map((d) => ({
    ...d,
    date: new Date(d.date),
  }));

  const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor((d) => d.date);
  const result = xScaleProvider(parsedData);
  const chartData = result.data;
  const xScale = result.xScale;
  const xAccessor = result.xAccessor;
  const displayXAccessor = result.displayXAccessor;

  const start = xAccessor(chartData[0]);
  const end = xAccessor(chartData[chartData.length - 1]);
  const xExtents = [start, end];

  const dateFormat = timeFormat("%Y-%m-%d");

  return (
    <ChartCanvas
      height={600} // 캔버스 높이를 적절히 조정
      width={800}
      ratio={1}
      margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
      data={chartData}
      xScale={xScale}
      xAccessor={xAccessor}
      displayXAccessor={displayXAccessor}
      xExtents={xExtents}
      panEvent={true}
      zoomEvent={true}
    >
      {/* 캔들스틱 차트: 상단에 배치 */}
      <Chart id={1} yExtents={(d) => [d.high, d.low]} height={400} origin={[0, 0]}>
        {/* 캔들스틱 차트의 Y축을 왼쪽에 배치 */}
        <YAxis axisAt="left" orient="left" ticks={5} />
        <CandlestickSeries />
      </Chart>

      {/* 거래량 바 차트: 하단에 배치 */}
      <Chart id={2} yExtents={(d) => d.volume} height={100} origin={[0, 400]}>
        {/* 거래량 차트의 Y축을 오른쪽에 배치 */}
        <YAxis axisAt="right" orient="right" ticks={5} />
        <BarSeries yAccessor={(d) => d.volume} fill={(d) => (d.close > d.open ? "green" : "red")} />
        <XAxis
          axisAt="bottom"
          orient="bottom"
          tickFormat={(d) => dateFormat(new Date(chartData[d].date))}
        />
      </Chart>
    </ChartCanvas>
  );
};

export default ChartComponent;
