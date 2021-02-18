import React from 'react';
import { shallow, mount } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';
import { create } from 'react-test-renderer';

describe('<Header/>', () => {
  const header = shallow(
    <ProviderMock>
      <Header />
    </ProviderMock>
  );
  test('Render del componente Header', () => {
    expect(header.length).toEqual(1);
  });
  test('Render del Titutlo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
  test('Props Header cart 1', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find('.Header-alert').text()).toEqual('1');
  });
});

describe('Header Snapchot', () => {
  test('Comprobar el Snapshot de Header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
