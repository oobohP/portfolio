"use client";
import { useContext } from "react";
import { Button } from "../ui/button";
import { RoleContext } from "@/lib/providers/RoleProvider";

export const HeroSelector = () => {
  const { setRole } = useContext(RoleContext);

  return (
    <>
      <Button variant="outline" className="px-8" onClick={() => setRole("front-end")}>
        Frontend
      </Button>
      <Button className="px-8" onClick={() => setRole("back-end")}>
        Backend
      </Button>
    </>
  );
};
