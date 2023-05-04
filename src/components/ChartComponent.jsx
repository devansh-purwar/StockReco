import { createChart, ColorType } from 'lightweight-charts'
import { useEffect, useRef } from 'react'

export default function ChartComponent(props) {

    const green = '#36E6A3'
    const red = '#f23645'
    let j = '#f23645'
    const { co } = props
    if (co) {
        j = green
    }
    // console.log(co)
    const {
        data,
        colors: {
            backgroundColor = 'white',
            lineColor = j,
            textColor = 'black',
            areaTopColor = j,
            areaBottomColor = "#fff",
        } = {},
    } = props

    const chartContainerRef = useRef()

    useEffect(
        () => {
            const handleResize = () => {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth })
            }

            const chart = createChart(chartContainerRef.current, {
                layout: {
                    background: { type: ColorType.Solid, color: backgroundColor },
                    textColor,
                },
                width: chartContainerRef.current.clientWidth,
                height: 270,
            })
            chart.timeScale().fitContent()
            const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor })
            newSeries.setData(data)
            window.addEventListener('resize', handleResize)
            return () => {
                window.removeEventListener('resize', handleResize)
                chart.remove()
            };
        },
        [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
    )

    return (
        <div ref={chartContainerRef}></div>
    )
}