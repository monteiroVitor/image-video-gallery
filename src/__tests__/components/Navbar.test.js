import Navbar from '../../components/Navbar/Navbar';
import { render } from '@testing-library/react';
import { routes } from '../../helpers/data';

describe('Test component Navbar', () => {
  it('Should render routes', () => {
    const { getByTestId, getByText } = render(<Navbar routes={routes} />);

    expect(getByTestId('links-navbar')).toContainElement(
      getByText(routes[0].text)
    );
    expect(getByTestId('links-navbar')).toContainElement(
      getByText(routes[1].text)
    );

    const rend = render(<Navbar routes={routes} />);
    expect(rend).toMatchSnapshot();
  });
});
