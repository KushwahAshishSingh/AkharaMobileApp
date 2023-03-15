import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { windowWidth } from '../../utils/Dimension';

let dummyData = [
    {
        "images": [
            "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
            "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
            "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
            "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
        ],
        "message": "We want to build a subscription-based platform, where customers will need to subscribe to one of our plans to access our content some of our plans include Weekly, monthly plans.",
    },
    {
        "images": [
            "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
            "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
            "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
        ],
        "message": "We want to build a subscription-based platform, where customers will need to subscribe to one of our plans to access our content some of our plans include Weekly, monthly plans.",
    },
    {
        "images": [
            "https://s2.coinmarketcap.com/static/img/coins/64x64/1518.png",
            "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
        ],
        "message": "We want to build a subscription-based platform, where customers will need to subscribe to one of our plans to access our content some of our plans include Weekly, monthly plans.",
    },
    {
        "images": [
            "https://s2.coinmarketcap.com/static/img/coins/64x64/1697.png",
        ],
        "message": "We want to build a subscription-based platform, where customers will need to subscribe to one of our plans to access our content some of our plans include Weekly, monthly plans.",
    },
    {
        "images": [
            "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
        ],
        "message": "We want to build a subscription-based platform, where customers will need to subscribe to one of our plans to access our content some of our plans include Weekly, monthly plans.",
    },
    {
        "images": [
            "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
            "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
            "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
            "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
        ],
        "message": "We want to build a subscription-based platform, where customers will need to subscribe to one of our plans to access our content some of our plans include Weekly, monthly plans.",
    },
    {
        "images": [
            "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
            "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
            "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
        ],
        "message": "We want to build a subscription-based platform, where customers will need to subscribe to one of our plans to access our content some of our plans include Weekly, monthly plans.",
    },
    {
        "images": [
            "https://s2.coinmarketcap.com/static/img/coins/64x64/1518.png",
            "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
        ],
        "message": "We want to build a subscription-based platform, where customers will need to subscribe to one of our plans to access our content some of our plans include Weekly, monthly plans.",
    },
    {
        "images": [
            "https://s2.coinmarketcap.com/static/img/coins/64x64/1697.png",
        ],
        "message": "We want to build a subscription-based platform, where customers will need to subscribe to one of our plans to access our content some of our plans include Weekly, monthly plans.",
    },
    {
        "images": [
            "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
        ],
        "message": "We want to build a subscription-based platform, where customers will need to subscribe to one of our plans to access our content some of our plans include Weekly, monthly plans.",
    },
]
const dummyScroll = [
    { id: 0, name: "All" },
    { id: 1, name: "Akhara" },
    { id: 3, name: "BodyBuilding" },
    { id: 4, name: "yoga" },
    { id: 5, name: "powerlifting" },
    { id: 6, name: "basics" },
  ];

export default function MediaImages() {
    const [bordColor, setBordColor]= React.useState('All');
    return (
        <View style={styles.container}>

        <ScrollView style={{ height:'8%'}}>
        <FlatList
                data={dummyScroll}
                horizontal
                showsHorizontalScrollIndicator={false} 
                renderItem={({ item }) => {
                    return (
                            <TouchableOpacity onPress={()=> setBordColor(item.name)} style={{paddingHorizontal:10, paddingVertical:10, borderColor: bordColor == item.name ? 'blue' : '#EFEFEF', borderWidth:1, borderRadius:5,margin:5 }}>
                                <Text style={{fontSize:14, fontWeight:'500'}}>{item.name}</Text>
                            </TouchableOpacity>
                    )
                }}/>
        </ScrollView>
        <View style={{height:'92%',}}>
            <FlatList
                data={dummyData}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={{ top: 10, borderRadius: 1, borderWidth: 0.2, borderColor: '#EFEFEF', }}>
                            <TouchableOpacity style={{ width: windowWidth / 2, height: 150, marginVertical: 5, marginHorizontal: 1 }}>
                                {item.images.length > 1 && 
                                <View style={{position:'absolute', width:20, height:20, backgroundColor:'red', alignSelf:'flex-end', right:10, top:5}}>

                                </View>}
                                <Image
                                    source={{
                                        uri: item.images[0]
                                    }}
                                    style={styles.card_image}
                                    resizeMode={'contain'}
                                    resizeMethod="auto"
                                />
                            </TouchableOpacity>
                        </View>
                    )
                }
                } />
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    card_image: { width: '100%', height: '100%', },
});