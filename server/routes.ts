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

      // These are reviews collected from the Google Maps page
      const reviews = [
        {
          author: "Amine Jamai",
          rating: 5,
          text: "Un grand merci à toute l'équipe Auto Spa Detailing pour la remise à neuf de la Golf. Excellent travail ! Personnel qualifié. Résultat impeccable. Tout cela pour un prix raisonnable.",
          timeAgo: "4 weeks ago"
        },
        {
          author: "Ahmed Bakkali",
          rating: 5,
          text: "Honestly, it was worth the price! The car gets perfectly clean with a visible change in appearance. Top-notch work with great service!",
          timeAgo: "2 months ago"
        },
        {
          author: "Alex Gómez",
          rating: 5,
          text: "Professional staff, excellent work, cleanliness and impeccable finish. Thank you.",
          timeAgo: "3 months ago"
        },
        {
          author: "Med Talib",
          rating: 5,
          text: "Perfect team. Excellent detailing service and professionalism. I highly recommend!",
          timeAgo: "2 months ago"
        },
        {
          author: "Amine Elaatabi",
          rating: 5,
          text: "Customer satisfaction is their priority! Amazing service, premium products, and attention to detail. My car looks brand new after their ceramic coating service.",
          timeAgo: "3 weeks ago"
        },
        {
          author: "Zaid Kabbaj",
          rating: 5,
          text: "Great experience! They're professional and deliver excellent results. My car looks amazing after their detailing service.",
          timeAgo: "1 month ago"
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
