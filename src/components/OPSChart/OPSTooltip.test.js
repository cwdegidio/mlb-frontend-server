import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import OPSTooltip from './OPSTooltip';

test('renders tooltip', () => {
    const payload = [
        {
            payload: {
                firstName: 'Aaron',
                lastName: 'Judge',
                team: 'NYY'
            },
            value: 0.322
        },
        {
            value: 1.157
        }
    ];

    const { container } = render(<OPSTooltip active={true} payload={payload} label="test" />);
    const tooltip = container.querySelector(".custom-tooltip");
    expect(tooltip).toBeInTheDocument();
})
