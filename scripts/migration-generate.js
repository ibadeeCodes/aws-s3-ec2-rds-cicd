const { execSync } = require('child_process');

const migrationName = process.argv[2];
if (!migrationName) {
  console.error('Please provide a migration name.');
  process.exit(1);
}

const command = `npm run typeorm -- migration:generate src/db/migrations/${migrationName}`;

try {
  execSync(command, { stdio: 'inherit' });
} catch (error) {
  console.error('Error generating migration:', error.message);
  process.exit(1);
}
