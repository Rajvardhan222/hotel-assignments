import pg from 'pg'
const { Pool } = pg
 
const pool = new Pool()
 
const db = await pool.connect()

export default db

