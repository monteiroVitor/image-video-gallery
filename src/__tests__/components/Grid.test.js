import Grid from '../../components/Grid';
import { render } from '@testing-library/react';

describe('Test component Grid', () => {
  it('should render h1', () => {
    const { getByText } = render(
      <Grid>
        <h1>Should render</h1>
      </Grid>
    );

    expect(getByText('Should render')).toBeInTheDocument();
  });
});
