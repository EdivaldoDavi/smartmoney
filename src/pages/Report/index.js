import React from 'react'
import {  View, Picker, StyleSheet } from 'react-native'
//import {Picker} from '@react-native-community/picker'
//import Picker from 'react-native-picker'

import EntryList from '../../components/EntryList'
import EntrySummary from '../../components/EntrySummary'
import BalanceLabel from '../../components/BalanceLabel'


const Report = () => {
  const currentBalance = 2065.35
  return (
    <View>
      <BalanceLabel currentBalance={currentBalance}/>
      <View>
        <Picker>
          <Picker.item label="Todas Categorias"></Picker.item>
        </Picker>
        <Picker>
          <Picker.item label="Últimos 7 dias"></Picker.item>
        </Picker>

      </View>
      <EntrySummary entriesGrouped={entriesGrouped}/>
      <EntryList entries={entries}/>
    </View>
  )
}

export default Report

const styles = StyleSheet.create({})
