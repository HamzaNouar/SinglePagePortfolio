import { useReviews } from "@/hooks/useReviews";
import { Skeleton } from "@/components/ui/skeleton";
import { Review } from "@/types";

const ReviewCard = ({ review }: { review: Review }) => {
  // Calculate initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0).toUpperCase())
      .join('');
  };

  return (
    <div className="bg-gray-50 rounded-lg shadow-md p-6 min-w-[300px] max-w-[350px] flex-shrink-0 review-card">
      <div className="flex text-yellow-400 mb-3">
        {[...Array(5)].map((_, i) => (
          <i key={i} className={`fas ${i < review.rating ? 'fa-star' : 'fa-star-half-alt'}`}></i>
        ))}
      </div>
      <p className="mb-4 text-gray-700">"{review.text}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-semibold">
          {getInitials(review.author)}
        </div>
        <div className="ml-3">
          <p className="font-semibold">{review.author}</p>
          <p className="text-sm text-gray-500">{review.timeAgo}</p>
        </div>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  const { data: reviews, isLoading, error } = useReviews();

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Customer Reviews</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about our services.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        
        <div className="flex items-center justify-center mb-8">
          <div className="flex text-yellow-400 text-xl">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <span className="ml-3 text-xl font-semibold">4.9 out of 5</span>
          <span className="ml-2 text-gray-600">(Based on 38 reviews)</span>
        </div>
        
        {/* Review Cards Slider */}
        <div className="review-slider relative">
          {isLoading ? (
            <div className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="min-w-[300px] max-w-[350px] flex-shrink-0">
                  <Skeleton className="h-48 w-full mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <div className="flex items-center mt-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="ml-3 space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-8">
              <p>Failed to load reviews. Please try again later.</p>
            </div>
          ) : (
            <div className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide space-x-6">
              {reviews?.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>
          )}
        </div>
        
        <div className="text-center mt-4">
          <a href="https://g.co/kgs/M6YVB13" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-secondary hover:text-accent transition-colors font-medium">
            View All Reviews on Google <i className="fab fa-google ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
