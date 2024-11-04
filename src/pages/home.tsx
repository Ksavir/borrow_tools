import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Hammer,
  Wrench,
  Drill,
  Saw,
  PaintBucket,
  Search,
  ArrowRight,
} from 'lucide-react';

const categories = [
  { name: 'Power Tools', icon: Drill },
  { name: 'Hand Tools', icon: Hammer },
  { name: 'Plumbing', icon: Wrench },
  { name: 'Woodworking', icon: Saw },
  { name: 'Painting', icon: PaintBucket },
];

const featuredTools = [
  {
    id: 1,
    name: 'Bosch Power Drill',
    category: 'Power Tools',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400',
    owner: 'John Doe',
    location: 'Brooklyn, NY',
  },
  {
    id: 2,
    name: 'Professional Hammer Set',
    category: 'Hand Tools',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400',
    owner: 'Jane Smith',
    location: 'Los Angeles, CA',
  },
  {
    id: 3,
    name: 'Pipe Wrench Kit',
    category: 'Plumbing',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1581147036324-c1c88bb6eb4e?w=400',
    owner: 'Mike Johnson',
    location: 'Chicago, IL',
  },
];

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Borrow the tools you need,
            <br />
            when you need them
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of tool owners and borrowers. Save money and
            resources by sharing tools with people in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for tools..."
                className="pl-10 h-12"
              />
            </div>
            <Button size="lg" className="h-12">
              Find Tools
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.name}
                  className="hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="font-semibold">{category.name}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <Card key={tool.id} className="overflow-hidden">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                  <p className="text-muted-foreground mb-4">{tool.category}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">{tool.owner}</p>
                      <p className="text-sm text-muted-foreground">
                        {tool.location}
                      </p>
                    </div>
                    <Button>Request Tool</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Have tools you want to share?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community and start lending your tools today
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="h-12"
          >
            List Your Tools
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}