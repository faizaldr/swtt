# Full Stack Testing (for Raymond - Gayathri Mohan

Praise forFull Stack Testing
It’s surprisingly difficult to find truly comprehensive material on
some pretty common software development concerns, including
full stack testing. This book fills that gap witha comprehensive,
thorough treatment of all aspects of this nuanced set of practices.
An indispensableguide for teams wrestling with how best to
handle testing.
—Neal Ford, author ofFundamentals of Software
ArchitectureandSoftware Architecture: The Hard
Parts
A comprehensive look at modern testing practices in the AI age,
grounded in engineering discipline, continuous delivery, and
product complexity, this book brings shift-left thinking and AI-
enabled testing together into a coherent, practical playbookfor
building qualityinto modern software delivery from day one.
—Steve Smith, technology leader and author of
Measuring ContinuousDeliveryandBuild Quality In
If you’ve ever been told to “just add AI to your testing” with zero
guidance on how,this bookis your lifeline. Gayathri Mohan cuts
through the hype with hard-won,practical wisdomthat actually
translates to better software quality. This secondedition earnsits
place on every engineer’s shelf by treating AI as what itactually
is: a powerfulcollaborator that still needs adult supervision.
—Kshira Saagar, Chief Data and AI Officer, AVIV
Group
It’s rare to find a book that evolves as fast as the field it covers.
Gayathri Mohan delivers something the AI hype machine rarely
does: honest, structured, practical guidanceon where AI
genuinely helps in testing and, critically, where it doesn’t.
—Kamal Kishore, Chief AI and Technology Officer,
Centricity

In an age of AI-generated code, Mohan makes the case that
quality is a systems discipline, not a tools problem. The ten-skill
framework here, grounded in shift-left principlesand refreshingly
honest about AI’s limits, is the most complete, practical guide to
full-stack testingI’ve encountered. This is the guide I wish every
team had.
—Ashok Subramanian, Chief Technology Officer,
Taylor & Francis

Full Stack Testing
SECOND EDITION
A Practical Guide for Delivering High Quality Software
in the Age of AI
GayathriMohan
NewforewordbySamNewman

Full Stack Testing
byGayathriMohan
Copyright © 2026 Gayathri Mohan. All rights reserved.
Published byO’Reilly Media, Inc., 141 Stony Circle, Suite 195, Santa
Rosa, CA 95401.
O’Reilly books may be purchased for educational, business, or sales
promotional use. Online editions are also available for most titles
(https://oreilly.com). For more information, contact our
corporate/institutional sales department: 800-998-9938 or
corporate@oreilly.com.
Acquisitions Editor:Louise Corrigan
Development Editor:Sarah Grey
Production Editor:Elizabeth Faerm
Copyeditor:Liz Wheeler
Proofreader:Andrea Schein
Indexer:WordCo Indexing Services, Inc.
Cover Designer:Susan Brown
Cover Illustrator:Karen Montgomery
Interior Designer:David Futato
Interior Illustrator:Kate Dullea
June 2022:First Edition
July 2026:Second Edition

Revision History for the Second Edition
2026-07-09:First Release
Seehttps://oreilly.com/catalog/errata.csp?isbn=9798341636927for
release details.
The O’Reilly logo is a registered trademark of O’Reilly Media, Inc.
Full Stack Testing, the cover image, and related trade dress are
trademarks of O’Reilly Media, Inc.
The views expressed in this work are those of the author and do not
represent the publisher’s views. While the publisher and the author
have used good faith efforts to ensure that the information and
instructions contained in this work are accurate, the publisher and
the author disclaim all responsibility for errors or omissions,
including without limitation responsibility for damages resulting from
the use of or reliance on this work. Use of the information and
instructions contained in this work is at your own risk. If any code
samples or other technology this work contains or describes is
subject to open source licenses or the intellectual property rights of
others, it is your responsibility to ensure that your use thereof
complies with such licenses and/or rights.
979-8-341-63692-7
[LSI]

Foreword to the Second Edition
The world seems to have gone a bit crazy. I don’t mean in the
geopolitical sense (although there is a big case for that), I mean in
the context of software delivery. The emergence of AI-assisted
coding tools has created opportunity, confusion, angst, and
uncertainty.
Against that backdrop, being able to be more confident about what
we are doing is very important. In the rough seas of our industry, we
need some calm islands to which to cling while the storm rages
around us. So whilst we introduce more nondeterminism into our
lives through LLMs, it becomes even more important to make sure
that we are testing our systems effectively.
This book seamlessly blends successful ideas from the recent past,
such as the testing approaches pioneered as part of Agile software
delivery methods, with the new realities of today. The fact that this
means that concepts such as “three amigos” get reintroduced to a
new audience is incredibly satisfying to someone like me, who is
showing more than a few grey hairs these days. At the same time, I
learned a huge amount from reading this book. I’m incredibly
pleased that its focus goes well beyond automated functional testing
to be “full-stack” in many senses of the word.
Covering a breadth of skills, as befits the title, you’ll find here
coverage of everything from manual testing to security testing,
performance testing to tuning your CI test suites. Across all of this is
the notion of testing as being a continual practice, rather than
transactional. It also deals with the realities of shifting testing left, as
Dr. Rebecca Parsons highlighted in her eloquent foreword to the first
edition of this book.
Rather than assuming that everyone is using cutting-edge, here-
today-gone-tomorrow tools, the book uses a blend of traditional and
AI-driven testing tools. This, as Gayathri Mohan points out, is likely
the norm in most organizations. That is another sense in which this

book is very practical. It’s not just the hands-on exercises featured in
every chapter, it’s also the realistic assessment of what is possible
for most of us today.
Amidst the hype and exaggeration and the vague promises of what
AI might help us do, maybe, perhaps in some near future, having a
book with some real, practical hands-on tips of what you can do
right now is key. That’s exactly what Gayathri has delivered with this
book. In the turbulence of the current time, books likeFull Stack
Testingare islands of calm amidst an ocean of uncertainty.
Sam Newman
Author ofBuilding Microservices,Monolith to Microservices,
andBuilding Resilient Distributed Systems
Kent, May 2026

Foreword to the First Edition
The termshift left, which refers to performing an activity earlier or
to the left along a timeline, is becoming increasingly common. We
hear about why it is important to shift left design, security, and,
most relevant here, testing. Bringing testing forward in the software
development life cycle decreases the cost and complexity of fixing
bugs because they are found closer to when they were created,
which establishes more of a context for what could have caused
things to go wrong. When we think about things like performance
testing, we can start looking for trends before we start actually
worrying about the specific values. This again allows us to spot
when performance worsens significantly. We can then explore if this
means that we’ve hit something that is fundamentally less
performant or if perhaps we just made a mistake that caused the
performance degradation.
While shifting testing left means tests are run against software that
is known to be incomplete and subject to change, the enhanced
ability to fix issues that arise far outweighs the costs of continuous
testing, particularly when a significant portion of the test suite is
automated. While some tests and some styles of testing, like
exploratory testing, need to be done manually, tests that can be
automated should be.
There are all kinds of testing to be done, and the title of Gayathri’s
book is apt. Full stack testing gives a comprehensive overview of
testing across the entire stack, looking at performance, UI, contract,
end-to-end functional, unit testing, and even accessibility testing.
The question for many involved in testing revolves around knowing
how to do testing across the full stack. That’s where this book comes
in. While there are many books about testing and even about agile
testing, which does advocate for shifting testing left, Gayathri’s book
looks in-depth at each aspect of testing a modern application. The
book describes the issues that arise in each aspect of testing and
looks at principles and strategies that apply to that aspect of testing.

Each of these sections then includes a set of hands-on exercises that
demonstrate concretely how to actually do such testing. Now, I
recognize the specific exercises and the tools included in the
exercises may change and evolve in time. However, theseexercises
are of value even if the tools do change, because they show how to
use tools to construct the right kinds of tests. The exercises make
the testing approach concrete; the tools provide the ability to
experiment on tests of that nature. The tools will inevitably continue
to evolve, but the testing strategies you will learn will have a much
longer shelf life.
The range of testing approaches in Gayathri’s book is broad,
encompassing static analysis, data testing strategies, and even
exploratory testing. Given the growing complexity of our software
systems, the role of exploratory testing becomes increasingly
important. In addition, security testing is given its own chapter, as
we all know how much more vulnerable our systems are to hackers.
Accessibility testing also has its chapter, describing how we can
make our systems easier to use, even for those who are disabled.
Each aspect of testing requires looking at what kinds of things might
go wrong and then creating a testing strategy to uncover things that
have gone wrong. A properly constructed test suite across the range
of test types provides the safety net that allows us to evolve our
software systems with confidence. Gayathri’s book, based on her
experience testing different types of systems, guides software
professionals in creating the proper testing strategies and suites.
Dr. Rebecca Parsons
Coauthor ofBuilding Evolutionary Architecturesand former
CTO at Thoughtworks

Preface
If you’re in the software industry, it is highly likely that you have
worn the testing hat at least once, irrespective of your role. That’s
because testing is such an integral aspect of software engineering,
woven into every stage of the software delivery cycle. Especially in
today’s context, where AI coding tools churn code at a rapid pace,
testing for quality has become more crucial than ever before.
Testing, like other software disciplines, has evolved to incorporate
new practices, frameworks, methodologies, and tools over the years.
Manual testing has evolved into manual exploratory testing, while
the rise of automated testing combined with continuous integration
and continuous delivery (CI/CD) practices has greatly increased the
value derived from testing. Today, agentic AI tools claim to speed
both manual and automated testing by 70% to 80%.
When moving beyond functional use cases, manual and automated
testing of cross-functional requirements such as performance,
security, reliability, and accessibility ensures holistic feedback on
quality and allows you to continuously deliver high-quality software.
This is why full stack testing is a desirable specialization in the
industry. With AI testing agents offering to automate tasks across
both functional and cross-functional requirement testing, this holistic
full stack testing knowledge, including how to architect and
orchestrate the AI testing agent, becomes the need of the hour. I
presume you’re here because you want to transpile into a full stack
tester so you can deliver high-quality software at work. First, kudos
on your commitment; second, welcome aboard!

WhyIWroteThisBook
Many testing experts before me could have written this book; it
didn’t need to be me. Whatever the reason, the opportunity has
fallen to me, and I am grateful for it! (Although if some other expert
had written this book back when I was a beginner, it would have
saved me a lot of effort: I had to rummage through hundreds of
blogs and try dozens of tools to acquire the testing skills I’ve
accumulated.)
Throughout my 17 years of experience working with large-scale
enterprise clients and startups across the globe, I’ve observed that
the teams that implement a wise testing strategy mostly succeed,
while most of those that don’t fail miserably. For instance, I have
seen client teams that relied exclusively on UI-driven end-to-end
tests burn themselves out with maintenance tasks, and I’ve seen
teams that only did manual testing face a lot of production defects.
Other teams only do functional testing and fail to uncover critical
non-functional issues. Overall, such teams are characterized by poor
software quality, an unhappy team, and a lack of competitive edge.
Although there are several testing tutorials on individual tools out
there, there isn’t a coherent narrative on holistic full stack testing
with practical examples on current testing tools. And for many niche
skills, like security and data testing, few materials for beginners are
available. This book aims to be a comprehensive resource that
enables testing beginners to upskill to an advanced beginner level in
the skills essential for web and mobile application testing today.
What’sNewandDifferentinThisEdition?
In the first edition, I discussed AI-infused testing tools for web and
mobile applications very briefly, but the recent ascent of large
language models (LLMs) and agentic AI warranted a revision of the
skills covered inFull Stack Testing. While the focus of this second

edition remains on using functional and cross-functional testing and
automation to enable continuous delivery, I’ve expanded the content
to explore how AI-powered tools and practices can help you achieve
these goals more effectively. And, true to the spirit of the first
edition, it continues to be a practical, hands-on guide with AI testing
tool exercises in every chapter.
I have retained exercises that deal with non-AI testing tools, which
build the required foundation for using AI, and added some new and
trending ones as well. If you’re new to software testing, I insist that
you try the non-AI testing tool exercises before moving to the AI tool
exercises so that you’ll be able to assess the AI outputs.
Since the hype cycle for AI tools continues to be loud and alluring,
you need to know how to use them, but, critically, you also need to
know when not to trust their outputs. I have imbued this book with
a healthy dose of skepticism, explicitly calling out cautions and areas
where AI doesn’t fare well yet.
Because AI tools are changing fast, the AI capabilities presented in
the book represent a snapshot in time. They should help you catch
up on what’s out there across a broad spectrum of functional and
cross-functional testing and help you learn incrementally as
technologies evolve.
WhoShouldReadThisBook?
This book is primarily tailored for beginners in software testing, but
will be useful for practicing software testing professionals who want
to expand their breadth of knowledge. That said, if your
responsibilities overlap with testing—say you’re an application
developer or DevOps engineer—you can benefit from this book. In
all cases, you’ll need some coding knowledge, especially in Java. The
hands-on exercises in this book are mostly in Java and, in some
places, JavaScript. Familiarity with AI fundamentals, like prompt
engineering, is also a prerequisite for this book. If you are new to

the software industry, I also recommend reading up on software
development processes such as the Agile and waterfall
methodologies before diving into this book.
NavigatingThisBook
The book starts with an introduction to full stack testing and
elaborates on ten essential testing skills for delivering high-quality
web and mobile applications. Once these foundations are
established, there are ten independent skill development chapters.
These chapters contain the following structural elements:
Building blocks
Essential context, especially if you are new to the skill, with
insight into what it involves and why and where the skill needs to
be applied.
Strategy
This section elaborates on how to apply the skill.
Exercises
The exercises guide you with step-by-step instructions on
executing the skill using multiple tools.
Additional tools
In some chapters, this section mentions other tools similar to the
ones discussed in the exercises that may be useful.
Key takeaways
Lastly, you will find my perspectives, based on personal
observations and experience, in some of the chapters, followed
by key takeaways, which are a concise overview of the lessons
learned in each chapter.

I end the book by discussing how to further advance your testing
skills with the help of first principles and individual soft skills.
ConventionsUsedinThisBook
The following typographical conventions are used in this book:
Italic
Indicates new terms, URLs, email addresses, filenames, and file
extensions.
Constant width
Used for program listings, as well as within paragraphs to refer to
program elements such as variable or function names, databases,
data types, environment variables, statements, and keywords.
Constant width bold
Shows commands or other text that should be typed literally by
the user.
Constant width italic
Shows text that should be replaced with user-supplied values or
by values determined by context.
TIP
Thiselementsignifiesatiporsuggestion.
NOTE
Thiselementsignifiesageneralnote.

WARNING
Thiselementindicatesawarningorcaution.
O’ReillyOnlineLearning
NOTE
Formorethan40years,O’ReillyMediahasprovidedtechnologyand
businesstraining,knowledge,andinsighttohelpcompaniessucceed.
Our unique network of experts and innovators share their knowledge
and expertise through books, articles, and our online learning
platform. O’Reilly’s online learning platform gives you on-demand
access to live training courses, in-depth learning paths, interactive
coding environments, and a vast collection of text and video from
O’Reilly and 200+ other publishers. For more information, visit
https://oreilly.com.
HowtoContactUs
Please address comments and questions concerning this book to the
publisher:
O’Reilly Media, Inc.
141 Stony Circle, Suite 195
Santa Rosa, CA 95401
800-889-8969 (in the United States or Canada)

707-827-7019 (international or local)
707-829-0104 (fax)
support@oreilly.com
https://oreilly.com/about/contact.html
We have a web page for this book, where we list errata and any
additional information. You can access this page at
https://oreil.ly/full-stack-testing-2e.
For news and information about our books and courses, visit
https://oreilly.com.
Find us on LinkedIn:https://linkedin.com/company/oreilly.
Watch us on YouTube:https://youtube.com/oreillymedia.
Acknowledgments
In the two years it took me to finish the first edition of this book, it
became evident that I took the warnings about how tedious and
time-consuming book authoring is very lightly. But all that intensive
effort became meaningful when the reviews and personal messages
started pouring in from around the globe. One reader wrote that
“the book kindled the desire to be a well-rounded tester”; another
wrote, “If you are going to buy 1 book as a QA Engineer make sure
it is this one!” Several thanked me heartily, saying they needed such
material to succeed in their job. It is these moments that make book
authoring a fulfilling experience. I sincerely thank all the readers for
their generous support. It was primarily your encouragement that
convinced me to write a second edition.
My sincere gratitude to the O’Reilly crew: especially Louise Corrigan,
for working with me closely from the creation through the launch of

the second edition; Sarah Grey, for her meticulous and thoughtful
suggestions; Melissa Duffield, for her timely interventions in
smoothing the pathway to release; Elizabeth Faerm, whose
dedicated efforts made the production process seamless; and the
technical reviewers, Srinivasan Desikan, Chris Northwood, Lipi
Deepaakshi Patnaik, and Vishwesh Ravi Shrimali, who have provided
feedback on every granular detail and helped get the book to the
state it is in today.
I also want to register my exquisite appreciation of and gratitude to
my first-edition reviewers and supporters: Neal Ford, Srinivasan
Desikan, Ian Molyneaux, KiefMorris, Nigar Movsumova, Sriram
Narayan, Prasanna Pendse, Saleem Siddiqui, Bharani Subramaniam,
Alexander Tarlinder, Pallavi Vadlamani, and SatishViswanathan;
Rebecca Parsons for her foreword; the Thoughtworks team for their
support throughout the writing process; my long-term mentor
Dhivya Arunagiri; and special mention to my ever-encouraging and
supporting parents.
Last but not least, a special callout to my dear husband, Manoj
Mahalingam, who is an inspiration, a friend, and a guide and without
whom this book wouldn’t exist today. I would like to dedicate this
book to him and my lovely daughter, Magathi Manoj, for allowing me
much-needed mind space and time through several nights,
weekends, and holidays for more than a year as I worked on this
project.
Thank you very much, everyone! I am forever grateful.

Chapter 1.Introduction to
Full Stack Testing
In today’s world, rapidly evolving digital transformation plans are
essential to sustain and grow any business. Many businesses are
leading the way in this aspect, while others are just beginning to
modernize their existing legacy platforms.
Digital transformation enables businesses to expand from local to
global markets, unlocking broader customer reach and increased
revenue. This impacts almost all enterprises across various sectors,
like health care, retail, travel, academia, media, banking, and
entertainment, regardless of size, as they devise plans to advance
their digital strategies. This critical transformation enables
organizations to reach new customer segments and yield higher
profits.
Companies that continuously innovate stay relevant and thrive.
Netflix is a classic example: it started as an online DVD rental portal
in the 1990s, then ventured into online streaming in 2007,
cannibalizing its own DVD rental business. However, this was a
conscious, strategic move that enabled the company to continue to
grow, and it later started producing original content. As of 2026,
Netflix is the largest online streaming service, with well over325
million global subscribers.
The technology space has been evolving in parallel with these
innovative businesses to accommodate their increasingly advanced
needs. We can try on a new dress virtually, brew a coffee with voice
command, and more. With technology evolving rapidly, product
strategies must be versatile to fend off competition. It’s no longer
enough to just build a website; product horizons must be
broadened. Consider ride-hailing companies like Uber and Lyft,

which provide varying ways of accessing their services: web,
Android, and iOS mobile platforms; AI chatbots; and even a
WhatsApp chatbot. This kind of versatile product strategy has helped
these companies expand across the globe and outgrow their
competitors.
Why am I discussing these details in a book on software testing?
Because today’s software industry caters to all these business needs,
providing the tools necessary to innovate new product ideas, bring
them to life, and scale them to reach new customer segments across
the globe. Unquestionably, software development teams need to
deliver quickly without compromising on quality. Failures in quality
can affect a business’s financial success and reputation profoundly.
Recall theBoots website crashon Black Friday, orTaco Bell’s voice AI
crashingthe system with an 18,000-drink order, or theCrowdStrike
failurethat caused major IT disruption! At times, businesses may be
forced to choose time-to-market over software quality, but they
should be aware that they have only created a debt for themselves
that needs to be resolved before their competitors use it to their
advantage.
Thus, quality is essential for sustaining a business in the long term—
and high quality demands both skillful development and meticulous
testing, paying attention to every aspect of the application
throughout its stack. To get you started, this chapter will introduce
what’s involved in full stack testing for a typical web or mobile
application.
FullStackTestingforHighQuality
To begin, let’s align on a modern definition ofsoftware quality.
Traditionally, it was synonymous with being defect-free—but that’s
no longer sufficient. Today, users associate quality with ease of use,
intuitive design, data privacy, fast performance, and 24/7 availability.
Businesses define quality differently, focusing on return on

investment, real-time analytics, zero downtime, no vendor lock-in,
scalable infrastructure, data security, legal compliance, and more.
Each of these factors contributes to what defines high-quality
software today, and shortcomings in any area can compromise the
overall experience. That’s why thorough testing across all
dimensions is essential.
Though the list of quality requirements looks long, we have tools
and methodologies to cater to most of these needs. You need to
know this tooling landscape, build the skills to choose the right tools,
and apply them in both development and testing.
Testing, in a nutshell, is a practice to validate that an application
behaves as expected. Testing happens at the micro and macro
levels. At the most granular level, that means testing every method
in a class, every input data value, log message, error code, and so
on. The bigger picture involves testing features, integrations
between features, and end-to-end workflows. You also need to test
for the other quality attributes, like security, performance,
accessibility, and usability, holistically. As shown inFigure 1-1,full
stack testinginvolves testing different aspects of the application’s
quality in each layer (database, services, and UI), as well as the
application as a whole.

Figure1-1.Anoverviewoffunctionalandcross-functionalrequirementstesting
Full stack testing and development are as inseparable as the two
rails of a railway track. Your team must advance along both rails
simultaneously to build quality into the product; otherwise, you are
guaranteed to derail.
For example, suppose you are writing a small block of code to
calculate the total order amount for an ecommerce application. You
need to test whether the code is computing the right amount, as
well as whether it is secure. If you don’t do this, you might wind up
with gaps, and if you continue to develop on top of that fractured

foundation, you’ll end up with poor integration and suboptimal
functionality.
Testing was traditionally treated as a siloed activity done after
development, but full stack testing begins in parallel with
development and continues throughout the delivery cycle. Starting
testing early in the delivery cycle to provide faster feedback is
referred to asshift-left testing,and it’s a key principle of full stack
testing.
Shift-LeftTesting
The sequence of activities in the traditional software development
lifecycle (SDLC) is this: requirements analysis, design, code, test,
and release, with testing coming at the end. As seen inFigure 1-2,
shift-left testing suggests shifting testing to the beginning of the
cycle instead.
Figure1-2.Shift-lefttesting
Imagine your team is building a house. Does it seem sensible to fully
complete construction before inspecting for quality? What if the
rooms are the wrong sizes, or the interior walls aren’t strong enough
to bear the load? Shift-left testing tries to avoid such surprises by
implementing quality checks right from the planning stage.
Continuing quality checks throughout the development phase means
repeating them iteratively for every small chunk of work, so that
necessary changes can be incorporated smoothly—much like house
builders check each wall as they build it, so they can correct any

issues immediately. Shift-left testing relies heavily on automation at
the micro and macro levels and running those tests against every
small chunk of work in the continuous integration (CI) server. The
application is thereby continuously tested for multiple quality aspects
with much less cost and effort than performing multiple manual tests
on every small chunk of work.
Let’s break down shift-left testing into day-to-day activities. Consider
a software team that follows an Agile-style iterative development
cycle.Figure 1-3highlights some of the quality checks this team
performs before and during development.
Figure1-3.Asetofqualitychecksshiftedleft
The team begins with a set of quality checksbeforethey deem a
user story (a reasonably sized description of a feature from an end
user’s perspective) ready fordevelopment:
Three amigos process
In Agile, a ceremony called thethree amigos processis
conducted in the analysis phase. Here, the business
representatives, developers, and testers gather to thoroughly
mull over the feature. The process aims to collect all the roles’
perspectives so that integrations, edge cases, and other business
requirements don’t get overlooked. AI can also be added as the
“fourth amigo” here to come up with additional edge cases. This

is the first step in shifting left, where the feature requirements
are validated.
Design validation
In parallel, the business representative on the team works with
the user experience (UX) designer to validate and improve the
application design.
Iteration planning meeting (IPM)
Once these two steps are completed, at the beginning of the
iteration (or sprint), the team meets to discuss the user stories of
that iteration in detail, again collectively validating the
requirements.
Story kickoff
A discussion that goes deeper into a particular user story’s
requirements and edge cases is held just before that user story is
picked up for development. Think of it as a miniature version of
the three amigos process. By this stage, it’s fair to say that the
team has validated the requirements diligently.
During development, quality checks include the following:
Writing unit tests
Developers write unit tests (or prompt an LLM to do so) as part
of each story, add linting tools and plug-ins for static code
analysis, and integrate all of this into the CI pipeline to get
continuous feedback.
Writing functional tests
In some teams, developers also write the UI-driven functional
tests (or prompt an LLM to do so) as part of user story

development and integrate those with CI; other teams write
them after development.
Automated local testing
Before committing the latest changes, developers run a set of
automated tests on their local machines to get the first level of
feedback.
Automated CI testing
The second level of feedback is obtained from the suite of
automated tests (unit, service, UI, etc.) that are run during CI for
every commit.
Dev-box testing
The third level of feedback is where the testers and business
representatives do manual exploratory testing on a developer’s
machine to quickly verify the newly developed functionality.
Before the practice of shifting left was widespread, this team would
have received all of this feedback only after development; after
shifting left, almost half of the feedback comes before the user story
even gets to the testing phase. This liberates the testers to fully
explore various quality aspects of the user story rather than just
verifying the expected functional behaviors.
Doing multiple rounds of validation on the requirements helps
prevent defects; if any do creep in, it assists in catching them early.

NOTE
Extremeprogramming(XP)isanAgilesoftwaredevelopmentframework
thatincorporatesshift-lefttesting.XPwascreatedbyKentBeckinthe
1990sandhasbeenadaptedbymanyorganizations.Tokeenly
understandthewhybehindsuchashift-leftpractice,exploreKent
Beck’sExtremeProgrammingExplained,2ndedition(Addison-Wesley,
2004).
Incorporating testing earlier in the delivery cycle is not restricted to
functional application testing. It can be applied to testing in general,
including security testing, performance testing, and more. For
example, you can use a pre-commit scanning tool like Talisman
(discussed in upcoming chapters) to scan every commit for secrets
and alerts even before checking in the code. In the upcoming
chapters, you will see lots of examples of practical approaches you
can take to implement shift-left testing.
As the aphorism says, “Quality is the team’s responsibility.”
Performing quality checks at every phase of the software
development lifecycle—validating application design prototypes,
requirements, and so on—has to be owned by different team
members, not just testers or QA roles. Thus, building the relevant
testing skills to perform various quality checks is crucial for all the
roles in a team!
TenFullStackTestingSkills
The software industry thinks of testing skills in two broad types:
manual and automated. But, asFigure 1-4shows, there are actually
tenkey skills for efficient full stack testing.

Figure1-4.Tenfullstacktestingskillsneededfordeliveringhigh-qualityweband
mobileapplications
Let’s explore these skills and why you should care about learning
them:
Manual exploratory testing
While the termmanual testingrefers to verifying a given list of
requirements, not necessarily with an analytical mindset,manual
exploratory testingis the skill of delving into the application
details, coming up with different real-life scenarios apart from
what is documented in user stories, simulating them in a test
environment, and observing the application’s behavior. It

demands a logical and analytical mindset and is the first and
foremost skill required to create a bug-free application. I’ll
discuss methodologies and approaches for manual exploratory
testing inChapter 2.
Automated functional testing
Writing code (with or without AI assistance) to test feature
requirements automatically, without human intervention,
significantly reduces manual testing effort, especially when your
application grows to include more features. It requires knowing
how AI and other tools write tests at different application layers
and what antipatterns to avoid. I discuss this skill inChapter 3.
Continuous testing
Continuous delivery(CD) is a practice where features are
delivered incrementally to end users in short cycles, instead of
through a single big-bang release. By continuously delivering, the
business earns profits early and can assess and retune its
product strategy quickly based on end users’ feedback. To deliver
continuously, you have to test the application continuously, so
that it is always ready to be released. As obvious as it may seem,
the wise way to do this is to automate and integrate quality
checks into your CI/CD pipelines and run them frequently. The
skill of continuous testing, discussed in detail inChapter 4,
involves determining which types of automated tests to run at
each stage of the delivery cycle.
Data testing
When an application loses users’ data or shows the wrong data,
users lose trust in that application. The skill of data testing,
discussed inChapter 5, requires knowing the types of data
storage and processing systems typically used in web and mobile
applications (such as databases, caches, and event streams),
deriving appropriate test cases, and identifying how data flows

among the application components to create new test cases
apart from the functional flows.
Visual testing
The look and feel of an application is a major contributor to
brand value, especially when it comes to big business-to-
customer (B2C) products used by millions. Low visual quality can
damage that brand value instantly, so visual testing is essential.
Visual testingrequires understanding how UI components
interact with each other (and with the browser, for web
applications). These checks can be automated, too, using
different tools from those used for automated functional testing.
Chapter 6talks about this skill and about the stark differences
between these two types of automation.
Security testing
Security issues have high costs for both users and businesses:
they can result in sensitive information being lost or exposed,
legal penalties, and brand reputation damage. So far, security
testing has been viewed as a niche skill in the industry, with
qualified penetration testers typically engaged only toward the
end of the development cycle to look for security issues. But
professional security testing talent is scarce, and security
breaches are growing more and more common, so software
teams should incorporate basic security testing into their day-to-
day work.Chapter 7discusses how to identify security issues in
application functionality by thinking like a hacker, along with tools
to automate security scans.
Performance testing
Even a slight drop in application performance can lead to huge
financial and reputational losses. The skill of performance testing,
discussed inChapter 8, involves measuring a set of metrics, or
key performance indicators(KPIs), at different application layers.

Performance tests can also be automated and integrated with CI
pipelines to get continuous feedback.
Accessibility testing
Making web and mobile applications accessible to people with
disabilities is not only legally mandated in many countries, but it’s
also the right thing to do. The accessibility testing skill involves
understanding the accessibility standards required by law and
using auditing tools to validate whether those standards are met.
Incorporating accessibility features may even be a lucrative
option for businesses, as I discuss inChapter 9.
Cross-functional requirements testing
Although functional requirements often receive the most
attention,cross-functional requirements(CFR, often also called
non-functional requirementsor NFRs), such as availability,
scalability, maintainability, and observability, imbue quality into
the application, and failing to test for them will lead to
dissatisfied business or software teams and end users. Therefore,
the CFR testing skill is fundamental.Chapter 10discusses the
testing methodologies and tools for validating CFR.
Mobile testing
As of 2025, the Google Play and Apple App Store offer a
combined total of6.5 million apps. This might be less surprising
when you consider that mobile and tablet internet usage has now
surpassed desktop usageworldwide, according to web analytics
company GlobalStats. This skill is separate because it requires
learning a whole set of mobile-specific testing tools. Therefore,
mobile testing is carved out as a separate skill here.Chapter 11
discusses the nuances of the mobile landscape.

As you might have noticed, I haven’t listed AI as a separate testing
skill here. I see using AI as a foundational skill, like knowing a
programming language or object-oriented programming. However,
it’s worth taking a moment to get familiar with AI testing tools.
NOTE
Thisbookisfocusedonexpandingtestingskillsforwebandmobile
applications;itdoesnotcoverspecifictestingskillsforothertechnology
stacktesting,suchastestingforAIapplicationsorblockchainsystems.
AIinTesting
Artificial intelligence, the most criticized and celebrated technology
of the past few years, indeed has been around since the 1950s—to
put this into perspective, that is literally 75 years! In these 75 years
it has, however, seen several hype and death cycles (called the AI
1
Renaissance and AI winters ). Implementation waned over the early
years due to a lack of infrastructure capacity, processing power,
availability of data, and other similar technical challenges that were
needed to shape it into the form that we see today. However,
despite these challenges, the industry and academia kept working
on AI and invented several new subdisciplines along the way,
including machine learning (ML), deep learning (DL), generative AI
(GenAI), large language models, and, most recently, agentic AI, as
seen inFigure 1-5.

Figure1-5.AIisanumbrellatermformanysubdisciplines
As I write this in 2026, it’s often claimed (such as inthis March 2025
Economic Timesarticle) that AI will replace software engineers and
testers within the next four years. This sounds similar to every other
product marketing campaign, though AI has shown evidence that it
can handle tasks across the SDLC, within the limits of its known
constraints. At the bare minimum, software engineering jobs may
get redefined, if not fully outsourced to AI. To truly understand AI’s

impact on software testing, however, it’s important to explore its key
subfields, as pictured inFigure 1-5:
Artificial intelligence
The termartificial intelligence, coined in 1956, refers to systems
designed to replicate human capabilities such as vision,
reasoning, and task planning. It encompasses several subfields,
including machine learning, deep learning, and generative AI.
Machine learning
Machine learning focuses on the idea that computers can be
programmed to learn from data, much like humans learn from
experience, rather than being explicitly programmed to perform a
task in a set way. This, in a way, is similar to how the human
brain learns. For example, over time, people get to see many
apples of different sizes, shapes, and colors from different angles
and become adept at recognizing them as apples. Similarly, in
machine learning,models(statistical algorithms) are trained on
large datasets—such as images of apples or examples of spam
emails—to identify patterns, enabling them to classify or predict
new data effectively. One application of ML in software testing is
its use for analyzing test execution logs and classifying them as
defects or infrastructure issues.
Deep learning
Deep learning is a subset of machine learning inspired by the
human brain. Like the brain, it uses layers of interconnected
nodes known asneural networks. This architecture allows DL
models to learn a broader range of patterns and unique
characteristics than ML models, making them particularly
effective for working with unstructured datasets. Most image and
speech recognition models are based on DL techniques.
Commercial DL models are available to perform visual testing.
However, training DL models typically requires massive datasets

and significant processing power and infrastructure capacity.
Additionally, these models make decisions in “black boxes,”
without offering visibility into why or how they draw conclusions,
which makes it difficult to debug models or even understand why
they work a certain way.
Machine learning and deep learning perform best in domains
where the rules arenondeterministic(i.e., where an element of
randomness is acceptable). One example is spam filtering, where
one person’s spam is another person’s interest (Idislike
promotional emails, while my partner is keen on getting the best
discounts). Since data guides the way the model learns to
perform a task, the quality of the training data influences its
performance. Since heaps of comprehensive, well-groomed data
of a preferred type are rarely available, the models aren’t always
100% successful at their tasks. This makes them best suited for
applications that can tolerate some level of inconsistency—
particularly in areas where traditional rule-based programming
methods have proven inadequate.
Generative AI
Generative AImodels take deep learning a step further by
creatingnewcontent based on their training data. They can
create text, images, music, and full-length movies, and can
power conversational chatbots.
These models use many techniques in the background to
generate new content. For instance, incremental noise might be
added to the training data. Some teams train two models, one to
generate, and the other to detect if the output is close to the
original. The content is passed back and forth until realistic
content can be created. As you might have guessed, all these
capabilities need billions of images (or videos or audio files) and
trillions of words and come with a significant cost in terms of

processing power and infrastructure. They also inherit DL’s lack
of transparency and nondeterministic nature.
Large language models
LLMs are a specific type of generative AI model, which is based
on the transformer model design and focused onnatural
language processingto predict the next word in a sequence.
Their massive training datasets include text from books, articles,
open source codebases, and resources on the free internet
(although there are ongoing litigations on the use of copyrighted
content for training).
LLMs have changed the world dramatically ever since OpenAI
released a free version of its LLM-based tool ChatGPT in late
2022. Its capabilities include text summarization, deep research,
creative writing, and software coding, and LLMs’ base technology
has recently extended to generating other content types, such as
images and videos. By 2026, just about every software product
company had a proprietary LLM.
LLMs also lack transparency, similar to DL models. No one really
knows why they seem to have the ability to plan, reason, or
make decisions. Aposition paper by Subbarao Kambhampati
(2024)argues that LLMs don’t really have the reasoning or
planning capability in the normal context that we know of; they
do an approximate retrieval based on their enormous training,
which is often misunderstood as reasoning or planning capability.
The only levers we have to deal with such a powerful retrieval
tool are promptengineeringand context engineering techniques.
I will be using these techniques throughout the book to make
LLMs perform software testing tasks.

PROMPT ENGINEERING AND CONTEXT
ENGINEERING
Given the wide adoption of conversational chatbots such as
Claude and ChatGPT in recent years, I would presume that
readers are aware of“Prompt Engineering 101”. A well-
crafted prompt with pertinent details and a consumable
structure with step-by-step instructions will lead to the
successful use of LLMs in testing.
While prompt engineering is focused on crafting well-
rounded, meaningful prompts, context engineering
specifically focuses on techniques to optimize the required
context to be fed to the LLM within the limits of its context
window.
There are several techniques in the context engineering space
now, including retrieval-augmented generation (RAG), Model
Context Protocol (MCP), long-term memory stores, and
knowledge graphs. Each of them is a detailed study on its
own and is most relevant when you’re building an AI product
(refer to O’Reilly’sAI Engineeringbook, by Chip Huyen
(2024), if you’re building one). In the context of testing, you’ll
useMCPthe most.
Agentic AI
Most recently, agentic AI frameworks have advanced LLMs’
capabilities with their autonomous planning and reasoning
capabilities. AI agents use LLMs to understand the task described
in a natural language prompt and break down the steps to
achieve it. They are usually equipped with access to other
systems, such as the relevant domain APIs, databases, and
knowledge repositories, which provide context for their reasoning
and allow them to execute the task end-to-end. For instance, in

the context of testing, an AI agent might be given access to user
stories in Jira so it can create test cases relevant to the
acceptance criteria and write code to automate testing, with little
human intervention.
As many of these AI subdisciplines come together to cater to
different testing needs, it is important to note that they also inherit
their limitations of producing nondeterministic outcomes, a lack of
transparency, and the risk of using copyrighted content.
It is also worth calling out that AI-infused testing tools existed and
were slowly being adopted even before GenAI and LLMs. With LLMs,
a new set of testing capabilities has been incorporated. We will take
a broad look at the AI testing tools available in“The Landscape of AI
Testing Tools”to understand these capabilities.
TheLandscapeofAITestingTools
AI-infused testing tools have evolved to provide different ranges of
support for performing tasks, starting from basic assistance to
autonomous execution of the task. Based on the amount of human
intervention required to complete the use case, we can classify the
AI testing tools into four categories:
AI-assisted tools
AI-assisted testing tools have to be instructed clearly on what
you want them to do, and they predominantly complete the task
as per the instructions, but not always. They sometimes skip
instructions or misunderstand them. Their output requires further
review to make it meaningful. These tools come with provisions
to add relevant context to complete the task, such as providing a
URL to the Jira user story or attaching it as a PDF file. An
example of an AI-assisted testing tool is the general-purpose
LLM. Given the context and step-by-step instructions, it can
generate a list of test cases for a user story that covers a broad

range, but the list is usually not comprehensive enough to cover
domain-specific and architecture-specific edge cases.
AI-powered tools
Tools in this category use one of the AI subdisciplines to perform
tasks with comparatively less human intervention. For instance,
AI-powered test data generation tools use ML or DL to study the
statistical characteristics of a given dataset and generate
synthetic test data with a similar distribution. All they need the
user to do is design the initial test data requirements, provide a
sample production dataset, and review the output a few times.
AI-driven tools
These tools enhance testing workflows with autonomous
decision-making capability. For example, AI-driven security-
testing platforms can do security scans autonomously and
prioritize the vulnerabilities they find. They can also fix the
vulnerability and offer to raise a pull request (PR) with a single
click of a button.
AI agents
An agentic testing tool plans a task by breaking it down into
actionable steps, reasoning from the previous and current
context fed to it, then executing the task by following (or
revising) its plan. Many AI coding assistants now have an “agent
mode.” If, for example, you instruct the tool to build a Selenium
WebDriver framework for your website, it can plan and execute
the whole set of tasks: running the Maven command to build a
new project, downloading the Selenium dependencies, and
creating classes to write the tests. It can also revise the plan if
an intermediary step doesn’t execute successfully. AI agents may
question you about the right approach to designing the
framework. While they can befrustratingto reason with, you can

use such discussions to implement basic standards across the
project.
Throughout the book, I will be discussing a variety of AI testing tools
that require human interventions at different capacities. These
include the following:
AI chatbots
These offer users assistance for a given task. You can also feed
relevant context to them through MCP servers and RAG
techniques.
AI coding assistants
These tools can be prompted to write unit, integration, and UI
tests. They accept context easily and can implement preferred
coding standards.
AI-powered testing platforms
These platforms provide their AI models to do a particular task,
such as visual testing or security testing. They enhance the
developer/tester experience with managed infrastructure for
running tests, root-cause analysis for test failures, auto-fixes for
failing tests, comprehensive reporting, and governance
capabilities.
AI extensions
These extend the capabilities of other tools with AI capabilities.
Most often, they plug an LLM directly into the tool to fetch
context and provide support, such as with debugging or
suggesting code fixes.
The best way to learn these tools is to get your hands dirty and try
them a few times. The ten skills chapters in the book have exercises

to help with this. I have also called out the cautionary aspects of
using the AI tools within the exercises.
Having said that, “successful AI adoption is a systems problem, not a
tools problem,” as Google’s DevOps Research and Assessment
(DORA) team wrote in their 2025State of AI-Assisted Software
Developmentreport. This has been my experience implementing AI
testing tools as well. When the software team follows the discussed
shift-left practices and a good engineering hygiene, the AI testing
tools can accelerate feedback loops further, but when the
engineering practices are sluggish, the gains are local and tend to be
lost downstream.
That said, the software industry is still collectively exploring and
learning to tame AI to serve our best interests. At the bare
minimum, we can all continue to stay curious about what AI can
offer, without necessarily rejecting it entirely or becoming ardent
proponents. When automated testing was first introduced, many
people were skeptical that its ROI would outweigh the costs, but
now we know how to balance manual and automated testing to
produce high-quality software. Similarly, AI can become a useful tool
in developers’ and testers’ repertoire to advance the art of functional
and cross-functional testing.
Let’s explore these capabilities in the upcomingchapters!
KeyTakeaways
Here are the key takeaways from this chapter:
Software quality isn’t just about bug-free functionality: its
holistic quality dimensions include security, performance, and
visual quality, among others.
Full stack testingrefers to testing all the quality dimensions
of an application holistically at every layer, with the goal of
delivering high-quality software.

To meet that goal, teams should shift testing to the left, so
that it begins in parallel with analysis and continues
throughout the delivery cycle.
Shift-left testingembodies the aphorism “Quality is the
team’s responsibility”: it demands that every role in the team
take ownership of certain quality checks at different phases
of delivery. This requires all team members to acquire
relevant skills.
The two classic monolithic categories of testing skills,
manual and automated, mask a vast set of new skills
required to perform full stack testing efficiently. This chapter
introduced 10 essential testing skills.
AI testing tools can be classified as AI-assisted, AI-powered,
AI-driven, and agentic based on the range of support they
require from humans to complete the task at hand.
AI testing tools take many forms, such as chatbots, coding
assistants, platforms, and tool extensions. Try a tool from
each category to start learning them.
1
AIforEveryone:ABeginner’sHandbookforArtificialIntelligenceby
SaptarsiGoswami,AmitKumarDas,andAmlanChakrabarti(Pearson2024).

Chapter 2.Manual
Exploratory Testing
Not all those who wander are lost.
—J.R.R. Tolkien
Manual exploratory testingis an intense activity. You exercise the
test application to explore and understand its behaviors in various
situations, including ones not mentioned in the requirements
document or user stories. This exploration often uncovers new user
flows that were not envisaged during the analysis or development
phases, as well as bugs in the existing user flows. When such
discoveries happen, it is refreshingly joyous for the individual who
found them, as it showcases their keen analytical and observational
skills!
Typically, in manual exploratory testing, the entire application is
deployed in a testing environment. The testers meddle with
components such as the database, services, and background
processes as they please to simulate different real-time scenarios
and observe the application’s behavior. Manual exploratory testing
differs from traditionalmanual testing, which refers to manually
executing a particular set of acceptance criteria and verifying
whether the application’s behavior meets the stated expectations.
Traditional manual testing doesn’t necessarily exercise any analytical
skills, but exploratory testing lays a green field in front of the
testers, inviting them to go above and beyond what is documented
or evenknownabout the application.
Some teams underestimate the value of exploratory testing, often
believing that shifting left with intensive user story analysis and
development is enough to go live, especially if supplemented with

automated testing (discussed inChapter 3). However, the analysis
carried out during user story creation is usually primarily from the
point of view of the business, and during development, the
developers may confine their focus to the technical scope of the
current functionality. This leaves an obvious gap: the application is
not explored from an end user’s perspective and with a big-picture
lens in a deployed environment. That gap leaves space for
integration issues and missed end-user flows—which is why teams
need a manual exploratory testing phase after development. In
other words, shift-left testing does not eradicate the need for latter
stages of the development lifecycle.
TIP
Exploratorytestingbringsallthreeangles—therequirementsofthe
business,technicalimplementationdetails,andtheenduser’sneeds—
together,andchallengeseverythingthatisthoughtofastruefromall
theseangles.Agoodpracticeistocallafunctionalitycompleteonly
afterthenewuserflowsandtestcasesdiscoveredthroughexploratory
testingareautomatedaswell.
You can assign a separate individual to conduct this post-
development exploratory testing, or existing team members can do it
in a round-robin fashion during each iteration. Indeed, people in
every role can benefit from developing their exploratory testing skills
through practice.
If you are looking to develop your exploratory testing skills, this
chapter is for you. I’ll discuss existing frameworks and provide a
strategy to approach this task. The exercises in the chapter focus on
generating a starter kit of test cases with AI tools and on performing
exploratory testing of web UIs and APIs with AI assistance. I will
also briefly examine an AI-powered synthetic test data generation
tool. The chapter concludes with a summary of useful practices to

maintain test environment hygiene, as a well-maintained test
environment plays a pivotal role in the success of manual
exploratory testing.
COMMONLY USED TERMS
The following are some commonly used terms that you will see
in this chapter:
Afeatureorfunctionalityis how the application provides
value to its end users. For example, login is a feature
that provides security to end users.
Auser floworuser journeyis a set of actions the end
user performs in the application to achieve the value
provided by the functionality. For example, in order to log
in, the end user has to enter their credentials and sign
in; this is the login user flow.
Atest caseis a set of actions that validate that the
functionality is working as expected. For example,
entering a valid username and password and verifying
that the login is successful is a test case. Entering an
invalid username and verifying that there is an error
message is also a test case. The former is apositivetest
case, as it allows the end user to achieve the value
provided by the functionality successfully, whereas the
latter is anegativetest case. To explore a functionality
completely, both the positive and negative test cases
have to be simulated and observed.
Anedge caseis a negative test case that occurs very
rarely.

BuildingBlocks
Let’s begin by taking a look at eight exploratory testing frameworks,
with practical examples of their use. Then, we will practice exploring
a functionality.
ExploratoryTestingFrameworks
The goal of exploratory testing frameworks is to help you form
mental models that you can intuitively apply to relevant contexts in
the application. They aim to narrow the scope of testing by giving
clarity and structure to a piece of functionality. For example, numeric
input fields are common in applications. Instead of randomly testing
all possible numeric values to test such a field, frameworks lend us
structures to compartmentalize the inputs into logical sample sets.
Similarly, there are frameworks that structure business rules to help
testers see different user flows and test cases.
To demonstrate the first two of the eight frameworks, we’ll use the
example of a web page that asks for the user’s income as input and
displays the amount of tax owed by the user as output (Figure 2-1).
The right side of the figure shows the tax brackets used for
computation. (This is, of course, a greatly simplified income tax
structure for demonstration purposes.)

Figure2-1.Asimpletaxcalculatorexample
To test whether the tax calculation logic works as expected, you
need to identify positive and negative test cases to try as inputs. A
point to note here is that income is a continuous numeric value
ranging from 0 to infinity. To arrive at your positive and negative test
cases, you need to narrow down the correct set of numeric input
values and verify the output. There are two frameworks that can
help: equivalence class partitioning and boundary value analysis.
Equivalence class partitioning
Theequivalence class partitioningframework suggests that you
should split the inputs that result in the same output or that undergo
similar processing into groups, orpartition classes, and that it is
sufficient to pick just one sample input from each partition to test
the entire functionality.
Applying this suggestion, the first set of partition classes will be the
tax brackets themselves: [0–5000], [5001–15000], and [>15000].
These three classes can be consideredequivalence classes, as every
input within each class will be subjected to the same rules. To
validate the positive test cases, it’s enough to test with three input

data points, one from each class: we’ll use the inputs 2,000, 10,000,
and 20,000.
Next, apply the same framework to derive the negative test cases.
The classes of inputs that should result in an error are [negative
values], [letters], [symbols], and so on. Again, one value from each
class is enough to test the negative test cases.
In addition to manual exploratory testing, this framework is helpful
in unit testing (discussed inChapter 3) and can be applied to any
other relevant context in the application, such as testing time-based
outcomes (before and after an event), internal states of the system,
and so on.
Boundary value analysis
Boundary value analysisextends the equivalence class partitioning
method by explicitly checking the boundary conditions in each of the
classes. This is helpful in finding errors, as the boundary conditions
are often vaguely defined and improperly implemented. For instance,
in the tax calculator example, the requirements for the tax brackets
may have been stated as “5% tax for income below $5,000, 10% for
income between $5,000 and $15,000, and 30% tax for income over
$15,000.” However, this fails to clearly define theboundary
conditions: which classes the exact values 5000 and 15000 should
fall into. The boundary value analysis framework helps resolve such
issues by testing the boundary values in each of the equivalence
classes, in addition to picking an input within the range of each
class.
You can apply this framework to the tax calculator example by
analyzing the boundary values. The first class, [0–5000], has 0 and
5,000 as boundary values. But logically, when the income is 0, there
shouldn’t be any taxes. So, this means you need two new
equivalence classes: [0] and [1–5000]. The boundary values you
should test to cover all the positive test cases are therefore [0, 1,
5000, 5001, 15000, 15001], as seen inFigure 2-2.

Figure2-2.Equivalenceclasseswithboundaryconditions
This testing framework yields maximum benefits for the team when
applied in all the delivery phases, starting from analysis, as building
such edge cases as defects later on is a significant effort in itself. For
instance, the business analysts could carve out the acceptance
criteria to handle the boundary values appropriately before passing
on to the developers. The developers could use this framework to
ensure all the positive and negative cases are automated as unit
tests before passing on to the tester for exploratory testing.
“State transition”looks at some slightly more complex scenarios
where multiple input combinations result in different outputs, using
the classic example of a login page that takes two inputs: an email
address and a password. Then, using the same example, I’ll discuss
how the state transition, decision table, and cause-effect frameworks
can help in visualizing test cases.
State transition
Astate transitionrefers to a change in an application’s behavior
based on different inputs or events. The state transition testing
framework is helpful in deriving test cases when the application’s
behavior changes based on the history of inputs. For example, the
login page might show an error message the first and second time
the user enters an incorrect password, but lock the account after the

third time. In such scenarios, you can draw atransition treeto
derive test cases.
In the transition tree shown inFigure 2-3, each state of the
application is depicted as a node. The possible outcomes of an
action are shown as subnodes, and the arrows are labeled with the
actions (also calledevents) that trigger those outcomes.
Figure2-3.Statetransitiontreeforinvalidloginscenario
This tree gives a clear picture of each test case. It begins with a
starting state, the action that changes the application’s state, and
the expected outcomes to be validated. The visualization also gives a

realistic estimate of the amount of effort required to test this feature
by clarifying the number of states and transitions, which helps in
planning.
State transitions can be much more complicated than this, such as in
an order management system, where orders go through states like
payment complete,pending,shipped,canceled,fulfilled, and so on.
In such cases, visualizing each state as a node and the actions that
take the order to each possible next state as arrows will give a clear
overview of the feature itself.
Decision table
When inputs are logically bound (that is, they contain logical
operators likeANDorOR) to produce outcomes, you can use decision
tables to derive test cases. This can save a lot of time during testing,
since all possible input combinations and their expected outputs are
clearly marked in the table ahead of time. In the login example, the
email and password are logically bound by theANDoperator; that is,
both the email and the password have to be right for a successful
login.Table 2-1shows a decision table for this scenario.
Table 2-1.Decision table for login scenario
| Decision table | Test case 1 | Test case 2 | Test |
| --- | --- | --- | --- |
| Conditions | Email | True | False False |
| Password | False | True | False |
| Actions | Login | - | - - |
| Error | True message | True | True |

The method can also save time by eliminating unneeded test cases.
For example, test case 3, where both inputs are incorrect, can be
eliminated, because the login fails if even one input is wrong.
Cause-effect graphing
Cause-effect graphingis another way of visualizing logically bound
inputs and their possible outcomes. This framework visualizes the
big picture of a feature, so it’s particularly useful in the analysis
phase. Once you’ve created the graph, you can translate it into a
decision table to derive detailed test cases.Figure 2-4shows a
cause-effect diagram for the same login example.
Figure2-4.Cause-effectgraphingforloginscenario
Causes are listed on the left and effects on the right, and the
navigation paths among them are laid out with the help of logical
operators.
The frameworks I’ve discussed so far are useful for structuring
inputs that are related to each other. Next, we’ll look at two

frameworks that can help you deal with multiple independent
variables and large datasets.
Pairwise testing
You’ll often have to deal with more than one input value in
applications, and it can be a struggle to manage their variations and
derive test cases.Pairwise testing, also known asall-pairs testing, is
a framework that assists in condensing test cases to a minimum
when multiple independent variables or inputs drive the outcomes.
Let’s work through a small exercise to illustrate how it works.
Consider a web form that takes three independent inputs: operating
system (OS) type, device manufacturer, and screen resolution. As
Table 2-2shows, the OS field can take two values:Androidor
Windows. The device field can take three values:Samsung,Google,
orOppo. Finally, the resolution field can takeSmall,Medium, and
Largeas values. That yields 2 * 3 * 3 = 18 possible input
combinations to test.

Table 2-2.Example test cases without applying the pairwise
testing method
| Test cases | Device | Resolution | OS |
| --- | --- | --- | --- |
| 1 | Samsung | Small | Android |
| 2 | Samsung | Medium | Android |
| 3 | Samsung | Large | Android |
| 4 | Google | Small | Android |
| 5 | Google | Large | Android |
| 6 | Google | Medium | Android |
| 7 | Oppo | Small | Android |
| 8 | Oppo | Medium | Android |
| 9 | Oppo | Large | Android |
| 10 | Samsung | Small | Windows |
| 11 | Samsung | Medium | Windows |
| 12 | Samsung | Large | Windows |
| 13 | Google | Small | Windows |

| Test cases | Device | Resolution | OS |
| --- | --- | --- | --- |
| 14 | Google | Large | Windows |
| 15 | Google | Medium | Windows |
| 16 | Oppo | Small | Windows |
| 17 | Oppo | Medium | Windows |
| 18 | Oppo | Large | Windows Pairwise testing suggests that testing any given pair of inputs once is enough, as they are independent variables. This will reduce the list of test cases to just nine, as seen inTable 2-3. |

Table 2-3.The reduced list of test cases after applying the
pairwise testing method
| Test cases | Device | Resolution | OS |
| --- | --- | --- | --- |
| 1 | Oppo | Small | Android |
| 2 | Samsung | Small | Windows |
| 3 | Google | Small | Android |
| 4 | Oppo | Medium | Windows |
| 5 | Samsung | Medium | Android |
| 6 | Google | Medium | Windows |
| 7 | Oppo | Large | Android |
| 8 | Samsung | Large | Windows |
| 9 | Google | Large | Any value The new condensed table has cut down the repetition of several pairs. For example, the[Google, Medium]and[Google, Windows]pairs each occur only once now. Sampling So far, you have dealt with inputs that are small and consumable by the human brain without tools. But what if you have to test large datasets? For example, let’s say a legacy insurance system has been |

migrated to a new system, and you have to test whether the existing
insurance details have been transferred correctly into the new
system. There could be millions of users in the legacy system, and
you can’t apply any of the frameworks discussed so far to derive test
cases. For example, you can’t determine equivalence classes: each
user will have a different combination of age, premium, length of
contract, and scheme type. You can’t apply pairwise testing either, as
there are too many variables to identify to eliminate the recurring
pairs. In such cases,sampling,or selecting a subset of the values to
use for testing,is a useful technique (seeFigure 2-5).
Sampling, in general, can be applied to any large, continuous input.
Sample values are usually selected using either random sampling or
criteria-specific sampling.
Figure2-5.Samplingbasedoncriteriaorrandomsampling
Random samplingis where you pick any random data sample from
the dataset and verify the results. For example, if there are 1,000
users, you could choose 50 to 100 users randomly from the legacy
system, then compare their data in that system with the data stored
in the new system.Criteria-specific samplingis where you pick
samples by identifying some common characteristics in the dataset.
For the insurance system, you could sample based on user-specific

criteria like age, length of contract (number of years subscribed),
mode of payment, or profession, and insurance policy–specific
criteria like payment intervals or price. You could further refine the
technique by making the sample count for each criterion
proportional to the actual distribution of the values in the dataset.
This would form a representational mini-dataset that would likely
cover all kinds of test cases.
That brings me to the last framework, which is more about
exercising your analytical and logical thinking skills than applying a
set of fixed guidelines.
Error guessing method
Error guessinginvolves predicting possible failures based on past
experience. These might include common problems with integration,
input validation, and boundary cases. Although experience plays a
critical role in predicting probable error cases, you can also use your
understanding of the technology and logical reasoning. Indeed,
practicing this kind of thinking boosts your exploratory testing skills
across the board.
Here are a few types of errors that crop up regularly, in my
experience:
Missing validations for invalid/blank input values and lack of
appropriate error messages directing the user to correct the
input
Unclear HTTP status codes returned for data validation,
technical, and business errors (we’ll take a look at some of
these in“API Testing”later in this chapter)
Unhandled boundary conditions specific to the domain, data
types, or states
Technical errors, such as the server being down or responses
timing out, that are not handled on the UI side

UI issues (such as jerks and residues) during transitions,
data refreshes, andnavigation
The SQL keywordslikeandequalsused interchangeably,
which changes the results entirely
Uncleared caches and undefined session timeouts
Reposting a request when the user clicks the back button in
the browser
Missing file format validation when uploading files from
different OS platforms
You can use these eight exploratory testing frameworks to structure
your thought process as you explore a functionality and derive
meaningful test cases. These frameworks can be applied to any
relevant context in the application, not just input data.
Now that you’re equipped with these tools, let’s take a closer look at
what’s involved in exploring a functionality.
ExploringaFunctionality
Suppose you are asked to perform exploratory testing on the order
creation functionality of an ecommerce application. What discovery
paths should you start with? This section answers that question by
throwing light on four essential paths that must be explored in any
application, as illustrated inFigure 2-6.

Figure2-6.Fouressentialdiscoverypathstofollowwhileexploringafunctionality
Functional user flows
Functional user flowsrefers to the journeys an end user takes while
using an application, such as logging in, searching for a product,
adding it to the shopping cart, providing a shipping address,
choosing a delivery option, paying for the order, and finally getting
an order confirmation. This is asingle-user positive flow(or ahappy
path), which is what you should validate first. You will have to
explore the positive flow with different shipping addresses, payment
and delivery methods, and item combinations to ensure it works
entirely.

TIP
DesignersusuallyresearchtheUXdesignsforfunctionaluserflowswell
aheadofdevelopment;sometimesdesignprototypesarevalidatedwith
realendusers,too.Pairinginthisstagecanhelpthetestersunderstand
endusers’behaviorsandenrichtheirexplorationoftheapplication.
While exploring, you may find yourself using equivalence class
partitioning and boundary value analysis methods to verify whether
the application adds the right amount of tax to the total price.
Similarly, you can use a transition tree to derive test cases around
the shipping address and delivery methods available for that address
combination. Once you ensure that this single-user positive flow
works perfectly, you should start exploring the two other kinds of
flows:
Repeat flows
End users often repeat the same flow (or parts of it) multiple
times in the application, like searching for different products and
adding them to the shopping cart. But commonly, a user flow is
tested once; if it works, the tester ignores the repeat flows under
the assumption that their behavior will remain the same.
Practically, however, this assumption may or may not be true. For
example, if the user tries to add the same item to their shopping
cart again, the UI may show a message saying the product has
already been added and checking if they want to increase the
quantity. Repeat flows must be tested as well.
Multiple-user flows
A functionality may work perfectly from a single user’s point of
view, but that may not be the case if several users interact with
the application simultaneously in real time. Exploring possible
collision scenarios, where one user’s actions interfere with
another’s, is therefore important. For instance, what happens

when two different users add the last available product to their
shopping carts at the same instant?
In short, testers often use functional user flows as their first
discovery path to explore in an application, but within it, there could
be several subpaths to explore, including single-user positive flows,
repeat flows, and multiple-user flows.
Failures and error handling
As I noted at the beginning of the chapter, exploratory testing is
carried out in a test environment and involves meddling with the
application components to simulate real-time scenarios and observe
the application’s behavior. There are two phrases in that statement
that form the core of exploratory testing:meddling with the
applicationandreal-time scenarios.
When considering real-time scenarios, you should try to think of all
possible failures, since failures are practically unavoidable. For
instance:
A network failure between the application’s components
could prevent it from sending a response to the user.
The network between the end user and the application
server could be slow, resulting in delays.
The application services could go down due to a hardware
failure.
Invalid user actions could cause errors.
All these failures and more must be anticipated during exploratory
testing and simulated in the test environment. A functionality can be
deemed complete only if it has built-in validations to handle such
cases. In the order creation functionality, several instances call for
exploring these validations. For example, as discussed earlier, the
login page needs to have validations for the email and password; the

search text entered in searching for a product needs to be validated
for invalid inputs and item availability. The shipping address and
payment details, adding items to the shopping cart, and other
functionalities need similarly thorough testing.
Exploratory testing should emphasize identifying possible failures
and handling errors, which should include meaningful error
messages that advise users of their mistakes and suggest possible
remedies.
LLMs can assist with generating such positive and negative test
cases. You can use exploratory testing tools like Auto Data Filler,
Chrome DevTools, and Playwright MCP to execute those test cases at
the web UI layer, and Postman and WireMock to explore the API
layer.“Exercises”details them further.
The UI look and feel
The UI is what end users see, so there can’t be obvious problems
with its quality. Exploring its look and feel is therefore another
important discovery path. To give just a few examples, UI quality–
related test cases in the order creation functionality might include
ensuring that product images are displayed with the appropriate
quality and that an appropriate amount of space is provided for
shipping addresses (not so little that there isn’t enough room to
display a long street name, and so much that there’s a huge amount
of blank space when part of the address is short). End users should
be able to operate the application seamlessly from their preferred
browsers, and should see a loading icon when there are delays.
Chapter 6offers a structured approach to UI quality testing along
with relevant tools.
Cross-functional aspects
Any given functionality may have several cross-functional aspects,
such as security, performance, accessibility, authentication,
authorization, auditability, and privacy, that require specific focus

during exploratory testing. Many of these aspects have an entire
chapter of this book dedicated to them because of their importance.
Briefly, here are a few cross-functional requirements to examine
when exploring the order creation functionality:
Security
In the order creation user flow, an abusive user could enter SQL
queries in the UI input fields and try to hack the application. The
application should have validations in place to handle such
attempts. Similarly, the users’ credit-card details should not be
stored in plain text in the application database or logged in plain
text in the application logs, so that they are secure even in the
event of a potential breach. All of these security testing aspects
and more are discussed in detail inChapter 7.
Privacy
Users’ private data, such as credit card details and shipping
addresses, should not be stored in the application database
without their consent. Also, users should be informed in advance
of how their data might be used for analytics and whether it will
be sent to third-party services for processing. Several data
privacy clauses are also enforced by legal regulations; I’ll discuss
these issues inChapter 10.
Authentication/authorization
Most websites have user authentication functionality, which calls
for exploring authentication-related test cases such as single
sign-on, two-factor authentication, session expiry, and account
locking and unlocking. In an ecommerce application, end users
may be allowed to view the product catalog without logging in,
but not to place an order.
Similarly, different users could be assigned roles (such as admin,
customer, or executive) and permissions (such as editing an

order). Doing so requires exploring authorization-related test
cases such as multiple overriding roles, adding new permissions
to existing roles, and observing the application’s behavior when
an operation is executed without the right permissions.
Again, these are just a few examples;Chapter 10discusses around
30 different cross-functional aspects and ways to test them.
The four discovery paths described here should lead to well-rounded
testing coverage on any given functionality. As you explore each
path, you may think of new ideas and test cases that don’t belong to
that path. Jot these down so that you can come back to them later,
or use them to kick-start your exploration of another path.
ManualExploratory TestingStrategy
The manual exploratory testing strategy depicted inFigure 2-7ties
everything discussed so far to the team processes to give you a
practical structure for exploratory testing. Let’s begin with the outer
semicircle and move inward.

Figure2-7.Themanualexploratorytestingstrategy
UnderstandtheApplication
The outer semicircle ofFigure 2-7emphasizes understanding the
application’s details in five broad application areas. Gathering details
about these will help you get started with exploratory testing, but
you will certainly find new information as you explore.

NOTE
Exploratorytestingisoftenconfusedwithmonkeytesting,anapproach
wheretheapplicationistestedwithrandominputsandnoknowledgeof
itsfunctionality.Inexploratorytesting,youshouldhaveaprecise
understandingofthefunctionalityyouaretestingandamindsetof
exploringtheunknowns.
Here are five areas to focus on as you build your understanding of
the application:
User personas
Apersonais a character that represents a set of end users with
similar attributes. Software teams create user personas at the
beginning of a project with the goal of imbuing such users’
specific needs into all the stages of the delivery lifecycle, starting
from design. For example, young adults may expect an
extravagant experience from a social networking site, whereas
seniors may expect a clean and clear interaction. Testing is all
about wearing the end user’s hat, so it’s vital to know the set of
user personas the application intends to serve and explore how
each persona will perceive and interact with it.
Domain
Every domain—social networking, transport, health—has a
tailored workflow, process, and terminology or jargon that testers
need to understand. Ecommerce is a perfect example. An order,
once created, goes through a defined workflow: capture,
promise, confirm, and so on. The order fulfillment flow has to
interact with numerous parties, such as the warehouse that
stores the items, the shipping partner that transports the items
from the warehouse to the customer, and the vendors that
replenish the items regularly. It’s difficult to know how to explore
all the application’s paths without basic domain knowledge.

Business priorities
Consider a scenario where the business priority is to designa
platformfor extensibility and scalability purposes. In such cases,
just testing the functional user flow from the UI may not be
sufficient. It needs to be explored from a “platform” point of
view, observing factors such as whether the UI and web services
are tightly coupled or if the web services are independent and
can be integrated with other systems.
Application architecture
Knowing the application’s architecture will add branches to your
discovery paths. For example, if the architecture involves web
services, you may need to perform exploratory testing on the API
(discussed in“API Testing”later in this chapter) instead of just
exploring the UI. Similarly, if the application involves event
streams (discussed inChapter 5), exploring cases that involve
asynchronous communication becomes important. Understanding
the architecture at a high level will help you carve out discovery
pathways that cover internal component integrations, data flow
between components, third-party integrations, and error
handling.
Infrastructure and configuration
You’ve learned that exploratory testing involves meddling with
the test environment to simulate real-time scenarios, including
failure cases. Knowing which application components are
deployed where, and what configurable levers they have, will
provide critical hints for finding new discovery paths. For
example, if web services are configured with a maximum number
of hits they can serve within a time period (known asrate
limiting), you may need to observe the application’s behavior
when the rate limit is exceeded. Gathering some basic
information about the infrastructure and configuration, such as

how the services and database are deployed (on a single
machine or spread across multiple machines?), rate-limiting
settings, API gateway settings, and the like, will help you uncover
important test cases.
Once you have gathered sufficient information about these five
application areas, you are ready to dive into the actual exploratory
testing phase.
If this all sounds a little overwhelming, don’t worry. It’s perfectly fine
to approach exploratory testing from a functional point of view and
gradually learn to ask more questions along these lines.
ExploreinParts
The next semicircle inFigure 2-7points to exploring in parts.
In a2003 paper, James Bach definesexploratory testingas
“simultaneous learning, test design, and test execution.” This is still
one of the most widely used definitions. To elaborate,exploratory
testingmeans performing a series of actions in the application while
observing its behavior, learning more about the application, and
exploring it incrementally. This process demands in-depth analysis.
Humans are best at paying intense attention and diving deep into a
topic when we focus on smaller scopes of work, which is why we
explore individual parts of the application at a time! Those parts
could be discovery paths, subpaths like user flows or features, or
cross-functional aspects like security.
Keeping track of all these paths and subpaths can be difficult. One
strategy is to use amind maplike the one inFigure 2-8: a
visualization technique that captures main ideas along with their
branches. You can create mind maps on paper or with tools like
Coggle,MindMap AI, andXmind, individually or collaboratively as a
team.

During this phase, you may need the eight testing frameworks,
which are represented as the inner semicircle inFigure 2-7, and the
exploratory testing tools discussed in“Exercises”.
Figure2-8.Anexploratorytestingmindmap

RepeatExploratoryTestinginPhases
Exploratory testing cannot be a one-time activity. As the team adds
new code, features, and integrations, the resulting changes to the
application’s behavior will require exploration. Thinking of
exploratory testing as a continuous process will allow you to
structure the scope of your explorations at a particular time or
phase. For example, some Agile teams practicedev-box testing,
where business representatives and testers perform time-bounded
exploratory testing of a user story that was just developed, on the
developer’s own machine. They can restrict the scope to positive
user flows, validations, and UI look and feel.
When testing user stories after development, you can expand your
scope to include cross-browser and cross-functional aspects. In
addition, some Agile teams conduct regularbug bashes, where all
the team members get together to explore the features developed
so far. Finally, in the release testing phase, you can focus in depth on
cross-functional aspects such as performance, reliability, and
scalability, and explore positive user flows and integrations at a
slightly higher level. Planning your exploratory testing phases ahead
of time will help the team get continuous feedback, allowing space
for continuous improvement.
TIP
Exploratorytestingisanorganicprocess,soyoumaydiscovernew
pathwaysthatyoudidn’tplanforthatconsumeyourallottedtimeinan
iteration.Thisisnormal.Considerwhetheryoumightincludesuch
pathwaysinthenextuserstorytestingphaseorinbugbashes.Ifso,
makeanoteandmoveon.
To recap the strategy, when you are starting exploratory testing, first
get to know the application details, then jot down the individual
paths to explore. Then, continue your exploration of the different

pathways throughout the phases of the delivery cycle in order to
provide continuous feedback to the team.
To execute the strategy, you need tools and a well-maintained test
environment. These topics are discussed next.
Exercises
Predominant web applications follow aservice-oriented architecture
with a web UI component talking to the relevant services in the
backend. This section discusses the required API and web UI
exploratory testing tools, including those with AI capabilities for
testing such an application.
Since AI tools are changing quickly, use the exercises to comprehend
the AI capabilities available in the manual exploratory testing space,
while keeping in mind that there could be updates to their features.
Let’s begin by pairing with AI to generate test cases.
TestCaseGeneration
This exercise shows you an efficient way to use Claude Desktop to
generate test cases for a given user story, using context engineering
techniques like MCP to fetch the acceptance criteria for the user
story from Jira and feed in the exploratory testing approach from
Confluence as additional guidelines.
WARNING
MostLLMproviderspromisenottouseconversations,context,orcode
formodeltrainingpurposesonlyintheirenterpriseversions.Ifyou’re
usinganopensourceversion,becautiousaboutwhatyoufeedinas
promptsorcontext:itmaybeusedforfurthertraining(unlessyou
explicitlyoptout)andcouldbeexposedpublicly.

First, try asking Claude or ChatGPT to generate test cases for a user
story (a gentle reminder to cull out sensitive information before you
paste the user story into an open source version of Claude or
ChatGPT). I received 70 to 80 test cases when I prompted Claude
(using the following prompt in September 2025) to generate test
cases for the Amazon homepage:
Prompt: You're a software tester. Can you provide me with test
cases for Amazon
Home Page @https://www.amazon.in/ section by section in the
Given, When, Then
format as per the example below:
—-
Example:
Given the user is on the Amazon Home Page
When they search for a laptop
Then they should see laptop in the auto-suggestions list.
Although the Sonnet 4.5 model initially seemed to understand the
domain well, as I went through the long list, I observed that many
of the test cases were duplicated or folded into other test cases.
Claude tried its best to cover a large scope of functionality across the
sections of the Amazon home page, from header to footer, but most
were only surface-level, and only a couple of test cases were listed
under each section of the home page. Sometimes the model
invented domain logic that didn’t make sense.
To check if it performed better with a smaller scope (in time, this
proved to be the best way to use the tools), I tried prompting again
to generate test cases for only the search functionality. This time it
gave meaningful test cases, including for various input validations,
auto-suggestions, and search history, and cross-functional test cases
around performance, cross-browser compatibility, and
internationalization (seeExample 2-1).

Example 2-1.Test cases generated by Claude for Amazon home
page search functionality
1. Rapid Successive Searches
Given user performs multiple searches quickly
When they type and delete search terms rapidly
Then autofill should handle race conditions properly
2. Network Failure Recovery
Given there is a network interruption during search
When connectivity is restored
Then user should be able to retry search seamlessly
And previous search context should be maintained if possible
And no duplicate or stale suggestions should appear
3. Input Validation - XSS Prevention
Given the search box accepts user input
When user enters script tags like "<script>alert('XSS')</script>"
Then the input should be encoded/escaped properly
And no script execution should occur in the browser
4. Database Query Performance
Given large product catalog database
When complex search queries are executed
Then database response time should be within acceptable limits
And query optimization should prevent timeouts
5. Search Input Length Boundaries
Given search box accepts user input
When testing with inputs of varying lengths (1 char, 255 chars,
256 chars,
1000+ chars)
Then the system should handle all lengths gracefully
And appropriate validation messages should appear for invalid
lengths
Now Claude was starting to prove that it was capable enough to pair
with!
Even in real projects, user stories usually have a small scope, with a
handful of acceptance criteria to test. I didn’t provide Claude any
exhaustive context for the project or for my approach to exploratory

testing in my prompt. You could easily do so using context
engineering techniques.
Once I added context on the project and my testing approach as a
Confluence document, the quality of the test cases improved tenfold!
Claude had adopted the given exploratory testing approach and
implemented it step by step. It first listed functional test cases,
followed by failure and error-handling test cases, UI look and feel
test cases, and CFR test cases. The test cases were speaking the
language of the project and were well within the project scope. In
summary, Claude made a good partner, arriving at comprehensive
test cases we could cross-reference against our own thought
processes to avoid missing out on any edge cases.
Let’s try an exercise with Claude Desktop so you can see this in
action.
WARNING
AlthoughthetestcasesClaudegeneratedbecomebetterwithcontext,
LLMscanhallucinateandcanpresentfalseinformation.Don’trelysolely
onanLLMtogeneratetestcases.Ihaveobservedthatsomeofthe
deepertechnicaltestcasesaroundcachingtechniques,system
integrationtestcases,dataissues,andsimilarstillneedhuman
attention.ThinkofLLM-generatedtestcasesasastarterkit;validate
thosequickly,thenusethetimeyou’vesavedtothinkupdeepertest
cases.
Setup
Follow these steps to set up Claude Desktop, Docker, and the MCP
Atlassian tool:
1.DownloadClaude Desktopand create an account, if you
haven’t already.

2.You’ll need, at minimum, a Claude Pro subscription ($20 USD
per month at the time of writing) to try out MCP servers. If
you’re using an enterprise version, read your company’s
security policies before trying an MCP server setup. You can
select any reasoning models, like Claude Sonnet 4.5, for this
exercise. (If you want to choose a different model, refer to
model capabilitieshere).
3.Install Docker, if you haven’t already: downloadDocker
Desktopand follow the instructions at the link.
4.Pull the MCP Atlassian Docker image by running the
following command from your terminal:
$ docker pull ghcr.io/sooperset/mcp-atlassian:latest
TheMCP Atlassiantool allows you to fetch the user story
details from Jira, edit the user story, transition its status, add
comments, and search for Confluence pages from within
Claude Desktop.

A BRIEF INTRODUCTION TO MCP
Model Context Protocol (MCP), an open protocol first
established by Anthropic, standardizes how context from
external sources like databases, files, and project
documentation is fed to LLMs.
MCP follows a standard client-server architecture with
three components:
–The MCP host, which is fed with the relevant
context
–The MCP server, from which the context is
fetched
–The MCP client that establishes the one-on-one
connection between the host and the server
In this exercise, Claude Desktop is the host. It uses the
MCP Atlassian client to connect to the MCP server on the
Jira platform and fetch the user story details. Most of the
MCP tools package capabilities that let you perform
actions on the external source from within the AI host
(like updating the user story in Jira from within Claude
Desktop), which enables a seamless end-to-end AI
workflow.
A BRIEF INTRODUCTION TO DOCKER
Let’s say you are developing an application that requires
installing a series of tools: a PostgreSQL database, Kafka,
Nginx, and so on. A common way to share the
installation details with your team is to hand them a list
of the right versions to install and specific configuration
instructions. However, this often becomes a bottleneck:
each team member could be using a different version of
the operating system, face installation issues due to

incompatibilities with existing tools, and so on. It may
take them a few days to resolve the issues and get their
machines set up. An easier approach is to package all the
application-relevant setups as acontainerusingDocker
and distribute it to your team. Then they just have to
install Docker and download the container, which will
bring up the application with a single command.
Docker essentially isolates the infrastructure and
application software. Running an application in a
container is like having an isolated machine inside your
host machine with application-specific software. The key
advantage is that this machine is shippable, unlike your
host machine. This method is especially useful when
creating QA and production environments, so you can
enjoy the benefits of using the exact same application
binaries everywhere.
Docker is free, but only for personal use. Adhere to your
company’s laptop policies when installing Docker on your
work laptop.
5.If you’re trying this exercise at work,create an Atlassian API
keyfor your team’s Jira and Confluence. For demo purposes,
you can set up afree versionof Jira and use the API key
from there. Remember to add sample projects and user
stories once you create a free Jira account. For instance, I
created a user story (SCRUM-6) for Amazon’s search
functionality with six acceptance criteria, as seen in
Example 2-2.
Example 2-2.SCRUM-6, a sample user story for Amazon
search functionality
In order to place an order, the customer should be able
to search for the

products from the product catalog.
Acceptance Criteria:
• Given the customer types a product category that is
available from the product
category database, the autofill suggestions should show
a list of relevant
product categories for the customer to select from.
• Given the customer selects one product category from
the autofill suggestions
and clicks on the search button, the list of associated
items under the
product category should be displayed with pagination of
only 10 items
per page.
• Given the customer types a keyword that doesn’t match
any of the product
categories, then the autofill should suggest “No
results found” and the
search results page should display the same.
• Given the customer types any characters apart from the
alphabet, then the
behavior should be the same as above.
• Given the customer has searched for a product category,
the results should be
fetched in less than 100 ms.
• The search box should have the default description as
“What would you like to
order today?”.
I also described an epic linked to the user story that talked
about the cross-functional requirements for the feature. For
instance, I specified security, performance, reliability, cross-
browser compatibility, and accessibility as mandatory
acceptance criteria for the epic.

6.To connect Claude Desktop to Jira and Confluence, open the
claude_desktop_config.jsonfile (which is usually placed
under~/Library/Application
Support/Claude/claude_desktop_config.json) and add the
configuration seen inExample 2-3.
Example 2-3.Claude Desktop MCP Atlassian configuration
JSON
{
"mcpServers": {
"mcp-atlassian": {
"command": "docker",
"args": [
"run",
"-i",
"--rm",
"-e", "CONFLUENCE_URL",
"-e", "CONFLUENCE_USERNAME",
"-e", "CONFLUENCE_API_TOKEN",
"-e", "JIRA_URL",
"-e", "JIRA_USERNAME",
"-e", "JIRA_API_TOKEN",
"ghcr.io/sooperset/mcp-atlassian:latest"
],
"env": {
"CONFLUENCE_URL": "https://your-
company.atlassian.net/wiki",
"CONFLUENCE_USERNAME": "your.email@company.com",
"CONFLUENCE_API_TOKEN":
"your_confluence_api_token",
"JIRA_URL": "https://your-
company.atlassian.net",
"JIRA_USERNAME": "your.email@company.com",
"JIRA_API_TOKEN": "your_jira_api_token"
}
}
}
}

7.When you reopen Claude Desktop, you should seemcp-
atlassiannested within the “+” menu in the chat window.
To check if it is connected properly, try prompting Claude to fetch
the user story detail by mentioning its Jira ticket number. It should
ask for your permissions to access Jira and then promptly print the
user story details.
Workflow
The workflow from here is quite simple:
1.First, define an exploratory testing approach to a Confluence
page in your project. You can use“Building Blocks”in this
chapter.
2.Create a new Claude project by clicking on Projects on the
left panel and then selecting the “New project” button on the
top right. It should ask for a project name and description.
Call the project “Exploratory Testing” and enter the
description “Instructions for exploring an application.”
3.Once you have created a new project, it should allow you to
add instructions. This is the prompt Claude will apply to for
any future queries.Example 2-4shows some example
instructions.
Example 2-4.Exploratory testing instructions for Claude
project creation
You're a professional software tester. When asked to
explore a user story in
Jira, follow the steps below:
Steps:
Step 1: Use MCP tools to study the user story acceptance
criteria from Jira.
Step 2: Use MCP tools to get the epic description of the
user story from Jira.
Step 3: Use MCP tools to study the exploratory testing

guidelines from the
Confluence page provide page URL from your Confluence.
Step 4: Apply learnings from steps 1, 2, and 3 to
generate functional test cases
using the "Given, When, Then" format, as shown in the
example below. But DO NOT
restrict the test cases only to those learnings.
Step 5: Apply learnings from steps 1, 2, and 3 to
generate test cases for each
of the cross-functional requirement categories mentioned
in the epic using the
"Given, When, Then" format.
Step 6: Group the test cases under the "functional
requirements" category and
create a separate category for each of the cross-
functional requirements
mentioned in the epic.
----
Example test case:
Given the user is on the home page
When they click on the search button
Then they should see a list of suggestions for search
items.
TIP
Tocraftagoodprompt,firstyoushouldhaveaclearideaof
whattheoutcomeshouldlooklike.Thenfeedthemental
modelforachievingthatoutcomeasstep-by-stepinstructions.
4.Now open the “Exploratory Testing” project chat window by
clicking on it from the Projects section. Prompt “Explore
SCRUM-6” to generate test cases for that particular user
story.
5.On entering the prompt, you should see Claude following the
steps specified in the instructions. It will start by accessing
the SCRUM-6 user story details, then the epic details, then
the exploratory testing guidelines. You will be asked for

permissions whenever it uses the MCP tools (for safety).
With this context, it should generate the list of test cases in
the “Given, When, Then” format under the categories
“Functional Requirements” and “Cross-Functional
Requirements,” as seen inFigure 2-9.
Figure2-9.AI-assistedtestcasegeneration
Notice that Claude generated test cases for each CFR
mentioned in the epic (security, performance, etc.) and that
the test cases imbibed the exploratory testing frameworks,
like boundary value analysis and error guessing. You can

review the list, refine it further, and prompt Claude to add
the test cases to the user story for documentation purposes.
To summarize, you can now automate test case generation through
a defined, standard approach, using the prompt “Exploreuser story”.
Sharing these Claude projects among team members is a way to
establish basic standards for exploratory testing. People often forget
to include the CFRs during exploratory testing; this can be a way to
ensure they are no longer left out. In the subsequent exercises,
you’ll extend the same Claude project to generate test cases for APIs
and use the Playwright MCP tool to do autonomous web UI
exploratory testing. This means you’ll get AI assistance throughout
the end-to-end exploratory testing workflow.
WARNING
RememberthatthereisnoguaranteethatClaudewillalways
understandeveryinstructionthatyou’veprovided,northatitwillabide
byyourguidelines,whichareonlyamechanismtopromptittoproduce
outcomesinacertaindirection.Asmentionedearlier,tomaketheLLM
produceacertaindesiredoutcome,youshouldprovideitwithamental
modelofhowtoarriveatthatoutcomeintheformofinstructionsand
context.Thatiswhattheseinstructionsaimtodo,butbecauseLLMs
arenondeterministic,expecttheoutcomestobedifferenteachtime
andtopotentiallybypasssomeinstructions.
There are several AI-powered test case-generation tools in the
market as I write this in early 2026. Some integrate with existing
tools; for instance, the AI tools in theAtlassian Marketplacecan
integrate with Jira and with test case management systems like
TestRail and Zephyr. AI coding assistants like Copilot or Cursor can
generate test cases and automation scripts, and AI-powered testing
platforms likeBrowserStackandTestMu AIcan generate test cases
based on requirement documents. The tooling landscape changes so

swiftly; therefore, I will offer some important things to consider
when evaluating paid AI tools:
How compatible are they with your existing ecosystem of
tools?
What pertinent problems do they solve for your team?
Unless a tool is fine-tuned with specialized knowledge, such
as on a domain or security or accessibility, don’t pay for it on
top of your LLM subscriptions.
How do the tools fit into your shift-left feedback cycle?
Sometimes tool developers, rushing to make an all-
encompassing testing platform, fail to offer shift-left
integrations.
What kind of security and privacy controls do they offer?
Do you have a clear understanding of the projected cost of
using a tool for your project needs?
We can now move onto learning some exploratory testing tools for
APIs and web UIs.
APITesting
Anapplication programming interface,orAPI, provides a way for
systems to interact with each other. APIs essentially abstract away
the underlying complexities of a system and simplify the exchange of
information over the network as XML, JSON, or plain text using the
HTTP protocol. To standardize information exchange, protocols like
SOAP (this originally stood for Simple Object Access Protocol) and
specifications like REST (Representational State Transfer) were
invented. These days, RESTful APIs are more prevalent than SOAP
APIs, and even the legacy systems that use SOAP are being
rewritten with REST specifications.

To help you understand REST APIs, let’s consider a basic ecommerce
application, like the one inFigure 2-10, with three REST services
(the order, authentication, and customer services), a UI, and a
database.
Figure2-10.Asampleecommerceapplicationwithaservices-basedarchitecture
Aweb serviceis a component that serves an independent purpose
within an application. For example, the order service in our sample
ecommerce application might have the responsibility of managing
(creating, updating, and deleting) orders, while the customer service
is responsible for maintaining the customers’ details. The other
components in the application can access the relevant service’s API
to get the information they need.
Aservice-oriented architectureis one where the core application
functionalities are written as web services, as inFigure 2-10.

Suppose an end user pays for an order via the ecommerce UI. As
shown inExample 2-5, the UI will immediately send an order
creation request to the order service with the order details, and the
order service will process the request and send a response back to
the UI. The ecommerce UI is called aclientin this context.
Example 2-5.Sample REST request and response
// Request
POST method: http://ecommerce.com/orders
{
"customerId":7097,
"cart":[
{
"item_sku":"ABCD1234",
"name":"V-Neck Tshirt",
"color":"Red",
"size":"M",
"quantity":5
}]
}
// Response
Status Code: 201 OK
Response Body:
{
"Msg": "successfully created",
"ID": "Order1234227891"
}
The request in this code hits the API/ordersusing the POST HTTP
method. Typically, POST is used for creating or adding new
information, and GET is used for retrieving information—for instance,
a list of a customer’s orders. There are PUT and DELETE methods,
too, which are used for update and delete operations, respectively.
The request body packages up the order details—in this case, the
item’s stock-keeping unit (SKU), name, color, size, and quantity—as

a JSON object, referred to as acontract. If the client doesn’t stick to
this contract, the service will not process the request.
The response also sticks to a contract: it includes a status code
indicating the success or failure of the operation and may also have
a response body that gives more information. InExample 2-5, the
response status code is201 OK, which indicates successful order
creation, and the response body has a message saying “successfully
created,” along with the order ID generated by the order service. On
receiving this response, the ecommerce UI will take the user to the
order confirmation page and display the order ID on that page. Note
that all these actions happensynchronously—in other words, the
ecommerce UI must wait until it receives a response before moving
on to the order confirmation page.
Now, given this basic understanding of how APIs work, you may
wonder why testers need to explore APIs separately when we can
test the order creation functionality from the web UI. The concise
answer is that today, APIs have become products themselves! APIs
encompass all of the service’s business logic and validations, making
them standalone products that other internal and external
components can reuse. For example, our hypothetical ecommerce
business could build a new mobile shopping app and reuse the same
order creation API, or build a customer support portal with the same
customer service APIs. They could even branch out into an entirely
new domain and reuse the authentication service’s APIs to build
login functionality into that new product. So exploring APIs as
standalone products is very important.
Here are some discovery paths, apart from the core business logic,
to pay attention to when you are exploring APIs:
Request contract validation
Validation should be performed so that, for example, if a
fraudulent client creates a new order with invalid data formats,
the order service rejects the request.

Authentication
APIs are usually protected with some authentication mechanisms
for security reasons, such as sending a token (a long encrypted
string) in the request header.
Permissions
APIs may have restrictions about what operations they can
perform and for which user role. For example, an administrative
assistant may be permitted to edit an existing order, but a
customer service associate may be restricted to just viewing the
order.
Backward compatibility
Sometimes, as a product evolves, its API contracts also need to
change. But since existing clients could be using the APIs, you
may need to create and maintain new versions alongside the old
ones. In these cases, test the application with both API versions.
HTTP status codes
The API should return relevant status codes for technical and
business failures.Table 2-4lists the most common status codes.

Table 2-4.HTTP status codes and their meanings
Status code Meaning
200 OK GET, PUT, or POST requests were successful.
201 Created A new object, such as a new order, has been
created.
400 Bad The request was malformed.
Request
401 The client is not allowed to access the
Unauthorized requested resource and should reissue the
request with the required credentials.
403 Forbidden The request is valid and the client is
authenticated, but the client is not allowed
access to the requested page or resource for
some reason.
404 Not Found The requested resource is not available now.
500 Internal The request is valid but the server is unable to
Server Error handle it, possibly due to internal bugs.
503 Service The server is down (for example, when
Unavailable undergoing maintenance).
Claude Desktop
You can ask Claude to generate API test cases with the discovery
paths discussed earlier. You can prompt it to generate a suitable
request body for each test case. Try extending the Claude project,
“Exploratory Testing,” you created in the previous exercise to include
instructions for generating the API request body for each test case

of the user story (refer toExample 2-8for sample instructions).
Upload the OpenAPI specifications along with it for context about
the API structure. (You can find the option to upload files next to the
instructions when you edit the Claude project.) You can also provide
API-specific guidelines as Confluence documentation. Now, when
you prompt Claude to explore a user story that is relevant to the
OpenAPI specification, it will generate API-relevant test cases.
Figure 2-11shows a test case generated by this Claude project for
the user story to create a new order.
When I performed this exercise in late 2025, Claude Sonnet 4.5
generated more than 40 such test cases, including many of the
status codes discussed above.
Once you have the test cases, you can use open source tools like
Postman (discussed in“Postman”) for validating them against the
APIs hosted in your test environment. This can be a simple
productivity hack to validate the test cases quickly, especially when
the request body is too big. Be sure to review the generated request
body before sending it to the test environment!

Figure2-11.AsampleAPItestcasegeneratedbyClaude
Postman
Postmanis a commonly used tool for API testing. You can install the
desktop version for free, and a web version is also available to try.
Here is a quick introduction to API testing in the desktop application:
1.Open Postman and select New → HTTP Request. This will
take you to the new request window.
2.Do a Google search for “exploratory testing” in your browser,
then copy the URL and paste it in the URL field in Postman’s
new request window, as seen inFigure 2-12. Notice that the
HTTP method is automatically set to GET in the drop-down
next to this field.

3.You will see the parameters of the Google search request
automatically being populated in the Params tab. The query
parameterqwill showexploratory+testing. You can
change this to any other keyword to search for it.
4.Hit the Send button to complete the request.
5.You will receive the response status code, headers, body,
and cookies in the bottom panel, as shown inFigure 2-12.
Figure2-12.Creatinganewrequestandverifyingtheresponsewith
Postman
In this case, the response is HTML. If you click the Preview button,
you will see the exact same page of search results displayed in your
browser. In many cases, the response will instead be a JSON object,
as we saw inExample 2-4; the UI will parse the JSON and display
the right information.
The Google search was a GET request, but the steps for creating a
POST request are similar: choose POST as the HTTP method in the
drop-down, enter the API request in the URL field and the request
body on the Body tab, and hit Send to see the response. If you’d like
to practice some more,APILayerhas a consolidated list of 1,400
publicly hosted REST APIs that you can try.

Postman, by default, saves your workspace in the cloud. This feature
is helpful tosync your workon a new machine. However, ensure that
syncing to Postman’s cloud doesn’t violate any nondisclosure
agreements (NDAs) with clients or your internal IT policy.
Postman provides several other facilities for exploring APIs (some of
them available only as part of itspaid version), including the
following:
The token sent for authentication purposes can be sent
along with the request by adding it on the Authorization tab.
You can add invalid strings there to verify that the request
fails.
Similarly, when cookies are sent along with the request, they
can be added on the Cookies tab.
Postman captures the time taken to receive the response, as
seen next to the status code inFigure 2-12. This is a helpful
place to explore if performance degrades for different inputs.
Instead of creating requests manually, you can directly
import the API specifications from tools like Swagger and
OpenAPI with their links. Postman also provides support for
testing GraphQL and SOAP services, in addition to REST
services.
You can also add validations on the API response, making it
an API test automation platform. These tests can be
grouped ascollections, shared with your team members in
the workspace, and run regularly, including in CI/CD
pipelines.
Postman also introducedthe Agent Mode, an AI assistant integrated
within the Postman Desktop application that simplifies generating
test cases, writing test scripts, and debugging test failures. It
generates common API-related test cases based on its

understanding of the API specifications, as seen inFigure 2-13, and
you can add more tests relevant to the user story by prompting it.
Figure2-13.Postman’sAgentMode-generatedtestsfortheordercreation
endpoint
WireMock
WireMockis a tool for creating and alteringstubs, which are
software components that emulate another component’s behaviors.
Stubs are especially useful when developing and testing complex
applications with multiple integrations, where not all the integrating
services are ready yet. The teams agree on a service contract and
create stubs of the integrating services so they can continue

development. Stubs are explicitly programmed to respond to
particular requests with a defined output. This feature can be used
in exploratory testing to set up different positive and negative
integration test cases. Of course, it’s imperative that you test the
end-to-end functionality with the actual components once they are
ready.
Your DevOps engineer or the developers can set up the stub server
and configure the application to point to the stub. This exercise
shows you what testers need to know, which is how to alter the
stubs to simulate the test cases. To illustrate the use of WireMock,
let’s go back to our example ecommerce application. Suppose you
don’t have an actual payment service to integrate yet, but you know
the request and response contract of the/makePaymentendpoint,
which the ecommerce UI uses to send payments. To explore the
different test cases of this integration, you need to set up a stub of
the/makePaymentendpoint with positive and negative responses.
Here are the steps:
1.Download the standalone WireMock JAR (Java archive file)
from theofficial website.
2.Open the terminal and run the following command with the
JAR version that you downloaded:
$ java -jar wiremock-jre8-standalone-x.x.x.jar
This will start a WireMock server on port 8080.
3.To create a new stub, construct the/makePayment API
contract, as seen inExample 2-6, and send a POST request
to thehttp://localhost:8080/__admin/mappings/new
endpoint using Postman. (That is, in Postman’s new request
window, set the HTTP method to POST in the drop-down,
enter the URL in the URL field and the JSON inExample 2-6
in the Body → raw section, and hit Send.)

Example 2-6.Sample stub using WireMock
{
"request": {
"method": "POST",
"url": "/makePayment"
},
"response": {
"status": 200,
"body": "Payment Successful"
}
}
4.Now check that the stub works by creating another POST
request to hit thehttp://localhost:8080/makePaymentURL.
You should receive a response with status code 200 OK and
the message “Payment Successful,” as described in the stub.
Our imaginary ecommerce UI would show an order
confirmation page on receiving this response.
5.To alter the stub to return a failure response, change the
response body inExample 2-6to the following and POST it
to the same/mappings/newendpoint:
"response": {
"status": 401,
"body": "Payment Unauthorized"
}
On receiving this response, the ecommerce UI would show
an error message.
Similarly, you can set up other test cases (like invalid requests or
service unavailable scenarios) with appropriate status codes in the
response body and observe whether the UI handles them
appropriately. As you can see, stubs lend a helpful hand in API
exploratory testing when actual integrating services are not available
to test.

Next, let’s move on to web UI exploratory testing tools.
WebUITesting
This section throws light on three essential web UI testing tools:
browsers, the Auto Data Filler browser extension, and Chrome
DevTools, and provides an exercise on AI-assisted web UI testing
using Playwright MCP.
Browsers
The first and foremost tool for exploring a web UI is the browser. A
best practice in testing is to cover at least 85% of your application’s
user base. At the end of 2025, the most recent stats on the global
distribution of browser usage fromgs.statcounter.comshowed that
Chrome had about a 67% share, followed by Safari, Edge, Firefox,
and Samsung Internet. These statistics indicate that your UI tests
need to include, at minimum, Chrome, Safari, and Edge. You can
download any of these browsers onto your local machine for any OS.
It is sometimes necessary to test on older browsers like Internet
Explorer 11 or Edge Legacy, though Microsoft has officially ended
support for these versions. One way to do this is to use cloud-hosted
testing platforms likeBrowserStackandSauce Labswhich provide
virtual access to a variety of web browsers on different OSs. The
processis simple: pay for asubscription(free trials are also
available), log in, pick a combination of browser version and OS, and
test your application.
BrowserStack also enableslocal testingof private applications,
hosted in QA or staging environments. If you need to test on a wide
range of older browsers, subscribing to such a service may be
worthwhile.

Auto Data Filler extension
Auto Data Filleris a browser plug-in for Chrome and Edge that
enables testing edge cases in a web application. It provides a list of
common test cases and appropriate values to be entered in the
editable elements of the application for each test case, essentially
functioning as a checklist for exploratory testing. To try it out, install
theplug-in, then open Google Search and right-click on the search
text field.
You will find Auto Data Filler in the right-click menu, as shown in
Figure 2-14. It will suggest a lot of edge cases. Try choosing “Names
→ Name Length” and select the first name. It will be populated in
the Google search text box. If there are validations in your
application for input string length, an appropriate error message
should appear.
Figure2-14.YoucanusetheAutoDataFillerplug-inasaguideduringmanual
exploratorytesting

In addition to these extensions, there are also severalexploratory
testing heuristics cheat sheetsthat you can use to ensure that you
are not missing test cases. These are especially helpful for
beginners.
Playwright MCP
Playwright is an end-to-end UI testing automation tool that can
navigate through the browser and perform actions on the web
application like an end user would.Playwright MCPmakes these
capabilities available to LLMs, which can be tailored to conduct
exploratory testing.
Here, you are going to use it to execute the test cases that your
Claude project identified earlier. You’ll use it to open the Amazon
home page, input the invalid search query, check the error message,
and report whether the test case passed or failed. All you need to do
is configure the MCP tool to add it to the previous setup and instruct
Claude on how to use it. If you haven’t already, set up Claude
Desktop and the MCP Atlassian tool (refer to“Test Case
Generation”). Next, install the Playwright MCP tool by running the
following command from your terminal:
$ npm install @playwright/mcp
Then link it to Claude Desktop by adding the configuration in
Example 2-7to theclaude_desktop_config.jsonfile.
Example 2-7.Playwright MCP configuration for Claude Desktop
{
"mcpServers": {
"playwright": {
"command": "npx",
"args": [
"@playwright/mcp@latest"
]

}
}
}
When you reopen Claude Desktop, you should see Playwright under
the “+” menu along with the MCP Atlassian tools.
You need to edit the “Exploratory Testing” Claude project
instructions to include Playwright MCP tools.Example 2-8includes
both API test case generation and using Playwright for exploratory
testing.
Example 2-8.AI-assisted exploratory testing instructions for Claude
project
You're a professional software tester. When asked to explore a
user story in Jira,
follow the steps below:
Step 1: Use MCP tools to study the user story acceptance criteria
from Jira.
Step 2: Use MCP tools to get the epic description of the user
story from Jira.
Step 3: If the user story is about creating a new endpoint, then
refer to the OpenAPI
specification from the knowledge base for reference.
Step 4: If there is a web page URL provided to explore, use the
Playwright MCP tools
to open the website and explore the functionality. DO NOT limit
the exploration only
to those acceptance criteria from the story or epic, but keep the
exploration only to
the single functionality specified in the user story. DO run the
steps one by one
using the tools provided in Playwright to explore that one
specified functionality
in the user story.
Step 5: Use MCP tools to study the exploratory testing guidelines
from Confluence
page URL.
Step 6: Apply learnings from steps 1, 2, 3, 4, and 5 to generate
functional test
cases using the "Given, When, Then" format, as shown in the

example below. But DO NOT
restrict the test cases only to those learnings.
Step 7: Apply learnings from steps 1, 2, 3, 4, and 5 to generate
test cases for each
of the cross-functional requirement categories mentioned in the
epic using the
"Given, When, Then" format, as shown in the example below. Use
the knowledge base
checklist if you're supposed to generate test cases for the
accessibility category.
Step 8. Group the test cases under the "functional requirements"
category and create
a separate category for each of the cross-functional requirements
mentioned in the
epic.
Step 9. Present key findings from your exploratory testing of the
acceptance
criteria.
----
Example test case:
Given the user is on the home page
When they click on the search button
Then they should see a list of suggestions for search items.
---
Now, in the Exploratory Testing project, prompt:
Explore SCRUM-6 at test environment https://www.amazon.in/
Claude should follow the instructions to get the user story details,
epic details, and Confluence guidelines; explore the website using
Playwright; and present a comprehensive list of test cases.Figure 2-
15shows these steps executed.

Figure2-15.Claudereportonexploratorytesting
You will also be presented with key findings from the exploratory
testing, as shown inFigure 2-16. Notice that Claude has identified
deviations from the acceptance criteria of the user story. For
instance, finding 2 highlights a difference in the placeholder text on

the search input field, and finding 4 notes that the number of items
per page is more than the expected count of 10.
Figure2-16.Claudereportsdeviationsfromacceptancecriteriaas“KeyFindings”
WARNING
Iwanttoreiteratemypreviouswarning:thefindingsClaudepresents
maycontainhallucinatedoutcomes.Forinstance,itcouldclaimthata
testcasepassedwithoutactuallyexecutingit.Keepacloseeyeonit!
This is one way to use Playwright MCP’s abilities to conduct
exploratory testing. You can also omit some instructions and let it do
some free-form exploration to find new test cases on its own. Some
testers ask it to generate test scripts to automate the test cases it
identifies.Chapter 3looks into the pros and cons of this approach.
Chrome DevTools
Chrome DevToolsis as versatile as a Swiss Army knife, with a
multitude of provisions that assist in exploratory testing, security
testing, performance testing, and more. It also has integratedAI
assistancefrom Gemini. I’ll discuss this tool and its capacities
throughout the book. To get an idea of what it offers, open your
Chrome browser and search for “exploratory testing.” Right-click on

the search results page and select Inspect. DevTools will open
immediately. From there, you can explore an array of things,
including the following:
Page errors
The Console tab shows errors on a web page (seeFigure 2-17).
It’s a good idea to check this tab as you land on each new page
of the test application. Errors reported in this tab can also help
with debugging. For example, if an image is missing, you can
check the Console tab and include the error reported there with
your bug report.
Figure2-17.TheConsoletabshowingtheerrorsonawebpage
Number of requests made from a page
Sometimes, due to errors in the application logic, a web page
may make manyunwanted API callsand become slow. You can
catch such issues in the Network tab, which shows the total
count of requests sent from that page at the bottom left.
First-time user behavior
When you test the same application repeatedly, your browser will
cache some resources, such as images on the web pages. But if
an image is changed during development, this may go unnoticed.
Use the “Disable cache” checkbox on the Network tab to clear

the cache and view the page again. The cache works similarly for
end users, so this provision helps you to explore first-time users’
experience of the application.
UI behavior on slow networks
To explore the experience of an end user with limited network
bandwidth, you can throttle the network from the Network tab
and observe the UI’s behavior. The drop-down menu next to the
“Disable cache” checkbox allows you to simulate 2G, 3G, and 4G
network conditions. Select an option, clear the browser cache,
and reload the page. DevTools will display a series of screenshots
(Figure 2-18) that tell the story of how the application gradually
loaded at the specified bandwidth. Progressive web apps
(discussed inChapter 11) work even when offline, and the
network-throttling drop-down includes an option to go offline to
verify this behavior.
Figure2-18.NetworkthrottlingusingChromeDevTools
UI and API integration
The Network tab captures all the network calls on the web page,
including any calls to web services from the UI. It records the
request and response headers (including authentication tokens),

query parameters, responses, and other useful information about
every request made, as seen inFigure 2-19.
Figure2-19.RequestandresponsedetailsontheNetworktab
This request/response information can be used to explore UI and
API integrations. For example, you can check if the UI passes the
correct query parameters as entered by the end user to the
correct endpoint. Also, you can observe the UI’s behavior for
different responses from the service. For instance, it should show
an “Item Unavailable” error message when the item availability
API returns a 404 status code.
Service down behaviors
When you have to simulate request-failure test cases, you can
block a specific request from the Network tab and observe the
UI’s behavior. For example, find the first image-loading URL in
the “exploratory testing” Google search results on the Network
tab, right-click and choose “Block Request URL” from the menu,
and reload the page. The image will be blocked from loading in
the UI. You can use this feature to test a “service down” scenario
without actually bringing the service down.
Cookies

Cookies are primarily used to store session information in an
application. The Application tab lists details about stored cookies
(Figure 2-20). You can also edit or delete cookie values from this
tab during exploration and observe the application’s behavior.
Figure2-20.CookiescanbeeditedordeletedfromtheApplicationtab
To read more details about Chrome DevTools features, check out the
official documentation.
AdditionalTestingTools:SyntheticDataVault
I’ve seen test data make or break manual exploratory testing.
Without proper test data, teams cannot cover all edge cases. In both
manual exploratory testing and performance testing, the closer the
test data is to the production data (in size and in distribution), the
better the results are. Anonymizing the production data and using it
in the testing environment is an option, although this requires due
diligence to avoid compromising security and adhering to privacy
laws. This means that it’s sometimes necessary to use synthetic test
data.
The Synthetic Data Vault (SDV) is an AI-powered test data-
generation tool based on decades ofMIT research. The SDV learns
the characteristics of your production data using machine learning

and deep learning techniques, and creates volumes of tabular
synthetic data with similar statistical distributions. For instance, if
you’re testing an ecommerce application, your production data might
have a larger distribution of middle-aged customers and some
products that sell more than others. If you want to replicate such
distributions, even those that you’re not aware of, this tool can help.
The SDV is available as anopen source Python library. You can feed
it database tables as comma-separated values (CSV) files, and it will
use that data to generate thousands of synthetic data records. The
data you feed in is not replicated in the synthetic data, to maintain
anonymity and privacy. The SDV also offers a paid enterprise version
with enhanced ML and DL models andAI database connectorsthat
can plug directly into your production database (optionally
anonymizing sensitive information), learn from it, and generate
synthetic data in your test database. The SDV’s documents say that
an anonymized production sample set containing 2,500 records
should be a good starting place for creating the required synthetic
data. Especially in large-scale legacy databases with multiple
interconnected tables, tools like the SDV that can learn and retain
the relationships come in handy. If you want to get a quick sense of
the tool, try out the SDV’sGoogle Colab notebookfor multiple-table
synthetic data generation.
You’re now equipped with a handful of tools to get started with
exploring APIs and web UIs. But there is one more key topic in
manual exploratory testing: maintaining good hygiene in the test
environment.
Perspectives:TestEnvironmentHygiene
Thetest environmentis the playground where testers apply their
exploratory testing skills. Maintaining it poorly directly affects your
test outcomes, so it’s important to look for maintenance “smells” and

remedy them as quickly as possible. Here are some you might
encounter, along with their impact and how to overcome them:
Shared versus dedicated test environments
In large companies, multiple subteams often share a single test
environment. This greatly restricts testers’ ability to meddle with
the environment in the ways dictated by their individual teams’
discovery paths. For example, if they need to bring a service
down momentarily, they need to get consent from other teams.
Worse, they need to coordinate with other teams or wait for the
next scheduled deployment, which may be once a day or once a
week, to explore the latest code. Having a dedicated test
environment for each individual subteam gives its testers the
liberty to explore adventurously.
Deployment hygiene
Once the team has its own dedicated environment, use a manual
trigger for new deployments instead of automated deployments
through the CI pipeline, which could alter the test environment’s
configurations without warning. Make the build available for
deployment in the CI pipeline only when it has passed the
automated test run stage to ensure that there are no open
defects in the latest code, which can block exploratory testing.
(You’ll learn more about CI and deployment strategies in
Chapter 4.)
Set up the test environment to resemble the production
environment as closely as possible, including firewalls, separated
tiers and components, rate limit configurations, and the like, as
part of the deployment. Only then can you explore the failure
test cases thoroughly.
Test data hygiene

Test data hygiene comes under the testers’ purview, and they
should follow certain practices to avoid unintentionally derailing
their own explorations. In particular, be wary of stale data and
configurations when testing a new feature in the same
deployment. To avoid such complications, make it a point to
deploy a new build whenever you start a new user story
(assuming that a new deployment will clear out the old data and
configurations and restore the application to a fresh state).
Another option is to create a new set of test data for every user
story: for example, create a new user instead of exploring with
existing users, which could be in different states.
Autonomous teams
Access to test environments is usually restricted. If team
members don’t have the appropriate login credentials or
permissions to update configurations, look at application logs, or
set up stubs, they will need to request assistance from the
DevOps or system maintenance teams. This is especially
frustrating during exploratory testing, where the testers need
access to all application components. Ensuring that the team is
autonomous and has access to everything it needs will cut down
on such delays.
Third-party services setup
Teams usually leave third-party services out of their test
environment setups, assuming that they can test the integrations
directly in production. This may result in unwanted blockages,
especially when problems are discovered too late in the delivery
cycle. When setting up the test environment, make sure there’s
some way to explore integrations with third-party services, either
by employing stubs or by paying for limited access to those
services.

KeyTakeaways
Manual exploratory testing is an art. It draws its energy from the
tester’s analytical and observational skills, so there isn’t really a set
way to validate its outcomes. In other words, today your analytical
brain could spark a discovery path that leads you to uncover bugs,
but it may not do the same tomorrow. You can use AI to get a
starter kit of test cases to cross-validate with your explorations. You
cannot guarantee a foolproof outcome, so it’s important to maintain
the disciplined approach toward exploratory testing discussed in this
chapter.
Here are the key takeaways from this chapter:
Manual exploratory testinginvolves wandering through the
test application with the intention to explore and understand
the application’s behavior, which may eventually lead to
discovering new user flows and bugs in the existing user
flows.
Manual exploratory testingdiffers frommanual testingin
that the latter is about checking a list of specifications, while
the former relies on an individual’s analysis and keen
observational skills.
Exploratory testing brings together the business needs, the
technical implementation, and the end user’s perspective
while challenging what is known to be true from all these
angles.
This chapter provided a pack of eight exploratory testing
frameworks that can assist in structuring the tester’s thought
processes and deriving meaningful test cases.
Your strategy for manual exploratory testing should
emphasize understanding the application’s details in five
broad areas (user personas, domain, business priorities,

infrastructure and configuration, and architecture) and
exploring four essential pathways (functional user flows,
failures and error handling, UI look and feel, and cross-
functional aspects).
Exploratory testing is a continuous process that should be
repeated in different phases of the SDLC, such as in dev-box
testing, user story testing, bug bashes, and release testing.
To explore different discovery paths in an application, you
may need to learn to use new tools. This chapter discussed
relevant API and web UI exploratory testing tools with AI
assistance, such as Claude, Playwright MCP, Postman,
WireMock, Auto Data Filler, and Chrome DevTools. New tools
will doubtless continue to emerge.
The test environment is the playground for manual
exploratory testing, and maintaining its hygiene is critical to
achieving your testing goals.
Manual exploratory testing is a highly individual process that
relies on analytical and observational skills. A structured
approach to exploratory testing is vital to streamlining its
outcomes.

Chapter 3.Automated
Functional Testing
Automated testingis the practice of using tools instead of humans to
perform user-like actions on an application and verify its expected
behavior. Such automated testing does not replace manual testing.
Indeed, businesses need to do both manual and automated testing
to deliver a high-quality product, and they need a wise strategy to
balance them. In a nutshell, the strategy will be to use your manual
testing capacityto performmanualexploratorytesting to discover
new test cases, then automate them to cater to regression testing.
Chapter 2discussed manual exploratory testing; this chapter’s goal
is to teach you to test all layers of web applications effectively using
automated functional testing. I’ll introduce a strategy to speed
feedback, and show you how to use automation tools and set up
frameworks at different application layers. The chapter also has
exercises on creating agentic test-authoring workflows using AI
coding tools. I’ll end by showing you some antipatterns and how to
alleviate them in the early stages. Are you ready? Let’s dive in!

WHY AUTOMATE TESTING?
Automated testing significantly reduces the cost of testing in the
long term and gives software teams faster feedback than they
would get with manual testing. To show why this is the case, let’s
consider a scenario where you only perform manual testing
throughout your application development cycle, and see how
automated testing compares in the same situation.
Let’s say that a feature in your application has 20 test cases, and
you take two minutes to manually execute each test case. In
total, it will take you 40 minutes to test the feature manually.
When the feature is enhanced with a second feature, you need
to test the integration of both the features, additionally, and
make sure the changes haven’t broken anything in the first
feature—a practice referred to asregression testing. If you don’t
do regression testing early enough, you won’t find integration
bugs until release testing, which is very late in the cycle and
might delay the release timeline. So, in the example, if the
second feature also has 20 test cases, regression testing of the
first feature along with the new feature will take 80 minutes;
when there is a third feature, 120 minutes; and so on. Soon
enough, when your application has to go live with 15 features,
you will have to plan an average of 600 minutes (or 10 hours) to
test them all!
To make matters worse, sometimes a mature application has to
work across different versions of services. Your testing time will
increase proportionally to the number of versions that need to be
supported. For example, if a service has two versions, your
application testing time will become 1,200 minutes (15 features
× 40 minutes per feature × 2 service versions) for every release.
Additionally, if you find bugs, depending upon their nature (such
as a bug that requires a change in the DB schema), you might
end up spending another 1,200 minutes testing the application

before going live! Testing time thus increases as new features
get added to every release.
Businesses that don’t invest enough in automated testing combat
this problem by increasing their manual testing capacity—but
they still get slower feedback than they would with automated
testing. For example, for our hypothetical application, even if
there are 12 people testing in parallel, it will still take them 100
minutes, whereas automated tests in the right layers can run
much faster and give quicker feedback—within an hour. It’s also
important not to forget that if you have automated tests, you
don’t have to assemble your 12 teammates at midnight to test
an urgent production defect fix before releasing. And even if you
dare to take that approach, manual testing can be error-prone,
as it depends heavily on the quality of the test cases’
documentation and execution.
Of course, there are costs to creating automated tests and
running them regularly. However, such costs have to be weighed
against the value of delivering the product quickly and frequently,
and the confidence it gives the team during development and
while fixing production issues.
BuildingBlocks
Automated functional testing, like all testing, must be practiced at
both the micro and macro levels of the application to deliver high
quality, as you learned inChapter 1.
When it comes to implementing such testing, some organizations
focus solely on the macro-level tests in the higher layers of the
application, adding more and more UI-driven end-to-end functional
tests, but entirely missing out on the micro-level tests in the lower
layers of the application. For example, one team I consulted with
had more than 200 UI-driven end-to-end functional tests; the suite

took eight hours to run every day, only to fail at the end due to
either a failure in the dependent components or infrastructure
issues. This is clearly an antipattern: the feedback it delivers is
neitherquick nor stable. This is why teams need to include both
micro- and macro-level tests as part of their automated functional
testing efforts: the micro-level tests run faster and are more stable.
Let’s start with an introduction to the different types of micro- and
macro-level tests. Later, we’ll walk through some exercises that will
guide you in implementing them.
IntroductiontoMicroandMacroTestTypes
As we discuss the different test types, I’ll compare four of their
traits:
Thescopeat which they operate
Thepurposethey fulfill
Theirspeedin giving feedback
The amount ofeffortneeded to create and maintain them
Once you understand these fundamental traits, you can tailor your
automated testing efforts appropriately based on your project’s
needs. To explain the different test types, we’ll return to the
hypothetical ecommerce application fromChapter 2.
Figure 3-1shows the application’s three layers: the ecommerce UI,
the RESTful services (authentication, customer, and order services),
and the database (DB). Briefly, the UI interacts with the services to
process information, and the services communicate with the
database to store and retrieve relevant information. The application
also integrates with an external product information management
(PIM) service and downstream systems (the warehouse
management system and so on) in order to fulfill the orders.

A typical user flow in the application would be as follows: the user
enters their credentials in the ecommerce UI, the credentials are
sent to the auth service for verification, and upon successful login,
the user searches for products and places an order via the
ecommerce UI. The order service receives the user’s order, validates
the product information against the PIM service, and passes it on to
the warehouse management system to trigger the delivery process.
Figure 3-1also shows the different micro- and macro-level tests
required at each layer to meet this application’s automated
functional testing needs. Let’s unfold them one by one.
Figure3-1.Microandmacrotestsatappropriatelayersofanexampleservice-
orientedecommerceapplication
Unit tests
Unit testsare performed in all of the services and in the UI layer.
These tests validate the smallest portions of an application’s

functionality, such as verifying a method’s behavior in a class. This is
the level at which you will want to add automated tests for most
basic input validation.
Let’s say the order service has a method called
return_order_total(item_prices)that returns the total order
amount. Some of the unit tests you could add to verify its behavior
are as follows:
Return the total amount whenitem_priceshas a negative
value due to discounts.
Return the total amount whenitem_pricesis empty.
Return the total amount whenitem_pricescontains an
invalid value (such as letters or symbols).
Return the total amount when item prices are sent with
different currency symbols and separators (if the application
supports localization).
Return a properly rounded total amount with fixed decimal
values.
Unit tests reside within the application’s codebase and are written by
developers. In teams that followtest-driven development (TDD)
practices, developers write unit tests before they write the
application code, make them fail, and then add just enough
application code to make them pass. This practice helps keep
unwanted and untested logic out of the code. JUnit, TestNG, and
NUnit are popular backend unit-testing frameworks; Jest, Mocha,
and Jasmine are popular for frontend unit testing.
Unit tests are the fastest to run. Since they reside inside the
codebase, they are easy to create and maintain. They are usually
run as part of the build stage on a local developer’s machine,
providing quick and early feedback, a key part of shift-left testing.

Integration tests
Most medium and large web applications have quite a few
integration points with internal and external components, such as
services, the UI, databases, caches, filesystems, and so on. These
components may be distributed across network and infrastructure
boundaries. To test that all these integration points work as
expected, you need to writeintegration teststhat run against the
actual integrating systems. The focus of such tests should be to
verify the positive and negative integration flows, not the detailed
end-to-end functionality. As a result, they should ideally be as small
as unit tests.
In the ecommerce application example fromFigure 3-1, the order
service integrates with internal components, including the
1
ecommerce UI and the database, to exchange information. It also
integrates with the external vendor PIM service and the downstream
systems. You would need to write integration tests for each service
to verify whether it can properly communicate with other dependent
services and with the DB. For the order service, you should also test
the integrations with those external systems and services.
You can use the same frameworks to write unit and Integration
tests, along with specific tools to simulate the integration—for
example, JUnit can be used withSpring Data JPAto write DB
integration tests. These tests also reside with the application code,
making them relatively easy for developers to create and maintain.
Their speed depends on how long the external system takes to
respond, so they can be slower than unit tests, which run in
complete isolation.
Contract tests
Integration tests may not be feasible if the integrating services are
also under development. This is mostly true in large-scale application
development, where multiple teams work independently on different
services. In such projects, teams agree on a standard contract for

every service and work with stubs of the dependent services until
they are ready. However, when using stubs, you have no way to
know if the actual integrating services’ contracts have changed! If
so, you might not find out until you do integration testing with real
services, at the end of the development cycle. Until then, you’ll be
building new features on top of broken contracts. This is one of the
primary reasons to have contract tests.
Contract testsare written to validate the stubs against the actual
contracts of the integrating services and to provide feedback
throughout development. They focus on the contract structure rather
than checking the exact data returned by the integrating service.
The example ecommerce application should add contract tests to
validate the external vendor PIM service’s contract, so that whenever
it changes, you can change the order service features accordingly.
You can also write contract tests for integrations between the
ecommerce UI and the services, if they are developed in parallel.
The collaborative end-to-end workflow of contract testing can be
automated with tools like Postman and Pact, and is discussed in
detail later in the chapter.
Contract tests, in general, run very quickly because their scope is
small: they are simply verifying the contract structure. They reside in
the codebase and are relatively easy to create and maintain;
because their end-to-end setup requires collaboration between
teams, however, they’re not as simple as unit tests.
Service tests
AsChapter 2discussed, APIs need to be treated as products and
tested thoroughly, independent of the UI’s behavior. This is the focus
ofservice tests.
Services essentially handle all domain-specific logic, such as business
rules, error criteria, retry mechanisms, and data storage. They
validate requests’ structures and value formats and reject invalid
requests. This is where macro-level testing begins: as service tests

cover integrations, domain workflows, and so on. Some service tests
for our ecommerce application’s order service could be as follows:
Verifying that only an authenticated user can create a new
order
Verifying that an order gets created only if the items are
available at the point of creation
Verifying that the right HTTP status codes are returned for
positive and negative inputs
Similarly, every service needs service tests for all its endpoints.
Service tests sometimes live in a separate codebase, but to get fast
feedback, it’s best to keep them as part of the service components.
They’re slightly more complex to create and maintain than unit tests,
since they involve a real test data setup in the DB. Usually, the
testers in the team own these tests. They run faster than the UI-
driven end-to-end tests and slightly slower than the previous three
micro-level tests (unit, integration, and contract tests). Tools like
REST Assured, Karate, and Postman can be used to automate API
tests.
UI functional tests
UI-driven functional testsare run on an actual browser and mimic
the user’s actions in the application. These tests give us feedback on
integrations between multiple components, such as services, the UI,
and the DB. These macro-level tests should focus on validating all
critical user flows. One example of a critical user flow in the
ecommerce application is searching for a product, adding the
product to the cart, paying for the product, and getting an order
confirmation. This can be added as a UI functional test. When
writing such tests, avoid validating the same details covered in your
lower-level micro tests again, as this will be redundant and increase
execution time. For instance, unit tests should cover verifying order

totals for different combinations of item prices; you don’t need to
validate that again as part of a UI functional test.
UI functional tests are usually kept apart from the application code
as a separate codebase. They mainly come under the testers’
purview, although they may be jointly owned with developers. These
tests take longer to run and tend to be brittle, because they depend
on the entire application stack’s behavior being stable (the
infrastructure, the network, and so on). Maintaining them requires
considerable effort compared to other types of tests, since failures
could happen anywhere across the entire application—for example, a
change in an element ID, a delay in page load, or unavailability of
services due to environment issues.
Tools like Selenium WebDriver and Playwright are popular for writing
automated UI tests. You’ll find exercises for both of them later in the
chapter.
NOTE
EverytimeyouthinkaboutaddingaUIfunctionaltest,firstask:
Whatisthepurposeofthistest?
CouldIachievethesamepurposewithlower-levelmicrotests?
End-to-end tests
As the name suggests,end-to-end testsshould validate the entire
breadth of your domain workflow, including downstream systems. In
the ecommerce application, after an order is placed on the website,
the downstream systems actually fulfill the order, so it’s important to
test this end-to-end domain flow for proper integration.
Depending on the application context, UI functional tests often
become end-to-end tests. If not, you should create separate end-to-
end tests to cover the entire integration flow, using a combination of

UI, service, and DB testing tools. Obviously, these tests take the
longest time to run and require more maintenance, since they need
a stable environment and test data setup across various systems.
The intent of these tests is to determine whether all the components
are integrated properly end to end, not to test the components’
functionalities, so you can just have a few tests that will activate all
your components.
Table 3-1summarizes the micro- and macro- test types and their
traits discussed so far.

Table 3-1.Micro and macro test types and their traits
Test Micro/
| type | macro | Test scope | Effort | Run |
| --- | --- | --- | --- | --- |
| Unit | Micro | Validates a method in a class | Minimum | Fast |
| Integration | Micro | Validates integration moderate between two components | Min– | Fast |
| Contract | Micro | Validates contracts of two integrating services | Moderate | Medi |
| Service | Macro | Validates functionality at the API layer | Moderate | Medi |
| UI | Macro | Validates web user journey | Moderate | Slow |
| End to end | Macro | Validates end-to-end user journey, including downstream systems | Maximum | Slow |

It’s common for developers to write all the micro-level tests during
development and testers to write the macro-level tests as part of the
testing phase. However, this depends on the skill sets available and
can vary from team to team.
Now let’s discuss a widely adopted strategy for automated functional
testing that you can build on to suit your project’s specific needs.
AutomatedFunctionalTestingStrategy
The concept of thetest pyramid, introduced by Mike Cohn in his
2009 bookSucceeding with Agile(Addison-Wesley Professional), is
enough to sum up the strategy in a line: “Add tests to validate the
right scope of the functionality in the right layers of the application
such that they give the fastest feedback to the team.” Cohn
recommends having a broad bucket of micro-level tests and
gradually reducing the number of macro-level tests as their scope
increases. For example, if you have 10xunit andintegrationtests,
you should have 5xservice tests and onlyxUI-driven tests. If you
layer these on top of one another, with the unit tests at the bottom,
they form a pyramid (Figure 3-2shows a typical test pyramid for a
service-oriented web application). The reason for such a
recommendation is that as the scope of the tests increases, they
take more time to run and cost more to write and maintain.

Figure3-2.Testpyramidforaservice-orientedwebapplication
I have seen the test pyramid work in practice. I mentioned a project
that had 200+ UI-driven end-to-end tests; once we transformed it to
adhere to the test pyramid, the team was able to get feedback from
around 470 tests within 35 minutes!

NOTE
Althoughthetestpyramidistheidealtopursue,itisnotalways
possible,duetopracticalpitfallssuchaslackingafullydeployedtest
environmenttosupportend-to-endtests,thetoolstoautomatecertain
functionalities(suchasbarcodescanning),or,bluntly,therightskills.In
suchcases,bemindfulofthetrade-offsyou’remakingandchoosetests
thatcanstillgiveyoufastfeedbackdespitetheseconstraints.Other
automationtestshapesincludethehoneycombandthetesttrophy,but
theyallemphasizethesameprinciple:micro-leveltestsareeasierto
writeandrunthanmacro-leveltests.Theshapeschangeasthey
changethetestscope.
Your automation strategy should also have a way to track
automation coverage to avoid building up a backlog. You can use
test-management tools like TestRail, project management tools like
Jira, or even something as simple as an Excel sheet, buttracking
automation coverage isessential. For various reasons, many teams
omit (or set aside) their automation efforts from the user story’s
scope. This leads to delayed and incomplete feedback, degrading
their confidence in the automation suite itself. Tracking all the test
cases and ensuring they are automated can help you avoid this. An
ideal practice, and one that many Agile teams follow, is to call a user
story “done” only if you’ve automated all of its micro- and macro-
level tests!
AI coding tools can support all of the test types in the pyramid,
which I will discuss in“Exercises: UI Functional Tests”.
Exercises:UIFunctionalTests
Having explored all of the test types, it’s time to flex those coding
muscles. The exercises will get you started with setting up an
automated functional testing framework in three of the application
layers: UI-driven functional tests using both SeleniumWebDriverand

Playwright; service tests using REST Assured, and unit tests with
JUnit. In particular, I’ll demonstrate how to use AI coding assistants
like GitHub Copilot and Claude Code to create agentic test-authoring
workflows. Let’s get started with UI-driven functional tests.
TIP
Acoupleofpointersforchoosingyourautomationtechstack:
It’sbesttokeepitsimilartothedevelopmenttechstack,so
thatyourteammembersdon’thavetolearnanentirelynew
setoftools.I’veobservedthatwhenteamshavedifferenttech
stacksfordevelopmentandtesting,developersresistowning
thetests,hinderingtheobjectivesofshift-lefttestingandfaster
feedback.
Avoidtheurgetopullthetestsfromalllayersintoacommon
codebase.Keepthetestswithintheirrespectivecomponentsin
eachlayer,sothatwheneversomeonereusesacomponent,the
testsareshippedalongsideit.Thisimpliesthatthetechstack
choicesineachlayerwilldependontherespective
component’sdevelopmenttechstack.
Selenium WebDriver and Playwright are two popular tools that aid in
creating UI-driven functional automated tests. You can write
Selenium WebDriver tests with many programming languages, such
as Java, C#, Python, and JavaScript; Playwright tests can be written
in JavaScript or TypeScript only. More teams have started to adopt
Playwright, but most enterprises still have Selenium WebDriver test
suites and have found it to be stable for years. You’ll benefit from
learning both tools. In this exercise, you’ll set up a Java–Selenium
WebDriver framework, and then move on to the next exercise,
learning AI coding tools for test authoring with Playwright.

TIP
Ifyou’renewtotestautomation,Ihighlyrecommendsettingupa
frameworkwithoutusingAIassistancefirst—trytheJava–Selenium
WebDriverexercise.Thisway,you’llcometounderstandtheentire
ecosystemofatestautomationframework:thetestrunners,assertion
frameworks,dependencymanagementtools,andsoon.You’llneedthis
knowledgetoreviewanddebugAI-generatedcode.
Java–SeleniumWebDriverFramework
Let’s start with the exercise to create an automation framework
using Java andSeleniumWebDriver.
Setup
Before you begin, ensure you have the following installed:
The latest version ofJava
The integrated development environment (IDE) of your
choice—IntelliJis a commonly used IDE for Java
TheChrome browser
The build toolApache Maven
You will need to install a few other tools relevant to the framework,
as described in“Components”.
Components
The framework will be composed of three main components, Apache
Maven, TestNG, and Selenium WebDriver, and will follow the Page
Object Model pattern.

Apache Maven
Apache Maven is a build automation tool. Build automation tools
help in standardizing dependency management processes and
project build steps. Team members all need to use the same
versions of any third-party libraries and plug-ins, and follow the
same sequence of steps to create application artifacts (build the
project, run the tests, and so on). Maven and Gradle are two popular
choices for building Java applications. To get a quick understanding
of how Maven works, let’s take a look at the Project Object Model
(POM) XML file,pom.xml. This is where you define all the dependent
libraries, plug-ins, and their versions, as seen inExample 3-1.
Example 3-1.A samplepom.xmlfile
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
http://maven.apache.org/xsd/maven-4.0.0.xsd">
<modelVersion>4.0.0</modelVersion>
<groupId>org.example</groupId>
<artifactId>SeleniumJavaExample</artifactId>
<version>1.0-SNAPSHOT</version>
<properties>
<maven.compiler.source>x</maven.compiler.source>
<maven.compiler.target>x</maven.compiler.target>
</properties>
<dependencies>
<dependency>
<groupId>org.seleniumhq.selenium</groupId>
<artifactId>selenium-java</artifactId>
<version>x.x.x</version>
</dependency>
<dependency>
<groupId>org.testng</groupId>
<artifactId>testng</artifactId>
<version>x.x.x</version>

<scope>test</scope>
</dependency>
</dependencies>
</project>
Here are the important things to notice in this file:
ThegroupID,artifactID, andversionattributes define
the project coordinates that allow Maven to keep track of the
project over time. When creating a new project in IntelliJ,
you can add these details.
The properties section declares the Java version to be used
for compilation. You can also include project-specific
variables here that you want to reuse in other sections of the
pom.xmlfile or application code.
The dependencies section is where you list the dependent
libraries and their versions. Note that the file refers to
Seleniumx.x.xas a dependency (add the preferred version
to your project). Maven maintains acentral repositoryof all
the libraries and their versions; it pulls them from there to
your machine based on how you configure this section of the
pom.xmlfile. This ensures that all team members have the
exact same binaries of all thelibraries. To add a dependency
for a library, search for it in the Maven repository and copy
its coordinate values into the dependencies section.
Similarly, you can configure plug-ins, environments, etc., by
declaring them as attributes appropriately in yourpom.xmlfile, as
described in the Mavendocumentation. You’ll be using the file in
Example 3-1to write yourSeleniumWebDriver tests.
Maven also provides build lifecycle commands to create application
artifacts. Some that you will use frequently include the following:
mvn compile
Compiles the project code

mvn clean
Removes the previously created artifacts
mvn test
Runs the tests written using testing frameworks (we’ll set up one
of these next)
There are also other Maven commands to install, deploy, and so on.
TestNG
TestNG is a testing framework, also referred to as atest runner, that
can be used for all types of tests: unit, integration, and end-to-end.
Testing frameworks like TestNG and JUnit let you create tests, add
assertions, add setup and teardown tasks, organize tests into
groups, execute tests, and present a test run summary. To install it,
simply add it as a dependency in yourpom.xmlfile, as shown in
Example 3-1.
A few features you might use in TestNG are as follows:
@Test
An annotation that should precede every test; it indicates the
method in a class as a test method for TestNG to run.
@BeforeClass,@AfterClass,@BeforeMethod,@AfterMethod,@B
eforeSuite,@AfterSuite
As their names suggest, these run before or after test classes,
test methods, or the entire suite. Your test’s setup and teardown
methods can be annotated with these tags.
assertEquals(),assertTrue(), and other assertion methods
These perform validations within the tests. If you’re using the
IntelliJ IDE, it will guide you in their syntax while you’re creating

tests.
Selenium WebDriver
Jason Huggins invented Selenium, a popular open source test
automation tool, in 2004, and it has gone through many incarnations
since then. It has had a fascinatinghistory and evolution, and an
extremely vibrant open source community still supports it today.
NOTE
BeforeSelenium,themostpopularautomatedtestingtoolwasfrom
Mercury.Thechemicalelementseleniumisusedasanantidoteto
mercurypoisoning.Getit?
Selenium WebDriver mainly facilitates interaction with the web
application rendered in the browser. It doesn’t serve any other
purpose, such as assertions or report generation, which is why we
need other tools like TestNG and Maven to complete the automation
framework.
Selenium WebDriver has three basic components:
APIs
These methods let you interact with the application elements in
the browser (clicking, typing in fields, and so on).
Client library
The Selenium WebDriver client library, available in many
programming languages, bundles the APIs for the test suite.
Driver
This is the component that instructs the browser to take the
actions dictated by the API. The drivers are usually created and
maintained by their respective browsers and are not part of the

Selenium distribution package. For example, if you want to run
the tests against Chrome, you have to download the
ChromeDriverseparately and include it in your automation
scripts.
Let’s first get to know the different APIs provided by Selenium
WebDriver.Example 3-2lists some of the commonly used WebDriver
methods to find different elements in the application. Selenium
identifies elements on a web page based on their HTML attribute
values, such asid,className,cssSelector, etc. You can select
the Inspect option from the right-click menu to get these values in
Chrome. Try inspecting the Amazon search text box, and you will
find the ID to betwotabsearchtextbox.
Example 3-2.Common WebDriver methods for finding elements
// find element by ID
driver.findElement(By.id("login"))
// find element by CSS selector
driver.findElement(By.cssSelector("#login"));
// find element by class name
driver.findElement(By.className("login-card"));
// find element by XPath
driver.findElement(By.XPath("//@login"));
// find multiple elements
driver.findElements(By.cssSelector("#username li"));
Because theidis unique to each element on a page, it is the
preferred locator type to keep your tests stable. CSS selectors and
XPath locators tend to break when the application undergoes
frequent changes.
Selenium WebDriver also provides advanced ways to find elements
on the page usingrelative locators, such as specifying that they are
above,below, ortoLeftOfanother element.

Once you find elements, you need to interact with them.Example 3-
3lists a fewSeleniumWebDriver methods.
Example 3-3.Common WebDriver methods for interacting with web
elements
// click an element
driver.findElement(By.id("submit")).click();
// type text into an input box
driver.findElement(By.cssSelector("#username")).sendKeys(username
);
You can also use theActionsclassin WebDriver for more advanced
interactions likekeyDown,contextClick, anddragAndDrop.
WebDriver also provides methods to manage browser behavior, such
as opening a URL, going back, closing the browser, setting the
browser window size, setting cookies in the browser, or switching
between multiple tabs, as shown inExample 3-4.
Example 3-4.WebDriver methods for manipulating browser behavior
// open a URL
driver.get("https://example.com");
// browser back, forward, and refresh
driver.navigate().back();
driver.navigate().forward();
driver.navigate().refresh();
// open browser in iPad size
driver.manage().window().setSize(new Dimension(768, 1024));
// close browser
driver.close();
// quit the driver session
driver.quit();
When navigating across pages, you have to make the test wait for
the page to load or for an element to be visible after the page loads.
Some teams use hardcoded sleep statements to make the test wait,

but these make the tests fragile, as the page load times could be
different in different environments. WebDriver offers a few inbuilt
waiting strategies to overcome this issue (seeExample 3-5):
Theimplicitwait strategy makes WebDriver poll the
Document Object Model (DOM), which represents the entire
content of an HTML document, forxseconds, waiting for the
element to appear. The default WebDriver behavior is to wait
for 0 seconds; you can change this and use the implicit wait
during the driver initialization stage to set a standard wait
time.
Theexplicitwait strategy makes WebDriver wait for up tox
seconds for an expected condition to become true.
Thefluentwait option gives more flexibility in defining a wait
strategy. It makes WebDriver wait a maximum ofxseconds
for an expected condition to become true, checking whether
the condition is true everyyseconds.
Example 3-5.WebDriver wait strategies
// Implicit wait for 10 seconds before timeout exception
driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10))
;
// Explicit wait for 10 seconds until the submit button becomes
clickable
WebElement submitButton = new WebDriverWait(driver,
Duration.ofSeconds(10))
.until(ExpectedConditions.elementToBeClickable(By.id(
"submit")));
// Fluent wait, which polls every 1 second up to a maximum of 3
seconds and waits
// for the spinner to disappear
FluentWait wait = new FluentWait(driver)
.withTimeout(Duration.ofSeconds(3))
.pollingEvery(Duration.ofSeconds(1))
.ignoring(NoSuchElementException.class);

wait.until(ExpectedConditions.invisibilityOf(driver.findElement(B
y.id("spinner"))));
These are the most frequently used WebDriver methods to assist in
writing day-to-day tests. WebDriver also offers many more advanced
interactions, such as listening to events and taking different actions
based on the event type, interacting with modal windows, and
almost anything else you might want to test in a browser. Selenium
4 also allows mocking the server responses and debugging using the
Chrome DevTools protocol. If you want to exploit such advanced
capabilities, see thedocumentationfor details.
Page object model
Thepage object modelis the most commonly adopted design
pattern for UI-driven automation frameworks. It involves recreating
the application structure just as it is in the automation framework;
for example, you create a page class for every page in your
application and define the page’s elements and actions in that class.
The pattern allows for abstraction and encapsulation, making it
easier to fix issues or add new changes.Example 3-6shows a
sampleLoginPageclass with three elements: a username field, a
password field, and a sign-in button. It also has alogin(email,
password)method to perform the login action on the page. You will
refer to thisLoginPageclass later, when creating a test.
Example 3-6.TheLoginPageclass using the page object model
// LoginPage.java
package pages;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
public class LoginPage {
private WebDriver driver;
private By emailID = By.id("user_email");
private By passwordField = By.id("user_password");

private By signInButton =
By.cssSelector("input.gr-button.gr-button--large");
public LoginPage(WebDriver driver) {
this.driver = driver;
}
public HomePage login(String email, String password){
driver.findElement(emailID).sendKeys(email);
driver.findElement(passwordField).sendKeys(password);
driver.findElement(signInButton).click();
return new HomePage(driver);
}
}
Similarly, your automation framework should have page classes
representing all of your application pages.
Workflow
The next step is to put these components together and write the
first test for a simple user flow: logging in to your favorite
ecommerce application (choose one where you have an account)
and asserting on the home page title:
1.Open IntelliJ and create a new Maven project by selecting
File → New →Project → Maven.
2.Select the Java version you downloaded.
3.Move on to the next window to enter your project name,
location,groupID, andartifactID, as seen inFigure 3-3.

Figure3-3.CreatinganewMavenprojectinIntelliJ
These three steps will set up an initial project structure, as shown in
Example 3-7.
Example 3-7.Initial Maven project structure
├── SeleniumJavaExample.iml
├── pom.xml
└── src
├── main
│ ├── Java
│ └── resources
└── test
└── Java
1.Download theChromeDriver executablecompatible with
your local Chrome browser version (to view your Chrome
version, select Chrome → About Google Chrome) and place
the executable file under thesrc/main/resourcesfolder
inside your project. This step is optional for Selenium 4.6 or
above, as Selenium Manager takes care of downloading the
respective browser drivers automatically.

2.Add the project dependencies, Selenium for Java, and the
TestNG library, as inExample 3-1. In IntelliJ, the Maven
panel is on the right side; you can use this to refresh and
download the libraries immediately.
3.Create a package calledbaseunder src/test/java.
4.Add a new class file called BaseTests.java, where you can
define the WebDriver setup, as seen inExample 3-8.
Example 3-8.TheBaseTestsclass
// BaseTests.java
package base;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import java.time.Duration;
public class BaseTests {
protected WebDriver driver;
@BeforeMethod
public void setUp(){
// Optional step for Selenium 4.6 or above.
System.setProperty("webdriver.chrome.driver",
"src/main/resources/chromedriver");
driver = new ChromeDriver();
driver.manage().timeouts().implicitlyWait(Duration.ofSeco
nds(10));
driver.get("http://eCommerce.com/sign_in");
}
@AfterMethod
public void teardown(){
driver.quit();

}
}
ThesetUp()method does a few things: it provides the
ChromeDriver executable path, instantiates the
ChromeDriverobject, defines the implicit wait as 10
seconds, and opens the application URL using thedriver
object. Theteardown()method does one job: it quits the
browser session after the test run. Note the TestNG
annotations@BeforeMethodand@AfterMethod: you’ll use
these to create and delete a new driver session, which will
run for every test.
5.You’ll need to create your page classes. Create a new
package called pages under src/main/java and add your
page classes there. Refer toExample 3-6for theLoginPage
class andExample 3-9for theHomePageclass.
Example 3-9.TheHomePageclass
// HomePage.java
package pages;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;
public class HomePage {
private WebDriver driver;
private By searchField =
By.cssSelector("input.searchBox");
public HomePage(WebDriver driver) {
this.driver = driver;
}
public String getTitle(){

WebDriverWait wait = new WebDriverWait(driver,
Duration.ofSeconds(10));
wait.until(ExpectedConditions.presenceOfElementLocated(se
archField));
return driver.getTitle();
}
}
The page classes will have the Selenium WebDriver methods
to find and interact with the elements in these classes. Also,
page classes are chained to return the other pages’ objects.
For example, thelogin()method in theLoginPageclass
returns aHomePageobject along with thedriverobject.
Remember: assertions don’t belong in the page classes!
6.Create a new package calledtestsundersrc/test/javaand
add your first testclass—for example,LoginTest, as in
Example 3-10. You can see the@Testannotation and the
assertEquals()method provided by TestNG.
Example 3-10.TheLoginTestclass with the first test
// LoginTest.java
package tests;
import base.BaseTests;
import org.testng.annotations.Test;
import pages.LoginPage;
import static org.testng.Assert.*;
public class LoginTest extends BaseTests {
@Test
public void verifySuccessfulLogin(){
LoginPage loginPage = new LoginPage(driver);
assertEquals(loginPage.login("example@gmail.com",
"Admin123").getTitle(), "Home page");
}
}

Now you can run the test from the IDE itself by right-clicking
on the green triangle next to the@Testtag. You can also
run it from the command line using Maven:
$ mvn clean test
This command will open the Chrome browser and run your test. It
also creates an HTML report attarget/surefire-reports/index.html, as
seen inFigure 3-4.
Figure3-4.HTMLreportgeneratedbyMavenSurefireplug-in
Congratulations—you’ve successfully created and run your first test!
This test passed, but when there are failures in the CI pipeline,
screenshots will be very useful for debugging. To take screenshots
on failures, alter yourteardown()method as shown inExample 3-
11. Create a folder calledscreenshotsundersrc/main/resources, and
the failure screenshots will be placed there.

Example 3-11.Taking screenshots on failures
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.testng.ITestResult;
import java.io.File;
import java.io.IOException;
import com.google.common.io.Files;
@AfterMethod
public void teardown(ITestResult result){
if(ITestResult.FAILURE == result.getStatus()) {
var camera = (TakesScreenshot) driver;
File screenshot =
camera.getScreenshotAs(OutputType.FILE);
try {
Files.move(screenshot,
new File("src/main/resources/screenshots/" +
result.getName() + ".png"));
} catch (IOException e) {
e.printStackTrace();
}
}
driver.quit();
}
You can add more capabilities to your automation framework based
on your specific project’s needs; for example, you could group the
tests and run across multiple browsers usingTestNGcapabilities, or
include a behavior-driven development (BDD) framework like
Cucumberto make the tests readable.

BEHAVIOR-DRIVEN DEVELOPMENT
Behavior-driven development(BDD) is a software development
practice intended to bring business and technical team members
closer. For example, BDD frameworks like Cucumber provide
facilities to write tests in natural language resembling a typical
user story, with theGiven, When, Then structure. The business
folks can pass on requirements as failing tests and the technical
folks can start building features by fixing the failing tests.
You can also choose to run your tests in parallel usingTestNGor
Selenium Gridcapabilities. However, remember to keep your UI tests
to a minimum, as they take longer to run and can be unstable due
to dependent components.
TypeScript–PlaywrightFramework
In this exercise, you’ll use AI to create a test automation framework
and author tests. It takes only a couple of minutes to create the
framework with AI assistance; the AI agents take another few
minutes to write the tests. You will use the free version ofGitHub
Copilot(as of 2025one of the most popular AI coding assistants),
along with the MCP Atlassian and Playwright MCP tools (which you
encountered inChapter 2). This section has two separate workflows.
In the first, you’ll create the framework; in the second, you’ll create
AI agents for test authoring.
Setup
Make sure you have the following tools installed:
The latest version ofNode.js
The latest version of theVisual Studio Code(VS Code) IDE

Create a new project folder calledE2ETestsand open it in VS Code.
Select the Copilot icon on the bottom-right corner of the blue status
bar, then select the “Use AI Features” button and sign into your
GitHub account. This should open the Copilot chat window.
Components
You can choose the Copilot model you want to use for each prompt
using the model drop-down in the chat window. By default, it is set
to Auto for the free tier (Figure 3-5), which allows Copilot to decide
on the model based on the prompted task.
Figure3-5.CopilotchatwindowonVSCode
Next to the model drop-down, you can set an agent mode for
Copilot. This is set to Agent mode by default. The four modes
currently available (as I write this in early 2026) are as follows:
Ask
You can ask questions about the codebase and general
technology concepts to get insights before you plan a task.
Plan
You can ask Copilot to design the steps for implementing a task
and review them before implementation.
Edit
You can prompt Copilot to make focused edits across multiple
code files, as per the plan created in the last step.

Agent
You can give Copilot a high-level requirement and let it plan,
design, and implement the requirement autonomously.
Keep Auto and Agent mode selected for this exercise. The icon next
to the two drop-downs is where the MCP tools are listed, which we
will configure later.
WARNING
GitHubCopilotistrainedonpubliccoderepositories,sothecodeit
suggestscouldbecopyrighted.GitHubresearchershavefoundthe
chancesofgettinganexactcodematchsuggestedtobelessthan1%,
butthefreetierdoesn’tprovideintellectualproperty(IP)indemnity(a
contractualagreementtolegallyprotectyouifthemodelsuggestsany
copyrightedcode).Copilotalsousespersonaldatatobenefitits
business,withinthelegaltermsoftheuseragreement.Checkyour
company’sinformationsecurity(infosec)guidelinesbeforeusingCopilot
onproprietarycode.
Workflow: Creating a framework
To create a framework, prompt Copilot to do so in the chat window:
I want to create a new UI test automation framework in
TypeScript using the
Playwright library.
Copilot will complete the task autonomously, as seen inFigure 3-6.

Figure3-6.AI-assistedPlaywrightframeworkcreation
Copilot installed the Playwright library and dependencies
automatically, created a framework structure in TypeScript, and
tested to ensure the framework is set up correctly! It created the
following:
Apackage.jsonfile listing Playwright as a dependency. You
can add other project dependencies here as you enhance
the framework.
Aplaywright.config.tsfile with a set of browser
configurations used as target browsers while running the
tests. This is the place to add further configurations for a
parallel test run, target browser sizes, base URL, and the
like.
A/testsfolder with anexample.spec.tsfile that comes with a
sample Playwright test. All application tests should go into
this folder.

A/playwright-reportfolder with anindex.htmlfile, which is
the HTML report generated by theexample.spec.tstest run.
This is the bootstrapping automation framework structure you need,
as Playwright library packages test runner, assertion, and
parallelization tools within it. As you design the tests, add the page
classes to the/pagesfolder (though Copilot can take care of that
too, as you’ll see in the next section). You can run the test again and
see the report by clicking the run button against the test on the IDE
or running the command$ npx playwright testfrom the
command line.
Copilot also created aREADME.mdfile with steps to configure and
run the tests, a.gitignorefile, and a/.githubfolder with thecopilot-
instructions.mdfile, a custom instruction file for Copilot!Custom
instructionscan be used to define project conventions and standards
and influence how Copilot generates code across sessions. For
instance, you can add the followingdos anddon’ts to begin with:
## MUST DO
- Tests should be independent of each other. Use
test.before() before each
test for setup activities.
- Use test.step() with "Given, When, Then" descriptions for
readability.
- Create date time only in DD-MM-YY formats.
- Use "Arrange, Act, Assert" (AAA) pattern while creating
tests.
## AVOID
- Don’t use hardcoded waits
- Don’t duplicate existing tests
- Don’t modify existing tests unless prompted by the user.
You can create such custom instruction files specific to a set of files
as well, as defined in the officialVS Code documentation.

TIP
Playwright’sextensiontotheVSCodeIDEhasapackofadditional
flexibilitiesthatwillpickalocator,recordthetest,runanddebugthe
test.ItalsohasanAIfixfeaturethatplugstestfailurelogsintoCopilot
andreturnsatestfixasaninlinecodesuggestion.Irecommendtrying
thisextension.
Now that the framework is set up, let’s add tests to it for the
Amazon search functionality.
Workflow: Agentic test authoring with Copilot
The automated Claude projects setup you completed inChapter 2
fetches acceptance criteria from Jira using Atlassian MCP tools and
generates comprehensive test cases for them. You’ll create a similar
setup here, using Copilot (within VS Code) to generate test cases for
a given user story, and have Copilot write test code for them. Follow
these steps:
1.Add Atlassian MCP and Playwright MCP to VS Code by
creating a.vscodefolder under your project workspace and
adding anmcp.jsonfile to it, copying the sample structure in
Example 3-12. Remember to add project-specific details to
themcp.jsonfile. (Refer toChapter 2, the sections“Test
Case Generation”and“Playwright MCP”, if you need a
refresher.)
Example 3-12.mcp.jsonfile with Atlassian MCP and
Playwright MCP
{
"servers": {
"playwright-test": {
"type": "stdio",
"command": "npx",
"args": [

"playwright",
"run-test-mcp-server"
]
},
"atlassian": {
"type": "stdio",
"command": "docker",
"args": [
"run",
"--rm",
"-i",
"ghcr.io/sooperset/mcp-atlassian:latest"
],
"env": {
"CONFLUENCE_URL":
"https://project.atlassian.net/wiki",
"CONFLUENCE_USERNAME": "user@gmail.com",
"CONFLUENCE_API_TOKEN": "API_token",
"JIRA_URL": "https://project.atlassian.net/",
"JIRA_USERNAME": "user@gmail.com",
"JIRA_API_TOKEN": "API_token" }
}
},
"inputs": []
}
Ensure the two tools are integrated properly by clicking on
the tools icon in the Copilot chat window. Select “Update
tools” for both Atlassian and “playwright-test,” if required.
2.Create an automated workflow for generating test cases.
Since you have a working prompt from“Playwright MCP”in
Chapter 2, you can useprompt filesto automate the
workflow within VS Code. Create a/promptsfolder in your
/.githubfolder in the framework. Add a new Markdown file
calledgenerate-test-cases.mdwith the instructions in
Example 3-13. Remember to copy the prompt.
Example 3-13.generate-test-cases.mdfile for generating

test cases from Jira user story
---
agent: agent
description: 'Generate test cases for a given user story'
---
Generate test cases for a given user story by following
the steps below.
Add prompt from Example 2-8
The prompt file has three sections in the prompt file: the
“agent” mode chosen, a short description of the prompt, and
a detailed step-by-step prompt instruction section.
Additionally, you can specify the language model by
mentioning themodel: model nameparameter before the
prompt section. You can specify a list of permitted tools,
such as the MCP tools and the file read, write, and edit tools,
astools: list of tools. This will avoid Copilot asking
you for permissions several times while executing the task.
3.Create another prompt file for test code generation,
generate-tests.md, as perExample 3-14.
Example 3-14.Thegenerate-tests.mdfile for generating test
code
---
agent: agent
---
When asked to generate tests for a feature:
Steps:
Step-1: Use Playwright MCP tools to open the website and
complete navigating the
scenario steps one by one.
Step-2: Use Playwright MCP tools to capture the element
locators for each step.
Step-3: Use Playwright code generation tool to generate

test code for the steps.
Step-4: Add the generated test code to an existing
relevant test file or create
a new test file.
Step-5: Ensure to refactor the test code as per the page
object model.
Step-6: Loop through the test code until it passes.
4.Addgenerate-test-cases.mdto Copilot’s context: select the
Add Context button in the chat window, choose the prompt
file, and prompt:
Generate test cases for SCRUM-6.
Copilot will ask for several permissions to use different tools
while it executes the prompt. The generated test cases for
the user story will appear in the same output structure as
that of the Claude project in“Test Case Generation”in
Chapter 2.
5.Next, addgenerate-tests.mdas context, and prompt:
Generate tests for the following scenario:
Given the user is on the Amazon home page
@https://www.amazon.in/
When they start typing a valid product category (e.g.,
"electronics")
Then autofill suggestions should display relevant
product categories from
the database.
Copilot will use Playwright MCP to open a browser and navigate to
the Amazon homepage. It will then generate the test code with the
locators identified and rewrite the test until it passes.
When I tried this, Copilot took several attempts to fix the locator of
the search field and the autosuggestions drop-down before getting it
right. Copilot chose the Grok Code Fast 1 model for this task. You
can see a detailed summary of its activities inFigure 3-7.

It is crucial to review generated code before accepting changes. Use
thePlaywright actions and assertions listto quickly cross-verify tests.
Here, Copilot followed the page object model, as prompted, and
created anAmazonHomePage.tsclass within a/pagesfolder. It
generated the test fileamazon-search.spec.tsunder the/testsfolder
correctly.
Figure3-7.AgentictestauthoringusingGitHubCopilot

WARNING
Itiseasytoassumethataworkingtestisalltheproofyouneedto
acceptcodechanges,butbeware:thegeneratedcodecouldaffect
existingtests,thelocatorsitusesmaynotalwaysbestable,andit
couldbeaduplicatetest.Thisisanotherreasontogenerateonetestat
atime,sothatyoucanreviewthemdiligently!
You can repeat this workflow for other test cases. Usually the
prompt files are checked into the repository so team members can
reuse, enhance, and version-control them. This workflow automation
doesn’t guarantee a completely hands-free test-creation experience:
often, Copilot stumbles to find some locators or struggles to finish a
user journey. Stay in the driver’s seat and guide it with prompts!
Using prompt files to automate a workflow, as you’ve just done, is
one way to automate lightweight tasks. VS Code and GitHub Copilot
also haveAgent Skillsandcustom agentsstructures to create
complex automated workflows, which are adopted prevalently.
Agent Skillsautomate specialized knowledge workflows, such as
generating exploratory test cases or domain-specific workflows. For
instance, you can share knowledge with Copilot about choosing
stable element locators as aSKILL.mdfile. Place it in the
/.github/skills/page-objectfolder (seeExample 3-15), and Copilot
will use it automatically whenever it comes across an instruction to
use a page object model across sessions.
Example 3-15.SampleSKILL.mdfile for creating page objects with
correct locators
---
name: page-object-model
description: Guidelines to create page objects with element
locator strategy.
---

# Page Objects
## MUST DO
- Every page object should contain element locators present on
that page with the
actions that can be performed on the elements like get text,
set text, click,
scroll, etc.
- Strictly explore the application using Playwright MCP tools to
identify the correct
element locators.
- Identify element locators using their ID or role as priority.
Add example code
## AVOID
- Don't add assertions in the page class.
- Never use XPATH or CSS to define element locators without
approval first.
- Never guess element locators. Stop execution and notify if you
can't find locators
for elements.
Custom agentstake on the responsibilities of specialized software
roles (like security expert, architect, and so on) and work
autonomously. Playwright has implemented custom agents for
automated test planning, authoring, and healing workflows. To get
the custom agents, run this at the command line:
$ npx playwright init-agents --loop=vscode
You’ll find three.agent.mdfiles similar to theSKILL.mdfile from
Example 3-15under the/.github/agentsfolder. These will also show
up as agent modes in the Copilot chat window. You can use the
custom agents to generate tests as follows:
1.Select theplaywright-test-planneragent mode and
prompt it to explore a test website by giving a URL. It will

generate a detailed test plan as a Markdown file in the
/specsfolder.
2.Select theplaywright-test-generatoragent mode and
prompt it to write the test code. It will be added to a.specs
file.
3.Then use theplaywright-test-healeragent mode to fix
any failing tests.
You can tweak the instructions in these agents as needed to use the
skills you have defined and have the agent connect to Jira to fetch
project context.
Beware: automated agentic workflows can easily lead you into
antipatterns. For example, they might add all the test cases as UI-
driven tests, creating a bloated suite that runs for hours, or duplicate
tests across the unit, API, and UI layers, prolonging the entire
testing cycle. That’s why this workflow has two steps—after
generating relevant test cases, you can actively choose which test
cases to automate in a particular layer.
These different structures—custom instructions, prompts, agents,
and skills—have evolved to modularize, abstract, and automate tasks
in a large-scale project setup. You can start with a minimal structure
and evolve your framework incrementally.

TIPS TO EVOLVE YOUR FRAMEWORK
A few tips to evolve your framework based on real-world
experience:
Agent and skill definitions
Choose agents forbroaderprocess automation (ex:
generating end-to-end/API tests) and skills fordeeper
testing discipline and domain-specific knowledge.
Arrange the agent and skill definitions in a meaningful
hierarchy; clearly distinguish between overlapping skills as
part of their descriptions; refer to the skills within the
agents’ instructions explicitly.
Agent and skill definitions need not have hundreds of lines
2
of instructions to be efficient. I’ve noticed the instructions
tend to get overlooked when the file is too long.
Write a skill only when you find yourself having to guide
the AI beyond the initial prompt. You can, in fact, ask the
AI to abstract the conversation as a skill afterwards. Note
that as AI models upgrade, some of your skills may
become obsolete and therefore need to be maintained
continuously.
Hallucinations
Provide domain context as additional documents to skills. This
will reduce hallucinations when domain terms are
encountered in test cases and AI costs while navigating the
application.
Code quality

Add a reviewer agent (discussed in“Exercises: Service Tests”)
to validate the generated tests quality. This will guide the AI
on what you see as good code quality.
Security threats
Remember that open source agents and skills might have
security threats. Asecurity analysisconducted across 31,132
open source skills found that 26.1% of them contained at
least one vulnerability.
AI economics
Be cognizant ofAI token economicsto optimize your overall
tests automation costs. For instance, use skills more, as they
load just-in-time; instruct agents to get approval on a plan
before making code changes, and choose costlierpowerful
models(depending on the size of your codebase and task) to
plan and break down tasks, and let cheaper lightweight
models execute the tasks. Monitoring AI costs on a daily basis
can trigger new ideas for further optimization.
In the upcoming chapters, you will learn to extend this Playwright
framework to include AI-generated checks for visual regression,
accessibility, and frontendperformance.
Exercises:ServiceTests
Now let’s move on to service tests. In this section, you will set up a
test automation framework using the REST Assured Java library and
use it to validate a sampleREST API. Then you’ll create an AI agent
using Claude Code to author tests from OpenAPI specifications
directly. You’ll find these in separate workflows after“Setup”.

Setup
REST Assuredis the go-to Java library for automated testing of REST
APIs. It offers a domain-specific language (DSL) with Gherkin syntax
(“Given, When, Then”) to create readable and maintainable API
tests, and useshamcrest matchersfor assertions. REST Assured can
work with any testing framework, like JUnit or TestNG.
Suppose your hypothetical PIM service has the following GET
/itemsAPI, which returns the item details:
GET: https://ecommerce.com/items/item_sku
Response:
Status Code: 200
[
{
"SKU": "984058981",
"Color": "Green",
"Size": "M"
}
]
Then the REST Assured DSL call to the GET API and to assert the
status code will look like the following:
given().
when().
get("https://ecommerce.com/items/984058981").
then().
assertThat().statusCode(200);
Isn’t that simple? There is a similar DSL for POST, PUT, and all other
API testing–related methods.

Let’s set up an API automation testing framework now and write a
test to validate the same GET/itemsendpoint. First, make sure you
have installed the following:
The latest version ofJava
The IDE of your choice—IntelliJis a common choice for Java
Maven
You can then bring the/itemsendpoint up as a stub on your
machine by following the steps in“WireMock”inChapter 2. If you
need sample APIs to practice with,APILayerhas a consolidated list
of 1,400 publicly hosted REST APIs to choose from.
Components
As you saw in the UI automation framework setup, the three basic
components of an automated testing framework in Java are the
dependency manager (Maven, in this case), a library to perform the
required type of testing (REST Assured for APIs), and a testing
framework to create and run the tests (you’ll use TestNG).
Workflow:RESTAssured
Create your framework by bringing the three components together
as follows:
1.Create a new Maven project using IntelliJ (or your IDE of
choice). Refer to“Java–Selenium WebDriver Framework”for
details.
2.Add the TestNG and REST Assured dependencies in your
pom.xmlfile. You can find the required dependency
parameters in the Maven Central Repository.
3.Create a new package calledtestsunder the/src/test/java
folder and a new test class calledItemsTest.

4.Example 3-16shows a sample test for verifying the GET
/itemsendpoint.
Example 3-16.TheItemsTestclass with an API test for the
GET/itemsendpoint
// ItemsTest.java
package apitests;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.given;
public class ItemsTest {
@Test
public void
verifyGetItemsEndpointReturnsSuccessStatusCode(){
given().
when().
get("http://localhost:1000/items/984058981").
then().
assertThat().statusCode(200);
}
}
You can run the test from the IDE or by running the$ mvn clean
testcommand from your terminal.
Once you get the basic setup working, you can add a test to verify a
POST/itemsendpoint. Let’s say the POST endpoint takes the same
item details as JSON in the request body and returns a 201 HTTP
response on successfully adding the itemto the catalog. Create a
stub on your machine, following the steps inChapter 2in
“WireMock”.
To pass a JSON body to POST requests, a cleaner method is to
create adataObjectclass and serialize it using a JSON serialization

library—for example, the jackson-databind library. Let’s add that to
our framework:
1.Add the jackson-databind library in yourpom.xmlfile.
2.Now create a newdataObjectspackage under
/src/main/javaand add a newdataObjectclass, say
ItemDetails.java.Example 3-17shows theItemDetails
class representing the JSON body for the POST request.
Example 3-17.TheItemDetailsclass as adataObject
// ItemDetails.java
package dataobjects;
import com.fasterxml.jackson.annotation.JsonProperty;
import
com.fasterxml.jackson.annotation.JsonPropertyOrder;
@JsonPropertyOrder({"sku", "color", "size"})
public class ItemDetails {
private String sku;
private String color;
private String size;
public ItemDetails(String sku, String color, String
size){
this.sku = sku;
this.color = color;
this.size = size;
}
@JsonProperty("sku")
public String getSku(){
return sku;
}
@JsonProperty("color")
public String getColor(){
return color;

}
@JsonProperty("size")
public String getSize(){
return size;
}
}
The jackson-databind library allows you to define the
expected JSON structure at the beginning with the
@JSONPropertyOrderannotation.
3.In your test class, you can use theItemDetailsobject as
the POST request body.Example 3-18shows the POST
/itemsendpoint test.
Example 3-18.API test for the POST/itemsendpoint
@Test
public void
verifyPostOrdersEndpointReturnsSuccessStatusCode(){
ItemDetails greenShirt = new
ItemDetails("98765490", "Green", "M");
given().
contentType(ContentType.JSON).
body(greenShirt).
log().body().
when().
post("http://localhost:1000/items").
then().
assertThat().
statusCode(201);
}
When you run the test, thelog().body()method will log the
request body for you to check the serialization. You have only
asserted on thestatusCodeof the response here. REST Assured
offers more flexibility to find the required fields in the response body,

as detailed in the officialdocumentation, and assert them
appropriately.
Workflow:AgenticTestAuthoringwithClaude
Let’s automate the test-authoring workflow using AI now! To
facilitate learning new AI tools, you’ll use Claude Code instead of
GitHub Copilot to author tests in this exercise. Claude Code is a paid
agentic coding tool that works from the terminal, delegating tasks to
multiple agents to work in the background and complete multi-step
workflows. You’ll create an AI agent that will read the OpenAPI
specification and generate REST Assured tests using Claude Code.
Once you have the latestNode.js version installed, you can move
onto the next steps:
1.Create a new folder,/api-specs, in the service tests project
and store any OpenAPI specifications. I created an OpenAPI
specification for the/ordersendpoint fromChapter 2
(Example 2-5) using GitHub Copilot and saved it as
createOrders.yamlin the folder.
2.Create aClaude Console accountand add credits: around $5
should be enough.
3.Open a new terminal session in VS Code and install Claude
Code:
$ npm install -g @anthropic-ai/claude-code
4.Start a Claude session by typing the$claudecommand
after installation. It will take you through the authentication
process.
5.To create a new test-authoring agent in the Claude Code
session, type$/agentsand then choose Manage agents →

Create new agent → Project → Generate with Claude.
Describe the agent in natural language:
I need an agent to create Java REST Assured tests for
the OpenAPI
specification files placed under the /api-specs folder.
Select a model for the agent to use and allow all tools.
6.Claude will generate an agent as a Markdown file under the
.claude/agentsfolder in the project workspace. It created a
restassured-test-generator.mdfile for me. It usually
generates detailed step-by-step instructions to generate API
test cases as part of the agent definition; therest-
assured-test-generatoragent had 210 lines of detailed
instructions. You can introduce project-specific details to it
later.
7.Prompt Claude Code to use the agent to generate tests for
the OpenAPI specification files under the/api-specsfolder.
Figure 3-8shows the output summary from Claude Code.
Figure3-8.AgentictestauthoringusingClaudeCode
Claude Code created the fileCreateOrderAPITest.javawith 30 REST
Assured tests. It won’t ask you to review the code, so remember to

review it. It covered positive tests with boundary input values and
verified the status code to be 200. It also generated negative tests
with missing fields and invalid data types, and verified the status
code to be 400. The different input validation tests don’t usually
belong within the API test layer—it’s generally advised to keep them
as unit tests, so tweak the agent instructions to customize the
output accordingly.
Similarly, you might have to tweak the instructions to handle project-
specific context such as using the right test data, generating custom
date fields or new authentication tokens, and verifying specific
response fields. You can also create skills for them, as discussed in
“Workflow: Agentic test authoring with Copilot”. Once you have a
working instruction set, you can check it into the project repository
for your team to reuse.
Remember, you still need to think of new test cases to automate
based on your project knowledge, apart from the generated ones.

REVIEWER AGENT
An AI reviewer agent can augment human review when
generating tests in bulk, as in this exercise. You can use Claude
Code to build a reviewer agent along similar lines to the one in
the exercise, generating the agent description to assess the
quality of the tests. This is called theLLM-as-the-judge
paradigm: where a powerful model is fed with the output of
another agent, along with the initial prompt and example
outputs, and asked to score the output according to a set of
criteria. You can assess the service tests you generate for the
following example criteria. Use a powerful model, but not the
same one you used to generate the tests. Instruct it to provide
scores in the range of 0 to 1, along with reasons for its scores.
Here are some example criteria:
Coverage score: Did the tests cover all the endpoints
defined in the OpenAPI specification file?
Hallucination score: Were there any hallucinated test
cases?
Syntax score: Were the tests syntactically correct and
aligned with REST Assured DSLs?
Quality score: Was the quality of the test cases
comprehensive?
You can also instruct it to fix the gaps if the scores are under a
given threshold:say, 0.7.
Teams with only manual testers might consider using a similar
agentic workflow to generate REST Assured API tests from Postman
collections. You may need to tailor custom orchestration steps to
parse the Postman collection, but you can guide Claude Code to

handle that. Such agentic workflows can help you increase your test
coverage quickly.
Exercise:UnitTests
Since unit tests are tightly integrated with the application code, your
testing framework should be compatible with the application’s
programming language, such as JUnit or TestNG for Java, NUnit for
.NET, Jest or Mocha for JavaScript, or RSpec for Ruby. AI coding
assistants can generate unit tests in all these programming
languages. Now that you’ve gone through the agentic test-authoring
exercises for UI and service tests, you should be able to try out AI-
assisted authoring for unit tests, too.
Although only developers write unit tests, testers need to
understand their basic structure so that they can plan the
application’s testing strategy wisely. I’m including this simple
exercise using JUnit to give you that experience.
JUnitis a popular unit-testing framework created by Kent Beck and
Erich Gamma in 1997. It has catered to the full spectrum of unit-
testing needs since then and remains the de facto unit-testing
framework for Java today. It offers test creation, assertion,
organization, running, and reporting capabilities. TestNG, another
popular framework, was created to address some of the gaps in
JUnit, but JUnit has upgraded its features to fill those gaps. Some
basic JUnit features are as follows:
Test and lifecycle annotations such as@Testfor marking the
test methods and@BeforeEach,@BeforeAll,@AfterEach,
and@AfterAllfor setup and teardown activities.
The@DisplayNameannotation to show a readable name for
each test.

Custom tagging annotations such as@Tag(“smoke”) let you
run only a subset of tests.
Assertion APIs such asassertTrue(),assertEquals(),
andassertAll().
Setup
The prerequisite installations for this exercise are the same as for
API tests.
Workflow
You’ll write a couple of simple unit tests for the customer service in
our ecommerce application. Create a new Java project and add a
CustomerManagementclass, as seen inExample 3-19. This sample
class has two methods that add and return customer details. You’ll
add unit tests for these two methods next.
Example 3-19.TheCustomerManagementclass
// CustomerManagement.java
package Customers;
import java.util.ArrayList;
import java.util.List;
public class CustomerManagement {
private String firstName;
private String lastName;
private String age;
private List<List<String>> customers = new
ArrayList<List<String>>();
public List<List<String>> getCustomers(){
return customers;

}
// if the customer name is empty, throw an exception; else
add the customer
public void addCustomers(List<String> customerDetails){
if (customerDetails.get(0).isEmpty())
throw new IllegalArgumentException();
customers.add(customerDetails);
}
}
To add the unit tests:
1.Add the following dependencies in yourpom.xmlfile:
<dependencies>
<dependency>
<groupId>org.junit.jupiter</groupId>
<artifactId>junit-jupiter-api</artifactId>
<version>5.7.2</version>
<scope>test</scope>
</dependency>
<dependency>
<groupId>org.junit.jupiter</groupId>
<artifactId>junit-jupiter-
engine</artifactId>
<version>5.7.2</version>
<scope>test</scope>
</dependency>
</dependencies>
2.Create a new test class,CustomerManagementTests.java,
under the/src/main/testfolder.
3.Use the JUnit annotations and assertions to create your
tests, as seen inExample 3-20.
Example 3-20.CustomerManagementTests.javawith JUnit
tests
package customersUnitTests;

import Customers.CustomerManagement;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.util.ArrayList;
import java.util.List;
@DisplayName("When managing new customers")
public class CustomerManagementTests {
@Test
@DisplayName("should return empty when there are no
customers")
public void
shouldReturnEmptyWhenThereAreNoCustomers(){
CustomerManagement customer = new
CustomerManagement();
List<List<String>> customers =
customer.getCustomers();
assertTrue(customers.isEmpty(), "Error: Customers
exists");
}
@Test
@DisplayName("should throw exception when customer
name is invalid")
public void shouldThrowExceptionForInvalidInput(){
List<String> newCustomer = new ArrayList<>();
newCustomer.add("");
newCustomer.add("Jackson");
newCustomer.add("20");
CustomerManagement customer = new
CustomerManagement();
IllegalArgumentException err =
assertThrows(IllegalArgumentException.class,
() ->
customer.addCustomers(newCustomer));
}
}

The@DisplayNametag includes readable test descriptions. As these
explain, the first test checks whether thegetCustomers()method
returns an empty value when there are no existing customers, and
the second test asserts that theaddCustomers()method returns
anIllegalArgumentException when a customer with an empty
first name is added. Also note the different assertion methods to
assert exceptions and return values.
You can run these tests from the IDE or the command line, using the
$ mvn clean testcommand. You’ll see the test run results with
their display names, as shown inFigure 3-9.
Figure3-9.JUnittestrunresultsinIntelliJ,whichshowstheirreadabledisplay
names
Apart from JUnit, depending upon the test case, you might require
additional capabilities from the application development framework
(like Spring Boot) and external libraries (such as Mockito) for
mocking the service call, jackson-databind for data binding, and so
on. When you use these capabilities to access an external system
such as a database, the unit test becomes an integration test.

CHARACTERISTICS OF GOOD TESTS
The characteristics listed here apply to all the types of tests
we’ve discussed up until now. Tests without these characteristics
can easily turn into a maintenance hazard:
Tests should be readable, with method and variable
names expressing their intent appropriately. Follow the
“Arrange, Act, Assert” (AAA) pattern: first arrange the
prerequisites of the test case, then perform the actions
required for the test case, and finally assert the expected
behavior.
Each test should verify only one behavior, so that it is
fast and expresses the right intentions when it fails.
Tests should be independent of each other. Remember,
chained tests lead to chained errors. Having a proper
setup and teardown for every test will help keep your
tests independent and facilitate parallel execution.
Tests should be environment-agnostic. For example, they
should not depend on static data in a particular
environment.
Automate building and running tests so that any team
member can check out the code and run a single
command to trigger them, without having to manage
dependencies manually.
AdditionalTestingTools
I’ll explore two more test automation tools in this section, then
discuss AI-powered testing tools and platforms more broadly to help
you make wise choices.

PactContractTesting
Pactis a popular tool for creating contract tests in Java, though it
also supports Python, JavaScript, Go, Scala, and other languages.
Pact is specifically used forconsumer-driven contract testing.
Aconsumeris an application (like a service or web UI) that receives
information from another application (a service or message queue).
The application that provides the required information is the
provider. Recall that the order service in the ecommerce application
receives the vendor’s item details from the PIM service: this makes
the order service a consumer and the PIM service a provider. Many
other consumers could consume the PIM service apart from the
order service; each one may need different information from the PIM
service. For example, the order service may require the SKU of each
item but not its manufacturer’s address, which may be a
requirement for another consumer.
Given that the requirements are consumer-driven, the PIM service
contracts may need to change to cater to a new consumer or
requirement, which will pose a risk to the order service and other
consumer teams. Those teams need a mechanism to continuously
verify that the PIM service’s contracts are intact—especially the
attributes relevant to them—to avoid integration issues later.
Testers or developers can write service or integration tests to
mitigate the risk, but these tests might be brittle and slow due to the
dependencies on both applications, as well as being costly to set up
and maintain. (Sometimes, if the provider and the consumer are
undergoing parallel development, you can’t even write end-to-end
integration or service tests. Consumer-driven contract tests are key
in these situations.)
AsFigure 3-10shows, with consumer-driven contract tests, each
consumer team writes tests against the stubbed version of the
provider’s agreed-upon contracts. The tests specifically assert the
attributes that the consumer expects, not the entire contract. These

tests are then passed on to the provider’s team, which runs all of
them against the provider APIs, ensuring it serves its consumers’
needs as expected. When deviations are found, the provider’s team
can at least warn the consumer if the change is intended.
Figure3-10.Consumer-drivencontracttestingflow
Basically, this type of contract testing splits end-to-end integration
testing into parts:
Each consumer writes micro- and macro-level tests to
validate its functional behavior by stubbing the provider, as
seen inFigure 3-10.
Each consumer also writes contract tests against the
provider’s stub, and the provider runs them continuously.
The provider writes micro- and macro-level tests to validate
its functional behavior.
This alleviates some of the pain points in writing end-to-end
integration and service tests, since the scope of the contract tests is
smaller and dependencies are eliminated.
Pact lets you fully automate the contract testing process. To get an
idea of its workflow, you’ll use the same order and PIM service
example. Let’s say the order service is integrating with the GET

/itemsendpoint in the external PIM service to retrieve an item’s
available sizes, SKU, and colors. The two teams’ Pact workflow will
be as follows:
1.The order service team collates all the integration test cases.
For example, the/itemsendpoint should return the item
details as expected when the item exists, should return an
empty array when the item doesn’t exist, and should return
appropriate error codes on invalid requests.
2.The order service team creates stubs for these test cases
using Pact.
3.The order service team writes consumer contract tests using
Pact against these stubs, asserting on the specific attributes
of status codes, SKUs, available sizes, and colors. These
tests, when run, automatically produce a.pactfile that
captures the requests to the/itemsendpoint and assertions
on the expected attributes in the responses.
4.The.pactfile is passed on to the PIM team automatically via
an open source provision called the Pact Broker, which both
the consumer and provider teams set up and maintain, and
automatically passes the.pactfile to the PIM team. Pact also
offers a paid service called PactFlow, which eliminates the
need to set up and maintain the Pact Broker. To make it
simpler, the files can also be shared via folders.
5.On the PIM service side, the team writes a provider contract
test to receive the.pactfile from the Pact Broker and set up
the test data in different states, as per the consumer tests’
requirements. When the provider test runs, Pact will make
appropriate requests (as described in the.pactfile) against
the actual PIM service and verify the actual responses.
6.The Pact Broker provides the provider test’s results to the
consumer, completing the full feedback loop without

intervention.
7.Both the consumer and the provider’s Pact tests are
integrated into the CI pipeline so that the teams can receive
feedback continuously.
Example 3-21shows a sample Pact consumer test with a
pactMethodmethod. First,pactMethodestablishes the state of the
/itemsendpoint, as expected by the Pact consumer test. As you
can see, thegiven()method describes this state; the provider test
will refer to it to initiate the appropriate test data setup. The Pact
consumer test then brings up the/itemsstub as described by
pactMethodand asserts on the item details response.
Example 3-21.A sample consumer test using Pact
@ExtendWith(PactConsumerTestExt.class)
public class ItemsPactConsumerTest {
@Pact(consumer = "Order service", provider = "PIMService")
RequestResponsePact
getAvailableItemDetails(PactDslWithProvider builder) {
return builder.given("items are available")
.uponReceiving("get item details")
.method("GET")
.path("/items")
.willRespondWith()
.status(200)
.headers(Map.of("Content-Type", "application/json;
charset=utf-8"))
.body(newJsonArrayMinLike(2, array ->
array.object(object -> {
object.stringType("SKU", "A091897654");
object.stringType("Color", "Green");
object.stringType("Size", "S");
})
).build())
.toPact();
}
@Test

@PactTestFor(pactMethod = "getAvailableItemDetails")
void getItemDetailsWhenItemsAreAvailable(MockServer
mockServer) {
// brings up the PIM /items endpoint stub as described by
the Pact method
above
RestTemplate restTemplate = new RestTemplateBuilder()
.rootUri(mockServer.getUrl())
.build();
List<Item> items = new
PIMService(restTemplate).getAvailableItemDetails();
Item item1 = new Item("A091897654","Green","S");
Item item2 = new Item("A091897654","Green","S");
List<Item> expectedItems = List.of(item1, item2);
assertEquals(expectedItems, items);
}
This test will generate a.pactfile and is shared with the provider via
a folder. The Pact provider test inExample 3-22receives the.pact
file, sets up the test data per the@Stateannotated method, hits the
actual/itemsendpoint as instructed by the.pactfile, and asserts
that the actual response has the same item details format as in
Example 3-21.
Example 3-22.A sample provider test using Pact
@Provider("PIMService")
@PactFolder("pacts")
@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment =
SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ItemsPactProviderTest {
@LocalServerPort
int port;
@MockBean

private ItemRepository itemRepository;
@BeforeEach
void setUp(PactVerificationContext context) {
context.setTarget(new HttpTestTarget("localhost", port));
}
@TestTemplate
@ExtendWith(PactVerificationInvocationContextProvider.class)
void verifyPact(PactVerificationContext context, HttpRequest
request) {
context.verifyInteraction();
}
@State("items are available")
void setItemsAvailableState() {
when(itemRepository.getItems()).thenReturn(
List.of(new Item("A091897654", "Green", "S"),
new Item("A091897654","Green","S")));
}
Pact generates HTML reports that can be integrated with CI. Pact
tests are generally tightly tied to the application code, and you may
need to know the application development frameworks in use (such
as Spring Boot) to create and debug them. You can also use AI
assistance or agentic test-authoring workflows to generate Pact
tests.
ReportPortalDashboard
As mentioned earlier, I have worked in large enterprise projects that
ran hundreds of automated tests all night, with a dedicated
automation team analyzing the results in the morning. On bad days,
we would spend hours trying to figure out the root causes of test
failures and group the test failures across different test suites. We’d
spend all day raising defects, fixing the test scripts, and following up
with the infrastructure team to get environment issues resolved.
Sometimes those bad days went on for weeks. With agentic test
generation tools, you can increase test coverage quickly—but that

also means running a lot of tests every day, and thus lots of analysis
of test failures.ReportPortal, an AI-powered test automation
dashboard tool, comes in handy here.
ReportPortal is an open source tool that helps with aggregating test
execution results from across different test suites, auto-triaging test
failures, and visualizing test execution results as dashboards. It
provides APIs to integrate results from multiple test suites based on
different programming languages. It automatically analyzes the test
failure logs using an ML-based tool and triages them into three
categories: defects, test script issues, and environment issues. The
ML algorithm also groups similar test failures based on logs, saving
time.
You can create customized dashboard views per release to see
results across features. As a paid premium feature, you can also
createquality gates, meaning that you can define metrics that
determine when to propagate the code further along the CI/CD
process. For instance, you can set the quality gate for the login
feature to have less than two known low-priority defects. This helps
streamline testing efforts, especially for large-scale enterprise
projects with teams in different regions. You can tryReportPortal’s
demo websiteto learn more.
OtherAI-PoweredTestAutomationToolsand
Platforms
Aside from coding assistants, which you’ve used in this chapter,
there are several other paid AI-powered testing tools and platforms,
many with their own custom AI workflows using fine-tuned AI
models. This section discusses some of their capabilities (as of early
2026) to give you a broader perspective on the available tools:
Prompts as tests

Tools likeAlumniumandtestRigorlet you define test cases as
natural language prompts and pass them to a preferred LLM. For
instance, automated test code using Alumnium would look like
thefollowing:
al.do("search for 'laptops' on the Amazon home page")
al.check("auto-fill has suggestions with 'laptop'")
Alumnium makes a call to the LLM with the prompt every time
the test runs. This does incur costs if you’re integrating with paid
models, althoughAlumnium’sown research has found the
average cost to be around $3 per 1,000 tests using Anthropic
3
models. Alternatively, it can support self-hosted LLMs.
Such prompts-as-tests tools can be useful when automating
several sub-brand websites that follow a similar user journey. For
instance, most UK train companies have different website skins
but the same user journey. So you can write one test suite with
relevant test cases as prompts and run it across all the different
websites, letting the LLM navigate them for you. But since LLMs
are non-deterministic, there is the risk of overlooked prompts and
omitted test cases.
Spec-driven development
Spec-driven developmentis a new term (as of early 2026) that is
buzzing in AI-first software development. The workflow of tools
likeKiro,Spec Kit, andTesslis to provide a spec file (analogous
to a requirements document) detailing a feature, along with its
technical design and architecture. AI agents then develop the
feature from end to end, including writing tests. While its critics
argue that spec-driven development revolves around maintaining
elaborate documentation instead of incrementally developing in
small chunks, the advantage is that whenever a feature

requirement changes, you update the spec and the tests should
automatically be rewired along with it.
AI-driven API workflows
Tools likePostQode,Keploy, andQodex.aihave defined a set of
AI-driven workflows around API testing. For instance, Qodex.ai
allows you to generate API tests by uploading Swagger or
Postman collections. It does API security testing around the Open
Web Application Security Project (OWASP) Top 10 vulnerabilities
(discussed inChapter 7) and allows CI/CD integration. Keploy
listens to the API traffic in the environment and records it as
automated tests, as well as supporting contract tests, and you
can try an open source version.
End-to-end testing platforms
End-to-end testing platforms likeBrowserStack,Applitools,
TestMu AI, andKatalonexisted even before the GenAI boom, and
were adopted mainly because they allow you to test with more
than 3,000 browser and device versions. These platforms have
evolved to provide an elaborate suite of AI offerings as well, such
as test authoring and reporting, fine-tuned models for visual and
accessibility testing, and features like automatic failure analysis
and test fix suggestions. If your team already subscribes to one
of these tools, it might be worth trying some of these features.
Since most AI-powered tools and platforms are very recent, look at a
few things before adopting one:
Does the AI tool’s workflow suit your teams’ ways of
working? If the tool’s workflow calls for major changes (such
as spec-driven development), you will have to figure out a
larger change management plan before adopting it.
Can you customize the tool to your project’s needs? For
instance, if your project’s Postman collections and context

are defined in a certain way, does the tool support that
variant? If not, you’re better off building custom agents.
Does the vendor clearly lay out the costs of using their AI
tool for your testing purposes? For instance, the token cost
at the beginning of a conversation with an AI assistant may
not be the same as after a long conversation, since it
4
includes the cost of processing additional context.
Understand how the costs will work for your specific project.
What specialized orchestration steps does the tool offer that
need deeper AI knowledge? Can you build a workflow
instead, as you did in the exercises?
How does the tool perform on large codebases?
Do they cover IP indemnity?
What security and privacy controls do they provide?
If you find the answers to these questions promising, do some
hands-on experimentation before investing.
Perspectives
This chapter ends with two more key topics: antipatterns in
automated functional testing and automation test coverage.
AntipatternstoOvercome
Even after you’ve spent heaps of time and effort crafting the right
automated functional testing strategy and implementing the testing
frameworks in the right layers, your automated functional testing
efforts have just begun. As the team develops tests throughout the
delivery timeline, watch for antipatterns. It’s easy to fall prey to
antipatternswhen you’re surrounded by the buzz and enthusiasm
inspired by AI, so it’s crucial to look for the early symptoms. I’ll

discuss two common antipatterns—the ice-cream cone and the
cupcake, as seen inFigure 3-11—along with their symptoms and tips
to overcome them.
Figure3-11.Antipatternsinautomatedfunctionaltesting
The ice-cream cone
When you invert the test pyramid, it looks like a cone, which is how
this antipattern gets its name. In the ice-cream cone antipattern,
there are many macro-level UI-driven tests and very few micro-level
tests.
Symptoms of this antipattern include the following:
Long waits for feedback from the tests you run
Catching defects later in the cycle, sometimes only during
release testing
Having to do elaborate manual testing to get feedback,
despite having automated tests

Frustration with automated tests that don’t produce the right
results
The earliest symptom of this antipattern is finding regression defects
during manual story testing. Do a root-cause analysis immediately
and fix your team’s practices before the problem compounds.
The cupcake
When you duplicate tests in multiple layers, instead of a test
pyramid, you wind up with wide bottom and middle layers and an
even wider top—overall, it looks likea cupcake. This kind of
disorganization generally happens when you have siloed teams of
developers and automated testers. For example, the developers add
unit tests to verify all the invalid login inputs, and the testers add the
same tests in the UI layer. Using AI to increase test coverage quickly
increases the possibility of this antipattern occurring.
Symptoms of this antipattern include the following:
Your team takes a long time to release even a tiny feature.
Whenever there is a bug, developers and testers blame each
other for not adding the appropriate tests.
A simple way to avoid this antipattern is to bring developers and
testers together to determine which tests each will write (or
generate) in each layer. The right venue for such a discussion could
be the user story kickoff meeting. Document the results of the
discussion in the user story cards.
100%AutomationCoverage!
Teams usually track their automation coverage percentage as a
metric, and consider a high percentage to be a validation of their
good software development practices. The automation coverage
percentage is calculated by capturing all the application test cases,

marking them as automated or not, and using simple mathematics
to derive a percentage. Teams often set the goal of 100%
automation coverage, with good intentions—but when doing so, it’s
important to keep a few pointers in mind.
CODE COVERAGE AND MUTATION TESTING
The traditional code coverage metric is different from the
automation test coverage metric.Code coveragetells you
whether there are lines of code that will not be executed by the
existing unit tests—in other words, it identifies untested lines of
code. You can integrate code coverage tools like JaCoCo or
Cobertura into your CI build pipeline. They’ll cause the build to
fail when the code coverage percentage is below a certain
threshold, to prevent the untested code from percolating any
further than the build stage. However, high code coverage
doesn’t necessarily indicate that all the test cases are automated.
A technique calledmutation testingfinds missed test cases in
unit testing by changing the application’s code and checking if
the tests fail. For example, when there are void method calls, it
removes the calls from the code and runs the unit tests again.
The mutation is said to be “killed” if the tests fail, and to have
“survived” if not.PITis a popular mutation testing tool that can
be added as a Maven dependency and executed from the
command line. It lists the test cases that survived along with an
overall mutation score for the application. Mutation testing,
though very effective, is time-consuming, so use it wisely.
Even 100% coverage doesn’t guarantee a bug-free application! The
percentage is simply a measure of how manyknowntest cases are
automated—you will probably discover new cases later. It’s
important to point this out to business stakeholders and your team;
otherwise, every critical bug could lead them to question the value
and reliability of the automation test suite. They need to understand

that the expected outcome from tracking this metric is to disclose
the automation backlog (ideally, there won’t be one) and plan
capacity in the upcoming iterations to complete these tasks. You can
also use tracking to observe whether your team is drifting toward
one of the antipatterns mentioned in“Antipatterns to Overcome”.
When you are tracking automation coverage, observe whether all
areas of the application have automation coverage. Especially when
you are developing large-scale applications, with different teams
working on various components, your coverage percentage may still
be high (over 80%) even if one module has zero tests, as long as
the other modules have high test coverage percentages.
Include both functional and cross-functional test cases when
calculating this metric. Most cross-functional test cases don’t
contribute to the percentage, resulting in bugs later (you will learn
more about cross-functional test case automation in the upcoming
chapters).
Finally, while you should aim to automate all test cases, depending
upon the nature of the application, environments, automation costs,
and other factors, it may be impossible to achieve 100% automation
coverage. In such cases, track the manual test cases properly and
add them to your manual testing list. That said, you should not have
a long manual test case list—you want to avoid the 1,200 minutes of
release testing I warned about at the beginning of the chapter!
Conclusion
The benefits of all this meticulous tracking and coverage will start to
show as the project grows, especially over a few years. As they say,
code outlives people, and often the automated tests end up being
the only trustable living documentation of an application’s
functionalities. Thus, writing good automated tests is a worthwhile
investment, not only for the project but for you and your future
teammates.

KeyTakeaways
Here are the key takeaways from this chapter:
Automated testingis the practice of using tools to verify the
expected behavior of the application in order to receive fast
feedback during software development.
A wise way to balance the testing capacity in a project is to
perform manual exploratory testing to find new test cases
and automate them to aid in regression testing.
The scope of automated functional testing goes beyond
commonly adopted UI-driven functional tests. Unit,
integration, contract, service, UI functional, and end-to-end
tests, woven together appropriately, provide swift feedback.
AI coding tools provide assistance with all micro- and macro-
level test types.
The test pyramid is the ideal goal to strive for while crafting
your automated functional testing strategy. Adding a broad
base of micro-level tests and gradually decreasing the
number of macro-level tests as their scope widens is the
best way to reduce test creation and running time.
Several AI tools have evolved to ease automated functional
test authoring, maintenance, and analysis efforts with
custom workflows. Make sure to learn a tool’s specialized
orchestration workflows and hidden AI costs when
evaluating whether to adopt it.
Watch for signs of antipatterns, like the ice cream cone and
the cupcake, throughout the development process—
especially when using AI coding tools, as they tend to
generate tests in bulk that don’t necessarily belong in a
particular layer.

Track your automation coverage, but be aware that a high
automation coverage percentage might create a false sense
of security if the coverage doesn’t spread across the entire
surface area of the application, including both functional and
cross-functional requirements.
1
Anyentitythatiswellencapsulatedandcanbeindependentlyreusedor
replaced,suchasaservice,iscalledacomponent.
2
ASkillsBenchresearchpaperhighlightshowafewmodularskillsperform
betterthanasinglecomprehensiveskill.
3
Alumnium’screatortalksabouttheirresearchonmodelcostatthe2025
SeleniumConference.
4
SeeAnjaliShrivastavatalkaboutherresearchontheeconomicsofAIwith
TimO’Reillyin“LivewithTimO’Reilly:AConversationwithIndependent
ResearcherAnjaliShrivastava”,November4,2025.

Chapter 4.Continuous Testing
A prevalent antipattern I have observed is that organizations care
enough about automated testing to hire a few dedicated automation
testers, yet the automated tests only reside within the testers’ local
machines. Often, the tests may be run when the testers please or
only during a release. This defies the purpose of automated testing:
it significantly delays the feedback cycle. Automated testing is for
the entire team to getfastfeedbackcontinuouslyas they
incrementally make changes, and this chapter shows you how to
make that happen.
Continuous testing(CT) is the process of validating application
quality using both manual and automated testing methods after
every incremental change, and alerting the team when the change
causes a deviation from the intended quality outcomes. For example,
if performance numbers for a new piece of functionality are much
lower than expected, the CT process immediately notifies the team
and fails the performance tests. This gives the team an opportunity
to fix issues as early as possible, when they are still relatively small
and manageable. Without such a continuous feedback loop, these
issues could go unnoticed for a long time, cascading into deeper
levels of the code over time and becoming much harder to fix.
The CT process relies heavily on the practice ofcontinuous
integration(CI) to perform automated testing against every change.
Adopting CI together with CT allows the team to docontinuous
delivery(CD). Teams that use CI, CT, and CD tend to perform well
on the four key metrics:lead time, deployment frequency, mean
time to restore,and change fail percentage. These metrics, which
we’ll look at toward the end of this chapter, provide insights about
the quality of the team’s delivery practices and can qualify your team
as an elite team by DORA’s standards

This chapter will equip you with the skills to establish a CT process
for your team. You will learn about CI/CT/CD processes and
strategies to achieve multiple feedback loops on various quality
dimensions. You’ll also do a guided exercise to set up a CI server,
integrate the automated tests, and to integrate AI workflows into CI
pipelines.
BuildingBlocks
As a foundation for the continuous testing skill, this section will
introduce you to the terminology and overall processes involved in
CI/CT/CD. You will also learn fundamental principles and etiquette
that should be carefully imbued within the team to make the process
successful. Let’s begin with an introduction to CI.
IntroductiontoContinuousIntegration
Martin Fowler is the author of eight books, includingRefactoring:
Improving the Design of Existing Code,2nd edition (Addison-Wesley,
2018), and chief scientist at Thoughtworks. Hedescribescontinuous
integration as “a software development practice where each member
of a team merges their changes into a codebase together with their
colleagues’ changes at least daily.” Let’s consider an example to
illustrate the benefits of following such a practice.
Two teammates, Allie and Bob, independently start developing a
login and home page. They start in the morning, and by noon Allie
has finished a basic login flow, and Bob has completed a basic home
page structure. They both test their respective functionalities on
their local machines and continue working. By the end of the day,
Allie completes the login functionality; since the home page isn’t
available to her yet, she makes the application land on an empty
home page after successful login. Similarly, Bob completes the home
page functionality by hardcoding the username in the welcome
message, since he can’t access the user information from the login.

The following day, they both reported their functionalities to be
“done”! But are they really done? Which of the two developers is
responsible for integrating the pages? Should they create a separate
integration user story for every integration scenario across the
application? If so, will they be ready for the expense of the
duplicated testing efforts involved in testing the integration story? Or
should they delay testing until the integration is done? These are the
kinds of questions that continuous integration addresses implicitly.
Let’s tell the same story, but this time following CI. Allie and Bob
share their work progress at noon (when they both finish their basic
page structures). Bob can add the necessary integration code to
abstract the username after login, and Allie can make the application
land on the actual home page after successful login by the end of
the day. The application is really usable and testable!
It may seem like a small additional cost to integrate the two pages
the next day. However, when code is accrued and integrated later in
the development cycle, integration testing becomes costly and time-
consuming. For instance, one large enterprise that I worked for had
to do five weeks of integration testing for a feature that took only
three weeks to develop! Furthermore, the more Allie and Bob delay
testing, the more likely they are to find entangled issues that are
hard to fix. They might even have to rewrite a major chunk of the
software. Their whole team is likely to end up fearing integration!
CI tries to reduce such integration risks and save the team from ad
hoc rewriting and patching. It doesn’t entirely eliminate integration
defects, but it makes it easier to find and fix them early, when they
are just budding.
TheContinuousIntegration,Testing,and
DeliveryProcess
Let’s start by looking at the continuous integration and testing
processes in detail. Later, we’ll see how they connect with delivery to

form the CI/CT/CD process.
The CI/CT process relies on four individual components:
The version control system (VCS)
The VCS holds the entire application codebase and serves as a
central repository (storage location) from which all team
members can pull the latest version of the code and where they
can integrate their work continuously.
Automated functional and cross-functional tests
The tests that validate the application are the second component.
The CI server
The CI server automatically executes the automated tests against
the latest version of the application code for every additional
change.
The infrastructure
The infrastructure that hosts the CI server and the application is
the fourthcomponent.
The CI/CT workflow begins with the developer. As soon as they
finish a small portion of functionality, they push their changes into a
version control system like Git or Apache Subversion (SVN). The VCS
tracks every change submitted to it. The changes are then sent
through the continuous testing process, where a CI server (such as
Jenkins or GoCD) fully builds the application code and executes
automated tests against it. When all the tests pass, the new changes
are considered fully integrated. When there are failures, the
respective code’s owner fixes the issues as quickly as possible.
Sometimes changes are reverted until the issues are resolved, to
prevent others from pulling the code with issues and integrating
their work on top of it.

THE BENEFITS OF VERSION CONTROL
Ever think about how teams shared their code before VCSs?
Some teams used shared drives; others directly patched their
code to a central server that hosted the entire codebase! Such
was the pain that led to the development of the first VCS in the
1960s, the Source Code Control System (SCCS). Since then, VCSs
have gotten richer. A few significant benefits:
A VCS keeps track of every version of code pushed into
it, whether that code is added, deleted, or modified in a
separate database. This serves as a long-term history of
changes, which makes analyzing the root causes of
issues much easier.
Since the versions are maintained independently, when
there are issues, teams can roll back to a previously
working version of the application.
Changes in the VCS can be tied to a user story or a
defect card. This gives the team the ability to trace the
changes back to a user story and understand the context
behind the code written and the evolution of a feature
over time.
When teams have to work on a common area of code to
build their features, a VCS allows them to create
branchesof the main codebase, build on top of them,
and merge them into the main codebase a little later (but
not too long—a long-living feature branch is an
antipattern).
Figure 4-1shows Allie and Bob following their team’s CI and testing
process.

Figure4-1.Componentsinacontinuousintegrationandtestingprocess
Allie pushes her code for the basic login functionality along with the
login testsinto the team’s Git repository before noon, as part of
commit C .
n
TIP
IntheGitVCS,acommitisasnapshotoftheentirecodebaseatagiven
pointintime.WhenpracticingCI,youshouldsavesmallincremental
changesasindependentcommitsonyourlocalmachine.Whenthe
functionalityreachesalogicalstate,suchascompletingabasiclogin
functionality,pushyourcommitstotherepository.Onlyonceyoupush
thechangesdothecontinuousintegrationandtestingprocessesbegin.

The new change, C , triggers a separate pipeline in the CI server.
n
Each pipeline is composed of many sequential stages. The first is the
build-and-teststage, which builds the application and runs
automated tests against it. These include all the micro- and macro-
level tests discussed inChapter 3and tests that assert on the
application’s quality dimensions, like security and performance
(discussed in Chapters7and9). Once this stage is complete, the
test results are indicated to Allie. Once this stage is complete, the
test results tell Allie that her code has been successfully integrated,
and she proceeds with her login functionality.
Later in the day, Bob pulls the latest changes (C ) from the
n
repository and pushes his commit C for the home page feature.
n+1
C is thus a snapshot of the application codebase, including both
n+1
Allie’s and Bob’s new changes. This triggers the build-and-test stage
in the CI process. Running tests against C ensures that Bob’s new
n+1
changes haven’t broken any of the previous functionalities, including
Allie’s login tests. Luckily, they haven’t. However,Figure 4-1shows
that Allie’s changes as part of commitsC	and C	broke the
n+2 n+3
integration, and the tests have failed. She needs to fix the bug she
has introduced before proceeding any further. She can push her fix
as another commit, and the process will continue.
Imagine the same workflow in a large distributed team, and you can
understand how much easier CI/CT makes it for all team members
to share their progress and integrate their work. Also, in large-scale
applications, there are typically several interdependent components
that warrant exhaustive integration testing, so the CT process
provides the confidence the team needs to push their code to
production whenever the business demands it. In other words, the
team is equipped to do continuousdelivery.
CD depends upon following CI/CT processes so that the application
is production-ready at all times. It also dictates having an automated
deployment mechanism that can be triggered with a single click to

deploy to any environment, QA or production.Figure 4-2shows the
continuous delivery process.
Figure4-2.Continuousdeliveryprocesswithcontinuousintegration,testing,and
deploymentpipelines
As you can see, the CD process encompasses the CI/CT processes
along with theself-servicedeployment pipelines. These pipelines are
also configured as stages in the CI server; they deploy the “chosen”
version of the application artifacts to the requiredenvironment.
The CI server lists all commits with their test results. Only if all the
tests have passed for a commit (or set of commits) does it offer the
option to deploy that particular application version (let’s call it V).
For example, Allie’s team wants feedback from the business on the
basic login functionality pushed as part of commit C . They can push
n
the Deploy V button, as seen inFigure 4-2, and choose the user
x
acceptance testing (UAT) environment. This will deployonly the
changes made up to that pointto the UAT environment—that is,
Bob’s C and later commits will not be deployed. As you can see,
n+1

commits C	and C	are not available for deployment, because
n+2 n+3
their tests failed.
This setup solves many critical issues, but most importantly, it lets
the company launch product features to the market at the right
time. Delays in feature releases often mean losing revenue and
losing customers to competitors. Additionally, from the team’s point
of view, the deployment process becomes fully automated, reducing
its dependency on certain individuals to do their magic on the day of
deployment; anyone is free to make a hassle-free deployment to any
environment at any time. Automating deployments also reduces the
risk of incompatible libraries, missing or incorrect configurations, and
insufficient documentation.
CONTINUOUS DEPLOYMENT VERSUS CONTINUOUS
DELIVERY
Continuous deployment is different from continuous delivery.
Continuous deploymentinvolves having automated deployment
pipelines that push every commit to production automatically
after the continuous testing process. In other words, the feature
you committed just now is available to real end users in
production immediately. In contrast, practicingcontinuous
deliveryis about being ready at any time to push the application
to production with a self-service deployment option. Continuous
delivery is suitable in cases where some manual testing is
required after deployment or businesses have set launch dates
for features. Sometimes companies even announce feature
inaugurations publicly.
PrinciplesandEtiquette
The CI/CT/CD processes can reach fruition only if all the team
members follow a set of well-defined principles and etiquette. The

team should establish these principles at the beginning of their
delivery cycle and reinforce them throughout. The exact content will
vary between teams and companies, but here is a minimum set of
principles and etiquette a team will have to respect to be successful:
Commit frequently
Team members should make frequent code commits and push
them to the VCS as soon as they finish each small piece of
functionality, so that it is tested and made available for others to
build on.
Always commit self-tested code
Whenever a new piece of code is committed, it should be
accompanied by automated tests in the same commit. Martin
Fowler calls this practiceself-testingcode. For example, when
Allie committed her login functionality along with login tests, this
ensured that her commit was not broken when Bob committed
his code.
Adhere to the Continuous Integration Certification Test
Each team member should ensure their commit passes the
continuous testing process before moving on to the next set of
tasks. If the tests fail, they need to fix them immediately.
According to Martin Fowler’sContinuous Integration Certification
Test, a broken build-and-test stage should be repaired within 10
minutes. If this is not possible, the broken commit should be
reverted, leaving the code stable (or green).
Do not ignore or comment out failing tests
In the rush to make the build-and-test stage pass, team
members should not comment out or ignore the failing tests. This
might seem obvious, but it’s a common practice.
Don’t push to a broken build

The team should not push their code when the build-and-test
stage is broken (or red). Pushing work on top of an already
broken codebase will lead to tests failing again and further
burden the team with finding out which changes originally broke
the build.
Own all failures
When your changes cause tests to fail in an area of code that
you didn’t work on, the responsibility of fixing the build is still on
you. If necessary, pair with someone who has the required
knowledge to fix it, but get it fixed before moving on to your next
task. This practice is essential. Often fixes are delayed while the
responsibility of fixing the failed tests is tossed around.
Sometimes the tests are eliminated from running in the CI for
days because the issue is not fixed, which means the CT process
gives incomplete or false feedback for changes pushed during
that window.
Many teams adopt stricter practices for their own benefit, such as
the following:
Mandating that all micro- and macro-level tests must pass on
local machines before they are pushed to the VCS
Failing the build-and-test stage if a commit does not meet
the code coverage threshold
Publishing the commit’s status (pass or fail) to everyone on
Slack with the name of the individual who made the commit
Playing loud music from a dedicated CI monitor in the team
area whenever a build is broken
As a tester on the team, I keep an eye on the status of tests in the
CI pipelines and see to it that they get fixed on time. Fundamentally,
all these measures are meant to streamline the team’s CI/CT

practices—though what always seems to work best is empowering
the team with knowledge of not only the “how” but also the “why”
behind the process!
ContinuousTestingStrategy
The next step is to customize your strategies to your project’s needs.
In“The Continuous Integration, Testing, and Delivery Process”, I
demonstrated the CT process with a single build-and-test stage that
runs all the tests and gives feedback in a single loop. You can also
accelerate the feedback cycle with two independent feedback loops:
one that runs the tests against the static application code (that is, all
the micro-level tests), and the other that runs the macro-level tests
against the deployed application. This, in a way, is a slight shift left:
you leverage the micro-level tests’ ability to run faster than the
macro-level tests to get faster feedback.
Figure 4-3shows a CT process with two stages. It’s common to
combine the application compilation with the micro-level tests as a
single “build-and-test” stage in CI. When the team adheres to the
test pyramid (discussed inChapter 3), the micro-level tests will end
up validating a broad range of application functionalities. As a result,
this stage helps the team get extensive feedback on the commit
quickly.
The build-and-test stage should be swift enough to finish executing
within a few minutes, so the team can wait for it to complete before
moving on to the next task. If it takes longer, the team should find
ways to improve it—for example, parallelizing the build-and-test
stage for each component instead of having a single stage for the
1
entire codebase.

Figure4-3.Thecontinuoustestingprocesswithtwofeedbackloops
In their bookContinuous Delivery(Addison-Wesley Professional,
2010), Jez Humble and David Farley suggest that the build-and-test
stage should take “around the amount of time you can devote to
making a cup of tea, a quick chat, checking your email, or stretching
your muscles.”
As soon as the build-and-test stage passes, thedeploystage pushes
the application artifacts to a CI environment (sometimes called the
dev environment). The next stage, called thefunctional testing stage
oracceptance testing stage, runs the macro-level tests against the
deployed application in the CI environment. Only when this stage
passes is the application ready for self-service deployments to other
higher-level environments, such as QA, UAT, and production.
The acceptance tests take longer to run, and deployment takes time
too. But when teams implement the test pyramid properly, the two
feedback loops should take less than an hour to complete. Recall the
example inChapter 3: when the team had around 200 macro-level

tests, it took them eight hours to get feedback, but when they
reimplemented their testing structure to conform to the test
pyramid, it took them only about 35 minutes from commit to be
ready for self-service deployment, with about 470 micro- and macro-
level tests.
When the feedback loop is short, team members can still prioritize
fixing any issues found in the CT process, even if they’ve picked up a
new task shortly after the build-and-test stage. If feedback takes
several hours, they may be tempted to ignore the failing tests and
track them as defect cards to fix later.
This is harmful: it means they are integrating their new code on top
of defects, and if failing tests are ignored, the new code is not
thoroughly tested either. Hence, the team should speed the two
feedback loops using techniques like parallelizing the test run,
implementing the test pyramid, removing duplicate tests, and
refactoring the tests to remove waits and abstract common
functionalities (seeContinuous Deliveryto learn more).
This CT process can be extended to include cross-functional
feedback, as depicted inFigure 4-4. Teams can run automated
performance, security, and accessibility tests as part of the two
existing feedback loops or configure separate stages after the
acceptance testing stage in the CI server to get continuous fast
feedback on the application’s quality holistically.

Figure4-4.Thecontinuoustestingprocesswiththreefeedbackloops
CONTINUOUS INTEGRATION VERSUS CONTINUOUS
TESTING
As the name implies, the process of continuous integration ends
with the build-and-test stage. That is, a commit is considered
integrated only when it passes the micro-level tests (at least the
2
unit tests).
The continuous testing process encompasses validating the
holistic application behavior, including its functional and cross-
functional aspects, for every commit, with the goal of ensuring
that it is ready for continuous delivery. In fact, continuous testing
doesn’t stop with executing automated tests; it includes the
manual exploratory testing efforts for every commit after self-
service deployment. The CT process also requires the team to
automate the scenarios found during exploratory testing in order
to call the functionality or commit “done.”

At this point, when you run all the tests in a chained pipeline, it may
take ample time and resources to finish all the stages. One strategy
you can use to ease the CT process is to split the tests into smoke
tests and nightly regression tests, as shown inFigure 4-5.
Figure4-5.Thecontinuoustestingprocesswithfourfeedbackloops
Smoke testingis a term borrowed from electrical engineering. After
an electrician completes a circuit, they pass electricity through it to
assess the end-to-end flow. When there are issues in the circuit,
there will be smoke (hence the name). Similarly, you can choose
tests that cover the end-to-end flow of every feature in the
application to form a “smoke test” pack that you only run as part of
the acceptance testing stage. This way, you can get a high-level
signal on the status of every commit quickly.Figure 4-5shows a
commit that is ready for self-service deployment after the smoke test
stage.
If you perform smoke testing, you must also do nightly regression.
Thenightly regressionstage is configured in the CI pipeline to run
the entire test suite against the latest codebase once every day, with
all the day’s commits, when the team is off work (such as at 7 p.m.

every day). This is to allow your team to explore the testing
environments as required during the day. The team must analyze the
nightly regression results first thing the next morning and prioritize
fixing any defects and environment failures. If this requires changing
the test script, that should be the team’s priority for the day, so that
the CT process gives the right feedback for the upcoming commits.
You can apply these two strategies to split up the functional and
cross-functional tests. For example, you could run the performance
load test (seeChapter 8) for a single critical endpoint as part of
every commit, then run the remaining performance tests as part of
nightly regression. Similarly, you could run the static code security
scanning tests as part of the build-and-test stage, then run the
functional security scanning tests (discussed inChapter 7) as part of
the nightly regression.
The caveat with such an approach is that it delays feedback (and
thus also fixes) by a day; the issues are tracked as defects and fixed
later. Choose which tests you run as part of the smoke test and
nightly regression carefully. Only macro-level and cross-functional
tests should be categorized as smoke tests; all micro-level tests
should still run as part of the build-and-test stage.
When an application is young, you can usually forgo these strategies
and enjoy the privilege of running all of your tests for every commit.
Then, as the application starts to grow (along with the number of
tests), you can implement CI runtime optimization methods, then
eventually graduate to smoke tests and nightly regressions.
If you’re wondering whether all the effort of continuous testing is
worthwhile, here are some of its benefits (Figure 4-6):

Figure4-6.Benefitsofthecontinuoustestingprocess
Common quality goals
CT ensures that all team members are aware of and working
toward a common functional and cross-functional quality goal
against which their work is continuously evaluated. This is a
concrete way to build in quality.
Early defect detection
Every team member gets immediate functional and cross-
functional feedback on their commits. This gives them the
opportunity to fix issues while they have the relevant context, as
opposed to coming back to the code a few days or weeks later.
Ready to deliver
Since the code is continuously tested, the application is always
ready to deploy to any environment.
Enhanced collaboration

Especially in distributed teams, CT makes it easier to collaborate
with and keep track of which commit caused which issues,
avoiding accusations and limiting animosity.
Combined delivery ownership
All team members own the delivery, not just the testing team or
senior developers. Everyone is responsible for ensuring their
commits are ready fordeployment.
If you’ve been working in the software industry for a while, you
know how hard it is to achieve some of these benefits otherwise!
Exercises
The guided exercises here will show you how to push the automated
tests that you created as part ofChapter 3into a VCS, set up a CI
server, and integrate the automated tests with the CI server.
Whenever you push a commit to the VCS, the automated tests will
be executed. You will start learning to use Git and Jenkins as part of
this exercise. You will also learn about AI workflow integration within
the CI/CD pipelines using Claude Code and GitHub Actions.
Git
Originally developed in 2005 by Linus Torvalds, creator of the Linux
operating system kernel, Git is the most widely used open source
version control system. It’s a distributed version control system,
which means every team member gets a copy of the entire codebase
along with the history of changes. This gives teams a lot of flexibility
in terms of debugging and working independently.

Setup
To begin with, you’ll need somewhere to host your codebase. GitHub
and Bitbucket are companies that provide cloud-based offerings to
host Git repositories. GitHub has consistently topped theStack
Overflow surveysas the most used and desired code collaboration
tool: it hosts public repositories for free, which makes it popular,
especially among the open source community. For this exercise, if
you don’t have a GitHub account already,create one now.
In your GitHub account, navigate to Your Repositories → New to
create a new repository for your automated Selenium tests. Name it
FunctionalTestsand make it a public repository. You will land on the
repository setup page on successful creation. Note the URL for your
repository:https://github.com/yourusername/FunctionalTests.git.
The page will also instruct you on how to push your code to the
repository using Git commands. You’ll have to set up and configure
Git on your machine to run them.
To do this, follow these steps:
1.Download and install Git from your command prompt using
the followingcommands:
// macOS
$ brew install git
// Linux
$ sudo apt-get install git
If you are on Windows, download the installer from the
officialGit for Windows site.
2.Verify the installation by running the following command:
$ git --version
3.Whenever you make a commit, it needs to be tied to a
username and email address for tracking purposes. Provide
yours to Git with these commands so that it automatically
attaches them when you make a commit:

$ git config --global user.name "yourUsername"
$ git config --global user.email "yourEmail"
4.Verify the configuration by running this command:
$ git config --global --list
Workflow
The workflow in Git has four stages (Figure 4-7), each with a
different purpose.
The first stage is yourworking directory, where you make changes
to your test code, like adding new tests or fixing test scripts. The
second stage is the localstaging area,to which you add each small
chunk of work, such as creating a page class, as you finish it. This
allows you to keep track of the changes you are making so you can
review and reuse them later. The third stage is yourlocal repository.
As mentioned earlier, Git gives everyone a copy of the entire
repository along with the history on their local machine.
Once you have a working test structure, you can make a commit
that will move everything you’ve added to the staging area to your
local repository. This makes it easy to revert back all the code as a
single chunk when there are failures. Once you are done with all the
required changes—in this case, when you have fully completed a
test and want it to run as part of the CI pipeline—the final stage is
pushing it to theremote repository. The new test will be available to
everyone in your team as well.

Figure4-7.Gitworkflowwithfourstages
The Git commands to move the code through the different stages
are shown inFigure 4-7. You can try them now:
1.In your terminal, navigate to the folder where you created
your automated Selenium tests inChapter 3. Run the
following command to initialize the Gitrepository:
$ cd /path/to/project/
$ git init
This command will set up the.gitfolder in your current
working directory.
2.Add your entire test suite to the staging area by running the
following command:
$ git add .
You can instead add a specific file (or directory) with$ git
add filename.

3.Commit your changes to the local repository with a readable
message explaining the context of the commit by executing
the following command with the appropriate message text:
$ git commit -m "Adding functional tests"
You can combine steps 2 and 3 by appending the optional
parameter with-a:
git commit -am "message"
4.To push your code to the public repository, you must first
provide its location to your local Git. Do that by running the
following command:
$ git remote add origin
https://github.com/yourusername/FunctionalTests.git
5.To push your commit to the public repository, you need to
authenticate by providing your GitHub username and
personal access token while pushing. (A personal access
token is a short-lived password mandated by GitHub for all
operations from August 2021, for security reasons.) To get
your personal access token, go to your GitHub account,
navigate to Settings → Developer Settings → “Personal
access tokens,” click “Generate new token,” and fill in the
required fields. Run the following command:
$ git push -u origin master
Then use the token when prompted. If you don’t want to
authenticate every time you interact with the public
repository, you canset up the Secure Shell (SSH)
authentication mechanism.
Open your GitHub account and verify the repository.
You’ll need to pull your team members’ code to your machine from
the public repository. You can do that by running thegit pull

command. If your team already has a repository of functional tests,
use$	git	clone	repoURLto get your local repository copy instead
of$	git	init.
I recommend exploring Git’sofficial documentationor Raju Gandhi’s
bookHead First Git(O’Reilly, 2022) to learn more about commands
and branches.
Jenkins
The next step is to set up a Jenkins CI server on your local machine
and integrate the automated tests from your Git repository. This will
show you how continuous testing can be implemented in practice
using CI/CD tools—it’s not intended to teach you DevOps. Even if
your team has developers with specialized DevOps skills or a DevOps
role to manage CI/CT/CD pipeline creation and maintenance work, it
is essential for both developers and testers to be familiar with the
CI/CT/CD process. Also, it’s critical that you learn to adapt the CT
process to your specific project’s needs and ensure the test stages
are properly chained according to your team’s CT strategy.
Setup
Jenkins is an open source CI server. To use it,downloadthe
installation package for your OS and follow the standard installation
procedure. Once installed, start the Jenkins service. On macOS, you
can install and start the Jenkins service usingbrew commands as
follows:
$ brew install jenkins-lts
$ brew services start jenkins-lts
After the service starts, open the Jenkins web UI at
http://localhost:8080/. The site will lead you through the following
configuration activities:

1.Unlock Jenkins with a unique administrator password
generated as part of the installation process. The web page
will show you where to find this password on your local
machine.
2.Download and install the commonly used Jenkins plug-ins.
3.Create an administrator account, which you’ll use to log into
Jenkins.
Next, you will be taken to the Jenkins Dashboard page (Figure 4-8).
Figure4-8.JenkinsDashboardview

NOTE
AlthoughyouaresettingupaCIserveronyourlocalmachineforthis
exercise,inpracticetheCIserverwillbehostedeitherinthecloudor
onavirtualmachine(VM)inthesamenetworksothatallteam
memberscanaccessit.
Workflow
To set up a new pipeline for your automated tests, follow these
steps:
1.From the Jenkins Dashboard, go to Manage Jenkins →
Global Tool Configuration to configure theJAVA_HOMEand
MAVEN_HOMEenvironment variables (Figures4-9and4-10).
You can type the$	mvn	-vcommand in your terminal to get
both locations.
Figure4-9.ConfiguringJAVA_HOMEinJenkins

Figure4-10.ConfiguringMAVEN_HOMEinJenkins
2.Come back to the Dashboard view and select the New Item
option in the lefthand panel to create a new pipeline. Enter a
name for the pipeline, say, “Functional Tests,” and choose
the “Freestyle project” option for this exercise. This will take
you to the pipeline configuration page (Figure 4-11).
Figure4-11.TheJenkinspipelineconfigurationpage
3.Configure your pipeline:

a.On the General tab, add a pipeline description.
Select “GitHub project” and enter your repository
URL (without the.gitextension).
b.On the Source Code Management tab, select Git and
enter your repository URL (with the.gitextension
this time). Jenkins will use this to dogit clone.
c.The Build Triggers tab provides a few options to
configure when and how to kickstart the pipeline
automatically. For example, the Poll SCM option can
poll the Git repository every two minutes to check for
new changes and, if there are any, start the test run.
The Build Periodically option schedules the test run
at fixed intervals even if there are no new code
changes. This can be used to configure nightly
regressions. Similarly, the “GitHub hook trigger for
GITScm polling” option configures a GitHub plug-in
to send a trigger to Jenkins whenever there are new
changes. To keep it simple, choose Poll SCM and
enter the following value to poll the functional tests
repository every two minutes:H/2	*	*	*	*.
d.Since your Selenium functional test framework uses
Maven, select the “Invoke top-level Maven targets”
option on the Build tab. Choose your local Maven,
which you configured inChapter 3. In the Goals
field, enter the Maven lifecycle phase that needs to
be run by the pipeline:test. This will execute the$
mvn testcommand from the project directory.
e.The Post-build Actions tab is where you can chain
multiple pipelines to create a complete CD pipeline—
for instance, you can trigger the CFR tests pipeline
3
after the functional tests pipeline has passed.

4.Save and navigate to the Dashboard view. You will see the
pipeline you created (Figure 4-12).
Figure4-12.YourpipelineintheJenkinsDashboard
5.Click the pipeline name in the Dashboard view. On the
landing page, select Build Now in the left panel. The pipeline
will clone the repository on your local machine and execute
the$	mvn	testcommand. You’ll see the Chrome browser
open and close as the test executes.
6.Locate the Workspace folder on the same page. Here you’ll
find the local cloned copy of the code from the repository
and the reports generated after the tests are run. You can
use these for debugging.
7.In the bottom section of the lefthand panel on the same
page, select the current pipeline execution build count. You
will have the option to view the console output in the left
panel of the landing page. This will show the live execution
activities for debugging.
Congratulations, that completes your CI setup!
You will have to add the respective tests’ (static code, acceptance,
smoke, CFRs) stages as per your continuous testing strategy to
complete the end-to-end CD setup for the project. Make sure that
the stages are triggered not only after changes to the application
code, but also to the configuration, infrastructure, and test code.

ClaudeinGitHubActions
It would be a surprise if AI hadn’t stepped into the CI/CD space,
since both technologies work toward a common objective:workflow
automation!While CI/CD tools have been automating feature
propagation from commit to production, automated CI/CD pipelines
still require humans to develop the feature, check for code quality,
write tests, and analyze CI failures. Now AI agents can take care of
many of those tasks autonomously—at least to a degree—and when
integrated within the CI/CD workflow, they can speed it up
significantly.
For instance, inChapter 3, you learned how to create a Claude agent
to generate service tests from OpenAPI specifications. Usually these
tests are written (or generated) once the features have been
developed and tested thoroughly in the test environment. But by
integrating AI agents into the CI/CD workflow, you can generate
tests as soon as the OpenAPI specifications are ready to be
developed, in true test-driven development fashion. In this exercise,
you’ll do this with Claude Code and GitHub Actions, a popular CI/CD
platform.
Setup
Claude Code integrates seamlessly into GitHub Actions workflows,
although generating the tests does incur AI model costs and GitHub
Actions minutes (the latter are free for personal repositories). Follow
the steps to integrate Claude Code and GitHub actions:
1.Install theClaude GitHub Appin your “service tests”
repository. This will take care of permissions to access the
repository.
2.Add your Anthropic API key to your “service tests” GitHub
repository as secrets by selecting Settings → Secrets &
Variables → Actions → New RepositorySecret →
ANTHROPIC_API_KEY, then save. If you don’t have a key,

you cansign upand add $5 in credits, which should be
enough for this exercise’spurposes.
3.Provide GitHub Actions permissions to write code changes
and raise pull requests: Go to Settings from your repository.
Navigate to Actions → General. Under “Workflow
permissions,” select the checkboxes for “Read and Write
permissions” and “Allow GitHub Actions to create and
approve pull requests.”
Workflow
You can now create a GitHub Actions pipeline that will generate
service tests for the OpenAPI specifications as soon as it is available
(pushed to the repository), and create a pull request. To do that,
add the GitHub workflow YAML file, as seen inExample 4-1, within
the.github/folder in your service tests repository. This will create
the job under the Actions tab in the repository. You can trigger it
manually or push an OpenAPI spec file to the repository to trigger it
automatically.
Example 4-1.GitHub Actions pipeline configuration for generating
API tests
name: Generate Java Rest Assured Tests from OpenAPI
on:
push:
branches:
- main
paths:
- "path to OpenAPI specs folder in the repository"
workflow_dispatch:
jobs:
generate-tests:
runs-on: ubuntu-latest
permissions:
contents: write
pull-requests: write

actions: write
id-token: write
steps:
- name: Checkout repository
uses: actions/checkout@v5
with:
fetch-depth: 1
- name: Set up Java
uses: actions/setup-java@v4
with:
distribution: 'temurin'
java-version: '17'
- name: Generate API Tests
uses: anthropics/claude-code-action@v1
with:
anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
allowed_tools:
"Read,Write,Bash,View,GlobTool,GrepTool,BatchTool"
max_turns: 30
prompt: |
Generate Rest Assured tests from OpenAPI specs in
api-specs/ directory.
Create proper Java test classes in src/test/java/.
You have full Write permissions - create files
directly without asking.
- name: Create Pull Request
if: success()
uses: peter-evans/create-pull-request@v6
with:
token: ${{ secrets.GITHUB_TOKEN }}
commit-message: 'test: Generate Rest Assured tests from
OpenAPI specs'
branch: automated-tests/restassured-${{
github.run_number }}
title: 'Generated RestAssured Tests from OpenAPI
Specifications'
body: |
## Automated Test Generation
This PR contains automatically generated RestAssured

tests based on
OpenAPI specifications.
### Generated by Claude Code
- Workflow run: ${{ github.server_url }}/${{
github.repository }}
/actions/runs/${{ github.run_id }}
- Triggered by: ${{ github.event_name }}
### Review Checklist
- [ ] Verify test coverage for all endpoints
- [ ] Check test assertions are appropriate
- [ ] Ensure proper test data is used
- [ ] Validate authentication/authorization tests
- [ ] Review error handling scenarios
- [ ] Confirm tests can run independently
### Next Steps
1. Review the generated tests
2. Run tests locally: `mvn test` or `gradle test`
3. Update configuration as needed
4. Merge when satisfied
labels: |
automated
tests
restassured
As you can see,Example 4-1describes the task of generating API
tests as a prompt to Claude. The three-line prompt, which is
intentionally kept short for readability, does a good job of generating
REST Assured tests whenever an OpenAPI spec file is pushed to the
repository.Figure 4-13shows the pull request raised by the GitHub
Actions pipeline.
After reviewing the pull request, if changes are required, ask Claude
to fix them by tagging@claudein the comments section of the pull
request. (In order to do that, you need to copy the workflow file as
describedherewithin your.github/folder.)

Figure4-13.Claude-generatedtestsviatheGitHubActionsworkflow

TIP
TomakethisGitHubActionsworkflowproduction-ready,enhancethe
prompt.Somethingsyoumightwanttoadd:
HowClaudeshouldhandlecaseslikeaddingtestsonlyforthe
latestspecfilecommitted
Instructionstoincludeprojectspecifictestdata
Guidelinesforgeneratingspecifictypesoftestcases
Instructionstoraiseapullrequestonlywhenthetestrun
passes.
This exercise illustrates one of the many possibilities that open up
when you combine AI with CI/CD. You can similarly automate code
reviews, release documentation, CI failure analysis, test failure
retries, and so on. (You can look for inspiration in the Claude Code
repository.)
As I write this in early 2026, some of the popular paid CI/CD
platforms, like Harness, are expanding their scopes to become AI-
powered end-to-end SDLC platforms that useAI agentsnot only to
generate infrastructure code, but to build and deploy pipelines,
optimize test runs, power application-security scanners, and even act
as site reliability engineers.
Conclusion:DORAMetrics
After extensive research, Google’s DevOps Research and Assessment
(DORA) team formulated software delivery performance metrics that
quantify a software team’s performance level as high, medium, or
low (read O’Reilly’sAccelerateto learn the details, by Nicole
Forsgren, Jez Humble, and Gene Kim). In short, the five metrics give

us a handle on measuring a team’s delivery tempo and the stability
of its releases:
Lead time
The time from code being committed to it being ready for
production deployment
Deployment frequency
The frequency at which the software is deployed to production or
an app store
Failed deployment recovery time
The time to restore any service outages or recover from failures
Change fail rate
The ratio of changes released to production that require
subsequent remediation, such as rollbacks to a previous version
or hot fixes, or that degrade servicequality
Deployment rework rate
The ratio of deployments that are unplanned but happen as a
result of an incident in production
The first three metrics—lead time, deployment frequency, and failed
deployment recovery time—expose the delivery tempo: they
measure how quickly the team can deliver value and how frequently
they add value to end users. However, in the rush to deliver value to
customers, the team should not compromise on the stability of the
software, measured by the last two metrics. The change fail rate and
deployment rework rate indicate the stability of the software.
Software failures are inevitable, and these metrics measure how
often they occur due to new releases or production incidents.
Together, the five metrics give a clear picture of a software team’s

performance by measuring its speed, reactivity, and ability to deliver
with quality and stability.
The research team also observed that high-performing teams are
able to do thefollowing:
Deploy on-demand, multiple times a day
Deploy a change to production within the hour a commit is
made to the version control system
Recover from production failures within the hour
Reduce production failures to <15% after deployments
One of the main benefits of having a rigorous CI/CT/CD process is
being able to deliver value to customers on demand. Similarly, when
you place automated tests in the right application layers, your code
can be ready for deployment within the hour. Also, if you automate
your functional and cross-functional requirements tests and run
them as part of the CT process, it should be no problem to keep
your production failures well within the recommended rate of <15%.
Additionally,DORA research in 2025found that when teams in
organizations that have such fast feedback loops adopt AI for
software development and testing, it can yield a 20% to 30%
productivity gain. Thus, the effort you put in on the CI/CT/CD front
will enable your team to earn theelitestatus.DORA researchalso
shows that high-performing teams contribute to an organization’s
success in terms of profit, share price, customer retention, and other
criteria. And when the organization does well, it takes good care of
its employees, right?
KeyTakeaways
Here are the key takeaways from this chapter:

The continuous testing (CT) process automatically validates
both functional and cross-functional aspects of an
application’s quality for every incremental change.
Continuous testing relies heavily on the continuous
integration (CI) process. Continuous integration and testing,
in turn, enable continuous delivery (CD) of software to
customers on demand.
CI/CT processes require teams to follow strict principles and
etiquette.
Plan your CT process to get fast feedback in multiple loops
continuously.
The benefits of continuous testing are numerous, and many
of them—including establishing common quality goals across
roles and teams, sharing delivery ownership, and improving
collaboration across distributed teams—are difficult to
achieve otherwise.
Although DevOps engineers might be responsible for CI/CD
setup and maintenance, it is vital for testers to devise the CT
strategy, ensure the feedback loops trigger correctly, and
keep a keen watch over the team’s CT practices to ensure
that the effort of creating and maintaining tests reaps the
right benefits.
Agentic AI capabilities open up several possibilities for
workflow automation when integrated with CI/CD pipelines
and can accelerate the process of code propagation to
production.
1
FormoreonthisandothercommonlyprescribedCI/CDindustryprinciples,
seeTheDevOpsHandbook:HowtoCreateWorld-ClassAgility,Reliability,&

SecurityinTechnologyOrganizations(ITRevolutionPress,2016),byGene
Kim,JezHumble,PatrickDebois,andJohnWillis.
2
Forfurtherdetails,seeJezHumble,GeneKim,andNicoleForsgren’sbook
Accelerate:TheScienceofLeanSoftwareandDevOps:BuildingandScaling
High-PerformingTechnologyOrganizations(ITRevolutionPress,2018).
3
Formoreinformationonworkingwithpipelines,seetheJenkins
documentation.

Chapter 5.Data Testing
Take a moment to think about the online services you use every day.
They generally offer one of two types of services: they sell their data
to you, or they collect your data and process it on your behalf.
Ecommerce, ride hailing, food delivery, and movie booking and
streaming are examples of the first category, in that their core value
proposition is their diversified data, whereas note-taking
applications, social networking apps, and blogging sites thrive by
accumulating your data! In both cases, their unique functionalities,
user experience design, branding, and marketing revolve around
data.
Amazon, for instance, is a data business at heart. Its core
functionalities, such as purchasing and delivering products, are all
built on top of its collection of product information. The company’s
branding and marketing subtly draw attention to its data supremacy:
the Amazon logo, with an arrow between the A and the Z, tells the
world that it has an enormous variety of data on products ranging
from A to Z.
Data has unparalleled significance in any application, and when an
application does not diligently maintain its integrity, customers’ trust
can quickly go downhill—along with sales. For instance, imagine you
transfer money between two of your accounts via your online
banking app. Although you get a notification that the transaction
was successful, your balances in both accounts fail to reflect the
right amounts for several hours. You might panic, or start to
question the integrity of the bank! Such reactions happen even when
applications don’t handle any critical data: you’d feel disappointed if
a social networking site lost your family photos. Our data is
important to us, and eventually such failures lead users to seek
alternatives.

Data integrity has an unforgiving make-it-or-break-it power. Thus,
testing how data is stored, processed, and presented is pivotal to
success. This chapter discusses the essentials of such testing. First,
I’ll introduce you to how applications store and process data—
specifically, databases, caches, streaming, and batch processing
systems. Each of these systems introduces new test cases, especially
failure cases caused by problems with concurrency, distributed data
processing, and asynchronous communication. The chapter ends
with exercises that will equip you to perform automated and manual
data testing using a variety of tools, including AI tools.
DATA TESTING AND FUNCTIONAL TESTING
You might be wondering: Doesn’t testing the application’s
functionalities already cover data testing? Partially. However,
when you consider the same functionality along the lines of data
flow, you will discover new test cases.
Also, testing functionality via the UI and APIs may not always
suffice. You may have to test data integrity in the storage and
processing systems separately to ensure the functionality is
complete—and to do that, you need to learn a specific set of
tools and methods. Additionally, the nature of these storage and
processing systems introduces new test cases, so you need
specialized knowledge of them. The data testing skill covers all of
this.
In other words, your functional testing isn’t complete until you
do data testing.
BuildingBlocks
Let’s start with an introduction to a set of data storage and
processing systems typically used in web and mobile applications to
understand their testing aspects. For the purposes of this discussion,

I’ll discuss the simplified ecommerce application I used inChapter 3.
Figure 5-1shows the same application architecture, this time
highlighting its data systems.
As you’ll recall, the application has a UI layer, which communicates
with a set of services for different kinds of business processing. The
services are connected to a centralized database where all the
application data is stored. There are three other data systems: a
cache server, a batch processing system, and an event stream. The
arrows indicate the data flow between these systems. Let’s trace the
data flow, starting from the UI layer, to clarify the distinct roles of
these data systems.
Figure5-1.Asimpleecommerceapplicationwithfourdatastorageandprocessing
systems
An end user is trying to log into the application by entering their
credentials in the UI. The UI layer starts by passing the credentials
data to the authentication (auth) service. This service passes the
data to the database to check if the record matches. If so, the auth

service (assuming it follows theOAuth 2.0 protocol) returns an
access token to the UI and also persists it in the cache server. This
access token is a key piece of internal data: it proves that a valid
end user is requesting the action.
Now suppose the user tries to place an order from the UI. The UI
layer constructs an order request, which it sends to the order
service, appending the access token in the header of the request.
The order service checks with the auth service to make sure the
access token is valid, and the auth service in turn queries the cache.
When the access token expires, the cache server deletes it
automatically; if this has happened, the service will return a 404
error code and the UI will redirect the user to the login page.
If the access token is valid, the auth service acknowledges this to
the order service, which creates the order in the database. The order
service also creates an event with the new order information and
places it in the event streaming system so that the downstream
systems, like warehouse management and fulfillment management,
can do their jobs. (The order service’s responsibility ends with
placing the event in the event streaming system; it doesn’t really
care if the respective downstream systems then do their jobs
correctly.)
The downstream systems continuously listen to the event streaming
system and only consume events that are relevant to them. For
instance, if there is a customer address change event, the fulfillment
management system may be interested, but the warehouse
management system may not; however, if there is an order creation
event, both systems will likely process it.
The batch processing system parses vendors’ product details into the
centralized database. It is triggered automatically at a programmed
time—say, once every day atmidnight—and imports all the new and
updated data into the database. New products and any other
changes become visible in the application the following day.

Each of these four data systems caters to a set of essential
application requirements. Let’s explore them individually to uncover
their unique properties and the new test cases they expose.
Databases
Databases don’t really need an introduction: they are an established,
important component in almost all applications. One reason for their
wide adoption is durability: data gets stored on a hard disk and is
lost only in the event of a hardware failure.
If you’re new to databases, think of a jewelry box, where each
accessory has its own compartment and can be accessed as needed.
Each piece of jewelry is kept safe in the box until someone moves or
replaces it. Similarly, an application’s data is stored and organized
meaningfully in databases and can be queried whenever it’s needed.
The application can create new data and read, update, or delete
existing data as required. (These four core operations are commonly
referred to by the acronym CRUD.)
Depending on how the data is structured—in tables, as JSON or XML
documents, or as graphs—databases can be classified asrelational,
1
document, andgraph databases, respectively. Relational databases
are the dominant category. They have been serving a wide range of
applications’ data storage requirements over the last several
decades. MySQL and PostgreSQL are examples of open source
relational databases; you’ll work with a PostgreSQL DB in this
chapter’s exercises.
Relational databases store data in tables, with rows and columns.
Each row in a table depicts a set of related information separated
into columns, like in theCustomerstable inTable 5-1.

Table 5-1.An example of a table structure in a relational database
| UUID | Customer | Phone | Shipping |
| --- | --- | --- | --- |
| (primary | name | number | address |
| key) | (varchar 30) | (int) | (varchar 100) |
| 019367 | Alice | 4567879 | 8/13, Block A |
| 045678 | Bob D’arcy | 0898678 | 23-A, Winscent Square The columns can have predefined names and properties, such as data type and maximum length. Additionally, every row is given a universally unique identifier(UUID) used to relate the records across multiple tables. For example, the customer list in our ecommerce application might be stored in a table likeTable 5-1, with each row representing the details of a single customer: name, email address, phone number, and shipping address. A UUID is created as the record’s unique identifier and stored along with it; it can then be used to query the customer’s information. The same user ID can be used in other tables, such as an account history table, making it possible to retrieve an entire catalog of information about any given user. To perform these operations, relational databases use a domain-specific language called Structured Query Language (SQL, pronouncedsequel). This structure of tables, rows, column names, unique identifiers, and so on is referred to as adatabase schema. Developers or a database administrator derive a database’s schema from the application’s business use case, and may redefine it over time as the application’s requirements grow. Here are some of the basic cases we might want to test for: |

Verifying the positive test case where information gathered
from the user via the UI should be stored in the DB and
appropriately related.
Boundary values based on the column data type and length
of inputs: for example, when the customer name field is
restricted in the DB to fewer than 20 characters, the same
restriction should be applied in the UI and an appropriate
error message should be displayed to the user if they exceed
that length.
Inputs that include SQL syntax: can Bob D’arcy, whose name
includes an apostrophe, have his name stored properly in
the DB, or is some cleaning logic required?
What happens to an ongoing write operation if a sudden
network failure occurs? Does the data get written partially to
some tables but not to all the related tables? What if the
operation is split across multiple services? How would a retry
operation affect such a case?
What is the timeout period before the application retries a
database operation, and what will the user experience be
like?
This system also needs test cases forconcurrency—when multiple
users and systems concurrently access the database for reads and
writes—especially around race conditions. Here are some
considerations:
It is possible for one user’s actions to clash with another’s,
leading to lost updates. For instance, if two users purchase
the same item at the same instant, the item quantity may
decrease by only one count, not two.
Similarly, users could see mismatching data if the application
chooses to read partial updates. For example, let’s say stock

of some unavailable items is getting replenished. The
process first changes the item availability flag to true in one
table, then updates the available item count in another table.
Between these two operations, an end user could see the
item as being available but with 0 quantity.
Again, concurrency could have an unprecedented effect on
shared resources. For instance, if two users buy the last
available item concurrently, using the cash-on-delivery
payment option, the item could be allocated to one user but
the invoice generated for the other.
Concurrency imposes a limit on database performance, so
performance testing with expected real-time data volumes
will be crucial.
Concurrency-related test cases are hard to simulate. Knowing them
is mainly useful in the analysis phase, so you can address them
preemptively during development.
Databases also cater to scalability viareplication: creating redundant
instances of the same data. The instances are usually kept
geographically separate, to improve performance for users in
different locations (say, the East and West Coasts of the US, or North
America and Europe). In such cases, there needs to be a mechanism
to keep all the replicas in sync with the latest updates. This is usually
accomplished by assigning one of the replicas the role ofleader,
responsible for sending the updates to the other replicas (the
followers). Such a situation may lead toreplication lag, where it
takes followers some time to get the update and reach the same
state as the leader. The lag could be a few seconds or a few
minutes, based on network latency, traffic to that instance, and so
on. This model of reaching a consistent state after a period of time
is referred to aseventual consistency.

TIP
Toexploreotherconsistencymodels,checkoutJepsen’sguide,witha
clickablemap.
The eventual consistency model is suitable for applications such as X
(formerly Twitter) and Facebook, where showing slightly older posts
may not have a major impact on users. However, in other
applications, such a lag could confuse users or even harm trust if not
handled properly. A few of the possible problems include the
following:
Reading your own writes
Suppose a user updates their profile information, then opens the
profile page again a few seconds later to confirm the changes.
The updates might not have propagated to all the followers yet.
If the application reads from a lagging follower, the user could
see their old profile information. Confused by this, they may
reenter the changes. If this cycle repeats a few times, not only
does the user become frustrated, but the system could overload,
prolonging the replication lag.
Time-traveling
Let’s say a user is tracking live cricket updates on a sports
website. They keep refreshing the page every few seconds to see
the scores. If the website reads from multiple followers with
eventual consistency, they might experience a sensation of time
travel: for example, the first update could show the score as 116
runs in 5 overs, while on the next refresh, the website could read
from a lagging follower and show the score as 110 in 4.5 overs.
Inconsistent ordering

Sometimes data is chained sequentially and only makes sense if
the sequence is sustained. For example, the comments on a
Facebook post need to appear in the order in which the users
wrote them. But when replication lags aren’t handled
appropriately, a user could see a comment answering a question
before they see the question.
Write conflicts
To avoid single points of failure, sometimes more than one leader
is assigned to manage replication. In such cases, new updates
could be sent to different leaders, resulting in write conflicts.
Write conflictshappen whenever a single resource is altered by
many parties, such as when different team members edit a
Google slide at the same time. In such a case, different leaders
could accept different edits to the same text—but when the
updates are combined, there will be a conflict as to which one to
take as final.
The good news is that the solutions to these common issues are well
established and most databases handle them inherently. However,
it’s essential to be aware and stay vigilant, both in application
development and in testing.
To summarize: when testing databases, consider your application’s
data and its variations as well as potential distributed data
challenges such as network failures and concurrency clashes.
Caches
Acacheis an in-memory data store where data is persisted as
key/value pairs. Storing data in memory boosts performance by
several orders of magnitude, since the application doesn’t have to
make calls to a heavyweight backend storage system such as a
traditional relational database. Today’s popular caching tools, such as

Memcached and Redis, can store terabytes of data and provide sub-
millisecond responses. However, when it comes to durability,
databases have the upper hand: the data is firmly written to disk.
NOTE
Redishasevolvedtoprovidemanyfeaturesbeyondin-memorycaching.
Itcanevenbeconfiguredtopersistpoint-in-timedata(snapshots)on
thediskforrecovery.Formore,checkouttheofficialdocumentation.
The generally recommended practice is to cache only transient data
that the application needs frequently. For instance, in our
ecommerce application, the access tokens are cached because they
are expected to live only for a short period (until the user is logged
in) and the application must access them to validate the authenticity
of every service request. If all users’ access tokens were lost in a
cache failure, the impact would be minimal, just a minor annoyance:
to recover, the current set of logged-in users would simply have to
log out and log in again. A cache fits this scenario perfectly, since
there isn’t a demand for solid durability like there is in a database.
A common alternative is to replicate the frequently accessed
application data in both the cache and a database. In such cases,
the application code is responsible for maintaining the lifecycle of the
cached data: keeping it in sync with the database, purging old data,
falling back to the database upon cache failure, and so on. These
scenarios become test cases when data is replicated in the database
and cache. Here are few other test cases:
The data in the cache will be configured with a time to live
(TTL) value, after which it expires. For example, the access
tokens might be configured to live for 30 seconds. After 30
seconds, the auth service should generate a new token and
store it in the cache.

If the cache becomes a single point of failure, such as a
cache failure that forces all users to log out and log in again,
the user redirection flow has to be tested.
If service instances are replicated, their caches will be too,
leading to distributedcache storage. Ensure that the
functionality still works correctly. (Most distributed cache
implementations, such as Redis Cluster, support redirection
to the right cache instance out of the box, so this is just a
matter of verifying the functional flow.)
Again, it will be critical to test the application’s performance
with a maximum load.
BatchProcessingSystems
In abatch processing system,a program or job transforms a set of
input data into a desired output—not in real time, but in batches
gathered over a period of time. These batch jobs can be written
using frameworks and libraries, like Spring Batch or Apache Spark,
and can run autonomously without user intervention. The input data
to the batch jobs can be in the form of files, database records, or
images, to name a few. The volume of input data can be massive,
causing the job to take hours or even days to complete. Indeed, the
performance of a batch job is measured in terms of the size of the
input file it can process and in what time, not in terms of response
times, like with databases or caches.
Some typical use cases for batch processing systems are generating
reports, bills, and monthly payslips, as well as cleaning training data
for machine learning models. Batch jobs tend to transform
disorganized or sparse data into meaningful data structures, which
need not happen in real time for the application to run smoothly.
To illustrate, let’s go back to the ecommerce application. When
vendors want to display their new or updated product catalogs in the

application, they send their latest item details as files. These files
may have thousands of item records, with each item represented by
its SKU, color, size, price, and so on. The keys in the item records
may be different across vendors, and the files may be in different
formats, such as JSON or CSV, depending on the vendor’s internal
systems. This unorganized data, with all its variations, has to be
transformed into a common structure (database records) so that the
application can display them in the UI. It’s enough for the catalog to
reflect updates the next day or a few days later, not necessarily in
real time, so a batch processing system fits right in.
You can write a batch job (or several) to read records one by one
from different files, extract the right information, and transform it
into database records. The job can be scheduled to run
autonomously at the same time every day—perhaps at midnight,
when the site’s traffic is low. In such an arrangement, the vendor
files sent that day form a batch. Usually, on failures, batch jobs
rerun and discard or overwrite the data created during the previous
failed run.
Batch processing test cases could include the following:
Verifying that the input files are processed in full and that
the operation is not abandoned halfway through
Handling corrupted inputs, such as unexpected null values,
large integers, and other anomalies
Flagging and isolating incomplete records that cannot be
transformed into the required structure
Ensuring that retry mechanisms clean up or overwrite the
failed run’s data
Verifying that batch jobs, which can take up significant
processing capacity, do not adversely affect the application’s
performance

If, while testing, you discover that parties are sending data in new
formats, your team may need to update the batch job. Also,
different vendors may have different counts of products in certain
categories (such as men’s apparel or sports shoes). If the quantity of
products in one particular category is too high, a phenomenon
referred to asdata skew, the batch job’s performance may be
affected, depending on how it is programmed. Getting several
samples of inputs in advance from the relevant data producers will
help.
EventStreams
Anevent, in its literal sense, refers to an action, while astream
represents an entity that flows continuously.Event streamsare
systems where application-specific events are continuously published
to a stream. Other relevant systems consume that data for further
processing whenever they get time. For example, in the ecommerce
application, asFigure 5-2shows, when a customer places an order,
an order event with the order details is posted to the event stream
immediately. The downstream systems read the event and take their
respective actions to fulfill the order. From a data flow perspective,
the order data is stored in the event stream for a preconfigured
period of time, and the expected systems read from it until then.

Figure5-2.Aneventstreamingsystem
Here, the order service that publishes the events is called the
publisher, and thedownstream systemsthat consume the events are
calledsubscribers. Every event is posted with a specifictopicname
so that the subscribers can identify the eventsthat are relevant to
them. Some event stream systems, likeGoogle Cloud Pub/Suband
RabbitMQ, delete each event after all its intended subscribers have
consumed it. In other systems, likeApache Kafka, the events are
deleted after a configured time. This retention feature enables
subscribers to catch up after interim failures. Event streams also
provide durability because they write the events to the disk, like
databases.
You might be wondering: couldn’t a batch job simply replace an
event streaming system? The two differ mainly in their time-
bounded nature; that is, a batch job processes inputs at or after
some preconfigured time, whereas event stream processing happens
almost in real time. The order service in the ecommerce application
posts an event immediately after the order is created, but it doesn’t
require an acknowledgment from the downstream systems—that is,
it’s asynchronous. So, placing the order in the event stream prevents
the order processing from being delayed by several hours, like it

would be with batch processing, but the order is not synchronously
processed like a web service request, either. That’s why it’s
described asnear real-timeand notreal-timeprocessing, even
though subscribers may consume events within seconds. This
asynchronous model serves well for parallel processing and scaling.
It has found considerable use these days in web and mobile
application development.
Here are some test cases for an event streaming system:
The event structure is an agreement between the publisher
and the subscriber, so whenever there is a change to the
structure, the entire functional flow has to be tested.
Test backward compatibility to support both old and new
event structures.
Some events must be processed in a specific sequence: for
example, an item cannot be shipped until the warehouse
confirms its availability. Since event processing happens
asynchronously, this flow has to be tested.
If a failure occurs, test that subscribers can catch up with
new events in the right order.
If there are errors in processing an event even after several
retries, it is moved to a separate queue called thedead letter
queue, with error details appended to aid in debugging. This
flow of events to the dead letter queue needs to be tested.
What happens when the event stream goes down? Test how
the publishers and subscribers handle the failure: when and
how do they retry?
Subscribers’ performance could be slower than the
publisher’s, causing bloat in the stream, so test their ability
to consume events in a timely fashion.

As you can see, each data storage and processing system performs
a unique role in the larger application ecosystem, so each needs
specific attention when testing. That is the topic of“Data Testing
Strategy”.
DataTestingStrategy
In his bookDesigning Data-Intensive Applications, 1st edition, Martin
Kleppmann writes:
It would be unwise to assume that faults are rare and simply hope
for the best. It is important to consider a wide range of possible
faults—even fairly unlikely ones—and to artificially create such
situations in your testing environment to see what happens.
I couldn’t agree with him more on that, especially when it comes to
data testing. As you might have gathered from the previous section,
90% of data testing involves thinking about possible faults—unlike
functional testing, where the thought process revolves around
probable user actions in the application.Figure 5-3visualizes a
typical data testing strategy with four branches.
Figure5-3.Datatestingstrategy

The branches are manual exploratory testing, functional automated
testing, performance testing, and security and data privacy testing:
Manual exploratory testing
Manual exploratory testing can lead to discovering a lot of fault-
causing test cases and is very important in data testing. Sampling
techniques, as you learned inChapter 2, can help you discover
fault-causing test cases in databases and batch processing
systems. Learning about the properties of your specific data
processing tools (such as Apache Kafka or Redis) will help you
identify which aspects are worth exploring manually.
You may need to learn additional tools for manual exploration.
For instance, SQL is an essential tool for exploratory testing of
relational databases; an introduction to its use is included in this
chapter’s exercises. Similarly, API testing tools (also discussed in
Chapter 2) are useful for many of the test cases around the four
data processing systems.
Functional automated testing
To get fast feedback on data-related test cases, you need to
automate them and integrate them with CI. I recommend
starting with a broad base of unit and integration tests, with a
little coverage in the UI and API tests layer, for all four data
systems discussed in this chapter. You can add more automated
checks in the CI to validate the data quality if you’re dealing with
a data-intensive application.“Exercises”discusses relevant tools.
Performance testing
Data storage and processing systems are critical components,
whose performance greatly affects an overall application’s
performance, so it’s important to conduct load and stress testing
on all the data storage and processing systems in the application.
(Backend performance testing is discussed in detail inChapter 8.)

Security and data privacy testing
Data breaches cause huge losses for customers and heavy
penalties for businesses. Security testing, one of the most critical
aspects of data testing, is discussed in detail inChapter 7.
Chapter 10covers testing for compliance with country-specific
data protection and data privacy laws and regulations.
To summarize: while testing each of these branches, consider the
data types and variations, concurrency, the distributed nature of the
data and systems, and the possibility of network failures. Be aware
that some data-related test cases (particularly concurrency-related
ones) depend so much on the timing of actions that testing may not
always reveal their underlying bugs. Remember to discuss those test
cases during the analysis phase.
Next, we’ll get hands-on with some exercises.
Exercises
Most data-related test cases should ideally be automated during
development as part of unit and integration testing. This section
discusses a few essential tools for manual exploratory testing and
macro-level functional automated testing, including:
Database testing tools, such as SQL and Java Database
Connectivity (JDBC)
Data quality validation tools, such as Data Contract CLI
AI coding assistants’ capability to write data-related tests
Apache Kafka and Zerocode, a tool to write automated tests
for verifying Kafka messages

SQL
You absolutely need SQL knowledge when testing the functionalities
of any application that includes a database component. You will
inevitably need to query the database and ensure that the data is
intact. Especially when dealing with large legacy databases that have
many interconnected tables, having sharp SQL skills will save you a
ton of frustration and let you quickly filter data and view what you
need for the test case.
You can use AI coding assistants and general-purpose chatbots, like
Claude Desktop or ChatGPT, to generate SQL queries. But to review
what they have generated, you’ll need to get familiar with commonly
used SQL functions, such as sorting, filtering, grouping, nesting, and
joining. You’ll find them in this exercise.
You need a relational database for this exercise. If you have one
ready, great! Otherwise, follow the steps in“Setup”to set one up.
Setup
Set up a PostgreSQL database on your local machine by
downloading the relevant package or installer from theofficial
website. Once installed,start thepostgresserverusing your
respective OS-specific commands. For example, if you are a Mac
user, open Terminal and run the following commands:
1.Download PostgreSQL:
$ brew install postgresql
2.Start thepostgresserver:
$ brew services start postgresql
3.Open the shell client,psql:
$ psql postgres

Thepsqlclient will connect to the database server and let you
execute SQL queries on it. Alternatively, you could use a GUI client
such aspgAdmin.
After completing the exercise, don’t forget tostop the database
server:
$ brew services stop postgresql
Workflow
As mentioned earlier, the SQL language is used to perform CRUD
operations on relational databases. It is composed of keywords and
functions that make sorting, filtering, and joining data from multiple
tables simple enough. I’ll show you the most frequently needed
queries for manual database testing.
Create
First, create a new table calleditemsthat stores the item details,
such as SKU, color, size, and price. To do this, run the following
query from yourpsqlclient:
postgres=> create table items (item_sku varchar(10), color
varchar(3),
size varchar(3), price int);
This query uses the SQL keywordscreate tableto specify the
type of operation to perform, and gives a name to the table.
Additionally, it elaborates on the column structure with column
names, data types (varchar andint, indicating characters and
integers), and a maximum length for each column. The lengths are
specified explicitly for the three character columns and implicitly for
the integer column, which will store values up to 4 bytes in size.

TIP
SQLsyntaxisgenerallycaseinsensitive.Youmayseethekeywords
writteninallcapitalletters(e.g.,CREATE TABLE,VARCHAR,INT).This
hasnoeffectontheprocessingperformed,andyoucanusewhichever
styleyouprefer.
Insert
To populate the table with data—in our case, with different item
details—run the following query:
postgres=> insert into items values ('ABCD0001', 'Blk', 'S',
200),
('ABCD0002', 'Yel', 'M', 200);
This query uses three keywords:insert,into, andvalues. The
first two keywords indicate the type of the operation and point to the
table in which the insert will be performed (items). The values to be
inserted are provided within parentheses and should match the
column order. You can insert as many rows as needed. If you
attempt to insert data that doesn’t fit within the maximum defined
column lengths or match the specified data types, theinsertquery
will fail. Populate your table with more items with different prices,
colors, and size combinations before trying the next set of queries.
Select
The most frequent operation for database testing isread. To read
the data from our table, use the following command (your results
will vary based on the exact item details you added):
postgres=> select * from items;
This results in the following:

item_sku | color | size | price
---------+-------+------+-------
| ABCD0001 \| Red | \| S | \| | 200 |
| --- | --- | --- | --- |
| ABCD0002 \| Blk | \| S | \| | 200 |
| ABCD0003 \| Yel | \| M | \| | 200 |
| ABCD0004 \| Blk | \| S | \| | 150 |
| ABCD0005 \| Yel | \| M | \| | 100 |
| ABCD0005 \| Blk | \| S | \| | 120 |
| ABCD0007 \| Yel | \| M (7 rows) Note the keywordsselect,*, andfromin the query. The* wildcard symbol says to read all the rows and columns from the table. If you have to select specific columns, you can specify the column names, separated by commas, instead of*. Filtering and grouping Most tables have lots of rows, and rows havennumber of columns. You might need to filter the data that is relevant to a particular test case. The following query narrows down the results: postgres=> select item_sku, size from items limit 3; item_sku \| size ---------+------ ABCD0001 \| S ABCD0002 \| S ABCD0003 \| M (3 rows) Here we select just theitem_skuandsizecolumns from the itemstable, and thelimitkeyword will show the topnrecords from the results. Similarly, the keywordwhereis used to define filter criteria based on column values, as in the following example: postgres=> select color from items where size='S'; | \| | 180 |

Here’s the output:
color
-------
Red
Blk
Blk
Blk
(4 rows)
This query has filtered the item records that have a size of S and
requests only the color column in those records. The results reveal
that the same color is repeated in multiple rows, but it’s hard to
derive meaning from this initial observation. It may be useful to see
a summary of the number of S-sized items in each color. To get this
result, use thegroup bykeyword:
postgres=> select color, count(*) from items where size='S'
group by color;
This gives:
color | count
------+--------
Blk	|	3
Red	|	1
(2 rows)
Note that thegroup bykeyword can also be used without the
wherekeyword. It summarizes multiple rows based on the defined
criteria and presents each group as a single row in the query results.
You can further filter the grouped results using thehavingkeyword:
postgres=> select color, count(*) from items where size='S'

group by color
having count(*)>1;
This gives:
color | count
------+--------
Blk	|	3
(1 row)
This query filters the groups that have an item count greater than 1.
Note that thehavingkeyword can only be used along withgroup
by.
The functioncount(*), in the previousselectclauses, adds the
number of records in each group.
Sorting
Beyond filtering, SQL also allows you to sort results in ascending or
descending order based on the values of one or more columns,
using theorder bykeyword:
postgres=> select item_sku, color, size from items order by
price asc;
The results:
item_sku | color | size
---------+-------+-------
ABCD0005 | Yel | M
ABCD0005 | Blk | S
ABCD0004 | Blk | S
ABCD0007 | Yel | M
ABCD0001 | Red | S
ABCD0003 | Yel | M

ABCD0002 | Blk | S
(7 rows)
A query to sort multiple columns in different orders might look like
this:
postgres=> select * from items order by price asc, size desc;
Functions and operators
You saw thecount()function in earlier examples. The SQL
language provides a suite of functions and operators to perform
aggregations, comparisons, and other transformations. Some useful
functions aresum(),avg(),min(), andmax(), which can be used
in the same way ascount(). As you might expect, these find the
sum, average, and minimum or maximum values. Similarly,
operators likeand,or,not, andnullare useful in filtering values.
Try the following query, which returns black-colored items with size
S:
postgres=> select * from items where size='S' and color='Blk';
Expressions and predicates
You can also use expressions and predicates in SQL. Expressions can
be mathematical formulas such asprice+100. Predicates are logical
comparisons that result in the valuestrue,false, orunknown. For
example:
postgres=> select * from items where price=100+50 and color is
not NULL;
The SQL language will compute the result of the mathematical
expression to determine the price value to filter for and execute a

logical condition,is	not	null, on each of the records’ color values
to ensure they are notnull.
Nested queries
To nest queries within one another, place the subquery anywhere
inside the main query, such as in thewhereclause or thegroup by
clause. This example query displays the count of total items and the
average price of all items. Note the nested subquery, enclosed in
parentheses:
postgres=> select count(*), (select avg(price) from items) from
items;
The results:
count | avg
-------+----------------------
7 | 164.2857142857142857
(1 row)
Joins
Most times, data is spread across multiple tables, and you may need
to correlate it across tables to verify a test case. To support querying
multiple tables, SQL provides thejoinkeyword, which lets you join
two tables based on their common attributes. To try this, create
another table calledorderswithorder_id,item_sku, and
quantitycolumns and insert multiple rows:
postgres=> create table orders (order_id varchar(10), item_sku
varchar(10),
quantity int);
postgres=> insert into orders values ('PR123', 'ABCD0001', 1),
('PR124', 'ABCD0001', 3), ('PR125', 'ABCD0001',2);

Now you can use theinner joinkeyword to merge theitemsand
orderstables based onitem_sku, the common column between
the two tables:
postgres=> select * from orders o inner join items i on
o.item_sku=i.item_sku;
This gives:
order_id | item_sku | quantity |item_sku | color | size |
price
---------+----------+----------+----------+-------+------+-----
----
PR124	| ABCD0001 |	3 | ABCD0001 | Red	| S	|
200
PR125	| ABCD0001 |	2 | ABCD0001 | Red	| S	|
200
PR123	| ABCD0001 |	1 | ABCD0001 | Red	| S	|
200
---------+----------+----------+----------+-------+------+-----
----
As you can see in the results, the columns from the two tables have
been merged into a single row. However, only theitem_skus
present in both of the tables are included in the merge—the other
items from theitemstable are not listed. Notice also that this query
uses theonkeyword to describe the condition to merge on, and
defines aliases for the table names (oforordersandiforitems)
for ease of use. The aliases are reused in the merge condition.
Apart from the inner join, the other commonly used join types are
the left join, right join, and full outer join, where the query syntax
remains the same and only the keyword changes. Aleft jointakes all
the rows in the table mentioned first (on the left) in the merge
condition and merges them with the matching rows in the other
table. When a row has no match in the other table, the columns are

filled withnullvalues. Aright joinworks in the reverse order,
including all rows from the second table and only matching rows
from the first one. Afull outer joinreturns all the rows in both
tables, and wherever there are no matching rows,nullvalues are
shown in the merged results. You can extend join queries with
filtering and sorting keywords.
Update and delete
The remaining two CRUD operations—update and deletequeries—
are presented here. If you want to update a column value and see
the results, use the keywordsupdateandset, as seen here:
postgres=> update items set color='BK' where color='Blk';
Similarly, to delete some of the records you created, use the delete
keyword:
postgres=> delete from items where price=180;
AI assistance
You can prompt AI to generate these SQL queries: just provide the
table schemas and expected data ranges as context in your prompt.
For instance, if you’d like to insert bulk test data into the items table,
ask Claude or GitHub Copilot to generate the insert scripts as
follows:
I need 50 records as test data for an items table for an
ecommerce application.
The items table currently has the following structure:
items (item_sku varchar(10), color varchar(3), size varchar(3),
price int)
The item_sku can be anything between "ABC0001" and "ABC20000";
color can be
"RED, BLUE, or GREEN"; size can be "M, L, S, XS, XXL"; and
price can be between
"5" and "50."

Can you generate SQL scripts to insert 50 items into a
PostgreSQL database?
Claude generated an insert script with 50 varied combinations of
item_sku,color,size, andpriceas values. I copied Claude’s
script into the postgres terminal and got the required test data in
one shot!
Similarly, you can get test data for multiple interconnected table
structures. For instance, theorderstable can only haveitem_sku
values that exist in theitemstable—so include both the table
schemas as context and state in the prompt that they need to be
connected.
The SQL language is far richer than this short introduction, which
focuses on manual database testing, suggests. If you are interested
in learning more about SQL, exploreSQL Pocket Guideby Alice
Zhao, 4th edition (O’Reilly, 2021).
JavaDatabaseConnectivity(JDBC)
JDBCprovides a set of Java APIs to connect to relational databases
and execute SQL queries on them. JDBC can be combined with any
of the UI or API automation test suites mentioned in the previous
chapters to verify data directly in the database. You can import
various database-specific JDBC drivers into a project as Maven
dependencies; for example, you could use the PostgreSQL JDBC
driver to connect to thePostgreSQLDB you created earlier and
verify the database records.
The DB-related test cases should be added as unit and integration
tests, not as UI or API tests, for reasons discussed inChapter 3. The
ideal way to create test data for macro-level automated tests is to
use the application APIs. This ensures that even if the database
schema changes, the tests don’t, since the application code
underneath the APIs will handle the changes. The APIs themselves

should rarely change, because that would hamper integration with
clients.
However, you might want to verify a functionality end-to-end,
including the downstream systems. If your downstream systems are
legacy systems, you may not have APIs to verify the functionality. In
that case, your only choice is to connect directly to the database. For
instance, to verify the successful end-to-end order processing flow in
the example ecommerce application, you might first have to create
an order in the ecommerce application, then verify the fulfillment
system’s DB directly. This exercise is specifically meant to assist you
in such situations.
You’ll be using three simple JDBC APIs to connect to the DB and
execute queries:
// To connect to the database
connection =
DriverManager.getConnection("jdbc:postgresql://host/database",
"username", "password");
// To execute a SQL query
Statement statement = connection.createStatement();
ResultSet results = statement.executeQuery(String query);
// To close the connection after use
results.close();
statement.close();
Setup and workflow
Let’s extend the Java–Selenium WebDriver automation framework
you created as part ofChapter 3to add a test. This test will fetch an
order from theorderstable and assert on theitem_skuand
quantityvalues. The steps are as follows:
1.Add thePostgreSQL JDBC driveras a dependency in the
POM file.

2.Create a new test class file under thetestspackage called
DataVerificationTest.java.
3.Example 5-1shows theDataVerificationTestclass,
where the connection to the PostgreSQL DB is initiated
before every test and closed after the test run. The test
specifies the SQL query it intends to execute and gets the
DB records. Finally, it uses TestNG assertions to validate the
data returned.
Note the JDBC URL used in the test to connect to the
database. It useslocalhostas the hostname (since the DB is
on your local machine); in this example, the database name
ispostgres, and you’ll need to substitute your username and
password. You can run the command\lfrom thepsql
client to list the existing databases, and\dtto see all the
tables and their owners.
Example 5-1.Testing the JDBC connection to the PostgreSQL
DB
package tests;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import static org.testng.Assert.*;
import java.sql.*;
public class DataVerificationTest {
private static Connection connection;
private static ResultSet results;
private static Statement statement;
@BeforeTest
public void initiateConnection() throws SQLException
{
connection = DriverManager.getConnection(
"jdbc:postgresql://localhost/postgres",
"newuser", null);

}
public void executeQuery(String query) throws
SQLException {
initiateConnection();
statement = connection.createStatement();
results = statement.executeQuery(query);
}
@Test
public void verifyOrderDetails() throws SQLException
{
executeQuery("select * from orders where
order_id='PR125'");
System.out.println(results);
while (results.next()){
assertEquals(results.getString("quantity"),
"1");
assertEquals(results.getString("item_sku"),
"ABCD0006");
}
}
@AfterTest
public void closeConnection() throws SQLException {
results.close();
statement.close();
}
}
4.Start thepostgresserver.
5.Run the test from the command line (usingmvn clean
test) or from your IDE to see the results.
That’s how simple it is. You can also choose to abstract the database
connection–related methods into a separateutilsclass for
reusability purposes.

AI-ASSISTED TEST AUTOMATION
You can get the above setup just by prompting GitHub Copilot.
However, Copilot may start overengineering if you don’t direct it
to use the JDBC driver. For instance, it started with a Spring Boot
framework setup to connect to the database, but changed
direction after I stopped and nudged it to use the PostgreSQL
JDBC driver specifically. Then it downloaded the right Maven
dependency, created a properties file to add the JDBC connection
parameters, and wrote the database verification test correctly
using the right APIs.
After updating the JDBC connection parameters with my local
database’s username and password, I again prompted Copilot. It
connected to theorderstable using thepsqlterminal
command, checked if the record existed, and changed the test
with the right column names to ensure it passed!
You can add similar tests to validate specific data across multiple
tables to guarantee functional integrity. In the next exercise, you’ll
explore tools to validate data quality as a whole.
DataContractCommandLineInterface (CLI)
Earlier in this chapter, I mentioned vendors sending their updated
catalogs to the ecommerce application as files, and batch jobs
transforming them into database records. In my experience working
on retail projects, even leading retailers in the US and Europe still
manage their data with legacy systems that use COBOL and
mainframes. They send millions of records containing data about
their product catalogs as files every day to update item availability,
and run batch jobs overnight to insert them into the application’s
database. The records in the files often contain outdated or incorrect
data, null values, missing keys, and many other inconsistencies.

Once populated into the database, this data can also corrupt the
application. It’s a nightmare scenario indeed.
TheData Contract CLItool addresses this issue by defining the
expected data quality per field (referred to asdata contracts) and
using those definitions to scan against real data for violations. The
data contracts are defined by theOpen Data Contract Specifications
(ODCS)in a.yamlfile. The test to scan the real data is triggered
from the command line. It can also be run as automated tests in
CI/CD pipelines.
Setup and workflow
Suppose, with each file import, you want to ensure that the
item_skuvalues are unique and not null. You can use the following
setup and workflow:
1.Get the Data Contract CLI Docker image by running the
following commands:
$docker pull datacontract/cli
$docker run --rm -v ${PWD}:/home/datacontract
datacontract/cli
$alias datacontract='docker run --rm -v
"${PWD}:/home/datacontract" datacontract/cli:latest'
2.Define the data contract (Example 5-2) in a file called
items_odcs.yaml. Specify your Postgres database connection
parameters.
Example 5-2.Items data contracts in theitems_odcs.yaml
file
dataContractSpecification: 1.2.1
id: items-data-contract
info:
title: Items Table Data Contract
version: 1.0.0
description: Data contract for the items table
owner: Order Service Team

servers:
postgres:
type: postgres
host: localhost
port: 5432
database: postgres
schema: public
models:
items:
description: Table containing item information with
SKU as primary identifier
type: table
fields:
item_sku:
type: varchar
description: Unique identifier for items (SKU)
required: true
example: "ABCD1234"
unique: true
isNullable: false
color:
type: varchar
description: Item color
example: "Red"
size:
type: varchar
description: Item size
example: "M"
price:
type: integer
description: Item price
example: "29"
Note that theitem_skuhasunique: trueand
isNullable: falseas quality definitions.
3.Run the test:
$ datacontract test ./items_odcs.yaml
You’ll find the results with the set of checks that passed and failed as
per the data in youritemstable.

You can add several other data quality checks, such as validating
priceto be within a range or to be the sum of other fields in the
database. You can also provide regex patterns to define quality
expectations. Refer to theofficial ODCS documentationfor
definitions.
AI-ASSISTED TEST AUTOMATION
I prompted GitHub Copilot all the way through this process, from
installing the tool to defining specific quality expectations in the
ODCS.yamlfile to executing the test. It was more helpful than I
anticipated, given how new the concept and tool are. I still had
to alter some of the quality definitions manually to fit the
required syntax and delete some out-of-scope overengineered
fields in the ODCS file. Prompting step by step, incrementally,
helped with successful pairing.
Other unit-testing frameworks for checking data quality include
DeequandGX Core, which allow you to write tests
programmatically. For instance, Deequ is an open source unit-testing
tool; it was originally built byAmazon, which still uses it to test the
quality of data produced by its internal systems. Deequ is built on
top of Apache Spark, a large-scale distributed data processing
platform that can be used for batch processing large-scale data.
You can use the Deequ library to unit-test the data before and after
batch processing: for example, to verify the expected data types, the
absence of null values, and the presence of only certain allowed
values. In our ecommerce application, you can run these unit tests
against the files before loading them to Spark for batch processing.
As part of the test run, any records in the file that don’t meet the
requirements are quarantined for further analysis. You could also
write a set of unit tests to use on the transformed data after batch
processing, to reveal errors in the batch processing job.

A sample test using Deequ might look like the following:
val verificationResult = VerificationSuite()
.onData(data)
.addCheck(
Check(CheckLevel.Error, "unit testing vendor files")
.hasSize(_ > 100000) // we expect more than a million
rows
.isComplete("item_sku") // should never be NULL
.isUnique("item_sku") // should not contain duplicates
// should only contain the values "S", "M", "L", "XL"
.isContainedIn("size", Array("S", "M", "L", "XL"))
.isNonNegative("price") // should not contain negative
values
)
.run()
Deequ test runs generate metrics to indicate the quality of a
parameter across all records. For example, the results may show
that 90% ofpricevalues are acceptable, but 10% need to be fixed.
Deequ also provides anomaly detection on data quality metrics,
automatic suggestions for validations, and more.
For data-intensive applications, AI-powered data quality platforms
likeSodacan provide additional capabilities, such as ML-powered
observability on production data and automated anomaly detections,
in addition to validating data contracts in test environments.
ApacheKafkaandZerocode
Kafkais an open source distributed streaming platform that enables
multiple producers and consumers (or publishers and subscribers) to
exchange information through a common stream. The LinkedIn team
originally developed Kafka to aggregate information from multiple
systems and produce meaningful metrics; it has allowed them to
scale to processtrillions of messagesand consume petabytes of data
every day. (The tool is indeed named afterFranz Kafka, the author

of several surrealistic works, including the famous short story “The
Metamorphosis”—simply because the principal engineer who led its
development was a fan.)
Let’s explore Kafka a little to give you an idea of what it is and how
to test it.Figure 5-4depicts a sample Kafka system, composed of a
server (the broker), producers, and consumers.
Figure5-4.ApacheKafkaworkflow
To help you understand the workflow, let’s take a look at some key
terminology:
Messages
Events are referred to asmessagesin Kafka. A message is
composed of a unit of information, such as an order’s details.
Messages are stored on disk directly, ensuring durability.
Topics

Messages are organized under topic names. For example, in our
ecommerce example, order details could be posted to the topic
orders. Different producers could send many messages with the
same topic name; this helps in aggregating data from multiple
producers and makes it easier for consumers to identify relevant
messages.
Partitions
Messages in each topic are typically stored across multiple
partitions, as shown inFigure 5-4. The messages are appended
to a given partition, so partitions make it possible to process
messages in a given sequence if the workflow mandates it.
Producers append metadata calledkeysto the messages to
manage distribution to the right partitions. For example, if a set
of transactions is tied to a customer ID, that customer ID is used
as a key to send them to the right partition so they can be
processed in the right sequence.
Partition-related features are how Kafka achieves its performance
and scalability. Partitions can also be replicated for redundancy.
Offset
Each consumer can read from many topics, and must keep track
of which messages it has read from each topic so that it doesn’t
end up reprocessing messages. For this purpose, anoffset
number—a continuously growing integer created by Kafka—is
added as metadata to each message when it is produced.
Whenever there is a failure, the consumer starts from the last
offset it successfully processed. To onboard a new consumer, it
simply needs to start from an earlier offset number to catch up
(calledmessage replaying).
Brokers

The Kafka server, referred to as a broker, mediates between
producers and consumers. The broker gets messages from the
producers, appends offsets to the messages, and stores them on
disk, arranged by topic. It also responds to consumer requests,
fetching the right messages from the right partitions.
Schemas
Although Kafka considers messages as just collections of bytes of
data, to facilitate collaboration, producers and consumers need to
agree on a data format and structure, referred to as aschema.
For example, the schema of theorderstopic shall consist of
order_id,item_sku, andquantityfields.
Kafka supports messages in JSON, XML, and Apache Avro,
among other formats. Messages’ data structure cannot change
without changes in both the consumer’s and the producer’s code.
Basically, there needs to be backward and forward compatibility
when there are different schema versions, much like a web
service’s request and response contracts. These schema versions
are stored in a separate component called theSchema Registry,
which assists in performing compatibility checks and ensures the
contract between the producer and consumer is not broken when
the schema evolves.
Retention
Kafka retains messages for a short period before deleting them:
the default is to persist them for seven days or until the partition
size reaches 1 GB. This value can be configured per message.
Now it’s time to see how things work firsthand.
Setup
Since the goal here is to familiarize you with the Kafka ecosystem
from a testing point of view, we’ll abstract its installation details and

use Docker containers (refer toChapter 2for a brief introduction to
Docker). You can follow the steps described here to install Kafka on
your local machine:
1.Install Docker Desktop by getting the OS-specific binaries
from theofficial website. After you complete the installation
procedure, the Docker Desktop application will show up with
a Start prompt.
2.On clicking Start, it will suggest that you run the command
docker run -d -p 80:80 docker/getting-started
from your terminal to ensure Docker is accessible from the
command line. This basically downloads a samplehello-
worldcontainer and ensures that it is mapped to port 80 of
the host machine.
3.You will see thehello-world container running in the
Docker Desktop application. Stop the container once it is up
by clicking the Stop button.
4.I’ll introduce Zerocode shortly, but for now, clone the
Zerocode docker filesrepository using thegit clone
command (seeChapter 4). This repository has all the
necessary configuration files to set up Kafka and its
dependencies, and will enable you to write automated tests
using the Zerocode tool.
5.To finish the Kafka installation, use thecdcommand to go to
the folderzerocode-docker-factory/composein your
terminal. Then run the following command:
$ docker-compose -f kafka-schema-registry.yml up -d
Once you see the green “done” in the output of the
command, rundocker ps, which should show a bunch of
containers up and running.

With that, you can now write automated tests to produce a message
and consume it using Zerocode.
Workflow
Zerocodeis an open source tool for writing declarative-style
automated tests for REST APIs, SOAP APIs, and Kafka systems. The
test cases can be created as JSON or YAML files and wired as normal
JUnit tests. You can write tests to hit an API and verify its messages
in Kafka, and vice versa. You can also write tests to produce new
messages and verify their structure by consuming them. The tool’s
main value-add is its abstraction layer, which hides the Kafka APIs
necessary to perform those operations and the serialization and
deserialization code needed to read different types of responses.
As with other data processing systems, unit tests are the best-suited
tests for event streams. You can verify the end-to-end functional
flow involving event exchange by adding API tests. For instance, if
the order service has to pass an order event to the fulfillment
service, you could add an API test that creates an order and verifies
successful shipment processing. Since the processing is in near real
time, the conjunctive test will execute smoothly. However, if you
decide to isolate the services and verify the events, this exercise can
help.
Let’s use Zerocode to push an order message with a JSON structure
containingorder_id,item_sku, andquantityvalues to the local
Kafka broker you just created. The message will be posted to the
topic namedorders. You’ll consume the message, just as the
fulfillment system would do, and verify the order details by writing
declarative test cases. This will give you an idea of what the
messages look like and what details to test for.
Here is a step-by-step walkthrough of creating tests using Zerocode:
1.Create a new Maven project in IntelliJ, calledKafkaTesting,
with the latest JDK version. Refer toChapter 3if you need

assistance with this step.
2.Add the latest JUnit and the zeroCode-tdd library in your
pom.xmlfile, as seen inExample 5-3.
Example 5-3.pom.xmlfile for Kafka testing with Zerocode
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-
instance"
xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
http://maven.apache.org/xsd/maven-
4.0.0.xsd">
<modelVersion>4.0.0</modelVersion>
<groupId>org.example</groupId>
<artifactId>KafkaTesting</artifactId>
<version>1.0-SNAPSHOT</version>
<properties>
<maven.compiler.source>x.x</maven.compiler.source>
<maven.compiler.target>x.x</maven.compiler.target>
</properties>
<dependencies>
<dependency>
<groupId>org.jsmart</groupId>
<artifactId>zerocode-tdd</artifactId>
<version>x.x.x</version>
</dependency>
<dependency>
<groupId>junit</groupId>
<artifactId>junit</artifactId>
<version>x.x.x</version>
<scope>test</scope>
</dependency>
</dependencies>
</project>

3.Create a new folder calledkafka_serversunder
src/main/resources.
4.In that folder, add three properties files:broker.properties,
producer.properties, andconsumer.properties, with the
contents shown inExample 5-4. These files specify the
details of the broker, producer, and consumer containers
running on your local machine.
Example 5-4.Kafka testing properties files
// broker.properties
kafka.bootstrap.servers=localhost:9092
kafka.producer.properties=kafka_servers/producer.properti
es
kafka.consumer.properties=kafka_servers/consumer.properti
es
consumer.commitSync = true
consumer.commitAsync = false
consumer.fileDumpTo= target/temp/demo.txt
consumer.showRecordsConsumed=false
consumer.maxNoOfRetryPollsOrTimeouts = 5
consumer.pollingTime = 1000
producer.key1=value1-testv ycvb
// producer.properties
client.id=zerocode-producer
key.serializer=org.apache.kafka.common.serialization.Stri
ngSerializer
value.serializer=org.apache.kafka.common.serialization.St
ringSerializer
// consumer.properties
group.id=consumerGroup14
key.deserializer=org.apache.kafka.common.serialization.St
ringDeserializer
value.deserializer=org.apache.kafka.common.serialization.
StringDeserializer

max.poll.records=2
enable.auto.commit=false
auto.offset.reset=earliest
5.Now create another folder undersrc/main/resourcescalled
test_cases.
6.Add a new JSON file calledorderMessages.jsonin the
test_casesfolder. This is where you will write your tests in
JSON format.
7.First, write a test to produce a message with order details
and assert on the metadata received in response from the
broker: usually a status value (just like with APIs), a
partition number, and the topic name. The
orderMessages.jsonfile (the producer test case) is shown in
Example 5-5.
Example 5-5.A sample producer test case in Zerocode
{
"scenarioName": "Produce an order details JSON message
for the orders topic",
"steps": [
{
"name": "produce order messages",
"url": "kafka-topic:orders",
"operation": "produce",
"request": {
"recordType" : "JSON",
"records": [
{
"value": {
"order_id" : "PR125",
"item_sku" : "ABCD0006",
"quantity" : "1"
}
}
]
},
"verify": {

"status": "Ok",
"recordMetadata": {
"topicPartition": {
"partition": 0,
"topic": "orders"
}
}
}
}
]
}
8.Next, you need to wire the JSON test case to a JUnit test. To
do this, create a new file calledProducerTest.javaunder
src/test/javaand add the code inExample 5-6to it.
Example 5-6.TheProducerTestclass
// ProducerTest.java
import org.jsmart.zerocode.core.domain.JsonTestCase;
import org.jsmart.zerocode.core.domain.TargetEnv;
import
org.jsmart.zerocode.core.runner.ZeroCodeUnitRunner;
import org.junit.Test;
import org.junit.runner.RunWith;
@TargetEnv("kafka_servers/broker.properties")
@RunWith(ZeroCodeUnitRunner.class)
public class ProducerTest {
@Test
@JsonTestCase("testCases/orderMessages.json")
public void
verifySuccessfulCreationOfOrderDetailsMessageInBroker()
throws
Exception{
}
}

Here, the@TargetEnvattribute tells the test where to find
the broker configuration, the@RunWithattribute binds
Zerocode with JUnit, and the@JsonTestCaseattribute
points to the JSON file or the test case to be run.
9.You can run the test from the IntelliJ IDE by right-clicking
the green button next to the@Testattribute. Once it
passes, you can find the messages created in your local
Kafka instance by running the following commands in your
terminal:
// to get inside the container
$ docker exec -it compose_kafka_1 bash
// to see the records as a consumer
$ kafka-console-consumer --bootstrap-server
kafka:29092
--topic orders --from-beginning
Congratulations on writing your first Kafka test!
10.You can also add a consumer test to validate the message
content by adding the JSON shown inExample 5-7to the
stepsarray in theorderMessages.jsonfile.
Example 5-7.A consumer test using Zerocode
{
"name": "consume order messages",
"url": "kafka-topic:orders",
"operation": "consume",
"request": {
"consumerLocalConfigs": {
"recordType": "JSON",
"commitSync": true,
"showRecordsConsumed": true,
"maxNoOfRetryPollsOrTimeouts": 3
}
},
"assertions": {
"size": 1,

"records": [
{
"value": {
"order_id" : "PR125",
"item_sku" : "ABCD0006",
"quantity" : "1"
}
}
]
}
}
As part of the consumer test, you’ll validate the number of messages
received with the topic nameordersand the message content.
Zerocode allows you to add validations to other parts of the message
content, such as offset, partition, and keys/values, in the same
declarative style. You can find more information about this style of
Kafka testing in Zerocode’sofficial documentation.
AdditionalTestingTools:Testcontainers
Testcontainersare commonly used in data testing. This brief section
discusses it and shows a use case in portability testing.
As part of the previous exercises, you set up an actual PostgreSQL
database on your local machine and created the relevant table
structures so that your tests could connect to the database and
verify the data. If you had access to the application database in a
test environment, the tests could connect to it instead. An
alternative approach would be to use the Testcontainers tool, which
provides containerized throwaway database instances. It is especially
useful for developers who want to run unit and integration tests on
their local machines without needing to set up a proper database.
After all, even if they had a database to use, there’s a good chance it
would be polluted due to active feature development. Testcontainers
bridges this gap by bringing up a fresh database instance in the
same stable state every time—a vital necessity for tests.

For the application code to use a Testcontainers database, you’ll
need to tweak the JDBC URL slightly. Alternatively, you can use APIs
to instantiate database instances wherever necessary. For example,
to bring up a containerized PostgreSQL database before a test run,
add the following lines of code as part of the test setup:
PostgreSQLContainer<?> postgres = new
PostgreSQLContainer<>(A_sample_image);
postgres.start();
You can operate further on the container object within the test as
required. Testcontainers provides a variety of database instances,
including MySQL, PostgreSQL, Cassandra, and MongoDB. It brings
with it the advantage of working with JUnit. You can launch the
database with an init script, function, or file before the test run
begins.
Testcontainers allows you to spin up many other kinds of containers
(Kafka and RabbitMQ containers, containers that include web
browsers, and more) with a single line of code. It also provides a
generic framework to import any other custom containers you may
need for test runs. See thedocumentationfor complete details.

PORTABILITY TESTING
Portabilityrefers to an application’s ability to switch out its
internal components without much rework. Database portability
—in other words, being able to work with different types of
databases, such as Oracle or PostgreSQL—is sometimes essential
in product development. For instance, let’s say a product team
develops an order management system (OMS) that can be
plugged into any given ecommerce platform and its internal
legacy systems. Database portability would be a key selling point
for the OMS product, since it means the customer’s IT team
won’t have to learn a new tool. In a case like this, the OMS
development team could use Testcontainers to verify the
application’s functionalities against different databases as part of
unit and integration testing.
This completes our walkthrough of the data testing space. We’ve
covered a lot of ground here: the types of data storage and
processing systems, the new test cases they add to the functional
testing portfolio, a crash course in SQL, and some hands-on
exercises with a few useful tools to get you started in your own
projects.
KeyTakeaways
Here are the key takeaways from this chapter:
Data is at the core of any online application: features,
branding, marketing, and design aspects all revolve around
it. If data integrity is violated, companies face reputational
damage and unsatisfied customers, so data integrity is
priceless. This makes data testing one of the primary testing
skills and much needed in the industry.

The data testing skill includes knowing data storage and
processing systems’ unique properties, the specific test cases
they impose, and the testing methods and tools necessary to
perform automated and manual exploratory data testing on
them.
This chapter discussed four common data storage and
processing systems: databases, caches, batch processing
systems, and event stream processing systems.
A typical data testing strategy should include manual
exploratory testing, automated functional testing,
performance testing, and testing for data security and
privacy. Include test cases that cover the data and its
variations, its distributed nature, concurrency factors, and
network failures.
A fault-finding mindset is imperative, since 90% of data
testing is about faulty test cases—in contrast to functional
testing, where the thought process revolves around user
actions.
I recommend adding more unit and integration tests and
fewer API and end-to-end tests for all four data processing
systems. AI coding assistants can easethe way.
1
Foranoverviewofdifferentdatamodelsandquerylanguages,seeChapter
2ofMartinKleppmann’sDesigningData-IntensiveApplications(O’Reilly,
2017).

Chapter 6.Visual Testing
The visual quality of an application shapes a customer’s first
impression. When the look and feel are palatable, users tend to
explore the application further. Imagine you need to make a
payment online, and the Continue button looks like it does in
Figure 6-1. Would you trust this site? I wouldn’t. I would choose a
competitor’s website rather than risk losing my money!
Figure6-1.AsamplepaymentUIwherethebuttontextiscropped
Businesses spend a lot on advertisements, freebies, and campaigns
to acquire more customers, but software teams often forget to focus
on visual quality—which is like building a luxurious house and
forgetting to paint it. An application’s visual quality takes the
business closer to the customer and helps gain their affinity—which
directly amplifies the brand value.Visual testingis all about
validating an application’s visual quality, using both manual and
automated testing methods. (Validating the user experience, or UX,
design falls under usability testing, not visual testing, and is
discussed inChapter 10.)
Visual testing involves confirming whether the application design
appears asexpectedin terms of each element’s size, color, and
relative positioning, and similar visual attributes across devices and
browsers. AI has been doing automated visual testing since 2013,
combining computer vision and deep learning technologies.

This chapter begins with a compact overview of visual testing, with a
focus on mandatory project- or business-specific use cases. It then
gives a holistic view of how different kinds of frontend testing types
(apart from visual testing) cumulatively contribute to validating an
application’s visual quality. The chapter then moves to practical
exercises on automated visual testing, using both Playwright and
Applitools Eyes, a paid AI-powered visual testing tool, and
integrating them within CI/CD pipelines to enable continuous
delivery.
BuildingBlocks
We’ll begin with an introduction to visual testing methodologies,
then do a cost–benefit analysis to determine when visual testing
becomes critical to a project.
IntroductiontoVisualTesting
Many software development teams, even today, rely heavily on
manual eyeballing and UI-driven automated testing to verify the
visual quality of an application. Though this approach may be
sufficient for some applications, it is essential to understand the
trade-offs.
First, human eyes can’t notice pixel-level changes, so we can only
achieve a certain level of precision with manual eyeballing. For
example, it’s pretty easy to miss details like curved edges on
buttons, or if the logo shifts up or down by a few pixels. In fact, a
2012research studyfound that human viewers can regularly fail to
notice changes in up to a fifth of an image’s area. This phenomenon,
termedchange blindness, has nothing to do with defects in our
vision—it’s purely psychological. Also, let’s not forget the time and
effort that would be required to manually test the visual quality of
the application on a multitude of browsers, devices, and screen
resolution combinations. Clearly, we need some automation here.

But automated UI-driven functional tests, although they partially
contribute to validating the visual quality, don’t check the “look and
feel” of the elements; they simply identify an element by its locator,
such as an ID or XPath, and check if it functions as expected. For
example, the Continue button inFigure 6-1would have passed UI-
driven tests, because the Continue button existed as per the defined
locator with the expected label, and clicking it would take the user to
the next page. You can’t blame the test in a case like this: it did
validate the end-to-end functional user flow. Another caveat is that
you can’t add tests to assert the presence ofeveryelement on every
page of the entire application: they would execute slowly and
require a lot of effort to maintain.
Fortunately, mature automated visual testing tools have become
stabler and easier to use over time. Some of their visual testing
techniques are as follows:
Requiring code to verify the CSS aspects of the elements (for
example, ifborder-width=10px)
Analyzing static CSS code to find incompatibilities between
the browser and the UI elements
Using AI to recognize changes on the page
Taking a screenshot of the page and comparing it pixel by
pixel against an expected base screenshot
The last method, sometimes referred to asscreenshot testing, is the
most common in visual regression testing today. Two open source
tools that do this kind of visual testing are Playwright and
BackstopJS. There are paid tools as well, such as Applitools Eyes
(covered in“Applitools Eyes”in this chapter) and Functionize, which
are AI-powered. After manually comparing the application to the UX
design, you can use automated visual testing tools to automate
visual testing to help you catch visual bugs, just as automated
functional testing helps catch functional bugs. Over the course of

iterative development, these tests will give you continuous feedback
on the application’s visual quality.
WARNING
Automatedvisualtestscanbecomeflakywhenyoudon’taddthemat
therightstageofiterativedevelopment.Forexample,supposeyour
teamisdevelopingtheloginfunctionalityaspartoftwouserstories:
onethatlaysoutthebare-bonesfunctionality,andonetofinessethe
functionality,look,andfeel.AlthoughaddingUI-drivenfunctionaltests
aspartofthesetwouserstoriesmakessense,visualtestsmightnot
addvaluetothefirststory.Similarly,whenthereisdynamiccontenton
thepage,youneedtoplanfortestdataorstubstomakethetests
stable(Idiscussdynamiccontenthandlinglaterinthechapter).Besure
tocapturesuchvisualtestingeffortsclearlyintherelevantuserstories
asyouplaniterativedevelopment.
Project-andBusiness-CriticalUseCases
While adding automated visual tests is important, it’s not compulsory
for all applications. Cost is a major consideration. UI-driven
functional tests, which are an absolute requirement for all
applications, incur costs to develop and maintain. So do visual tests,
even if the two types of tests can be combined into a single test
suite. Decide if automated visual testing is a must-have or a nice-to-
have based on the nature of your application. For example, you
probably don’t need them for an internal application that will be
used only by a few admins; manual visual testing will be quite
sufficient. However, here are a few use cases where automated
visual testing may provide enough value to justify the cost:
Business-to-consumer applications
When you are developing a B2C application, visual quality is
critical. Therefore, you will need continuous feedback on this
aspect of the application during development. Unless you’re just

developing a rapid prototype to assess market needs and plan to
rework your application’s design later, automated visual tests will
help you build a stable application.
Applications requiring support on a wide variety of devices
When you have to support your application across multiple
browsers, devices, and screen resolutions, automated visual tests
help with the massive load of regression testing.
Figure 6-2showsweb usage statisticsacross devices, browsers,
manufacturers, OSs, and screen resolutions as of April 2026. As
you can see, there are more mobile than desktop users. Chrome
accounts for the largest share of the browser market, followed by
Safari. Among OSs, Android, Windows, and iOS are substantial
players. Testing the visual quality of your app across all these
combinations is a big job, so automated visual testing will save
your team significant effort.

Figure6-2.Statcounterdataonglobaldevice,browser,vendor,OS,andscreen
resolutionusage
Suites of applications with design systems
Usually, enterprises that own suites of applications have a
centralized team that develops the UI components. Multiple
teams reuse these components, often referred to asdesign
systems. For example, UI components, like header navigation
panels with elements like “FAQs,” “Contact Us,” and “Share to
Social Media,” are developed by a single team and reused across
the whole suite of applications. Visual testing at the component
level becomes necessary in such cases, because any flaw in
these standard components will percolate through the entire
suite.
When an application is rebuilt
Sometimes teams completely rebuild an application to improve its
scalability and other quality aspects, but they try not to change

the user experience, with which customers have become familiar.
Visual tests can serve as a safety net for such teams. They also
come in handy when you’re significantly refactoring an existing
application, such as when improving frontend performance
requires reorganizing the UI components.
Applications scaled to support different locales
When an application is scaled to reach audiences in different
countries, localization features get incorporated, such as a
different language and/or look and feel for each region. These
changes might affect the page layout. Automating the visual tests
can be a big help for multiple versions.
In summary, to decide whether your application needs automated
visual testing or not, consider the impact on the customer, the type
of development work, the amount of manual testing effort, and the
team’s confidence in making changes. If it is required, try to balance
your frontend testing strategy by using visual tests only for the most
critical flows. You’ll need to rely on other frontend tests for coverage,
as explained in“Frontend Testing Strategy”.
FrontendTestingStrategy
A web application’s frontend code has three major parts: the HTML
code that defines the basic page structure, the CSS code that styles
the elements on the page, and the scripts that dictate the behavior
of those elements. Another significant component is the browser
that renders this code. Most newer browsers followweb standards
for rendering elements, which means that frontend development
frameworks can provide them with built-in support to guarantee that
elements and features render correctly. However, you might have to
check for cross-browser compatibility issues when you use features
that the frameworks have not tested across old and new browsers.

To validate different parts of the frontend code, as with the backend
code, you can use micro- and macro-level tests. Developers and
testers usually own these frontend tests collectively.Figure 6-3
shows how to use micro- and macro-level frontend tests throughout
the development process to get faster feedback—in other words,
shift-left frontend-testing implementation.
Figure6-3.Implementingshift-lefttestinginthefrontend
UnitTests
Frontend unit tests are written at the component level to assert their
behavior in different states. They also partially contribute to visual
testing. For example, unit tests might assert the greeting message in
the title component of the page or the disabled/enabled state of a
submit button. Typically, developers write these tests when they
begin development using tools like Jest and the React Testing Library
(as well as AI coding assistants). These tests reside inside the
development codebase.

Example 6-1shows a sample unit test to verify a greeting message.
As you can see, it fetches theh1heading element and asserts its
text. By asserting that the element ish1, it contributes to visual
testing.
Example 6-1.Sample unit test using Jest
describe("Component Unit Testing", () => {
it('displays greeting message as a default value', () => {
expect(enzymewrapper.find("h1").text()).toContain("Good
Morning!")
})
})
IntegrationandComponentTests
Integration and component tests validate components’ functionality
and the integrations among them. For example, the sample test
shown inExample 6-2validates login form behavior. This verifies the
functionality of the entire form, not just a single component, as in
unit testing. Integration tests usually mock the service calls and
simulate UI component state changes. InExample 6-2, the login
response is mocked, and the test asserts that after a successful
login, the login form elements disappear from the screen.
Integration tests can also help verify components with multiple child
components and the integrations among them in different states.
Example 6-2.Sample integration test using Jest
test('User is able to login successfully', async () => {
// mocking login response
jest
.spyOn(window, 'fetch')
.mockResolvedValue({ json: () => ({ message: 'Success' }) });
render(<LoginForm />);
const emailInput = screen.getByLabelText('Email');

const passwordInput = screen.getByLabelText('Password');
const submit = screen.getByRole('button');
// enter login credentials and submit
fireEvent.change(emailInput, { target: { value:
'testUser@mail.com' } });
fireEvent.change(passwordInput, { target: { value: 'admin123' }
});
fireEvent.click(submit);
// submit button should be disabled immediately
expect(submit).toBeDisabled();
// wait for form elements to be hidden after successful login
await waitFor(() => {
expect(submit).not.toBeInTheDocument();
expect(emailInput).not.toBeInTheDocument();
expect(passwordInput).not.toBeInTheDocument();
});
});
Developers write these tests at the end of component development
and maintain them inside the development codebase. Like unit tests,
they provide fast feedback on functional behavior during the
development stage and contribute to visual testing—for example, in
this sample test, they assert the disabled state of the relevant
elements after login. You can use the same tools for unit testing and
integration testing. It is also a good practice to add accessibility tests
(discussed below) at the component level.
SnapshotTests
Snapshot testsverify the structural aspects of individual components
and component groups, contributing directly to visual testing at a
micro level using tools likeJestandPlaywright. These tests render
the actual DOM structure of the components using test renderers
and compare the results against the expected structure, which is
stored in a reference snapshot alongside the test. Snapshot tests
compare HTML code snippets rather than comparing screenshots

pixel by pixel.Example 6-3shows a sample snapshot test for
verifying aLinkcomponent’s structure using Jest.
Example 6-3.Sample snapshot test using Jest
import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../Link.react';
it('renders correctly', () => {
const tree = renderer
.create(<Link page="http://www.example.com">Sample
Site</Link>)
.toJSON();
expect(tree).toMatchSnapshot();
});
For every code commit, this test will generate a new snapshot file
with the DOM structure of the Link component, as shown in
Example 6-4, and verify it against the previous snapshot of the
component.
Example 6-4.Snapshot file generated by Jest
exports[`renders correctly`] = `
<a
className="test"
href="http://www.example.com"
onMouseEnter={[Function]}
onMouseLeave={[Function]}
>
Sample Site
</a>
`;
These tests enable fast feedback on the structural aspects of
components during the development phase. (In contrast, visual tests
require the application to be fully functional on the local machine.)
These tests become important when components are reused across
multiple applications, like in design systems. Like unit and

integration tests, they are written as part of the development
process, although usually after development, and stay within the
development codebase, contributing to regression testing.
Snapshot tests should maintain a narrow focus, such as testing a
single small component (like a button or header) or a slightly bigger
component that won’t undergo frequent changes. Otherwise,
additional effort will be required to maintain them when there is
even a slight change in the layout.
FunctionalEnd-to-EndTests
As discussed inChapter 3, automated functional tests mimic a real
user’s actions on a website in an actual browser. These tests are
written to validate complete end-to-end functional user flows while
ensuring integration between the frontend and backend services.
Automated functional tests require the application to be fully
deployed and set up with appropriate test data. Although they use
an actual browser, they only partially contribute to visual testing:
they check if an element is present based on its locator, but do not
verify its look and feel.
VisualTests
While all of the previously discussed types of tests partially
contribute to visual testing, visual tests do the heavy lifting. Visual
tests open the application in a browser and compare screenshots of
every page against its approved base screenshot. Visual tests can be
kept either as a separate suite or integrated into the functional test
suite, which is easier to maintain, using open source tools like
Playwright, Galen, BackstopJS, and others, or paid AI-powered tools
like Applitools Eyes and Percy. AI-powered visual testing platforms
1
use computer vision and deep learning to test across web, mobile,
and desktop applications. They even work on documents like PDFs.
Their additional capabilities include the following:

Contextual comparison
These tools make comparisons based on their understanding of
the structure of the page and component layouts. This reduces
false positives by not flagging every minor pixel change.
Maintenance
When tests fail due to visual changes, AI tools can recognize
them and group them together, making root cause analysis
easier. On approval, they autocorrect the base screenshots to the
latest ones.
Dynamic data handling
AI tools are flexible enough to handle dynamic data, including
comparing layouts, matching patterns instead of exact content,
and applying different matching techniques for different element
types within the same page.
Test sensitivity control
You can tune these tools’ sensitivity to disregard minor UI
changes or keep them strict.
Optical character recognition (OCR)
AI tools can read text across the page, including text embedded
in images, which helps them avoid flagging minor text shifts that
don’t impact the user experience.
Paid end-to-end testing platforms also offer AI-powered visual
testing for thousands of browsers and devices. When the project or
business use case demands visual testing, this may make them
worth the expense.

VISUAL VERSUS SNAPSHOT TESTING
Visual and snapshot tests may seem similar, but they operate on
different levels, much like high-level functional end-to-end tests
and low-level API tests. Visual tests verify the application after it
is fully rendered in a browser, whereas developer-friendly
snapshot tests give feedback on the HTML structure and aid with
shift-left testing. Their feedback cycles also differ significantly.
Snapshot tests work well when focused on smaller, individual
components, whereas visual tests are ideal for validating the
integration of multiple components in a large view, like a web
page.
Cross-BrowserTesting
Cross-browser testingverifies two important things across browsers:
functionality and visual quality. Though an application’s functional
flow shouldn’t change much across browsers, discrepancies have
been noted. For example, in 2020, X had to fix asecurity issue
where users’ nonpublic information was stored in the Firefox
browser’s cache. Apparently, Chrome didn’t have that issue. So
testing the functional flow in different browsers should be part of
your strategy.
The first step in cross-browser testing is to decide which browsers to
focus on. Globally, Chrome and Safari are the most widely used
browsers. Users might also access your application via these
browsers using different devices, like desktop PCs, tablets, or
phones, so consider the application’s responsiveness when testing
across browsers. A general rule is tofocus on the browsers and
resolutions that account for 80% of users.You can test the
remaining 20% inbug bashestoward the end of release, based on
priority.

To get functional feedback across browsers, a good strategy might
be to pick only the most critical functional flows and run UI-driven
functional tests in your selected browsers. Then reuse visual tests
for feedback on visual quality, cross-browser compatibility, and
responsiveness. Choose the browsers and screen sizes used by 80%
of your end users, and add visual tests for the most critical user
flows. Overall, you should only have a handful of functional and
visual tests (you can combine them in the same tests using tools like
Playwright, Applitools Eyes, or Percy) to verify cross-browser
compatibility and the responsiveness of the application.
If you’re worried that these cross-browser testing efforts won’t
suffice for all application pages, frontend development tools and
libraries like React, Vue.js, Bootstrap, and Tailwind have built-in
cross-browser support. You can rely on them to ensure the visual
quality of noncritical user flows. However, older browsers might not
support some of these frameworks’ features.
To verify whether a given browser supports a particular feature of a
development framework (and thus whether or not you should use
it), check the support tables atCanIUse. For example, if you want to
use theflexboxCSS layout in your UI, you can first check whether
your target browsers support this layout. Plug-ins likestylelint-
no-unsupported-browser-featurescan automatically check
CanIUse data for CSS features not supported by their target
browsers. Similarly, theeslint-plugin-caniuseplug-in helps by
pointing out unsupported scripting features in your target browsers.
Another way to provide backward compatibility for JavaScript code is
to use transpilers like Babel. They convert code written in the latest
JavaScript to a version that is compatible with older browsers.
Using all these resources, you can ensure that all pages of your
application meet your cross-browser compatibility requirements by
default, especially in terms of visual quality.

SHIFTING CROSS-BROWSER TESTING TO THE LEFT
Starting from the left:
Use development libraries such as React or Vue.js that
support standardized browsers.
Use plug-ins likestylelint-no-unsupported-
browser-featuresand tools likeCanIUseduring
development to ensure the application’s UI features are
compatible with your target browsers.
Run a handful of UI-driven functional tests and visual
tests on a selected set of browsers and devices that
cover 80% of your application’s target usage.
Conduct bug bashes frequently to test as much of the
remaining 20% target usage as possible.
FrontendPerformanceTesting
Frontend performance testing involves checking the browser’s delay
in rendering the frontend components. You can beautify your
application and enhance its visual quality by adding attractive
images and fancy gestures, but if it doesn’t perform well, users are
unlikely to return. It’s widely recognized that downloading frontend
components accounts for about80% of page load time, so balancing
frontend performance with visual quality is important.Chapter 8
covers tools and best practices for frontend performance testing.
AccessibilityTesting
Web accessibility is mandated by law in many countries, so frontend
code should be designed according to the latestWeb Content
Accessibility Guidelines(WCAG) requirements. Accessibility features

significantly enhance a website’s visual quality, since they emphasize
having a consistent layout throughout the site, understandable text,
adequate clicking space, and so on. (You will learn all about
accessibility testing tools, AI capabilities, and best practices in
Chapter 9.)
That concludes our overview of the different frontend testing types.
To summarize, the team should tailor its frontend testing strategy
based on the intentions of the different types of tests and the needs
of the application. The general recommendation is to have more
micro-level tests (like unit tests) and fewer macro-level tests (like
visual and end-to-end functional tests).
Exercises
You’re now ready to start exploring automated visual testing tools.
Tools in this space can be integrated within UI-driven functional
automation code, such as Playwright or Cypress, or with AI-powered
software-as-a-service (SaaS) platforms, such as Applitools or Percy.
Next, we’ll walk through a few exercises using Playwright, Applitools
Eyes, and Cypress. You can add these visual tests to your CI
pipelines and run them as part of every commit after deployment,
just like functional tests.
Playwright
Playwright’stoHaveScreenshot()method natively supports visual
testing. It uses thepixelmatch libraryto compare the pixels from a
reference screenshot to the current screenshot captured during the
functional testing run and highlights their differences. The
pixelmatch library, implemented based on research papers, claims to
be faster than its predecessors, Resemble.js and Blink-Diff.
A common way to use Playwright’s visual testing feature is to call the
toHaveScreenshot()method within each page of the user flow as

soon as the functional test lands on it, then call it again after a state
change (such as adding an item, which immediately increases the
cart count on the page). You can leverage the standard functional
smoke tests that cover end-to-end user flows and run them in the CI
pipelines to do visual comparisons across browsers and device
configurations. You may be tempted to add visual tests for error
flows as well, but the micro-level frontend tests are a better place
for them.
Next, you’ll learn to set up a visual test within the Playwright
functional tests framework you created inChapter 3.
Setup
Place the configuration shown inExample 6-5in the
playwright.config.tsfile within the Playwright framework you created
in“TypeScript–Playwright Framework”inChapter 3.
Example 6-5.Playwright configuration file
// E2ETests/playwright.config.ts
expect: {
timeout: 10000,
toHaveScreenshot: {
maxDiffPixelRatio: 0.1,
pathTemplate: '{testDir}/__screenshots__{/projectName}/
{testFilePath}/{arg}{ext}',
},
},
Here, themaxDiffPixelRatioallows us to define the sensitivity of
Playwright’s screenshot comparison. It can take values between 0 to
1 and precisely indicates the permissible ratio of different pixels to
the total amount of pixels. A device’s battery state and OS version
often cause tests to notice tiny pixel differences in web page
rendering, causing the tests to fail unnecessarily, so assign a small
ratio of less than 0.2 to this parameter. However, if you’re not
running the tests on different devices or OS versions, choose a value

based on your application’s sensitivity. In this example, you’ll set its
value to 0.1, and the tests will fail when fewer pixels match. You’ll
also define a path to the base screenshots for comparison using the
pathTemplateparameter.
Workflow
Next, add the actual screenshot comparison method to the
AmazonHomePage.tsclass, as shown inExample 6-6.
Example 6-6.AmazonHomePage.tspage class
//E2ETests/pages/AmazonHomePage.ts
async goto() {
await this.page.goto('/');
await this.page.locator('#twotabsearchtextbox').waitFor({
state: 'visible' });
await expect(this.page).toHaveScreenshot('AmazonHomePage.png');
}
I’ve passed a screenshot name (AmazonHomePage.png) as a
parameter to thetoHaveScreenshot()method. This will be used
to fetch the right base screenshot for comparison during the test
run. When you run the test for the first time, it will run against all
the projects configured (the browsers and devices) and fail with an
error:A	snapshot	doesn't	exist	at	{location}. However, it
will create a__screenshots__folder under the/testsfolder and add
the AmazonHomePage screenshot as a.pngfile under each project
subfolder. These screenshots can then be used as base screenshots
for visual comparison.
Now try running the test again. Did it fail? If yes, this time, the
screenshotsfolder will have images highlighting the differences
between the base screenshot and the current test run’s screenshot,
as shown inFigure 6-4.

Figure6-4.Playwright’svisualcomparisonresultsagainsttheAmazonHomePage
screenshot
This isn’t just a flaky test failure: to prevent flaky tests, Playwright
takes consecutive screenshots and compares each with the last one
before using it for assertions against the base screenshot. So you
can be sure that this failure is due to dynamic content on the
Amazon home page, such as the moving carousel.
There are two ways to handle dynamic content during visual testing.
Choose one or both depending on your context:
Use static test data or stub the relevant API calls in the test
environment.
Hide the dynamic element completely by creating a CSS file
that can override the page during the test run, then compare
the screenshots after hiding, as shown inExample 6-7. You’ll
see the same test pass with the carousel area grayed out, as
inFigure 6-5. Remember to recapture the reference
screenshot.

Example 6-7.AmazonHomePage.css file and
AmazonHomePage.ts page class
// E2ETests/pages/AmazonHomePage.css
.card-lite {
display: none;
}
// E2ETests/pages/AmazonHomePage.ts
async goto() {
await this.page.goto('/');
await this.page.locator('#twotabsearchtextbox')
.waitFor({ state: 'visible' });
await
expect(this.page).toHaveScreenshot('AmazonHomePage.png',
{
stylePath: path.join(__dirname,
'AmazonHomePage.css'),
});
}
Figure6-5.Playwrightvisualcomparisonresultswiththecarouselhidden
Alternatively, you can apply a mask to the element, as shown in
Example 6-8. The carousel will have a pink mask on top of it, as

seen inFigure 6-6.
Example 6-8.AmazonHomePage.tsclass
// E2ETests/pages/AmazonHomePage.ts
async goto() {
await this.page.goto('/');
await this.page.locator('#twotabsearchtextbox')
.waitFor({ state: 'visible' });
await
expect(this.page).toHaveScreenshot('AmazonHomePage.png',
{ mask: [ this.page.locator('.card-lite') ]});
}
Playwright’s officialdocumentationshows ways to handle other niche
cases too.
Figure6-6.Playwrightvisualcomparisonresultswiththecarouselmasked

AI-ASSISTED TEST AUTOMATION
AI-assisted visual test generation doesn’t require any special
configuration, just prompting. When I prompted GitHub Copilot
(in its agent mode) to add the visual comparison checks in the
Amazon home page like in this exercise, it was able to do so
correctly and even autofill the code for hiding and masking
elements.
However, when I prompted it to mask the carousel in the
Amazon home page in an evolved test automation framework
where the visual check method was already defined within a
base page class, it created a local overridden method within the
Amazon home page class, instead of reusing the method in the
base page class. One more prompt corrected this.
Playwright offerssnapshot testing capabilitiesusing the
toMatchAriaSnapshot()method. This method compares the
accessibility tree of a page or a specific component against the
expected result, contributing more than visual testing and functional
UI-driven testing to the frontend testing strategy.
ApplitoolsEyes
Applitools Eyesis an AI-powered visual testing tool. The computer
vision technology it’s based on, Visual AI, analyzes a page’s structure
and layout, including the colors and shapes of the elements, and
spots the differences just like a human eye would. It offers
deployment on-premises, in a private cloud, or as a paid SaaS
solution.
Applitools Eyes’ Ultrafast Grid boosts performance: it takes a
snapshot of the web page’s DOM, CSS, and other resources while
running the tests on one browser. It then uses them to compare

across a desired set of browsers, devices, and screen resolutions in
parallel, all hosted in the Applitools cloud.
In the next exercise, you’ll integrate the Applitools Eyes’ AI-powered
visual comparison checks with Playwright’s functional tests by simply
replacing Playwright’s native visual comparison method with
eyes.check().As usual, these tests can be hooked into CI
pipelines.
Setup
1.To set up Eyes,sign upwith Applitools. On the dashboard
page, grab your private API key from My Profile -> My API
key. You’ll need to set the key as an environment variable
before the test run:
$ export APPLITOOLS_API_KEY='your_api_key_here'
2.Add the Applitools Eyes package to your dev dependencies
inpackage.json, as shown inExample 6-9, and run the
command$ npm install.
Example 6-9.package.jsonfile
"devDependencies": {
"@playwright/test": "^1.53.0",
"@types/node": "^24.0.3",
"@applitools/eyes-playwright": "^1.38.0"
}
Workflow
First, add the configuration to open and close the connection to the
Applitools server programmatically as part of the before/after test
hooks. Along with it, add the browsers and devices the test needs to
run against and choose to run them concurrently for fast feedback,
as shown inExample 6-10. Then use theeyes.check()method to
do a visual comparison of the Amazon home page as part of the
test.

Example 6-10.Applitools Visual AI test
import { test, expect } from '@playwright/test';
import { AmazonHomePage } from '../pages/AmazonHomePage';
import { BatchInfo, Configuration, EyesRunner, VisualGridRunner,
BrowserType,
DeviceName, ScreenOrientation, Eyes, Target } from
'@applitools/eyes-playwright';
export let Batch: BatchInfo;
export let Config: Configuration;
export let Runner: EyesRunner;
test.beforeAll(async() => {
// Configure Applitools SDK to run on the Ultrafast Grid.
TestConcurrency is
set to 5 for 5 parallel device and browser runs.
Runner = new VisualGridRunner({ testConcurrency: 5 });
Batch = new BatchInfo({name: `Amazon Home Page`});
Config = new Configuration();
Config.setBatch(Batch);
Config.addBrowsers(
{ name: BrowserType.CHROME, width: 800, height: 600 },
{ name: BrowserType.FIREFOX, width: 1600, height: 1200 },
{ name: BrowserType.SAFARI, width: 1024, height: 768 },
{ chromeEmulationInfo: { deviceName: DeviceName.iPhone_11,
screenOrientation:
ScreenOrientation.PORTRAIT } },
{ chromeEmulationInfo: { deviceName: DeviceName.Nexus_10,
screenOrientation:
ScreenOrientation.LANDSCAPE } }
)
});
test.describe('Order Creation Journey', () => {
let eyes: Eyes;
test.beforeEach(async ({ page }) => {
eyes = new Eyes(Runner, Config);
// Start Applitools Visual AI Test
// Args: Playwright Page, App Name, Test Name, Viewport Size
for local driver
await eyes.open(page, 'Amazon Home', `Amazon Home Page`, {

width: 1200,
height: 600 })
});
test("User searches for Amazon Home Page", async ({ page }) =>
{
const amazon = new AmazonHomePage(page);
await amazon.goto();
await eyes.check('Search Results', Target.window().fully());
});
test.afterEach(async ({ page }) => {
await page.close();
// End Applitools Visual AI Test
await eyes.close();
});
});
When you first run this test, Applitools will take base screenshots for
future comparisons, similar to Playwright’s visual comparison
feature. You can confirm these images in the Applitools dashboard.
The second time you run the test, it will fail due to dynamic content.
In the Playwright report, you’ll see an error with a link to the
Applitools dashboard (Example 6-11). The link will show screenshot
comparison results like those inFigure 6-4, highlighting the
differences in the Amazon home page.
Example 6-11.Playwright test failure report with Applitools Eyes link
Error: Test 'Amazon Home Page' of 'Amazon Home' detected
differences! See details
at: https://eyes.applitools.com/app/batches/00000251650053629633/
00000251650053629440?accountId=abcd
To handle dynamic content, Applitools provides good support with
the followingcustomizations:
Conducting a layout comparison, which only checks the
components’ relative positioning, instead of a pixel-to-pixel

comparison. When the page is full of dynamic content, such
as the Amazon home page, this option comes in handy.
Ignoring colors so that a slight color variation in different
locales doesn’t trigger unnecessary test failures.
Comparing dynamic content that appears on the page, such
as the date and time or user ID, as a regex pattern match
instead of an exact match.
You can configure these customizations for the entire page or for
each component via the Applitools dashboard UI controls, or pass
them as arguments to theeyes.check() method right at the step
where the dynamic content needs to be handled differently. They
will be used for all subsequent runs.
Applitools’ other capabilities includeself-healing, which groups
similar test failures and updates tests with fixes on approvals, and
root-cause analysis, where it suggests which CSS or HTML changes
incurred the test failures. It can integrate with many other UI
development and testing tools, including Cypress, React Storybook,
and Appium. See theofficial documentationfor details.
AdditionalTestingTools
Here are a few more tools to give you a broader idea of the visual
testing space.
Storybook
Storybookis a popular (~70K GitHub stars) open source tool that
assists in UI frontend development. It integrates with common
frontend development frameworks and libraries like React, Vue.js,
and Angular. It helps you build UI components in isolation, which
means you can build the entire UI without setting up a complex
application stack, creating test data, or navigating the application.

Storybook allows you to create new components and verify their
behavior and appearance manually by rendering them within the tool
itself. You can also verify the different states of the component
within the tool. Storybook saves the rendered components as
stories. For each state of the component, a story is stored; for
example, a button component might be rendered in different states,
such as large and small, each of which Storybook would store as a
separate story. This creates an excellent repository for visual testing.
In organizations where a centralized UI development team produces
shared components for use in design systems without a backend to
integrate, this tool is of great use.
Storybook offers visual testing out of the box throughChromatic,a
hosted service extended to enable automatic visual testing across
multiple browsers (a limited free tier is available). You can use
Chromatic to automatically test every new story against the previous
story—truly shifting visual testing to the left.
BrowserStackPercy
BrowserStack Percyis a fierce competitor in AI-powered visual
testing. BrowserStack is well known as an end-to-end testing
platform with several testing capabilities and is popular for
supporting a diverse set of browsers and devices. It offers affordable
visual testingcapabilities, including the following:
AI-powered visual comparisons on real devices
Access to 3000+ browsers and 20,000+ device versions
Comparison against Figma UX designs
Flexible handling for dynamic content
Root-cause analysis for failures
Maintenance support by grouping failures and test fixes

These capabilities can be integrated with existing functional test
suites in Cypress, Playwright, and other testing frameworks with an
API call that passespercySnapshot()and an API key, which you
get on registration. You can run tests in the CI/CD pipelines as
usual. Percy also offers a similar UI dashboard to manage the tests
visually. Explore itsGitHub repositoryfor an example.
As you’ve seen, you can integrate visual testing within the
development environment, as with Storybook, and within functional
tests or AI-powered platforms, like Applitools Eyes and BrowserStack
Percy.
Perspectives:VisualTestingChallenges
One of the challenges with visual testing is choosing which tools to
use. I’ve mentioned only a small sampling; with AI SaaS providers in
the game, the choices are numerous indeed. Here are some features
to look for in an automated visual testing tool:
An easy workflow, from test creation to maintenance and CI
integration
Robust screenshot management techniques (replacing
hundreds of base images for every small change would make
visual testing very expensive, so tools that offer automatic
cleanup and update screenshots have the upper hand)
Test-sensitivity controls, so the tool can ignore minor UI
changes
The ability to handle dynamic data
The ability to run across different browsers and device
combinations, and have good performance while doing so
Another challenge is getting your teammates to fully buy into the
idea of automated visual testing, which does require additional effort

to create and maintain. But if you do this in the right stages and
choose tools that provide easier test maintenance options, your
team will soon appreciate the value. Remember that not all
applications need automated visual testing, so before going down
this path, consider your use case and do a cost–benefit analysis.
KeyTakeaways
Here are the key takeaways from this chapter:
Visual testing is a way to ensure the application looks the
way it should according to the design. Visual quality helps
the business gain customers’ trust, which in turn amplifies its
brand value.
Although manual eyeballing and UI-driven functional tests
can contribute to visual testing, they are not enough on their
own. Manual testing can be error-prone, and functional tests
do not verify the visual aspects of the application. Hence,
you may need separate automated visual tests.
Automated visual tests can provide great value, depending
on the nature of the application and scope of work. Consider
customer impact, team confidence, manual effort, and the
type of work to determine whether your application needs
automated visual tests.
Open source tools like Storybook, Playwright, and Cypress
can perform automated visual testing in projects. AI-
powered solutions like Applitools Eyes and BrowserStack
Percy provide additional infrastructure and workflow
management features for a cost.
Apply visual tests in the right stages of the application to
avoid flakiness; choose tools that can give fast, stable
feedback early in the delivery cycle.

Visual testing is just one piece of the frontend testing
ecosystem. Devise a good frontend testing strategy that
takes advantage of other frontend micro- and macro-level
tests to get faster feedback on visual quality.
1
ComputervisionisabranchofAIthatenablescomputerstoviewdigital
mediacontent,likeimagesandvideos,andusetheirtrainingdatatogaina
higher-levelunderstanding.Fromanengineeringperspective,thegoalisto
makecomputersunderstandandperformtasksthatahuman’svisualsystem
cando—forinstance,viewingawebpageandassessingthevisualchanges.

Chapter 7.Security Testing
Figure7-1.Recentnewsheadlinesdemonstratethatsecurityisaglobalconcern
We are more susceptible than ever tocybercrimes—illegal activities
performed with a computer and a network, including financial theft,
theft of private assets (such as sales documents and research
reports), and exploitation of sensitive information. Cybersecurity
experts estimate that the annual global cost of cybercrime (including
both direct and indirect costs to its victims) will reach12.2 trillion
USDby 2031, up from an estimated 10.5 trillion USD in 2025. These
numbers imply that cybercrimes are far more prevalent than you
might imagine. AsFigure 7-1illustrates, flight booking and adult
dating sites get attacked just as often as banking or social media
sites—and the rapid rush to adopt AI accelerates the problem.
According to the World Economic Forum’s 2025Global Cybersecurity
Outlook survey, 66% of organizations anticipate that AI will have the
most significant impact on their cybersecurity in the coming year.
However, only 37% reported having a process in place to assess the

security of AI tools before deployment! So how can software teams
protect our applications from such attacks?
To build a strong, secure system, build your defenses in depth—that
is, build security measures into multiple layers of the application,
rather than focusing on a single solid outer layer. Long ago, castles
were protected this way: with a moat, then strong iron gates, armed
guards in the keep, and so on. Each layer has to be strong enough
to provide resistance, since each layer the intruders break through
gives them access to more and more resources.
The security of your system is only as strong as your weakest link—
whether that’s your internal admins, hacked passwords, or an
unvetted MCP server—so exploring for weak links is crucial. And the
primary way to do that is security testing.
Security testingmeans thinking like a hacker and looking for
potential vulnerabilities, threats, and risks in your system that might
open the gates to cybercrimes. Professional security, orpenetration
testers (often calledpen testers) can script different attacks on an
application to expose its vulnerabilities. However, you don’t have to
be a pen tester to incorporate some good automated security testing
tools and techniques into your day-to-day team activities.
Security bugs are costly to fix when found in the later stages of the
development cycle, so security testing is worth shifting left, rather
than waiting to engage pen testers until the end of the delivery
cycle. The best practice is to start thinking about a feature’s security
aspects right from the beginning of the requirements-gathering
phase. For example, in a banking application, the requirement to
hide all account transactions from anyone other than the account
holder and bank administrator is an obvious and necessary security
feature. Similarly, requiring two-factor authentication provides an
additional layer of security. Incorporating security best practices
throughout the analysis, development, and testing phases will help
you build strong, secure systems.

This chapter will cover the basics so that you can shift your security
testing to the left in the delivery cycle. You will learn about real-life
attacks, application vulnerabilities, and the STRIDE threat model.
The chapter includes an exercise on threat modeling, a testing
strategy that implements shift-left security testing, and guided
exercises on security testing tools, with instructions on how to
integrate them into CI pipelines to get continuous feedback on your
application’s security. The chapter also discusses AI-assisted threat
modeling and AI-powered security tools.
This chapter isn’t meant to make you a professionally trained
security tester—that takes years of practice. But software teams
have a responsibility to build secure applications, so this chapter
focuses on recommended practices and testing tools as well as, most
essentially, how to think like a hacker.
BuildingBlocks
The first step in thinking like a hacker is to observe different kinds of
cyberattacks and understand the vulnerabilities that lead to them.
This will trigger you to think about potential threats to your
application and help you prevent them. So let’s start by discussing
the prevalent types of cyberattacks.

COMMON SECURITY-RELATED TERMS
Some security terms you will encounter in this chapter:
Assets
Assets are critical entities in the application that need to be
guarded by appropriate defense mechanisms.
Security compromise
This happens when the system’s defense mechanisms fail to
protect its assets.
Vulnerabilities
Vulnerabilities are potential gaps in a system that attackers
can leverage to compromise its security.
Threats
Threats are the potential negative actions or events that can
result from an attacker taking advantage of vulnerabilities to
compromise security.
An attack
An attack is an unauthorized malicious action performed on a
system with the aim of compromising its security.
Encryption
This is a technique to scramble information in such a way that
only the intended recipient who has the key to decipher the
code can decipher it.
Hashing
Hashing is a technique to map data of any length to a fixed-
size output using algorithms (sets of rules for performing

calculations or other operations). The resulting output, or
hash, can be used to verify the data’s authenticity, as even
the smallest change to that data would produce a different
hash. Hashes are immutable—each unique input produces the
same unique output—and because it is practically impossible
to decrypt them to get back the original content, hashing is
called a “one-way” technique.
CommonCyberattacks
This section presents the most common types of cyberattacks, with
real-life examples.
Web scraping
The easiest way to abuse a website’s system is to exploit publicly
available data—especially users’ personal data. Aweb scraping
attack uses software or a script to automatically crawl a website and
gather information for potentially malicious use. Social media
applications provide a lot of personal data, like users’ locations and
phone numbers, making them prime targets—to an attacker, it’s like
putting your valuables on display in the window! The study
mentioned at the beginning of the chapter estimates that personal
data scraped from social media sites generates revenue of $630
million per year.
One prominent example of a web-scraping attack was revealed in
2019, when419 million Facebook user records, including phone
numbers, were found in an unprotected database server on the
internet. Though Facebook was no longer displaying phone numbers
on users’ profiles by then, the information had apparently been
scraped while that feature was still available. And in 2018, X (then
Twitter) founda bug in an internal toolthat logged users’ passwords
in plain text without hashing. (You never know where the weak link

is!) Fortunately there was no evidence of compromise, but as a
precaution, the company was forced to ask its 330 million users to
change their passwords.
Exposed data is always an avenue for exploitation. When you’re
thinking like a hacker, look for exposed data throughout your
application.
Brute force
If you had to guess your friend’s password, how would you go about
it? You might try their date of birth, favorite color, spouse’s name, or
a combination of such things, correct? When you extend the same
trial-and-error method to include an organized list of all possible key
combinations, it’s called abrute-force attack.
In 2016, a brute-force attack on FriendFinder Networks’ databases
exposed412 million user recordswith passwords and other sensitive
information, such as users’ sexual preferences. The usernames and
passwords were reportedly hashed using the Secure Hash Algorithm
(SHA-1) cryptography algorithm, but with modern brute-force
techniques and computing power, it failed to provide a sufficient
defense.
Social engineering
Social engineeringmeans psychologically manipulating people into
giving away their confidential information. Perhaps you’ve received a
phone call from a friendlycustomerservice representative from a
reputable company who requested your credit card details in
exchange for some service—if you were taken in, you’re not alone.
In 2019,a UK-based energy company’s CEOwas manipulated by a
phone call from someone who sounded like his boss (later
discovered to be a trained AI program) to transfer a lump sum of
$243,000 to the hacker’s account! In another incident in 2024, a
deepfake CFOcommanded employees at a Hong Kong company to
transfer money in a video call, leading to over 25 million USD in

losses.Accenture cybersecurity researchersobserved a 223%
increase between Q1 2023 and Q1 2024 in the purchasing and
selling of deepfake-related tools in major dark web forums.
Phishing
Phishingis a type of social engineering attack where an attacker
sends a fraudulent communication (typically an email) to the victim
with the intention to steal their personal data. They may trick the
target into downloading malware or clicking a link that takes them to
a fake website that closely resembles a real one, where they are
asked to provide login details or credit card information. In 2021,
one such campaign targetedMicrosoft 365 userswith an email
attachment that supposedly contained details on a price revision, but
was actually scripted to capture their authentication details.
Similarly, in 2025, Aim Labs (now part of Cato Networks) identified a
vulnerability in Microsoft 365 Copilot called“EchoLeak”, in which an
attacker emails malicious instructions to a user, resulting in Copilot
sending them the user’s sensitive information. Although Copilot has
validations in place to bypass malicious instructions directly sent to
it, it failed when summarizing an email that addressed its
instructions to the user.
Cross-site scripting
In across-site scripting(XSS) attack, the attackers take advantage
of an unsecured website by injecting code to manipulate the
application’s behavior—for instance, to redirect the customers’
payment details to their own servers. In 2018, an XSS attack on
British Airwaysexposed the credit card details from 380,000 booking
transactions. The company was fined heavily for not having a proper
defense system in place.
Ransomware
Ransomwareattacks involve malware that blocks the system until a
ransom is paid to the attacker.The Weather Channelwent offline for

an hour in 2019 due to a malicious ransomware attack on its
network. Since the company had backup servers, it was able to get
past the episode successfully. In 2025, ransomware attacks on major
retailers, includingCo-op and M&S, slowed down business for
several days.
Cookie forging
Cookie forgingis a way to manipulate the cookies that store user
information on a website to get access to users’ accounts. In 2017,
Yahoo disclosed that around32 million user accountshad been
breached after hackers gained access to the company’s proprietary
code and learned how to forge cookies that would allow them to
gain access to accounts.
Cryptojacking
Cryptojacking, or secretly mining cryptocurrencies using other
people’s devices without their authorization, has become
widespread. Usually, attackers set bots to crawl public GitHub
repositories looking for infrastructure access keys (for example, to
an AWS account). In 2018,Tesla Inc.was a victim of such illegal
mining, and in 2025, a developer lost 500K USD in cryptocurrency
after innocently installing a maliciousextension to the Cursor IDE.
These attacks are only the tip of the iceberg. As seen inFigure 7-2,
many more types of attacks can happen at different layers—
application, infrastructure, and network. And hackers continue to
create new kinds of attacks every day. It is a software team’s
paramount responsibility to stay ahead of the game, to protect the
customers and the business. In fact, this is often a legal
responsibility, as governments have developed regulations like the
European Union’s General Data Protection Regulation (GDPR) and
Revised Payment Services Directive (PSD2) to enforce security and
data privacy.

Figure7-2.Commonthreatstosoftwaresystems
TheSTRIDEThreatModel
Users’ and companies’ data, finances, infrastructure, access to
services, and brand reputation are any application’s primary assets,
and it is important not to underestimate the challenge of protecting
them. I once worked on the central security system for a bank; the
number of potential security threats we brainstormed that could
have compromised any of these five assets was truly eye-opening.
Similarly, when you are considering the security of your application,
you need to think of all possible threats. To help you identify them,
you can adopt a threat-modeling framework called theSTRIDE
model, invented by Loren Kohnfelder and Praerit Garg from
Microsoft.STRIDE is an acronym based on the following terms:
Spoofed identity
Tampering with inputs
Repudiation of actions
Information disclosure

Denial of service
Escalation of privileges
Let’s take a closer look at each in turn:
Spoofed identity
Spoofed identityattacks are those where a hacker assumes
someone else’s identity to access assets, like the social
engineering attack in Hong Kong where the AI impersonated the
CFO to convince employees to send money. Such identity thefts
have become prevalent today, made possible by social
engineering, phishing, malware, andshoulder surfing(spying
over someone’s shoulder when they’re entering their personal
information, such as a password or ATM pin), to name just a few.
Defense mechanisms to counter this type of threat include
multifactor authentication, strong passwords, and strong
encryption while storing data and while transferring credentials.
Tampering with inputs
Tampering with inputsinvolves modifying something in the
application (code, data, memory, etc.) in a way that violates its
integrity. This is commonly done by injecting malicious code,
such as a script, into the UI or other layers. For example, in the
British Airways attack mentioned earlier, the hacker changed the
website’s behavior by injecting a script that harvested customers’
credit card details.
Defenses against this threat include adding appropriate
validations (for instance, validating input fields to prevent
someone from sending SQL queries),authenticationand
authorization mechanisms, and other standard security
1
practices, while coding to avoid vulnerabilities that might result
in a code injection.

Repudiation of actions
Repudiationoccurs when a malicious user’s actions cannot be
proven or tracked back to them. For example, a customer could
deny receiving an item after delivery if there is no proof of
receipt. This is a critical aspect to consider when designing a
functionality, as it can result in loss of goods, reputation, and
money, and sometimes legal action. To combat this threat, the
application should have adequate logs and auditing mechanisms.
Information disclosure
Information disclosurethreats involve unauthorized entities
gaining access to the application’s assets. In the earlier Twitter
example, employees were able to see exposed user passwords,
to which they were not supposed to have access, as an
unintended consequence of the design. Fortunately, there were
no security compromises in that instance.
One popular approach is setting up malware to listen in the
background and relay information from a legitimate site to the
hacker, called aman-in-the-middleattack. To defend against this,
build a strong authorization mechanism into your application,
encrypt all secrets, and have secure transmission protocols.
Denial of service
Adenial of service(DoS) attack aims to bring down the
application’s services, causing loss of revenue and reputational
harm to the company. This threat can manifest through a
distributed denial of service(DDoS) attack, where attackers
intentionally overload a system with millions of requests from
multiple devices so that it becomes slow and finally fails.
Defenses against this kind of threat include adding load
balancers, throttling requests per IP address, whitelisting only
certain IP addresses, creating system backups, automatically

spinning up new machines when load increases, and setting up
monitoring systems to alert on sudden surges in request
volumes.
Escalation of privileges
Anescalation of privilegesattack happens when a malicious user
gains unauthorized privileges, such as super admin privileges. In
my opinion, this is the worst kind of threat to deal with, as it can
open up all kinds of risks: theft of private data, denial of service,
financial loss, and so on. A best practice is to follow theprinciple
of least privilege: grant users only the minimum privileges they
need to accomplish their tasks. You can apply this principle on
your team, too, for example by granting code-committing
privileges only to developers and extending them to others only
when necessary. Some useful defense techniques are frequent
access token refreshes, multi-signature features for authorizing
transactions, and storing secrets in vaults.
You can use the STRIDE model to brainstorm all possible security
threats to your application. Of course, you need to think about
preventing various types of attacks, but also consider how to contain
the impact of an attack if one should happen.
ApplicationVulnerabilities
The next step in thinking like a hacker is to get closer to the
application code to learn about security vulnerabilities. This will help
you test for them and add defensive code:
Code or SQL injection
Acode injectionorSQL injectionattack is when an attacker
injects malicious commands or SQL queries to alter the behavior
of an unprotected website. For example, here is a SQL query to
retrieve a student’s record by name:

SELECT * FROM Students WHERE name = '$name'
The query takes an input variable,$name, from the user. A
malicious user could enter a SQL query to drop the entire table in
place of a student’s name:
// If a malicious user inputs this as the student name in
the UI:
Name: Alice'; DROP TABLE Students; --
// The application will execute this command:
SELECT * FROM Students WHERE name = 'Alice'; DROP TABLE
Students; --'
This is why testing for proper input validation is necessary.
Cross-site scripting
As discussed earlier,cross-site scriptingattacks involve executing
a script in the victim’s browser that allows the attacker to take
over the user’s session and redirect the user to a malicious site,
or even alter the code to deface the website. This type of attack
is prevalent when user input is not properly validated or
sanitized.
For example, before Twitter became X, a Twitter user posted the
simpleJavaScriptscript shown inFigure 7-3to reveal anXSS
vulnerabilityin the TweetDeck application. The code caused the
tweet to auto-retweet itself whenever it appeared on someone’s
timeline, popping up an alert dialog after. This could have been
prevented if the app had properly validated the post’s text for the
presence of scripts, but since it didn’t, the viewers’ browsers
innocently executed the script.

Figure7-3.TweetwithXSS
Unhandled known vulnerabilities
Attackers exploit vulnerabilities in an application’s dependencies—
third-party software like OSs, libraries, frameworks, or tools—to
gain access to the system. Maintainers do their best to find such
vulnerabilities and send out patches, but teams that do not
regularly update all of their applications’ vulnerable components
may remain exposed. Tools can help: GitHub’sDependabotcan
auto-update any dependencies with known vulnerabilities in your
application code. Vulnerability scanning tools like Snyk and
OWASP Dependency-Check provide a similar service.
Authentication and session mismanagement
Sometimes the authentication mechanisms in a website are not
foolproof, leaving space for attackers to steal session tokens and
exploit the privileges they gain. If you store session IDs and
sensitive user data in session cookies, you need to refresh them
very often and invalidate the older cookies. Watch out for
vulnerabilities like exposing session IDs in URLs or using
unencrypted connections to send sensitive authentication data.
Unencrypted private data
Make sure that no private data is laid open without encryption in
logs, databases, code repositories, project documentation, or
publicly hosted services. Choose high-endcryptographic
algorithmslike Advanced Encryption Standard (AES), hash-based
method authentication code (HMAC), Argon2, or SHA-256, with

dynamicsaltandpeppertechniques, to help protect data in
2
transit and rest.
Application misconfigurations
Teams often make the mistake of giving blanket admin
permissions to everyone using the application to save on
maintenance effort. Misconfiguring the relevant permissions of
users, folders, systems, and so on can allow attackers to gain
unauthorized access and escalate their privileges to application
content such as the database and admin endpoints, which can be
easily abused. Adhere to the principle of least privilege.
Exposed application secrets
Never hardcode application secrets (such as environment
credentials or superuser credentials) in code or configuration
files, CI/CD pipelines, and other places as plain text. Instead, use
secret management services such as vaults, and access secrets
only from there.
These vulnerabilities must be carefully dealt with during
development and testing. You should also be familiar with the Open
Web Application Security Project (OWASP), a community-led
nonprofit organization that regularly identifies thetop 10 common
vulnerabilitieson the web.
Although these vulnerabilities are common with any open source
development tools, they’re even more prevalent in the AI
development ecosystem, in places such as coding assistants, MCP
servers, chatbots, and AI platforms, as these examples fromSnyk
Labs show. There are three primary reasons.
First, the rush to adopt AI tools and the pressure to showcase
productivity increases means team members deal with too many
tasks and make too many decisions while still learning about new
tools.

Second, AI tools often have access to an organization’s sensitive
information, since they are connected to a wide range of systems:
documentation, presentations, emails, infrastructure, CI pipelines,
code repositories, and developers’ machines all hold sensitive,
organization-specific information. They also are often exposed to
content or instructions from anyone. Simon Willison, co-creator of
the Django framework, has appropriately termed this thelethal
trifecta for AI agents.
Lastly, many organizations don’t have clear AI governance practices
in place. AI tools’ inner workings are not transparent and cannot be
audited, so organizations are on their own when dealing with
cybersecurity risks.
Following security best practices is thus vital for working with AI
development tools. Remember the security adage: “trust, but verify.”
ThreatModeling
This section shows you a methodical approach to threat modeling—a
structured way to aggregate all the potential security threats. A
general best practice is to perform this threat modeling exercise for
each small scope of the application—for example, you might do 15
minutes of threat modeling per user story. Once you model your
security threats, you can prioritize them based on impact and
probability of risk, then incorporate the solutions as part of the story
or as a new feature. When you prioritize the threats, use the
following general rule of thumb:the cost of building security
measuresto handle a potential threat should not be higher than the
value of the asset that you are trying to protect.
For example, let’s say your team is developing a blogging platform.
You do a 15-minute threat modeling exercise and discover a
potential threat: a ransomware attack could bring down the page.
The team proposes to implement a security monitoring system that
will cost $400K per year. Is it worth the cost? That depends: how

much is the company’s annual profit? Also, ransomware attacks on
blogging platforms are very rare. Compare that to a code injection
attack to steal credit card details from an ecommerce website, which
would be a high-impact and high-probability threat.
Once you have identified and prioritized the threats, address the
solutions in the same user story—or create new “abuser” or ”evil
user” stories for this purpose. For example:
As an abusive user, I cannot inject code to redirect the content of
the website.
You can also derive security-related test cases from the abuser
stories’ acceptance criteria for development and testing purposes.
Threat modeling steps
Let’s take a closer look at the threat modeling framework, and then
I’ll show you an example. I recommend doing this exercise as a
team, with all roles represented. Whiteboarding with colored stickies
works well in person; for a remote meeting, use a tool like Mural.
Then walk through the following four steps:
Step 1: Define the feature
Define the scope of the feature for threat modeling. Then draw
the user flows and the users or actors in the system. Once this is
clear, map the flow of data from one component to another.
Step 2: Define the assets
Next, identify the feature’s assets that need to be protected.
Discuss the impact of losing each asset and capture the
probability of the risk.
Step 3: Black-hat thinking
Start thinking like a hacker and come up with ways to attack the
application’s assets. Your mindset should be “Let’s break the

system!” Use the STRIDE model to structure this discussion.
Allow your imagination to flow freely for now, without debating if
something is really a threat or not, and capture all the ideas. Use
AI as an additional team member in this step.
Step 4: Prioritize the threats and capture stories
Analyze the probability and potential impact of the threats you’ve
identified, and prioritize them. Capture these as abuser stories so
the team can act on them.
Now that you know the basics, let’s look at a sample threat modeling
exercise. (This exercise is intended to get you familiar with the
threat modeling steps, not to provide an accurate threat model for
an order management system.)
Sample threat modeling exercise
An application manages orders in a retail store. It has a web UI and
backend REST services to perform CRUD
(create/read/update/delete) and business operations on the order
data, which is stored in a database. Let’s get to the first step,
defining the feature and drawing the user flows.
The users are:
Thestore assistantwho places, edits, and cancels orders
Thesystem administrator(sysadmin) who manages the
infrastructure, configurations, and deployments
Thecustomer service associatewho uses the application to
answer queries related to order statuses
The user flow is simple: the store assistant and the customer service
associate log in to view the latest order list, which provides them
with options to manage the orders.Figure 7-4shows the integration
of components and data flow among thecomponents.

Figure7-4.Userflowsanddataflowsforthesampleordermanagementsystem
Similarly, as shown inFigure 7-5, the sysadmin has to log into the
virtual machines (VMs) to run any scripts or configure the
infrastructure.
Figure7-5.Userflowofthesystemadministrator
The assets that we need to protect are:
Order information
A critical asset. Customers will be dissatisfied if their orders are
tampered with, which could hurt the reputation of the business.
Personal information
Orders include customers’ private data, such as names, phone
numbers, payment details, and home addresses. Any exposure of

confidential information could result in a lawsuit and will cause
harm to the customers.
Proprietary data
The database has the complete sales information of the business.
An attacker could sell that data on the black market or to
competitors.
Infrastructure
The infrastructure that hosts the application is crucial: any
downtime could lead to lost sales.
We’ve finished the first two steps of threat modeling. Next up is
black-hat thinking! Take a moment to think about how the hackers
could gain control of the assets. Make a list, using the STRIDE model
to structure your thinking.
When you’re done, compare what you’ve come up with to the
possible threats identified inFigure 7-6.

Figure7-6.Amapoftheidentifiedthreats
Let’s take a look at each of the threats, which correspond to the
numbers in thediagram:
Spoofed identity
1.An attacker could use social engineering tricks, shoulder
surfing, or malware to get the sysadmin’s login credentials
and use that role’s superpowers to bring the infrastructure
down.
2.The store assistant could forget to log out, and anyone in the
store could use the logged-in session to change the delivery
addresses of existing orders (such as to their own address).
Tampering with inputs
3.An attacker could get hold of the order service endpoints from
any open browser session and tamper with orders later, if the

endpoints are not protected.
4.An attacker could use code injection while placing an order to
hijack customer payment details.
Repudiation of actions
5.If the sysadmin finds out their actions are not logged, they
could create bulk orders for their family and friends by directly
inserting records in the database and triggering other relevant
processes.
Information disclosure
6.If the database is attacked via a back door, all the information
it holds will be exposed, as the data is stored in plain text.
7.Stealing passwords from unencrypted logs or other storage
would enable the attacker to tamper with order data.
8.The customer service associate doesn’t have any restrictions
on theiroperations—all they’re supposed to do is relay the
current order status information to customers, but they can
edit orders. One of them could work with an accomplice to
abuse their permissions.
9.The/viewOrdersendpoint allows any number of records to
be returned. Once compromised, this endpoint could be used
to view all orders. We should at least think of reducing the
blast radius.
Denial of service
10.The attacker could perform a DDoS attack and bring down the
order service, leading to a loss of sales.
Escalation of privileges

11.If an attacker manages to get hold of the sysadmin’s
credentials, they could add new users or escalate existing
users’ privileges to elevate their level of access to the system
from now on. They could also create, modify, or delete order
records without anyone noticing, since there are no logs for
sysadmin actions.
As you can see, even in a small system with just a handful of
components and users, there are many attack points. Imagine how
many there are in real systems with thousands of components and
users!
AI-assisted threat modeling
Teams that attempt threat modeling often complain that they lack
the security expertise to come up with adequate threats. AI
assistance can help you think in new directions. You can prompt a
GenAI chatbot with the team’s specific use case and ask it for a
starter kit of threats. You can even set up Claude projects to
generate threats for a given user story, similar to the AI-assisted
exercise in“Test Case Generation”inChapter 2.
Use the prompt steps below and provide the user flow and data flow
diagrams as context for the Claude project setup (or define them as
Confluence documentation that you include in the prompt). Here is
the sample prompt:
You're a security expert. When asked to design the threats for
a given epic,
follow the steps below:
Step 1: Get the epic details from Jira.
Step 2: Read the technical design and integrations from
Confluence link.
Step 3: Read the threat modeling guide from
https://martinfowler.com/articles/

agile-threat-modelling.html.
Step 4: Apply what you’ve learned to the epic to come up with
new threats.
Step 5: List them under the STRIDE categories and do not
duplicate.
Prompt “Threat	model	SCRUM-6” and it should give you a list of
threats in the STRIDE format.
This tool can help you to conduct threat modeling exercises for each
user story frequently, and can kickstart discussion. However, as usual
with AI output, you need to review it carefully. Sometimes, the AI
identifies irrelevant threats or threats outside the scope boundary,
repeats itself, or lists the threats under the wrong category. So
consider AI an additional team member—listen to its ideas, and then
shape those ideas to your specific project or dismiss them as out of
scope.
The next step is to prioritize the threats and capture stories. Based
on the likelihood and impact of the threats identified here, you might
add new security-related user and abuser stories like the following:
“As an abusive user, I should not be able to see customer
details even if I gain access to the database.”
“As an abusive user, I should not be able to take advantage
of open browsersessions.”
“As an abusive user, if I get access to the system
administrator’s or customer service executive’s login
credentials, I should not be able to edit orders.”
“As a store assistant, I should be the only person authorized
to make edit requests to the order service.”
“As a store assistant, I should be frequently prompted to
change my password to a strong password.”

You should perform these threat modeling exercises iteratively
throughout your development cycle, keeping the scope small. You
will likely uncover new threats to older features as you incrementally
brainstorm threats to new features.
Security test cases from the threat model
After threat modeling, use exploratory testing (described in
Chapter 2) to capture security test cases for each application layer.
TIP
Thezerotrustprinciplewarnsusnottotrustanyperson,component,or
otherentity,evenwithinasecureperimeter.Zero-trustarchitectures
verifytheauthenticityofeveryrequestbeforeexecutingitthroughan
authenticationandauthorizationprotocolsuchasOAuth2.0,which
usesbearertokensforverifyingauthenticity.Thetestcasesreferto
thesetokens.
We’ll assume, for the sake of this example, that after your threat
modeling exercise, your team implemented a zero-trust architecture
using OAuth 2.0. Now let’s look at some security test cases at
different application layers.
In the UI layer:
Verify that after the session times out, the user is prompted
to log in again.
Verify that the user credentials are locked after a set number
of failed login attempts.
Verify that the input fields have validation for illegitimate
inputs (like JavaScript code or SQL queries).
Verify that access tokens are expired after a short period.
However, the UI should make a refresh token call to keep

the user logged in until the session times out.
Verify that, when logged in as the sysadmin or customer
service associate, there is no option to edit an order in the
UI.
In the API layer:
Verify that reusing an expired access token causes the order
service to return a 401 Unauthorized response (though 400
is preferred, to avoid revealing further information to the
attacker).
Verify that appropriate validation is performed on API
parameters’ values (similar to the UI input fields) and that
the APIs return a 404 error if the validation checks do not
pass.
Verify that the/editOrderendpoint returns a 401
Unauthorized response if a systadmin’s or customer service
associate’s access token is used.
In the DB layer:
Verify that passwords are stored as hashes (with a dynamic
salt) in the DB, per the National Institute of Standards and
Technology(NIST) guidelines.
Verify that sensitive customer details are encrypted in the
DB.
In the application logs:
Verify that passwords are not logged as plain text in
application logs.
Verify that user-sensitive information is not logged as plain
text in application logs.

Verify that there are appropriate application logs for all
actions performed on the system, including by the sysadmin,
with timestamps.
These are just a handful of security-related test cases. You may be
able to think of more! If you want more examples, you can explore
the infrastructure-focused threat modelling exercise that I recently
co-published with Jim Gumbley on martinfowler.com:“Threat
Modeling Guide for Software Teams”.
SecurityTestingStrategy
The practices this chapter has discussed so far will strengthen your
defense systems significantly. One more critical step is to add
mechanisms to give the team continuous feedback on potential
vulnerabilities in the code they are developing, for faster fixes. I will
discuss a security testing strategy that shifts security testing to the
left.
Figure 7-7shows a shift-left security testing strategy across the
different stages of the path to production, starting with
development.

Figure7-7.Ashift-leftsecuritytestingstrategy
Let’s take a look at some of the tools and techniques you can use in
the different stages:
Static application security testing (SAST) tools
SAST is a technique for analyzing the static application source
code, byte code, and assembled code for known vulnerabilities—
for instance, unencrypted secrets. SAST tools come in various
forms, including plug-ins, libraries, and SaaS solutions like Snyk
or Checkmarx, and can be integrated into the development
lifecycle and CI pipelines to run against every commit for
continuous feedback.
Many SAST tool providers have adopted AI. They fine-tune their
proprietary AI models on a huge collection of known
vulnerabilities curated by security experts, both to find
vulnerabilities more efficiently without false positives, and to
automatically fix the vulnerability with secure code. Snyk, for

instance, uses both symbolic AI and ML-based AI to detect and
3
fix vulnerabilities (discussed later in this chapter); Checkmarx
uses AI agents to identify and autonomously fix vulnerabilities
based on priority. SAST is a big part of shifting left, since it helps
you discover issues during development.
Talisman, a pre-commit security scan tool in“Talisman Pre-
Commit Hook”in this chapter, is specifically designed to scan the
application code for secrets such as private keys, environment
credentials, and so on, before it is committed to the repository.
These sort of pre-commit scanners, though not exactly SAST
tools, prevent secrets from being pushed to the repository even
accidentally.
Software composition analysis (SCA) tools
SCA is a technique that identifies vulnerabilities in an application’s
third-party dependencies. These tools (like OWASP Dependency-
Check and Snyk) provide instant feedback on those libraries.
They are also AI-powered. Together, SCA and SAST can uncover
the static application code’s vulnerabilities as early as during the
development phase. They can also be integrated into CI pipelines
to get continuous feedback. For example, see the guided exercise
in“OWASP Dependency-Check”.
Functional security test automation
You can add automated tests using functional automation tools,
as discussed inChapter 3, to cover the functional security test
cases. For instance, in the OMS threat modeling example from
earlier, the security test case verifying that only the store
assistant is authorized to edit orders can be added as a service
test in the order service.
Image scanning

Containers have become a widely adopted way to package and
deploy applications. Testing for vulnerabilities in container
images, if you are using them, is critical. Tools like Snyk
Container (part of the Snyk AI platform), Anchore, and others
can do image scanning and can be integrated with CI. Docker
has a built-in command,docker scan, to perform vulnerability
scanning on Docker images. Similarly, Amazon’s Elastic Container
Registry (ECR) offers scanning for images pushed to the registry.
When writing infrastructure as code (such as with Terraform or
Kubernetes), tools like Snyk Infrastructure as Code (IaC) and
terraform-compliancecan be used to enforce security best
practices as well.
Dynamic application security testing (DAST)
DAST is a black-box testing technique that finds security issues
by analyzing how the application responds to specially crafted
requests that mimic actual attacks. For example, DAST tools like
Zed Attack Proxy (ZAP) by Checkmarx and Burp Suite try to inject
malicious scripts into the application to check for code injection
vulnerabilities. Snyk hasannouncedan AI-driven API DAST
solution, where AI simulates human-like testing of business logic
at scale, covering the OWASP Top 10 risks. In general, DAST
tools can be integrated with CI pipelines. Depending on the
application, they might take a while to run, so choose the
appropriate CI stage to run them (as discussed inChapter 4). A
detailed exercise that walks through performing DAST with ZAP is
provided in“ZAP by Checkmarx”.
Interactive application security testing (IAST)
IASTis a new technique that aims to combine SAST and DAST to
analyze an application’s behavior during runtime. It works
through software instrumentation and scans for security
vulnerabilities in real time. This space is evolving; some example
IAST tools are Contrast Security and Acunetix.

Manual exploratory testing
During manual exploratory testing, you can derive security-
related test cases from threat modeling exercises across all layers
(UI, services, and the DB). Chrome DevTools and Postman both
provide a variety of options for executing security test cases.
Penetration (pen) testing
Depending on the criticality of the application and the
development team’s competency with respect to security, you
may choose to involve a professional security tester near the end
of the delivery cycle to ensure that the application doesn’t suffer
from security issues later.
Runtime application self-protection (RASP)
Techniques like SAST and DAST help you find vulnerabilities in
the application code. But attacks can also happen in the
production environment, so you need a layer of defense there.
RASPtools monitor for potential attacks in the production
environment and prevent them from happening. RASP tools (like
Twistlock, Aqua Security, and the AI-poweredSentinelOne)
extend the traditional firewall concept by building up knowledge
of expected application behavior. They then listen to the
application processes at runtime and automatically take
protective measures, such as terminatingcryptomining
processes, examining incoming request payloads and denying
them if they are malicious, and helpingprevent malware attacks.
RASP tools are currently available only as paid products.
You’ll apply some of these tools in practice in the coming sections.

Exercises
The exercises here will guide you through performing automated
SCA using OWASP Dependency-Check and DAST using ZAP by
Checkmarx, as well as integrating them with CI to get continuous
feedback.
OWASPDependency-Check
OWASP Dependency-Check is an open source SCA tool that scans for
known vulnerabilities in a project’s libraries and external
dependencies. You can run it via the command line or as a Jenkins
or Maven plug-in, among other options.
Setup
Follow these steps to set up the command-line Dependency-Check
tool and run a scan on the Selenium WebDriver automation test
project you created inChapter 3. To install Dependency-Check on
macOS, use the following command:
$ brew install dependency-check
You can download the dependency-check ZIP file for other OSs from
theofficial website.
Workflow
Once installed, run the scan on the Selenium WebDriver automation
project using the command shown here:
// On macOS
$ dependency-check --project project_name -s project_path -
-prettyPrint
// On Windows (the dependency-check.bat file is inside the bin
folder when you

unzip the folder you downloaded in the previous step)
> dependency-check.bat --project "project_name" --scan
"project_path"
This command can be integrated into your CI pipeline to make it fail
if vulnerabilities are detected.
The command will generate an HTML scan results report in the same
folder, listing all the vulnerabilities found. The Selenium WebDriver
project may or may not have vulnerabilities. A sample report with
vulnerabilities is presented inFigure 7-8.
Figure7-8.OWASPDependency-Checkscanresults
As you can see, the tool has reported a vulnerability in the jquery-
1.8.2 library. It refers to the published vulnerability with ID CVE-
2012-6708 and explains that “jQuery before 1.9.0 is vulnerable to
Cross-site Scripting (XSS) attacks,” educating us to update the library
appropriately.
ZAPbyCheckmarx
Zed Attack Proxy is an open source tool that performs DAST on
deployed applications. It uses preconfigured automated scripts as
attacks on an application to expose a known set of vulnerabilities.
ZAP essentially operates as a man-in-the-middle tool between the
browser and the application; it sniffs exchanged messages to detect
known vulnerabilities and modifies them to perform various attacks.
This helps inexperienced teams find security issues easily. In

addition, ZAP has an exhaustive list of configurations and add-ons,
described in itsdocumentation. It can be integrated with tools like
Selenium, making it easier to run in CI as well.
Let’s get hands-on with ZAP now.
Setup
To install ZAP on macOS, use the following command:
$ brew install cask owasp-zap
For other OSs, use the installation binaries from theofficial website.
Workflow
Once the installation is done, you should be able to open the ZAP
Desktop UI, shown inFigure 7-9. (On a Mac, you may have to give
permission to open the app, since it’s not from the App Store.)
Figure7-9.TheZAPDesktopUI

The first step is to educate ZAP about the internal application’s URLs
and UI components, so that it can attack them later. You can do this
using the Manual Explore option (Figure 7-9) or the ZAP Spider.
Manual Explore
To manually explore an application, click the Manual Explore button
in the ZAP desktop UI. A new screen will open, as seen inFigure 7-
10, asking you to enter the application URL.
WARNING
DonotuseZAPonawebsitethatyoudon’town.Itisillegaltoconduct
securitytestingonawebsitewithoutauthorization.
Figure7-10.ZAPManualExploreoption

OWASP’s guinea-pig website, theOWASP Juice Shop, is a great
place to learn about security testing. You can use Firefox or Chrome.
Once the browser opens the application, manually walk through the
user flow once. ZAP will scan the application in the background and
record the relevant details.
Notice the Enable HUD checkbox (Figure 7-10). Aheads-up display
(HUD) is a browser overlay you can use so you don’t have to toggle
between the desktop ZAP UI and the browser during attacks. If you
have enabled it, you will see the HUD on top of the Juice Shop
website, as inFigure 7-11(the panels on the left and right).
As you explore the site manually, you’ll see that the Sites icon in the
right panel gathers the site tree, and the History tab at the bottom
lists the URLs visited. ZAP will use these details later when it actively
attacks the application.

Figure7-11.TheHUDontheJuiceShopwebsite
ZAP Spider
The ZAP Spider automatically crawls the site using Selenium
WebDriver and gathers all the application URLs and UI components.
The simple Spider (the gray icon under Sites on the right) might not
be able to navigate JavaScript components, but theAJAX Spider(the

red icon) can. You can use both to completely explore the
application.
Scanning
As the ZAP Spider gathers information, it does passive scanning in
the background. It also does active scanning, where it attacks the
application!
Passive scanninginvolves inspecting the messages exchanged
between the browser and the web application for vulnerabilities—it’s
passive because the messages are not modified (attacked). This
scanning is done automatically, so you will see alerts in the right and
left panels when the ZAP Spider is crawling. The alerts are prioritized
based on severity (high, medium, and low) and grouped under red,
orange, and yellow flags, as seen inFigure 7-11. Click them to see
the details of the vulnerabilities. The ZAP Desktop UI also keeps
detailed logs. For example, a passive scan found a private IP address
exposed in the Juice Shop website, as seen inFigure 7-12.

Figure7-12.PassivescanningresultsintheZAPDesktopUI
Duringactive scanning, ZAP attacks the application by intercepting
requests, modifying them, and bouncing them back and forth,
checking for known vulnerabilities. Click on the fourth icon from the
top in the right-side panel of the HUD (below the red spider) to
trigger an active scan. You will immediately see ZAP navigating
through the website page by page, mimicking different attacks. The
scan takes a while; once it’s complete, the vulnerabilities are shown
under colored flags.Figure 7-13shows a SQL injection vulnerability
found on the Juice Shop website.

Figure7-13.ASQLinjectionvulnerabilityfoundduringanactivescan
Integrating ZAP with CI
Now that ZAP has provided you with a list of all the vulnerabilities in
the application, you need to analyze them and decide which ones to
fix. This takes a lot of time and expertise. I recommend doing this
exercise continuously, instead of leaving it to pile up at the end—and
what better option than integrating with the CI?
To integrate with the CI pipeline, ZAP provides several APIs:
zap.urlopen(target)to open the application
zap.spider.scan(target)to trigger the ZAP Spider and
do passive scanning
zap.ascan.scan(target)to trigger an active scan
zap.core.alerts()to print the results

You can use these APIs in a simple JavaScript or Python script to
perform the scans and integrate with CI using the ZAPCLI.
As mentioned previously, the active scan can take a long time to
complete (sometimes even hours), depending on your application. In
that case, you can integrate it with CI as a nightly regression stage
or include a manual trigger for every user story.
Alternatively, you can embed the ZAP APIs within your Selenium
WebDriver functional tests and run them like typical functional tests
in the CI pipeline. WebDriver can also help ZAP log into the website,
which it might not be able to do on its own.Example 7-1shows a
sample test that scans the application and fails if there are
vulnerabilities. Add appropriate waits, depending on your
application’s scan time.
Example 7-1.ZAP scan as part of Selenium tests
@Test
public void testSecurityVulnerabilities() throws Exception {
zapScanner = new ZAProxyScanner(ZAP_PROXYHOST, ZAP_PROXYPORT,
ZAP_APIKEY);
login.loginAsUser();
// Step 1- Spider the app using ZAP API
zapSpider.spider(BASE_URL)
// Step 2 - Enable passive scanning
zapScanner.setEnablePassiveScan(true);
// Step 3 -Start active scan. Add wait methods.
zapScanner.scan(BASE_URL);
// Step 4 - Log the alerts and assert the count of alerts
List<Alert> alerts = filterAlerts(zapScanner.getAlerts());
logAlerts(alerts);
assertThat(alerts.size(), equalTo(0));
}

ZAP produces HTML reports of the vulnerabilities (Figure 7-14) that
you can save as output artifacts in the CI pipeline.
If you’re using GitHub Actions for your CI/CD, you can easily
integrate ZAP using the predefinedOWASP ZAP Baseline Scanand
OWASP ZAP Full ScanActions. As their names suggest, they perform
the ZAP scan and also add the issues to GitHub.
Beyond those discussed here, ZAP has many other helpful features
that enable various kinds of exploratory security testing on the
application, including security testing APIs.
Figure7-14.ZAPHTMLreport
AdditionalTestingTools
Let’s look at a few other tools that aid in shifting security to the left.
SnykPlatform
Snyk is an AI-powered developer security platform popular with
enterprises that are shifting security to the left. Snyk’s capabilities
include SCA, SAST, DAST, image scanning, and infrastructure-as-
code scanning that can be smoothly integrated into the software

development lifecycle for continuous feedback. Snyk’s proprietary AI
4
models power these core capabilities, and the company claims to
meet the OWASP’s 72% accuracybenchmark, with reduced false
positives. They have also added AI workflows to prioritize issues
across all types of scans; root-cause analysis; and automatic code
fixes and integrations, including aSnyk MCP server.
Snyk also offers an IDE extension you can use through the
command-line interface or via a web UI. You can try the free version
of Snyk bycreating an accountand following through the flow to
integrate your personal GitHub project. You’ll find the Snyk web UI
(the Dashboard) with the results of SCA and SAST scans on the
project, as seen inFigure 7-15. You can observe that Snyk enhances
developer productivity by highlighting the priority of the vulnerability
with a score and an auto-fix capability powered by AI. Unlike LLMs
that generate hallucinated code and code withvulnerabilities, Snyk
has created apatent-pending technologyto generate secure code
that can help developers with instant fixes.
Figure7-15.SnykWebUI—exampleSCA,SASTscanresults
Snyk’s IDE extensions give real-time feedback. For instance,
Figure 7-16shows theSnyk extensionfor Visual Studio Code

conducting real-time SCA and SAST analysis and highlighting the
results inline. You can use the API key from the Snyk Web UI to try
the free version of this extension.
Figure7-16.SnykIDEextension—exampleSCA,SASTscanresults
If you’re building AI agents, Snyk’sagent scannercan identify known
vulnerabilities in agent components such as skills and MCP servers.
Snyk extended itsDAST capabilitiesto the web and APIs for its
enterprise plans, thanks to its 2024 acquisition of Probely. This AI
tool performs human-like testing of business logic at scale and
covers the OWASP Top 10 risks.
TalismanPre-CommitHook
Talisman, an open source tool, scans your application code for
secrets and sensitive information when you commit to a version
control system and raises alerts when it finds them. This is very
helpful in preventing development teams from committing secrets by
accident. You can configure it either as a pre-commit or pre-push
hook.Example 7-2shows a sample scan result where Talisman has
identified the presence ofawsSecretKeyin application code
someone is trying to commit to the Gitrepository.

Example 7-2.Talisman sample scan results
$ git commit
Talisman Report:
+----------------+-----------------------------------------------
-------------------+
|	FILE	|	ERRORS
|
+----------------+-----------------------------------------------
-------------------+
| sampleCode.pem | The filename "sampleCode.pem"
|
| | failed checks against the
|
| | pattern ^.+\.pem$
|
+----------------+-----------------------------------------------
-------------------+
| sampleCode.pem | Expected file not to contain hex-encoded texts
such as: |
| | awsSecretKey=
|
| |
c99e0c79ddcf5ddb02f1274db2d973f363f4f553ab1692d8d203b4cc09692f79
|
+----------------+-----------------------------------------------
-------------------+
With bots crawling GitHub repositories looking for secrets, this is an
important tool.
ChromeDevToolsandPostman
Chrome DevTools and Postman (discussed inChapter 2) are pretty
handy for manual exploratory security testing around functional use
cases, such as test cases from a threat modeling exercise. Postman
also lets you do security-related exploratory testing, such as
configuring auth tokens as part of API requests (Figure 7-17). You
can use this feature to test scenarios like tampered-with or expired
access tokens.

Figure7-17.Postmanaccesstokensetup
Similarly, the Security tab in Chrome DevTools (Figure 7-18) tells you
whether the page is properly served over HTTPS or not. It also
highlights when resources from third-party sites are not served
securely, which could allow man-in-the-middle attacks. DevTools has
also introduced controls to observe website behavior by limiting
third-party cookies.
Figure7-18.TheSecuritytabinChromeDevTools
With the security testing tools we’ve explored here, it should be
clear now that security testing can be embedded within the software
development cycle and needn’t be the sole responsibility of expert

pen testers. Shift-left security testing will help prevent your team
from facing major security issues later.
Perspectives:SecurityIsaHabit
No matter how hard you work to create secure software, unless you
make security a habit, you might still leave unexpected weak links in
your applications that could be exploited. In fact, several common
practices in software teams could easily compromise security: Do
any of your development and testing tools store project data in the
vendor’s private cloud? Are you creating the architecture diagram
with environment details in an external website? If you shared the
production system credentials with all your team members, did you
share them on Slack in plain text? Software teams should train
ourselves to ask questions like these every day to make security a
habit.
KeyTakeaways
Here are the key takeaways from this chapter:
Cybercrimes in the digital era are more prevalent than you
might think, with annual revenues expected to surpass 10
trillion USD in just a few years.
Security measures must be built into applications throughout
the software development lifecycle to build strong,
impenetrable systems.
The STRIDE model is a structured lens for exploring security
threats and can be applied to threat modeling.
Involve your entire team in frequent threat modeling
exercises for small portions of application functionality, such

as a user story or a feature, and create abuser stories and
security-related test cases.
Deploy shift-left security testing strategies using automated
security testing tools like SAST, SCA, and DAST, as well as
manual exploratory and functional automated testing.
Accessible automated security testing tools mean that
software teams don’t have to wait for penetration testing to
get feedback.
Most importantly, make security a habit.
1
Foranexcellentintroductiontoprinciplesandbestpracticesforwriting
securesoftware,seeDanielDeogun,DanBerghJohnsson,andDaniel
Sawano’sSecurebyDesign(Manning,2019).
2
Formoreonthistopic,seeWadeTrappeandLawrenceC.Washington’s
IntroductiontoCryptographywithCodingTheory,3rdedition(Pearson,
2020).
3
Checkmarxoffersasuiteofagents,calledOneAssist.
4
AkanchhaShrivashtavahasdiscussedSnyk’sapproachtoadoptingAI
securely,usingbothsymbolicAIandneural/ML-basedAI,indetailonthe
Snykblog.

Chapter 8.Performance
Testing
Time is money!
—Benjamin Franklin
We’ve all been frustrated when our favorite websites suddenly
become slow as sloths, leaving us wondering, “Is there a problem
with my internet?” To save your application’s end users from such
frustrations, you have to continuously measure and work to improve
web performance. This chapter covers performance KPIs, API
performance testing, frontend performance testing, and new AI
capabilities to assist with both API and frontend performance testing
and shift-left performance testing. You will also get a chance to try
both frontend and API performance testing in theexercises.
Because performance testing is such a large topic and must be done
both on the backend and the frontend, this chapter is structured a
little differently from the previous ones. You’ll find all the familiar
sections here, but split into two halves: first backend, including
exercises and additional tools, and then frontend. A holistic strategy
for shift-left performance testing is presented toward the end of the
chapter.
BackendPerformanceTestingBuildingBlocks
How much can a few seconds’ delay really matter? There is a
quantitative indicator for this: thebounce rateis the percentage of
customers that leave a website after viewing just one page. A
Googlestudy found a strong (seeTable 8-1) correlation between
page load time and user bounce rates. The data confirms that with
every additional second’s delay, businesses lose customers to their

competitors. For example, in 2018, Amazon faced an estimated loss
of$72 to 99 millionwhen its website failed to handle Prime Day
traffic.
Table 8-1.Google statistics correlating page load time and
bounce rates
Page load time Increases the probability of bounce by
1–3 seconds 32%
1–5 seconds 90%
1–6 seconds 106%
1–10 seconds 123%
And there’s more—Google’s search engine optimization (SEO)
algorithms rank slower websites lower! For its own website, Google
aims for a load time ofunder a half second, and it recommends two
seconds as the maximum for acceptable website performance.
A slight increase in performance can significantly improve sales. For
instance, in 2016,The Trainline, a train operator in the UK, reduced
its average page load time by 0.3 seconds; its revenue increased by
8 million GBP (11 million USD) a year. Similarly, frontend-as-a-service
providerMobifyobserved in 2023 that every 100 ms decrease in
load time for its home page increased conversions, leading to an
annual revenue boost of $380,000. This correlation means the first
step to improving online sales is to look at performance—so software
teams need to shift our performance testing to the left.
Also, I love my weekends and want to spend them relaxing, not
working to fix performance issues in production. That’s one of my
primary motivations for focusing early on performance!

SimplePerformanceGoals
Performancerefers to an application’s ability to serve large numbers
of concurrent users without its behavior degrading beyond a point
that is acceptable to the end users. To test for performance, first you
need to determine the expected number of peak-time users, then
verify that the application’s performance under that load remains
acceptable.
What constitutes acceptable performance is largely a question of
perception. According to web usability and human–computer
interaction researcherJakob Nielsen, when a site’s response time is
less than about 0.1 second, it feels instantaneous to the user. With
response times of 0.2 to 1 second, users perceive the delay but still
feel that they are in control. Beyond this, they feel the UI is sluggish.
This explains Google’s recommended performance threshold of no
more than two seconds.
FactorsAffectingApplicationPerformance
Factors that affect performance include the following:
Architecture
A site’s architecture plays a vital role in its performance. For
instance, if the responsibilities of the web services are not
properly compartmentalized, the user will have to make
numerous calls to different services from the UI, delaying the
response time. Similarly, when appropriate caching mechanisms
are not implemented at the right levels, website performance will
be affected.
Tech stack
Different application layers need different tools, but if they don’t
work together coherently, it will affect performance. For example,

the choice of language (such as Java, Ruby, Go, or Python) can
have a perceptible impact onAWS Lambda cold startup time.
Code complexity
Complex or poorly written code often leads to performance
issues. For instance, if a user inputs an empty string into search,
the search endpoint should do some simple input data validation
and fail the request quickly. Failing this, the service will search
the database and then return an error, delaying the response
time unnecessarily.
Database choice and design
Databases play a key role in performance. There are various
types of databases, as discussed inChapter 5. If your application
requires very high performance, choosing a suitable database
type and properly organizing the data inside it will be critical. For
instance, if you store the details of a single purchase order across
multiple tables, that information has to be consolidated before
the system can retrieve the final order.
Network latency
The central nervous system of any application is the network
through which its components communicate, so good
connectivity among components is crucial. Further, end users
around the globe will interact with the application using their own
networks (2G, 3G, 4G, WiFi). The quality of those networks is
outside your control, but you can design the application to cater
to users with weak network connectivity. A good UX design
avoids heavy images and substantial datatransfers.
Location
If the users of your website are only from a particular region,
then hosting the website in or near that region will reduce the

number of network hops, and hence the latency. For example, if
the website is for European customers but is hosted in
Singapore, connecting to the system will require multiple to-and-
fro network hops; hosting it somewhere in Europe would improve
performance for end users. Conversely, if the website intends to
serve customers around the world, replicate it in different hosting
locations (or use content delivery networks, covered in“Factors
Affecting Frontend Performance”). If you use cloud infrastructure,
request machines that are physically closer to your intended
customers, not to the development team.
Infrastructure
Infrastructure is the system’s skeleton. The power of your
infrastructure—its CPU, memory, and so on—directly affects the
system’s ability to take the load. Designing infrastructure to
deliver a high-performing system is an art in itself. Infrastructure
engineers use performance test results when planning for the
application’s infrastructure needs.
Third-party integrations
When an application has integrations with third-party
components, such as vendors’ product information management
systems and warehouse management systems, it depends on
those components’ performance: their latency adds to the
application’s latency.
Consider all of these factors in order to simulate real-world
performance test cases. For instance, your performance testing
environment should be very similar to the production environment in
terms of network, infrastructure, and geolocation, or it may not
provide an accurate measure of performance!

KeyPerformanceIndicators
Continuously capturing a set of quantitative key performance
indicators throughout the development cycle will help the team to
course-correct earlier and with less effort. As a general rule, the KPIs
you should monitor are:
Response time
Response timerefers to how long the application takes to answer
a query, including for the API to respond and for the frontend to
load the page fully. As we saw earlier, the expected response
time for web applications is recommended to be two seconds.
Concurrency and throughput
Establishing that the application can support a given volume of
users within the acceptable limits at a given point in time is
referred to as measuringconcurrency. For example, you might
want to validate that the application can respond within two
seconds to 500 concurrent users.
Although concurrent users is a common term, from the system’s
perspective, it receives requests from end users and other
components, and parallel threads queue them and select them
for processing, one after the other. Hence, a better indicator is
throughput: the number of requests the system can support
during a given time.
Imagine four lanes of cars crossing a very short bridge over a
river. Assuming traffic is flowing smoothly, each car may be able
to cross the bridge in a few hundred milliseconds. So, in any
given second, 30 to 40 cars may be crossing the bridge. This
value is the bridge’s throughput.
Concurrency and throughput are both helpful in planning server
capacity and other decisions.

Availability
Availabilitymeasures of the system’s ability to respond to users
within the same acceptable limits over a given continuous period.
Typically, websites are expected to be available 24/7, except for
planned maintenance. An application might perform well for the
first half hour, but its responses could degrade over time due to
memory leakage, parallel batch jobs taking up infrastructure
capacity, or many other unpredictable reasons.
Now that we’ve discussed the KPIs, let’s take a look at how to
measure them.
TypesofPerformanceTests
The following list describes three common types of performance
tests:
Load and volume tests
These tests deal with concurrency and throughput. A
performance test to simulate the expected volume of users and
validate whether the application meets the target response time
is called avolume testorload test. You may have to repeat such
tests multiple times to observe consistency and measure the
average to benchmark the application.
Stress tests
Applications’ performance often starts degrading when an
increase in users stresses the system. For example, a site may
perform within acceptable limits for X users, but beyond X users
it starts to respond with delays; at X+n users, it responds with
errors. You need to know exactly whatXandNare. You’ll use
them in planning how to scale infrastructure and during events
such as sales.Stress testsslowly increase the load on the

application beyond the volume test’s limits to determine precisely
where it starts to respond with errors.
Soak tests
Performance tests designed to keep the application under a
constant volume of load for an extended period and observe the
behavior are calledsoak tests. They measure availability.
Be realistic in designing these tests; avoid overloading the
application with extreme situations that may never occur. For
instance, not all users will log in at the exact same instant; every
few milliseconds would be more realistic. The delay between the
start of the test and all the virtual users being connected is called
theramp-up time. Your test cases should include this; for example,
you might plan to ramp up 100 users in one minute.
Users aren’t robots: it takes them more than a few milliseconds to
log in, search for a product, and complete a purchase. Yet
performance test cases can be designed as if they are robots
unintentionally. The time real users take to think between actions
and complete a transaction is calledthink time. Include appropriate
think time in your test cases: spread the user actions apart by a few
seconds or minutes.
A related concept,pacing,defines the time between transactions
(not user actions). If you’re expecting 1,000 transactions per hour
during peak-hour sales, spread the transactions over the hour by
configuring the pacing time. These three attributes must be tuned
wisely to get a realistic performance measure.
TypesofLoadPatterns
Commonly tested load patterns use these attributes as follows:
Steady ramp-up pattern

In thesteady ramp-up pattern(Figure 8-1), users are steadily
ramped up within a given period, and then the load is maintained
constantly for a sustained period. This is a very common pattern
in real-world scenarios—for example, Black Friday sales—where
the users gradually but steadily come to the application and stay
there for a while before dropping out steadily.
Figure8-1.Steadyramp-upofusers
Step ramp-up pattern
With thestep ramp-up pattern(Figure 8-2), users are ramped up
in batchesperiodically—for example, 100 users every two
minutes. Observing and measuring the application’s performance
for each step count of users helps tobenchmarkthe application
for different loads: that is, to measure the average response time
from repeated runs. This pattern is useful in performance tuning
and infrastructure capacity planning.

Figure8-2.Stepramp-upofusers
Peak–rest pattern
Thepeak–rest pattern(Figure 8-3) is when the system is ramped
up to reach peak load and then back down to rest, in repeated
cycles. This scenario is common on social networking sites,
where peaks come and go in cycles over the course ofa day.
Figure8-3.Peak–restloadpattern
Performance testing tools lend a hand in generating these patterns,
as you’ll see later in the chapter.
PerformanceTestingSteps
Next, I’ll walk you through a performance testing exercise to help
you plan the time and capacity you’ll need for your own performance
testing.

Step 1: Define the target KPIs
The first step is defining the target KPIs based on the needs of the
business. I recommend considering your targets qualitatively, then
1
translating them into numbers. For instance, qualitative thinking
about performance could lead to goals such as thefollowing:
The application should be able to scale to one more new
country.
The application should perform better than competitor X.
The new version of the application should perform better
than the previousversion.
If the goal is to do better than the last version of the application,
you need to measure the performance of the earlier version and see
if your current numbers are better. Similarly, if you know the
competitor’s performance numbers, validate that your numbers are
better than theirs.
Business folks’ performance numbers don’t always reflect actual
usage patterns. Always derive the target KPIs from data. A few tips:
If there is an existing application, analyze the production
data to arrive at KPIs and load patterns.
If you are building a new application, ask for the
competitors’ data.
If the application is completely new, with no reference data,
use data around countrywide internet usage, probable peak
duration, and the like to work out your target KPIs.
Step 2: Define the test cases
Describe the test cases using the load patterns and the performance
test type semantics. Your test cases must cover availability,
throughput, and response time for all critical endpoints. The

performance test cases will reveal the test data setup you’ll need.
You may only need a handful of performance test cases, unlike with
functional test cases.
Step 3: Prepare the performance testing environment
Your performance testing environment should be as close to the
production environment as possible so that you can get realistic
results and identify any performance bottlenecks in the environment
configurations.
Here is a sample checklist you can adapt to your circumstances:
☐ The respective tiers/components should be deployed in a
similar fashion.
☐ The machine configurations (number of CPUs, memory
capacity, OS version) should be similar.
☐ The machines should be hosted in the same geolocation in
the cloud.
☐ Network bandwidth between machines should be similar.
☐ Application configurations like rate limiting should be
precisely the same.
☐ If batch jobs will run in the background, they should be in
place. If there are emails to be sent, those systems should
be in place too.
☐ Load balancers, if any, should be in place.
☐ Third-party software, or at least mocks, should be available.
Setting up a production-like environment for testing can be
expensive, although cloud provisions are cheaper. You may need to
have a cost versus value conversation with the business
stakeholders. If you don’t win that battle, prepare to make
meaningful trade-offs. Make it clear to those stakeholders that those

concessions could degrade the accuracy of the performance
numbers.
A best practice is to request that the performance testing
environment be set up alongside the QA environment, right at the
beginning of the project, so it’s available when you need it.
You’ll also need a separate machine to run the performance tests
(called thetest runner). Plan to host individual test runners in
different geolocations (this is possible with cloud providers) to
observe the network latencies from multiple countries, if your
application is intended to serve a global audience.
Step 4: Prepare the test data
Like the performance testing environment, your test data should
look as much like the production data as possible. Your performance
numbers will greatly depend on the test data’s quality, so this is
critical. It would be ideal to use actual (anonymized) production
data, which would reflect the actual database’s size and complexity,
but this may not be possible due to security concerns. In such cases,
prepare test data that closely mimics the production data.
A few pointers for creating production-like data:
Estimate the size of the production database and set up
scripts to populate the test data. You might need to clean
and repopulate the test data for every test run, so scripts
will be crucial.
Create test data similar to that in production: instead of
“Shirt1,” “Shirt2,” etc., use realistic values such as “Van
Heusen Olive Green V-Neck T-shirt.”
Include a fair share of erroneous values, like addresses with
spelling mistakes or blank spaces, just as actual user inputs
would have.

Have a similar distribution of data across factors like age and
country.
Depending on your test cases, you may have to create a lot
of unique data, like credit card numbers or login credentials,
to run volume tests with concurrent users.
Preparing test data can be a tedious job, so plan ahead. Low-quality
test data will give you inaccurate performance numbers.
Step 5: Integrate application performance monitoring tools
Next, you’ll integrate application performance monitoring (APM)
tools, like New Relic, Dynatrace, or Datadog, to see how the system
behaves during the tests. For instance, if requests fail due to
insufficient memory in the machine, the APM tools will tell you.
Many performance monitoring platforms have integrated AI, which
can help with analyzing large volumes of telemetry data from
multiple components of the application stack and doing a quick root-
cause analysis.New Relic AI’s chat interface, for instance, lets you
ask about failures and get a root-cause analysis, up to the line of
code that caused it. It also tracks metrics across code changes from
previous deployments, which gives you a quick way to restore the
application back to a working state if such an issue happens in
production.
Step 6: Script and run the performance tests
The last step is to script the performance test cases using your tools
and run them against the performance testing environment. There
are many tools that integrate with your CI pipeline that you can use
for this. Open source options include JMeter, Gatling, k6, and
ApacheBench (ab); commercial cloud-hosted tools include
BlazeMeter, NeoLoad, and others. Some provide simple configuration
UIs and don’t require coding. Some produce reports with graphs,
and commercial tools even offer a dashboard view. An exercise to

create test scripts using JMeter and integrate them with CI can be
found in“JMeter”.
Performance test runs may take anywhere from a few minutes to a
few hours. To get an idea of how long yours will take, you may want
to do a dry run with a smaller user count before starting the full-
fledged test run.
The key is to plan adequate capacity for each step, as well as time
and capacity to collect test-run reports, debug and fix performance
issues, and tune server capacity.
Exercises
Now, we’ll conduct performance testing on a simple online library
management application.
OnlineLibraryManagementApp
This app has two types of users: admins, who can add and delete
books, and customers, who can view all the books and search for a
book by its ID. The respective REST APIs are/addBooks,
/deleteBooks,/books, and/viewBookByID.
Step 1: Define the target key performance indicators
The in-house marketing team has provided the following data:
They are campaigning aggressively for launches in two
European cities and expect 100,000 unique users to join in
the first year.
They have a study that says users spend 10 minutes on
average searching for books, viewing similar books, and so
on in a single session.

The same study says that an average user borrows a book
twice a month. Hence, they expect users to access the site
twice a month.
In Europe, users are most active on the internet between 10
a.m. and 10 p.m. (12 hours) daily.
With that data, you can arrive at the KPIs as follows:
Total users accessing the site monthly = 100,000 users * 2
accesses per month = 200,000 monthly users.
Average users per day = 200,000 monthly users ÷ 30 days
per month = 6,667 daily users. (Note that there could be
more users on weekends than weekdays, but we are
calculating average daily users.)
Average users per hour = 6,667 average daily users ÷ 12
hours per day = 555 hourly users. (Similarly, there could be
more hourly users at some times of the day than others,
such as at midday or in the evening.)
To allow for peaks, be generous and round up to 1,000
hourly users.
Each user uses the website for an average session time of
10 minutes, which is 0.166667 hours.
Number of concurrent users = 1,000 peak hourly users *
0.166 = 166 concurrent users.
If each user makes at least 5 requests (searching for books
and viewing the book list) in a 10-minute session, the
system will have to support 5 * 1,000 hourly users = 5,000
requests per hour.
Therefore, the target KPIs are as follows:

The system should respond within three seconds for 166
concurrent users.
System throughput has to support 5,000 requests per hour.
You should get consensus with the client management team before
you proceed. You can also probe the business to think beyond the
first year and check again for target numbers.
This is only a sample calculation to give you an idea of how to work
out target KPIs. As mentioned earlier, the first place to dig is the
existing application’s production data or a competitor’s data, which
will give a more accurate picture of KPIs and loadpatterns.
Step 2: Define the test cases
Now that you know the target KPIs, you can define appropriate
performance test cases based on the library application’s features,
such as the following:
Benchmark the response times for all four endpoints:
/addBooks,/deleteBooks,/viewBookById, and/books.
Volume test the customer-facing endpoints with 166 to 200
concurrent users—the/viewBookByIdand/books
endpoints should respond in less than three seconds with
166 concurrent users. (That three seconds includes frontend
performance, so you will have to assert with a lower
boundary value specific to your application for the
endpoints.) Since only the admins access the other two
endpoints, volume testing may not be necessary for them.
Stress test the customer-facing endpoints with ramp-up
steps of 100 users and find the breaking points.
Validate throughput of 5,000 requests per hour. The user
flow for this test case could be to view the book list, select a
book and skim its description, then go back to the book list

page, select another book and read its description, and
return again to the book list page—in total, making five
requests per user flow. Include a think time of, say, 30
seconds between each of these actions, and assume 45
users can continue doing this user flow for an hour. Ramp up
the users slowly over the first 10 minutes.
Soak test for a continuous 12 hours to validate that the
system is available to users continuously. This could mean
reusing the throughput test design to run for 12 hours, too,
if it is successful.
Steps 3–5: Prepare the data, environment, and tools
For the sake of this exercise, I have developed a sample library
application and hosted it on Heroku. To complete the exercise
yourself, you can create a stub (please refer to“WireMock”for
details on this) on your local machine for the/booksendpoint, as
shown inExample 8-1, and configure it to return 50 books. Test it
once after you set it up.
Conducting high-volume load tests on public APIs can be considered
a DDoS attack, so you need to create stubs for the exercise.
Alternatively, performance testing tools such asBlazeMeterand
Gatlingprovide performance testing practice sites; hit the test sites
only with the minimum prescribed load.
Example 8-1./booksendpoint
GET: /books
Response:
Status Code: 200
Body:
[
{ "id": 1,
"name": "Man's Search for Meaning",
"author": "Victor Frankl",
"Language": "English",

"isbn": "ABCD1234"
},
{ "id": 2,
"name": "Thinking, Fast and Slow",
"author": "Daniel Kahneman",
"Language": "English",
"isbn": "UFGH1234"
}]
Step 6: Script the test cases
Step 6 is to script the test cases using tools. We’ll create tests
directly from JMeter’s GUI. Plug-ins are available to add AI
assistance to the JMeter GUI to create test cases, covered later in
this exercise.
JMeter
JMeter is a well-evolved, popular performance testing tool. It is
entirely open source, with provisions to integrate with CI and
generate beautiful graph reports. It integrates with BlazeMeter, a
cloud-hosted performance analytics tool, if you want to be free from
infrastructure management tasks. JMeter is based on Java, and
there is a community of active developers creating different valuable
plug-ins. The figures in“Types of Load Patterns”were created using
one of these plug-ins. JMeter provides gooddocumentationand
tutorials on many use cases for beginners. Let’s install the tool and
write some test scripts for our libraryapplication.
Setup
Follow these steps to set up JMeter:
1.Download the ZIP file from theofficial siteand install it.
Make sure your local Java version is compatible with the
required version for JMeter. Also, ensure the JAVA_HOME
variable is set in your environment’sbash_profile.

2.To open the JMeter GUI, run the shell script./jmeter.sh
inside the folder/apache-JMeter-version/binfrom your
terminal.
3.Download the Plugins Manager from theofficial siteand
place the JAR under/apache-JMeter-version/lib/ext.
4.Restart JMeter. You should then see Plugins Manager on the
Options menu.
Workflow
Set up a basic JMeter test skeleton and add a simple test to
benchmark the response time of the/booksendpoint:
1.Create a thread group from the JMeter GUI by right-clicking
Test Plan in the lefthand pane and selecting Add → Threads
(Users) → Thread Group. Name the thread group
ViewBooks. Configure the parameters as shown inFigure 8-4
(Number	of	Threads	=	1,	Ramp-up	period	=	0,	Loop
Count	=	10) to record the endpoint’s response time 10
different times, then average the results.
Figure8-4.Threadgroupconfigurationtorunonerequest10times

2.Add the HTTP Request sampler to configure the API’s
parameters. Right-click the thread group you just added in
the left pane and select Add → Sampler → HTTP Request.
Enter the web server name, HTTP request type, and path
(seeFigure 8-5). Name the samplerviewBooksRequest.
Figure8-5.viewBooksRequestHTTPrequestconfiguration
3.Add listeners, which will record every request and response
during the test run. Right-click theviewBooksRequest
sampler and select Add → Listeners → View Results Tree.
Then repeat the process, but this time select the Aggregate
Report listener. The listeners will be added to the lefthand
panel, as seen inFigure 8-5.
4.Save the basic test skeleton and click the Run button. The
results will be available within each of the two listeners.
Click View Results Tree in the lefthand panel to view the output from
this listener. You will see the list of individual requests JMeter made,
with a success or failure indication for each. JMeter takes the
response status code 200 to mean success; it considers anything
else a failed request.
There can be situations where the service will return a 200 status
code to indicate that the operation has been executed, but did not
produce the intended results. For example, the/addBooksendpoint
could return a 200 status code for duplicate books with a message
indicating it is a duplicate. In such cases, you need to add explicit

assertions on the results (assertions, like listeners, are components
of JMeter too). The View Results Tree view will also show request
and response data when you click each request for further
debugging, as shown inFigure 8-6.
Figure8-6.ViewResultsTreelisteneroutput
Similarly, when you click Aggregate Report, you will see a table with
metrics like average, median, throughput, etc. For the/books
endpoint (seeFigure 8-7), the best-case response time is 379 ms
when the application is not under load.
Figure8-7.AggregateReportviewfortheresponsetimeofthe/booksendpoint
Using thread groups
The next step is to load test the/booksendpoint with 166
concurrent users and check the response time. JMeter offers many

ways to configure load patterns. Here, we’ll look at three simple
options.
The thread group is a basic JMeter element under which you can
place different listeners and controllers. It can also be used to
configure load parameters, such as the number of parallel threads,
the ramp-up period, and test repetitions. Earlier, you configured the
ViewBooksthread group to run the/booksrequest in a loop 10
times in order to benchmark its response time. Now, to conduct a
volume test, you canchange theparameters toNumber of
Threads	=	166,	Ramp-up	period	=	0,	Loop	Count	=	5.
JMeter will spin up 166 concurrent threads with no ramp-up time
and loop five times to get the average response time.
There’s also a handy JMeter plug-in with additional types of thread
groups that are useful for configuring different load patterns, such as
the step ramp-up pattern. We’ll start with the Concurrency Thread
Group, which gives you a concurrency controller for volume testing:
1.Select Options → Plugins Manager. Search for “Custom
Thread Groups” on the Available Plugins tab and install it.
2.Restart JMeter so the new thread group types are available.
3.Right-click Test Plan in the lefthand panel and select Add →
Threads (Users) → bzm → Concurrency Thread Group.
4.Configure the load parameters as shown inFigure 8-8
(Target	Concurrency	=	166,	Ramp	Up	Time	=	0.5,
Hold	Target	Rate	Time	=	2). This tells JMeter to ramp
up 166 users in 30 seconds and hold each of them for two
minutes in the system.
5.Add the HTTP Request sampler like before under this thread
group, run the test, and view the results in the listeners.

Figure8-8.ConcurrencyThreadGrouptovolumetestthe/books
endpoint
The Custom Thread Groups plug-in also provides an Ultimate Thread
Group type with additional features. For example, you can configure
the initial delay before the test run, the shutdown time after test
run, and more. Let’s try using an Ultimate Thread Group for volume
testing:
1.Right-click Test Plan and select Add → Threads (Users) →
jp@gc Ultimate Thread Group.
2.Configure the load parameters as seen inFigure 8-9(Start
Threads	Count	=	166,	Initial	Delay	=	0,	Startup
Time	=	10,	Hold	Load	For	=	60,	Shutdown	Time	=
10). This instructs JMeter to spin up 166 concurrent requests
within 10 seconds and hold the load for one minute, after
which it will ramp down the users within 10 seconds. You
can add more rows as appropriate to generate the peak–rest
pattern here, too.
3.Add the HTTP Request sampler like before, run the test, and
view results in the listener.

Figure8-9.UltimateThreadGrouptovolumetestthe/booksendpoint
Figure 8-10shows the results using the simple thread group option
(the first option), with 166 concurrent users and zero ramp-up time,
averaged over five loop counts:
Average = 801 ms, 90% Line = 1499 ms
In other words, 90% of 166 concurrent users got a response in
about 1.5 seconds, and on average, all 166 concurrent users got
their response within 0.8 seconds. The average is lower because, as
you can see from the table, it took some users just 216 ms to get a
response.
Figure8-10.Volumetestresultsforthe/booksendpoint

Designing other performance test cases
To do stress testing, you can use a Concurrency Thread Group to
introduce load in steps ofxusers up to a maximum limit, running
each step for a given time. The objective here is to find the load at
which the response time slows down and ultimately results in errors.
To do soak testing, you can simulate constant load for an extended
time using an Ultimate Thread Group. To validate hourly throughput,
use theParallel Controller plug-into run multiple HTTP requests in
parallel while pausing between requests usingTimercomponents,
such as for setting the think time. There is also a Constant
Throughput timer you can use to fix the throughput at a constant
value; it automatically slows down JMeter’s requests to the server if
it crosses the set throughput value.
There are many more components in JMeter to help model
application-specific use cases. The If, Loop, and Random controllers
let you include conditions in tests. If the application requires a login,
you may need to feed in user credentials to perform volume testing;
JMeter lets you do so from an external source like a CSV file. This is
calleddata-driven performance testing. You can also use this feature
of JMeter to set up test data at the beginning of the test. (We’ll look
at an example soon.)
Data-driven performance testing
Let’s say the/addBooksendpoint in the library application takes a
request body with the book’s name, author, language, and ISBN. To
create load on this endpoint, you need to add unique books with
every request. You can also run this test to create test data before
starting the performance tests:
1.Create a CSV file withname,author,language, andisbn
as keys. JMeter refers to these keys while defining variable
inputs. Add rows for 50 books. (You can do this in Google
Sheets and download it as a CSV file.)

2.In JMeter, add a thread group with an HTTP Request
sampler for the/addBooksendpoint and set the Loop Count
to 50.
3.To wire the CSV file to the HTTP Request sampler, right-click
Thread Group and select Add -> Config Element -> CSV
Data Set Config. In the CSV Data Set Config window (see
Figure 8-11), specify the CSV file path and the variables to
read from the file.
Figure8-11.ConfiguringCSVdatasetinputfordata-driventesting
4.In the HTTP request body of the/addBooksendpoint, use
the variables in the format${variable_name}, as shown
inFigure 8-12. You can use the same notation across your
JMeter tests.

Figure8-12.ReferencingvariablesfromtheCSVfile
Integrating into continuous integration
The final step is to integrate the JMeter tests into your CI pipeline as
a separate job. It’s important to run performance tests in complete
isolation to get the right metrics. To integrate the tests with CI, save
them, locate the saved.jmxfiles, and run the following command:
$ jmeter -n -t <library.jmx> -l <log file> -e -o <Path to
output folder>
You can also configure JMeter to provide exhaustivedashboard
reports.
You can add theFeather Wandplug-in to get AI assistance in
configuring tests and debugging failures. The plug-in lets you
interact with Anthropic or OpenAI models using prompts within the
JMeter GUI.Figure 8-13shows the Feather Wand chat window on
the right side of the JMeter application, similar to an AI chat window
in an IDE.

Figure8-13.FeatherWand—JMeterAIplug-inintegration
In the workflow shown inFigure 8-13, I prompted in the chat
window to create a thread group, an HTTP request, and a listener,
and add them to the Test Plan (shown on the left). After it got
added, I manually configured the values and ran the test. When the
test failed, I could chat with the OpenAI model to ask why and get
suggestions.
This AI plug-in is relatively new and is supporting other features, like
generating test case scripts and providing insights into JMeter
features.
Gatling
Gatlingis a popular alternative to JMeter for those who prefer to
code test cases instead of using a GUI. It offers both open source
and paid enterprise versions and supports several languages,
including Java, Kotlin, and Scala. Its APIs design the tests to be
close to real-world scenarios and generate intuitive HTML reports
that help with debugging performance test failures.
Let’s write the same test case in Java that we configured in the
JMeter exercise here.

Setup
We can use theJava Gatling libraryto write the test. To begin with,
add the dependencies inpom.xml(Example 8-2).
Example 8-2.Gatling Java example—pom.xml
<properties>
<maven.compiler.release>17</maven.compiler.release>
<maven.compiler.source>1.8</maven.compiler.source>
<maven.compiler.target>1.8</maven.compiler.target>
<project.build.sourceEncoding>UTF-
8</project.build.sourceEncoding>
</properties>
<dependencies>
<dependency>
<groupId>io.gatling.highcharts</groupId>
<artifactId>gatling-charts-highcharts</artifactId>
<version>{gatling.latest.version}</version>
<scope>test</scope>
</dependency>
</dependencies>
<build>
<plugins>
<plugin>
<groupId>io.gatling</groupId>
<artifactId>gatling-maven-plugin</artifactId>
<version>{gatling.latest.version}</version>
</plugin>
</plugins>
</build>
Workflow
Create a new test class in your project directory:
BooksSimulation.java. To write the test, the io.gatling Java
library provides two kinds of simple APIs:HttpProtocolBuilder
APIs to define the structure of the HTTP call, andScenarioBuilder
APIs to construct the custom load pattern. See them in action in
Example 8-3.

Example 8-3.BooksSimulation.java
package com.example.gatling;
import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;
import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;
public class BooksSimulation extends Simulation {
//Define the HTTP call
HttpProtocolBuilder httpProtocol =
http.baseUrl("URL")
.acceptHeader("application/json")
.userAgentHeader(
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
AppleWebKit/537.36
(KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36");
//Build the scenario to load the /books endpoint
ScenarioBuilder scenario =
scenario("Scenario").exec(http("Session").get("/books"));
//Configure load pattern
{
setUp(scenario.injectOpen(constantUsersPerSec(166).during(5)))
.protocols(httpProtocol);
}
}
To run the test, use the following command:
$ mvn gatling:test
Gatling will add 166 users to load the/booksendpoint each second
for five seconds, since we’ve used theconstantUsersPerSec()
API. It will generate an HTML report after the test run that
showcases performance metrics such as response times, percentiles
over time, number of requests per second, and max and min
response times. This is quite intuitive and convenient for debugging
performance failures.

Gatling APIs to customize load patterns include
rampUsersPerSec(),which gradually ramps up the users over a
specified period;stressPeakUsers(),which introduces a step
pattern;atOnceUsers(), which adds all the users at once; and
nothingFor(), which adds a pause for a specified duration. Check
out theofficial documentationfor more custom patterns. You can
design each load pattern as a different scenario within the same
simulation test run and assert on different performance metrics in
the CI pipelines.
AI-ASSISTED TEST AUTOMATION
When I tried setting up the Gatling framework using Cursor and
GitHub Copilot, it stumbled to add the right Gatling dependencies
and kept suggesting that I needed an enterprise license to
download its private repository (although I could manually find
out the right open source dependencies from Maven Central).
Even after installation, neither Cursor nor GitHub Copilot
suggested the right test syntaxes. Even after I set up the first
test myself, they couldn’t correctly extend it to a new load
pattern. Maybe lack of enough training data is a plausible reason,
as open source performance testing codebases are comparatively
sparse—although the models may improve over time.
AdditionalTestingTools
Other performance testing tools can help you script your
performance test cases and analyze the results. Essentially, these
tools provide varied handles to configure the four key parameters to
design load patterns: ramp-up time, think time, number of
concurrent users, and pacing. For instance,Locust, an open source
load-testing Python library, can conduct distributed performance
testing through Python test scripts. Tools like ApacheBench use

simple command-line arguments for quick feedback during
development. Managed services like Azure Load Testing offer AI
insights on test results. Let’s briefly get to know the distinct
capabilities of Azure Load Testing and ApacheBench tools here.
AzureLoadTesting
Azure Load Testingis a managed service from Microsoft that
provides an end-to-end AI powered performance engineering
workflow. It lets you do the following:
Generate Locust or JMeter test scripts with GitHub Copilot
assistance using theAzure Load Testing extension
Add server-side monitoring
Run high-scale load tests on Azure resources
Get AI-powered diagnostics on performance issues based on
logs and resource utilization metrics
Implement performance optimizations with AI assistance
ApacheBench
If you just want to quickly get some numbers on your application’s
performance,abis a great choice. It’s a simple open source
command-line tool. If you’re on a Mac, it comes as part of the OS,
so you don’t even have to worry about installation. To get
performance numbers for load testing the/booksendpoint with 200
concurrent users, you can run the following command from your
terminal:
$ ab -n 200 -c 200 https://library.herokuapp.com/books
The results will look something like this:

Concurrency Level: 200
Time taken for tests: 5.218 seconds
Complete requests: 200
Failed requests: 0
Total transferred: 1389400 bytes
HTML transferred: 1340800 bytes
Requests per second: 38.33 [#/sec] (mean)
Time per request: 5217.609 [ms] (mean)
Time per request: 26.088 [ms] (mean, across all
concurrent requests)
Transfer rate: 260.05 [Kbytes/sec] received
Connection Times (ms)
| min | mean[+/-sd] median | max |
| --- | --- | --- |
| Connect: | 869 2074 | 97.6 2064 2289 |
| Processing: | 249 1324 299.4 | 1303 1783 |
| Waiting: | 249 1324 299.5 | 1303 1781 |
| Total: | 1192 3398 354.3 Percentage of the requests served within a certain time (ms) 50% 3370 66% 3483 75% 3711 80% 3776 90% 3863 95% 3889 98% 4016 99% 4022 100% 4027 (longest request) You now have an idea of how different tools can assist in scripting performance test cases and measuring the server KPIs. Remember, though, that if you find performance issues, you will have to debug, tune, and test again! We have dealt with backend performance testing at some depth here. The remainder of the chapter looks at frontend performance testing. | 3370 4027 |

FrontendPerformanceTestingBuildingBlocks
Though performance testing tools mimic application behavior during
peak times, there is always a gap between the measured
performance numbers and the actual user-experienced performance,
because the tools are not actual browsers and don’t do all the tasks
a typical browser does. To understand this gap, let’s discuss browser
behavior.
As you saw inChapter 6, there are three parts to the frontend code
that gets rendered in the browser:
HTML code, which is the bare-bones structure of the website
CSS code, which styles the page
Scripts to create logic on the page
A typical browser first downloads all the HTML code from the server,
then downloads the stylesheet, images, and other components and
begins executing the scripts in the HTML document. There is
parallelization, to an extent, such as when it is downloading images
from different hosts. But the browser stops parallel processing
completely when executing a script, since the script could completely
change the way the page renders. Since there could be scripts at the
end of the HTML, the page becomes visible to users only when the
entire HTML document has been fullyexecuted.
Performance testing tools don’t do most of that. They hit the page
directly and get the HTML code, but they don’t render the page
whileexecuting performance tests. So even if you have measured
the services’ response time to be within milliseconds, the end user
will only see the page after a further delay because of these
additional rendering tasks. This frontend rendering is estimated to
account for80% to 90%of the entire page load time—shocking,
isn’t it? (See Steve Souders’ bookHigh Performance Web Sites,
O’Reilly, 2007.)

For example, if you navigate to theCNN home page, the browser
will carry out 90 tasks before the page appears to you.Figure 8-14
shows the first 33 of these tasks. If you thought just optimizing the
web services’ response time would significantly improve site
performance, this might change your mind!
Figure8-14.CNNfrontendbrowsertasksduringpageload
The KPIs I described and measured as part of the backend exercises
are still critical for planning the system’s capacity and
troubleshooting performance issues. They help you to answer
questions like “Will the application support a peak load of 5,000
transactions during the Black Friday sales?” But if the KPIs indicate
that the peak response time for your application is around 1.5
seconds, that may not reflect an end user’s actual experience. To
understand that, you must also evaluatefrontendperformance
metrics. That is what we will discuss in this section.
I’ll start with factors that specifically affect frontend performance
and the metrics that quantify how. Later, you’ll measure them as
part of the exercises.

FactorsAffectingFrontendPerformance
Factors that contribute to frontend performance include the
following:
Code complexity
Failing to implement best practices such as minifying the
JavaScript, reducing the number of HTTP requests made per
page, and implementing proper caching techniques will lead to
lower performance. For instance, it takes at least a few
milliseconds for the server to respond to each HTTP request; if
the page has to make many such requests, the delays will
accumulate.
Content delivery networks (CDNs)
A CDN is a collection of servers hosted in multiple locations that
aims to deliver web content, such as images, to users more
efficiently. As discussed earlier, the geolocation of the server and
user affect network latency, so content is stored in CDNs and
served from the server that is physically closest to the user.
However, the performance of the CDN itself will affect the page
load time.
DNS lookups
It typically takes a browser 20 to 120 ms for a browser to look up
the IP address for a given hostname, known as Domain Name
System (DNS) resolution. Once this has been done the first time,
the browser and OS cache the IP address, reducing page load
time on subsequent visits. Internet service providers (ISPs) also
cache IP addresses for a while, contributing to performance
improvements. However, first-time users are affected by the DNS
lookup time.
Network bandwidth

The user’s network bandwidth has a huge impact on the overall
page load time. As you saw inChapter 6, more people access the
internet through mobile than through desktops, and mobile
network bandwidth can be very low at times. Some sites serve a
“lite” version of their website when they identify low bandwidth
(like 3G).
Browser caching
Browsers cache a lot of content besides the IP address (images,
cookies) after a user first visits a site. Consequently, the page
load time often significantly varies between the first time it’s
rendered and subsequent viewings. Including browser caching in
code can improve page load times.
Data transfers
Transferring large volumes of data between the user and the
application will affect performance because of network latency.
You might be wondering where to even start—and you would not be
the first. That’s where the RAIL model comes in.
RAILModel
TheRAIL modelis a way to structure the thought process around
frontend performance. It is designed with the guiding principle of
keeping the end user’s experience at the core of frontend
performance, and it quantifies goals for frontend performance. It can
be helpful to view frontend performance through this lens and to
integrate the goals as part of your testing efforts.
The RAIL model (response, animation, idle, load) breaks down an
end user’s experience on a website into four key areas:
Response

Have you ever clicked a button or checked a box, only to get no
response to confirm you did so? As discussed in the beginning of
the chapter, if a site takes more than 100 ms to respond, users
sense the lag. This delay is known asinput latency. The
“response” aspect of RAIL measures input latency.
Animation
Users will perceive a lag in animation effects such as loading
indicators, scrolling, and drag-and-drop if each frame is not
completed within 16 ms (the minimum to achieve a frame rate of
60 frames per second, or FPS).
Idle
A general frontend design pattern is to group noncritical tasks
and wait to perform them when the browser is idle. These tasks
should ideally be bundled into blocks that take about 50 ms to
complete, so that when the user interacts, the site can respond
within the 100 ms window.
Load
A high-performing website should begin rendering within one
second; only then do users feel they are in complete control of
the navigation (as per the Google study).
The RAIL model guides us about what to test for to measure
frontend performance. It also provides concrete language, instead of
teams expressing vague feelings like “the page seems slow!”
FrontendPerformanceMetrics
In practice, developers break the high-level RAIL goals down into
smaller metrics to debug performance issues. Industry-standard
frontend performance metrics include the following:

First contentful paint (FCP)
How long the browser takes to render the first element from the
DOM(such as images). This helps us understand how long the
user has to wait to see some action on the website after opening
it.
Time to interactive
How long the page takes to become interactive. If page elements
become visible quickly but fail to respond to users’ actions, they’ll
be frustrated.
Largest contentful paint (LCP)
How long it takes the most prominent element, like a big blob of
text or image, to become visible.
Cumulative layout shift
Have you ever started reading an article only for the page to shift
down as additional content loaded, making you lose track of what
you were reading? That’s calledlayout shift. This measures the
page’s visual stability and quantifies how often users face
unexpected layout changes—the lower the number, the better
the performance.
First input delay
Between the first contentful paint and time to interactive, when
the user interacts with the page (such as clicking on a link), the
delay will be longer than usual because the page is still loading.
This metric gives that time delay for the first interaction.
Max potential first input delay
This represents the worst-case scenario of the first input delay. It
measures how long it takes the most prolonged task between the

first contentful paint and the time to interactive to complete.
Google classifies the largest contentful paint, first input delay, and
cumulative layout shift as itsCore Web Vitals, which help business
folks understand performance in simple terms. Most frontend
performance testing tools capture these three metrics specifically.
You can use such tools to continuously measure them as part of
your CI pipeline, shifting frontend performance testing to the left.
Exercises
Frontend performance is about the end user’s experience, so your
test cases should encompass your target users’ experiences across
different demographics. Forexample:
Consider users with different types of devices (desktop,
mobile, tablet).
Gather information on significant device manufacturers in
the region your application wishes to serve; each device will
have its own CPU, battery, and memory capacity.
Consider users’ network bandwidths—WiFi, 3G, 4G, and so
on—and the average mobile and broadband speeds in the
countries the app will serve.
Consider your target users’ geographic distribution and test
frontend performance in different locations.
Plenty of research on this kind of usage data is available on the
internet. If you already have a live application, Google Analytics will
give you real-time usageinformation.
Let’s define our sample test case for the exercises in this section: “A
user from Milan, who has a Samsung Galaxy S5, is accessing the

Amazon home page using a 4G network connection.” Tools like
Lighthouse and Chrome DevTools can help.
Lighthouse
Lighthouseis an open source tool from Google. It comes as part of
Google Chrome and is also available as a Firefox extension. It audits
your website along multiple dimensions, including security,
accessibility, and frontend performance, and generates a report with
an overall score and detailed frontend performance metrics. You can
configure the user location, throttle the network to low- and mid-
performing network bandwidths, throttle the CPU, and resize to
different mobile-browser resolutions in Chrome to simulate different
test cases.
Lighthouse is also available as a CLI tool, making it easier to
integrate with CI and get continuous feedback. Zalando, a leading
European retail chain, reduced its frontend performance feedback
time from one day to15 minuteswith Lighthouse CI. Let’s use it for
the sample test case.
Now let’s get into the workflow. The manual Lighthouse workflow to
get performance metrics for this test case is straightforward:
1.OpenAmazon.comin Chrome.
2.Open Chrome DevTools. You can use the shortcut Cmd-
Option-J on macOS or Shift-Ctrl-J on Windows/Linux, or
choose the Inspect option from Chrome’s right-click menu.
3.Choose the network throttling preferences on the Network
tab. Select “Slow 3G.”
4.Choose the CPU throttling preferences on the Performance
tab. The default options are 4x and 6x slowdown, for middle-
and low-tier mobile devices. Choose 4x slowdown.

5.Choose a window size. The Galaxy S5 is available (Figure 8-
15).
6.On the Lighthouse tab (Figure 8-15), select the Performance
category and “Generate report.”
Figure8-15.Lighthousewindowwithnetwork,CPU,andresolution
configurations
AsFigure 8-16shows, Amazon does a pretty good job. Even in such
skewed conditions, its time to interactive is 3.8 seconds!
Figure8-16.Lighthouseperformancereport

You can use Lighthouse to test various frontend performance test
cases as early as during development itself. To integrate with CI, you
can use the Lighthouse Node.js module. To install it, run the
following command from your terminal:
$ npm install -g lighthouse
To run a performance audit, run this:
$ lighthouse https://www.example.com/ --only-
categories=performance
You can sendoptional parametersalong with this command to set
network and CPU throttling values and select device screen sizes.
The audit report will be available in the current directory. You can
write a wrapper to fail the pipeline if the performance score falls
below a certain threshold, for instance 90. You can also define
performance budgets (upper threshold values) for each of the web
vitals using theLightWalletfeature to alert you when Lighthouse’s
performance results for a metric exceed the defined threshold
values.
Another way to integrate Lighthouse audits with CI is by using the
cypress-auditor theplaywright-lighthouseNode.js modules
and integrating with the Cypress or Playwright tests suites,
respectively. You can also integrate performance audits into
Playwright tests using native browser APIs, which you’ll do in an
exercise later in this chapter.
ChromeDevToolsPerformancePanel
Another handy tool from Google is thePerformance panel, available
on the Performance tab in Chrome DevTools. It gives detailed
analysis reports on the network stack, animation frame rates, GPU
consumption, memory, script run time, and more. Like Lighthouse, it

lets you throttle the network and CPU while debugging. And since it
is embedded in the browser, it is developer-friendly. As I write this in
2026, Chrome DevTools has just introduced Gemini-based AI
assistance for analyzing and fixing performance issues.
Let’s do an exercise to get a sense of the workflow. Suppose you
want to find out how the search functionality in the Amazon home
page performs and seek AI assistance to understand the issue and
report it:
1.OpenAmazon.comin Chrome.
2.Open Chrome DevTools using the shortcut Cmd-Option-J on
macOS or Shift-Ctrl-J on Windows/Linux, or choose the
Inspect option from Chrome’s right-click menu.
3.Go to Settings in Chrome DevTools and turn on AI
assistance. It only works when you’re logged into Chrome. If
you’re an enterprise-controlled user, your data is kept
private.
4.Open the Performance tab. Choose Slow 3G for your
network throttling preference and 4x slowdown for CPU
throttling, and hit the Record button. You can also choose a
device by selecting the Dimensions icon, the icon before the
Elements menu item.
5.Enter a search string like “Women’s new apparel” and click
Search. Stop the recording after the search results load. The
performance analysis reports will be shown in the same tab
(Figure 8-17).

Figure8-17.AsamplereportfromtheChromeDevToolsPerformance
panel
On the left panel, the report will show two requests: one to fetch the
home page and one to fetch the search results. When you select a
request, the right panel will display its core vitals and a set of
network calls, with a timeline of screenshots. The search results
page had a larger LCP, which needed improvement. You can open
the “Ask AI” feature from inside the “LCP breakdown” card (below
the Core Web Vitals), and the context of the particular request will
automatically be added to your prompt. I asked, “What can I do to
reduce the LCP time for this page load?” and it responded with the
analysis shown inFigure 8-18.
The Performance panel analyzed the network calls, read the caching
techniques set for the largest content on the page, and suggested
that the root cause was queuing the image request for too long,
since the download itself was fast enough. It provided some
recommendations to optimize this.
This type of analysis, along with network traces, is much more
concrete evidence than a vague report that “the page is slow on 3G
networks.” You can also use the AI assistance feature on source files
for quick code fixes (from the Sources tab in Chrome DevTools).

Figure8-18.AsampleAIanalysisfromChromeDevTools
TIP
Whenshiftingleft,defineasmallsubsetofbrowsers,devices,and
screenresolutionstobetestedforfrontendperformanceaspartofthe
“developmentdone”qualitygate,beforetheuserstoryismovedto
“readyfortesting.”Definetheremainingsubsetaspartoftheactual
testinggate.
Playwright
To get continuous feedback on frontend performance metrics across
all the pages in the user flow, extend your existing UI-driven
functional tests to include performance metrics auditing. In this
exercise, you’ll use native browser APIs to fetch performance metrics
and run the Playwright functional tests you created inChapter 3.

You can use browsers’ native performance APIs, defined byWorld
Wide Web Consortium (W3C) standards, and they can be used to
check that Core Web Vitals are within acceptable limits.Example 8-4
shows how to use Playwright’spage.evaluate()method to
execute a JavaScript function on the browser window and get the
LCP metric for that page and see if it falls within your threshold. In
this example, the test will fail if the score crosses a threshold of
2500. To conduct a performance audit, you can call this method
from any page class as and when it loads.
TIP
Thisisagoodtimetoabstractcommoncapabilities,suchaschecksfor
CoreWebVitals,visualtestingchecks,andotherrepeatableactionsinto
aseparateclass,usuallyinBasePage.ts,andinherititacrossallthe
pageclasses.
Example 8-4.AmazonHomePage.tsclass that asserts on frontend
performance vitals
//E2ETests/pages/AmazonHomePage.ts
async getLargestContentfulPaint() {
const largestContentfulPaint = await this.page.evaluate(() =>
{
return new Promise<number | null>((resolve) => {
new PerformanceObserver((l) => {
const entries = l.getEntries();
const largestPaintEntry = entries.at(-1);
resolve(largestPaintEntry?.startTime ?? null);
}).observe({
type: 'largest-contentful-paint',
buffered: true
});
});
});
if (largestContentfulPaint !== null && largestContentfulPaint

< 2500) {
return true;
} else {
return false;
}
}
async checkPerformanceVitals() {
const lcpOk = await this.getLargestContentfulPaint();
if (!lcpOk) {
throw new Error('Performance Vitals failed');
}
}
async goto() {
await this.page.goto('/');
await this.page.locator('#twotabsearchtextbox').waitFor({
state: 'visible' });
await
expect(this.page).toHaveScreenshot('AmazonHomePage.png',
{ mask: [ this.page.locator('.card-lite') ]});
await this.page.checkPerformanceVitals();
}
You can add similar methods to fetch and assert on other key
performance metrics by using the APIs defined in theMDN
documentation.
AI-ASSISTED TEST AUTOMATION
Try prompting your way through adding the rest of the Core Web
Vitals checks. In my experiments, both Cursor and GitHub Copilot
(in agent mode) provided the necessary methods to fetch these
checks using the W3C-standard browser APIs. They also asserted
the metrics with the recommended thresholds for good
performance. However, they sometimes missed adding the null
value check and timeout values and did not provide graceful
failure handling.

AdditionalTestingTools
Let’s look quickly at a couple of other tools that assist in measuring
and debugging frontend performance: PageSpeed Insights and
WebPageTest.
PageSpeedInsights
Lighthouse and Chrome DevTools simulate test cases like in a lab,
where you set preconditions and observe the results. But real life
has many nuanced variations, due to minor differences in users’
network bandwidth, device configurations, and more, that you can’t
predict or measure. The only way to know how different users truly
experience the website’s performance is throughreal user
monitoring(RUM) after the application is live. Google provides free
monitoring services that record the Core Web Vitals along with other
metrics as users from across the globe access the live application.
This data is calledfield dataorRUM data.
The PageSpeed Insights tool attempts to give a holistic view of
frontend performance by presenting both RUM data and Lighthouse
lab data (Figure 8-19). Try it by entering your live application’s URL
on thePageSpeed Insights home page.

Figure8-19.APageSpeedInsightsfielddataandlabdatareport
PageSpeed Insights also provides failure diagnostics and insights to
fix them, and exposes APIs to monitor and alert constantly.
WebPageTest
WebPageTestis a free online frontend performance assessment tool
that renders a website on real web and mobile browsers. It’s also
offered as a paid platform for live website monitoring. You can
choose location, devices, and resolutions to test from (Figure 8-20).

Figure8-20.WebPageTestconfiguration
Since WebPageTest is free and publicly available, you may have to
wait a few minutes to view its report, which has many valuable
sections that enable detailed debugging. In addition to field and lab
metrics, it provides a colorful waterfall timeline view (Figure 8-21)
showing how long each task takes—like DNS resolution, connection
initiation, and downloading HTML and images. Anomalies here could
be clues about avenues for further optimization.

Figure8-21.WaterfallviewfromWebPageTestreport
WebPageTest can pass authentication details, too, but the test
credentials you provide will be visible on the publicly hosted test run
report. WebPageTest also exposes APIs to get these reports
programmatically. There is also a Node.js module variant to run the
tests directly from the command line.
The last part is putting all of this together to form a performance
testing strategy, so you can allocate the required time and capacity
well in advance.
PerformanceTestingStrategy
Shifting left should be the guiding principle behind your performance
testing strategy, from designing the architecture for the performance
you expect to integrating performance tests into your CI pipelines for
frequent and continuous feedback.Figure 8-22shows a shift-left
performance testing strategy that applies the fundamentals
discussed in this chapter.

Figure8-22.Ashift-leftperformancetestingstrategy
Let’s walk through the different phases in shift-left performance
testing:
Planning
Before the project starts, agree on performance KPIs with all
stakeholders, including the business, marketing, and technical
folks. Design the architecture and choose the tech stack and
other details based on these numbers.
Set up a performance testing environment at the beginning of
the project, even if it can’t be similar to the production
environment.
Include frontend performance test cases with a variety of
network conditions, geolocations, and other factors as part of

every user story’s acceptance criteria.
Include response time, concurrency, and availability KPIs for
the APIs as part of every user story’s acceptance criteria.
Development
Validate the server KPIs for every user story through response
time and endpoint load testing.
Validate the frontend performance test cases for every user
story.
CI
Run all response-time validation tests for every commit.
Depending how long the load tests take, run them for every
commit or as nightly regressions to catch performance issues
early. This helps later, in debugging, and will also help you
see how performance degrades gradually as you add more
features.
Include frontend performance tests for frequently visited
pages as part of your CI pipeline.
User story testing
Watch for visible performance bottlenecks during exploratory
testing.
Ensure the performance-related acceptance criteria are met,
automated, and integrated with CI before marking a user
story as complete.
Release testing
Complete end-to-end application performance testing,
including stress testing, soak testing, and debugging with

performance monitoring systems.
KeyTakeaways
Here are the key takeaways from this chapter:
Poor web performance can have a serious financial impact
on a business. Conversely, improving performance can boost
conversions and revenue significantly.
Diverse factors influence an application’s performance, such
as architecture, the performance of third-party services,
network bandwidth, the user’s geolocation, and more. These
factors change throughout the software delivery cycle;
sometimes you can only optimize one.
Measure availability, concurrency/throughput, and response-
time KPIs continuously from the beginning of the software
delivery cycle. This helps prevent major performance issues
in production.
Use tools such as JMeter, Gatling, and ApacheBench to
perform shift-left performance testing.
Focus separately on frontend performance; frontend code is
responsible for 80% or more of the average application’s
load time.
Google’s RAIL model is a useful framework for defining
frontend performance metrics.
Design your frontend performance test cases with the end
user’s experience in mind. Include variables like network
bandwidth, geolocation, and devicecapabilities.
Include both API and frontend performance tests in your CI
pipeline to save your team from performance surprises.

1
Formoreonthisidea,seeScottBarber’swhitepaper“GetPerformance
RequirementsRight—ThinkLikeaUser”.

Chapter 9.Accessibility
Testing
Accessibility—essential for some, useful for all.
—World Wide Web Consortium (W3C)Web
Accessibility Initiative (WAI)
The web is an essential aspect of our lives in so many ways.Web
accessibilityis the practice of making it available to all users,
including those with permanent, temporary, or situational disabilities
such as visual impairments, advanced age, and literacy gaps.
Accessibility is a subset ofusability, in web development terms, and
a subset ofinclusivity,in humanitarian terms. Accessibility is
sometimes abbreviated toa11y, and you’ll see that used often.
The Web Accessibility Initiative’s tagline, “Essential for some, useful
for all,” emphasizes that web accessibility features are useful forall
users, irrespective of disabilities or other obstacles. For example, all
of us prefer a clear, structured, easily navigable layout where the
different parts of the page are easy to locate and identify. Similarly,
voice-enabled applications and understandable error messages and
instructions help all users.
There is a concrete business case to invest in web accessibility
features: roughly 20% of the world’s population has some sort of
disability, a group whose purchasing power is equivalent to the
world’sthird-largest economy.
In many places, web accessibility is also a legal requirement. The
United Nations Convention on the Rights of Persons with Disabilities
(UN CRPD), on which many countries base their legalpolicies, holds
that access to information and communications technologies,
including the web, is afundamental human right. In recent years

there has beena surge in lawsuitsagainst companies for violating
these policies. The first case was won in 2017 (although it has since
been overturned), when a person with visual impairments sued US
supermarket chain Winn-Dixie because its website did not support
screen readers.
NOTE
TheW3CisaninternationalcommunityledbyTimBerners-Lee,
inventoroftheWorldWideWeb,thatworkswithmemberorganizations
andpublicuserstoestablishglobalstandardsfortheweb,includingfor
accessibility.WhenIwrotethischapter,thelatestpublishedversionof
itsWebContentAccessibilityGuidelineswasversion2.2,sothe
inferences,references,andrecommendationsrefertothatversion.The
guidelinesareconstantlyupdated,sopleaserefertotheW3Csiteand
thelawsandregulationsofthecountriesforwhichyouaredeveloping.
For all of these reasons and more, it is time for software
development teams and businesses to start paying closer attention
to web accessibility features, if you aren’t already.
This chapter will give you a broad introduction to web accessibility
testing and tools. You will get an overview of accessibility personas,
the tooling ecosystem, the inner workings of screen readers, and the
web accessibility guidelines that are mandated by many
governments around the globe. (Mobile accessibility testing tools are
covered inChapter 11.)
You will also learn about web development frameworks that support
accessibility, and I’ll show you a shift-left accessibility testing
strategy that uses AI-powered tools. The chapter finishes with
exercises to give you hands-on experience in automating
accessibility auditing and integrating it within your CI/CD pipelines.

BuildingBlocks
Let’s begin with getting to know accessibility user personas and their
specific needs. The user persona discussion will be followed by an
overview of the accessibility ecosystem and the web accessibility
guidelines.
AccessibilityUserPersonas
You may know that auser personais a character that represents a
subset of a product’s audience with similar attributes. We create user
personas in software projects to understand users’ specific needs
and assimilate them throughout the SDLC.Figure 9-1shows a set of
accessibility-specific user personas.
Figure9-1.Accessibilityuserpersonas
These personas might be defined as follows:
Matt

Matt, a 30-year-old business professional, has recently broken his
arm and struggles to operate the mouse. He needs keyboard-
only access to the web.
Helen
Helen is an 80-year-old retired teacher whose color sensitivity
has become poor. To access the web, she needs color contrast in
the UI, such as distinguishable background and foreground
elements like images, links, and buttons. This requirement also
applies to users with colorblindness.
Abbie
Abbie is a teenager who has cognitive disabilities and needs
some extra time to learn new things. She needs a clean web
layout with proper headings, navigation bars, and consistent
navigation structures.
Fred
Fred (not pictured), a middle-aged father, wants to find a nearby
gas station while driving and needs clear information to make a
decision quickly.
Connie
Connie is blind and manages an independent store. He needs
text-to-speech and voice recognition support.
Laxmi
Laxmi, a homemaker, has an infant whom she carries around
most of the day, so she needs hands-free interactions such as
speech-to-text and possibly a screen reader.
Maya

Maya is a software professional who has reduced dexterity. She
needs large text, buttons, and controls to access the web. Users
with dyslexia and low vision also have this requirement.
Philip
Philip is deaf and a cooking enthusiast. He needs captions to
understand the recipe videos he enjoys watching.
Xiao
Xiao is a Chinese-speaking retail shop owner and has been
learning English for only a couple of months now. Xiao needs
simple instructions and understandable content that doesn’t
include jargon or complex prose. Users with cognitive and
learning challenges will also benefit from this feature.
Collectively, our user personas display visual (complete or partial),
hearing, cognitive, and muscular challenges, as well as temporary
accessibility restrictions. The goal is to enable all of them to
perceive, understand, navigate, and interact equally, like any other
users.
TheAccessibilityEcosystem
To build accessible web features, you have to understand the entire
accessibility ecosystem, where tools and technologies (beyond just
web technology) interact and combine to deliver content to users
with temporary and permanent disabilities. For example, Connie,
who is blind, uses text-to-speech and voice commands to interact
with the web. To enable that, text reader and voice command
technologies must cooperate. Some of our other personas need
assistive devices integrated into their computers. As we think of
different accessibility use cases to build, we need to understand
these various components and integrations, at least at a high level.

Elements of the accessibility ecosystem that we should consider
include the following:
Web development tools and practices
Web development tools and languages such as HTML and CSS
should have the necessary facilities to make the web accessible.
For instance, for web development frameworks to pass
information about the elements on a page to the screen reader,
they need provisions in the syntax to mention them explicitly.
User agents
User agentsare the tools that render web content, such as
browsers and media players. These user agents should integrate
with other tools, such as screen readers, to deliver content.
Assistive technologies
Assistive technologiesare devices and technologies that talk to
the browser and relay information to and from the user, like
screen readers, alternative keyboards, and switches.
As you can see, the accessibility ecosystem is vast. Some tools
provide more advanced accessibility features than others, which
might require workarounds or lead to some missing features for our
user personas.
To standardize accessibility features in all these components, the
W3C WAI has established international standards for each of them:
TheAuthoring Tool Accessibility Guidelines (ATAG)establish
the standards for content authoring tools such as HTML
editors.
TheWeb Content Accessibility Guidelines (WCAG)define
web content standards and require attention during
development.

TheUser Agent Accessibility Guidelines (UAAG)address
standards for web browsers and media players, including
some aspects of assistive technologies.
All of these standards are detailed on theWAI site.“Web Content
Accessibility Guidelines: Principles and Levels”is a deep dive; it lists
specifications for making various aspects of web content accessible.
Example:ScreenReaders
To understand why the WCAG prescribe specific guidelines, you need
to know how assistive technologies work. Let’s consider a common
assistive technology, screen readers, used by two of our personas,
Connie and Laxmi.
As the name suggests, screen readers read content aloud for the
user, who interacts with the website via keyboard shortcuts. The
screen reader recites the content in the order of the page’s
accessibility tree,a DOM-like structure that defines the page
elements and attributes like roles and ID in a sequence that
represents a meaningful flow through the site. For example, consider
a booking site with origin and destination text input fields and a
Search button on the home page. The accessibility tree will be
structured to represent the “search tickets” user flow: enter the
origin location first, then the destination location, and then click the
Search button. We can code certain elements that don’t add a lot of
value to the user flow, such as an advertisement banner, on the web
page to be hidden in the accessibility tree if needed.
To better relate to accessibility features you don’t use yourself, it’s a
good idea to try them out. Google Chrome provides a browser-based
screen reader as anextension. There are also demo websites, like
theexample booking siteinFigure 9-2, that give a sense of how
visually impaired users experience the web; the content is
intentionally blurred, and you can walk through making a booking

using a screen reader and your keyboard. Try it now, then come
back and finish the chapter.
Figure9-2.Screenshotfromademowebsite,intentionallyblurred,tosimulatea
screenreaderexperience
WebContentAccessibilityGuidelines:
PrinciplesandLevels
The WCAG set out four guiding principles for designing accessible
web content: the content should beperceivable,operable,
understandable, androbust,which I’ll define in a moment. The
standard also defines three levels of conformance, based on how
well the content meets the success criteria for each guideline:
Level A
This is the minimum level of conformance, providing essential
support without which the site would be inaccessible: audio and
video content should have captions, all functionality should be

accessible via the keyboard, and color must not be used as the
only means of conveying information. Level A conformance
enables all our user personas to navigate the web.
Level AA
This encompasses all the Level A requirements, plus additional,
stricter requirements, such as constraints on color contrast ratios.
Some legal policies recommend that sites achieve this level of
conformance.
Level AAA
This includes the requirements from the previous two levels, plus
enhanced requirements to make the web truly accessible for all
users, such as sign language interpretations for video content.
Achieving this level of conformance shows users that you really
care about them.
We’ll focus here on a quick overview of the WCAG Level A
requirements, the minimum level to which websites need to adhere,
and translate them directly into our accessibility test cases. Levels
AA and AAA, as well as the details of Level A, are covered in the
official documentation.
Perceivable
The first principle is that “Information and user interface
components must be presentable to users in ways they can
perceive.” In other words, we must make web content conveniently
available to all our user personas. Only when they can perceive
content can they operate on it further. Starting in the design phase,
we should think of all possible scenarios that could hamper this and
how to avoid them.
The WCAG elaborate this principle with detailed requirements,
summarized here:

All non-text content, like images, should have alternate text
(often called “alt text”) that describes it, for screen readers.
Audio or video content should have synchronized text
transcripts and captions as alternatives, with provisions to
pause, stop, and control the volume.
Any audio that starts playing automatically on page load
should have audio control mechanisms.
The page’s information and structure should have a
hierarchy and meaningful flow.
Instructions to navigate the website should not solely rely on
sensory characteristics of components, such as shape, color,
size, visual location, orientation, or sound. For example,
avoid instructions like “wait until the button turns green” or
“wait until you hear a beep.”
Colors should not be the only way to indicate an action,
prompt for a response, or distinguish elements on the
screen.
The color contrast between the page’s background and
foreground elements should follow the recommended ratio
to support users with less color sensitivity.
Operable
“User interface components and navigation must be operable.”
Consider ways to let users operate the website comfortably, such as
clicking buttons using keyboard shortcuts. The WCAG recommend
the following:
Provide keyboard-only navigation support for the entire
website, such as moving forward and backward and exiting a
modal window. The focus on the elements should be clear
and have appropriate color contrast.

Give users enough time to read the content entirely.
Avoid animations and other content that flashes on the
screen, which could cause physical reactions like seizures.
Allow users to skip repetitive content.
Hide offscreen content for screen readers, such as if a link
appears only after an item is selected.
Provide meaningful text for links.
Understandable
According to the WCAG, “Information and the operation of [the] user
interface must be understandable.” A website may have many
elements and user flows to complete an action. Craft these carefully
to be simple and straightforward for all user personas. The WCAG’s
requirements include the following:
Avoid jargon and technical terms like “034506451988 is
invalid”; present simple, meaningful content instead, like
“Incorrect date format.”
Expand abbreviations where necessary.
Avoid sudden changes in context (like opening multiple
windows), which will affect keyboard navigation.
Avoid changes of context when the user has different
settings, like a larger font size.
Provide clear, actionable element labels to help users take
the right actions. For example, an email address input field
should have the label Email and a sample value like
example@xyz.com.

Robust
Finally, “Content must be robust enough that it can be interpreted
reliably by a wide variety of user agents, including assistive
technologies.” Screen readers are not the only assistive technologies;
many others will require proper integration. The WCAG’s
requirements for this principle are as follows:
The markup language content should follow standards, like
having opening and closing tags, avoiding duplicates, and
using unique IDs, so that it is easily parsable by multiple
assistive technologies.
The name, role, and state of each element, including those
generated by scripts, should be available for assistive
technologies (for example,role="checkbox"andaria-
checked="true|false"). Provide the updated state of
elements like checkboxes to the screen reader after
selection.

THE WAI’S ACCESSIBLE RICH INTERNET
APPLICATIONS (WAI-ARIA)
Sometimes, when a page has custom elements for enriched user
interaction, assistive technologies can’t identify them. All such
elements must carryadditional attributesto indicate their types,
states, and behaviors to assistive technologies. For example,
assistive technologies will automatically translate a standard
HTML element definition like<input type="checkbox">as a
checkbox and instruct the user to click on it. However, when
developers use CSS to make a list(<li>) element look like a
checkbox, they must augment it with new attributes for the
assistive technologies to understand it properly.
These ARIA attributes are added to the accessibility tree, making
it friendly for all assistive technologies.WAI-ARIAprovides
development specifications (such asrolesandaria-checked).
Accessibility-EnabledDevelopment
Frameworks
Many development frameworks provide elaborate accessibility
support. For example, React fully supports building accessible
websites, often by using standard HTML techniques. The Angular
Material library provides a suite of reusable UI components that aim
to be fully accessible. Vue.js supports creating accessible
components as well.“Accessibility Testing Strategy”will show you
automated accessibility auditing tools that alert you if standard
accessibility-related tags are missing in the HTML. So don’t worry:
you have support! Your team can achieve accessibility without much
additional effort.

AccessibilityTestingStrategy
It’s important to think through a project’s accessibility requirements
right from the start of and support them continuously throughout
development, rather than retrofitting them after the testing phase.
The product design phase encompasses, first, thinking about user
features (such as payment via netbanking versus phone banking)
and the user flows to achieve them, and second, realizing those user
flows as UX designs for the development teams. That’s why the first
step in supporting accessibility is defining accessibility user personas
and tailoring features to them. Your team can collectively validate
that the features include all personas. Then the UX designs need to
be validated for accessibility conformance, which you can do using
AI-powered tools likeaxe for Designers.Figure 9-3shows the other
aspects of shift-left accessibility testing implementation for the
software development lifecycle.
Figure9-3.Ashift-leftaccessibilitytestingstrategy

AccessibilityChecklistsinUserStories
Several of the WCAG requirements apply to all the pages of a
website, so I recommend appending an accessibility checklist to all
user stories. This will help developers and testers go through the
requirements meticulously. Here is a generic page checklist to which
you can add any application-specific items.

ACCESSIBILITY CHECKLIST
☐ Check for the page title in the browser. In Chrome, when
you hover over the browser tab, you can see the page
title as a small widget. This text should clearly define the
context of the page within the website.
☐ Check the basic structure to ensure it has proper element
attributes and hierarchy. Turn off the CSS and verify that
the elements are listed in an order that is screen reader–
friendly. Chrome DevTools has an accessibility tree view
that shows the order of elements.
☐ Check the keyboard-only navigation, including proper
element highlighting and keyboard operations for
backward, forward, and exit.
☐ Check that error messages, labels, links, and other text
on the page all communicate the right intent.
☐ Resize the text using the system preferences or browser
zoom options; check the page’s readability.
☐ Check for readability in grayscale.
☐ Check that the captions for video and audio content are
correct, meaningful, and synchronized.
☐ Check for meaningful alt text descriptions of images. You
can verify this by turning off the image download option
in your browser settings; the browser will show the alt
text instead.
☐ Check that the screen reader flow is meaningful and that
the user can complete it.

AutomatedAccessibilityAuditingTools
Some items on the accessibility checklist can only be verified by
humans, such as viewing the site in grayscale and zooming in and
out. You can complement this review with automated auditing tools
that scan the basic HTML structure and alert you to any missing
accessibility tags for elements during the development phase.
Automated auditing tools come in two basic forms:static code
analyzers, which give feedback as you’re developing, andruntime
accessibility checkers, which give automated feedback on the actual
web page after development (discussed as part of“Exercises”in this
chapter).
There are several static code analyzers available.eslint-plugin-
jsx-a11yis a linting ESLint plug-in tool for React that enforces
several accessibility standards directly in your JSX.Codelyzerhas
linting rules for accessibility standards in TypeScript, HTML, and CSS
source code; aAngular ESLinthas them for Angular source code.
AxeDevToolsLinteris available as an IDE extension and as apre-
commit hookfor Git commits.
Axe Assistantis a paid tool that is also available to provide
remediation to any nonconformance failures with accurate code
changes.
In addition, you can add functional flows that cater to accessibility
needs, such as a separate transcript section below any video/audio
or clear, meaningful error messages and instructions, as automated
micro- and macro-level functional tests. You can run these
automated auditing tools on your local development machine to get
faster feedback and as part of CI for continuous testing.
ManualTesting
Manual testing is critical for validating website accessibility: the
automated tools only check the HTML structure, and the checklist

only includes mandatory items that are common across all pages.
The rest all requires manual testing—for example, verifying the
functional flow with a screen reader and a keyboard. Tools like
Accessibility Insights (more on this in“Accessibility Insights”) and
Axe Intelligent Guided Testing (IGT) (see“Axe Intelligent Guided
Testing”) provide partial support by guiding you through a set of
accessibility checks. IGT also offers a paid AI-powered tier that
covers additional accessibility checks.
You can make manual testing more efficient by focusing on different
scopes in different stages:
User story testing
Run the checklist on all pages to which the user story extends.
You can couple this with a web accessibility evaluation tool like
WAVEor Lighthouse to help you find accessibility issues.
Although the checks do not verify all of the WCAG’s Level A
requirements, they highlight issues visually in the browser, which
can help you notice them.
Feature testing
Your user story–level testing will cover the bulk of the
accessibility testing effort, but when a feature is complete, you
need to do another round of manual testing to identify any lack
of coherence in the application’s end-to-end navigation.
To test keyboard-only navigation, use Tab and Tab+Shift to move
forward and backward through the website, the Enter key to
select, and the up and down arrow keys for drop-down
selections. While doing this, make sure the focus is on the correct
element, and that it’s clearly highlighted. For testing the screen
reader flow, you can use the Chrome extension or the paid Axe
IGT features. Both Accessibility Insights and the paid version of
Axe IGT guide you in manually checking for conformance to
WCAG standards.

Release testing
When all the release features are complete, it is a best practice
to test with actual end users, including people with disabilities.
Since different users may have various assistive devices, this will
give you real-time feedback before the product’s final evaluation
for conformance certification.UserTestingis a remote testing
service where you can request that people with disabilities act as
testers for your site. This level of testing will showcase that
you’re keen on accessibility.
Conformance certification
Once the website is ready, engage experts in WCAG standards to
do a conformance evaluation before it goes live. Your
organization may have in-house experts or hire consultants to do
the final assessment.
Since every single element on the page requires changes to make it
accessible, shifting left as discussed here is the only way to rescue
your team from the uphill battle of fixing all the accessibility issues
at the end of the development cycle.
Exercises
Most accessibility testing tools provide the following three
capabilities:
Automated scan
Automated scanning for a variety of accessibility checks,
including checking for HTML tags to be closed, images to have alt
text, form elements to have labels, element IDs to be unique,
and so on. They’re handy for fast feedback and can be added as
part of Playwright’s functional tests.

Guided tests
Guided scans require human intervention to review the tool’s
observations and, if needed, override the decision.
Manual checklist
A list of checks not covered in the other two scans that need to
be completed manually.
These capabilities are sometimes bundled together as a paid
platform, as in the case of Deque’s Axe solutions; other open source
tools, such as Accessibility Insights and Lighthouse, provide some
combination of these capabilities, but with somewhat limited
automation. The exercises in this section explore these tools, along
with the option to add automated scans to Playwright functional
tests.
Lighthouse
InChapter 8, you used Google Lighthouse’s features and workflow
to conduct performance audits from Chrome DevTools. Lighthouse
can also conduct an automated accessibility scan on a page and list
possible accessibility improvements you can make during
development. It also provides an overall accessibility score based on
adefined, weighted calculation. In the Lighthouse tab in Chrome
DevTools, just select the Accessibility category (Figure 9-4) and
you’ll get the report immediately (Figure 9-5).

Figure9-4.UsingLighthouseinChromeDevToolstogenerateanaccessibility
report
Figure9-5.Lighthouseautomatedaccessibilityscanreport

The report highlights potential issues, such as, as inFigure 9-5, an
insufficient color contrast and a missinglangattribute. Also, to help
with debugging, it pinpoints the actual lines of code containing the
errors, alongside educational links to support the developers in fixing
them. Lighthouse provides a manual testing checklist at the bottom
of the report (“Additional items to manually check”), also with
educational links.
TheLighthouse Node modulecan be executed from the command
line to get the reports programmatically, and can be integrated with
CI.
Axe-core
Many tools, including Microsoft Accessibility Insights and Google
Lighthouse, extend Axe-core, a popular open source tool from
Deque, for their automated accessibility scans.Axe-core’s
documentationstates that it can find, on average, 57% of WCAG
issues automatically. It works with many browsers, including
Microsoft Edge, Google Chrome, Firefox, and Safari. The tool can be
used within functional testing suites to conduct automatic
accessibility audits on each page of the user flow. For example, in
the Java Selenium WebDriver integration, you can add Axe-core as a
Maven dependency. This exercise extends Playwright’s functional
tests, which you used inChapter 3, to conduct accessibility audits.
Setup
Install the@axecore/playwrightNode module using the following
command:
$ npm install @axe-core/playwright

Workflow
TheAxeBuilderclass within the@axe-core/playwrightpackage
will be able to do accessibility scans on the page, and you can assert
on the output to have 0 violations.Example 9-1shows the
AmazonHomePage.tsclass with thecheckAccessibility()
method. You can call this within thegoto()method similar to the
performance vitals checks or the visual checks on page landing.
Expect the test to fail on the Amazon home page, with accessibility
violations listed in the terminal output.
Example 9-1.AmazonHomePage.tsclass with accessibility audit
import AxeBuilder from '@axe-core/playwright';
async checkAccessibility() {
const results = await new AxeBuilder({ page: this.page
}).analyze();
if (results.violations.length > 0) {
console.error('Accessibility Violations:',
results.violations);
throw new Error(`Accessibility check failed with
${results.violations.length}
violations.`);
} else {
console.log('No accessibility violations found.');
}
}
When you grow the test suite, a best practice is to pull these
common capabilities into aBasePage.tsclass and inherit that
across all pages.
AI ASSISTED TEST AUTOMATION
GitHub Copilot was able to add thecheckAccessibility()
method when prompted to use the@axecore/playwright
package to include accessibility checks in the
AmazonHomePage.tsclass.

Explore theofficial documentationto learn about Axe-core’s
advanced capabilities, such as checking for adherence to a specific
WCAG version and audit scans for a section of a page.
AccessibilityInsights
Accessibility Insightsis an open source tool from Microsoft that
provides automated accessibility scans (using Axe-core), guided
tests, and manual checklists to achieve compliance for WCAG 2.1
and WCAG 2.2. It is available as a free browser extension for
Chrome and Microsoft Edge. It provides a smooth experience, with
visual support and detailed step-by-step instructions and
documentation.
Setup
Setup is simple:
1.Downloadthe extension for Chrome or Edge. It should
appear on the browser toolbar, or you can pin it to the
toolbar by searching for it under Settings.
2.Open the site or application you’re testing and click on the
extension. (For this exercise, use Amazon.com.) Choose
FastPass.
3.This should open a new browser window with accessibility
insights. Resize it and place it next to the application window
so that you can see both.
Workflow
The FastPass option quickly assesses the page using all three types
of tests. The Automated checks option (the first one on the left
panel) scans the page and provides a report (Figure 9-6).

Figure9-6.AccessibilityInsightsautomatedscanresults
When you toggle “Visual helper” and select the “Highlight hidden”
option at the bottom of the issue, it will place a red highlight box on
the corresponding element on the Amazon home page. The tool also
provides a fix for the issue, shown in the “How to fix” section in
Figure 9-6.
The second option on the left panel is Tab stops, an example of
guided tests. The tool will suggest that you continue clicking the Tab
key on the Amazon home page and reviewing the correctness of the
element order. If you toggle “Visual helper,” it highlights the selected
elements with numbers (Figure 9-7).

Figure9-7.AccessibilityInsightsguidedtabtest
Next, FastPass will report auto-detected issues for review. You can
mark them as pass/fail; this will become part of the final report.
The third option on the left panel is the manual checklist, where
you’ll be asked to verify the color contrast and other checks
manually.
To fully assess the page for WCAG conformance, you will need to go
through the 20+ checks under the Assessment section, instead of
the FastPass section. This set of checks includes all three types of
tests. Some of the guided tests scan elements with properties that
need reviewing and present them to you. For instance, the “Images
function” check will present a list of images with each one’s ARIA
role and name, coded as Decorative or Meaningful for you to mark
as pass or fail. It provides detailed instructions, a reason for each
check, and help for fixing issues. You can export the final
assessment report for logging defects.

AdditionalTestingTools
A couple of other auditing tools that might be of interest are Axe’s
AI-powered Intelligent Guided Testing and the Pa11y command-line
tools.
AxeIntelligentGuidedTesting
Deque Systems has been embedding AI into its Axe tools to increase
automated test coverage and reduce false positives. Several Axe
tools help with shift-left accessibility testing and assist in fixing
issues, including the following:
Axe for Designers, an AI-powered extension to Figma that
validates UX designs for WCAG compliance.
Axe linters,pre-commit hooks, and theAxe Assistanthelp
prevent, identify, and fix the issues during development.
TheAxe-coreengine is extended by tools like Lighthouse
and Playwright for automated scans in CI.
TheAxe browser extensiondoes WCAG compliance
assessments that support automated, guided, and manual
checks.
Axe’sIntelligent Guided Testsare available as a paid plan and can be
accessed via the Axe browser extension (Figure 9-8). They cover
accessibility checks for elements such as tables, modal dialogs,
images, and forms.

Figure9-8.IntelligentGuidedTestsintheAxeDevToolsbrowserextension
For instance, when you start the Keyboard IGT, it automatically clicks
Tab on the page for you and expects you to review the order of the
elements and the presence of focus indicator when selected. ItsAI
toolscans interactive elements like links and buttons for the
correctness of their accessibility name, role, and state properties. For
instance, if a “Start new blog” button is marked as an alert box, the
AI visually identifies it as a button and suggests an appropriate fix.
This can save a lot of manual review effort, especially with pages
that have hundreds of interactive elements, like Amazon’s home
page. AI has also enhanced itscolor contrastchecking capabilities.
Many checks that were previously marked as “Needs review” can
now be correctly identified. Deque Systemsclaimsthat the
automated scans alone have increased IGT’s automated accessibility
test coverage from 57% to 80% or more.
Pa11yCINodeModule
Pa11y CIis an open source command-line tool that doesn’t require a
browser to conduct accessibility scans. It comes as a node module
and does static analysis on a page’s HTML code. Since pa11y can
find different issues than those that Axe-core finds, some engineers
combine them for integration with CI.
Pa11y can run accessibility audits against one or more URLs to test
multiple web pages: simply include the URLs in theurls section of
the config file, as shown inExample 9-2. Alternatively, you can pass
in an XML sitemap via the command line with the--sitemapoption.

You can add Pa11y CI to the project build stage in CI or as a
separate stage in the pipeline.
Example 9-2.Pa11y CI’s config file with WAI’s “before’” and “after”
demo sites
{
"defaults": {
"timeout": 1000,
"viewport": {
"width": 320,
"height": 480
}
},
"urls": [
"https://www.w3.org/WAI/demos/bad/after/home.html",
"https://www.w3.org/WAI/demos/bad/before/home.html"
]
}
The tool also comes with options to set a threshold for errors and
warnings for the CI build, define viewport sizes for audits, and
specify how long to wait for the page to load.
Whichever option you choose, use continuous testing strategically to
give your team feedback early in the development cycle. All the
effort you put in will pay off when you provide comfortable access to
the application to Matt, Helen, Abbie, Fred,Connie, Laxmi, Maya,
Philip, Xiao, and yourself!
Perspectives:AccessibilityasaCulture
Although this chapter has discussed accessibility in the context of
web applications, these concepts apply much more widely.
Accessibility is a culture, and it requires a shift in mindset. When you
adopt this mindset, you’ll start asking yourself questions like:If I
send an email with only images and no alternative text summary,
will it be accessible for everyone? If I use a small font size in my

presentation slides, will everyone be able to read them? Can I
choose simple, clear messages over erudite vocabulary so that
everyone can understand?I am sure all of us know the answers to
these questions!
KeyTakeaways
Here are the key takeaways from this chapter:
Web accessibility features are essential for some, but useful
for all.
If the disabled community were a country, it would have the
third-largest economy globally in terms of purchasing power
—which makes a strong business case for accessibility.
Many governments legally mandate web accessibility.
The W3C WAI has come up with a set of Web Content
Accessibility Guidelines that software development teams
must follow. Check for the latest version of the guidelines
when you begin project development.
The tools and technologies of the accessibility ecosystem go
far beyond just the web. Try out at least one assistive
technology, such as a screen reader, to help you think of
good accessibility-enabled features for your application.
Integrate accessibility within the SDLC from the beginning of
your project; retrofitting it at the end would be a nightmare.
Many web development frameworks have built-in support for
accessibilityfeatures.
You can shift accessibility testing to the left with checklists
and automated/AI-powered static and runtime auditing
tools, such as Codelyzer, Pa11y CI, Lighthouse, WAVE, and
Axe tools.

You can reach out to organizations that provide user testing
services to get real-time feedback on your application from
users with disabilities.

Chapter 10.Cross-Functional
Requirements Testing
Functional requirements are the core services businesses offer
customers, like booking a ride with a ride-hailing app or making a
payment with an internet bank. However, just implementing these
functional requirements isn’t enough to guarantee success. If the
process takes too long, is too complex, or exposes your personal
data, you won’t want to use that app. That’s wherecross-functional
requirements(CFRs) come in: characteristics of the application that
have to be built into every functional feature. They complete the
application, increase its quality, and make it competitive in the
market. Here are some examples of CFRs for a ride-hailing app:
The app should respond to users withinxseconds.
Users should be able to perform any action withinnsteps.
The app should transmit and store the users’ details
securely.

CROSS-FUNCTIONAL VERSUS NON-FUNCTIONAL
REQUIREMENTS
You will often hear CFRs referred to asnon-functional
requirements(NFRs). I, along with many others in the software
industry, prefer the termcross-functional, which emphasizes that
the requirements are spread across the application and thus
need to be built and tested as part of every user story and
feature. Also, calling themnon-functionalmay cause the false
impression that they are inessential!
I refer to some “functional” features like authentication and
authorization as cross-functional features in this chapter because
they are spread across the application. For instance, your system
must verify the authenticity of every service request and respond
with only the relevant information, as appropriate for the
requester’s access levels and permissions, every time.
Although I have discussed CFRs in passing in several previous
chapters, this chapter is focused on them. It takes a broader view of
CFRs and offers an overall CFR testing strategy that provides
continuous feedback. I will also discuss methodologies and tools,
including AI-powered tools, for implementing the strategy.
BuildingBlocks
Chapter 1discussed how differently businesses and customers
envision software quality, with both demanding long lists of
attributes. These attributes essentially translate into the standard
CFRs for any given application.Table 10-1lists 30 common CFRs,
with definitions and examples of each.

Table 10-1.Simple definitions of a long list of CFRs
CFR Ability definition
Accessibility Enables users with disabilities to access the
application seamlessly
Archivability Stores and retrieves application event and
transaction history
Auditability Tracks and logs the app’s business events
and states
Authentication Allows only authenticated users to access the
application’s services in all layers
Authorization Restricts access based on permissions
Availability Provides the application’s services for a
defined period
Compatibility Lets two or more systems work in tandem
without disrupting one another, such as a
recent and an earlier version of the same
service
Compliance Adhering to legal requirements and industry
standards
Configurability The app’s behavior, such as types of
multifactor authentication, can be configured
with variables
Consistency Produces consistent results in distributed
environments without losing information

CFR Ability definition
Extensibility Allows developers to plug new features into
the app easily
Installability Can be installed on supported platforms,
such as OSs and browsers
Interoperability Interacts with multiple technologies and
platforms
Localization/ Scales to different regions with a different
internationalization user experience and language translations.
Often abbreviated asl10n(localization) and
i18n(internationalization)
Maintainability Ease of long-term maintenance
Monitoring Collects data about its activities and alerts
about predefined errors and metrics that go
out of bounds
Observability Analyzes monitoring information to debug
and gain insights into the app’s behavior
Performance Responds on time to user requests, even at
peak load
Portability Can be integrated into new environments,
such as new database types or cloud
providers
Privacy Protects private and sensitive user data
Recoverability Recovers from system outages quickly and
without loss

CFR Ability definition
Reliability Tolerates errors and maintains services and
data with precision
Reporting Provides meaningful reports to the business
and end users based on the events it collects
Resilience Handles errors and downtime appropriately,
for example using load balancing
Reusability Code and services can be reused to
implement new features
Scalability Can grow to meet needs, such as expanding
to new regions or handling more users
Security Curbs vulnerabilities and defends against
potential attacks
Supportability Support onboarding new developers to teams
and new users to the application
Testability Lets testers simulate different test cases and
experiment
Usability Provides an intuitive, meaningful, easy user
experience
This is not meant to be an exhaustive list; there may be others.
Collectively, the CFRs, or-ilities, as they are sometimes called, define
1
the app’s executional and evolutionary qualities. Executional
qualitiesrefers to the app’s behaviors during runtime, such as
availability, authentication, and monitoring. When executional

qualities are not embedded in the application, end users get
frustrated when the system is unavailable, and team members get
frustrated when the code is unmaintainable.Evolutionary qualities,
like maintainability, scalability, and extensibility, refer to the quality of
the static code. When evolutionary qualities are not addressed,
software teams take the blow first, and this soon becomes an issue
for the business. Teams should establish CFRs at the beginning of
development and continuously test for them throughout the delivery
cycle, just like functional requirements.
CFRTestingStrategy
We’ll use the FURPS model, a model used for classifying all software
2
requirements, to establish a high-level CFR testing strategy. FURPS
stands for functionality, usability, reliability, performance, and
supportability:
Functionality
User flows in the application, such as the login, ride availability,
and booking flows in a ride-hailing app
Usability
Requirements that affect the user experience, such as visual
quality, browser compatibility, accessible design, and ease of use
Reliability
Requirements that make the application consistent, fault-tolerant,
andrecoverable
Performance
Requirements related to backend KPIs and frontend performance
metrics, as discussed inChapter 8
Supportability

All evolutionary code qualities, such as maintainability, testability,
and security
The CFRs inTable 10-1can be visualized along the same lines. For
example, accessibility, as discussed inChapter 9, is manifested
through functional features such as adding transcripts for videos, as
well as through application design. So accessibility testing covers
both functionality and usability. Similarly, one way to incorporate
security is to add authentication-related functional features, such as
user login. Another is to write secure static code.
This section presents testing strategies for each of the five FURPS
themes, as depicted inFigure 10-1. To formulate a project-specific
CFR testing strategy, decompose the different aspects of the CFR
and choose methods and tools based on your project’s priorities.

Figure10-1.ACFRtestingstrategy,decomposedacrossthefivethemes
Functionality
To test the functional aspects of CFRs, you’ll use tools and methods
for manual exploratory testing and automated functional testing at
different application layers, as discussed in Chapters2and3, as well
as the data testing tools and methods discussed inChapter 5.
When testing compliance-related functional features, it is crucial to
involve the legal team in both the testing and requirements-
gathering phases. (See“Compliance Testing”later in the chapter.)

Usability
Chapter 6discussed AI-powered tools and approaches for testing
visual quality and cross-browser compatibility, andChapter 9covered
AI-assisted accessibility testing. The remaining aspects of usability
testing include localization and UX.
Localization and internationalization testing
Localization testing can be addressed in a few ways. If the UI skin
varies for different locales, you should perform visual testing. If the
skin doesn’t vary but the language and features like date and money
formats change, you can rely on unit testing and manual testing.
However, if language translation lengthens or shortens the text,
changing the UI layout, adopt visual testing practices.
When manually testing language-specific text, you’ll need to get
meaningful translations for all text by a native speaker of the target
language. Once the business approves the translations, document
the approved translated text in each user story to enable
development and manual story testing. If you skip these steps,
developers are left with no other option than to fill in the text using
an online translation service, which results in double testing efforts
before and after getting the approved strings.
WARNING
Ifyouputofflocalizationtestinguntiljustbeforerelease,thetranslated
textmightnotfittheelements’layout—soyouriskbreakingtheUI
layoutlateinthedeliverycycle.Startthetranslationprocessearlyin
developmentsothatyoucantestcontinuously!
Don’t use UI-driven functional tests to verify all the text in the
application, as that would make them very slow. Only use them to
verify any differences in functional flows between locales. If your

overall test strategy adheres to the test pyramid, you can make your
UI-driven functional tests reusable by parameterizing the strings
used in assertions and element identifiers.
User experience
The user experience (UX) encompasses the design-related aspects
of the application. This might include asking questions like:
How intuitive are the user flows?
How many clicks does it take the user to get the information
they need?
Do the icons convey the right meaning?
Do users like the application’s color palette?
Designers research such questions at the beginning of a project and
incorporate their findings. For instance, in a retail mobile project I
worked on, we found that people from Italy preferred bright colors,
like red. Generally, you should include aspects of UX in manual
exploratory testing for every user story. NNGroup, which does UX
design research, lists10 usability heuristicsfor testing. Product
owners and UX designers usually pair up to do usability testing,
which can be a great way for testers to learn about user behavior.
You can also use tools likeUserZoomand Optimal Workshop to
conduct UX tests on design prototypes with real end users. Doing
this periodically during the delivery cycle, with different end user
groups, can significantly enhance the design.
A/B testingis another way to get real-time UX feedback. It involves
presenting different UX designs of the same feature as prototypes to
two different end user groups in production and collecting data on
how the differences affect users’ behavior. This data helps the
product team decide on the final design. For example, are users
more likely to click a Sale button if it’s red or blue? In A/B testing,
you would present the red and blue buttons to different user groups

and measure their clicks. This kind of experiment requires somedata
science capabilities, and usually involves product owners, data
scientists, developers, and user experience designers working
together. AI-powered A/B testing platforms like LaunchDarkly and
Statsig can automatically design experiments with multiple variations
and redirect traffic in real time, based on user profiling, to support
faster experimentation cycles.
Reliability
The CFRs that contribute to the application’s reliability are
recoverability, resilience, auditability, archivability, reporting,
monitoring, observability, and consistency (seeTable 10-1). Many
aspects of reliability can be experienced as user flows, such as error
handling, retry mechanisms, fallback mechanisms for single points of
failure, measures to ensure data consistency, and integrations with
third-party tools for monitoring, observability, or reporting services.
Functional testing approaches can be deployed here.
Chaos engineering,discussed in detail in“Chaos Engineering”, is a
way to unearth inherent flaws in the application that might lead to
system outages, failures, and other disasters. This method is
immensely helpful for uncovering the “unknown unknowns” in large-
scale systems.
Infrastructure testing, covered in“Infrastructure Testing”, is just as
important: if the app’s infrastructure goes down, everything goes
down. The infrastructure layer has to be wired to support
autoscaling, alerting, monitoring, load balancing, and archiving
capabilities. Although focused testing at the infrastructure layer
hasn’t become prevalent yet, it is gaining traction due to the
increased need for businesses to scale widely.

Performance
Chapter 8discussed the importance of performance and covered
tools and metrics for both frontend and backend performance
testing. Performance testing also helps fulfill scalability and reliability
requirements by identifying the system’s breakdown threshold.
Supportability
Supportabilityrefers to all evolutionary code qualities, such as
compatibility, configurability, extensibility, installability,
interoperability, portability, maintainability, reusability, security, and
testability. Some of their functional manifestations, such as the
configurability of functional features, compatibility with required
protocols, installability in appropriate operating systems, and
interoperability work with the functional testing approaches
discussed earlier in the book, with proper environment setup and
stubs. Other approaches to test supportability include the following:
Architecture tests
Architecture testsassert a set of architectural characteristics,
such as verifying that the right classes are under the right
packages (thereby ensuring reusability). These automated tests
alert the team to deviations from the essentialarchitectural
characteristics designed for the CFRs. (See“Architecture
Testing”.)
Static code analyzers
Static code analysis enhances maintainability. Tools that provide
feedback for this include the following:
Checkstyleensures that the team sticks to a common coding
style.

PMDreports issues such as unused variables, empty catch
blocks, and duplicate code, and can also enforce project-
specific custom rules.
ESLintchecks JavaScript code for possible style and code
errors.
SonarQubeassesses code coverage and vulnerability
scanning.
Using these methods and tools, you can shift your CFR testing to the
left. As discussed inChapter 4, these CFRs can be continuously
tested, along with functional tests, as part of CI.
OtherCFRTestingMethods
I discuss the CFR testing methods introduced in the strategy section,
such as chaos engineering, architecture testing, and infrastructure
testing, at greater length here. The commonly implemented
regulatory requirements discussed toward the end of the section will
support your compliance testing efforts.
ChaosEngineering
Application reliability is a critical CFR, as any service outage results
directly in a loss for the business. Established products such as
Amazon Web Services strive to achieve an uptime of 99.999%,
which translates to a cumulative downtime of just five minutes and
15 seconds per year.
Factors that can lead to downtime include bugs in the application,
single points of failure in the architecture, network issues, hardware
failures, unexpected high loads of traffic, and issues with third-party
services on which the application is dependent. Architects consider
most of these factors while designing the architecture, and teams

take preventive measures during development. For example, the
exponential back-offmethodprescribes exponentially decreasing
request frequency to a service that goes down to give it time to
recover. Likewise, theblue/green deployment modelworks by having
two identical production instances: one is live, and the other is used
for upgrading, then switched to be the live instance. Despite all
these efforts, large-scale distributed systems challenge reliability
with convoluted workflows, multiple-layer dependencies, third-party
failures, downstream system errors, and more.
Let’s consider an example. A 50-member team working on a large-
scale distributed application sets up two separate instances to cater
to customers in the US and UK. They configure each instance to
redirect to the other when one goes down, and build functional
capabilities into the application to handle requests from both
regions. The team tests the functionality and the redirection flow
and checks the app’s performance under load. However, when the
UK instance goes down due to technical issues, all UK requests are
redirected to the US instance just as its traffic is peaking due to a
sale. The application ends up throwing errors to all the users. The
team later spots the root cause: a third-party downstream system
that constrains requests per hour started throwing errors when that
rate limit was exceeded. Practically speaking, although the team had
done its due diligence, this edge case was hard to predict.
In real life, Netflix had trouble when making its service cloud native
around 2008: its cloud instances faced unplanned outages that
resulted in business losses and extended the engineers’ working
hours. They took up the challenge, deliberately mimicking the
failures and solving the issues in their application one by one until it
became entirely resilient to such unplanned outages. To achieve this
goal, they designed a tool called Chaos Monkey, which brought down
one random instance of a cluster every day during working hours
(with appropriate safety measures). This approach addressed the

system’s inherent unpredictable flaws, making it resilient and
reliable. They crystallized the practice, calling itchaos engineering.
Nora Jones and Casey Rosenthal, in their bookChaos Engineering
(O’Reilly, 2020) definechaos engineeringas “the discipline of
experimenting on a distributed system in order to build confidence in
the system’s capability to withstand turbulent conditions in
production.” In other words, it involves simulating errors, outages,
and other unexpected scenarios and observing the application’s
behavior. This practice is being widely adopted, and many companies
have evolved it further to suit their needs. It’s particularly beneficial
when you are developing a large-scale distributed system.
Chaos engineering is more about experimentation than testing—it
doesn’t involve verifying the system’s expected behaviors when
faced with unknown issues, but observing its behaviors in
unexpected situations. The purpose is to gain confidence in the
system’s reliability and resilience. You can choosenotto experiment
when you’re confident in your system’s ability to handle unknown
turbulence. Chaos engineering is not the responsibility of one
particular role: it’s a team activity where all stakeholders work
together to design and conduct an experiment, then debug the
behavior.
The Netflix team recommends conducting chaos engineering directly
in production, since the real-life variables are tough to simulate in a
test environment. They also recommend designing capabilities to
pause the experiments and revert the system back to normal.
Several tools, like Harness, Chaos Toolkit, and ChaosBlade, assist in
designing and scripting chaos experiments so you don’t have to
manually bring things down and up in production.
To perform a chaos experiment, first develop a hypothesis that might
challenge the app’s reliability and assemble a cross-functional team.
Next, define a steady-state hypothesis, predicting how the
application will behave during the experiment. Script the experiment

using your tool of choice and run it in production. If the tool alerts
you that the experiment has failed—for instance, the steady-state
hypothesis has not been met—your cross-functional team can jump
into action.
Example 10-1shows a simple experiment set up usingChaos Toolkit,
an open source tool written in Python. The experiment is scripted to
simulatea technical issue (a deleted configuration file in the current
instance of the application) and check whether an alternative
instance of the application is still up and running.
Example 10-1.A chaos experiment to simulate a technical issue and
observe the application’s behavior
{
"version": "1.0.0",
"title": "Application should still be up if there are
technical issues",
"description": "When a particular config file is missing,
application should
still be up from another instance",
"contributions": {
"reliability": "high",
"availability": "high"
},
"steady-state-hypothesis": {
"title": "Application is up and running",
"probes": [
{
"type": "probe",
"name": "homepage-must-respond-ok",
"tolerance": 200,
"provider": {
"type": "http",
"timeout": 2,
"url":"https://www.example.com/"
}
}
]
},
"method": [
{

"type": "action",
"name": "file-be-gone",
"provider": {
"type": "python",
"module": "os",
"func": "remove",
"arguments": {
"path": "/path/config-file"
}
},
"pauses": {
"after": 1
}
}
]
}
The script begins by describing the experiment’s intent and tagging
it as a test case contributing to high reliability and availability. It
elaborates on the steady-state hypothesis and the method to trigger
the technical issue. The method deletes a file from a given path and
pauses for one second before attempting to verify the steady-state
hypothesis. It uses one of the tool’s probes to hit the application URL
and check whether it returns a 200 status code within two seconds.
This experiment can be run from the command line.
Suppose you run the experiment and it fails, taking four seconds to
respond instead of two due to hurdles in rerouting to the alternative
instance. That’s a valuable insight.
Chaos Toolkit provides many other APIs for different types of
experiments, and it’s easy to configure them as JSON files like the
one shown here. It also generates an HTML report at the end of an
experiment. Alternatively, paid AI-powered chaos-engineering
platforms, such asHarness, automatically design and script an
experiment based on the application’s architecture and operational
data, and run it on approval. AI capabilities also extend to observing
the failures in the experiment and providing recommendations for
fixes.

ArchitectureTesting
At the beginning of any project, a team that includes business
stakeholders, product owners, architects, and possibly other roles
draws up a list of functional and cross-functional requirements and
lays out an architecture design to fulfill them. For example, an
architect might propose giving the application separate layers to
ensure maintainability and reusability across teams and placing
caching mechanisms in the right layers for performance.
However, these well-thought-through design decisions may be
disrupted by Conway’s Law. In his 1968 paper“How Do Committees
Invent?”, Melvin Conway states:
Any organization that designs a system (defined more broadly
here than just information systems) will inevitably produce a
design whose structure is a copy of the organization’s
communication structure.
In other words, team structures, particularly the communication
paths among people, inevitably influence the final product design.
Teams working on smaller portions of a large system will
inadvertently optimize their respective portions without factoring in
the big-picture needs. In the above example, one team could
overlook the big picture and choose to prioritize performance over
reusability and bypass layer isolation, which would force other teams
to rework the architecture. This is where architecture tests help
guard the essential architectural characteristics by telling teams
when they deviate from the big picture.
You can use tools likeArchUnitfor Java andNetArchTestfor .NET,
amongothers, to write architecture tests. For example, you might
want to check for cyclic dependencies so that maintainability is
continuously preserved, or to make sure the packages are
independent so that they are reusable.

ArchUnit tests are similar to JUnit tests and can be run as part of a
CI pipeline.Example 10-2shows an ArchUnit test asserting that all
classes in the order management service reside in theomspackage,
to ensure reusability. So, whenever there is a need to include a class
outside the responsibilities of the order management service, the
team has to discuss the big picture and decide where it fits.
Example 10-2.An ArchUnit test to assert reusability
@Test
public void order_classes_must_reside_in_oms_package() {
classes().that().haveNameMatching("*order*").should().resideInAPa
ckage("..oms..")
.as("order classes should reside in the package
'..oms..'")
.check(classes);
}
Similarly,JDependis a tool that produces metrics on a design’s
extensibility, maintainability, and reusability. It does a static code
analysis on all the Java classes and gives different design scores for
a given Java package. (NDependis a parallel tool in the .NET world.)
JDepend uses the number of abstract classes and interfaces in a
package as a measure of its extensibility, checks for dependencies
on external packages and package cyclic dependencies, and raises
alerts when there are unwanted dependencies. JDepend tests can be
written as JUnit tests and integrated with CI for continuous feedback
on architecture quality.
Example 10-3shows a JDepend test that checks if packages A and B
depend on each other, which could introduce cyclic dependencies
and hamper reusability.
Example 10-3.A JDepend test to assert on package cyclic
dependencies
import java.io.*;
import java.util.*;
import junit.framework.*;

public class PackageDependencyCycleTest extends TestCase {
private JDepend jdepend;
protected void setUp() throws IOException {
jdepend = new JDepend();
jdepend.addDirectory("/path/to/project/A/classes");
jdepend.addDirectory("/path/to/project/B/classes");
}
public void testAllPackages() {
Collection packages = jdepend.analyze();
assertEquals("Cycles exist",
false, jdepend.containsCycles());
}
}
Along the same lines, tests can verify that a package has only the
expected dependencies or no dependencies at all. This way, the
teams can get feedback whenever there is an undesired change to
the critical architectural characteristics.
AI-powered code review tools likeQodofocus on enforcing
architectural characteristics, not just coding styles. These are paid
tools with usage limits and standard rules like those of other AI-
powered tools, and you might still need to tailor a couple of
architecture tests to your application’s architecture in addition to the
standard rules these AI-powered tools check for.
InfrastructureTesting
The terminfrastructure,at a high level, refers to the computational
resources the app needs to function smoothly (like machines, VMs,
and containers), network structures (like virtual private networks—
VPNs—DNS entries, proxies, and gateways), and storage resources
(like AWS S3, SQL Server, and secrets management systems).
Infrastructure testing looks at these resources’ setup and
configuration. This is an emerging area in testing.

Once businesses become successful, they often want to expand their
online services to new regions quickly and start serving larger
numbers of customers. To enable such quick scaling, they need to
be able to replicate the existing end-to-end application stack,
including the infrastructure setup, quickly—if possible, with a single
click. Although most software teams have an automated process to
test, bundle, and deploy the application to any environment with a
single click, they don’t always have the same capability on the
infrastructure side—a gap in their ability to scale rapidly.
The terminfrastructure as code(IaC) refers to the practice of
designing, setting up, and configuring infrastructure as reusable
code, just like application code, to power continuous delivery and
scalability. For instance, you might write code to spin up a cloud
instance with 3 GB of memory using the cloud provider’s APIs and
set up application-specific load-balancer rules and a firewall. These
features need to be tested so that others can use the same code to
spin up new infrastructure instances whenever there is high load or
to expand to new regions.
Terraformby HashiCorp is a popular open source tool for scripting
infrastructure code using a declarative coding style to let code work
across multiple cloud providers. Here is a list of testing steps to
adopt when using Terraform along the path toproduction:
1.The commandterraform validatechecks for syntax
errors in the Terraform code as early as the development
stage.TFLint, a linting plug-in for Terraform, analyzes the
static infrastructure code for deprecated syntax and
deviation from coding best practices, including naming
conventions. It can also check if the specified image types
are offered by popular cloud providers such as AWS and
Azure, providing faster feedback during development.
2.As a safety measure, when Terraform applies the latest
development changes, it also provides a preview that

compares them against the existing environment state. If
your code changes accidentally delete the database, the
preview feature will save the day! The command for this is
terraform plan.
3.You can write automated tests against the output of this
command to verify certain aspects, like security policy
compliance, using theterraform-complianceopen source
library.
4.The next step is to deploy the infrastructure code to create
actual cloud instances, then verify whether the instances
have the intended infrastructure resources—for example, if
the instance is running within the private subnet and has the
required disk space. You can automate these test cases and
add them to CI using tools like Terratest, awspec, Chef
InSpec, and Kitchen-Terraform. When possible, use
emulators like LocalStack and Firebase Local Emulator Suite
instead of the actual cloud instances to save costs.
5.Finally, you’ll do end-to-end testing of the infrastructure
components to confirm that the components can interact
with each other in the expected way—for instance, the web
server can make a call to the application services. This
testing, in a way, gets covered when the application code is
deployed successfully and the functional tests run smoothly.
But infrastructure tests help you catch issuesbefore
deploying the application.
In his bookInfrastructure as Code, 3rd edition (O’Reilly, 2025), Kief
Morris suggests that the distribution of infrastructure tests in
architectural layers may form a diamond pattern instead of a
pyramid. This is because he recommends keeping unit tests for low-
level declarative code, such as that in Terraform, to a minimum.
Depending on the nature of your infrastructure code, add tests in
the appropriatelayers.

TIP
IfyouarenewtoIaCandsomeoftheautomatedtestingtools
mentionedabove,tryPulumi’sonlineAIinterface,whichletsyou
prompttogeneratebothinfrastructurecodeandautomatedtests.
Other aspects of infrastructure to test are scalability, security,
compliance, andoperability:
Scalability
Test that instances autoscale based on load and that the
application features work smoothly after scaling.
Security
Tools likeSnyk IaCcheck for potential vulnerabilities in
infrastructure code during development. Some security test cases
(like checking for unexpected open ports and appropriate public-
and private-facing instances) can be tested manually and by
writing automated infrastructure tests.
Compliance
Sometimes infrastructure code needs to adhere to certain policies
and compliance features. For instance, you need to set up
firewalls to be PCI DSS–compliant (see“Compliance Testing”).
This is popularly referred to as “policy-as-code” and is built into
tools like HashiCorp’s Sentinel, Checkov, and Open Policy Agent
(OPA).
Operability
Test all other operational features, such as log archiving for
auditability, monitoring tool integration, and automated
maintenance features.

Depending on the complexity and nature of the infrastructure code,
you can write automated tests for these cases and integrate them
with CI.
Many automated infrastructure testing tools are still evolving and
require coding skills in multiple languages: Terratest uses Go,
terraform-complianceuses Python, and awspec uses Ruby. AI
coding assistants can help overcome this to an extent. Many tools
also still require real infrastructure to be up and running, incurring
costs. Design your infrastructure testing strategy to be sustainable
within the givenconstraints.
ComplianceTesting
Two commonly implemented regulations on the web are the GDPR
and WCAG 2.0.Chapter 9discussed WCAG 2.0 at length; here, I will
briefly explore the GDPR, then take a quick look at some payment-
related regulations. This section is only a brief introduction to these
regulatory requirements, not legal advice; engage with legal advisors
to get details specific to your application and domain.
General Data Protection Regulation (GDPR)
The European Union’sGDPRprimarily aims to protect the private
data of EU citizens. If your website sells goods to EU citizens, then
your website will be subject to GDPR compliance. Similarly, if a US
school admits EU citizens via its website, the site has to abide by
GDPR requirements. Noncompliance may result in heavy penalties—
as high as 4% of the company’s annual revenue.
As of 2025,79% of countrieshad data protection and privacy laws
in place. For example, Canada has the Consumer Privacy Protection
Act (CPPA) and the post-Brexit UK has its own GDPR (which uses the
same initialism).
The EU GDPR definesprivate dataas any information that, on its
own or combined with other information, can be used to identify a

living individual, such as their racial or ethnic origin, religious or
philosophical beliefs, political opinions, sexual orientation, genetic or
biometric data, and past or present criminal convictions, as well as
online identifiers like IP addresses, media access control (MAC)
addresses, mobile device IDs, cookies, user account IDs, and other
system-generated data. Such information is classified assensitive
personal dataand needs to be carefully protected. (Data security
measures are discussed inChapter 7.) The GDPR recommends that
development teams implement thePrivacy by Designframework,
developed by Dr. Ann Cavoukian.
The GDPR alsoprotectsusers’ rights to control their data, including
the following:
Right to be informed
You need to let the application’s users know how their personal
data is used, typically through the site’s privacy policy.
Right of access
Users have the right to request their stored personal records.
Right to be forgotten
Users can request that the site owners delete their personal data
when there is no compelling reason to keep it.
Right to restrict processing
Users can prohibit sites from processing their personal data (such
as for AI training), even if they’re still storing it.
Right to rectification
Users can correct incomplete or inaccurate data.
Right to portability
Users can obtain and reuse their personal data.

Right to object
Users can object to their personal information being used for
marketing, research, and statistics, as well as to AI processing.
Rights related to automatic decision making
Sites must obtain users’ consent before using their profiles for
automated decision making.
THE GDPR AND THE AI ACT
As I write this in 2026, the GDPR covers AI-infused products; a
separateAI Actwent into effect in early 2024. The AI Act
prohibits businesses from using AI for social scoring, emotional
recognition at the workplace, predicting whether someone will
commit a crime, and so on. It also vividly lays down the need for
transparency and mandates copyright regulations for general-
purpose AI models. However, the EU is considering aDigital
Omnibusproposal to relax many of these restrictions, aiming to
expand technical innovation and EU businesses. For instance, the
proposal would allow businesses to use personal data to train AI
models without prior approval, considering this a “legitimate
interest” for business sustenance.
Most of these requirements can be verified using the functional and
security testing discussed in Chapters3and7. For instance, you can
add automated micro- and macro-level tests to assert that there is
no implicit opt-in, that personal data is stored only after obtaining
the user’s consent, and that personal information is not stored in
application logs.
Payment regulations: PCI DSS and PSD
If your application deals with credit-card payments or provides
payment services to the EU region, two regulations come into play:

Payment Card Industry Data Security Standard (PCI DSS)
PCI DSS is a global standard defined by thePCI Security
Standards Councilto protect online card transactions. It applies
to any entity that stores, processes, or transmits cardholder data
—in short, sites that take credit card details, even donation sites.
PCI DSS is a mandatory standard expected by banks and
merchants; payment processors’ contracts specify fines for
noncompliance. PCI DSS provides12 security guidelinesfor credit
card transactions. Companies can usually validate their
compliance through a self-assessment questionnaire.
Payment Services Directive (PSD)
ThePayment Services Directivewas implemented in the EU to
prevent online payment crimes and increase competition in the
payment industry. Compliance is mandated by law. If you are
building an application that provides payment services to
customers in the EU, you should pay attention to PSD
regulations.
An updated version, PSD2, went into effect in 2025. It
emphasizesstrong customer authentication (SCA)features
(similar to multifactor authentication) and reaches beyond the EU
region, calling for compliance if even one leg of the transaction
involves an EU member state. Businesses can choose a compliant
payment services provider likeStripeorPayPal, or build SCA
features into their applications.
To summarize, the first step in compliance testing is understanding
the legislation. The second is to use CFR testing to verify
compliance. Once the application is tested and ready, the legal team
or an authorized entity must certify compliance.

Perspectives:EvolvabilityandtheTestofTime
I have discussed how to harness quality by testing your application’s
functional and cross-functional requirements. However, software
requirements are not set in stone at the beginning of a project. They
change continuously along with market needs, and if not
shepherded wisely, new requirements almost always threaten the
existing implementation. For instance, a team member could hastily
override encryption in order to improve performance and
compromise the security of the entire application.
This is the core premise of the bookBuilding Evolutionary
Architecturesby Neal Ford, Rebecca Parsons, and Patrick Kua
(O’Reilly, 2017), in which the authors prescribe a new CFR.
Evolvabilityis the system’s ability to preserve the existing
architectural characteristics that facilitate a given set of functional
and cross-functional requirements (such as a layered architecture,
data persistence methods, and encryption at rest and in transit),
while incorporating new changes. In order to achieve evolvability,
they recommend building appropriate guardrails to give teams
instantaneous feedback whenever they deviate from the most
essential architectural characteristics. These guardrails can come in
the form of automated tests for functional and cross-functional
requirements (such as performance tests, security scans,
accessibility audits, architecture tests, and micro- and macro-level
functional tests), as well as code coverage metrics, static code
analyzer metrics, and so on. This ensemble of tests and metrics,
collectively referred to asfitness functions, guides teams in making
incremental changes without compromising the existing
implementation, and in the process, they can create an evolutionary
architecture.
The functional and cross-functional testing methods and tools you’re
learning in this book will all aid you in building an evolutionary
architecture that stands the test of time, in addition to imbuing high
quality today.

KeyTakeaways
Here are the key takeaways from this chapter:
Cross-functional requirements, commonly called non-
functional requirements, define an app’s executional and
evolutionary qualities and are as essential as functional
requirements.
CFRs apply to a wide breadth of the application’s features
and must be developed and tested as part of each user
story. You can make a CFR checklist part of every user story.
The FURPS model abstracts themes out of all the software
requirements. This chapter provides a CFR testing strategy
for all five themes in the FURPS model, which you can
customize based on your project’s needs.
Shift your CFR testing to the left by automating these tests
and integrating them with CI.
Chaos engineeringis an iterative, team-based
experimentation method to unveil flaws that might make an
application unreliable.
Tools like ArchUnit and JDepend assert an app’s architectural
characteristics to sustain its evolutionary code qualities.
Infrastructure testingis an emerging area in testing and is
needed when you need to scale an application quickly.
Automated tools are still evolving and can incur additional
costs in terms of knowledge ramp-up and test deployments.
The GDPR and WCAG 2.0 are common regulations that apply
to web applications. Testing for compliance with them and
other data regulations requires a thorough understanding
and legal advice.

Turning functional and cross-functional tests into fitness
functions helps teams deliver high-quality software and
create evolutionary architectures that will stand the test of
time.
1
See,forinstance,MarkRichardsandNealFord,FundamentalsofSoftware
Architecture,2ndedition(O’Reilly,2025).
2
DevelopedatHewlett-PackardandoriginallydescribedbyRobertGradyin
hisbookPracticalSoftwareMetricsforProjectManagementandProcess
Improvement(PrenticeHall,1992).

Chapter 11.Mobile Testing
I can’t think of a single other object that serves the multitude of
purposes that a smartphone does. We use mobile devices to shop,
entertain ourselves, pay bills, and organize our calendars. As of
2025, there were7.3 billion smartphone mobile network
subscriptionsand overa billion tablet users worldwide—and more
than4 million appsavailable in the leading app stores. All of this
means that mobile testing is an important skill. This chapter explores
how mobile testing is different from web testing and introduces the
mindset and tools you’ll need. You will learn a strategy to fully test
the mobile layer, including automated functional testing as well as
performance, security, accessibility, visual, and CFR testing. The
guided exercises cover AI-assisted manual exploratory testing and
agentic test authoring.
BuildingBlocks
There are three main areas to consider when approaching the
mobile landscape: the devices, the apps themselves, and the
network (seeFigure 11-1). Let’s take a look at each in turn, then
discuss the architecture of mobile apps.

Figure11-1.Themobilelandscape
Devices
Mobile devices vary along several dimensions that you need to
understand in order to decide which devices to use for testing.
Generally, aim to provide testing coverage for at least 85% of target
devices. You should factor in several distinct device dimensions when
deciding on your testing strategy: screen size, pixel density, OS,
hardware, and the manufacturer.
Screen size
Mobile devices includetabletsandsmartphones, and their screen
sizes vary significantly. Screen size also differs within the same
device depending whether it is held in landscape or portrait viewing

mode, and many devices offer split-screen viewing of multiple apps,
further subdividing the available screen space.
Screen size has a major impact on the user experience, which makes
designing, developing, and testing for different screen sizes critical.
For example, on smaller screens, the user might have to scroll to
view the entire page, whereas on larger screens there may be a lot
of empty space—neither of which is necessarily a welcoming UX.
Pixel density
Apixelis a small square area on the screen that carries a piece of
the information displayed, andpixel densityis the number of distinct
pixels that can fit into a square inch of the screen. The greater the
density, the better the viewing experience. Even devices with the
same screen size can havedifferent pixel densities, categorized as
low, medium, high, extra high, extra-extra high, or extra-extra-extra
1
high. This dimension of mobile devices particularly affects image
rendering, since certain devices automatically resize images to
accommodate the screen size, resulting in blurring or distortion.
Hence, images must be specifically designed and programmed for
various devices’ respective pixel densities, and this must be included
intesting.
NOTE
Ascreen’sresolutionisanindicationofthenumberofpixelsthatitcan
displayhorizontallyandvertically.Forexample,ascreenwitha
resolutionof1,024x768candisplay1,024pixelshorizontallyand768
verticallywhenthedeviceisinlandscapeorientation.
Operating system
Just as the desktop world has Windows, macOS, Linux, and other
operating systems, the mobile world has Android, iOS, HarmonyOS,
KaiOS, and so on. As you can guess, Android and iOS take the top

two places, accounting forabout 99% of mobile OS usageacross the
globe. Many older versions of each OS are still officially supported
and widely used. This is referred to asfragmentation. For example,
as of 2025,Android 13.0(released in 2022) was the second most
widely used Android version, while Android 15.0 took first place.
Your testing scope should include different OS versions, too, as some
versions may not support certain features or might handle them
differently.
Hardware
Hardware configurations, such as RAM, CPU, battery capacity, local
storage capacity, and built-in device capabilities such as the GPS,
camera, microphone, touchscreen, and other hardware sensors vary
from model to model. Hardware affects app performance in terms of
parallel processing, rendering speed, and overall user experience.
This dimension may even impact the app’s core functionality. For
instance, a mobile app designed to gather survivor information
during disasters such as tsunamis or cyclones must take care not to
draw too much battery power. Depending on itspurpose, you may
need to design, develop, and test your app with stringent hardware
constraints in mind.
Device manufacturer
Some mobile device manufacturers have their own custom Android
versions, such as the Cyanogen OS, OxygenOS, and HydrogenOS.
Each device manufacturer follows its own hardware design, such as
providing a hardware keyboard or a side-mounted fingerprint sensor.
These nuances must be accounted for while developing and testing
mobile apps.
AppTypes
Mobile applications enable a varied suite of interactions beyond
clicking and typing: you can swipe, touch, long press, pinch and

zoom, press and drag, rotate, and more. These gestures and
interactions are a large part of what makes mobile usage attractive
and personalized. A subset of these interactions may be made
commonly available across an app, such as swiping left to right on
any page to display the menu, or swiping upward from the bottom
of the screen to bring up additional features of the current
functionality. Such common interactions become cross-functional
requirements across the app and need to be designed, built, and
tested as part of every user story.
The possibility of enhanced interactions, however, is constrained by
the app type. There are currently five frequently adopted types of
mobile apps: native, mobile web, hybrid, cross-platform, and
progressive web.
Native
Native appsare developed to work mainly on a single mobile OS,
such as Android or iOS. They can provide excellent performance,
offer access to the device hardware and all the OS features and APIs
(including gestures), can work offline, and have a consistent and
harmonious look and feel. Android-native apps are typically written
in Java or Kotlin, while iOS apps are developed with Objective-C or
Swift. They are distributed via Google Play and the Apple App Store,
respectively. These distribution platforms have compliance guidelines
and approval processes after an app or app update is submitted and
before it is made available to the public (even for urgent bug fixes!).
Another significant downside is the high development cost, as a
separate native app has to be developed for each target operating
system.
Mobile web
Mobile web appsare websites accessed using mobile web browsers.
They are OS-independent; require no installation, local storage
space, or app store approval; and can be developed with standard

web development technologies such as HTML5 and CSS. However,
they don’t have access to OS features such as the contact list and
camera and provide limited offline support, constraining the user
experience.
Hybrid
Hybrid apps bring benefits from both the native and web worlds. A
hybrid appis developed using standard web development
technologies and then wrapped in a native container that provides
access to OS-related APIs. Although these apps must be submitted
to an app store for distribution, their web elements can be hosted on
a server and fetched over the network, which makes updating these
parts of the app easier and doesn’t require the store’s approval
process. However, this constrains offline viewing, so they usually
store a minimum set of selected content locally to enable offline
viewing. These apps are built to work across different OSs, which
may alienate users who are accustomed to using their apps in a
certain way in their preferred OS. Overall, the hybrid approach eases
development and reduces development costs, although the
performance and user experience may not be on par with native
apps. This makes hybrid apps a good choice for releasing a
minimum viable product quickly.
Cross-platform
Like hybrid apps, cross-platform apps have a single unified codebase
that can run on multiple OSs. They are written using frameworks like
Flutter and React Native that provide an enhanced user experience,
with offline capabilities and smooth, complex animations. Many
teams choose cross-platform apps over native apps when they have
to optimize development efforts. However, the latest OS features
may not be available for these frameworks immediately, as they are
in the native apps, and cross-platform apps can be larger than native
apps. For graphically intensive apps such as gaming, native apps are
still preferred over cross-platform apps.

Progressive web
Progressive web apps(PWAs) are advanced versions of mobile web
apps. Users can install them on their devices via a URL, and they
take up very little storage space. Even though they are web apps,
they can provide push notifications, can work offline, and have
access to OS features, making the experience similar to a native
app. Their performance is also on par with native apps, and since
they are web apps, they work across OSs and browsers.
Development also costs less than for native and hybrid apps. Given
these benefits, companies like Starbucks, BMW, and Facebook have
adopted PWAs quickly.
The type of app you choose to build will dictate your testing scope in
terms of testing for offline versus online behavior, OS-specific feature
support, app update behavior, interactions, and so on. With that,
let’s get to the last major consideration: thenetwork.
Networks
People across the planet do not have equal access to high-speed
networks. While low bandwidth is often a problem in remote
locations, even within urban areas, network connectivity is not
consistent. So, when your app depends on network connectivity, you
need to support different mobile network types (such as 2G, 3G, 4G,
and 5G), WiFi, and being completely offline. You will have to test
how your app handles network timeouts, error displays on network
oscillations (like switching between 4G and 3G), offline activity, and
launch performance with various network types. You might even
have to design the app with such constraints in mind. For example,
theFacebook Lite appaddresses network bandwidth issues: it can
work with 2G and generally provides seamless operation with
unstable networkconnections.
Next, we’ll dig a bit deeper into the architecture of a mobile app.

Architecture
As you learned inChapter 2, a web app has a web UI that receives
user requests, as well as services that process the requests by
collaborating with the database layer. A mobile app’s architecture
isn’t very different: the mobile UI replaces the web UI layer, but the
rest tends to be more or less the same (Figure 11-2).

Figure11-2.Mobileapplicationarchitecture

Note the extra component, the local database, in the mobile layer.
This is where native and hybrid apps store selected data, such as the
username, profile picture, and last fetched content, to support offline
behavior and accelerate app rendering time. The rest of the flow is
similar to that in a web app: the mobile app calls services over the
network and completes users’ requests. So your testing approach to
the services and the database layer remains the same: you’ll do
micro- and macro-level testing and write unit, integration, and API
tests. You’ll also test for services’ performance, security, legal
compliance, and other CFRs. In addition, you should perform mobile
UI–specifictesting.
NOTE
Togetadeeperunderstandingoftheinteriorcomponentsofamobile
UIlayer,exploreGoogle’sAndroidarchitectureguide.
MobileTestingStrategy
The very first item to consider in your mobile testing strategy is the
list of devices you will be testing against. Again, while 100% is
unlikely to be viable, the goal is to provide testing coverage for 85%
of the target customer segment for every user story on all
permutations of the devices (screen sizes, OSs, hardware, and so
on). Testing on all Android versions and devices from every
manufacturer would be time-consuming and expensive, especially in
an iterative development process such as Agile or Scrum. Here are
questions you can use to narrow down your device to meet the goal
of 85% coverage, as illustrated inFigure 11-3:
What are the target customer segments of the business? If
it’s a high-end apparel business that targets the affluent, you
can set aside lower-end handsets.

To which specific markets or countries does the business
want to expand, and what are the top OSs and vendors in
those markets?
If the business already has an online presence, what does
device-specific usage look like? For example, their existing
web app could be accessed mostly from iPhones and
Samsung tablets. From the usage pattern, you can find the
popularly used devices.
What is the network bandwidth range available in the target
markets? For example, the average mobile network speed in
Europe is estimated to be about62 MBps, which means the
majority use 4G or above. The network criteria are especially
important when dealing with lower-end phones.

Figure11-3.Mobiledevicesfilteringstrategy
Once you answer these questions, you can select three or four
handsets that have the appropriate characteristics, and perhaps a
few more nice-to-have devices to check out during bug bashes.

NOTE
Selectthedevicesfortestingatthebeginningoftheproject.Onceyou
chooseyourdevices,youshoulddoacostanalysistodecidewhetherto
buythemorsubscribetoacloud-hosteddeviceprovidersuchasthe
AWSDeviceFarm,whichletsyourunautomatedtestsontheirhosted
realdevices(butwithpotentiallyslowerinteractions).
Figure 11-4shows a testing strategy for the mobile UI layer. Next,
we’ll discuss the complexities posed by the mobile landscape.
Figure11-4.Amobiletestingstrategy

ManualExploratory Testing
Exploratory testing is especially important in the mobile landscape
due to the myriad of device, app, and network combinations for test
cases. The exploratory testing techniques and strategy you learned
inChapter 2will help here as well, and applying them through these
three lenses (devices, networks, and apps and interactions) will let
you inspect the app’s behavior comprehensively. You can also use
the option provided by Chrome DevTools to view websites in any
given mobile screen resolution (discussed inChapter 8in“Chrome
DevTools Performance Panel”).
To explore other app types, you can either purchase the devices that
you’ve decided to use for testing or useemulatorsorsimulators,
programs that create a virtual device environment on a computer.
(We’ll look at the setup of an Android emulator later in this chapter
in“Exploratory Testing”.) Emulators and simulators do have
limitations in mimicking some hardware features, including certain
touch gestures, and sensor integrations. Personally, I find testing
with these tools insufficient to call an app version ready for release,
and the industry agrees—both Apple and Google recommend testing
on real devices before release. You may find emulators and
simulatorsuseful for quick code checks during test development, but
in general, only use them in the absence of real devices or for quick
sanity checking.
TIP
InanAgiletestingenvironment,youcaneasilyshiftdevicetestingto
theleft.Forexample,thedevelopercanusethemostchallenging
resolution(LDPIorMDPI)duringdevelopment.Duringdev-boxtesting
(discussedinChapter1),thebusinessanalyst,QAengineer,and
developercaneachtestononedeviceversion.Andforregression
purposes,theautomatedtestscanrunonasetofchosendevicesinCI.

FunctionalAutomatedTesting
You can automate the app’s functional behavior and interactions
using unit and UI-driven functional end-to-end tests. Just like
functional tests for web apps, you’ll need to plug them into the CI
pipeline to get continuous feedback. You can also use end-to-end
tests to confirm that the app features work reliably across a set of
target devices by running them either as smoke tests or nightly
regressions. Appium, Detox, and Espresso are widely used for
writing UI-driven end-to-end tests for Android, while Appium and
XCUIAutomation are popular for iOS. Espresso and XCUIAutomation
can only be used for native apps, but Appium can automate all four
app types (native, hybrid, cross-platform, and mobile web apps).
You’ll learn to set up agentic mobile UI automation framework
creation and test-authoring workflows in“UI Functional Tests”in this
chapter.
DataTesting
Mobile apps store data in various layers for different purposes
(Figure 11-2). They can use a local mobile DB, a common database,
and local device storage to store and retrieve data. It is essential to
understand the data flow to all of these storages. For example, a
social networking app like Facebook could store the most recent
posts in the local mobile DB so that it can quickly render the app
when network conditions are unstable. In such use cases, think
about the user experience: Will the app show stale information? How
much data can be stored in the local database? How will you keep
the local database in sync? Also, test data syncing to all the devices’
databases.
The common database should trace the transactions made from
different devices and have a mechanism to update the appropriate
data without conflicts, such as saving calendar events from different
mobile devices and syncing them when the network is available. This

has to be tracked and updated in the common database. You can
automate these scenarios as micro- and macro-level functional tests,
too, and you learned a few relevant tools inChapter 5. In summary,
it’s essential to test the two-way data sync between the common
database and the local mobile DB across devices, bound by network
conditions.
In addition, test any functionalities that require storing and retrieving
files using local device storage. Consider boundary conditions for
both internal and external device storage (like when storage is full or
unavailable) and the limitations of the OS for processing different file
formats.
VisualTesting
Visual testing will be covered when you do manual device testing.
You can also automate visual testing for different screen sizes using
Appium orApplitools Eyesfor regression purposes. Applitools Eyes,
discussed inChapter 6, is a paid service that employs AI to
automate the visual testing of mobile apps, while Appium is open
source. An exercise to automate visual tests using Appium is in
“Appium Visual Testing Plug-in”in this chapter.
SecurityTesting
Chapter 7discussed security testing, which applies to mobile testing
as well. The shift-left security testing strategy—conducting threat
modeling exercises using the STRIDE framework, performing SAST
and DAST followed by penetration testing—is still intact in the mobile
context. In particular, be sure to address theOWASP top 10 risks for
mobile apps.
You can use tools that automatically scan the static application code
and inject known attacks to detect vulnerabilities at the services
layer in mobile applications. For the mobile UI layer in Android, iOS,
and Windows, I’ll show you an open source automated static and

dynamic security scanning tool called theMobile Security Framework
(MobSF).
The mobile app security testing space has evolved since the last
edition of this book: recent tools include Frida, Snyk Code,
Checkmarx, and more. If you’re keen to specialize in this space,
OWASP’sMobile Application Security Testing Guideand code demos
are a good starting point.
PerformanceTesting
FromChapter 8, you know how to set up automated
load/stress/soak tests for your services. Continue to measure and
monitor them.
In the mobile UI layer,performancecan mean different things than
in a web UI, since mobile apps typically operate in a resource-
constrained environment with limited and shared CPU, memory,
battery power, and network conditions. To consolidate the mobile
performance testing approach, ensure two key criteria are met: the
app should not monopolize or deplete any of the device’s critical
resources, such as CPU, memory, and battery power, and it should
respond quickly to end users’ actions.
To test the first point, you can use profiler tools like theAndroid
profilerin Android Studio andXCode Instrumentsfor iOS. Add
validations on resource consumption as automated unit tests and
integrate them with your CI pipelines for continuous performance
testing. Appium provides a similar API for Android apps, discussed in
“Additional Testing Tools”in this chapter.
While testing for the second point, pay particular attention to the
app launch time, or the time taken from clicking the app icon to the
time it opens. This should beless than five seconds. Similarly, the
response to any kind of action inside the app should be under three
seconds, or the bounce rate increases. Delays, however, are
impacted significantly by network bandwidth when there are calls to

services. You can simulate different network conditions in your
emulator or simulator to measure the app’s response time.
Another part of in-app performance testing is stress testing: to
stress the app, trigger multiple actions rapidly, such as touching
several buttons, zooming in and out, sending requests, and
navigating across pages, to see if the app crashes. Android comes
with a tool called Monkey that conducts automated stress testing;
we will explore that tool later in this chapter.
It is also essential to continue to monitor the app’s performance in
production;Google’sAndroid vitals dashboardreports consolidated
data from real users across the globe about stability, battery
consumption, crashes, and more.
AccessibilityTesting
The W3C WAI (discussed inChapter 9) provides detailed guidelines
on how toapply WCAG to mobile applications. As with its web
accessibility guidelines, it states that the mobile app should be
perceivable, operable, understandable, and robust. Some of the
features to test for include the following:
Can you zoom in and out?
Is it readable on small screens?
Is there adequate color contrast between elements?
Do buttons have a reasonable amount of click space?
Is the layout consistent throughout the app?
Do the correct elements appear within the view area without
the user needing to scroll?
iOS provides the following tools for accessibility testing:

TheXCode Accessibility Inspectoris available in iOS
simulators to conduct an accessibility audit and report a few
common accessibility issues, such as insufficient color
contrast and missing element descriptions. It also checks if
elements’ accessibility-related attributes are appropriately
set, which is helpful for debugging.
XCUIAutomationfetches elements using the accessibility
tree; accessibility-related assertions can be added as
automated tests.
The VoiceOver screen reader is available on physical iOS
devices and simulators and can be used for end-to-end
testing of user flows.
Android has more elaborate support for shift-left accessibility testing:
TheAndroid Studiodevelopment environment’s linter can be
configured to show warnings for various accessibility issues.
Espresso(and Robolectric, prior to version 4.5) is a native
Android app Ul test automation tool that scans each view of
the application for accessibility provisions. These tests can
be integrated with an existing Espresso test suite and run in
CI.
TalkBack, Android’s built-in screen reader, can be used for
end-to-end testing of user flows.
Accessibility Scanneraudits mobile apps for accessibility
issues and can be used during the user story manual testing
phase.
Android’s Switch Access feature enables “switches” that
allow external assistive devices to interact with apps. It
supports BrailleBack to connect a Braille display to the device
and Voice Access to control an Android device with spoken
commands.

During app submission, the Google Play store even provides pre-
launch accessibility audit reports to teams.
Axe DevTools for Mobile, an AI-powered accessibility platform by
Deque (Deque was discussed inChapter 9) is a commercial plug-in
used as part of Appium’s test suites. Similar to the web version, it
conducts automated accessibility scans while Appium tests run. It
supports both iOS and Android and all types of mobile apps,
including cross-platform and native apps.
OtherCFRsforTesting
Chapter 10called out a list of CFRs, some of which this chapter has
already covered. The others—like auditability, portability, reliability,
compliance, and compatibility—remain relevant in mobile testing too,
as does the FURPS strategy for picking the right testing techniques.
Here are a few critical mobile UI-specific CFRs:
Usability
Most adults spend two to three hours a day on their phones, so
usability is a major concern. Users might download an app based
on hype and fanfare, but they’ll only keep using it if they can
personalize it with language support, hands-free options, and the
like, so consider these aspects while testing. The usability testing
approach fromChapter 10can be applied here; do a preliminary
study on end user behaviors in your target market/regions. To
kickstart your research,Think with Googleprovides detailed
infographics and reports on mobile user behavior in several
countries.
Reliability: interruptions
This is a mobile-specific flavor of the reliability CFR. Since mobile
devices are used for diverse purposes, any app flow can be
interrupted by external distractions. Typical user behavior is to
keep the current app in the background while attending to

incoming phone calls or chat notifications, then resume the app
flow.
It’s important to account for interrupting behaviors in mobile
testing. What happens to the current request if the app is
suddenly parked in the background? What happens with
authentication when the app is paused, then resumed from the
background? What happens with an ongoing request when the
app is killed or closed abruptly? What happens if the device runs
out of battery power during the app workflow? This needs to be
tested across the app.
Installability and upgradability
Testing app installation on different devices and OSs is essential.
Installation requires a certain amount of local storage space, and
the app may ask users for permissions to access device hardware
or other apps. Test these installation scenarios—including failure
cases, such as insufficient storage space, denial of app
permissions, and incompatibility with the device’s OS version.
Test uninstallation, too. Ensure that no existing flows are broken
by changes. The user should not be logged out of the app after
the upgrade unless necessary for security reasons. Remember to
test upgrading from older versions of the app, not just from the
latest app version. If upgrades require newer app permissions,
test those as well. Since installation and upgrades depend on
network conditions, include various network-related scenarios.
Monitoring
Unlike web applications, mobile app crashes are pretty common,
so monitoring is a critical CFR. Sometimes the conditions that
cause an app to crash are hard to reproduce, and monitoring
tools (likeFirebase Crashlytics,Dynatrace, orNew Relic) can be
key to understanding the issue. Integrate these tools into the test

environment during the development to make it easier to debug
app crashes.
You can automate testing of some of these CFRs, such as successful
installation and upgrades andbehavior upon interruption, using
functional micro- and macro-level tests to get continuous feedback—
recall the continuous testing strategy fromChapter 4here.
Let’s build test suites using some of the tools mentioned in this
section.
Exercises
The exercises here will guide you through AI-assisted manual
exploratory testing, using the Appium MCP tool, and agentic mobile
UI automation framework creation and test authoring, using Claude
Code and Appium. I’ve chosenAppiumbecause it supports
automation on all four types of mobile apps (native, web, cross-
platform, and hybrid) and works across multiple OSs.
ExploratoryTesting
You conducted AI-assisted exploratory testing on web applications in
Chapter 2using Claude Projects and Playwright MCP. You’ll use a
similar setup here, this time with the Appium MCP tool. Similar to
Playwright, Appium MCP allows LLMs to use Appium’s capabilities to
navigate mobile applications on Android and iOS.
Setup
The first step is to get the app running on an Android emulator
instance:
1.Download and set upAndroid Studio, which includes the
Android SDK and tools.

2.In Android Studio, select Tools → Device Manager.
3.Click Create Virtual Device to see a list of existing hardware
profiles for tablets, phones, Wear OS devices, and more.
Choose the Phone category and select a profile—say, Pixel 2,
5.0 inches—then click Next.
4.Select an Android OS version, such as Android 8.0 or any
recent version. You’ll be given the option to download it if
you don’t have it already.
5.Provide a name for the emulator on the next screen—say,
“Oreo”—and click Finish. Your Android 8.0 Pixel 2 emulator
should now appear in the list of available virtual devices.
6.Click the “Start” icon to start the emulator.
Then download the demo Android appApiDemos-debug.apkfrom
Appium’s GitHub repository. Drag and drop it inside the emulator to
install, then open it up and take a look around.
Workflow
Next, you will create a Claude project that fetches the acceptance
criteria for a given user story from Jira, reads the exploratory testing
guidelines from Confluence, and autonomously explores the demo
app.
Refer to the exercise“Test Case Generation”fromChapter 2to set
up Claude Desktop and MCP Atlassian, if you haven’t already. Then
follow these steps:
1.Create acapabilities.jsonfile with the configurations shown
inExample 11-1.
Example 11-1.capabilities.jsonfor Appium MCP tools
{
"android": {
"appium:platformName": "Android",

"appium:app": "/path/to/ApiDemos-debug.apk",
"appium:deviceName": "Android Device",
"appium:platformVersion": "8.0",
"appium:automationName": "UiAutomator2",
"appium:udid": "emulator-5554",
"appium:noReset": false
}}
2.Add the Appium MCP tool configurations shown in
Example 11-2to theclaude_desktop_config.jsonfile. Specify
thecapabilities.jsonfile path and the Android SDK path.
Example 11-2.Appium MCP configurations
"appium-mcp": {
"disabled": false,
"timeout": 100,
"type": "stdio",
"command": "npx",
"args": [
"appium-mcp@latest"
],
"env": {
"ANDROID_HOME": "/path/to/Android/sdk",
"CAPABILITIES_CONFIG":
"/path/to/capabilities.json"
}
}
3.Create a new user story in Jira with a set of acceptance
criteria (AC) as shown inExample 11-3. The user story talks
about the Views section on the home page.
Example 11-3.Android demo app user story sample
SCRUM-10
Create Views Section in the Demo App
Acceptance Criteria:
- The Views section should be accessible from the app
home page.

- On clicking the Views section, the app should take the
user to a list view
with all the available capabilities arranged in
alphabetical order.
- On clicking the 'ImageButton' from the Views list, it
should take the user to
a new page with three buttons.
- On selecting the 'ImageView' section from the Views
list, there should be a
new page with images.
4.Create a new Claude project (similar to that in“Test Case
Generation”inChapter 2). Call it “Mobile UI Exploratory
Testing” and provide the instructions inExample 11-4.
Example 11-4.Mobile UI Exploratory Testing Claude project
instructions
You're a professional mobile software tester. When asked
to explore a story in
Jira, follow the steps below:
Steps:
Step-1: Use MCP tools to study the user story acceptance
criteria from Jira.
Step-2: Use MCP tools to get the epic description of the
user story from Jira.
Step-3: Use MCP tools to LAUNCH the app first and explore
the functionality.
DO NOT limit the exploration only to those acceptance
criteria from the story or
epic but keep the exploration only to that single
functionality specified in the
user story. DO run steps one by one using the tools
provided in Appium MCP to
explore that 1 specified functionality in the user story.
Step-4: Use MCP tools to study the exploratory testing
guidelines from
Confluence page
https://confluence/Exploratory+Testing+Guidelines
Step-5: Apply learnings from steps 1,2,3 to generate
functional test cases using

"Given, When, Then" format as shown in the example below.
But DO NOT restrict
the test cases only to those learnings.
Step-6: Apply learnings from steps 1,2,3 to generate test
cases for each of the
non-functional requirement categories mentioned in the
epic using "Given, When,
Then" format as shown in the example below.
Step-7: Group the test cases under the "functional
requirements" category and
create a separate category for each of the cross-
functional requirements
mentioned in the epic.
---
Example test case:
Given the user is on the home page
When they click on search button
Then they should see a list of suggestions for search
items.
---
Now, when you prompt “Explore SCRUM-10 using Appium MCP
tools” within the Claude project you just created, it will follow the
instructions to fetch the user story, launch the app on the Android
emulator, and execute the acceptance criteria one by one, navigating
through the app and listing the key findings.Figure 11-5shows an
example.

Figure11-5.AI-assistedmanualexploratorytestingusingAppiumMCPtools
WARNING
LLMsmaynotlistentoeveryinstructionyouspecify,anditsoutputmay
notbefullytrustworthy.Inoneinstance,whenIaskedittoexecute
acceptancecriteria,ClaudecouldnotgobacktotheViewspageonthe
emulator,butitassumedthattheAC4userflowlookedsimilartoAC3
anddeclaredit“Verified”onthatbasis(seeFigure11-6)!So,continue
to“trustbutverify.”

Figure11-6.AIexploratorytestingwarningexample
Claude also produced around 85 test cases, covering the following:
Functional and cross-functional requirements
Mobile device variation
Memory leaks
App caches
Accessibility features
UI stress-testing cases (such as multiple clicks)
Gesture-related test cases (like touch and scroll)
Boundary conditions (like long lists)
Interruption-related cases (like the app being in the
background or killed and relaunched)
Overall, it’s a helpful starter kit that needs to be enriched with
project-specificknowledge.
UIFunctionalTests
You learned inChapter 3how to set up an agentic test-authoring
workflow for services and web applications. In this exercise, you’ll
create a Claude Code agent that will set up a Java-based Appium
mobile UI automation framework and have it write the test code for
a test case. Continue using the demo Android app from the previous
exercise.

Setup
Appiumis an open source cross-platform automation tool supported
by a vibrant community. It bundles OS-specific automation
frameworks, such as iOS’s XCUIAutomation and Android’s UI
Automator, under a common set of wrapper APIs—the WebDriver
APIs you met inChapter 3. Appium’s APIs are the same across OSs.
For example, Appium uses theDesiredCapabilitiesobject to
instantiate the driver object to interact with the app. The
findElements(By.id),click(),isElementPresent(), and
other APIs remain the same. As a result, the learning curve is very
light if you are comfortable using Selenium WebDriver for automated
testing. Like WebDriver, Appium is language-independent, so you
can write tests in the programming language of your choice.
To get started, you’ll need the following:
Node.js, to set up the Appium server
The latest version ofJava(you’ll be using Appium’s Java
client library for this exercise)
An IDE such asIntelliJorVSCode
Maven
An Android emulator (you should have this up and running
from the previous exercise)
You can also download theAppium Inspector, a GUI tool that finds
element locators in a mobile app (Figure 11-7).

Figure11-7.Desiredcapabilitiestoconnecttothedemoapp
You’ll need to manually install the Appium server, Appium’s Java
client library, Appium UiAutomator2 Driver, and dependencies like
TestNG. Sometimes the setup steps can wear you down when one
dependency is out of sync with the others, so let’s delegate that task
to a Claude Code agent, along with the task to write the first UI test
using the page object model.
Workflow
First, set up Claude Code in your VS Code terminal (refer to the
exercise“Workflow: Agentic Test Authoring with Claude”from
Chapter 3). Then follow these steps:
1.Create a new project folder calledAppiumJavaExample.
Open it in VSCode.

2.Place theApiDemosApp.apkfile in a new/appsfolder within
the project root.
3.Create a.vscodefolder in the project root and place the
mcp.jsonfile with the Appium MCP tool configurations in it,
as in the exercise“Exploratory Testing”.
4.Add the.claude/agentsfolder to the project root and place
in it thejava-appium-test-generator.mdfile, which contains
the instructions to author mobile UI automation tests, shown
inExample 11-5. The instructions also take care of creating
a framework and installing Appium dependencies.
Example 11-5.java-appium-test-generator.mdfile with test-
authoring instructions
---
name: java-appium-test-generator
description: Use this agent when the user provides a test
scenario in
Given, When, Then (Gherkin) format that needs to be
automated using Appium and
Java against the API Demos app.
model: sonnet
---
You are an elite mobile test automation engineer with
deep expertise in Appium,
mobile UI testing, and behavior-driven development. You
specialize in translating
Gherkin scenarios into robust, maintainable Appium test
code for the ApiDemos
Android application present within /apps folder.
## Your Core Mission
When presented with a Given, When, Then scenario, you
will:
1. Explore the API Demos app using Appium MCP tools to
understand the UI structure
2. Identify the exact elements, screens, and navigation
paths needed
3. Generate production-quality test code in Java that
automates the scenario

4. Use Page object model to structure the test code in
Java
5. Verify the test passes successfully
6. Fix the test until it passes with necessary
dependencies
7. Ensure no regression in existing tests
5.Now open Claude Code in the VSCode terminal and prompt
the following:
Claude:
Generate test for the following scenario:
"Given the user is on the app home page
When they click on the Views section
Then they should land on the views page with lists in
alphabetical order"
You can now watch Claude Code create the Java-based Appium test
automation framework. It will download the required dependencies,
create the test code, and run it on the Android emulator. It will ask
for permissions several times; keep a close watch on the commands
it executes.Figure 11-8shows the framework structure created;
Figure 11-9shows the test execution summary. Notice that the
framework follows the page object model, as instructed.

Figure11-8.ClaudeCodeagentictestframeworkcreation
The test execution summary (Figure 11-9) shows that the test has
fetched all the items present in the Views page and then verified
their alphabetical order.
You can reuse this agent to add more tests. Capture project specific
dos anddon’ts to the agent instructions and define mobile
automation-specific skills (seeChapter 3) as you evolve the
framework. To review the AI-generated test code, see Appium’s
official documentation.

Figure11-9.ClaudeCodeagentictestauthoringsummary
WARNING
AlthoughClaudegeneratedagoodframeworkstructureandwrotea
passingtestforthescenario,itdidn’tcleanuptheunwantedcodeor
thefoldersitcreatedduringsetup.Forinstance,itmovedthefilesin
the/baseand/pagesfoldersfrom/src/maintosrc/tests,butleftthe
emptyfoldersinsrc/main.Itdidn’treflectthefolderstructurechangein
theREADMEfile,anditgeneratedanadditionaltestonitsowntoverify
ifthespecificitemswerepresentontheViewspage.Althoughthese
arenotalarming,itisvitaltounderstandthatapassingtestaloneisnot
aguarantee;don’tacceptcodechangeswithoutcheckingthem
carefully.
You can add the Appium test suite to the CI pipelines to do
continuous testing by either directly connecting the mobile devices
to the CI machine or using an AI-powered end-to-end testing

platform like BrowserStack or TestMu AI. These platforms provide
access to a range of mobile devices and run the tests on their cloud.
APPIUM: A ROBOTIC PROCESS AUTOMATION TOOL
Robotic process automation (RPA)is a way to reduce the
process-related task burden by automating business processes
end-to-end: for example, capturing data in a spreadsheet,
entering it in an internal tool, triggering a job to process the
data, and verifying that it appears online.
While Appium is primarily used for mobile app test automation, it
also supports automating desktop and TV apps with the relevant
drivers for Windows and Mac. Also, it doesn’t require the source
code, so the testers do not have to be the developer team. Thus,
along with its Selenium WebDriver capabilities, Appium can be
usedas an RPA tool.
AdditionalTestingTools
In this section, I’ll show you some performance, security,
accessibility, visual, and data testing tools you can use on mobile
apps. Although some of these testing types are not yet widely
practiced in the mobile space, I recommend applying them wherever
appropriate, for the same reasons you do on other apps.
The illustrations in this section mostly show an Android workflow,
but the workflow is the same in iOS. Parallel tools for iOS are
highlighted in“Mobile Testing Strategy”.
AppiumVisualTestingPlug-in
To conduct automated visual regression testing on a mobile UI, you
can use the Appium visual testing plug-in. It uses OpenCV, an open

source image processing tool, to compare images. To set it up,
follow these steps:
1.Install OpenCV by running the following command:
$ npm install -g opencv4nodejs
2.Install the Appium visual testing plug-in using the following
command:
$ appium plugin install images
3.Start the Appium server with this command:
$ appium server -ka 800 --use-plugins=images -pa
/wd/hub
The Appium plug-in,images, provides two APIs for visual testing.
One compares the baseline image with the actual image:
SimilarityMatchingResult result =
driver.getImagesSimilarity(baselineImg, actualScreen,
options);
The other gets a comparison score from theresultobject, which
can be used to fail the test if it is less than a threshold value:
result.getScore() < 0.99
The comparison score ranges from 0 to 1. The ideal expected value
is 1, but due to subtle variations, you might not always get it. You
can use the threshold value to control the test sensitivity.
With these two APIs, the visual testing workflow is simple: you
create a set of base screenshots of the app’s screens, compare them
against the current versions of the app’s screenshots, and fail the
test if the score is less than the threshold. The plug-in also provides
an API,result.storeVisualization(), to visualize the

differences between the two images when a test fails, as shown in
Figure 11-10.
Compared to Applitools Eyes (Chapter 6), this plug-in has limited
capabilities. For example, Applitools Eyes can scroll down an entire
page and do a visual comparison without additional programming,
whereas with Appium, you’ll need to write code to take multiple
screenshots and stitch them together before passing the result for
image comparison. However, the Appium plug-in is open source, so
you can add at least a minimal set of visual tests alongside the
Appium functional test suite without additional costs.

Figure11-10.Visualtestfailureresults
AndroidStudio’sDatabaseInspector
If you want to explore your app’s local database, Android Studio’s
Database Inspector toolprovides easy GUI access. You can use it
like you’d use any other database client to add, edit, and delete data
and verify the app’s behavior.
To use the Database Inspector, follow these steps:

1.Select Run → Debug from Android Studio, and choose the
app’s.apkfile. Enable the debug option in this file so that
you can use this tool.
2.Select View → Tools Window → App Inspection. This will
open the App Inspection panel at the bottom of the screen.
3.Run your app in the Android Studio emulator using the green
“run” button.
4.The Database Inspector will open inside the App Inspection
panel. The demo app doesn’t have a local DB, soFigure 11-
11shows a different app’s local database as an example.
Figure11-11.AndroidStudio’sDatabaseInspectortoolview
In general, you can use the Database Inspector to verify that the
expected data is stored, enabling offline access to the app, and that
any sensitive information stored is encrypted.
PerformanceTestingTools
In“Performance Testing”earlier in this chapter, I discussed different
aspects of mobile app performance that need to be tested. Here are
three tools that can help.

The Monkey
TheMonkeyis a chaos engineering (discussed inChapter 10)
equivalent for Android apps. It performs random sequences of
actions, such as touches, keypresses, clicks, and other gestures, in
the app UI and reports any crashes. The Monkey comes as a simple
command-line tool. If you have already installed Android Studio, you
can use it to stress test the demo Android app, or use a physical
device. Use the following command:
$ adb shell monkey -p "io.appium.android.apis" -v 2000
This command sends 2,000 different events to the app. You can
watch the execution on the emulator or device. When there are
unhandled exceptions or the app fails to respond, the Monkey
pauses execution and reports those issues. You can customize the
stress test to perform specific events by passing appropriate optional
parameters in the command, as listed in thedocumentation.
Extended Controls: Network Throttler
To help with testing an app’s performance under various network
conditions, Android Emulator can simulate different network types,
such as the Global System for Mobile Communications (GSM),
General Packet Radio Service (GPRS), Enhanced Data rates for GSM
Evolution (EDGE), and Long-Term Evolution (LTE). You can throttle
bandwidth by setting the signal strength to Great, Good, Moderate,
or Poor. To try this, click the ”Extended Controls” icon (three dots) in
the side panel and select Cellular from the settings panel. You will
see the throttling options shown inFigure 11-12. You can use the
controls for data status, voice status, and so on to customize the
network further as required by your test case.

Figure11-12.NetworkthrottlingoptionsinAndroidEmulator
Appium’s Performance API
Appium provides an API to gauge an Android app’s performance in
terms of memory, CPU, battery, and network consumption. This API
is built on top of Android’sdumpsyscommand-line tool, which
outputs diagnostics of the system’s services, so it can only be used
with Android apps.
You can add automated performance tests alongside the UI tests
using this API, as shown here:
driver.getPerformanceData("package_name", "perf_type",
timeout);
Here,package_nameis the app’s package name, which you used
for automation earlier;perf_typerefers to the system state that
you want to monitor, such as CPU or network; andtimeoutis the
number of seconds the API will poll for performance data before

throwing an error. The exact value for theperf_typeparameter
can be obtained from another Appium API,
getSupportedPerformanceDataTypes(). Currently, there are four
supported values:cpuinfo,memoryinfo,batteryinfo, and
networkinfo.
Using this API, you can add a performance test, get performance
numbers at different points in the user flow, and assert that those
numbers are within a certain threshold. For example, you can assert
memory consumption against a threshold after a complex operation
in the app.Example 11-6shows the memory consumption data just
after opening the demo Android app.
Example 11-6.Demo app’s memory consumption output using
Appium’sperformance API
driver.getPerformanceData("io.appium.android.apis","memoryinfo",
10);
// Output
[[totalPrivateDirty, nativePrivateDirty, dalvikPrivateDirty,
eglPrivateDirty,
glPrivateDirty, totalPss, nativePss, dalvikPss, eglPss, glPss,
nativeHeapAllocatedSize, nativeHeapSize], [11432, 4708, 1692,
null, null, 20807,
4926, 1717, null, null, 12648, 14336]]
For details on interpreting these output values and adding
appropriate app-specific assertions, refer to thedumpsys
documentation.
SecurityTestingTools
We will look at two automated security testing tools in this section:
MobSF and Qark.

MobSF
The Mobile Security Framework, or MobSF, is an open source tool
that does automated static and dynamic analysis of Android, iOS,
and Windows apps. It also helps with malware analysis. To try
MobSF, follow these steps:
1.Download and installDocker Desktop, if you haven’t done
this yet, and open the application. (You don’t need to know
much about using Docker, but check your company’s policies
about installing Docker on your work laptop—it is free, but
only for personal use.)
2.Get the MobSF Docker container:
$ docker pull opensecurity/mobile-security-
framework-mobsf:latest
$ docker run -it -p 8000:8000
opensecurity/mobile-security-framework-
mobsf:latest
This will set up MobSF on your local machine. Open
http://0.0.0.0:8000to view the MobSF web page.
3.Upload the demo Android app’s APK to this web page.
Alternatively, you can use theInsecureBankv2 APK,
intentionally created with vulnerabilities for learning
purposes.
4.MobSF will scan the app and display the results on the same
local web page, as seen inFigure 11-13, highlighting the
vulnerabilities and ranking their severity.

Figure11-13.MobSFscanresults
You can also integrate this tool with CI pipelines to automatically
scan the code on checkin (see thedocumentation).
Qark
Qark, another open source security-scanning tool for Android apps,
can scan the source code or the APKs. It is Python-based. You can
install it with thepippackage manager:
$ pip install qark
Run the security scan against your APK using this command:
$ qark --apk ~/path/to/apk --report-type html
This will generate an HTML report file highlighting the vulnerabilities.
As mentioned inChapter 7, automated security scanning tools such
as these help software development teams to shift security testing to
the left. However, depending on your team’s skills and the context of
the app, you might still need to engage professional security testers
toward the end of development.

AccessibilityScanner
Accessibility Scanner is an accessibility scanning tool for Android
apps, available fromGoogle Play. Once you’ve installed it on your
device and granted it the necessary permissions, you can launch the
app you want to test and tap the blue checkmark button to start the
accessibility scan. It will then show an option to record the app’s
flow, as seen inFigure 11-14.
Figure11-14.AccessibilityScannerappresults
Try it now—open any app on the Android device and start recording
as you navigate through the app. Once you’re done, stop recording
by clicking on the blue checkmark again. The Accessibility Scanner
app will then show results for each screen you navigated,
highlighting elements where accessibility provisions can be
improved, as shown inFigure 11-13. Click the highlighted text for a
description of the issues. This app can be used as early as the
development phase to check for missing accessibility features.
And with that, you deserve a big congratulations. You’ve learned a
wide range of tools you can use for testing functional and cross-

functional mobile app requirements!
Perspectives:TheMobileTestingPyramid
You’ve seen that a mobile app’s basic architecture is similar to a web
app’s: the app calls services, which in turn talk to the database. So
the tests in the bottom layers will continue to adhere to the test
pyramid. As you’ll recall fromChapter 3, the test pyramid
recommends having a fat layer of micro-level tests and a thin layer
of macro-level tests. However, there are debates on whether it is
possible to achieve the pyramid shape when it comes to the mobile
layer. Some say that the mobile test pyramid takes an inverted form,
with a fat layer of UI tests with extensive manual testing and a thin
layer of unit tests. Their experiences vary because of two main
factors: the restricted scope of unit and UI tests in the mobile layer,
and the app’s context.
To elaborate further: unit tests in the mobile layer validate small
pieces of functionality delivered by a class or method, as usual.
However, for functionalities that depend on the OS’s APIs, the team
might not write unit tests to validate the API’s behavior, since it is
understood that the OS provider will have tested the API. This
imposes a need for end-to-end testing, be it manual or automated,
to ensure that the OS’s APIs work as expected within the app’s
context across different device types. Additionally, hardware-specific
features, such as camera integrations and sensors, and usability-
related features, such as ease of scrolling and advanced gestures,
can only be thoroughly tested manually.
Given this restricted scope of unit and UI tests, the shape of the
mobile app’s test pyramid is dictated by the characteristics of the
app. For apps that contain extensive functional logic and have few
external dependencies, the mobile test pyramid will look like the
traditional one, since there will be more lower-level tests to cover
the functional logic. On the other hand, for apps that have limited

functional logic but heavy dependencies on external factors, you
might have an inverted test pyramid. In such cases, you will have to
plan for additional testing capacity and strive to balance automated
UI tests with exhaustive manual regression testing.
KeyTakeaways
Here are the key takeaways from this chapter:
Mobile testing differs from web testing. The diverse range of
devices, apps, and networks poses a significant challenge to
software development teams in all phases of the
development lifecycle.
Your mobile app testing strategy should incorporate the
fundamentals of full stack testing, such as a heavy focus on
micro- and macro-level testing, shifting left, and testing for
quality dimensions such as security, performance, and
accessibility.
You saw a variety of functional and cross-functional manual
and automated tools, including AI-assisted tools, for mobile
testing.
The shape of the mobile test pyramid is sometimes inverted,
depending on the app’s characteristics and features.
Consider this important aspect of mobile testing early and
plan appropriate testing capacity.
1
YoumayalsoseethedesignationsLDPI,MDPI,HDPI,XHDPI,XXHDPI,and
XXXHDPI,whereDPIreferstodotsperinch,onewayofmeasuringpixel
density.

Chapter 12.Moving Ahead in
Testing
So far, this book has discussed all the testing skills a software
professional needs to deliver high-quality web and mobile
applications. Testing is a broad and growing space that has evolved
over decades to include new processes, tools, and methodologies—
the most recent being AI capabilities. While there are ten different
full stack testing skills today, tomorrow there could be more. Even in
such a dynamic environment, though, the foundational principles of
testing still hold.
FirstPrinciplesinTesting
In this chapter, I will provide a brief overview of seven first principles
in testing (Figure 12-1) and their critical benefits and look at how
they have influenced the evolution of existing tools and team
practices. I will also explore how your soft skills—including some AI-
specific soft skills—augment your technical skills in contributing to
your team’s success. The following subsections dive into each one in
turn.

Figure12-1.Firstprinciplesintesting
DefectPreventionoverDefectDetection
Even though testing mainly aims to find issues in the application,
defect preventionlies at its core. Defects are expensive to fix. If you
plaster over a crack and touch up the paint on an otherwise
seamlessly painted wall, sometimes the newly painted patch doesn’t
blend in well and you have to paint the whole wall all over again!
Similarly, software defects can force you to make significant
architectural changes, requiring a huge amount of rework and cost.
Hence, this core principle recommends adopting practices, tools, and
methods that prevent defects from occurring in the first place.
Here are some practices that aim to fulfill this principle:
Iteration planning meetings(IPMs), also calledsprint
planning meetings, conducted at the beginning of an
iteration or sprint to discuss user stories in detail. An IPM is

an open space for teams to brainstorm about missing
integrations and edge cases in user stories.
The“three amigos” process, in which business
representatives, developers, and testers mull over each
feature thoroughly. This process collects all three roles’
perspectives during the analysis phase so that integrations,
edge cases, and other business requirements don’t get
overlooked.
Theuser story kickoffaims to repeat the “three amigos”
process just before a user story’s development begins. In
shift-left testing, testers often capture and discuss the test
cases during story kickoffs for the same reasons.
Discussing and documenting architectural decision records
(ADRs) and test strategies steers the team toward the
project’s collective quality goals.
During development, TDD triggers people to think about
edge cases for even small pieces of code.
Pair programming during development helps prevent
defective code and avoid missing edge cases.
Static analysis tools, like linters, catch coding smells even
while developers are creating them.
AI tools contribute to the principle of defect prevention in several
forms. For example, you can bring AI to the “three amigos” process
to expand the analysis (make it the “four amigos” process!) or use
AI to do threat modeling. You can apply these defect prevention
practices to any new domain, like data or AI products, even when
the roles in the team are different.

EmpatheticTesting
Testing is all about placing yourself in the end user’s shoes. When
you test, try to overcome day-to-day business pressures and operate
with the end users’ interests at heart. Don’t restrict yourself to just
verifying the user story’s acceptance criteria and moving on; you
need to explore the application as a typical end user would. That
makes it vital to understand and empathize with your target end-
user personas before you start.
To enhance your understanding of end users’ needs, get actively
involved with the design and prototyping phases and pair with UX
designers and product managers. Teams often trade off some user
needs, based on factors like the complexity of development and
timelines. However, when testing, you should bring the end user’s
perspective to the forefront and negotiate those trade-offs with their
best interests in mind.
Micro-andMacro-LevelTesting
As I discussed inChapter 1, testing must be done at both the micro
and macro levels to deliver high-quality software. Micro-level testing,
you may recall, involves drilling down to a small piece of
functionality and testing it in detail—for example, testing the order-
total calculation with various boundary conditions, like negative
prices or long decimals. Macro-level testing uses a broader lens to
cover functional flows, data propagation between modules,
integrations between components, and so on. For example, macro-
level tests might focus on testing the order creation flow, third-party
integrations, UI flows, and order creation failures.
Unit, integration, and contract tests are part of micro-level testing,
while API tests, UI functional tests, and visual tests are considered
macro-level testing. An imbalance in the distribution of micro- and
macro-level testing can delay feedback and even compromise
quality.

Another critical consequence of such an imbalance will be not finding
some issues until production. In general, teams that focus only on
macro-level testing overlook details. For example, they will have
tested macro-level scenarios, such as the order getting created
successfully. But when the item prices in production are negative or
have an unexpected number of decimals, order creation might fail,
leading to defects. And when AI tools are in play, many people trust
them too much and put them in control, leading to missing test
cases at both levels. Zoom in and out constantly: it’s essential that
you see both the big picture and the details.
FastFeedback
This principle is about finding and fixing defects early to speed the
release cycle. Severalresearch studieshave shown a notable
correlation between how long it takes to fix a defect and how late it
is found. During development, you have all the required context for
the feature’s code, so you can easily understand bugs’ root causes
and fix them quickly. But when you’ve moved on to other features
and the codebase continues to grow every day with refactoring, that
context is lost. Debugging the root cause becomes a longer, costlier
process.
Furthermore, the defect-tracking cycle significantly delays the defect-
fixing cycle. For instance, imagine you find a high-priority bug two
weeksafterfeature development. You’ll expend time and effort
creating bug cards, triaging them, tracking them in iterations, and
finding the right developer with time to fix them. These tasks can
take days, if not weeks!
Even after all these delays, in certain worst-case scenarios, the
development that happened in the interim period makes it
impossible to fix the defect without major refactoring, delaying the
release timeline. This is the ultimate cost to pay for finding a defect
late—and a good reason to create faster feedback cycles.

So how early should you test a piece of code? Shift-left testing is all
about faster feedback, and AI capabilities are accelerating the
feedback cycle even further. As you learned in Chapters2through4,
you can implement dev-box testing (running automated tests early
as on the developer’s machine) and the test pyramid. Also, have
product owners (POs) or business representatives sign off on user
stories and showcase them to all stakeholders after every sprint.
This will get the team faster feedback about missing business cases.
ContinuousFeedback
Fast feedback should be backed bycontinuousfeedback. It isn’t
enough to test a feature once and then leave it idle until release.
You have to maintain regression testing to get feedback on whether
the current features and their integrations are still intact, even as the
team develops new features and refactors existing code. Continuous
feedback mechanisms help you catch issues when they are still
relatively small—and place the team in the sweet spot for doing
continuous delivery!
As discussed inChapter 4, the predominant way to get continuous
feedback is by implementing continuous testing practices. That
includes running the micro- and macro-level functional tests and CFR
tests for every commit as part of your CI pipeline. Adopt AI tools
along with keeping “humans in the loop” to accelerate theprocess.
MeasuringQualityMetrics
Anything that is measured tends to improve, and the point of KPIs is
to track these indicators and iteratively improve them by taking the
right steps. If you’re trying to achieve high-quality results, measure
quality. That said, if you focus too much on metrics, team members
will find ways to fool the metrics, forgetting that ultimate purpose.
Deploy metrics wisely to steer the team toward common quality
goals.

Some quality metrics to track regularly include the following:
Defects caught by automated tests in all layers
Automated tests create a safety net; when they find a majority of
defects in the early stages, teams feel more confident in making
new changes. This metric reflects the strength of that safety net.
Time from commit to deployment
When the developer commits, the automated tests in the CI
pipeline should immediately test the new changes and deploy
them to the QA environment to kickstart exploratory testing. I
have seen CI pipelines take a long time to generate a green build
due to unstable tests and environment issues, delaying feedback
and resulting in productivity loss.
Automated deployments to testing environments
Paired with the previous metric, this will show how quickly and
successfully the team makes new changes. If the number of
automated deployments to the testing environments is low (due
to infrastructure failures, test failures, or other issues), your
feedback cycle may need improvement.
Regression defects caught during user-story testing
Regression defects caught during the user story testing phase
indicate that business use cases or automated tests are missing.
For example, automated tests in CI will miss a refactoring of a
SQL query to useequalsinstead oflikeif the input data to the
test was designed to match both. AsChapter 3discussed, finding
regression defects during user story testing can be a symptom
that teams are following antipatterns in automated testing. They
should immediately reflect on the root causes of such defects and
improve their processes.
Automation coverage based on the severity and priority of test cases

Keep a detailed record of your automation coverage with the goal
of having no backlog. Tracking this will help you plan your
iterations to cover the backlog, if any. Be warned that your teams
can stockpile automated tests with AI tools quickly (recall the
cupcake pattern fromChapter 3). If you don’t track the metric
against the priority and severity of the test cases, you might have
high coverage but get little value from it.
Production defects and their severity
Tracking production defects shows you the bigger picture of
missing business use cases or configurations, data mismatches,
and any other issues that the team may have overlooked.
Identify their root causes and automate tests around them. Build
a living test strategy and keep evolving it as the application and
team venture into new ground.
Usability scores from end users
Collect feedback from end users on the overall user experience
during development to help you enhance UX design–related
metrics, like maximum number of clicks to obtain information and
text versus icons.
Failures due to infrastructure issues
Track infrastructure issues, like services being down intermittently
in testing environments, problems in the CI pipelines, and
mismatches in the testing and development environments’
configurations. Sometimes you might need to pay down technical
debt in the infrastructure code to make it scalable and stable.
Metrics around cross-functional aspects
Measure the performance KPIs consistently and show the results
to your teams. Share statistics around automated security test
cases and vulnerabilities found during the automated scans every

sprint. Include automation coverage of your project-specific CFR
test cases and present relevant metrics, like cross-browser
testing coverage, chaos engineering results, and localization
testing coverage.
Many of these metrics tie back to the DORA metrics discussed in
Chapter 4, which measure quality in terms of the code’s stability and
the team’s delivery tempo. For instance, recall that one of the
metrics,lead time(the time from code being committed to it being
ready for production deployment), is expected to be less than a day
for an elite team. When there is a good safety net of automation
coverage, the team can make such rapid changes confidently.
Similarly, thedeployment frequencymetric needs to be “on demand”
for an elite team. Measuring time from commit to deployment and
the number of deployments in a day to testing environments gives a
good sense of the team’s delivery tempo. Production defects tell us
about thechange fail percentage(the percentage of changes
released to production that fail), which should be 0% to 15% for a
high-performing team. When your team tracks and discusses these
metrics consistently, they inherently chase the goal of high-quality
software.
CommunicationandCollaborationArethe
KeystoQuality
Testing cannot be done in a silo. For it to add value, there must be
proper communication about business requirements, domain
knowledge, technical implementation, and environment details, to
name a few. This requires consistent collaboration and interaction
among everyone on the project team, perhaps through Agile
ceremonies like stand-ups, story kickoffs, IPMs, and dev-box testing,
as well as documentation like story cards, ADRs, test strategies, and
test coverage reports. While communication can’t be entirely

synchronous when distributed teams work in different time zones,
proper documentation and asynchronous media like videos and
emails help ensure that handovers go smoothly.
These seven first principles will guide teams in developing effective
testing strategies even as they venture into new technologies like AI
tools, acting as guardrails for adoption and experimentation. I have
seen these principles consistently produce high-quality results in
projects with new technology stacks or in unfamiliar domains.
SoftSkills,AI-SpecificSoftSkills,and the
Quality-FirstMindset
Testing is a critical aspect of the software development lifecycle in
which everyone works together to achieve high quality. No one
person can completely “own” quality, nor can any single person opt
out of owning quality—think of how a relay team can’t win a race if a
single runner goes too slowly.
Therefore, soft skills play a crucial role in building a quality-first
mindset in a team. If you are a tester by profession or are
responsible for testing at work, build these basic soft skills:
Drive outcomes
When every role in the team is focused on driving quality
outcomes, the team is collectively set up to produce high-quality
results. For example, designing an intuitive user journey is owned
by the UX role, envisioning a customer-friendly product is owned
by the PO or business representative, and guaranteeing a good
architecture and robust code is the responsibility of the
developers. Testers should primarily own testing-related activities
and, for example, ensure that the team adopts defect prevention
practices and tools, corroborate that they’re following through on
continuous testing practices, and track automation coverage and
complete it as part of every user story.

Collaborate
Inculcating the mindset that quality is the team’s responsibility
can only happen through strong collaboration. If you are rigid in
your ideas or apathetic about reaching out to other team
members, you won’t achieve high-quality results. For example,
implementing the test strategy collaboratively with the
developers will go a long way toward meeting this goal, just as
collaborating with the business representatives to discover
missing test cases will help significantly with defect prevention.
Communicate effectively
The way we communicate can make all the difference in whether
the team successfully completes a task. Choose a suitable
medium and the right time to communicate. In particular, testers
should communicate with the team regularly and clearly about
what is required to achieve the desired level of quality.
Prioritize tasks
Testing can drag on if it is not prioritized efficiently. Sometimes
what seems like a small task from a development point of view
calls for a disproportionate, unplanned testing effort, throwing
schedules into disarray. To avoid such situations, testers should
prioritize the testing activities for each user story well ahead of
time, and make sure the iteration has the capacity to
accommodate the efforts they will require.
Manage stakeholders’ expectations
A project’s stakeholders include clients, managers, teammates,
tech leads, and anyone else who can change the required course
of action. Testers have to manage stakeholders’ expectations
about quality consistently. Clients could be expecting automation
coverage to be 100%, which may not be realistic, and managers
might be more interested in meeting release timelines than in

quality. Manage expectations up front through collaboration,
effective communication, andprioritization.
Coach and mentor new team members
Testers should pair up with new team members to share
knowledge and help them ramp up quickly. Maintaining robust
documentation is also important for onboarding.
Mentoring and coaching go beyond onboarding, however, and
should result in continuous learning and improvement, especially
in soft skills.
Build and wield influence
Influence is key in gaining support for your testing strategy and
convincing business stakeholders to invest in new testing tools
and practices. Of course, there is no set recipe for building
influence, but consistently producing high-quality outcomes,
combined with the other soft skills, goes a long way toward this
goal!
There are also a few soft skills that are essential when embracing AI
for testing:
Think abstractly
To prompt the AI to achieve the testing outcomes you want, you
need to be able to abstract your mental model of the problem at
hand into step-by-step instructions. For example, inChapter 2,
you abstracted a mental model for conducting an exploratory
testing session and prompted AI to navigate a defined charter.
Break tasks into chunks
AIs do their best and most precise work when you feed them
instructions as small executable tasks. For example, inChapter 3,
you had to spell out the page object model design as a

sequenced list of tasks, even though it is an established design
pattern. Without such a task list, AI sometimes implements its
own understanding of the design, putting assertions inside the
page class or hardcoding element locators within the test class.
Write effectively
Humans mostly communicate with AI through text. You can’t
expect it to do what you want when you’re asking it to grapple
with grammatically incorrect or incoherent sentences, badly
misspelled words, and instructions with little background context.
Use proper punctuation, delimiters, and good spacing in your
prompts, as covered inChapter 2.
Learn and unlearn quickly
AI has been evolving at lightning speed, and testers feel
pressured to learn and apply new tools quickly. This also means
unlearning some of your existing ways of working! If you’re used
to executing your tasks in a certain way on your own, AI will now
challenge you on that. Sometimes it might even come across as
threatening your years of knowledge and experience. But like any
other technological advancements, the sooner you unlearn the
old ways and get accustomed to the new ways, the better you
can navigate this wave of change.
Mastering soft skills can be harder than mastering technical skills. It
requires diligent practice. But as you work your way toward
proficiency, you may discover that you are already quite good at
some of these skills. Utilize them appropriately and they can greatly
contribute to your team’s success.

Conclusion
Testing is a continuous learning journey. As you actively practice all
that you’ve learned from this book, you will continue to gain insights.
If the rapid growth of the testing field and tooling landscape starts
to feel overwhelming, take a step back and remember that all of
these new developments fundamentally cater to at least one of the
first principles. All you need to do is learn how and where they fit in.
Blending your full stack testing skills with your soft skills will place
you well on your way to efficiently delivering high-quality software.
If you’re feeling enthusiastic and want to learn more, I encourage
you to explore testing systems forAI systems(referred to asevals),
blockchain, and augmented reality/virtual realityAR/VR applications.
Thank you for treading this long trail with me. Your commitment to
delivering high-quality software is truly commendable. I hope the
book has given you effective guidance on learning new testing skills
and contemporary testing practices that you can put to good use.
Until we meet again, I wish you all the very best in your testing
journey!

Index
A
A/B testing,User experience
Accessibility Insights,Accessibility Insights-Workflow
Accessibility Scanner,Accessibility Scanner
accessibility testing,Accessibility Testing-Key Takeaways
–accessibility as a culture,Perspectives: Accessibility as a Culture
–accessibility ecosystem,The Accessibility Ecosystem
–accessibility user personas,Accessibility User Personas
–accessibility-enabled development frameworks,Accessibility-
Enabled Development Frameworks
–Axe Intelligent Guided Testing (IGT),Axe Intelligent Guided
Testing
–exercises
–Accessibility Insights,Accessibility Insights-Workflow
–Axe-core,Axe-core
–Lighthouse,Lighthouse
–mobile accessibility testing,Accessibility Testing
–Pa11y CI node module,Pa11y CI Node Module
–screen readers,Example: Screen Readers
–testing strategy,Accessibility Testing Strategy-Manual Testing

–accessibility checklist,Accessibility Checklists in User Stories
–automated accessibility auditing tools,Automated
Accessibility Auditing Tools
–manual testing,Manual Testing
–visual testing,Accessibility Testing
–Web Content Accessibility Guidelines,Web Content Accessibility
Guidelines: Principles and Levels-Robust
accessibility trees,Example: Screen Readers
agent modes, in Copilot,Components
Agent Skills, in Copilot,Workflow: Agentic test authoring with Copilot
agentic AI,AI in Testing
agentic test authoring
–for API testing,Exercises: UI Functional Tests-Workflow: Agentic
test authoring with Copilot
–for mobile testing,UI Functional Tests-Workflow
–for web testing,TypeScript–Playwright Framework-Workflow:
Agentic test authoring with Copilot
AI (artificial intelligence)
–AI-assisted exploratory testing,Exploratory Testing-Workflow
–AI-assisted test automation,Setup and workflow
–with Appium,UI Functional Tests-Workflow
–with Data Contract CLI,Data Contract Command Line
Interface (CLI)-Setup and workflow

–with Feather Wand plugin,Integrating into continuous
integration
–with Gatling,Workflow
–with JDBC,Setup and workflow
–with Playwright,Workflow,Playwright
–AI-driven API workflows,Other AI-Powered Test Automation
Tools and Platforms
–AI-specific soft skills,Soft Skills, AI-Specific Soft Skills, and the
Quality-First Mindset
–categories of AI testing tools,The Landscape of AI Testing
Tools-The Landscape of AI Testing Tools
–definition of AI,AI in Testing
–full stack testing,AI in Testing-The Landscape of AI Testing
Tools
–reviewer agents,Workflow: Agentic Test Authoring with Claude
–SQL query assistance,AI assistance
–test case generation,Test Case Generation-Workflow
–threat modeling,AI-assisted threat modeling
–token economics,Workflow: Agentic test authoring with Copilot
Aluminum,Other AI-Powered Test Automation Tools and Platforms
antipatterns, for automated functional testing,Antipatterns to
Overcome-The cupcake
Apache Maven,Apache Maven-Apache Maven
ApacheBench,ApacheBench

API testing,API Testing-WireMock
–Claude Desktop,Claude Desktop
–Postman,Postman-Postman
–WireMock,WireMock
Appium
–performance API,Appium’s Performance API
–RPA tool,Workflow
–visual testing plug-in,Appium Visual Testing Plug-in
application programming interfaces (APIs)(seeAPI testing)
Applitools Eyes,Applitools Eyes-Workflow
architecture testing,Supportability,Architecture Testing
artificial intelligence(seeAI)
assistive technologies, defined,The Accessibility Ecosystem
attacks, defined,Building Blocks
Auto Data Filler (browser plug-in),Auto Data Filler extension
automated accessibility auditing tools,Automated Accessibility
Auditing Tools
automated functional testing,Automated Functional Testing-Key
Takeaways
–antipatterns,Antipatterns to Overcome-The cupcake
–automation coverage percentage,100% Automation Coverage!
–exercises

–service tests,Exercises: Service Tests-Workflow: Agentic
Test Authoring with Claude
–UI functional tests,Exercises: UI Functional Tests-
Workflow: Agentic test authoring with Copilot
–unit tests,Exercise: Unit Tests-Workflow
–micro/macro test types,Introduction to Micro and Macro Test
Types-End-to-end tests
–contract tests,Contract tests
–end-to-end tests,End-to-end tests
–integration tests,Integration tests
–service tests,Service tests
–UI functional tests,UI functional tests
–unit tests,Exercise: Unit Tests-Workflow
–pact contract testing,Pact Contract Testing-Pact Contract
Testing
–ReportPortal dashboard,ReportPortal Dashboard
–testing strategy,Automated Functional Testing Strategy
automation coverage percentage,100% Automation Coverage!
Axe Intelligent Guided Testing (IGT),Axe Intelligent Guided Testing
Axe-core,Axe-core
Azure Load Testing,Azure Load Testing

B
backend performance testing,Backend Performance Testing Building
Blocks-Step 6: Script and run the performance tests
–exercises,Exercises-Workflow
–Gatling,Gatling
–JMeter,JMeter-Integrating into continuous integration
–online library management app,Online Library Management
App-Step 6: Script the test cases
–factors affecting application performance,Factors Affecting
Application Performance
–KPIs,Key Performance Indicators
–load pattern types,Types of Load Patterns
–performance goals,Simple Performance Goals
–performance test types,Types of Performance Tests
batch processing systems,Batch Processing Systems
behavior-driven development,Workflow
boundary value analysis,Boundary value analysis
BrowserStack Percy,BrowserStack Percy
brute force cyberattacks,Brute force
bug bashes,Repeat Exploratory Testing in Phases
C
caches,Caches

cause-effect graphing,Cause-effect graphing
CFR testing(seecross-functional requirements testing)
chaos engineering,Chaos Engineering-Chaos Engineering
characteristics of good tests,Workflow
Chrome DevTools,Chrome DevTools-Chrome DevTools,Chrome
DevTools and Postman,Chrome DevTools Performance Panel-
Chrome DevTools Performance Panel
CI(seecontinuous integration)
CI/CT/CD (continuous integration, testing, and delivery),The
Continuous Integration, Testing, and Delivery Process-The
Continuous Integration, Testing, and Delivery Process
Claude
–agentic test authoring,Workflow: Agentic Test Authoring with
Claude-Workflow: Agentic Test Authoring with Claude
–in GitHub Actions workflows,Claude in GitHub Actions-Workflow
Claude Desktop
–for API testing,Claude Desktop
–test case generation,Test Case Generation-Workflow
client, in service-oriented architecture,API Testing
code coverage,100% Automation Coverage!
compliance testing,Compliance Testing-Payment regulations: PCI
DSS and PSD
–AI Act,General Data Protection Regulation (GDPR)

–CFR testing,Compliance Testing-Payment regulations: PCI DSS
and PSD
–GDPR,General Data Protection Regulation (GDPR)
–payment regulations,Payment regulations: PCI DSS and PSD
component tests, for visual testing,Integration and Component
Tests
conformance certification,Manual Testing
containers, image scanning of,Security Testing Strategy
continuous feedback,Continuous Feedback
continuous integration (CI),Introduction to Continuous Integration
–integrating JMeter tests into CI pipeline,Integrating into
continuous integration
continuous integration, testing, and delivery (CI/CT/CD),The
Continuous Integration, Testing, and Delivery Process-The
Continuous Integration, Testing, and Delivery Process
continuous testing (CT),Continuous Testing-Key Takeaways
–Claude in GitHub actions,Claude in GitHub Actions-Workflow
–continuous integration basics,Introduction to Continuous
Integration
–DORA metrics,Conclusion: DORA Metrics
–exercises
–Git,Git-Workflow
–Jenkins,Jenkins-Workflow
–principles and etiquette,Principles and Etiquette

–testing strategy,Continuous Testing Strategy-Continuous Testing
Strategy
contract tests,Contract tests
contract, in API testing,API Testing
cookie forging,Cookie forging
Copilot,Workflow: Agentic test authoring with Copilot-Workflow:
Agentic test authoring with Copilot
create (SQL keyword),Create
cross-browser testing,Cross-Browser Testing
cross-functional requirements (CFR) testing,Cross-Functional
Requirements Testing-Key Takeaways
–evolvability and the test of time,Perspectives: Evolvability and
the Test of Time
–mobile accessibility testing,Other CFRs for Testing
–testing strategy,CFR Testing Strategy-Payment regulations: PCI
DSS and PSD
–architecture testing,Architecture Testing
–chaos engineering,Chaos Engineering-Chaos Engineering
–compliance testing,Compliance Testing-Payment
regulations: PCI DSS and PSD
–infrastructure testing,Infrastructure Testing-Infrastructure
Testing
–localization/internationalization testing,Localization and
internationalization testing
–performance,Performance

–reliability,Reliability
–supportability,Supportability
–usability,Usability
–user experience,User experience
cross-site scripting (XSS) cyberattacks,Cross-site scripting
cryptojacking,Cryptojacking
CT(seecontinuous testing)
cupcake antipattern,The cupcake
custom agents, in Copilot,Workflow: Agentic test authoring with
Copilot
cyberattacks,Common Cyberattacks-Cryptojacking
–brute force,Brute force
–cookie forging,Cookie forging
–cross-site scripting (XSS),Cross-site scripting
–cryptojacking,Cryptojacking
–phishing,Phishing
–ransomware,Ransomware
–social engineering,Social engineering
–web scraping,Web scraping
D
DAST (dynamic application security testing),Security Testing
Strategy

Data Contract CLI,Data Contract Command Line Interface (CLI)-
Setup and workflow
data skew,Batch Processing Systems
data testing,Data Testing-Key Takeaways
–batch processing systems,Batch Processing Systems
–caches,Caches
–databases,Databases-Databases
–event streams,Event Streams
–exercises
–Apache Kafka and Zerocode,Apache Kafka and Zerocode-
Workflow
–data contract CLI,Data Contract Command Line Interface
(CLI)-Setup and workflow
–Java Database Connectivity (JDBC),Java Database
Connectivity (JDBC)-Setup and workflow
–SQL,SQL-AI assistance
–functional testing and,Data Testing
–mobile accessibility testing,Data Testing
–Testcontainers,Additional Testing Tools: Testcontainers
–testing strategy,Data Testing Strategy
Database Inspector (Android Studio),Android Studio’s Database
Inspector
database schema,Databases
decision tables,Decision table

deep learning,AI in Testing
Deequ,Setup and workflow
defect prevention,Defect Prevention over Defect Detection
delete queries, in SQL,Update and delete
dev-box testing,Repeat Exploratory Testing in Phases
discovery paths,Exploring a Functionality-Cross-functional aspects
Docker,Setup
DORA (DevOps Research and Assessment),Conclusion: DORA
Metrics
dynamic application security testing (DAST),Security Testing
Strategy
E
edge case, defined,Manual Exploratory Testing
empathetic testing,Empathetic Testing
encryption, defined,Building Blocks
end-to-end tests
–AI testing platforms,Other AI-Powered Test Automation Tools
and Platforms
–automated functional testing,End-to-end tests
–evolving AI test frameworks,Workflow: Agentic test authoring
with Copilot
equivalence class partitioning,Equivalence class partitioning
error guessing method,Error guessing method

error handling, in manual exploratory testing,Failures and error
handling
event streams, data testing,Event Streams
exploratory testing, defined,Explore in Parts
expressions, in SQL,Expressions and predicates
F
failures, anticipating with manual exploratory testing,Failures and
error handling
fast feedback,Fast Feedback
feature testing,Manual Testing
features, defined,Manual Exploratory Testing
filtering, in SQL,Filtering and grouping
frontend performance testing,Frontend Performance Testing
Building Blocks-Frontend Performance Metrics
–Chrome DevTools,Chrome DevTools Performance Panel-Chrome
DevTools Performance Panel
–factors affecting,Factors Affecting Frontend Performance
–Lighthouse,Lighthouse-Lighthouse
–performance metrics,Frontend Performance Metrics
–Playwright,Playwright-Playwright
–RAIL model,RAIL Model
–visual testing,Frontend Performance Testing
full outer joins,Joins

full stack testing (generally),Introduction to Full Stack Testing-Key
Takeaways,Moving Ahead in Testing-Soft Skills, AI-Specific Soft
Skills, and the Quality-First Mindset
–AI in testing,AI in Testing-The Landscape of AI Testing Tools
–AI-specific soft skills,Soft Skills, AI-Specific Soft Skills, and the
Quality-First Mindset
–categories of AI testing tools,The Landscape of AI Testing
Tools-The Landscape of AI Testing Tools
–communication/collaboration as keys to quality,Communication
and Collaboration Are the Keys to Quality
–continuous feedback,Continuous Feedback
–defect prevention over defect detection,Defect Prevention over
Defect Detection
–empathetic testing,Empathetic Testing
–fast feedback,Fast Feedback
–measuring quality metrics,Measuring Quality Metrics-Measuring
Quality Metrics
–micro-/macro-level testing,Micro- and Macro-Level Testing
–prompt/context engineering,AI in Testing
–shift-left testing,Shift-Left Testing-Shift-Left Testing
–soft skills,Soft Skills, AI-Specific Soft Skills, and the Quality-First
Mindset
–technical skills,Ten Full Stack Testing Skills-Ten Full Stack
Testing Skills
–testing for high quality,Full Stack Testing for High Quality

functional automated testing
–mobile accessibility testing,Functional Automated Testing
functional end-to-end tests, for visual testing,Functional End-to-End
Tests
functional security test automation,Security Testing Strategy
functional testing,Data Testing
functional user flows,Functional user flows
functionalities,Exploring a Functionality-Cross-functional aspects
–cross-functional aspects,Cross-functional aspects
–definition of functionalities,Manual Exploratory Testing
–failures/error handling,Failures and error handling
–functional user flows,Functional user flows
–UI look and feel,The UI look and feel
functions, in SQL,Functions and operators
G
Gatling,Gatling
General Data Protection Regulation (GDPR)
–AI Act,General Data Protection Regulation (GDPR)
–privacy laws,General Data Protection Regulation (GDPR)
generative AI,AI in Testing
Git,Git-Workflow
grouping, in SQL,Filtering and grouping

H
hallucinations,Workflow: Agentic test authoring with Copilot
hashing, defined,Building Blocks
I
IAST (interactive application security testing),Security Testing
Strategy
ice-cream cone antipattern,The ice-cream cone
image scanning, in security testing,Security Testing Strategy
infrastructure as code (IaC),Infrastructure Testing
infrastructure testing,Infrastructure Testing-Infrastructure Testing
insert (SQL keyword),Insert
integration tests
–automated functional testing,Integration tests
–visual testing,Integration and Component Tests
interactive application security testing (IAST),Security Testing
Strategy
internationalization testing,Localization and internationalization
testing
J
Java Database Connectivity (JDBC)
–AI-assisted test automation,Setup and workflow

–data testing,Java Database Connectivity (JDBC)-Setup and
workflow
Java-Selenium WebDriver framework,Java–Selenium WebDriver
Framework-Workflow
–Apache Maven,Apache Maven-Apache Maven
–page object model,Page object model
–Selenium WebDriver,Selenium WebDriver-Selenium WebDriver
–TestNG,TestNG
Jenkins,Jenkins-Workflow
JMeter,JMeter-Integrating into continuous integration
–data-driven performance testing,Data-driven performance
testing
–integrating tests into CI pipeline,Integrating into continuous
integration
–soak testing/stress testing,Designing other performance test
cases
–using thread groups,Using thread groups-Using thread groups
joins, in SQL,Joins
K
Kafka, data testing,Apache Kafka and Zerocode-Workflow
key performance indicators (KPIs), for backend performance,Key
Performance Indicators

L
large language models (LLMs),AI in Testing
left joins,Joins
Lighthouse,Lighthouse,Lighthouse
load tests (volume tests),Types of Performance Tests
localization testing,Localization and internationalization testing
M
machine learning (ML),AI in Testing
macro-level testing(seemicro- and macro-level testing)
manual exploratory testing,Manual Exploratory Testing-Key
Takeaways
–API testing,API Testing-WireMock
–Claude Desktop,Claude Desktop
–Postman,Postman-Postman
–WireMock,WireMock
–exercises,Exercises-Chrome DevTools
–API testing,API Testing-WireMock
–test case generation,Test Case Generation-Workflow
–exploring functionalities,Exploring a Functionality-Cross-
functional aspects
–cross-functional aspects,Cross-functional aspects
–failures/error handling,Failures and error handling

–functional user flows,Functional user flows
–UI look and feel,The UI look and feel
–mobile accessibility testing,Manual Exploratory Testing
–Synthetic Data Vault (SDV),Additional Testing Tools: Synthetic
Data Vault
–test case generation,Test Case Generation-Workflow
–test environment hygiene,Perspectives: Test Environment
Hygiene
–testing frameworks,Exploratory Testing Frameworks-Error
guessing method
–boundary value analysis,Boundary value analysis
–cause-effect graphing,Cause-effect graphing
–decision table,Decision table
–equivalence class partitioning,Equivalence class partitioning
–error guessing method,Error guessing method
–pairwise testing,Pairwise testing
–sampling,Sampling
–state transition,State transition
–testing strategy,Manual Exploratory Testing Strategy-Repeat
Exploratory Testing in Phases
–explore in parts,Explore in Parts
–repeat exploratory testing in phases,Repeat Exploratory
Testing in Phases
–understand the application,Understand the Application

–web UI testing,Web UI Testing-Chrome DevTools
–Auto Data Filler extension,Auto Data Filler extension
–browsers,Browsers
–Chrome DevTools,Chrome DevTools-Chrome DevTools
–Playwright MCP,Playwright MCP-Playwright MCP
Maven,Apache Maven-Apache Maven
MCP (Model Context Protocol),Setup
micro- and macro-level testing,Introduction to Micro and Macro Test
Types-End-to-end tests,Micro- and Macro-Level Testing
–contract tests,Contract tests
–end-to-end tests,End-to-end tests
–integration tests,Integration tests
–service tests,Service tests
–UI functional tests,UI functional tests
–unit tests,Unit tests
ML (machine learning),AI in Testing
mobile testing,Mobile Testing-Key Takeaways
–Accessibility Scanner,Accessibility Scanner
–app types,App Types
–cross-platform,Cross-platform
–hybrid,Hybrid
–mobile web,Mobile web
–native,Native

–progressive web,Progressive web
–Appium visual testing plug-in,Appium Visual Testing Plug-in
–architecture,Architecture
–Database Inspector,Android Studio’s Database Inspector
–devices,Devices
–device manufacturer,Device manufacturer
–hardware,Hardware
–operating system,Operating system
–pixel density,Pixel density
–screen size,Screen size
–exercises
–AI-assisted exploratory testing,Exploratory Testing-
Workflow
–UI functional tests: agentic test authoring,UI Functional
Tests-Workflow
–mobile testing pyramid,Perspectives: The Mobile Testing
Pyramid
–networks,Networks
–performance testing tools,Performance Testing Tools
–Appium,Appium’s Performance API
–Extended Controls: network throttler,Extended Controls:
Network Throttler
–The Monkey,The Monkey

–security testing tools,Security Testing Tools
–MobSF,MobSF
–Qark,Qark
–testing strategy,Mobile Testing Strategy-Other CFRs for Testing
–accessibility testing,Accessibility Testing
–CFRs for testing,Other CFRs for Testing
–data testing,Data Testing
–functional automated testing,Functional Automated Testing
–manual exploratory testing,Manual Exploratory Testing
–performance testing,Performance Testing
–security testing,Security Testing
–visual testing,Visual Testing
MobSF,MobSF
Model Context Protocol (MCP),Setup
Monkey, The (chaos engineering-equivalent app),The Monkey
multiple-user flows,Functional user flows
mutation testing,100% Automation Coverage!
N
nested queries, in SQL,Nested queries
network throttler,Extended Controls: Network Throttler
networks, mobile testing,Networks

O
operators, in SQL,Functions and operators
OWASP Dependency-Check,OWASP Dependency-Check
P
Pa11y CI node module,Pa11y CI Node Module
PageSpeed Insights,PageSpeed Insights
pairwise testing,Pairwise testing
Payment Card Industry Data Security Standard (PCI DSS),Payment
regulations: PCI DSS and PSD
payment regulations,Payment regulations: PCI DSS and PSD
Payment Services Directive (PSD),Payment regulations: PCI DSS
and PSD
penetration (pen) testing,Security Testing,Security Testing Strategy
performance API (Appium),Appium’s Performance API
performance testing,Performance Testing-Key Takeaways
–ApacheBench,ApacheBench
–Azure Load Testing,Azure Load Testing
–backend performance testing,Backend Performance Testing
Building Blocks-Step 6: Script and run the performance tests
–exercises,Exercises-Workflow
–factors affecting application performance,Factors Affecting
Application Performance
–KPIs,Key Performance Indicators

–load pattern types,Types of Load Patterns
–performance goals,Simple Performance Goals
–performance test types,Types of Performance Tests
–steps,Performance Testing Steps-Step 6: Script and run the
performance tests
–Chrome DevTools Performance panel,Chrome DevTools
Performance Panel-Chrome DevTools Performance Panel
–frontend performance testing,Frontend Performance Testing
Building Blocks-Frontend Performance Metrics
–Chrome DevTools,Chrome DevTools Performance Panel-
Playwright
–factors affecting,Factors Affecting Frontend Performance
–Lighthouse,Lighthouse-Lighthouse
–performance metrics,Frontend Performance Metrics
–Playwright,Playwright-Playwright
–RAIL model,RAIL Model
–visual testing,Frontend Performance Testing
–Gatling,Gatling
–JMeter,JMeter-Integrating into continuous integration
–mobile testing tools,Performance Testing Tools
–Appium,Appium’s Performance API
–Extended Controls: network throttler,Extended Controls:
Network Throttler
–The Monkey,The Monkey

–shift-left performance testing strategy,Performance Testing
Strategy
phishing cyberattacks,Phishing
Playwright
–AI-assisted test automation,Workflow
–performance testing,Playwright
–Typescript-Playwright framework,TypeScript–Playwright
Framework-Workflow: Agentic test authoring with Copilot
–agentic test authoring with Copilot,Workflow: Agentic test
authoring with Copilot-Workflow: Agentic test authoring
with Copilot
–creating a framework,Workflow: Creating a framework
–visual testing,Playwright-Workflow
Playwright MCP,Playwright MCP-Playwright MCP
portability testing,Additional Testing Tools: Testcontainers
Postman,Postman-Postman,Chrome DevTools and Postman
predicates, in SQL,Expressions and predicates
private data, GDPR definition,General Data Protection Regulation
(GDPR)
progressive web apps (PWAs),Progressive web
prompts-as-tests tools,Other AI-Powered Test Automation Tools and
Platforms
PSD (Payment Services Directive),Payment regulations: PCI DSS
and PSD

Q
Qark,Qark
quality gates,ReportPortal Dashboard
quality metrics, measuring,Measuring Quality Metrics-Measuring
Quality Metrics
R
RAIL model,RAIL Model
ransomware,Ransomware
RASP (runtime application self-protection),Security Testing Strategy
real user monitoring (RUM),PageSpeed Insights
release testing,Manual Testing
repeat flows,Functional user flows
ReportPortal dashboard,ReportPortal Dashboard
REST Assured (Java library),Setup-Workflow: REST Assured
reviewer agents,Workflow: Agentic Test Authoring with Claude
right joins,Joins
robotic process automation (RPA),Workflow
RUM (real user monitoring),PageSpeed Insights
runtime accessibility checkers,Automated Accessibility Auditing Tools
runtime application self-protection (RASP),Security Testing Strategy

S
sampling, in manual exploratory testing,Sampling
SAST (static application security testing) tools,Security Testing
Strategy
SCA (software composition analysis) tools,Security Testing Strategy
screen readers,Example: Screen Readers
screenshot testing,Introduction to Visual Testing
SDV (Synthetic Data Vault),Additional Testing Tools: Synthetic Data
Vault
security testing,Security Testing-Key Takeaways
–application vulnerabilities,Application Vulnerabilities-Application
Vulnerabilities
–Chrome DevTools and Postman,Chrome DevTools and Postman
–common cyberattacks,Common Cyberattacks-Cryptojacking
–exercises
–OWASP Dependency-Check,OWASP Dependency-Check
–ZAP,ZAP by Checkmarx-Integrating ZAP with CI
–mobile accessibility testing,Security Testing Tools
–MobSF,MobSF
–Qark,Qark
–security as a habit,Perspectives: Security Is a Habit
–Snyk platform,Snyk Platform

–STRIDE threat model,The STRIDE Threat Model-The STRIDE
Threat Model
–Talisman pre-commit hook,Talisman Pre-Commit Hook
–testing strategy,Security Testing Strategy-Security Testing
Strategy
–threat modeling,Threat Modeling-Security test cases from the
threat model
–AI-assisted threat modeling,AI-assisted threat modeling
–sample exercise,Sample threat modeling exercise-Sample
threat modeling exercise
–security test cases,Security test cases from the threat
model
select keyword, in SQL,Select
Selenium WebDriver,Selenium WebDriver-Selenium WebDriver
service tests
–automated functional testing,Service tests
–exercises,Exercises: Service Tests-Workflow: Agentic Test
Authoring with Claude
–agentic test authoring with Claude,Workflow: Agentic Test
Authoring with Claude-Workflow: Agentic Test Authoring
with Claude
–REST Assured,Setup-Workflow: REST Assured
service-oriented architecture,API Testing
shift-left testing,Shift-Left Testing-Shift-Left Testing,Cross-Browser
Testing

smoke testing,Continuous Testing Strategy
snapshot tests,Snapshot Tests,Visual Tests
Snyk,Snyk Platform
soak tests,Types of Performance Tests
social engineering cyberattacks,Social engineering
soft skills,Soft Skills, AI-Specific Soft Skills, and the Quality-First
Mindset,Soft Skills, AI-Specific Soft Skills, and the Quality-First
Mindset
software composition analysis (SCA) tools,Security Testing Strategy
spec-driven development,Other AI-Powered Test Automation Tools
and Platforms
SQL,SQL-AI assistance
–AI assistance,AI assistance
–create keyword,Create
–data testing,SQL-AI assistance
–expressions/predicates,Expressions and predicates
–filtering/grouping,Filtering and grouping
–functions/operators,Functions and operators
–insert keyword,Insert
–joins,Joins
–nested queries,Nested queries
–select keyword,Select
–sorting,Sorting

–update/delete,Update and delete
state transition, in manual exploratory testing,State transition
static application security testing (SAST) tools,Security Testing
Strategy
static code analyzers,Automated Accessibility Auditing Tools,
Supportability
Storybook,Storybook
stress tests,Types of Performance Tests
STRIDE threat model,The STRIDE Threat Model-The STRIDE Threat
Model
Synthetic Data Vault (SDV),Additional Testing Tools: Synthetic Data
Vault
T
Talisman,Talisman Pre-Commit Hook
test case, defined,Manual Exploratory Testing
test data hygiene,Perspectives: Test Environment Hygiene
test environment hygiene,Perspectives: Test Environment Hygiene
test pyramid,Automated Functional Testing Strategy
Testcontainers,Additional Testing Tools: Testcontainers
TestNG,TestNG
thread groups, performance testing with JMeter,Using thread
groups-Using thread groups
threat modeling,Threat Modeling-Security test cases from the threat
model

–AI-assisted threat modeling,AI-assisted threat modeling
–sample exercise,Sample threat modeling exercise-Sample threat
modeling exercise
–security test cases,Security test cases from the threat model
threats, defined,Building Blocks
Typescript-Playwright framework,TypeScript–Playwright Framework-
Workflow: Agentic test authoring with Copilot
–agentic test authoring with Copilot,Workflow: Agentic test
authoring with Copilot-Workflow: Agentic test authoring with
Copilot
–creating a framework,Workflow: Creating a framework
U
UI functional tests,UI functional tests
–exercises,Exercises: UI Functional Tests-Workflow: Agentic test
authoring with Copilot
–Java-Selenium WebDriver framework,Java–Selenium WebDriver
Framework-Workflow
–Apache Maven,Apache Maven-Apache Maven
–page object model,Page object model
–Selenium WebDriver,Selenium WebDriver-Selenium
WebDriver
–TestNG,TestNG
–mobile accessibility testing,UI Functional Tests-Workflow

–Typescript-Playwright framework,TypeScript–Playwright
Framework-Workflow: Agentic test authoring with Copilot
–agentic test authoring with Copilot,Workflow: Agentic test
authoring with Copilot-Workflow: Agentic test authoring
with Copilot
–creating a framework,Workflow: Creating a framework
unit tests
–for automated functional testing,Unit tests,Exercise: Unit Tests-
Workflow
–for visual testing,Unit Tests
universally unique identifier (UUID),Databases
update queries, in SQL,Update and delete
user experience (UX), and CFR testing,User experience
user flow (user journey),Manual Exploratory Testing
user personas, defined,Understand the Application
user story testing,Manual Testing
UUID (universally unique identifier),Databases
V
version control system (VCS),The Continuous Integration, Testing,
and Delivery Process
visual testing,Visual Testing-Key Takeaways
–basics,Introduction to Visual Testing
–BrowserStack Percy,BrowserStack Percy

–challenges,Perspectives: Visual Testing Challenges
–exercises
–Applitools Eyes,Applitools Eyes-Workflow
–Playwright,Playwright-Workflow
–frontend testing strategy,Frontend Testing Strategy-Accessibility
Testing
–accessibility testing,Accessibility Testing
–cross-browser testing,Cross-Browser Testing
–frontend performance testing,Frontend Performance
Testing
–functional end-to-end tests,Functional End-to-End Tests
–integration and component tests,Integration and
Component Tests
–snapshot tests,Snapshot Tests
–unit tests,Unit Tests
–visual tests,Visual Tests
–mobile accessibility testing,Visual Testing
–project-critical/business-critical use cases,Project- and
Business-Critical Use Cases-Project- and Business-Critical Use
Cases
–Storybook,Storybook
visual tests,Visual Tests
volume tests (load tests),Types of Performance Tests
vulnerabilities, defined,Building Blocks

W
Web Accessibility Initiative Accessible Rich Internet Applications
(WAI-ARIA),Robust
Web Content Accessibility Guidelines (WCAG),Web Content
Accessibility Guidelines: Principles and Levels-Robust
–principles and levels,Web Content Accessibility Guidelines:
Principles and Levels-Robust
web scraping cyberattacks,Web scraping
web services,API Testing
web UI testing,Web UI Testing-Chrome DevTools
–Auto Data Filler extension,Auto Data Filler extension
–browsers,Browsers
–Chrome DevTools,Chrome DevTools-Chrome DevTools
–Playwright MCP,Playwright MCP-Playwright MCP
WebPageTest,WebPageTest
WireMock,WireMock
World Wide Web Consortium Web Accessibility Initiative (W3C WAI)
international standards,The Accessibility Ecosystem
X
XSS (cross-site scripting) cyberattacks,Cross-site scripting
Z
ZAP (Zed Attack Proxy),ZAP by Checkmarx-Integrating ZAP with CI

–integrating ZAP with CI,Integrating ZAP with CI
–Manual Explore,Manual Explore
–scanning,Scanning
–ZAP Spider,ZAP Spider
Zerocode,Workflow-Workflow

About the Author
Gayathri Mohanis a quality engineering leader with over 17 years
of experience, including more than 15 years at Thoughtworks.
During this time, she held several global leadership positions,
including being part of the chief AI officer’s leadership team that
built and executed the global AI strategy at Thoughtworks; serving
as global quality engineering capability lead to design and roll out
skill development pathways; and acting as office tech principal to
help establish the Chennai office as a hub for AI and machine
learning excellence.
Currently based in the UK, she works as an independent technology
consultant, leading large-scale quality engineering modernization
initiatives. Her work focuses on integrating AI-driven test automation
workflows, advancing CI/CD practices, and enabling organizations to
build high-performing quality engineering ecosystems.
A recognized thought leader in the field, Gayathri has published
extensively, including articles onmartinfowler.comand coauthoring
the ebookPerspectives on Agile Software Testing(Thoughtworks).
She is also an active international speaker, delivering talks and
keynotes at leading industry conferences, including the Japan
Symposium on Software Testing (JaSST) Tokyo 2026.

Colophon
The animal on the cover ofFull Stack Testingis a lowland streaked
tenrec (Hemicentetes semispinosus). These small insectivorous
mammals are one of many species of tenrecs found on the island of
Madagascar. Lowland streaked tenrecs are typically found in
scrubland, tropical lowland rainforests, agricultural land, and even
some rural gardens on the eastern side of the island.
Lowland streaked tenrecs are easily identified by their long, pointed
black snouts and small, tailless bodies striped with black and yellow
quills. A crest of yellow spines covers the back of their necks. Their
barbed quills are detachable and can be used as a defense
mechanism; tenrecs also use the quills to communicate by rubbing
them together, producing a high-pitched sound. Fully grown lowland
streaked tenrecs are about five to seven inches long and weigh
between four and ten ounces.
Lowland streaked tenrecs are social and gather in groups of up to
20. They dig connected burrows for nesting and forage for
earthworms and insects individually or in small groups. In the winter,
they go into torpor, a state of reduced body temperature and
decreased metabolism. Females are only fertile for one year and are
reproductively active at 25 days old, making them the only species
of tenrec that can breed in the same season in which they were
born. Lowland streaked tenrecs are classified as a species of least
concern by the IUCN due to their widespread distribution, high
abundance, and high tolerance to areas with large numbers of
humans.
Many of the animals on O’Reilly covers are endangered; all of them
are important to the world.
The cover illustration is by Karen Montgomery, based on a black-and-
white engraving fromEnglish Cyclopedia. The series design is by
Edie Freedman, Ellie Volckhausen, and Karen Montgomery. The
cover fonts are Gilroy Semibold and Guardian Sans. The text font is

Adobe Minion Pro; the heading font is Adobe Myriad Condensed; and
the code font is Dalton Maag’s Ubuntu Mono.
