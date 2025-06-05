"use client";

import React from "react";
import { HydrationBoundary } from "@tanstack/react-query";

export default function Hydrate({ dehydratedState, children }: { dehydratedState: any, children: React.ReactNode }) {
  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>;
}
