'use server';

import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { Dictionary } from '@/lib/i18n/dictionary';

const dataFilePath = path.join(process.cwd(), 'data', 'dictionary.json');

export async function getDictionary(): Promise<Dictionary> {
  if (!fs.existsSync(dataFilePath)) {
    throw new Error('dictionary.json not found');
  }
  const fileData = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(fileData) as Dictionary;
}

export async function updateDictionary(newDict: Dictionary) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(newDict, null, 2));
    revalidatePath('/', 'layout'); // Revalidate everything to push new translations
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
