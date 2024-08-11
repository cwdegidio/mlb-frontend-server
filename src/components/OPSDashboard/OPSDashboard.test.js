import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import OPSDashboard from './OPSDashboard';
import fetchMock from "jest-fetch-mock";

describe('renders dashboard', () => {
    beforeEach(() => {
        fetchMock.enableMocks();
    })

    afterEach(() => {
        fetchMock.resetMocks();
    })

    it('calls the api and returns data', async () => {
        fetch.mockResponseOnce(JSON.stringify([
            {
                id: 242,
                playerId: "24-NYY",
                team: "NYY",
                firstName: "Aaron",
                lastName: "Judge",
                bats: "R",
                gamesPlayed: 111,
                plateAppearances: 497,
                teamGamesPlayed: 113,
                appPerGame: 4.39823,
                atBats: 395,
                battingAverage: 0.322,
                onBasePlusSlugging: 1.157
            }
        ]))

        const { container } = render(<OPSDashboard />);
        await waitFor(() => {
            expect(fetchMock).toHaveBeenCalledTimes(1);

        });
        const scatterChart = container.querySelector(".recharts-wrapper");
        expect(scatterChart).toBeInTheDocument();
        expect(await screen.findByTestId('glossary')).toBeInTheDocument();
        expect(await screen.findByTestId('player-card')).toBeInTheDocument();
    })

    it('should fail gracefully', async () => {
        fetchMock.mockRejectOnce(new Error());

        render(<OPSDashboard />);
        await waitFor(() => {
            expect(fetchMock).toHaveBeenCalledTimes(1);
        });
        expect(await screen.findByTestId('ops-dashboard')).toBeInTheDocument();
    })
})
