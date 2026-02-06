// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders deploySurge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/deploySurge/i);
    expect(titleElement).toBeInTheDocument();
});
