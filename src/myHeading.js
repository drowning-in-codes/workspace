import { useContext } from "react";
import { LevelContext } from "./LevelContext";


export default function Myheading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    default:
      return <h3>{children}</h3>;
  }
}
