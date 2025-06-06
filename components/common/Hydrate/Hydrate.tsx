"use client";

import React from "react";
import { DehydratedState, HydrationBoundary } from "@tanstack/react-query";

export default function Hydrate({
  dehydratedState,
  children,
}: {
  dehydratedState: DehydratedState;
  children: React.ReactNode;
}) {
  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
