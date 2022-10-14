import { useState, useEffect, useMemo, useCallback } from "react";

export default function Menu ({ currentUrl }: { currentUrl: string }) {

  const active = useMemo(() => {
    return currentUrl;
  }, [currentUrl]) ;
  
  const resolveActive = useCallback((path: string) => {
    if (path !== currentUrl) return "text-gray-300";
    return "text-gray-100";
  }, [currentUrl]);
  
  return (
    <>
      <nav className="flex-1 px-5 w-full">
        <ul className="list flex gap-16 justify-center">
          <li className={`${resolveActive("/")}`}><a href="/">Accueil</a></li>
          <span>&bull;</span>
          <li className={`${resolveActive("/")}`}><a href='#about'>À propos</a></li>
          <span>&bull;</span>
          <li className={`${resolveActive("/creation")}`}><a href="/creations">Mes créations</a></li>
        </ul>
      </nav>
    </>
  );
}