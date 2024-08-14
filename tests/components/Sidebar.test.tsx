import React from 'react';
import '@testing-library/jest-dom/vitest';
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react';
import Sidebar from '../../src/components/Sidebar';

describe('Sidebar', () => {
  it('renders at least two menu options', () => {
    render(<Sidebar />);
    const menuItems = screen.getAllByRole('link');
    expect(menuItems.length).toBeGreaterThanOrEqual(2);
  });

  it('renders Dashboard menu option', () => {
    render(<Sidebar />);
    const dashboardOption = screen.getByText('Dashboard');
    expect(dashboardOption).toBeInTheDocument()
  });

  it('renders Configurations menu option', () => {
    render(<Sidebar />);
    const configurationsOption = screen.getByText('Settings');
    expect(document.body.contains(configurationsOption)).toBe(true)
  });
});