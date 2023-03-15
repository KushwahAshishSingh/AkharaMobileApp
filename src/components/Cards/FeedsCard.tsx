/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { moderateScale } from '../../utils/helpers';
import ThreeDots from '../../../assets/icons/ThreeDots';
import { windowWidth } from '../../utils/Dimension';
import { FeedsSubCard } from './FeedsSubCard';

interface PropsI {
  image: string;
  name: string;
  message: string;
  likeCount: number;
  commentCount: number;
  mediaLength: number;
  media: string;
}
export const FeedsCard = ({
  image,
  name,
  message,
  likeCount,
  commentCount,
  mediaLength,
  media
}: PropsI) => {
  const [analytics, setAnalytics] = useState(false);
  const fullName = name ? name : ''
  return (
    <View>
      {/* header of card */}
      <View style={{zIndex:1}}>
        {/* name and image*/}
        <View style={styles.row_flex}>
          <View style={styles.name_header}>
            <View style={styles.image}>
              <Image
                source={{
                  uri: image
                }}
                style={styles.card_image}
                resizeMode={'cover'}
                resizeMethod="auto"
              />
            </View>
            <View style={styles.center_justify}>
              <Text numberOfLines={1} style={styles.name}>
                {fullName.length < 35
                  ? `${fullName}`
                  : `${fullName.substring(0, 32)}...`}
              </Text>
            </View>
          </View>
          <View style={styles.dots_container}>
            <TouchableOpacity onPress={() => setAnalytics(!analytics)} style={styles.dots_subcontianer}>
              <ThreeDots />
            </TouchableOpacity>
            {analytics &&
              <View
                style={styles.dots_sub_view}>
                <TouchableOpacity
                  onPress={() => {
                    setAnalytics(false)
                  }}>
                  <Text style={styles.custom_color} numberOfLines={1}>
                    View
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setAnalytics(false)
                  }}>
                  <Text style={styles.custom_color} numberOfLines={1}>
                    Edit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setAnalytics(false)
                  }}>
                  <Text style={styles.custom_color} numberOfLines={1}>
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            }
          </View>
        </View>
      </View>

      {/* msg section */}
      <View style={{ zIndex: 0 }}>
        <FeedsSubCard message={message} media={media} likeCount={likeCount} commentCount={commentCount} />

      </View>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderColor: '#F5F5F5',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 342,
  },
  row_flex: {
    flexDirection: 'row'
  },
  card_image: { width: '100%', height: '100%', },
  center_justify: { justifyContent: 'center' },
  image: { width: 50, height: 50, borderRadius: 100, borderWidth: 1, backgroundColor: 'orange', overflow: 'hidden' },
  name_header: { width: '70%', padding: 10, flexDirection: 'row', },
  name: { fontSize: 18, fontWeight: '500', paddingHorizontal: 5 },
  dots_container: { width: '30%', },
  dots_subcontianer: { alignSelf: 'flex-end', right: 10, top: 20 },
  dots_sub_view: {
    width: '100%',
    height: 141,
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderColor: '#414040',
    borderWidth: 2.5,
    zIndex: 2,
    marginTop: 50,
    flex: 1,
    position: 'absolute',
    right: 25,
    top: 10,
    opacity: 1,
    backgroundColor: '#212426',
  },

  custom_color: {
    flexWrap: 'wrap',
    color: '#fff',
    fontSize: 16,
     fontFamily: 'Lato',
    paddingVertical: 3,
  },
});
