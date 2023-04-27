-- migrate:up
CREATE TABLE solutionTag (
  id SERIAL PRIMARY KEY,
  solutionId INT NOT NULL,
  tagId INT NOT NULL,
  createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_uni_solutionTag ON solutionTag (solutionId, tagId);

-- migrate:down
DROP INDEX idx_uni_solutionTag ON solutionTag;
DROP TABLE IF EXISTS solutionTag;


