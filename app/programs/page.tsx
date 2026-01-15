import Link from 'next/link'

export default function Programs() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Programs</h1>

      {/* Micro-Grants */}
      <section className="mb-12">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Micro-Grants</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our micro-grant program funds student-led initiatives that challenge linguistic imperialism and build 
            alternatives to colonial language hierarchies. We prioritize projects that center decolonial perspectives, 
            cross-cultural solidarity, and grassroots organizing.
          </p>
          <div className="space-y-3 text-lg text-gray-700">
            <p>
              <strong>Pilot fund:</strong> $10,000/year (placeholder — proof-of-concept phase)
            </p>
            <p>
              <strong>Typical award:</strong> $250–$750 per project
            </p>
            <p className="font-semibold mb-2">Grants can support:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Printing and materials for events, workshops, and educational campaigns</li>
              <li>Food and space rental for community gatherings and study sessions</li>
              <li>Honoraria for speakers, facilitators, and guest lecturers</li>
              <li>Travel expenses for attending Esperanto congresses or activist gatherings</li>
              <li>Collaboration with other student organizations and language clubs</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4 italic">
              Note: This is a proof-of-concept. Funding amounts and availability are placeholders as we pilot the program.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Ambassadors */}
      <section className="mb-12">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Campus Ambassadors</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Who They Are</h3>
              <p>
                Campus Ambassadors are student organizers who lead the Lingva Solidare movement on their campuses. 
                They're activists, linguists, and internationalists committed to building alternatives to colonial 
                language systems through grassroots organizing and academic engagement.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What They Do</h3>
              <p>
                Ambassadors organize events, facilitate learning sessions, build coalitions with other student groups, 
                and connect their campus community with the global Esperanto movement. They serve as the primary point 
                of contact between their chapter and the broader Lingva Solidare network.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What They Get</h3>
              <p>
                Ambassadors receive training in organizing, access to resources and materials, priority consideration 
                for micro-grants, networking opportunities with activists and scholars worldwide, and support for 
                professional development in linguistics, IR, and related fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Partnerships */}
      <section className="mb-12">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Academic Partnerships</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {/* TODO: Add details about faculty partnerships, research collaborations, and curriculum integration */}
            We're building partnerships with faculty and departments interested in linguistic justice, constructed languages, 
            and decolonial approaches to language education. These partnerships support student research, curriculum development, 
            and academic events that explore Esperanto within critical frameworks of language policy and international relations.
          </p>
          <p className="text-sm text-gray-600 mt-4 italic">
            (Placeholder — program details to be developed)
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 text-center bg-accent rounded-2xl p-8 text-white">
        <p className="text-xl font-semibold mb-6">
          Interested in piloting these programs on campus?
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  )
}
