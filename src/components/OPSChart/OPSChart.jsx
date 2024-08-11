import { CartesianGrid, Label, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from "recharts";
import OPSTooltip from './OPSTooltip.jsx';
function OPSChart({ data }) {

    return (
        <ScatterChart
            width={820}
            height={600}
            margin={{
                top: 20,
                right: 20,
                bottom: 50,
                left: 10,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="battingAverage" type="number" domain={[0.150, 0.350]} name="Batting Average">
                <Label
                    dx={-20}
                    dy={30}
                    angle={0}
                    value={"AVG"} />
            </XAxis>
            <YAxis dataKey="onBasePlusSlugging" type="number" domain={[0.5, 1.25]} name="On Base + Slugging">
                <Label
                    dx={-20}
                    dy={30}
                    angle={270}
                    value={"OPS"} />
            </YAxis>
            {/*<Tooltip cursor={{ strokeDasharray: '3 3' }} />*/}
            <Tooltip content={<OPSTooltip />} cursor={{ strokeDasharray: '3 3' }}/>
            <Scatter name="A school" data={data} fill="#8884d8" />
        </ScatterChart>
    );
}

export default OPSChart;