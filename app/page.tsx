import Link from 'next/link'

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-6">
          A Global Language Shouldn't Be a Colonial Artifact.
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
          Lingva Solidare is a student movement using Esperanto for cross-cultural connection and linguistic equity. 
          We're building a network of campus clubs, supporting student-led initiatives, and creating spaces where 
          language learning meets anti-colonial organizing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/start-a-club"
            className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
          >
            Start a Club
          </Link>
          <Link
            href="/programs"
            className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
          >
            Apply for Microgrants
          </Link>
          <Link
            href="/programs"
            className="px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-colors"
          >
            Join Events
          </Link>
        </div>
      </section>

      {/* Why Esperanto? Section */}
      <section className="py-16 sm:py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Esperanto?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Neutral & Unowned</h3>
            <p className="text-gray-700">
              Esperanto belongs to no single nation or empire. It's a tool for equitable communication 
              without the historical violence of colonial languages like English, French, or Spanish.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast to Learn</h3>
            <p className="text-gray-700">
              For English speakers, Esperanto offers a decolonial path to multilingualism. 
              Its regular grammar and logical structure make it accessible without requiring 
              years of study or institutional privilege.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Active Community</h3>
            <p className="text-gray-700">
              Join a global network of speakers, learners, and activists committed to linguistic justice. 
              From online meetups to international congresses, the community centers anti-colonial values.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Relevance</h3>
            <p className="text-gray-700">
              Essential for students of linguistics, international relations, and global studies. 
              Explore language policy, constructed languages, and decolonial approaches to communication.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 sm:py-20 bg-gray-50 rounded-2xl px-6 sm:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Micro-grants</h3>
            <p className="text-4xl font-bold text-accent mb-3">$250–$750</p>
            <p className="text-gray-700">
              Funding for student-led projects, events, and initiatives that challenge linguistic imperialism 
              and build alternatives to colonial language hierarchies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Campus Ambassador Roles</h3>
            <p className="text-gray-700 mb-3">
              Lead your campus chapter, organize events, and connect with the global Lingva Solidare network. 
              Build organizing skills while advancing linguistic decolonization.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Events</h3>
            <p className="text-gray-700">
              Online workshops, in-person meetups, and international gatherings. Learn Esperanto, 
              discuss language policy and imperialism, and connect with activists worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Who We're For Section */}
      <section className="py-16 sm:py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Who We're For</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2"></div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Students</h3>
              <p className="text-gray-700">
                Whether you're interested in linguistics, anti-colonial organizing, or simply want to learn a language 
                that isn't tied to empire, Lingva Solidare welcomes you. We're building a movement for linguistic justice.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2"></div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Faculty</h3>
              <p className="text-gray-700">
                Support student organizing, integrate Esperanto and linguistic justice into your curriculum, or collaborate 
                on research related to constructed languages, language policy, and decolonial communication.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2"></div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Language Clubs</h3>
              <p className="text-gray-700">
                Existing language clubs can partner with Lingva Solidare to host events, share resources, 
                and explore Esperanto as part of a broader commitment to multilingualism and anti-colonial education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 sm:py-20">
        <div className="bg-accent rounded-2xl p-8 sm:p-12 text-center text-white">
          <p className="text-xl sm:text-2xl font-semibold mb-6">
            Want to pilot Lingva Solidare on your campus? This is a proof-of-concept. Get in touch.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
