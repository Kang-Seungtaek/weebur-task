import { QueryClient, QueryClientConfig } from "@tanstack/react-query";

export function getQueryClient(config?: QueryClientConfig){
  return new QueryClient(config)
}
