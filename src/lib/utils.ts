import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { Meme } from '../lib/memes';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const COOKIE_KEY = "memes"


const generateRandomLikes = () => Math.floor(Math.random() * 100); // Від 0 до 99

export function useMemeStorage(defaultMemes: Meme[]) {
  const [memes, setMemes] = useState<Meme[] | null>(null);

  useEffect(() => {
    const saved = Cookies.get(COOKIE_KEY);
    let initialMemes: Meme[];

    if (saved) {
      try {
        initialMemes = JSON.parse(saved);
      } catch (e) {
        console.error("Invalid JSON in cookie, fallback to default memes");
        initialMemes = defaultMemes;
      }
    } else {
      initialMemes = defaultMemes.map((meme) => ({
        ...meme,
        likes: generateRandomLikes(),
      }));
      Cookies.set(COOKIE_KEY, JSON.stringify(initialMemes), { expires: 7 });
    }

    setMemes(initialMemes);
  }, []);

  useEffect(() => {
    if (memes) {
      Cookies.set(COOKIE_KEY, JSON.stringify(memes), { expires: 7 });
    }
  }, [memes]);

  return [memes, setMemes] as const;
}

