CREATE USER product_user WITH PASSWORD 'product_password' CREATEDB;
CREATE USER account_user WITH PASSWORD 'account_password' CREATEDB;
CREATE USER cart_user WITH PASSWORD 'cart_password' CREATEDB;
CREATE USER order_user WITH PASSWORD 'order_password' CREATEDB;

CREATE DATABASE products_db
    WITH 
    OWNER = product_user
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE DATABASE accounts_db
    WITH 
    OWNER = account_user
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE DATABASE carts_db
    WITH 
    OWNER = cart_user
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE DATABASE orders_db
    WITH 
    OWNER = order_user
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;