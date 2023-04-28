import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import RadioForm from 'react-native-simple-radio-button'

export const Radiobuttons = () => {
    const [value, setValue] = useState(0)

    const items = [
        {label: 'Test 1', value: 0},
        {label: 'Test 2', value: 1},
        {label: 'Test 3', value: 2}
    ]

  return (
    <View style={styles.btncontainer}>
        <Text style={styles.testText}>This is a test</Text>
        <RadioForm radio_props={items} initial={value} onPress={(value) => setValue(value)} />
    </View>
  )
}


const styles = StyleSheet.create({
btncontainer: {

},
testText: {

}
})
