import { useEffect } from "react";

export default function useOutsideAlerter({ menuRef, setMenuOpened, menuOpened }) {
  useEffect(() => {
    function handleClickOutside(event) {
      const viewportWidth = document.documentElement.clientWidth;
      if (viewportWidth <= 640 && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpened(false);
      }
    }

    // Bind the event listener only if the menu is open and screen is small
    if (menuOpened) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, setMenuOpened, menuOpened]); // Include menuOpened in dependencies
}
