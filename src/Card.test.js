import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test(' if Card renders without exploding', function() {
	render(<Card />);
});

test('if it matches snapshot', function() {
	const { asFragment } = render(<Card />);
	expect(asFragment()).toMatchSnapshot();
});
