
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Priya S.',
    rating: 5,
    review: 'Bahut hi badhiya resume builder hai! Aasani se professional resume ban gaya. Templates modern aur easy to use hain.',
    date: 'July 2024'
  },
  {
    name: 'Amit K.',
    rating: 5,
    review: 'Interface bahut intuitive hai. LinkedIn se profile import karne ka option best hai, time bach gaya. Highly recommended!',
    date: 'July 2024'
  },
  {
    name: 'Sunita M.',
    rating: 4,
    review: 'Resume jaldi banane ke liye aacha tool hai. Bas colors customize karne ke aur options hote to aur badhiya hota. Overall, solid product.',
    date: 'June 2024'
  },
  {
    name: 'Sarah L.',
    rating: 5,
    review: 'This resume builder is fantastic! I created a professional-looking resume in minutes. The templates are modern and easy to use.',
    date: 'July 2024'
  },
  {
    name: 'Michael B.',
    rating: 5,
    review: 'I love how intuitive the interface is. I was able to import my LinkedIn profile, which saved me a ton of time. Highly recommended!',
    date: 'July 2024'
  },
  {
    name: 'Jessica P.',
    rating: 4,
    review: 'A great tool for anyone looking to create a resume quickly. I wish there were more options for customizing the colors, but overall, it\'s a solid product.',
    date: 'June 2024'
  }
];

const ReviewCard = ({ name, rating, review, date }: { name: string, rating: number, review: string, date: string }) => (
  <Card>
    <CardHeader>
      <div className="flex justify-between items-center">
        <div>
          <CardTitle className="text-lg">{name}</CardTitle>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{review}</p>
    </CardContent>
  </Card>
);

export default function ReviewsPage() {
  return (
    <div className="min-h-screen w-full bg-background font-body flex flex-col">
      <Header />
      <main className="container py-12 flex-grow">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">What Our Users Say</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud to have helped so many people create resumes that get results.
          </p>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </section>

        <section>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Leave a Review</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                    <Label>Your Rating</Label>
                    <div className="flex items-center gap-1">
                         {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-6 w-6 text-gray-300 cursor-pointer hover:text-yellow-400 transition-colors" />
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="review">Your Review</Label>
                  <Textarea id="review" placeholder="Share your experience..." rows={5} />
                </div>
                <Button type="submit">Submit Review</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
