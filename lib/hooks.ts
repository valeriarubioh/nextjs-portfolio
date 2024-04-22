import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/activesection-context";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) { //if we dont pass anything in threshold the default value is 0.75
  const { ref, inView } = useInView({ threshold }); //Comes from de pckg intersection observer. It will return an array with the ref to the DOM element you want to monitor, and inView the status.

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
