import type {Progress} from '../data/types';
const prefix='chino_progress_';
export const normalizeProfile=(v:string)=>v.trim().toUpperCase().replace(/[^A-Z0-9_-]/g,'');
export const keyFor=(profile:string)=>prefix+normalizeProfile(profile);
export function loadProgress(profile:string):Progress|null{try{const raw=localStorage.getItem(keyFor(profile));return raw?JSON.parse(raw):null}catch{return null}}
export function saveProgress(p:Progress){try{localStorage.setItem(keyFor(p.profile),JSON.stringify({...p,lastAccess:new Date().toISOString()}));}catch{console.warn('No se pudo guardar el progreso en localStorage')}}
export function newProgress(profile:string):Progress{return{profile:normalizeProfile(profile),currentLevel:1,completedWords:[],completedFamilies:[],completedPhrases:[],writingScores:{},lastAccess:new Date().toISOString()}}
