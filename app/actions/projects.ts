'use server';

import { Project } from '@/lib/data/projects';
import { revalidatePath } from 'next/cache';
import { supabaseAdmin } from '@/lib/supabase/admin';

export async function createProjectAction(project: Project) {
  try {
    const { id, ...content } = project;
    
    // basic collision check
    const { data: existing } = await supabaseAdmin
      .from('projects')
      .select('id')
      .eq('id', id)
      .single();
      
    if (existing) {
      return { success: false, error: 'Bu ID ile bir proje zaten var.' };
    }
    
    const { error } = await supabaseAdmin
      .from('projects')
      .insert({ id, content });
      
    if (error) throw error;
    
    revalidatePath('/'); // revalidate UI
    revalidatePath('/admin/projects');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateProjectAction(project: Project) {
  try {
    const { id, ...content } = project;
    
    const { error } = await supabaseAdmin
      .from('projects')
      .update({ content })
      .eq('id', id);
      
    if (error) throw error;
    
    revalidatePath('/');
    revalidatePath('/admin/projects');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteProjectAction(id: string) {
  try {
    const { error } = await supabaseAdmin
      .from('projects')
      .delete()
      .eq('id', id);
      
    if (error) throw error;
    
    revalidatePath('/');
    revalidatePath('/admin/projects');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
