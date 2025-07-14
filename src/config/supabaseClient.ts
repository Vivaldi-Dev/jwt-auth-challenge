import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') }); 

const supabaseUrl = process.env.Project_URL;
const supabaseKey = process.env.API_Key;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Variáveis de ambiente Project_URL e API_Key são necessárias');
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  const { data, error } = await supabase.from('non_existing_table').select('*');

  if (error?.code === '42P01') {
    console.log(' Conexão com Supabase está funcionando ');
  } else if (error) {
    console.error('Erro de conexão com Supabase:', error.message);
  } else {
    console.log('Conectado e retornado:', data);
  }
}

testConnection();