import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { moderateScale } from '../../../utils/helpers';

import Eye from '../../../../assets/icons/Eye';
import Up_tick from '../../../../assets/icons/Up_tick';
interface PropsI {
    price: string | Element;
    hours: number;
    value: string | Element;
    currentPrice: string | Element;
}
export const WalletCard = ({
    price,
    hours,
    value,
    currentPrice,
}: PropsI) => {
    const [eye, setEye] = useState(true);
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.row_flex}>
                    <Text style={[ styles.font400Size14, styles.secondary_color]}>Total Balance</Text>
                    <TouchableOpacity style={styles.eye} onPress={()=>setEye(!eye)}>
                        <Eye />
                    </TouchableOpacity>
                </View>
                <View style={styles.row_flex}>
                    {eye ?  
                    <View style={styles.wallet_money}>
                        <Text style={styles.font500Size40}>${price}.</Text>
                        <Text style={styles.font500Size20}>00</Text>
                    </View>
                    :  <View style={styles.wallet_money}>
                        <Text style={[styles.font500Size14, styles.secondary_color]}>Press the eye icon to the price</Text>
                    </View>
                    }
                    <View style={styles.current_analytics_container}>
                        <Text style={[ styles.font500Size10, styles.secondary_color]}>{hours}H Change</Text>
                        <View style={styles.analytics_sub_container}>
                            <Text style={[styles.font400Size14, styles.primary_color]}>$</Text>
                            <Text style={[ styles.font500Size14, styles.primary_color]}>{value}.</Text>
                            <Text style={[styles.font500Size10, styles.primary_color,styles.end_flex ]}>{currentPrice}</Text>
                            <View style={styles.index}>
                                <Up_tick />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
         width: 342, height: 152, borderRadius: 12, borderWidth: 1, borderColor: '#F5F5F5', backgroundColor: '#F8FAFE', paddingTop: 35, paddingLeft: 21 },
    font500Size14:{
         fontSize:14, fontFamily: 'Lato',
          },
          font500Size10:{
            fontFamily: 'Lato', fontSize:10,
          },
          font400Size14:{
            fontFamily: 'Lato',fontSize:14,
          },
          font500Size40:{ fontSize: 40, fontFamily: 'Lato'},
          font500Size20:{ fontFamily: 'Lato', fontSize: 20, alignSelf: 'flex-end' },
          primary_color:{color:'#117B34'},
          secondary_color:{ color: '#808588'},
    row_flex:{ flexDirection: 'row' },
    eye:{ paddingHorizontal: 4, height: 20 },
    wallet_money:{ height: 60, flexDirection: 'row', paddingTop: 17, width: '60%' },
    current_analytics_container:{ width: '40%', alignItems: 'center', paddingTop: 30, paddingBottom: 4.5 },
    analytics_sub_container:{ flexDirection: 'row', height: 18, paddingLeft: 15, paddingTop: 2 },
    index:{ marginTop: -5, marginLeft: -2 },
    end_flex:{alignSelf: 'center', marginTop:2}
});


