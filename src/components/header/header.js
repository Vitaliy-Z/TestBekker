import React from "react";
import { container } from "./header.module.css";

export default function Header({ children }) {
  return <header className={container}>{children}</header>;
}
