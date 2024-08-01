'use client'
import { Hydrate, QueryClient, QueryClientProvider, dehydrate } from "react-query";

export default function CacheProvider({
  children  
}: {
  children:React.ReactNode
}) {
  const queryClient = new QueryClient({
    defaultOptions:{
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 1000*60*30
      }
    }
  });
  const dehydratedState = dehydrate(queryClient)
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
}
