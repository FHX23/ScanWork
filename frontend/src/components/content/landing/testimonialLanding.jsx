import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Operations Manager",
      company: "TechCorp",
      content:
        "Scanwork has transformed our document management process. We've reduced processing time by 75% and eliminated paper storage costs.",
      avatar: "AJ",
    },
    {
      name: "Sarah Chen",
      role: "Office Administrator",
      company: "Global Solutions",
      content:
        "The search functionality is incredible. I can find any document in seconds, even from years ago. It's been a game-changer for our team.",
      avatar: "SC",
    },
    {
      name: "Michael Rodriguez",
      role: "Financial Advisor",
      company: "Wealth Partners",
      content:
        "Client document security is our top priority. Scanwork's encryption and access controls give us peace of mind while improving efficiency.",
      avatar: "MR",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Businesses</h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what our customers have to say about Scanwork
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-indigo-900 bg-black shadow-md">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="border-2 border-indigo-400">
                    <AvatarFallback className="bg-indigo-950 text-indigo-200">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

