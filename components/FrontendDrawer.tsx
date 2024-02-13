import { ReactNode } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

interface DrawDemoProps {
  trigger: ReactNode; // Passing children to the DrawerTrigger
  content: ReactNode; // Passing content inside the Drawer
}

export const FrontendDrawer = ({ trigger, content }: DrawDemoProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>{content}</DrawerContent>
    </Drawer>
  );
};
