export default function SaturdayMensBibleStudyWebsite() {
  const siteContent = {
    contact: {
      prayerEmail: "saturdaymensbiblestudy@gmail.com",
      generalEmail: "saturdaymensbiblestudy@gmail.com",
      adminEmail: "saturdaymensbiblestudy@gmail.com",
    },
    weeklyTopic: {
      date: "Saturday, March 14",
      speaker: "Guest Speaker",
      title: "What Does It Mean to Understand God’s Will?",
      summary:
        "Saturday morning discussion led by a knowledgeable speaker, followed by open conversation and prayer.",
      scriptures: ["Romans 12:2", "Ephesians 5:15–17"],
      questionOfTheWeek: "If God is sovereign, how do we understand human freedom?",
      discussionQuestions: [
        "Can anyone truly know God’s will?",
        "What role does wisdom play in discernment?",
        "How do we distinguish God’s will from our own desires?",
        "What does faithful obedience look like in ordinary life?",
      ],
    },
    pastTalks: [
      { date: "Feb 28", title: "Faith and Doubt" },
      { date: "Feb 21", title: "What Is Biblical Justice?" },
      { date: "Feb 14", title: "Living With Integrity" },
      { date: "Feb 7", title: "Suffering, Prayer, and Hope" },
      { date: "Jan 31", title: "Understanding God’s Will" },
      { date: "Jan 24", title: "Grace, Truth, and Humility" },
    ],
    adminNotes: [
      "Update the date for the upcoming Saturday.",
      "Enter the speaker’s name.",
      "Update the weekly topic title and short summary.",
      "Replace the scripture references for the current speaker.",
      "Change the Question of the Week.",
      "Update the four discussion questions.",
      "Move last week’s topic into Past Talks.",
    ],
  };

  const navItems = [
    "Home",
    "About",
    "Weekly Meeting",
    "This Week's Topic",
    "Past Talks",
    "Questions",
    "Prayer Requests",
    "Resources",
    "Photos",
    "Contact",
  ];

  const questions = [
    "What does the Bible really say about forgiveness?",
    "Why does God allow suffering?",
    "What does it mean to live a life of faith today?",
    "How do we know God's will?",
    "What does the Bible say about justice?",
    "What is true wisdom?",
    "How should Christians treat those who disagree with them?",
    "What does the Bible teach about integrity?",
  ];

  const resources = [
    { name: "Bible Gateway", desc: "Online Bible translations and search tools" },
    { name: "Blue Letter Bible", desc: "Study resources, commentaries, and concordances" },
    { name: "Menlo Church", desc: "Church information and ministries" },
    { name: "Recommended Books", desc: "Books for deeper reflection and discussion" },
  ];

  const photoCards = [
    "Men sharing coffee and conversation before the study begins",
    "A thoughtful Saturday morning discussion around Scripture",
    "Prayer for those facing difficult times",
    "Warm fellowship and friendship at Menlo Church",
  ];

  return (
    <div className="min-h-screen bg-[#F3F1EC] text-[#333333] scroll-smooth">
      <div className="w-full bg-[#C8A24A] py-2 text-center text-sm font-semibold text-[#1F3A5F]">
        Next Study: Saturday • 8:00 AM Pacific • Join in person at Menlo Church or online via Zoom —{" "}
        <a
          href="https://zoom.us/j/472427166"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 font-bold underline"
        >
          Join Zoom
        </a>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1F3A5F]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-serif text-white">Saturday Morning Men’s Bible Study</div>
            <div className="text-sm tracking-wide text-[#D8BE73]">Faith • Wisdom • Fellowship</div>
          </div>
          <nav className="hidden gap-5 text-sm text-white/90 xl:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="transition hover:text-[#D8BE73]"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(31,58,95,0.62), rgba(31,58,95,0.62)), url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
          <div className="max-w-3xl rounded-3xl border border-white/15 bg-black/10 p-8 shadow-2xl backdrop-blur-sm">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#E5D39C]">Menlo Church • Menlo Park</p>
            <h1 className="text-4xl font-serif leading-tight text-white md:text-6xl">
              Saturday Morning Men’s Bible Study
            </h1>
            <p className="mt-6 text-xl italic leading-relaxed text-white/95 md:text-2xl">
              A place for men who are not afraid to ask difficult questions about faith, Scripture, and life.
            </p>
            <div className="mt-6 space-y-2 text-lg text-white/90">
              <div>Saturdays at 8:00 AM</div>
              <div>Coffee and donuts provided</div>
              <div className="text-[#E5D39C]">Also available nationwide via Zoom</div>
              <div>Zoom ID: 472 427 166</div>
              <div>Meeting Name: Saturday Men&apos;s Bible Study</div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://zoom.us/j/472427166"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white px-6 py-3 text-base font-semibold text-[#1F3A5F] shadow-lg transition hover:-translate-y-0.5"
              >
                Join Zoom Meeting
              </a>
              <a
                href="#weekly-meeting"
                className="rounded-2xl bg-[#C8A24A] px-6 py-3 text-base font-semibold text-[#1F3A5F] shadow-lg transition hover:-translate-y-0.5"
              >
                Join Us This Saturday
              </a>
              <a
                href="#this-week-s-topic"
                className="rounded-2xl border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                See This Week’s Topic
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C8A24A]">What You’ll Find Here</p>
          <h2 className="mt-3 text-3xl font-serif text-[#1F3A5F] md:text-4xl">
            Thoughtful faith, honest questions, real fellowship
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Thoughtful Discussion",
              text: "Each week a speaker presents a passage of Scripture or an important question about faith and life.",
            },
            {
              title: "Honest Questions",
              text: "We welcome real questions and open conversation about what the Bible teaches and how it shapes daily life.",
            },
            {
              title: "Brotherhood",
              text: "Men support one another through prayer, encouragement, friendship, and practical care.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-3xl bg-white p-8 shadow-lg shadow-[#1F3A5F]/10">
              <h3 className="text-2xl font-serif text-[#1F3A5F]">{card.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#444]">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="relative overflow-hidden py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(31,58,95,0.72), rgba(31,58,95,0.72)), url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <p className="text-3xl font-serif italic leading-relaxed md:text-4xl">
            “Let the word of Christ dwell in you richly as you teach and admonish one another with all wisdom.”
          </p>
          <p className="mt-5 text-lg text-[#E5D39C]">— Colossians 3:16</p>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C8A24A]">About the Group</p>
            <h2 className="mt-3 text-3xl font-serif text-[#1F3A5F] md:text-4xl">
              A welcoming Saturday gathering for men
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#444]">
              Men from many backgrounds gather each Saturday morning for thoughtful discussion of the Bible,
              prayer for one another, and friendship rooted in faith. Each week a knowledgeable speaker leads a
              conversation on a passage of Scripture or a topic relevant to living faithfully today.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Open and respectful discussion",
                "Insightful weekly speakers",
                "Practical Christian living",
                "Support during life’s challenges",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white p-4 shadow">
                  <span className="font-medium text-[#1F3A5F]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              className="h-[420px] w-full rounded-[2rem] object-cover shadow-2xl"
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
              alt="Men talking together over coffee"
            />
          </div>
        </div>
      </section>

      <section id="weekly-meeting" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C8A24A]">Saturday Mornings</p>
            <h2 className="mt-3 text-3xl font-serif text-[#1F3A5F] md:text-4xl">What happens each week</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] bg-[#F8F6F0] p-8 shadow-lg">
              <div className="space-y-5 text-lg text-[#444]">
                <div className="flex items-start justify-between gap-4 border-b border-[#ddd] pb-4">
                  <span>8:00</span>
                  <span className="font-medium text-[#1F3A5F]">Coffee &amp; donuts</span>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-[#ddd] pb-4">
                  <span>8:10</span>
                  <span className="font-medium text-[#1F3A5F]">Opening prayer</span>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-[#ddd] pb-4">
                  <span>8:15</span>
                  <span className="font-medium text-[#1F3A5F]">Speaker presentation</span>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-[#ddd] pb-4">
                  <span>8:45</span>
                  <span className="font-medium text-[#1F3A5F]">Discussion and questions</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>9:15</span>
                  <span className="font-medium text-[#1F3A5F]">Prayer requests</span>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] bg-[#1F3A5F] p-8 text-white shadow-xl">
              <h3 className="text-2xl font-serif">Location</h3>
              <p className="mt-4 text-lg text-white/90">Menlo Church</p>
              <p className="text-white/80">Menlo Park, California</p>
              <div className="mt-6 rounded-3xl bg-white/10 p-5">
                <p className="text-sm uppercase tracking-wider text-[#E5D39C]">Join Online via Zoom</p>
                <p className="mt-2 text-lg">Meeting ID: 472 427 166</p>
                <p className="text-white/80">Saturday Men&apos;s Bible Study</p>
              </div>
              <div className="mt-8 rounded-3xl bg-white/10 p-5">
                <p className="text-sm uppercase tracking-wider text-[#E5D39C]">Every Saturday</p>
                <p className="mt-2 text-3xl font-serif">8:00 AM – 9:30 AM</p>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-block rounded-2xl bg-[#C8A24A] px-5 py-3 font-semibold text-[#1F3A5F]"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="this-week-s-topic" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-[#1F3A5F] p-8 text-white shadow-2xl md:p-12">
          <div className="mb-8 rounded-3xl border border-white/15 bg-white/5 p-5 md:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E5D39C]">Weekly Update Panel</p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80">
                  The website administrator only needs to update these fields each week in the{" "}
                  <span className="font-semibold text-white">siteContent.weeklyTopic</span> section at the top of the file.
                </p>
              </div>
              <div className="rounded-2xl bg-black/10 px-4 py-3 text-sm text-white/85">
                Designed for quick weekly editing.
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-[#E5D39C]">Date</div>
                <div className="mt-2 text-lg font-medium text-white">{siteContent.weeklyTopic.date}</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-[#E5D39C]">Speaker</div>
                <div className="mt-2 text-lg font-medium text-white">{siteContent.weeklyTopic.speaker}</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 md:col-span-2 xl:col-span-1">
                <div className="text-xs uppercase tracking-[0.22em] text-[#E5D39C]">Topic Title</div>
                <div className="mt-2 text-lg font-medium text-white">{siteContent.weeklyTopic.title}</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 md:col-span-2 xl:col-span-3">
                <div className="text-xs uppercase tracking-[0.22em] text-[#E5D39C]">Short Summary</div>
                <div className="mt-2 text-base leading-7 text-white/90">{siteContent.weeklyTopic.summary}</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 md:col-span-2 xl:col-span-1">
                <div className="text-xs uppercase tracking-[0.22em] text-[#E5D39C]">Scripture References</div>
                <div className="mt-2 space-y-1 text-base text-white/90">
                  {siteContent.weeklyTopic.scriptures.map((verse) => (
                    <div key={verse}>{verse}</div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 md:col-span-2 xl:col-span-2">
                <div className="text-xs uppercase tracking-[0.22em] text-[#E5D39C]">Question of the Week</div>
                <div className="mt-2 text-base leading-7 text-white/90">{siteContent.weeklyTopic.questionOfTheWeek}</div>
              </div>
            </div>
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E5D39C]">This Week’s Topic</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-3 flex flex-wrap gap-3 text-sm text-white/75">
                <span className="rounded-full bg-white/10 px-3 py-1">{siteContent.weeklyTopic.date}</span>
                <span className="rounded-full bg-white/10 px-3 py-1">Speaker: {siteContent.weeklyTopic.speaker}</span>
              </div>
              <h2 className="text-3xl font-serif md:text-4xl">{siteContent.weeklyTopic.title}</h2>
              <p className="mt-4 text-lg text-white/85">{siteContent.weeklyTopic.summary}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="text-sm uppercase tracking-wider text-[#E5D39C]">Scripture</div>
                  {siteContent.weeklyTopic.scriptures.map((verse) => (
                    <div key={verse} className="mt-2 text-lg last:mt-0">
                      {verse}
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="text-sm uppercase tracking-wider text-[#E5D39C]">Question of the Week</div>
                  <div className="mt-2 text-lg">{siteContent.weeklyTopic.questionOfTheWeek}</div>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-6 text-[#333]">
              <h3 className="text-2xl font-serif text-[#1F3A5F]">Discussion Questions</h3>
              <ul className="mt-5 space-y-4 text-base leading-7">
                {siteContent.weeklyTopic.discussionQuestions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="admin-guide" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C8A24A]">Administrator Guide</p>
            <h2 className="mt-3 text-3xl font-serif text-[#1F3A5F] md:text-4xl">
              What should be updated each week
            </h2>
          </div>
          <div className="mb-8 rounded-[2rem] bg-[#1F3A5F] p-6 text-white shadow-xl">
            <h3 className="text-2xl font-serif">Email Routing</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-[#E5D39C]">Prayer Requests</div>
                <a className="mt-2 block text-base underline" href={`mailto:${siteContent.contact.prayerEmail}`}>
                  {siteContent.contact.prayerEmail}
                </a>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-[#E5D39C]">General Contact</div>
                <a className="mt-2 block text-base underline" href={`mailto:${siteContent.contact.generalEmail}`}>
                  {siteContent.contact.generalEmail}
                </a>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-[#E5D39C]">Website Administrator</div>
                <a className="mt-2 block text-base underline" href={`mailto:${siteContent.contact.adminEmail}`}>
                  {siteContent.contact.adminEmail}
                </a>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/80">
              Change these three email addresses in <span className="font-semibold text-white">siteContent.contact</span> at the top of the file.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.adminNotes.map((note) => (
              <div key={note} className="rounded-3xl bg-[#F8F6F0] p-6 shadow-sm">
                <p className="text-lg leading-8 text-[#1F3A5F]">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="past-talks" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C8A24A]">Past Talks Archive</p>
            <h2 className="mt-3 text-3xl font-serif text-[#1F3A5F] md:text-4xl">Recent discussion topics</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {siteContent.pastTalks.map((talk) => (
              <div
                key={talk.date + talk.title}
                className="rounded-3xl border border-[#e7e2d8] bg-[#F8F6F0] p-6 shadow-sm"
              >
                <div className="text-sm uppercase tracking-wider text-[#C8A24A]">{talk.date}</div>
                <div className="mt-3 text-2xl font-serif text-[#1F3A5F]">{talk.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="questions" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C8A24A]">Big Questions Worth Asking</p>
          <h2 className="mt-3 text-3xl font-serif text-[#1F3A5F] md:text-4xl">
            Questions that shape meaningful conversations
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {questions.map((q) => (
            <div key={q} className="rounded-3xl bg-white p-6 shadow-md">
              <p className="text-lg leading-8 text-[#1F3A5F]">{q}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="prayer-requests" className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2rem] bg-[#1F3A5F] p-8 text-white shadow-2xl md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E5D39C]">Prayer Requests</p>
                <h2 className="mt-3 text-3xl font-serif md:text-4xl">
                  We believe in supporting one another through prayer
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/85">
                  Share a need, a concern, or a person you would like remembered in prayer. Prayer requests may be personal or for someone else.
                </p>
              </div>
              <form
                className="space-y-4 rounded-[1.5rem] bg-white p-6 text-[#333] shadow-lg"
                action={`mailto:${siteContent.contact.prayerEmail}`}
                method="post"
                encType="text/plain"
              >
                <input
                  name="name"
                  className="w-full rounded-2xl border border-[#ddd] px-4 py-3 outline-none"
                  placeholder="Name (optional)"
                />
                <input
                  name="email"
                  className="w-full rounded-2xl border border-[#ddd] px-4 py-3 outline-none"
                  placeholder="Email (optional)"
                />
                <textarea
                  name="prayerRequest"
                  className="h-32 w-full rounded-2xl border border-[#ddd] px-4 py-3 outline-none"
                  placeholder="Prayer request"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-[#C8A24A] px-5 py-3 font-semibold text-[#1F3A5F]"
                >
                  Email Prayer Request
                </button>
                <p className="text-sm leading-6 text-[#666]">
                  This button opens your email app and sends the request to{" "}
                  <a className="font-medium text-[#1F3A5F] underline" href={`mailto:${siteContent.contact.prayerEmail}`}>
                    {siteContent.contact.prayerEmail}
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="resources" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C8A24A]">Resources</p>
          <h2 className="mt-3 text-3xl font-serif text-[#1F3A5F] md:text-4xl">Helpful Bible study tools</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {resources.map((r) => (
            <div key={r.name} className="rounded-3xl bg-white p-6 shadow-lg shadow-[#1F3A5F]/10">
              <h3 className="text-2xl font-serif text-[#1F3A5F]">{r.name}</h3>
              <p className="mt-4 leading-7 text-[#444]">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="photos" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C8A24A]">Photos</p>
            <h2 className="mt-3 text-3xl font-serif text-[#1F3A5F] md:text-4xl">A glimpse of the atmosphere</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {photoCards.map((caption, idx) => (
              <div key={caption} className="overflow-hidden rounded-[2rem] bg-[#F8F6F0] shadow-lg">
                <img
                  className="h-56 w-full object-cover"
                  src={`https://images.unsplash.com/photo-${
                    idx % 2 === 0 ? "1517457373958-b7bdd4587205" : "1522202176988-66273c2fd55f"
                  }?auto=format&fit=crop&w=900&q=80`}
                  alt={caption}
                />
                <div className="p-5 text-base leading-7 text-[#1F3A5F]">{caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-[#1F3A5F] p-8 text-white shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E5D39C]">Contact</p>
            <h2 className="mt-3 text-3xl font-serif md:text-4xl">You’re welcome to join us</h2>
            <p className="mt-5 text-lg leading-8 text-white/85">
              Whether you are deeply familiar with the Bible or simply curious, you are welcome. Men of all ages and backgrounds gather to learn, listen, and grow together.
            </p>
            <div className="mt-8 space-y-3 text-lg">
              <div>Saturday Morning Men’s Bible Study</div>
              <div>Menlo Church – Menlo Park</div>
              <div>Saturdays at 8:00 AM</div>
              <div>
                General inquiries:{" "}
                <a className="underline" href={`mailto:${siteContent.contact.generalEmail}`}>
                  {siteContent.contact.generalEmail}
                </a>
              </div>
              <div>
                Prayer requests:{" "}
                <a className="underline" href={`mailto:${siteContent.contact.prayerEmail}`}>
                  {siteContent.contact.prayerEmail}
                </a>
              </div>
            </div>
          </div>
          <form
            className="rounded-[2rem] bg-white p-8 shadow-lg shadow-[#1F3A5F]/10"
            action={`mailto:${siteContent.contact.generalEmail}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="name"
                className="rounded-2xl border border-[#ddd] px-4 py-3 outline-none"
                placeholder="Name"
              />
              <input
                name="email"
                className="rounded-2xl border border-[#ddd] px-4 py-3 outline-none"
                placeholder="Email"
              />
            </div>
            <input
              name="subject"
              className="mt-4 w-full rounded-2xl border border-[#ddd] px-4 py-3 outline-none"
              placeholder="Subject"
            />
            <textarea
              name="message"
              className="mt-4 h-40 w-full rounded-2xl border border-[#ddd] px-4 py-3 outline-none"
              placeholder="Message"
            />
            <button
              type="submit"
              className="mt-4 rounded-2xl bg-[#C8A24A] px-6 py-3 font-semibold text-[#1F3A5F]"
            >
              Email Message
            </button>
            <p className="mt-4 text-sm leading-6 text-[#666]">
              This button opens your email app and sends your message to{" "}
              <a className="font-medium text-[#1F3A5F] underline" href={`mailto:${siteContent.contact.generalEmail}`}>
                {siteContent.contact.generalEmail}
              </a>
              .
            </p>
          </form>
        </div>
      </section>

      <footer className="bg-[#1F3A5F] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-serif">Saturday Morning Men’s Bible Study</div>
            <div className="mt-1 text-white/75">Menlo Church • Menlo Park • Saturdays at 8:00 AM</div>
          </div>
          <div className="text-sm uppercase tracking-[0.2em] text-[#D8BE73]">Faith • Wisdom • Fellowship</div>
        </div>
      </footer>
    </div>
  );
}
