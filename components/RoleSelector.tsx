"use client";
import { useContext } from "react";
import { RoleContext } from "@/lib/providers/RoleProvider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const RoleSelector = () => {
  const { role, setRole } = useContext(RoleContext);

  return (
    <ToggleGroup type="single" defaultValue="full-stack" onValueChange={(value) => setRole(value)}>
      <ToggleGroupItem value="back-end">Back-end</ToggleGroupItem>
      <ToggleGroupItem value="full-stack">Full-Stack</ToggleGroupItem>
      <ToggleGroupItem value="front-end">Front-end</ToggleGroupItem>
    </ToggleGroup>
  );
};
