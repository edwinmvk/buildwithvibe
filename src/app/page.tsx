"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export default function RootPage() {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.createAPI.queryOptions({ text: "hello" }));

  return (
    <div>
      <Button>{JSON.stringify(data)}</Button>
    </div>
  );
}
