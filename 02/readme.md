# CRUD basic example 02 using React, Node and MySQL

First of all, im using Ubuntu WSL at my w10 so I usually just install MySQL following these simple steps

`sudo apt install mysql-server`

To confirm installation run `mysql --version`

And finally `sudo /etc/init.d/mysql start` or `sudo service mysql start` to start the server

Preparing your basic movie reviews DB structure

```
sudo mysql

CREATE DATABASE database_name;

create table movie_reviews (id int NOT NULL AUTO_INCREMENT, movieName varchar(255) NOT NULL, movieReview varchar(500) NOT NULL, PRIMARY KEY(id));
```

Also, [this MySQL cheatsheet](https://gist.github.com/hofmannsven/9164408) could come in handy

To create a new user (like and admin so you dont need to use root)

```
USE mysql;
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost';
FLUSH PRIVILEGES;
exit;
```

If you get any auth errors like "ER_NOT_SUPPORTED_AUTH_MODE" maybe try to run this

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';` 