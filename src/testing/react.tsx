import { render as rtlRender, RenderOptions } from '@testing-library/react';
import App from 'components/App';
import React, { FC } from 'react';
import { MemoryRouter } from 'react-router-dom';

const TestApp: FC = ({ children }) => (
  <App>
    <MemoryRouter>{children}</MemoryRouter>
  </App>
);

export * from '@testing-library/react';

export const render = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  rtlRender(ui, { wrapper: TestApp, ...options });
