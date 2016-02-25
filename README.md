# geekweek-postgresql
 
Start the PostgreSQL service:
sudo service postgresql start

Connect to the service:
sudo sudo -u postgres psql

Create a PostgreSQL database:
postgres=# CREATE DATABASE "geekweek";

verify what directory you are in:
\!

Run the createdb.sql script:
psql -f createdb.sql

You should see a bunch of insert statements fly by

Run the task1 sql script:
psql -f task1.sql

You should see 77 rows of data - type q to exit the results screen