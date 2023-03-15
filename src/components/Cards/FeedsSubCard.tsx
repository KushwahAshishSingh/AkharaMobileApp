// eslint-disable-next-line prettier/prettier
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { moderateScale } from '../../utils/helpers';
import { windowWidth } from '../../utils/Dimension';

interface PropsI {
  message: string;
  media: string;
  likeCount: number;
  commentCount: number;
}
export const FeedsSubCard = ({
  message,
  media,
  likeCount,
  commentCount,
}: PropsI) => {
  return (
    <View>
      <View>
        <Text style={styles.description}>
          {message}
        </Text>
      </View>
      {/* Image section */}
      <View style={styles.feed_media}>
        <View style={styles.feed_media_container}>
          <Image
            source={{
              uri: media
            }}
            style={styles.card_image}
            resizeMode="contain"
            resizeMethod="auto"
          />
        </View>
      </View>
      {/* footer section */}
      <View style={styles.footer_container}>
        <TouchableOpacity style={styles.like_container}>
          <Text>{likeCount} Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.comment_container}>
          <Text>{commentCount} Comments</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.extra_line} />
    </View>
  );
};
const styles = StyleSheet.create({
  card_image: { width: '100%', height: '100%', overflow: 'hidden' },
  image: { width: 50, height: 50, borderRadius: 100, borderWidth: 1, backgroundColor: 'orange', overflow: 'hidden' },
  feed_media: { alignItems: 'center', paddingVertical: 10 },
  feed_media_container: { width: windowWidth, overflow: 'hidden', height: (windowWidth*9)/16, backgroundColor: '#EFEFEF' },
  description: { paddingHorizontal: 15, fontSize: 14, fontWeight: '500' },
  footer_container: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  like_container: { width: (windowWidth / 2) - 3, alignItems: 'center', justifyContent: 'center', paddingVertical: 10, borderColor: '#EFEFEF', borderWidth: 1 },
  comment_container: { width: (windowWidth / 2) - 3, alignItems: 'center', justifyContent: 'center', paddingVertical: 10, borderColor: '#EFEFEF', borderWidth: 1 },
  extra_line: { width: windowWidth, height: 5, marginVertical: 10, backgroundColor: '#EFEFEF' }
});
