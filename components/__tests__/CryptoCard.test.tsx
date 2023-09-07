import React from 'react';
import { render } from '@testing-library/react-native';
import CryptoCard from '../CryptoCard';
import { formatNumber } from '../../utils/formatNumber';
import { formatPrice } from '../../utils/formatPrice';

const mockCryptoData = {
  name: 'Bitcoin',
  symbol: 'BTC',
  percent_change_1h: '0.37',
  percent_change_24h: '0.41',
  percent_change_7d: '-3.65',
  market_cap_usd: '200661489464.85',
  volume24: '4098472569.4470387',
  price_btc: '0.063508',
  rank: 1,
  csupply: '122375302.00',
  msupply: '',
  tsupply: '122375302',
};

describe('CryptoCard', () => {
  it('renders correctly with crypto data', () => {
    const { getByText } = render(
    //@ts-ignore
      <CryptoCard data={mockCryptoData} />
    );
    
    expect(getByText('About Bitcoin')).toBeTruthy();
    expect(getByText('No.1')).toBeTruthy(); 
    expect(getByText(formatNumber('4098472569.4470387'))).toBeTruthy();
    expect(getByText(`$ ${formatNumber('200661489464.85')}`)).toBeTruthy();
    expect(getByText('--')).toBeTruthy(); 
    expect(getByText(`${formatPrice('0.063508')} BTC`)).toBeTruthy();
    expect(getByText('0.37%')).toBeTruthy();
    expect(getByText('0.41%')).toBeTruthy();
    expect(getByText('-3.65%')).toBeTruthy();
  });

});
