import {useEffect, useState} from 'react';
import Card from '../Card/Card.jsx';
import OPSChart from '../OPSChart/OPSChart.jsx';
import Glossary from '../Glossary/Glossary.jsx';
import './OPSDashboard.css';

function OPSDashboard() {
    const [batterData, setBatterData] = useState([]);

    useEffect(() => {
        fetch('http://66.228.48.112:8090/ops_leaders')
            .then(res => res.json())
            .then(data => setBatterData(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="ops-dashboard" data-testid="ops-dashboard">
            <div className="split-container">
                <div className="split-container__right">
                    <OPSChart data={batterData} />
                    <p style={{textAlign: "center", marginBottom: "50px"}}><em>Comparison of OPS vs. Batting Average (AVG)</em></p>
                </div>
                <div className="split-container__left">
                    <Glossary />
                </div>
            </div>
            {batterData.map((data, x) => <Card key={data.playerId} standingPosition={x + 1} data={data}/>)}
        </div>
    )
}

export default OPSDashboard;