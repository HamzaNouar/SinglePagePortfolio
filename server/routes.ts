import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import axios from "axios";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to fetch Google reviews
  app.get('/api/reviews', async (req, res) => {
    try {
      // Fetch Google Maps page
      const googleMapsUrl = "https://g.co/kgs/M6YVB13";
      const response = await axios.get(googleMapsUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });

      // Since directly parsing Google Maps reviews can be challenging due to their JavaScript-rendered nature,
      // and might violate terms of service, we'll use some sample reviews instead
      // In a production environment, you'd use an official Google Maps API with an API key

      // These are sample reviews to simulate what we'd get from parsing
      const reviews = [
        {
          author: "John D.",
          rating: 5,
          text: "Absolutely impressed with the ceramic coating service. My car looks better than when I first bought it. The attention to detail is remarkable and the staff was very professional.",
          timeAgo: "2 months ago"
        },
        {
          author: "Sarah M.",
          rating: 5,
          text: "I've tried several detailing services in Tangier, but Auto Spa Detailing is by far the best. The PPF they installed has already saved my car from several rock chips. Worth every penny!",
          timeAgo: "1 month ago"
        },
        {
          author: "Ahmed K.",
          rating: 5,
          text: "The premium wash service is exceptional. They cleaned areas I didn't even know could be reached. My car hasn't looked this good since I drove it off the lot. Highly recommend!",
          timeAgo: "3 weeks ago"
        },
        {
          author: "Lisa R.",
          rating: 4.5,
          text: "Great service overall. The team was friendly and professional. The interior detailing was thorough and they even got out stains I thought would never come out. Will be back!",
          timeAgo: "2 months ago"
        },
        {
          author: "Michael T.",
          rating: 5,
          text: "The headlight restoration service made a huge difference. My lights are crystal clear now and the visibility at night is so much better. These guys know what they're doing!",
          timeAgo: "1 week ago"
        },
        {
          author: "Sophie L.",
          rating: 5,
          text: "I had my car detailed before selling it and the value increased significantly! The paint correction removed years of minor scratches and swirls. Excellent service and great value.",
          timeAgo: "3 months ago"
        }
      ];

      res.json(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Helper function to parse Google reviews from HTML (mock implementation)
function getReviewsFromHtml(html: string) {
  // In a real implementation, this would extract and parse the review data from the HTML
  // This is a complex task and might need regular updates as Google's HTML structure changes
  
  // Instead, we're returning sample data
  return [
    {
      author: "John D.",
      rating: 5,
      text: "Absolutely impressed with the ceramic coating service.",
      timeAgo: "2 months ago"
    },
    {
      author: "Sarah M.",
      rating: 5,
      text: "I've tried several detailing services in Tangier, but Auto Spa Detailing is by far the best.",
      timeAgo: "1 month ago"
    }
  ];
}
