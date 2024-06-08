// db.js
// db.js
import * as SQLite from 'expo-sqlite';

const DATABASE_NAME = "task.sqlite";
const SQL_CREATE_ENTRIES = `
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        task TEXT NOT NULL,
        completed INT
    );
`;

let _db = null;

export default function openDB() {
    if (!_db) {
        _db = SQLite.openDatabase(DATABASE_NAME);
        // primeira vez que iremos abrir a conexão,
        // tentaremos criar nossas tabelas
        _db.transaction(tx => {
            tx.executeSql(SQL_CREATE_ENTRIES, [], () => {}, (_, error) => {
                console.error('Erro ao criar a tabela: ', error);
            });
        });
    }
    return _db;
}


