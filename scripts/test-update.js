require('dotenv').config({ path: '.env.local' });
global.WebSocket = require('ws');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

async function testUpdate() {
  const { data, error } = await supabaseAdmin
    .from('projects')
    .update({ content: { "test": "123" } })
    .eq('id', 'askbase');
  
  if (error) {
    console.error('Update error:', error);
  } else {
    console.log('Update success');
  }
}

testUpdate();
