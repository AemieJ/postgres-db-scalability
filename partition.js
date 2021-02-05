const express = require("express");
const {Pool} = require("pg");
const fs = require("fs");
const { exit } = require("process");

const app = express();

const pool = new Pool({
    "host": "aemiej-mac.local",
    "port": 5432,
    "user":"aemiej",
    "password" : "25031219",
    "database" : "aemiej-db",
    "max": 10
});

let port = 7000 | process.env.PORT;

let createSequenceSQL = fs.readFileSync('./psql/partition/sequence.sql').toString();
let createTableSQL = fs.readFileSync('./psql/partition/create.sql').toString();
let insertTableSQL = fs.readFileSync('./psql/partition/insert.sql').toString();
let createIndexSQL = fs.readFileSync('./psql/partition/index.sql').toString();
let indexAnalysisSQL = fs.readFileSync('./psql/partition/query_index.sql').toString();
let withoutIndexAnalysisSQL = fs.readFileSync('./psql/partition/query_without_index.sql').toString();
let deleteSQL = fs.readFileSync('./psql/partition/delete.sql').toString();

app.get("/", async (req, res) => {
    const sequenceRes = await pool.query(createSequenceSQL);
    const createRes = await pool.query(createTableSQL);
    const insertRes = await pool.query(insertTableSQL);

    res.json({
        createMessage: createRes,
        sequenceMessage: sequenceRes,
        insertMessage: insertRes
    });
    console.log('\x1b[35m%s\x1b[0m', "Successful setup of database partition");
});

app.get("/app/v1/analyze-partition", async (req, res) => {
    const createIndexRes = await pool.query(createIndexSQL);

    // explain analyse with index scanning
    const analyzeIndexing = await pool.query(indexAnalysisSQL);
    console.log('\x1b[35m%s\x1b[0m', 'Reading data with partiton & indexing');
    console.log(analyzeIndexing);

    // explain analyse without index scanning
    const analyseWithoutIndexing = await pool.query(withoutIndexAnalysisSQL);
    console.log('\x1b[35m%s\x1b[0m', 'Reading data with partiton & without indexing');
    console.log(analyseWithoutIndexing);

    res.json({
        createIndex: createIndexRes,
        indexing: analyzeIndexing,
        withoutIndexing: analyseWithoutIndexing
    });
});

app.get("/app/v1/delete", async (req, res) => {
    const deleteRes = await pool.query(deleteSQL);
    res.json({
        deleteMessage: deleteRes
    });
    console.log('\x1b[35m%s\x1b[0m', "Successful deletion");
    exit(0);
});

app.listen(port, () => {
    console.log('\x1b[36m%s\x1b[0m', `Backend listening on port ${port}`);
});