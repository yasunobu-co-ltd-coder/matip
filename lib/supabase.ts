import { createClient, SupabaseClient } from '@supabase/supabase-js';

// 環境変数から読み込み（Vercelで設定）
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

let supabase: SupabaseClient;

if (supabaseUrl && supabaseKey) {
    supabase = createClient(supabaseUrl, supabaseKey);
} else {
    // ビルド時用のダミークライアント
    supabase = createClient('https://placeholder.supabase.co', 'placeholder');
    if (typeof window !== 'undefined') {
        console.warn('Supabase environment variables are not set. Database operations will fail.');
    }
}

export { supabase };
