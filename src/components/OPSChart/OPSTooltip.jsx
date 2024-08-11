const OPSTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip" style={{backgroundColor: "rgba(255,255,255,.75)", border: "1px solid black", padding: "5px"}}>
                <p className="label">{`${payload[0].payload.firstName} ${payload[0].payload.lastName}  (${payload[0].payload.team})`}<br/>
                <strong>Batting Avg: </strong>{payload[0].value}<br/>
                <strong>OPS: </strong>{payload[1].value}</p>
            </div>
        );
    }

    return null;
};

export default OPSTooltip;
