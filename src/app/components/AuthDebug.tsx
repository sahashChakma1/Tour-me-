'use client';

import { useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function AuthDebug() {
  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      console.log('🟡 Supabase session:', data?.session);
      if (error) console.error('🔴 Supabase error:', error);
    };

    checkSession();
  }, []);

  return <div className="text-sm text-gray-500">[AuthDebug running...]</div>;
}
