import React from 'react';
import { render } from 'testing/react';

import NavigationSection from './NavigationSection';

describe('NavigationSection', () => {
  it('should not grow to fill the space when isPrimary is not specified', () => {
    const { container } = render(<NavigationSection />);
    expect(container.firstChild).toHaveStyle({ 'flex-grow': 0 });
  });

  it('should not grow to fill the space when isPrimary is specified false', () => {
    const { container } = render(<NavigationSection isPrimary={false} />);
    expect(container.firstChild).toHaveStyle({ 'flex-grow': 0 });
  });

  it('should grow to fill the space when isPrimary is specified true', () => {
    const { container } = render(<NavigationSection isPrimary={true} />);
    expect(container.firstChild).toHaveStyle({ 'flex-grow': 1 });
  });
});
