"use client";
import { useContext } from "react";
import { RoleContext } from "@/lib/providers/RoleProvider";

type ContentProps = {
  backend: React.ReactNode;
  fullstack: React.ReactNode;
  frontend: React.ReactNode;
};

export const Content = ({ backend, fullstack, frontend }: ContentProps) => {
  const { role } = useContext(RoleContext);

  return (
    <div>
      {role === "full-stack" && fullstack}
      {role === "back-end" && backend}
      {role === "front-end" && frontend}
    </div>
  );
};
