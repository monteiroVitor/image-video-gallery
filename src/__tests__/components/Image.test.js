import Image from '../../components/Thumb/Image';
import { BiHeart, BiStar } from 'react-icons/bi';
import { render } from '@testing-library/react';

const image = {
  user: 'pasja1000',
  pageURL:
    'https://pixabay.com/photos/road-winter-in-the-mountains-snow-5765360/',
  likes: 42,
  webformatURL:
    'https://pixabay.com/get/53e7d3464954ac14f1dc846096293e7f1c3bdfe2524c704f75297fd5924ec350_640.jpg',
  tags: 'road, winter in the mountains, snow',
  favorites: 13,
};

describe('Test component Image', () => {
  it('Should render Image', () => {
    const { getByTestId, getByText } = render(
      <Image
        image={image}
        icons={{ like: <BiHeart />, favorite: <BiStar /> }}
      />
    );

    expect(getByTestId('image').src).toEqual(image.webformatURL);
    expect(getByText(image.user)).toBeInTheDocument();
    expect(getByTestId('link').href).toEqual(image.pageURL);

    const rend = render(
      <Image
        image={image}
        icons={{ like: <BiHeart />, favorite: <BiStar /> }}
      />
    );

    expect(rend).toMatchSnapshot();
  });
});
