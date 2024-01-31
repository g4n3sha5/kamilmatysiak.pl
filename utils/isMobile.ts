export const isMobile = () => {
  if (typeof window !== "undefined") {
    const breakpoint = "1280px";
    const query = `(max-width : ${breakpoint})`;
    const matches = window.matchMedia(query).matches;
    return matches;
  }
};
