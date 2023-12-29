import React from 'react';
import { render, screen, } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Registration from './Registration';

describe('Registration Component', () => {
  test('renders Registration component', () => {
    render(
      <BrowserRouter>
        <Registration />
      </BrowserRouter>
    );
    
    const pageTitles = screen.queryAllByText(/Registration Form/i);
    expect(pageTitles[0]).toBeInTheDocument();
  });

  test('allows user to navigate through form pages', () => {
    render(
      <BrowserRouter>
        <Registration />
      </BrowserRouter>
    );
    
    userEvent.click(screen.getByText(/Next/i));
    userEvent.click(screen.getByText(/Next/i));
  });
}); 


