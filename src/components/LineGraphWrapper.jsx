import { LineGraph } from "@groww-tech/react-charts";

// const data = [[1679855400000, 3935],
// [1679941800000, 3855],
// [1680028200000, 3903],
// [1680201000000, 4029],
// [1680460200000, 4049],
// [1680633000000, 4040],
// [1680719400000, 4147],
// [1681065000000, 4187],
// [1681151400000, 4202],
// [1681237800000, 4117],
// [1681324200000, 4174],
// [1681669800000, 4158],
// [1681756200000, 4151],
// [1681842600000, 4121],
// [1681929000000, 4066],
// [1682015400000, 3903],
// [1682274600000, 3897],
// [1682361000000, 3908],
// [1682447400000, 3952]]

const LineGraphWrapper = ({ data,width }) => {

    let co = "#EF7C63"
    if (data && data[data.length - 1][1] >= data[0][1]) {
        co = "#00D09C"
    }
    let w = 200
    if(width!=null){
        w = width
    }
    return (
        <LineGraph
            width={w}
            height={80}
            paddingHorz={4}
            paddingVert={4}
            linePaths={[
                {
                    series: data,
                    color: co,
                    strokeWidth: 2,
                    key: "line-graph",
                    showLastPointBlinking: true,
                    strokeOpacity: 1,
                    isSeriesToScale: true,
                    // allowToolTip: true
                }
            ]}
        />
    );
};

export default LineGraphWrapper;
