import React, { useState } from 'react';
import Cookies from 'universal-cookie';

export function useCookies(cookieName: string): [string | null, React.Dispatch<React.SetStateAction<string | null>>] {
  const cookies: Cookies = new Cookies()
  // get the value from cookies if exsist
  const [cookieValue, setCookieValue] = useState<string | null>(cookies.get(cookieName));

  function setCookie(cookieValue: React.SetStateAction<string | null>): React.Dispatch<React.SetStateAction<string | null>> {
    // updates the value at cookies for a new one
    cookies.set(cookieName, cookieValue);
    return (setCookieValue);
  }

  return [cookieValue, setCookie];
} 