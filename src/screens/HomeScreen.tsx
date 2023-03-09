/* eslint-disable no-return-assign */
/* eslint-disable space-infix-ops */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Star from '../../assets/icons/Star';
import ChevronRight from '../../assets/icons/ChevronRight';
import Fi_trending_Up from '../../assets/icons/Fi_trending-up';
import Group from '../../assets/icons/Group';
import DollarG from '../../assets/icons/DollarG';
import Fi_book from '../../assets/icons/Fi_book';
import Fi_gift from '../../assets/icons/Fi_gift';
import { GiftCard } from '../components/common/Cards/GiftCard';
import { TradingCard } from '../components/common/Cards/TradingCard';
import { WalletCard } from '../components/common/Cards/WalletCard';

function HomeScreen() {
  return (
    <View>
      <View style={styles.container}>
          {/* card section */}
          <View style={styles.custom_wallet_height}>
          <WalletCard price={'6,554'} hours={24} value={240} currentPrice={36}/>
          </View>
          <View style={styles.custom_height}>
         <GiftCard Customtitle={ <><Text style={styles.font400Size14}>Get your free </Text><Text> </Text>
            <Text style={styles.font600Size14}>
                   .wallet
            </Text>
            <Text> </Text>
            <Text style={styles.font400Size14}>
              username
            </Text></> } subTitle={undefined} LeftIcon={<Star width={20} height={20}/>} RightArrow={<ChevronRight width={20} height={20}/>} />
            </View>
          <View style={styles.tranding_cards_container}>
          <View style={styles.row_flex}>
          <TradingCard title={'Buy Crypto'} customIcon={<DollarG width={12}height={20}/>} customFont={'#19A684'} backColor={'#E7FFF9'}/>
          <TradingCard title={'Swap Crypto'} customIcon={<Group width={25}height={20}/>} customFont={'#FF8A00'} backColor={'#FFF4E6'}/>
          </View>
          <View style={styles.row_flex}>
         <TradingCard title={'Transactions'} customIcon={<Fi_book width={25}height={25}/>} customFont={'#0052FE'} backColor={'#F0F6FF'}/>
          <TradingCard title={'Markets'} customIcon={<Fi_trending_Up width={30}height={20}/>} customFont={'#697E97'} backColor={'#F8F8F8'}/>
         </View>
         </View>
         <View style={styles.giftcard}>
         <GiftCard Customtitle={ <><Text style={{fontWeight:'600', fontSize:14}}>Invite and Earn </Text></>}
        subTitle={ <>
          <Text style={styles.font400Size11}>Invite</Text>
          <Text style={styles.font600Size11}>3</Text>
          <Text style={styles.font400Size11}> friends and earn upto </Text>
          <Text style={styles.font600Size11}>$20 in Matic</Text>
        </>}
       LeftIcon={<Fi_gift width={32} height={32}/>} customHeight={52} RightArrow={<ChevronRight width={20} height={20}/>} extraPadding={10} />
            </View>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container:{flex: 1, alignItems:'center', paddingTop:26},
  font400Size14:{
    fontFamily: 'Lato',fontSize:14,
  },
  font600Size14:{
    fontFamily: 'Lato-Bold',fontSize:14,
  },
  font600Size11:{
    fontFamily: 'Lato-Bold',fontSize:11,
  },
  font400Size11:{
    fontFamily: 'Lato',fontSize:11,
  },
  tranding_cards_container:{marginTop:16, marginHorizontal:41,height:200},
  row_flex:{flexDirection:'row'},
  giftcard:{height:50, marginTop:50},
  custom_height:{height:50},
  custom_wallet_height:{height:155},
  primary_color:{color:'#117B34'},
});