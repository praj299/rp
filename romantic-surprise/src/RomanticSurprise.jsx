
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function RomanticSurprise() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 p-4 flex flex-col items-center justify-center">
      <Card className="max-w-md w-full rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          <h1 className="text-3xl font-bold text-rose-600 mb-4">A Little Surprise for You ❤️</h1>
          <p className="text-gray-700 text-lg mb-6">
            From the first smile to every moment we’ve shared, you’ve been the best part of my life. This little page is just a small piece of my big love for you.
          </p>
          <img
            src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80"
            alt="Romantic Moment"
            className="w-full rounded-xl mb-6 shadow-md"
          />
          <p className="text-gray-600 italic mb-6">
            "I look at you and see the rest of my life in front of my eyes."
          </p>

          <div className="mb-6">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/6cUuyGUr1Avg2DX1MnT5BS?utm_source=generator"
              width="100%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>

          <Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-6 py-2 text-lg">
            <Heart className="mr-2 h-5 w-5" /> Love You Always
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
