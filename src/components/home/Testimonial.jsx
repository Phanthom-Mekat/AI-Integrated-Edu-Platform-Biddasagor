/* eslint-disable react/prop-types */
import Marquee from 'react-fast-marquee'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "John D.",
    image: "https://i.pravatar.cc/100?img=1",
    feedback: "This platform helped me ace my math exam! Highly recommend it.",
    rating: 5,
    subject: "Mathematics",
    improvement: "Exam scores improved by 30%",
  },
  {
    name: "Sophia L.",
    image: "https://i.pravatar.cc/100?img=2",
    feedback: "The step-by-step solutions were a lifesaver for physics assignments!",
    rating: 5,
    subject: "Physics",
    improvement: "Homework completion time reduced",
  },
  {
    name: "Emily R.",
    image: "https://i.pravatar.cc/100?img=3",
    feedback: "I love the 24/7 availability. It's like having a tutor always by your side.",
    rating: 4.5,
    subject: "Chemistry",
    improvement: "Grades improved from C to A-",
  },
  {
    name: "Michael K.",
    image: "https://i.pravatar.cc/100?img=4",
    feedback: "Affordable and reliable homework help. Best investment I've made.",
    rating: 5,
    subject: "Biology",
    improvement: "Confidence in subject increased ",
  },
  {
    name: "Olivia P.",
    image: "https://i.pravatar.cc/100?img=5",
    feedback: "The interactive quizzes really helped reinforce my learning. Great feature!",
    rating: 4.5,
    subject: "History",
    improvement: "Retention of facts improved by 40%",
  },
  {
    name: "Ethan S.",
    image: "https://i.pravatar.cc/100?img=6",
    feedback: "I struggled with English Literature, but the analysis tools here made it much easier.",
    rating: 5,
    subject: "English Literature",
    improvement: "Essay writing skills significantly ",
  },
  {
    name: "Ava M.",
    image: "https://i.pravatar.cc/100?img=7",
    feedback: "The platform is so easy to use. I can find answers to my questions in seconds.",
    rating: 4.5,
    subject: "Computer Science",
    improvement: "Coding skills improved by 50%",
  },
  {
    name: "Noah B.",
    image: "https://i.pravatar.cc/100?img=8",
    feedback: "The AI tutor is so helpful. It explains concepts in a way that's easy .",
    rating: 5,
    subject: "Algebra",
    improvement: "Understanding of concepts improved",
  },
  {
    name: "Mia L.",
    image: "https://i.pravatar.cc/100?img=9",
    feedback: "I love the community aspect. It's like having a study group online.",
    rating: 4.5,
    subject: "Economics",
    improvement: "Understanding of concepts improved",
  },
  {
    name: "James C.",
    image: "https://i.pravatar.cc/100?img=10",
    feedback: "The platform is so easy to use. I can find answers to my questions in seconds.",
    rating: 4.5,
    subject: "Business Studies",
    improvement: "Understanding of concepts improved",
  },
  {
    name: "Liam H.",
    image: "https://i.pravatar.cc/100?img=11",
    feedback: "The platform is so easy to use. I can find answers to my questions in seconds.",
    rating: 4.5,
    subject: "Language",
    improvement: "Understanding of concepts improved",
  },
  {
    name: "Ella G.",
    image: "https://i.pravatar.cc/100?img=12",
    feedback: "The platform is so easy to use. I can find answers to my questions in seconds.",
    rating: 4.5,
    subject: "Social Science",
    improvement: "Understanding of concepts improved",
  },
  {
    name: "William S.",
    image: "https://i.pravatar.cc/100?img=13",
    feedback: "The platform is so easy to use. I can find answers to my questions in seconds.",
    rating: 4.5,
    subject: "Psychology",
    improvement: "Understanding of concepts improved",
  }
]

const TestimonialCard = ({ testimonial }) => (
  <div className="card w-80 bg-secondary/20 shadow-md m-4">
    <div className="card-body p-4">
      <div className="flex items-center mb-2">
        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
        <div className="ml-3">
          <h2 className="font-semibold">{testimonial.name}</h2>
          <p className="text-sm text-primary">{testimonial.subject}</p>
        </div>
      </div>
      <p className="text-sm mb-2">{testimonial.feedback}</p>
      <div className="flex items-center justify-between">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(testimonial.rating) ? 'text-secondary fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-primary">{testimonial.improvement}</span>
      </div>
    </div>
  </div>
)

const TestimonialMarquee = () => {
  return (
    <div className="bg-light py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What Our Students Say</h2>
        <Marquee gradient={false} speed={120}   pauseOnClick >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Marquee>
        <div className="text-center mt-8">
          <p className="text-xl font-semibold text-gray-700 mb-4">98% of students reported improved grades</p>
          <button className="btn bg-primary hover:bg-secondary text-white border-none">
            Join Our Success Story
          </button>
        </div>
      </div>
    </div>
  )
}

export default TestimonialMarquee
