import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text
        style={{
          ...styles.btnText,
          color: 'black',
        }}>
        Calendar
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  btnText: {
    fontSize: 38,
    fontWeight: '600',
  },
});
