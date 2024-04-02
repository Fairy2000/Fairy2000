import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function BookmarkScreen() {
  return (
    <View style={styles.container}>
      <Text>Bookmark Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
  },
});