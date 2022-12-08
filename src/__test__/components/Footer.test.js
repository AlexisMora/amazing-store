import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from '../../components/Footer';

describe('Footer', () => {
  let footerContainer;
  beforeEach(() => {
    const { container } = render(<Footer />);
    footerContainer = container;
  });
  test('renders Footer Component', () => {
    expect(footerContainer).toBeInTheDocument();
  });
  test('footer renders a title', () => {
    const title = screen.getByText('Amazing Store');
    expect(title).toBeInTheDocument();
  });
});
