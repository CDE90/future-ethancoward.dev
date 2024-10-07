export function ButtonContainer({
  children,
  className,
  colour,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  colour?: "default" | "red" | "pink" | "blue";
}>) {
  let colourClass = "";

  if (!colour || colour === "default") {
    colourClass +=
      "hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white ";
  } else if (colour === "red") {
    colourClass +=
      "hover:text-white dark:hover:text-white hover:bg-red-500 dark:hover:bg-red-500 ";
  } else if (colour === "pink") {
    colourClass +=
      "hover:text-black dark:hover:text-white hover:bg-fuchsia-400 dark:hover:bg-fuchsia-400 ";
  } else if (colour === "blue") {
    colourClass +=
      "hover:text-white dark:hover:text-white hover:bg-blue-500 dark:hover:bg-blue-500 ";
  }

  return <div className={`${colourClass} ${className}`}>{children}</div>;
}
