import React from 'react';
import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import Container from '../../components/common/Container';
import {SETTINGS} from '../../constants/routeNames';
import styles from './styles';

const SideMenu = ({navigation}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'OK',
        onPress: () => {},
      },
    ]);
  };
  const menuItems = [
    {
      icon: <Text>T</Text>,
      name: 'Settings',
      onPress: () => navigation.navigate(SETTINGS),
    },
    {icon: <Text>T</Text>, name: 'Logout', onPress: () => handleLogout()},
  ];
  return (
    <View>
      <Container>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />
        <View style={{paddingHorizontal: 70}}>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity key={name} style={styles.item} onPress={onPress}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </View>
  );
};

export default SideMenu;
