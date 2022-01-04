import React, { useEffect, useState } from "react";
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';

import EntryListItem from './EntryListItem';

import { getEntries } from "../../services/Entries";
const EntryList = ({navigation}) => {
  // eslint-disable-next-line no-undef
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries();
      // eslint-disable-next-line no-undef
      setEntries(data);
    }
    loadEntries();
    console.log("entryList ::: useEfect");
  }, []);
  return (
    <View>
      <Text style={styles.title}>Últimos Lançamentos</Text>
      <FlatList
        data={entries}
        renderItem={({item}) => (
          <View>
            <Text style={styles.entry}>
              - {item.description} - ${item.amount}
            </Text>
            <Button
              title={item.id}
              onPress={() => {
                navigation.navigate('NewEntry', {entry: item});
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default EntryList;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10
  }
});
