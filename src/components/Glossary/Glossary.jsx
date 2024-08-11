function Glossary() {
    return (
        <div className="glossary" data-testid="glossary">
            <h2>Stat Definitions</h2>
            <p>
                <strong>Bats - </strong><em>indicates which side the batter hits from. L = left, R = right, S = switch hitter. </em>
                <strong>Games Played - </strong><em>number of games the player has appeared in. </em>
                <strong>Team Games Played - </strong><em>number of games player's team has played. Used to calculate appearances per game. </em>
                <strong>Plate Appearances - </strong><em>number of times a player has appeared at home plate to bat regardless of outcome. Used to calculate appearances per game. </em>
                <strong>Appearances Per Game - </strong><em>average number of times a player has appeared at the plate per team played games. (Plate Appearances {String.fromCharCode(247)} Team Games Played). Must be &gt;= 3.1 to be eligible for batting award. </em>
                <strong>At Bats (AB) - </strong><em>occurs when a player reaches base via fielder's choice, a hit, an error, or when a batter is put out on a non-sacrifice. </em>
                <strong>Batting Average (AVG) - </strong><em>determined by At Bats {String.fromCharCode(247)} Hits. </em>
                <strong>On Base Plus Slugging (OPS) - </strong><em>determined by On-Base Percentage + Slugging Percentage.</em>
            </p>
            <hr style={{marginTop: "20px", marginBottom: "20px"}}/>
        </div>
    );
}

export default Glossary;
