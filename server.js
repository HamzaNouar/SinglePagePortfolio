import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// API endpoint for reviews
app.get('/api/reviews', (req, res) => {
  try {
    // Sample reviews data - replace with actual data from database in production
    const reviews = [
      {
        author: "Amine Jamai",
        rating: 5,
        text: "Un service excellent avec une grande attention aux détails, fortement recommandé!",
        timeAgo: "2 weeks ago"
      },
      {
        author: "Mehdi Alaoui",
        rating: 5,
        text: "Travail professionnel, beau résultat. Je recommande vivement!",
        timeAgo: "1 month ago"
      },
      {
        author: "Sarah Ben",
        rating: 5,
        text: "Résultat exceptionnel, service rapide et professionnel!",
        timeAgo: "3 weeks ago"
      },
      {
        author: "Karim Hassan",
        rating: 4,
        text: "Très content du résultat, je reviendrai pour mon autre voiture!",
        timeAgo: "1 month ago"
      },
      {
        author: "Laila Tazi",
        rating: 5,
        text: "Excellent service, personnel très professionnel et résultat impeccable!",
        timeAgo: "2 months ago"
      },
      {
        author: "Youssef El Mansouri",
        rating: 5,
        text: "Super travail, ma voiture n'a jamais été aussi propre!",
        timeAgo: "2 months ago"
      },
      {
        author: "Fatima Zahra",
        rating: 5,
        text: "J'ai fait appliquer un coating céramique sur ma voiture et le résultat est juste incroyable!",
        timeAgo: "3 months ago"
      },
      {
        author: "Omar Benali",
        rating: 5,
        text: "Service de qualité, personnel compétent et prix raisonnable.",
        timeAgo: "1 month ago"
      }
    ];
    
    res.json(reviews);
  } catch (error) {
    console.error('Error serving reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// For any other request, serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});