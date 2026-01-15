import Link from 'next/link'

export default function StartAClub() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Start a Club</h1>

      {/* Quick Start */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Start</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Building a Lingva Solidare chapter on your campus is a direct action against linguistic imperialism. 
          Start by organizing with like-minded students who recognize that language justice is social justice.
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
          <li>Find 3–5 students committed to linguistic decolonization and cross-cultural solidarity</li>
          <li>Talk to your student organizations office about recognition requirements</li>
          <li>Schedule regular meetings to build community and plan events</li>
          <li>Connect with faculty who support anti-colonial language education</li>
          <li>Reach out to existing language clubs for potential collaboration</li>
        </ul>
      </section>

      {/* Steps to Get Recognized */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Steps to Get Recognized</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Official recognition gives your club access to campus resources, funding, and meeting spaces. 
          The process varies by institution, but typically includes:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700 ml-4">
          <li>Draft a constitution that outlines your club's mission, structure, and commitment to linguistic justice</li>
          <li>Identify a faculty advisor who understands the political and academic significance of Esperanto</li>
          <li>Complete required paperwork with your student activities office</li>
          <li>Submit membership roster and officer information</li>
          <li>Attend any mandatory orientation sessions for new student organizations</li>
        </ol>
      </section>

      {/* What We Provide */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Provide</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          New clubs receive comprehensive support to help you build a movement on your campus:
        </p>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span><strong>Micro-grants</strong> ($250–$750) for events, materials, and initiatives that advance linguistic justice</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span><strong>Slide deck</strong> for presentations on Esperanto, linguistic imperialism, and decolonial language politics {/* TODO: Add link to slide deck PDF */}</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span><strong>Recruitment materials</strong> including posters, social media templates, and outreach guides {/* TODO: Add links to recruitment assets */}</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span><strong>Global network</strong> connecting your chapter with activists, scholars, and organizers worldwide</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sample Semester Plan */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sample Semester Plan</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Here's a framework for building momentum throughout the semester. Adapt it to your campus context and priorities.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">Week</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">Theme</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">Activity</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">1–2</td>
                <td className="px-4 py-3 text-sm text-gray-700">Foundation</td>
                <td className="px-4 py-3 text-sm text-gray-700">Organizational meeting, mission discussion, Esperanto basics</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700">3–4</td>
                <td className="px-4 py-3 text-sm text-gray-700">Linguistic Justice</td>
                <td className="px-4 py-3 text-sm text-gray-700">Workshop on language imperialism and decolonial alternatives</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">5–6</td>
                <td className="px-4 py-3 text-sm text-gray-700">Community Building</td>
                <td className="px-4 py-3 text-sm text-gray-700">Conversation hours, language exchange, cultural events</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700">7–8</td>
                <td className="px-4 py-3 text-sm text-gray-700">Academic Engagement</td>
                <td className="px-4 py-3 text-sm text-gray-700">Panel discussion with faculty on constructed languages and IR</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">9–10</td>
                <td className="px-4 py-3 text-sm text-gray-700">Outreach</td>
                <td className="px-4 py-3 text-sm text-gray-700">Collaboration with other language clubs, campus-wide event</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700">11–12</td>
                <td className="px-4 py-3 text-sm text-gray-700">International Connection</td>
                <td className="px-4 py-3 text-sm text-gray-700">Virtual meetup with global Esperanto activists and speakers</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">13–14</td>
                <td className="px-4 py-3 text-sm text-gray-700">Reflection & Planning</td>
                <td className="px-4 py-3 text-sm text-gray-700">Semester review, next steps, micro-grant applications</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700">15–16</td>
                <td className="px-4 py-3 text-sm text-gray-700">Celebration</td>
                <td className="px-4 py-3 text-sm text-gray-700">End-of-semester gathering, showcase of achievements</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 text-center">
        <button
          disabled
          className="px-8 py-3 bg-gray-300 text-gray-500 font-semibold rounded-lg cursor-not-allowed"
        >
          Download Club Starter Packet (coming soon)
        </button>
        <p className="text-sm text-gray-600 mt-2">
          {/* TODO: Add PDF download link when available */}
          Starter packet will include constitution template, recruitment materials, and event planning guides.
        </p>
      </div>
    </div>
  )
}
