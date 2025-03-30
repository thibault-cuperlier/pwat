import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mcjucbmvurmebbjqmqjc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1janVjYm12dXJtZWJianFtcWpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyNjg5ODQsImV4cCI6MjA1ODg0NDk4NH0.xPiHDlUj89h3mrTNNb9rVup0vdX1JqvpEjsLv42jKRE";

export const supabase = createClient(supabaseUrl, supabaseKey);
