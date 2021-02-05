# Database Scalability & different approaches using PostgreSQL

*Database scalability is the ability to scale out or scale up a database to allow it to hold increasing amounts of data without sacrificing performance.*

For relational databases, the typical approach is to **shard the database** and distribute it across multiple servers in a cluster. However, before sharding the database (which is a comparatively complex approach) there are methods with which you can scal database including indexing, partitioning, replication and sharding. 

I will be covering the in-depth of each in a separate blog. This repository deals with the implementation of each indexing, partitioning and sharding using postgres (and pgadmin4). 

```
$ npm install
```

## 1. Indexing 

```
$ npm run index
```

In the browser, locate to `localhost:9000`, within the terminal it will show the message **successfull setup** if the setup is successful. After this, you can analyze the power of indexing by querying the database using indexed param and non-indexed param. Locate to `localhost:9000/app/v1/analyze-indexing` for analysing and you'll receive the following output. 

### Data Read With Indexing
<img src="outputs/indexing/indexing.png" width="650" alt="with-index"/>

### Data Read Without Indexing
<img src="outputs/indexing/without-indexing.png" width="650" alt="without-index"/>

Later this, locate to `localhost:9000/app/v1/delete` for successful deletion of the entire setup of indexing with postgres.

## 2. Partition

```
$ npm run partition
```

In the browser, locate to `localhost:7000`, within the terminal it will show the message **successfull setup** if the setup is successful. After this, you can analyze the power of partition along with indexing by querying the database using indexed param and non-indexed param. Locate to `/app/v1/analyze-partition` for analysing and you'll receive the following output. 

### Data Read With Partition & Indexing
<img src="outputs/partition/partition_indexing.png" width="650" alt="with-index"/>

### Data Read With Partition & Without Indexing
<img src="outputs/partition/partition_without_indexing.png" width="650" alt="without-index"/>

Later this, locate to `localhost:7000/app/v1/delete` for successful deletion of the entire setup of partition with postgres.

## 2. Sharding

```
$ npm run sharding
```

In the browser, locate to `localhost:7500`, within the terminal it will show the message **successfull setup** if the setup is successful. After this, you can analyze the power of sharding (quite complex) along with indexing & partitions by querying the database using indexed param and non-indexed param. Locate to `/app/v1/analyze-sharding` for analysing and you'll receive the following output. 

### Data Read With Sharding (Partition & Indexing)
<img src="outputs/sharding/sharding_indexing.png" width="650" alt="with-index"/>

### Data Read With Sharding (Partition & Without Indexing)
<img src="outputs/sharding/sharding_without_indexing.png" width="650" alt="without-index"/>

Later this, locate to `localhost:7500/app/v1/delete` for successful deletion of the entire setup of sharding with postgres.