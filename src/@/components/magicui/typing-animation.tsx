"use client";

import {useCallback, useEffect, useState} from "react";
import {cn} from "../../lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
                                          text,
                                          duration = 100,
                                          className,
                                        }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");

  const animateTyping = useCallback(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [text, duration]);

  useEffect(() => {
    return animateTyping();
  }, [animateTyping]);

  return (
      <h1
          className={cn(
              "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
              className,
          )}
      >
        {displayedText || text}
      </h1>
  );
}