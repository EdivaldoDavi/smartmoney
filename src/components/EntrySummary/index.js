import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';
function EntrySummary({entriesGrouped}) {
    return (
        <View  style={styles.container}>
            <EntrySummaryChart />
            <EntrySummaryList entriesGrouped={entriesGrouped}/>
        </View>
    );

}

export default EntrySummary

const styles = StyleSheet.create({
    container: {
       //  flex: 1,
      },
})
