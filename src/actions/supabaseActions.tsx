'use server';
import { createClient } from '@/lib/supabaseServer';

export async function fetchPlaceById(id: number) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('places')
    .select('id, title, description, image_url')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Supabase fetch error:', error.message);
    throw new Error('Failed to fetch place');
  }

  return data;
}
