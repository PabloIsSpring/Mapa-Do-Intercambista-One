import { createClient } from '@supabase/supabase-js'

// Pegue as chaves no dashboard do Supabase
const SUPABASE_URL = 'https://opagpxglyfmucqgitpzu.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wYWdweGdseWZtdWNxZ2l0cHp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNzUzNTEsImV4cCI6MjA3Nzk1MTM1MX0.S8Ev39i6nmGa5mfr7d3UCES_QqlQJUvLybSjfe4XJ2E'

// Cria o cliente Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
