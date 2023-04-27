-- migrate:up
CREATE TABLE solution (
  id SERIAL PRIMARY KEY,
  solutionMaskId VARCHAR(30) NOT NULL,
  title VARCHAR(255) NOT NULL,
  repositoryUrl VARCHAR(255) NOT NULL,
  liveUrl VARCHAR(255) NOT NULL,
  questions TEXT NOT NULL,
  createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_uni_solutionMaskId ON solution (solutionMaskId);

-- migrate:down
DROP INDEX idx_uni_solutionMaskId ON solution;
DROP TABLE IF EXISTS solution;


