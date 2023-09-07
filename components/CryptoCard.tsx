import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Crypto } from '../types/crypto';
import PercentageDisplay from "../components/PercentageDisplay";
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import { formatPrice } from '../utils/formatPrice';
import { formatNumber } from '../utils/formatNumber';

interface CryptoCardProps {
    data: Crypto | undefined;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ data }) => {
    const {
        name,
        symbol,
        percent_change_1h,
        percent_change_24h,
        percent_change_7d,
        market_cap_usd,
        volume24,
        price_btc,
        rank,
        csupply,
        msupply,
        tsupply
    } = data;

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.name}>About {name}</Text>
            <View
                style={styles.cardItem}
            >
                <Text style={styles.text}>Rank: </Text>
                <Text style={styles.text}>No.{rank} </Text>
            </View>
            <View
                style={styles.cardItem}
            >
                <Text style={styles.text}>24h Trading volume: </Text>
                <Text style={styles.text}>{formatNumber(volume24)}</Text>
            </View>
            <View
                style={styles.cardItem}
            >
                <Text style={styles.text}>Market capitalization: </Text>
                <Text style={styles.text}>$ {formatNumber(market_cap_usd)}</Text>
            </View>
            <View
                style={styles.cardItem}
            >
                <Text style={styles.text}>Circulating supply: </Text>
                <Text style={styles.text}>{csupply ? `${formatNumber(csupply)} ${symbol}`: "--"}</Text>
            </View>
            <View
                style={styles.cardItem}
            >
                <Text style={styles.text}>Maximum supply: </Text>
                <Text style={styles.text}>{msupply ? `${formatNumber(msupply)} ${symbol}` : "--"}</Text>
            </View>
            <View
                style={styles.cardItem}
            >
                <Text style={styles.text}>Total supply: </Text>
                <Text style={styles.text}>{tsupply ? `${formatNumber(tsupply)} ${symbol}` : "--"}</Text>
            </View>
            <View
                style={styles.cardItem}
            >
                <Text style={styles.text}>Price BTC: </Text>
                <Text style={styles.text}>{formatPrice(price_btc)} BTC</Text>
            </View>
            <View
                style={styles.cardItem}
            >
                <Text style={styles.text}>1 Hour Change: </Text>
                <Text style={styles.text}><PercentageDisplay percent_change={percent_change_1h} /> </Text>
            </View>
            <View
                style={styles.cardItem}
            >
                <Text style={styles.text}>24 Hour Change: </Text>
                <Text style={styles.text}><PercentageDisplay percent_change={percent_change_24h} /> </Text>
            </View>
            <View
                style={styles.cardItem}
            >
                <Text style={styles.text}>7 Day Change: </Text>
                <Text style={styles.text}><PercentageDisplay percent_change={percent_change_7d} /> </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    cardItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: .3,
        borderBottomColor: '#e0e0e0',
        paddingBottom: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
        marginTop: 8,
    },
    
});

export default CryptoCard;
