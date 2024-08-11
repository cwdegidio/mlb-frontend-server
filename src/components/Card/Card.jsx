import './Card.css';
import teamColor from '../../teamColor.jsx';

function Card({ standingPosition, data }) {
    const { playerId, team, firstName, lastName, bats, gamesPlayed, plateAppearances, teamGamesPlayed, appPerGame, atBats, battingAverage, onBasePlusSlugging } = data;
    return (
        <div className="player-card" data-testid="player-card">
            <div className="player-card__header" style = {{backgroundColor: teamColor[team].bgColor, color: teamColor[team].color}}>
                <h2><strong>{standingPosition}.</strong> {firstName} {lastName}</h2>
                <p>{team}</p>
            </div>
            <div className="player-card__body">
                <div className="player-card__stat">
                    <p className="stat-header"><strong>Bats</strong></p>
                    <p className="stat-value">{bats}</p>
                </div>
                <div className="player-card__stat">
                    <p className="stat-header"><strong>Games Played</strong></p>
                    <p className="stat-value">{gamesPlayed}</p>
                </div>
                <div className="player-card__stat">
                    <p className="stat-header"><strong>Team Games Played</strong></p>
                    <p className="stat-value">{teamGamesPlayed}</p>
                </div>
                <div className="player-card__stat">
                    <p className="stat-header"><strong>Plate App</strong></p>
                    <p className="stat-value">{plateAppearances}</p>
                </div>
                <div className="player-card__stat">
                    <p className="stat-header"><strong>App Per Game</strong></p>
                    <p className="stat-value">{appPerGame}</p>
                </div>
                <div className="player-card__stat">
                    <p className="stat-header"><strong>AB</strong></p>
                    <p className="stat-value">{atBats}</p>
                </div>
                <div className="player-card__stat">
                    <p className="stat-header"><strong>AVG</strong></p>
                    <p className="stat-value">{battingAverage}</p>
                </div>
                <div className="player-card__stat">
                    <p className="stat-header"><strong>OPS</strong></p>
                    <p className="stat-value">{onBasePlusSlugging}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;