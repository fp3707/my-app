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
    <div style={{ width: "100%", height: "100%" }}> {/* 부모 크기 적용 */}
      <ChartCanvas
        height={400} // 기본 높이는 설정하되 비율을 유지 가능
        width={undefined} // 캔버스의 고정 크기를 제거
        ratio={window.devicePixelRatio || 1}
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        data={chartData}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xExtents={xExtents}
        panEvent={true}
        zoomEvent={true}
      >
        {/* 캔들스틱 차트 */}
        <Chart id={1} yExtents={(d) => [d.high, d.low]}>
          <YAxis axisAt="left" orient="left" ticks={5} />
          <CandlestickSeries />
        </Chart>

        {/* 거래량 바 차트 */}
        <Chart id={2} yExtents={(d) => d.volume} height={100} origin={[0, 400]}>
          <YAxis axisAt="right" orient="right" ticks={5} />
          <BarSeries yAccessor={(d) => d.volume} fill={(d) => (d.close > d.open ? "green" : "red")} />
          <XAxis
            axisAt="bottom"
            orient="bottom"
            tickFormat={(d) => dateFormat(new Date(chartData[d].date))}
          />
        </Chart>
      </ChartCanvas>
    </div>
  );
};

export default ChartComponent;
