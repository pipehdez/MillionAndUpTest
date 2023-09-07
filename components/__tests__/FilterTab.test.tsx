import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FilterTab from '../FilterTab';

const mockFilterData = [
  {
    key: 'filter1',
    title: 'Filter 1',
    MyFunction: jest.fn(),
  },
  {
    key: 'filter2',
    title: 'Filter 2',
    MyFunction: jest.fn(),
  },
  {
    key: 'filter3',
    title: 'Filter 3',
    MyFunction: jest.fn(),
  },
];

describe('FilterTab', () => {
  it('renders correctly with filter buttons', () => {
    const { getByText } = render(<FilterTab filterData={mockFilterData} filterBy="filter1" />);
    
    expect(getByText('Filter 1')).toBeTruthy();
    expect(getByText('Filter 2')).toBeTruthy();
    expect(getByText('Filter 3')).toBeTruthy();
  });

  it('calls the correct function when a filter button is pressed', () => {
    const { getByText } = render(<FilterTab filterData={mockFilterData} filterBy="filter1" />);
    
    fireEvent.press(getByText('Filter 2'));
    expect(mockFilterData[1].MyFunction).toHaveBeenCalled();

    fireEvent.press(getByText('Filter 3'));
    expect(mockFilterData[2].MyFunction).toHaveBeenCalled();
  });
});
