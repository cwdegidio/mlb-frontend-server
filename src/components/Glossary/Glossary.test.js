import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Glossary from './Glossary';

test('renders card', () => {
    render(<Glossary />);
    const glossary = screen.getByTestId('glossary');
    expect(glossary).toBeInTheDocument();
})
