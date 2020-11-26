import Background from '../../components/Background';
import { render } from '@testing-library/react';
import { backgroundImages } from '../../helpers/data';
describe('Test component Background', () => {
  const { photos } = backgroundImages;
  it('Should show the correct credit for background image', () => {
    const { getByTestId, getByText } = render(
      <Background image={photos}>
        <h1>Test children props</h1>
      </Background>
    );

    expect(getByTestId('background-credit').href).toEqual(photos.pageURL);
    expect(getByTestId('background-credit').textContent).toEqual(
      `Credits: ${photos.user}`
    );
    expect(getByText('Test children props')).toBeInTheDocument();

    const rend = render(
      <Background image={photos}>
        <h1>Test children props</h1>
      </Background>
    );

    expect(rend).toMatchSnapshot();
  });
});
