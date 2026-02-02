import { createClient } from "@supabase/supabase-js";

const URL = "https://iqywaakziaejmkgqgtow.supabase.co";
const API_KEY = "sb_publishable_HDCpSn5UWyy8o5jOLOKwtA_2BtQSHPL";
export const supabase = createClient(URL, API_KEY);
