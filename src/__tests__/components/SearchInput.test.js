import Form from '../../components/SearchInput';
import { render } from '@testing-library/react';
//imports of data for testing
import { FaSearch } from 'react-icons/fa';

describe('Teste component SearchInput', () => {
  it('should be render SearchInput', () => {
    const { getByTestId, getByDisplayValue } = render(
      <Form
        placeholder={'Test placeholder value'}
        query={'Input Value'}
        Icon={<FaSearch />}
      />
    );
    expect(getByTestId('input').placeholder).toEqual('Test placeholder value');
    //valor do input
    expect(getByTestId('input').value).toEqual('Input Value');
    expect(getByDisplayValue('Input Value')).toBeInTheDocument();

    const rend = render(
      <Form
        placeholder={'Test placeholder value'}
        query={'Input Value'}
        Icon={<FaSearch />}
      />
    );

    expect(rend).toMatchSnapshot();
  });
});
