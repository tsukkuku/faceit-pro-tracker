import { useEffect, useState } from "react";
import type { Matches, PlayerMatches } from "../../api";
import { useInView } from "react-intersection-observer";
import { useAppDispatch } from "@/shared/hooks";
import { resetTo, setTo } from "../../slices";

export const usePagination = (data: Matches) => {
  const dispatch = useAppDispatch();
  const [match, setMatch] = useState<PlayerMatches[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (data?.items.length === 0) {
      setHasMore(false);
    } else if (data?.items) {
      setMatch((prev) => [...prev, ...data.items]);
      setHasMore(true);
    }
  }, [data?.items]);

  useEffect(() => {
    if (inView && data?.items && hasMore) {
      const date = data.items[data.items.length - 1].stats["Match Finished At"];
      dispatch(setTo(date));
    }
  }, [inView]);

  useEffect(() => {
    return () => {
      dispatch(resetTo());
    };
  }, []);

  return { ref, match, hasMore };
};
