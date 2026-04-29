export function Team() {
  const leadership = [
    {
      name: "Michael Rodriguez",
      title: "Chief Executive Officer",
      bio: "With over 20 years in financial services, Michael leads Drift Financial's vision of transparent, client-first lending.",
      image: "/image/team-1.jpg"
    },
    {
      name: "Sarah Chen",
      title: "Chief Operating Officer",
      bio: "Sarah brings 15 years of operational excellence, ensuring every client receives world-class service.",
      image: "/image/team-2.jpg"
    },
    {
      name: "David Thompson",
      title: "Chief Technology Officer",
      bio: "David drives our digital innovation, making financial services simple and accessible through technology.",
      image: "/image/team-3.jpg"
    },
    {
      name: "Jennifer Martinez",
      title: "Chief Financial Officer",
      bio: "Jennifer's expertise in financial strategy ensures competitive rates and sustainable growth for Drift Financial.",
      image: "/image/team-4.jpg"
    }
  ];

  const departments = [
    {
      name: "Loan Specialists",
      description: "Our dedicated loan officers work closely with you to find the perfect financing solution for your unique needs.",
      icon: "💼"
    },
    {
      name: "Underwriting Team",
      description: "Expert analysts who ensure fair, fast approval processes while maintaining the highest standards.",
      icon: "✅"
    },
    {
      name: "Customer Success",
      description: "Always available to answer questions and provide support throughout your loan journey and beyond.",
      icon: "🤝"
    },
    {
      name: "Technology & Innovation",
      description: "Building cutting-edge tools to make your financial experience seamless and secure.",
      icon: "💻"
    }
  ];

  return (
    <>
      <section className="bg-[var(--drift-navy)] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl mb-6">
            Meet the team behind your success.
          </h1>
          <div className="h-1 w-32 bg-[var(--drift-gold)] mx-auto"></div>
          <p className="text-[var(--drift-silver)] text-lg mt-6 max-w-2xl mx-auto">
            Our experienced professionals are dedicated to guiding you through every step of your financial journey with expertise and care.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[var(--light-gold)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[var(--drift-navy)] text-center mb-12">Leadership Team</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-[var(--drift-navy)] mb-1">{member.name}</h4>
                  <p className="text-[var(--drift-gold)] text-sm mb-3">{member.title}</p>
                  <p className="text-[var(--deep-navy)] text-sm">{member.bio}</p>
                </div>
                <div className="h-1 w-0 group-hover:w-full bg-[var(--drift-gold)] transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[var(--drift-navy)] text-center mb-4">Our Departments</h2>
          <p className="text-[var(--deep-navy)] text-center mb-12 max-w-2xl mx-auto">
            Every team at Drift Financial plays a crucial role in delivering exceptional service and results for our clients.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[var(--drift-navy)] flex items-center justify-center text-3xl">
                  {dept.icon}
                </div>
                <div>
                  <h4 className="text-[var(--drift-navy)] mb-2">{dept.name}</h4>
                  <p className="text-[var(--deep-navy)] text-sm">{dept.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[var(--drift-navy)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-6">Join Our Team</h2>
              <p className="text-[var(--drift-silver)] mb-6 text-lg">
                We're always looking for talented individuals who share our passion for helping clients achieve their financial goals.
              </p>
              <p className="text-[var(--drift-silver)] mb-8">
                If you're driven, client-focused, and want to make a real difference in people's lives, we'd love to hear from you.
              </p>
              <a href="#careers" className="inline-block bg-[var(--drift-gold)] text-[var(--deep-navy)] px-8 py-3 rounded-full uppercase tracking-wider hover:shadow-lg transition-all">
                View Openings
              </a>
            </div>

            <div className="flex justify-center">
              <img
                src="/image/about-team.jpg"
                alt="Team collaboration"
                className="w-full max-w-lg rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
