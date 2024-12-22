-- CREATE TABLE userLIST (
--     id BIGINT NOT NULL,
--     username VARCHAR(60),
--     email VARCHAR(60),
--     phoneNumber VARCHAR(60),
--     bio VARCHAR(200),
--     role VARCHAR(60),
--     password VARCHAR(60),
--     googleAuth VARCHAR(300),
--     facebookAuth VARCHAR(300),
--     profileIMages TEXT[],
--     addres VARCHAR(60),
--     activeTime TEXT[],
--     friends TEXT[],
--     results TEXT[]
-- )


-- INSERT INTO userlist(id,username,password) VALUES(1505,'Dilshodbek','0422')



-- CREATE TABLE baseWord (
--     id BIGSERIAL Not NULL,
--     word VARCHAR(100),
--     translation VARCHAR(200),
--     category VARCHAR(100),
--     location VARCHAR(100) DEFAULT 'Unknown',
--     data TIMESTAMP
-- )

-- ALTER TABLE baseWord
-- ALTER COLUMN id TYPE BI;

-- ALTER TABLE baseWord
-- ALTER COLUMN category SET DEFAULT 'Mix word';


-- ALTER TABLE baseWord
-- ADD COLUMN location VARCHAR(100);

-- INSERT INTO baseWord(word,translation,category,location,data) VALUES('significant','muhim','IELTS NOVICE','Unit 3','2024-12-16 19:35:06')