# 1. Explain the difference between `RDBMS` and `SQL`.

An **RDBMS (Relational Database Management System)** is essentially a _tool (some mechanism/software)_ used to manage digital database (i.e. manipulate the data contained within in some manner). **SQL (Structured Query Language)** is the _'language' (system of interaction)_ used to tell a database management system/software (such as an RDBMS) what to do.

# 2. Why do tables need a `primary key`?

The **primary key** serves as the primary, unique identifier for an individual _row_ (entry) in a database. The uniqueness provided by primary keys ensure that there will always be a way to tell any two distinct rows in a table apart from one another (this becomes even more important when dealing with foreign keys).

# 3. What is the name given to a table column that references the primary key on another table.

A **foreign key** is used to indicate a reference to a primary key on some related table.

# 4. What do we need in order to have a _many to many_ relationship between two tables.

**Many to many relationships** between two tables mean that rows in Table A references multiple rows in Table B _and_ (with stress on the word **"AND"**) vice-versa.

In order to reduce anomalies, database tables should be _normalized_, and when going onto the _third normal form (3NF)_ of a database with many to many relationships, it would be ideal to add a third _'reference table'_ for every pair of tables with many to many relationships.
