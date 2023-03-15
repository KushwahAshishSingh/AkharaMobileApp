import { View, Text, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { TextInputButton } from '../components/common/TextInputButton';
import FilterModal from '../components/modal/FilterModal';
import FilterIcon from '../../assets/icons/FilterIcon';

export default function Members() {

  const [search, setSearch] = React.useState('');
  const [filterData, setFilterData] = React.useState('');
const [courseData, setcourseData] = React.useState([]);
const [loader, setLoader] = React.useState(false);
  const [modalFilter, setModalFilter] = React.useState(false);

  const funcsetModalFilter = useCallback(() => {
    setModalFilter(!modalFilter);
  }, [modalFilter]);
  return (
    <View>
      {/* search bar */}
      <View style={{ alignSelf: 'center' }}>
        <TextInputButton
          placeholderText="Search Courses"
          onChangeText={text => searchFilterFunction(text)}
          value={search}
          searchTag={true}
          endIcon={
            <TouchableOpacity onPress={() => funcsetModalFilter()}>
              <FilterIcon />
            </TouchableOpacity>
          }
        />
      </View>
      {/* Member list */}
      <View>

      </View>

      {/* <FilterModal
        visible={modalFilter}
        onClose={() => setModalFilter(!modalFilter)}
        filterData={filterData}
        fillterCallback={fillterCallback}
        // loading={loader}
      /> */}
    </View>
  )
}