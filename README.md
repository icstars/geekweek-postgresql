# geekweek-postgresql
 
Start the PostgreSQL service
sudo service postgresql start

Connect to the service
sudo sudo -u postgres psql

Create a PostgreSQL database
Make sure you have logged into the PostgreSQL terminal and then you can just run:
postgres=# CREATE DATABASE "geekweek";

verify what directory you are in:
\!

Run the createdb.sql script:
psql -f createdb.sql

You should see a bunch of insert statements fly by