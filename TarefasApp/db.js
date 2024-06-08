// db.js
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('todo.db');

export default db;
