import React from 'react';
import '@testing-library/jest-dom/vitest';
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Sidebar from '../../src/components/Sidebar'


describe('Sidebar', () => {
  const defaultProps = {
    onClose: vi.fn(),
    open: true
  }
  const renderSidebar = (props = {}) => {
    return render(
      <MemoryRouter>
        <Sidebar {...defaultProps} {...props} />
      </MemoryRouter>
    )
  }

  it('renders at least two menu options', () => {
    renderSidebar();
    const menuItems = screen.getAllByRole('link');
    expect(menuItems.length).toBeGreaterThanOrEqual(2);
  });

  it('renders Dashboard menu option', () => {
    renderSidebar();
    const dashboardOption = screen.getByText('Dashboard');
    expect(dashboardOption).toBeInTheDocument()
  });

  it('renders Settings menu option', () => {
    renderSidebar();
    const configurationsOption = screen.getByText('Settings');
    expect(document.body.contains(configurationsOption)).toBe(true)
  });
});