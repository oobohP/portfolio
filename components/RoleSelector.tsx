"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const RoleSelector = () => {
  return (
    <ToggleGroup type="single" defaultValue="full-stack">
      <ToggleGroupItem value="back-end">Back-end</ToggleGroupItem>
      <ToggleGroupItem value="full-stack">Full-Stack</ToggleGroupItem>
      <ToggleGroupItem value="front-end">Front-end</ToggleGroupItem>
    </ToggleGroup>
  );
};
