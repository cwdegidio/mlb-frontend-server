import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import OPSChart from './OPSChart';

test('renders scatter chart', () => {
    const data = [
        {
            id :242,
            playerId :'24-NYY',
            team :'NYY',
            firstName :'Aaron',
            lastName :'Judge',
            bats :'R',
            gamesPlayed :111,
            plateAppearances :497,
            teamGamesPlayed :113,
            appPerGame :4.39823,
            atBats :395,
            battingAverage :0.322,
            onBasePlusSlugging :1.157
        }
    ];

    const { container } = render(<OPSChart data={data} />);
    const scatterChart = container.querySelector(".recharts-wrapper");
    expect(scatterChart).toBeInTheDocument();
})
