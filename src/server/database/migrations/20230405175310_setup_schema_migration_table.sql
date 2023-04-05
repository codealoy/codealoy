-- migrate:up
ALTER TABLE
  schemaMigration
ADD
  COLUMN createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- migrate:down
ALTER TABLE
  schemaMigration DROP COLUMN createdAt;