"use client";

import React from "react";
import { QueryClientProvider as Provider } from "@tanstack/react-query";

import { getQueryClient } from "@lib";

export default function QueryClientProvider({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return <Provider client={queryClient}>{children}</Provider>;
}
