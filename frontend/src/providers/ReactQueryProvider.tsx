"use client";

import { ResponsiveProvider } from "@/context/ResponsiveProvider";
import { ThemeProvider } from "@/context/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ResponsiveProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ResponsiveProvider>
    </QueryClientProvider>
  );
}
