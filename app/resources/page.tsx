export default function Resources() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Resources</h1>

      {/* Learn Esperanto */}
      <section className="mb-12">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Learn Esperanto</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            These external resources can help you begin learning Esperanto. We recommend starting with free, 
            accessible materials that don't require institutional access.
          </p>
          <ul className="space-y-2 text-lg text-gray-700">
            <li>
              <a href="#" className="text-accent hover:underline">lernu.net</a> — Free online courses and community {/* TODO: Add actual link */}
            </li>
            <li>
              <a href="#" className="text-accent hover:underline">Duolingo Esperanto</a> — Gamified language learning {/* TODO: Add actual link */}
            </li>
            <li>
              <a href="#" className="text-accent hover:underline">Esperanto USA</a> — Learning resources and materials {/* TODO: Add actual link */}
            </li>
            <li>
              <a href="#" className="text-accent hover:underline">YouTube channels</a> — Video lessons and conversation practice {/* TODO: Add actual links */}
            </li>
            <li>
              <a href="#" className="text-accent hover:underline">Esperanto Reddit</a> — Community support and Q&A {/* TODO: Add actual link */}
            </li>
          </ul>
        </div>
      </section>

      {/* Club Starter Kit */}
      <section className="mb-12">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Club Starter Kit</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Everything you need to launch and sustain a Lingva Solidare chapter on your campus.
          </p>
          <ul className="space-y-2 text-lg text-gray-700">
            <li>
              <a href="#" className="text-accent hover:underline">Constitution template</a> {/* TODO: Add PDF link */}
            </li>
            <li>
              <a href="#" className="text-accent hover:underline">Slide deck</a> — Presentation on Esperanto and linguistic justice {/* TODO: Add PDF link */}
            </li>
            <li>
              <a href="#" className="text-accent hover:underline">Posters</a> — Recruitment and event promotion materials {/* TODO: Add image/PDF links */}
            </li>
            <li>
              <a href="#" className="text-accent hover:underline">Email templates</a> — Outreach to students, faculty, and organizations {/* TODO: Add document links */}
            </li>
          </ul>
        </div>
      </section>

      {/* Event Ideas */}
      <section className="mb-12">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Event Ideas</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Build community and advance the movement through these event formats:
          </p>
          <ul className="space-y-2 text-lg text-gray-700 list-disc list-inside ml-4">
            <li>Esperanto conversation hours and language practice sessions</li>
            <li>Workshops on linguistic imperialism and decolonial language politics</li>
            <li>Academic panels with faculty on constructed languages and IR theory</li>
            <li>Film screenings and discussions about language, culture, and power</li>
            <li>Collaborative events with other language clubs and cultural organizations</li>
            <li>Virtual meetups with Esperanto speakers and activists worldwide</li>
            <li>Study groups for beginners and intermediate learners</li>
            <li>Reading groups on language policy, linguistic justice, and internationalism</li>
            <li>Campus-wide language fair featuring Esperanto alongside other languages</li>
            <li>Social events that combine language learning with community building</li>
          </ul>
        </div>
      </section>

      {/* For Faculty */}
      <section className="mb-12">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">For Faculty</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Resources for integrating Esperanto and linguistic justice into your teaching and research:
          </p>
          <ul className="space-y-2 text-lg text-gray-700">
            <li>
              <a href="#" className="text-accent hover:underline">Sample syllabi</a> — Course outlines for linguistics, IR, and global studies {/* TODO: Add PDF links */}
            </li>
            <li>
              <a href="#" className="text-accent hover:underline">Lecture materials</a> — Slides and notes on constructed languages and language policy {/* TODO: Add links */}
            </li>
            <li>
              <a href="#" className="text-accent hover:underline">Research collaboration</a> — Opportunities to partner with students on projects {/* TODO: Add contact info */}
            </li>
            <li>
              <a href="#" className="text-accent hover:underline">Academic papers</a> — Readings on Esperanto, linguistic justice, and decolonial approaches {/* TODO: Add bibliography/links */}
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
