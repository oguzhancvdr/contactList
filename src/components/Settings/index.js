import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Container from '../../components/common/Container';
import styles from './styles';
import AppModal from '../common/Modal';
import Icon from '../common/Icon';

const SettingsCompenent = ({
  settingsOptions,
  setModalVisible,
  modalVisible,
  preferences,
}) => {
  const options = settingsOptions.map(({title, subTitle, onPress}, i) => (
    <View key={title + i}>
      <AppModal
        modalVisible={modalVisible}
        modalFooter={<></>}
        setModalVisible={setModalVisible}
        modalBody={
          <View>
            {preferences.map(({name, selected, onPress}, index) => (
              <View key={name + index}>
                <TouchableOpacity
                  style={styles.modalBodyContainer}
                  onPress={onPress}>
                  {selected && <Icon name="check" type="ant" size={17} />}
                  <Text
                    style={[
                      styles.settingsTitle,
                      {paddingLeft: selected ? 10 : 26.7},
                    ]}>
                    {name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        }
        title="Sort by"
      />
      <ScrollView style={styles.settingsContainer}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.itemContainer}>
            <Text style={styles.settingsTitle}>{title}</Text>
            {subTitle && (
              <Text style={styles.settingsSubTitle}>{subTitle}</Text>
            )}
          </View>
          <View style={styles.fakeView} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  ));

  return <Container>{options}</Container>;
};

export default SettingsCompenent;
