import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community | Franchise Now',
  description: 'Join a community of AI operators, business owners, and automation specialists. Real examples, continued learning, and staying current with AI workforce development.',
}

export default function CommunityPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-brand-100 text-brand-900 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Connect & Learn
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Join the Community
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            A place for continued learning, real examples, and staying current with AI workforce development. Connect with other operators, share wins, and get support.
          </p>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What You'll Find Inside</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Real Examples</h3>
              <p className="text-gray-600">See how other businesses are deploying AI operators. Case studies, workflow breakdowns, and live demos.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Continued Learning</h3>
              <p className="text-gray-600">New training, updated tactics, and deep dives into advanced operator configurations as the platform evolves.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Direct Support</h3>
              <p className="text-gray-600">Get your questions answered by the Franchise Now team and connect with other AI operators building real systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO ITS FOR */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-8">Who Should Join</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "You've taken the AI Operator Course and want to go deeper",
              "You're actively building AI operators and want feedback",
              "You're considering hiring us and want to see real examples first",
              "You want to stay current on AI workforce trends and tactics",
              "You're looking for collaboration or partnership opportunities",
              "You have questions that aren't covered in the course",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4">
                <span className="text-brand-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN OPTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Where to Connect</h2>
            <p className="text-gray-600 mt-4">Choose the platform that works best for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Discord */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Discord Community</h3>
              <p className="text-gray-600 mb-6">
                Real-time chat, voice channels, and organized discussions. Best for quick questions and daily engagement.
              </p>
              <a 
                href="https://discord.gg/ai-operator-blueprint" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Join on Discord
              </a>
            </div>
            {/* Skool - placeholder */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Skool Group</h3>
              <p className="text-gray-600 mb-6">
                Course-based community with structured learning paths. Best for organized curriculum and milestone tracking.
              </p>
              <button 
                disabled
                className="bg-gray-300 text-gray-500 font-bold px-6 py-3 rounded-lg cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE CTA */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Haven't Taken the Course Yet?
          </h2>
          <p className="text-brand-100 text-lg mb-8">
            The AI Operator Course is the best foundation for getting value from this community. Start there, then join the conversation.
          </p>
          <Link 
            href="/get-access"
            className="inline-block bg-white text-brand-700 hover:bg-gray-50 font-bold px-10 py-4 rounded-lg transition-colors text-lg"
          >
            Start Free With the Course
          </Link>
        </div>
      </section>

      {/* IMPLEMENTATION CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading">Ready to Implement?</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            If you want us to build and install your AI workforce directly, book a consultation. We'll map out exactly what operators would work best for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/noah-franchisenow/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Book a 15-Minute Consultation
            </a>
            <Link 
              href="/get-access"
              className="btn-secondary text-lg"
            >
              Not Ready? Start With the Free Course
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
