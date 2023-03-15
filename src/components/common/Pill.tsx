import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { moderateScale } from '../../utils/helpers';

interface PropsI {
    active?: boolean;
    text: string;
    custom_text?: any;
    customStyle: any;
}
const Pill = ({ active, text, custom_text, customStyle }) => {
    return (
        <View
            style={[
                {
                    borderRadius: 10,
                    borderWidth: 0.1,
                    borderColor: '#5E5E5E',
                    alignSelf: 'flex-start',
                    zIndex: 100,
                },
                active ? styles.active_pill : {},
            ]}>
            <View style={[styles.pill]}>
                <Text
                    style={
                        Platform.OS === 'ios'
                            ? [
                                styles.pill_text,
                                custom_text ? styles.custom_text_ios : {},
                            ]
                            : [styles.pill_text, custom_text ? styles.custom_text : {}]
                    }>
                    {text}
                </Text>

            </View>
        </View>

    );
};

export default Pill;

const styles = StyleSheet.create({
    custom_text: {
        paddingTop: 2,
        paddingBottom: 2,
        paddingHorizontal: 10,
        color: '#fff',
        fontSize: moderateScale(11),
        fontFamily: 'Lato',
        borderRadius: 10,
        backgroundColor: '#212426',
    },

    custom_text_ios: {
        paddingTop: 3,
        paddingBottom: 3,
        paddingHorizontal: 10,
        color: '#fff',
        fontSize: moderateScale(11),
        fontFamily: 'Lato',
        borderRadius: 10,
        backgroundColor: '#212426',
    },

    pill: {
        borderColor: '#5E5E5E',
    },
    pill_text: {
        paddingTop: 8,
        paddingBottom: 10,
        paddingHorizontal: 15,
        color: '#fff',
        fontSize: moderateScale(12),
        fontFamily: 'Lato',
        borderRadius: 10,
        backgroundColor: '#212426',
    },

    active_pill: {
        borderWidth: 1,
        borderColor: '#F47650',
        borderRadius: 10,
    },
});
