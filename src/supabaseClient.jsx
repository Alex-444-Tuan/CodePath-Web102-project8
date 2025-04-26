// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://smtgwybulnxaszodmyff.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtdGd3eWJ1bG54YXN6b2RteWZmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTYzODI1NCwiZXhwIjoyMDYxMjE0MjU0fQ.8ZR3lA6sP1-3IvGn7AC2Q_12eCISj56e9cPFW-6i2jU';
export const supabase = createClient(supabaseUrl, supabaseKey);
