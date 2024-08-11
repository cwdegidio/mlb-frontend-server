import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

test('renders card', () => {
    const standingPosition = 1;
    const data = {
        playerId: '24-NYY',
        team: 'NYY',
        firstName: 'Aaron',
        lastName: 'Judge',
        bats: 'R',
        gamesPlayed: 111,
        plateAppearances: 497,
        teamGamesPlayed: 113,
        appPerGame: 4.39823,
        atBats: 395,
        battingAverage: 0.322,
        onBasePlusSlugging: 1.157
    }
    render(<Card standingPosition={standingPosition} data={data} />);
    const card = screen.getByTestId('player-card');
    expect(card).toBeInTheDocument();
})

test('has first and name', () => {
    const standingPosition = 1;
    const data = {
        playerId: '24-NYY',
        team: 'NYY',
        firstName: 'Aaron',
        lastName: 'Judge',
        bats: 'R',
        gamesPlayed: 111,
        plateAppearances: 497,
        teamGamesPlayed: 113,
        appPerGame: 4.39823,
        atBats: 395,
        battingAverage: 0.322,
        onBasePlusSlugging: 1.157
    }
    render(<Card standingPosition={standingPosition} data={data} />);
    const card = screen.getByText('Aaron Judge');
    expect(card).toBeInTheDocument();
})


test('has team', () => {
    const standingPosition = 1;
    const data = {
        playerId: '24-NYY',
        team: 'NYY',
        firstName: 'Aaron',
        lastName: 'Judge',
        bats: 'R',
        gamesPlayed: 111,
        plateAppearances: 497,
        teamGamesPlayed: 113,
        appPerGame: 4.39823,
        atBats: 395,
        battingAverage: 0.322,
        onBasePlusSlugging: 1.157
    }
    render(<Card standingPosition={standingPosition} data={data} />);
    const card = screen.getByText('NYY');
    expect(card).toBeInTheDocument();
})

test('has bats', () => {
    const standingPosition = 1;
    const data = {
        playerId: '24-NYY',
        team: 'NYY',
        firstName: 'Aaron',
        lastName: 'Judge',
        bats: 'R',
        gamesPlayed: 111,
        plateAppearances: 497,
        teamGamesPlayed: 113,
        appPerGame: 4.39823,
        atBats: 395,
        battingAverage: 0.322,
        onBasePlusSlugging: 1.157
    }
    render(<Card standingPosition={standingPosition} data={data} />);
    const card = screen.getByText('R');
    expect(card).toBeInTheDocument();
})

test('has games played', () => {
    const standingPosition = 1;
    const data = {
        playerId: '24-NYY',
        team: 'NYY',
        firstName: 'Aaron',
        lastName: 'Judge',
        bats: 'R',
        gamesPlayed: 111,
        plateAppearances: 497,
        teamGamesPlayed: 113,
        appPerGame: 4.39823,
        atBats: 395,
        battingAverage: 0.322,
        onBasePlusSlugging: 1.157
    }
    render(<Card standingPosition={standingPosition} data={data} />);
    const card = screen.getByText('111');
    expect(card).toBeInTheDocument();
})

test('has plate appearances', () => {
    const standingPosition = 1;
    const data = {
        playerId: '24-NYY',
        team: 'NYY',
        firstName: 'Aaron',
        lastName: 'Judge',
        bats: 'R',
        gamesPlayed: 111,
        plateAppearances: 497,
        teamGamesPlayed: 113,
        appPerGame: 4.39823,
        atBats: 395,
        battingAverage: 0.322,
        onBasePlusSlugging: 1.157
    }
    render(<Card standingPosition={standingPosition} data={data} />);
    const card = screen.getByText('497');
    expect(card).toBeInTheDocument();
})

test('has team games played', () => {
    const standingPosition = 1;
    const data = {
        playerId: '24-NYY',
        team: 'NYY',
        firstName: 'Aaron',
        lastName: 'Judge',
        bats: 'R',
        gamesPlayed: 111,
        plateAppearances: 497,
        teamGamesPlayed: 113,
        appPerGame: 4.39823,
        atBats: 395,
        battingAverage: 0.322,
        onBasePlusSlugging: 1.157
    }
    render(<Card standingPosition={standingPosition} data={data} />);
    const card = screen.getByText('113');
    expect(card).toBeInTheDocument();
})

test('has appearances per game', () => {
    const standingPosition = 1;
    const data = {
        playerId: '24-NYY',
        team: 'NYY',
        firstName: 'Aaron',
        lastName: 'Judge',
        bats: 'R',
        gamesPlayed: 111,
        plateAppearances: 497,
        teamGamesPlayed: 113,
        appPerGame: 4.39823,
        atBats: 395,
        battingAverage: 0.322,
        onBasePlusSlugging: 1.157
    }
    render(<Card standingPosition={standingPosition} data={data} />);
    const card = screen.getByText('4.39823');
    expect(card).toBeInTheDocument();
})

test('has at bats', () => {
    const standingPosition = 1;
    const data = {
        playerId: '24-NYY',
        team: 'NYY',
        firstName: 'Aaron',
        lastName: 'Judge',
        bats: 'R',
        gamesPlayed: 111,
        plateAppearances: 497,
        teamGamesPlayed: 113,
        appPerGame: 4.39823,
        atBats: 395,
        battingAverage: 0.322,
        onBasePlusSlugging: 1.157
    }
    render(<Card standingPosition={standingPosition} data={data} />);
    const card = screen.getByText('395');
    expect(card).toBeInTheDocument();
})

test('has batting average', () => {
    const standingPosition = 1;
    const data = {
        playerId: '24-NYY',
        team: 'NYY',
        firstName: 'Aaron',
        lastName: 'Judge',
        bats: 'R',
        gamesPlayed: 111,
        plateAppearances: 497,
        teamGamesPlayed: 113,
        appPerGame: 4.39823,
        atBats: 395,
        battingAverage: 0.322,
        onBasePlusSlugging: 1.157
    }
    render(<Card standingPosition={standingPosition} data={data} />);
    const card = screen.getByText('0.322');
    expect(card).toBeInTheDocument();
})

test('has ops', () => {
    const standingPosition = 1;
    const data = {
        playerId: '24-NYY',
        team: 'NYY',
        firstName: 'Aaron',
        lastName: 'Judge',
        bats: 'R',
        gamesPlayed: 111,
        plateAppearances: 497,
        teamGamesPlayed: 113,
        appPerGame: 4.39823,
        atBats: 395,
        battingAverage: 0.322,
        onBasePlusSlugging: 1.157
    }
    render(<Card standingPosition={standingPosition} data={data} />);
    const card = screen.getByText('1.157');
    expect(card).toBeInTheDocument();
})
