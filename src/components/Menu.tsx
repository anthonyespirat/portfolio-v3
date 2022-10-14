import { useCallback } from "react";

export default function Menu ({ currentUrl }: { currentUrl: string }) {

  const resolveActive = useCallback((path: string) => {
    if (path !== currentUrl) return "text-gray-300";
    return "text-white";
  }, [currentUrl]);
  
  return (
    <>
      <nav className="flex-1 px-5 w-full">
        <ul className="list hidden sm:flex sm:gap-2  md:gap-12 justify-center">
          <li className={`${resolveActive("/")}`}><a href="/">Accueil</a></li>
          <span>&bull;</span>
          <li className={`${resolveActive("/about")}`}><a href='#about'>À propos</a></li>
          <span>&bull;</span>
          <li className={`${resolveActive("/creations")}`}><a href="/creations">Mes créations</a></li>
        </ul>
      </nav>
    </>
  );
}