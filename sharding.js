const express = require("express");
const {Pool} = require("pg");
const fs = require("fs");
const { exit } = require("process");

const app = express();

const pool1 = new Pool({
    "host": "aemiej-mac.local",
    "port": 5432,
    "user":"aemiej",
    "password" : "25031219",
    "database" : "aemiej-db",
    "max": 4
});

const pool2 = new Pool({
    "host": "aemiej-mac.local",
    "port": 5432,
    "user":"aemiej",
    "password" : "25031219",
    "database" : "shard1",
    "max": 4
});

const pool3 = new Pool({
    "host": "aemiej-mac.local",
    "port": 5432,
    "user":"aemiej",
    "password" : "25031219",
    "database" : "shard2",
    "max": 4
});

let port = 7500 | process.env.PORT;

let createSequenceSQL = fs.readFileSync('./psql/sharding/sequence.sql').toString();
let createTableSQL = fs.readFileSync('./psql/sharding/create-primary.sql').toString();
let createForeignWrapperSQL = fs.readFileSync('./psql/sharding/foreign-wrapper.sql').toString();
let shard1TableSQL = fs.readFileSync('./psql/sharding/shard1.sql').toString();
let shard2TableSQL = fs.readFileSync('./psql/sharding/shard2.sql').toString();
let createShard1SQL = fs.readFileSync('./psql/sharding/create-shard1.sql').toString();
let createShard2SQL = fs.readFileSync('./psql/sharding/create-shard2.sql').toString();

let insertSQL = fs.readFileSync('./psql/sharding/insert.sql').toString();
let indexSQL = fs.readFileSync('./psql/sharding/index.sql').toString();
let queryWithIndexShardSQL = fs.readFileSync('./psql/sharding/query_index_shard.sql').toString();
let queryWithIndexSQL = fs.readFileSync('./psql/sharding/query_index.sql').toString();
let queryWithoutIndexShardSQL = fs.readFileSync('./psql/sharding/query_without_index_shard.sql').toString();
let queryWithoutIndexSQL = fs.readFileSync('./psql/sharding/query_without_index.sql').toString();

let deletePrimarySQL = fs.readFileSync('./psql/sharding/delete-primary.sql').toString();
let deleteShard1SQL = fs.readFileSync('./psql/sharding/delete-shard1.sql').toString();
let deleteShard2SQL = fs.readFileSync('./psql/sharding/delete-shard2.sql').toString();

app.get("/", async (req, res) => {
    const sequenceRes = await pool1.query(createSequenceSQL);
    const createTableRes = await pool1.query(createTableSQL);
    const foreignWrapperRes = await pool1.query(createForeignWrapperSQL);

    const shard1Res = await pool1.query(createShard1SQL);
    const shard2Res = await pool1.query(createShard2SQL);

    const createShard1Res = await pool2.query(shard1TableSQL);
    const createShard2Res = await pool3.query(shard2TableSQL);

    res.json({
        sequenceRes,
        createTableRes,
        foreignWrapperRes,
        createShard1Res,
        createShard2Res,
        shard1Res,
        shard2Res
    });
    console.log('\x1b[35m%s\x1b[0m', "Successful setup of database sharding");

});

app.get("/app/v1/analyze-sharding", async (req, res) => {
    const insertRes = await pool1.query(insertSQL);
    const indexRes = await pool1.query(indexSQL);

    const queryIndexShardRes = await pool1.query(queryWithIndexShardSQL);
    console.log('\x1b[35m%s\x1b[0m', "Query through sharding with index");
    console.log(queryIndexShardRes);
    const queryIndexRes = await pool2.query(queryWithIndexSQL);
    console.log('\x1b[35m%s\x1b[0m', "Query through particular shard with index");
    console.log(queryIndexRes);

    const queryWithoutIndexShardRes = await pool1.query(queryWithoutIndexShardSQL);
    console.log('\x1b[35m%s\x1b[0m', "Query through sharding without index");
    console.log(queryWithoutIndexShardRes);
    const queryWithoutIndexRes = await pool3.query(queryWithoutIndexSQL);
    console.log('\x1b[35m%s\x1b[0m', "Query through particular shard without index");
    console.log(queryWithoutIndexRes);

    res.json({
        insertRes,
        indexRes,
        queryIndexShardRes,
        queryIndexRes,
        queryWithoutIndexShardRes,
        queryWithoutIndexRes
    });

});

app.get("/app/v1/delete", async (req, res) => {
    const deletePrimaryRes = await pool1.query(deletePrimarySQL);
    const deleteShard1Res = await pool2.query(deleteShard1SQL);
    const deleteShard2Res = await pool3.query(deleteShard2SQL);

    res.json({
        deletePrimaryRes,
        deleteShard1Res,
        deleteShard2Res
    });
    console.log('\x1b[35m%s\x1b[0m', "Successful deletion");
    exit(0);
});

app.listen(port, () => {
    console.log('\x1b[36m%s\x1b[0m', `Backend listening on port ${port}`);
});