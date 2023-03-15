import { View, Text, TouchableOpacity, StyleSheet ,FlatList} from 'react-native';
import React from 'react';
import { windowWidth } from '../../utils/Dimension';
import { FeedsCard } from '../../components/Cards/FeedsCard';

let dummyData = 
       [
        {
          "image":"https://s2.coinmarketcap.com/static/img/coins/64x64/825.png", 
          "name":"dummy name 1",
          "message": "We want to build a subscription-based platform, where customers will need to subscribe to one of our plans to access our content some of our plans include Weekly, monthly plans.",
          "likeCount":4,
          "commentCount":10,
          "mediaLength":2,
          "media": "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
        },
        {
          "image":"https://s2.coinmarketcap.com/static/img/coins/64x64/825.png", 
          "name":"dummy name 2",
          "message": "We want to build a subscription-based platform, where customers will need to subscribe to one of our plans to access our content some of our plans include Weekly, monthly plans.",
          "likeCount":2,
          "commentCount":9,
          "mediaLength":1,
          "media": "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
        },
        {
          "image":"https://s2.coinmarketcap.com/static/img/coins/64x64/825.png", 
          "name":"dummy name 3",
          "message": "We want to build a subscription-based platform, where customers will need to subscribe to one of our plans to access our content some of our plans include Weekly, monthly plans.",
          "likeCount":0,
          "commentCount":10,
          "mediaLength":1,
          "media": "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
        },
        {
          "image":"https://s2.coinmarketcap.com/static/img/coins/64x64/825.png", 
          "name":"dummy name 4",
          "message": "We want to build a subscription-based platform, where customers will need to subscribe to one of our plans to access our content some of our plans include Weekly, monthly plans.",
          "likeCount":4,
          "commentCount":10,
          "mediaLength":2,
          "media": "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
        },
        {
          "image":"https://s2.coinmarketcap.com/static/img/coins/64x64/825.png", 
          "name":"dummy name 5",
          'message': 'We want to build a subscription-based platform, where customers will need to subscribe to one of our plans to access our content some of our plans include Weekly, monthly plans.',
          "likeCount":4,
          "commentCount":10,
          "mediaLength":2,
          "media": "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
        }
      ]
const Feeds = () => {
  return (
    <View style={styles.container}>
      <View style={styles.post_container}>
        <TouchableOpacity style={styles.post_sub_container}>
          <Text style={styles.center_align}>Post</Text>
        </TouchableOpacity>
      </View>
      <FlatList
              data={dummyData}
              renderItem={({ item }) => {
                return (
                  <>
                  <FeedsCard
                    image={item.image}
                    name={item.name}
                    message={item.message}
                    likeCount={item.likeCount}
                    commentCount={item.commentCount}
                    mediaLength={item.mediaLength}
                    media={item.media}
                />
                </>
                )
              }
            }/>
    </View>
  )
}
export default Feeds

export const styles = StyleSheet.create({
  container:{ flex: 1 },
  post_container:{ position: 'absolute', bottom: 5, right: 10,zIndex:1 },
  post_sub_container:{ width: 60, height: 60, borderRadius: 100, borderWidth: 1, backgroundColor: '#EFEFEF', alignSelf: 'flex-end', justifyContent: 'center', borderColor:'#C9C9C9' },

  center_align: { alignSelf: 'center' }
  
});