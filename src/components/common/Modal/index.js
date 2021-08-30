import React from 'react';
import {Text, Modal, TouchableOpacity, ScrollView, View} from 'react-native';
import Icon from '../Icon';
import styles from './styles';

const AppModal = ({
  modalVisible,
  setModalVisible,
  title,
  modalBody,
  modalFooter,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <View style={styles.wrapper}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <View />
              <Text style={styles.title}>{title || 'Contacts'}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="close" type="ant" size={25} />
              </TouchableOpacity>
            </View>
            <View style={styles.footerSeparator} />
            <View style={styles.body}>{modalBody}</View>
            {!modalFooter && (
              <View>
                <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}>Terms of Service</Text>
                    </View>
                  </View>
                </>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default AppModal;
