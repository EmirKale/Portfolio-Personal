require('dotenv').config({ path: '.env.local' });
global.WebSocket = require('ws');
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrate() {
  const dataFilePath = path.join(__dirname, '..', 'data', 'projects.json');
  if (!fs.existsSync(dataFilePath)) {
    console.error('projects.json not found');
    process.exit(1);
  }

  const projects = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

  console.log(`Found ${projects.length} projects. Migrating...`);

  for (const project of projects) {
    const { id, ...content } = project;
    
    // Check if project exists
    const { data: existing } = await supabase
      .from('projects')
      .select('id')
      .eq('id', id)
      .single();

    if (existing) {
      // Update
      const { error } = await supabase
        .from('projects')
        .update({ content })
        .eq('id', id);
      if (error) {
        console.error(`Error updating project ${id}:`, error.message);
      } else {
        console.log(`Updated ${id}`);
      }
    } else {
      // Insert
      const { error } = await supabase
        .from('projects')
        .insert({ id, content });
      if (error) {
        console.error(`Error inserting project ${id}:`, error.message);
      } else {
        console.log(`Inserted ${id}`);
      }
    }
  }

  console.log('Migration complete.');
}

migrate();
