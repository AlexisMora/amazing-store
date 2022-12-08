import { render } from '@testing-library/react';
import React from 'react';
import Footer from '../../components/Footer';

describe('Footer', () => {
  test('renders Footer Component', () => {
    const footer = render(<Footer />);
    expect(footer).length > 0;
  });
});
