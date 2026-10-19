require('dotenv').config({ path: '.env.local' });
global.WebSocket = require('ws');
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

async function simulateServerAction() {
  // Let's fetch one project exactly like getProjectsFromDB
  const { data: fetch1, error: err1 } = await supabaseAdmin.from('projects').select('id, content');
  const projects = fetch1.map(row => ({ id: row.id, ...row.content }));
  
  const target = projects.find(p => p.id === 'yummy');
  if (!target) return console.log('not found');
  
  // Modify something
  target.title = target.title + ' Updated';
  
  // Now simulate updateProjectAction
  const { id, ...content } = target;
  console.log('Sending content:', content);
  
  const { data, error } = await supabaseAdmin
    .from('projects')
    .update({ content })
    .eq('id', id);
    
  if (error) {
    console.error('Update error:', error);
  } else {
    console.log('Update success');
  }
}

simulateServerAction();
