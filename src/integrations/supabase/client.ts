// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://yeeaavbdlirmadsekfph.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllZWFhdmJkbGlybWFkc2VrZnBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyODg5NjksImV4cCI6MjA2NDg2NDk2OX0.6pRSHaLSW1lFQt9XD6BZiGrVHBomJZUZ9CGKxdvizH0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);