// AddTaskScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import db from '../db';

const AddTaskScreen = () => {
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO tasks (task, completed) values (?, 0)',
        [taskText]
      );
    });
    setTaskText('');
  };

  return (
    <View>
      <TextInput
        placeholder="Digite a tarefa"
        value={taskText}
        onChangeText={setTaskText}
      />
      <Button title="Adicionar Tarefa" onPress={addTask} />
    </View>
  );
}

export default AddTaskScreen;
