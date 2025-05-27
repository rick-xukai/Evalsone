import { toast } from 'react-hot-toast';
import { Database } from '@/types/supabase';
import { supabase, SupabaseTables } from '@/lib/supabase';

type TableData = {
  [K in SupabaseTables]: Database['public']['Tables'][K]['Insert']
};

export const useSupabase = () => {
  const insertData = async <T extends SupabaseTables>(
    table: T,
    data: TableData[T]
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
      console.error(error);
      toast.error('Something went wrong. Please try again.');
      return false;
    }
  };

  return {
    insertData,
  };
};
