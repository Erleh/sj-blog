CREATE TABLE IF NOT EXISTS users (
    id              INTEGER AUTO_INCREMENT      PRIMARY KEY,
    username        VARCHAR(30)                 NOT NULL UNIQUE,
    email           VARCHAR(50)                 NOT NULL UNIQUE,
    isActive        BIT                         ,
    creationTime    DATETIME                    DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS roles (
    id      INTEGER AUTO_INCREMENT      PRIMARY KEY,
    name    VARCHAR(20)                 NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS permissions (
    id      INTEGER AUTO_INCREMENT      PRIMARY KEY,
    name    VARCHAR(20)                 NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS posts (
    id                      INTEGER AUTO_INCREMENT      PRIMARY KEY,
    user_id                 INTEGER                     NOT NULL,
    title                   VARCHAR(50)                 NOT NULL,
    content                 TEXT                        NOT NULL,
    author_username         VARCHAR(30)                 NOT NULL,
    creation_date           DATETIME                    DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS assigned_roles (
    user_id         INTEGER         NOT NULL,
    roles_id        INTEGER         NOT NULL,
    FOREIGN KEY (user_id)   REFERENCES users(id),
    FOREIGN KEY (roles_id)  REFERENCES roles(id)
);

CREATE TABLE IF NOT EXISTS assigned_permissions (
    roles_id            INTEGER     NOT NULL,
    permissions_id      INTEGER     NOT NULL,
    FOREIGN KEY (roles_id)          REFERENCES roles(id),
    FOREIGN KEY (permissions_id)    REFERENCES permissions(id)
);

CREATE TABLE IF NOT EXISTS refresh_tokens (
    id          INTEGER AUTO_INCREMENT      PRIMARY KEY,
    user_id     INTEGER                     NOT NULL,
    token       TEXT                        NOT NULL,
    iss         VARCHAR(20)                 NOT NULL,
    isValid     BIT                         NOT NULL,
    created_at  DATETIME                    DEFAULT CURRENT_TIMESTAMP,
    updated_at  DATETIME                    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id)   REFERENCES users(id)
);