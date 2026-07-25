import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "recipydb",
  password: "",
  port: 5432,
});

export default pool;