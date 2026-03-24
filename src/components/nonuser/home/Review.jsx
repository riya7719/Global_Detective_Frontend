import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: 'Jorge Monahan',
      role: 'Background Verification',
      content: 'Libero suscipit unde. Labore cumque voluptatum accusamus fugiat qui voluptates corporis dignissimos.',
      avatar: 'https://i.pravatar.cc/150?u=jorge'
    },
    {
      id: 2,
      name: 'Jorge Monahan',
      role: 'Background Verification',
      content: 'Libero suscipit unde. Labore cumque voluptatum accusamus fugiat qui voluptates corporis dignissimos.',
      avatar: 'https://i.pravatar.cc/150?u=mona'
    },
    {
      id: 3,
      name: 'Jorge Monahan',
      role: 'Background Verification',
      content: 'Libero suscipit unde. Labore cumque voluptatum accusamus fugiat qui voluptates corporis dignissimos.',
      avatar: 'https://i.pravatar.cc/150?u=jorge2'
    }
  ];

  return (
    <section className="bg-[#0b1120] text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">Reviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col">
              {/* Review Bubble */}
              <div className="bg-white text-gray-800 p-6 rounded-2xl relative mb-8 after:content-[''] after:absolute after:top-full after:left-10 after:border-[12px] after:border-transparent after:border-t-white">
                <p className="text-sm italic leading-relaxed">
                  "{review.content}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-red" />
                <div className="flex-1">
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <p className="text-xs text-gray-400 mb-1">{review.role}</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-red text-red" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-red/10 px-2 py-1 rounded text-[10px] text-red font-medium border border-red/20">
                  <CheckCircle size={10} />
                  Verified user
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;