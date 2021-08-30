import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Container from '../../components/common/Container';
import styles from './styles';

const SettingsCompenent = ({settingsOptions}) => {
  const options = settingsOptions.map(({title, subTitle, onPress}, i) => (
    <ScrollView key={title + i} style={styles.settingsContainer}>
      <TouchableOpacity>
        <View style={styles.itemContainer}>
          <Text style={styles.settingsTitle}>{title}</Text>
          {subTitle && <Text style={styles.settingsSubTitle}>{subTitle}</Text>}
        </View>
        <View style={styles.fakeView} />
      </TouchableOpacity>
    </ScrollView>
  ));

  return <Container>{options}</Container>;
};

export default SettingsCompenent;
