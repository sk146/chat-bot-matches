CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE polling(
 id  UUID DEFAULT uuid_generate_v4() PRIMARY KEY ,
 id_chat SERIAL,
 match VARCHAR(255),
 result VARCHAR(255),
 date_polling timestamp
);

CREATE UNIQUE INDEX qkPolling ON polling(id_chat,match);
