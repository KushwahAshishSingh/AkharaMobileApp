/* eslint-disable no-extra-boolean-cast */
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Defs, LinearGradient, Rect, Stop, Svg} from 'react-native-svg';
import {Modal} from './Modal';
import Pill from '../common/Pill';
// import {useHome} from '../../zustand/app/useHome';
import {PrimaryButton} from '../buttons/PrimaryButton';
import {moderateScale} from '../../utils/helpers';
import RadioGroup, {RadioButton} from '../../components/common/RadioGroup';
const languageOption = [
  {
    id: '1',
    label: 'English',
    value: 'english',
  },
  {
    id: '2',
    label: 'Hindi',
    value: 'hindi',
  },
];

const FROM_COLOR = '#1E1E1E';
const TO_COLOR = '#6e6e6e';

interface PropsI {
  visible: boolean;
  filterData?: {};
  onClose: () => void;
  fillterCallback: (data: any) => void;
  loading: boolean;
}
const FilterModal = ({visible, onClose, fillterCallback, loading}: PropsI) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [modalFilter, setModalFilter] = useState(false);
  const [selectedLanguage, setSelectedlanguage] = useState();
  const [courseCategoryData, setcourseCategoryData] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  // const {courseCategory} = useHome();

  function onPressRadioButton(radioButtonsArray) {
    const selectedLang = radioButtonsArray.filter(val => val.selected);
    console.log(selectedLang, 'this is selected +======');
    // setSelectedlanguage()
  }

  // useEffect(() => {
  //   let courseCategoryModified = []; //useState();
  //   courseCategory?.map((val, i) => {
  //     if (val.parent === undefined) {
  //       return (courseCategoryModified = [
  //         ...courseCategoryModified,
  //         {id: val._id, categoryName: val.title},
  //       ]);
  //     } else {
  //       courseCategoryModified.map((parentData, index) => {
  //         if (val.parent === parentData.id) {
  //           courseCategoryModified[index] = {
  //             ...courseCategoryModified[index],
  //             subCategory: courseCategoryModified[index]?.subCategory
  //               ? [...courseCategoryModified[index]?.subCategory, ...[val]]
  //               : [val],
  //           };
  //         }
  //       });
  //     }
  //   });
  //   setcourseCategoryData(courseCategoryModified);
  // }, [courseCategory]);

  // console.log(courseCategoryData[0]?.subCategory, 'this is course category');

  const applyFilter = () => {
    console.log(
      !!selectedSubCategory,
      selectedCategory,
      selectedSubCategory?.title,
      'asdfas dfasdfsaf',
    );
    fillterCallback({
      byTitle: !!selectedSubCategory
        ? selectedSubCategory?.title || selectedCategory?.categoryName
        : selectedCategory?.categoryName,
      byLanguage: !!selectedLanguage ? selectedLanguage[0]?.value : undefined,
    });
  };

  const clearFilter = () => {
    setSelectedCategory('');
    setSelectedSubCategory('');
    fillterCallback();
  };
  return (
    <Modal
      visible={visible}
      onRequestClose={() => {
        onClose();
      }}>
      {loading ? (
        <View
          style={{
            // marginTop: 40,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="small" color="#FA693D" />
        </View>
      ) : (
        <ScrollView>
          <View
            style={
              Platform.OS === 'ios'
                ? [styles.mt_15, styles.modal_container_ios]
                : [styles.mt_15, styles.modal_container]
            }>
            <Text style={styles.topic_text}>Topics</Text>

            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {/* {courseCategoryData.map(val => {
                return (
                  <TouchableOpacity
                    style={{marginRight: 10, marginTop: 10}}
                    onPress={() => {
                      setSelectedCategory(val);
                      setSelectedSubCategory('');
                      // fillterCallback({byTitle: val?.categoryName});
                    }}>
                    <Pill
                      text={val.categoryName}
                      customStyle={true}
                      active={
                        selectedCategory.id
                          ? val.id === selectedCategory.id
                          : false
                      }
                    />
                  </TouchableOpacity>
                );
              })} */}
            </View>

            {selectedCategory.id && (
              <>
                <Text style={[styles.mt_15, styles.topic_text]}>
                  Sub Topics
                </Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                  {selectedCategory.subCategory.map(val => {
                    return (
                      <TouchableOpacity
                        style={{marginRight: 10, marginTop: 10}}
                        onPress={() => {
                          setSelectedSubCategory(val);
                          // fillterCallback({byTitle: val?.title});
                        }}>
                        <Pill
                          text={val.title}
                          customStyle={true}
                          active={
                            selectedSubCategory
                              ? val._id === selectedSubCategory._id
                              : false
                          }
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </>
            )}

            <View style={{marginTop: 20}}>
              <Text style={[styles.topic_text]}>Languages</Text>
              <View>
                {languageOption?.map((val, index) => {
                  return (
                    <RadioButton
                      {...val}
                      color="#FA693D"
                      selected={
                        !!selectedLanguage && selectedLanguage[0]?.id === val.id
                      }
                      key={val.id}
                      onPress={(id: string) => {
                        const selectedLang = languageOption.filter(
                          val => val.id === id,
                        );
                        setSelectedlanguage(selectedLang);
                        console.log(id, 'this is isdddd');
                        // alert('hiiii');
                        // handlePress(id);
                        // if (button.onPress && typeof button.onPress === 'function') {
                        //   button.onPress(id);
                        // }
                      }}
                    />
                  );
                })}
              </View>
            </View>
          </View>
        </ScrollView>
      )}
      <View style={{width: '100%'}}>
        <Svg height={1} width={'100%'}>
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <Stop offset="0%" stopColor={FROM_COLOR} />
              <Stop offset="50%" stopColor={TO_COLOR} />
              <Stop offset="50%" stopColor={TO_COLOR} />
              <Stop offset="100%" stopColor={FROM_COLOR} />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#grad)" />
        </Svg>
      </View>

      <View style={styles.bottom_action}>
        <TouchableOpacity
          onPress={() => {
            onClose(), clearFilter();
          }}>
          <Text style={[styles.text_white, {fontFamily: 'Lato'}]}>
            Clear All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: '40%'}} onPress={onClose}>
          <PrimaryButton
            title={'Apply'}
            customFont={14}
            onPress={() => {
              onClose(), applyFilter();
            }}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  recent_searches_text: {
    fontSize: moderateScale(14),
    fontFamily: 'Lato',
    //fontWeight: '500',
    color: '#fff',
    marginVertical: 10,
  },
  mt_15: {
    marginTop: 15,
  },
  topic_text: {
    fontSize: moderateScale(16),
    fontFamily: 'Lato',
    color: '#fff',
  },
  modal_container: {
    padding: 10,
    marginTop: 20,
    marginBottom: 50,
  },
  modal_container_ios: {
    padding: 10,
    marginTop: 50,
    marginBottom: 50,
  },
  text_white: {
    color: 'white',
    fontFamily: 'Lato',
  },
  bottom_action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 15,
  },
});
