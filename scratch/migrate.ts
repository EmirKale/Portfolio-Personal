import { projects } from '../lib/data/projects';
import * as fs from 'fs';
import * as path from 'path';

const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const outPath = path.join(dataDir, 'projects.json');
fs.writeFileSync(outPath, JSON.stringify(projects, null, 2));
console.log('Successfully generated data/projects.json!');
