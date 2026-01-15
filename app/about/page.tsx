export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About</h1>

      {/* TODO: Add mission statement and founding story */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lingva Solidare is a student movement dedicated to advancing linguistic decolonization through Esperanto. 
          We recognize that dominant global languages—English, French, Spanish, Mandarin—are artifacts of colonial 
          expansion and ongoing imperial power. Our mission is to support student-led initiatives that use Esperanto 
          as a tool for building alternatives: a language that belongs to no empire, requires no cultural assimilation, 
          and centers equitable communication across borders.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          We're not just learning a language; we're organizing for linguistic justice. Esperanto offers a practical 
          framework for challenging the colonial logic that privileges certain languages and marginalizes others. Through 
          campus clubs, events, and academic engagement, we're building a movement that connects language learning with 
          anti-colonial politics and cross-cultural solidarity.
        </p>
      </section>

      {/* TODO: Add information about the Esperantic Studies Foundation partnership */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Foundation</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lingva Solidare is a proof-of-concept initiative supported by the Esperantic Studies Foundation. 
          We're piloting programs on select campuses to test models for student engagement, micro-grant distribution, 
          and community building around linguistic justice. This experimental phase allows us to develop frameworks 
          that center student autonomy, anti-colonial values, and grassroots organizing.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          As a proof-of-concept, we're learning what works, what doesn't, and how to build sustainable structures 
          that support student-led linguistic decolonization work. Your participation helps shape the future of this movement.
        </p>
      </section>

      {/* TODO: Add team/leadership information */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Team</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lingva Solidare is led by students, for students. Our team includes campus ambassadors, event organizers, 
          and program coordinators who are committed to linguistic justice and anti-colonial organizing. We operate 
          with horizontal leadership structures that prioritize student autonomy and collective decision-making.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Faculty advisors and the Esperantic Studies Foundation provide guidance and support, but students drive 
          the vision, strategy, and day-to-day organizing. This is a movement built from the ground up, not imposed 
          from above.
        </p>
      </section>

      {/* TODO: Add values or principles section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our work is grounded in principles of linguistic justice, anti-colonialism, and student autonomy:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
          <li><strong>Linguistic Decolonization:</strong> We challenge the colonial logic embedded in dominant language systems and build alternatives that center equity.</li>
          <li><strong>Student Autonomy:</strong> Students lead this movement. We prioritize student voices, decisions, and organizing over institutional control.</li>
          <li><strong>Cross-Cultural Solidarity:</strong> We build connections across borders without requiring assimilation to dominant cultures or languages.</li>
          <li><strong>Academic Rigor:</strong> We engage seriously with linguistics, language policy, and international relations while maintaining activist commitments.</li>
          <li><strong>Grassroots Organizing:</strong> Change comes from below. We build power through collective action, not top-down programs.</li>
        </ul>
      </section>
    </div>
  )
}
