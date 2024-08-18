"use client"

import { useEffect, useState } from "react";

export default function ReadingText({ content }: { content: string }) {
  const [readingTime, setReadingTime] = useState<number>(0)

  useEffect(() => {
  const readingTimeInMin = (text: string) => {
    const wordsPerMinute = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wordsPerMinute);
    setReadingTime(time)
  }
  readingTimeInMin(content)
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []) 

  return (
    <p className={` uppercase font-light text-xs text-secondary tracking-tighter`}>{readingTime} minutos de leitura</p>
  )
}