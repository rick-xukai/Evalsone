import { toast } from 'react-hot-toast';

import { supabase, SupabaseTables } from '@/lib/supabase';

export const useSupabase = () => {
  const insertData = async <T extends Record<string, any>>(
    table: SupabaseTables,
    data: T
  ) => {
    try {
      const { error } = await supabase.from(table).insert([data]);

      if (error) {
        toast.error('Something went wrong. Please try again.');
        return false;
      }
      toast.success('Submitted successfully!');
      return true;
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      return false;
    }
  };

  return {
    insertData,
  };
};
