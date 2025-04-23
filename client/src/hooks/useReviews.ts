import { useQuery } from "@tanstack/react-query";
import { Review } from "@/types";

export const useReviews = () => {
  return useQuery({
    queryKey: ['/api/reviews'],
    queryFn: async (): Promise<Review[]> => {
      const response = await fetch('/api/reviews');
      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }
      return response.json();
    }
  });
};
