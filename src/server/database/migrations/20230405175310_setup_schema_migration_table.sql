-- migrate:up
ALTER TABLE
  schemaMigration
ADD
  COLUMN createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- migrate:down
ALTER TABLE
  schemaMigration DROP COLUMN createdAt;