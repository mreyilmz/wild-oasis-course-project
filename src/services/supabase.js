import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fdhpykqpvqpoptpqtfjv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkaHB5a3FwdnFwb3B0cHF0Zmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0MTMzNTEsImV4cCI6MjAwMzk4OTM1MX0.wc3EQ3ujglE9PqTMxvTiCDJnA4gz0fyZerLBDDkVhEg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
