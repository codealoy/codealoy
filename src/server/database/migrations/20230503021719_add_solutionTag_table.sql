-- migrate:up
CREATE TABLE solutionTag (
  id SERIAL PRIMARY KEY,
  solutionId INT NOT NULL,
  tagId INT NOT NULL,
  createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX idx_solutionId ON solutionTag (solutionId);
CREATE INDEX idx_tagId ON solutionTag (tagId);

-- migrate:down
DROP INDEX IF EXISTS idx_solutionId ON solutionTag;
DROP INDEX IF EXISTS idx_tagId ON solutionTag;
DROP TABLE IF EXISTS solutionTag;