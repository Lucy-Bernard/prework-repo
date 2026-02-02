import { supabase } from "../client";

export const fetchAllCreators = async () => {
  const { data, error } = await supabase.from("creators").select();

  if (error) {
    console.error("Error fetching creators:", error);
    return { data: null, error };
  }

  return { data, error: null };
};

export const fetchCreatorById = async (id) => {
  const { data, error } = await supabase
    .from("creators")
    .select()
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching creator:", error);
    return { data: null, error };
  }

  return { data, error: null };
};

export const createCreator = async (creatorData) => {
  const { data, error } = await supabase
    .from("creators")
    .insert([creatorData])
    .select()
    .single();

  if (error) {
    console.error("Error creating creator:", error);
    return { data: null, error };
  }

  return { data, error: null };
};

export const updateCreator = async (id, creatorData) => {
  const { data, error } = await supabase
    .from("creators")
    .update(creatorData)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error updating creator:", error);
    return { data: null, error };
  }

  return { data, error: null };
};

export const deleteCreator = async (id) => {
  const { data, error } = await supabase.from("creators").delete().eq("id", id);

  if (error) {
    console.error("Error deleting creator:", error);
    return { data: null, error };
  }

  return { data, error: null };
};
