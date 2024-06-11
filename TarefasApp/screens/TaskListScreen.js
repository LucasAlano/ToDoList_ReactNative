// TaskListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import openDB from "../db"
const db = openDB()


const TaskListScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT, completed INT)'
      );
      tx.executeSql('SELECT * FROM tasks', [], (_, { rows }) => {
        setTasks(rows._array);
      });
    });
  }, []);

  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text>{item.task}</Text>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default TaskListScreen;
