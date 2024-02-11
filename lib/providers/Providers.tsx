'use client';

import { ReactNode } from 'react';
import RoleContextProvider from "./RoleProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <RoleContextProvider>
      {children}
    </RoleContextProvider>
  );
}
