import React, { useState } from 'react';
import { Alert, Modal, Pressable, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Button from './Button';
import styles from '../styles/styles';

export default function EditModal({ visible, onClose, person, onSave }) {
    const [modalVisible, setModalVisible] = useState(false);

}


