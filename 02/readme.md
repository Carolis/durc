# CRUD basic example 02 using React, Node and MySQL

First of all, im using Ubuntu WSL at my w10 so I usually just install MySQL following these simple steps

`sudo apt install mysql-server`
And to confirm installation run `mysql --version`

Preparing your basic movie reviews DB structure

```
sudo mysql

CREATE DATABASE database_name;

create table movie_reviews (id int NOT NULL AUTO_INCREMENT, movieName varchar(255) NOT NULL, movieReview varchar(500) NOT NULL, PRIMARY KEY(id));
```

Also, [this MySQL cheatsheet](https://gist.github.com/hofmannsven/9164408) could come in handy

