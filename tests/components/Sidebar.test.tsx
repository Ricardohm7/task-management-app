import React from 'react';
import '@testing-library/jest-dom/vitest';
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react';
import Sidebar from '../../src/components/Sidebar';

describe('Sidebar', () => {
  const defaultProps = {
    onClose: vi.fn(),
    open: true
  }

  it('renders at least two menu options', () => {
    render(<Sidebar {...defaultProps} />);
    const menuItems = screen.getAllByRole('link');
    expect(menuItems.length).toBeGreaterThanOrEqual(2);
  });

  it('renders Dashboard menu option', () => {
    render(<Sidebar {...defaultProps} />);
    const dashboardOption = screen.getByText('Dashboard');
    expect(dashboardOption).toBeInTheDocument()
  });

  it('renders Configurations menu option', () => {
    render(<Sidebar {...defaultProps} />);
    const configurationsOption = screen.getByText('Settings');
    expect(document.body.contains(configurationsOption)).toBe(true)
  });
});