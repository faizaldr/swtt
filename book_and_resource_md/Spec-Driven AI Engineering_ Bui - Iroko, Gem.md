# Spec-Driven AI Engineering_ Bui - Iroko, Gem

Spec-Driven AI Engineering
Build Reliable Software from Requirements to Code
with AI Agents, Tests, and Production Workflows
ByGemIroko
A practical, self-contained guide to turning ideas into reliable
software with specifications, AI agents, tests, reviews, deployment,
and monitoring.

Copyright (c) 2026 Gem Iroko. All rights reserved.
No part of this publication may be reproduced, stored in a retrieval
system, or transmitted in any form or by any means without prior
written permission from the publisher or author, except for brief
quotations used in reviews or educational commentary.
This book is written for educational and professional learning
purposes. The examples, workflows, templates, and code-like
structures are provided as practical guidance, not as a guarantee of
fitness for any particular production system.
Technology changes quickly. Before you use any tool, command,
package, platform, or workflow in a live environment, review the
current documentation for that tool and test the workflow in a safe
environment first.
All product names, trademarks, and registered trademarks
mentioned in this book belong to their respective owners. Their use
here is for identification and educational explanation only.
First Edition.
Publisher: Gem Iroko
Printed edition prepared for black-and-white paperback readability.

Dedication
To every builder who wants AI to make software engineering clearer,
safer, and more reliable - not more chaotic.
May this book help you turn vague ideas into well-specified systems,
and may every project you build become easier to understand, test,
review, deploy, and maintain.

Acknowledgments
This book exists because software work is changing. Product
managers are writing more technical requests. Developers are
reviewing more AI-generated code. Teams are learning that speed
without structure can create hidden risk. Spec-driven engineering is
one practical answer to that challenge.
I am grateful to the engineers, product thinkers, testers, security
reviewers, technical writers, and AI practitioners whose daily work
shows that good software begins long before implementation.
Special appreciation goes to every reader who approaches AI-
assisted development with discipline. When you choose clear
requirements, measurable acceptance criteria, traceable tasks, and
reviewable changes, you help make AI-assisted engineering more
professional and dependable.
Finally, thank you to the builders who are not satisfied with shallow
prompting. This book is for you: the reader who wants to
understand the system, control the workflow, and build software
that can survive real use.

Table of Contents
Dedication
Acknowledgments
Preface
How to Use This Book
Who This Book Is For
What You Will Build Throughout This Book
Recommended Tools and Development Environment
Suggested Project Workspace
PART I
Foundations of Spec-Driven AI Engineering
Chapter 1
Why Spec-Driven AI Engineering Matters
Chapter 2
From Ideas to Engineering Intent
Chapter 3
The Spec-Driven AI Engineering Lifecycle
Chapter 4
Setting Up the Spec-Driven AI Engineering Workspace
Part II
Requirements, Specifications, and System Design
Chapter 5
Writing Clear Software Requirements
Chapter 6
Building a Product Requirements Document
Chapter 7
Creating Technical Specifications

Chapter 8
Designing Software Architecture with AI Support
Chapter 9
Data Models, APIs, and Integration Specs
Chapter 10
Requirements Traceability from Spec to Code
Part III
AI Agents, Prompts, and Controlled Spec-to-Code Workflows
Chapter 11
Working with AI Coding Agents
Chapter 12
Context Engineering for AI Development
Chapter 13
Prompting from Specifications
Chapter 14
Turning Specifications into Engineering Tasks
Chapter 15
GitHub and Version Control for AI Agent Workflows
Chapter 16
Building the Spec-to-Code Pipeline
Part IV
Test-Driven and Quality-Driven AI Engineering
Chapter 17
Test Planning Before Code Generation
Chapter 18
Using AI to Generate and Improve Tests
Chapter 19
Debugging AI-Generated Software
Chapter 20
Code Review and Refactoring with AI Agents

Part V
Security, Reliability, and Production Workflows
Chapter 21
Security-First Spec-Driven Engineering
Chapter 22
Reliability and Error Handling
Chapter 23
Deployment Planning and DevOps Workflows
Chapter 24
Monitoring, Maintenance, and Spec Drift
Part VI
Real-World Spec-Driven AI Engineering Projects
Chapter 25
Project 1 - Building a Task Management App from Requirements to
Tested Code
Chapter 26
Project 2 — Building an AI Customer Support System from Specs to
Deployment
Chapter 27
Project 3 - Building a SaaS Analytics Dashboard with a Spec-First
Workflow
Chapter 28
Capstone Project - Building a Production-Ready AI-Powered Web
Application
Part VII
Scaling Spec-Driven AI Engineering
Chapter 29
Working with Product Managers, Developers, and AI Agents
Chapter 30
Building a Repeatable Spec-Driven AI Engineering System
A Small Request from the Author

Appendices

Preface
AI coding agents can generate code quickly, but speed alone does
not create reliable software. A fast agent can also create the wrong
feature, miss a security rule, ignore an edge case, or produce code
that looks correct until the first real user touches it.
This book gives you a disciplined way to use AI in software
engineering. Instead of starting with a vague prompt and hoping for
good code, you begin with intent, requirements, specifications,
tasks, tests, review rules, deployment plans, and monitoring
expectations. The AI agent becomes a builder inside your
engineering system, not the system itself.
Spec-driven AI engineering is not about making the process heavy. It
is about making the process clear. You write just enough structure to
guide the work, reduce confusion, and make every AI-generated
output easier to inspect.
Throughout this book, you will move from idea to requirements,
from requirements to specifications, from specifications to tasks and
tests, and from tested implementation to review, deployment,
monitoring, and maintenance. Each step links to the next so you can
build repeatable workflows for any project.
The examples are self-contained. You do not need an external
repository to follow the book. When version control or GitHub-style
workflows appear, they are explained as optional collaboration
layers. The main value is the discipline: version your specs, connect
changes to requirements, review AI output, and keep the system
aligned after release.
CorePromiseofThisBook
YouwilllearnhowtocontrolAI-assistedsoftwaredevelopmentwithclear
artifacts:intent,requirements,specs,tasks,tests,codereviewrules,
deploymentplans,andmaintenanceloops.

OldHabit Spec-DrivenAlternative
Writeacceptancecriteria,tests,and
PrompttheAIandaccepttheresult
reviewrulesbeforeimplementation
Treatgeneratedcodeasadraftthat
Treatgeneratedcodeasfinished
mustbetestedandreviewed
Definelogging,monitoring,and
Fixproblemsafteruserscomplain
maintenanceexpectationsearly
Storerequirementsandspecsin
Letrequirementsliveinchathistory
reusableprojectdocuments

How to Use This Book
Read this book as a practical workflow, not as a collection of
separate theory chapters. Each part builds on the one before it. If
you follow the sequence, you will move from planning to
implementation to production in a controlled way.
When you see a template, copy it into your project notes and fill it
out. When you see a prompt box, adapt it to your own project.
When you see a checklist, use it before accepting AI-generated
work. The goal is not to memorize the book. The goal is to build a
repeatable engineering habit.
You can use any AI coding assistant with this book. The method
does not depend on one platform. What matters is that you give the
agent clear context, boundaries, acceptance criteria, tests, and
review instructions.
IfYouAre... BestReadingPath
ReadChapters1-16inorder,then
NewtoAI-assistedsoftware
completeProject1beforemovingto
development
productiontopics.
FocusonChapters5-16,thenuse
Chapters17-24tostrengthentesting,
AlreadyusingAIcodingtools
review,security,deployment,and
monitoring.
Startwiththetemplates,completethe
requirementsandspecs,thenfollow
Buildingarealproduct
theprojectchaptersasworking
examples.
ReadPartsV-VIIcarefullyandadapt
theteamworkflowtemplatefor
Leadingateam
product,engineering,testing,and
securityreview.
RecommendedPractice
DonotaskanAIagenttobuildafeatureuntilyoucanexplaintherequirement,
acceptancecriteria,expectedtests,failurestates,andreviewstandard.

Who This Book Is For
This book is for you if you want to use AI coding agents without
losing engineering discipline. You do not need to be an expert
architect, but you should be willing to think before you generate
code.
Audience WhatYouWillGain
Acompleteprocessforturningideas
Solodeveloperorindiebuilder intostructured,testable,deployable
software.
Apracticalbridgebetweenproduct
Productmanager goals,requirements,acceptance
criteria,andengineeringexecution.
AsaferwaytopromptAIagents,
Softwaredeveloper reviewgeneratedcode,andrefactor
withoutbreakingfeatures.
Aclearmethodforturning
QAortestengineer requirementsintotestplansbefore
implementationbegins.
Arepeatableworkflowforteam
Engineeringlead alignment,handoffs,review,quality
gates,andspecmaintenance.
Aprofessionalsoftwareengineering
Studentorcareerswitcher workflowthatteacheshowreal
systemsmovefromideatorelease.
This book is not for someone who wants a magic prompt that
replaces thinking. AI can accelerate implementation, but you still
need judgment, structure, testing, and review.

What You Will Build
Throughout This Book
You will build more than code. You will build an engineering system.
The chapters guide you through a chain of artifacts that make AI-
generated work easier to control and improve.
Figure FM.1 - The book roadmap from idea to monitored production system.
Part MainOutcome
Youunderstandwhyspecifications
PartI-Foundations makeAI-assisteddevelopmentsafer
andmorerepeatable.
Youcreateengineeringintent,PRDs,
PartII-Requirements,Specs,and
technicalspecs,architecturenotes,
Design
APIs,datamodels,andtraceability.
YoulearntogiveAIagentsstructured
PartIII-Agents,Prompts,and
context,turnspecsintotasks,and
Workflows
manageimplementationwork.
Youplantestsbeforecode,improve
PartIV-TestandQuality AI-generatedtests,debugfailures,and
review/refactorsafely.
Youdefinesecurity,reliability,
deployment,monitoring,and
PartV-SecurityandProduction
maintenanceexpectationsbefore
release.

Part MainOutcome
Youcompletethreeprojectworkflows
PartVI-Real-WorldProjects andacapstoneusingthesamespec-
firstmethod.
Youadaptthemethodforteams,
PartVII-ScalingtheSystem handoffs,qualitymetrics,andlong-
termrepeatableuse.

Recommended Tools and
Development Environment
You can complete the book with a simple local setup. Use the tools
you already know when possible. The workflow matters more than
the brand of tool.
Recommended
ToolArea Purpose
Choice
Writeintentdocuments,
Anydocumenteditoror PRDs,technicalspecs,
Textandspecs
markdowneditor checklists,andreview
notes.
Editsourcefiles,inspect
generatedcode,run
Codeeditor Anymoderncodeeditor
tests,andreview
changes.
Generatedrafts,propose
AnyAIcodingorchat tests,explainerrors,and
AIassistant
assistant assistwith
implementation.
Trackspecs,tasks,tests,
LocalGitoranother
Versioncontrol codechanges,and
change-trackingmethod
reviewdecisions.
Pythonand/orNode.js,
Runexamples,simple
Runtime dependingonthe
APIs,tests,andscripts.
project
SQLiteforlearning;
Modelapplicationdata
PostgreSQLfor
Database andpracticemigration
production-style
planning.
thinking
Checkendpoints,
Browser,terminal,or
APItesting payloads,errors,and
APItestingclient
authenticationbehavior.
Docker-compatible Packageandtest
Containerization	containertooling,	deploymentbehaviorina
optional repeatableenvironment.

NoExternalRepositoryRequired
Thisbookisdesignedtobeself-contained.YoumayuseGitHuboranother
hostingserviceifyouwantcollaborationfeatures,butthecoreworkflowcanbe
practicedlocallywiththetemplatesandexamplesinsidethebook.

Suggested Project Workspace
A clean project workspace keeps your specifications, tasks, tests,
and code connected. The folder names below are suggestions. You
may rename them, but keep the separation clear.
spec-driven-project/
docs/
01-engineering-intent/
02-product-requirements/
03-technical-spec/
04-api-and-data-design/
05-test-specification/
06-security-and-reliability/
07-deployment-and-monitoring/
08-maintenance-and-spec-drift/
tasks/
agent-task-list.md
review-notes.md
app/
source-code-goes-here/
tests/
unit/
integration/
end-to-end/
changelog/
release-notes.md
You are now ready to begin the main book. Start with the first
chapter and keep the central rule in mind: AI should not guess the
engineering system. You define the system first, then use AI to help
build within it.
TheOneRuletoRemember
Beforecode,writethespec.Beforeacceptingcode,runthetests.Before
release,reviewtherisks.Afterrelease,updatethespecwhenrealitychanges.

PARTI
Foundations of Spec-Driven
AI Engineering

Chapter 1
Why Spec-Driven AI
Engineering Matters
Build reliable software by linking requirements,
specifications, tasks, tests, code, review, and
deployment.
AI can help you move faster, but speed without structure can
produce fragile software. This chapter gives you the foundation for
the entire book: you will learn why random AI coding breaks down,
why requirements must come before implementation, and how a
spec-driven workflow helps you guide AI agents toward reliable
software instead of unpredictable output.
You will not start with a large system. You will start with a simple
idea and learn how that idea becomes a requirement, a
specification, a task, a test, and finally reviewed code. This step-by-
step chain is the heart of Spec-Driven AI Engineering.
Bytheendofthischapter,
Whyitmatters
youwillbeableto
Explainthedifferencebetween Youneedtoknowwhystructureimproves
randomAIcodingandspec- AIoutputbeforeyoucanapplythe
drivenAIengineering. workflow.
Describewhyvagueprompts YouwillavoidaskingAIagentstoguess
createweaksoftware. requirements,architecture,andquality
rules.
Traceasimplefeaturefrom Youwillseehoweverylaterchapter
requirementtocode. connectstothenextstageofengineering
work.

Bytheendofthischapter,
Whyitmatters
youwillbeableto
Understandyournewrolewhen Youstayresponsiblefordirection,
workingwithAIcodingagents. constraints,quality,review,andrelease
decisions.
Usethecompleteworkflowthat Youwillfollowthesamepathinevery
guidesthisbook. project:idea,requirements,specs,tasks,
tests,code,review,anddeployment.
Learning Note: How to read this chapter
Readthischapterasyourmapforthewholebook.Donotrushpastthe
workflow.Everylaterchapterexpandsonepartofthechainintroducedhere.
1.1TheProblemwithRandomAICoding
Random AI coding happens when you ask an AI assistant or coding
agent to build software before you clearly define what the software
must do. The prompt may sound simple: "Build me a task
management app" or "Create a login system." The problem is that
those prompts hide too many decisions.
A task management app can mean many things. It may need
personal tasks, team tasks, priorities, due dates, comments,
notifications, file uploads, permissions, reports, or admin controls. A
login system may need password reset, account lockout, two-factor
authentication, session expiry, emailverification, audit logs, and role-
based access. If you do not define those details, the AI fills the gaps
with assumptions.
Assumptions are dangerous because they are invisible at first. The
generated code may run, but you may later discover that it does not
match the real product need. That is how fast code becomes
expensive rework.
Spec-Driven Rule: You cannot review what you never
defined
Iftherequirementisvague,thecodecannotbejudgedfairly.Youmaydislike
theresult,buttheAIhadnocleartarget.Spec-drivenworkgivesthetarget
first,thenaskstheAItohelpyoumovetowardit.

RandomAIcoding
Whatitcauses Spec-drivencorrection
symptom
| Youstartwitha | TheAIinventsmissing | Writetherequirement |
| --- | --- | --- |
| vagueprompt. | productrules. | beforeaskingforcode. |
| Youaskfora | TheAIproducestoo | Breaktheworkintosmall |
| completeappat | muchcodetoreview once. safely. | tasks. |
| Youskipacceptance | Youcannottellwhether | Definesuccessconditions |
| criteria. | thefeatureisfinished. | beforeimplementation. |
| Youtestonlyafter | Bugsarediscoveredlate | Plantestsfromrequirements |
| thecodeexists. | andareharderto isolate. | beforecoding. |
| Youacceptchanges | Hiddensecurity,data, | Reviewcodeagainstthe |
| withoutreview. | andlogicissuesenter | specbeforemovingforward. theproject. The goal of this book is not to slow you down with paperwork. The goal is to help you move faster without losing control. A small, clear specification can prevent hours of debugging, rewriting, and arguing with AI-generated code. Figure1.1RandomAIcodingmovesquicklybutdependson hiddenassumptions.Spec-drivenAIengineeringgivestheAIa structuredpathtofollow. |

1.2Why"VibeCoding"BreaksDowninReal
Projects
"Vibe coding" is a casual way of describing software work where you
keep prompting the AI until the result feels right. This can be useful
for experiments, prototypes, or learning. It becomesweak when the
project must serve real users, handle real data, or survive future
changes.
A prototype can tolerate rough edges. A real project cannot. Once
users depend on your software, you need predictable behavior. You
need to know what each feature is supposed to do, what it must not
do, what errors it should handle, and how you will prove it works.
The breakdown usually happens in stages. First, the AI produces
something impressive. Then you ask for changes. The new changes
conflict with earlier assumptions. You ask for fixes. The fixes create
new issues. The project grows, but the structure does not grow with
it. Eventually, nobody knows which behavior is intentional and which
behavior is accidental.
Prototypethinking Productionthinking
"Makeitworkquickly." "Makeitworkcorrectly,safely,and
repeatedly."
TheAIcandecidemanydetails. Importantdecisionsmustbewritten
andreviewed.
Manualtestingisenough. Testsmustverifydefinedrequirements.
Architecturecanbeadjustedlater. Architecturechoicesaffectsecurity,
scale,andmaintenance.
Ifitlooksgood,itisprobablyfine. Ifitmatchesthespecandpassestests,
itisreadytoreview.
This does not mean you should never explore with AI. Exploration is
valuable. The mistake is treating exploration as engineering. In this
book, you will use AI for both discovery and implementation, but you
will separate the two activities. First you explore and clarify. Then
you specify and build.

Practical Rule: Exploration is not implementation
YoucanuseAItobrainstormfeatures,comparedesigns,ordiscoveredge
cases.Butonceyoudecidewhattheprojectshoulddo,youmustturnthat
decisionintoaclearrequirementbeforeaskingforimplementation.
1.3WhatSpec-DrivenAIEngineeringMeans
Spec-Driven AI Engineering is a practical workflow for building
software with AI support by using specifications as the source of
direction. A specification does not need to be a huge document. It
can be a focused, structured description of what must be built, how
it should behave, how it will be tested, and what limits the AI must
respect.
The key idea is simple: before the AI writes or changes code, you
give it a clear engineering target. That target may be a requirement,
a product specification, a technical design, a task card, a test plan,
or a review checklist. Each document narrows the work and reduces
guessing.
In this book, spec-driven work follows this chain:
Idea:the rough thing you want to build.
Requirement:the behavior or quality the software must
provide.
Product specification:the user-facing scope, flows, and
acceptance criteria.
Technical specification:the architecture, data, APIs,
security rules, and constraints.
Task:the small engineering work item an AI agent or
developer can complete.
Test:the proof that the task satisfies the requirement.
Code:the implementation that follows the spec.
Review:the check that code, tests, and behavior match the
original intent.
Deployment:the controlled release of the reviewed work.
That chain gives you a simple way to measure progress. You are not
finished because the AI generated files. You are finished when the

implementation can be traced back to the requirement and verified
by tests.
MiniExample:Oneideamovingthroughthechain
Rawidea:
Createasimpleappwhereuserscanmanagepersonaltasks.
Requirement:
REQ-001:Asigned-inusermustbeabletocreateataskwithatitle,
optionaldescription,andduedate.
Acceptancecriteria:
-Thetitleisrequired.
-Theduedateisoptional.
-Thetaskbelongsonlytotheuserwhocreatedit.
-Theappshowsaclearerrorifthetitleismissing.
Implementationtask:
BuildthetaskcreationendpointandvalidationlogicforREQ-001.
Testcase:
Whenthetitleismissing,theendpointreturnsavalidationerrorandno
taskissaved.
1.4FromPromptingtoEngineeringDiscipline
Prompting is useful, but prompting alone is not a software
engineering process. A prompt is an instruction. Engineering
discipline is the system that tells you what to instruct, when to
instruct it, how to verify the result, and how to prevent uncontrolled
changes.
When you move from prompting to engineering discipline, you stop
asking AI to own the project. You use AI as a capable assistant
inside a controlled workflow. You define the goal. You define the
boundaries. You decide what is acceptable. The AI helps you move
faster inside those boundaries.
This is the difference between asking for a whole product and asking
for one verified step.

Weakprompt Spec-drivenprompt
Buildaloginsystem. UsingREQ-001andtheauthenticationtechnicalspec
below,implementonlytheemail/passwordlogin
endpoint.Donotaddpasswordreset,sociallogin,or
accountroles.Generateunittestsfortheacceptance
criteriabeforeimplementation.
Maketheappbetter. Reviewthetaskcreationworkflowagainstthe
acceptancecriteria.Listmissingvalidationsfirst.Then
proposeonlythesmallestcodechangesneededto
satisfytherequirement.
Fixthebugs. Usethefailingtestoutputandtherequirementbelow
toidentifytherootcause.Explainthemismatch
betweenexpectedbehaviorandcurrentbehavior
beforesuggestingapatch.
Notice the difference. The weak prompt gives the AI a large open
space. The spec-driven prompt gives the AI a bounded job. It also
tells the AI what not to do. Boundaries matter because AI agents are
often helpful beyond the task, and that helpfulness can become
uncontrolled scope creep.
Key Idea: A good prompt is not a replacement for a good
specification
TheprompttellstheAIwhattodonext.ThespecificationtellstheAIwhatthe
softwareissupposedtobecome.Youneedboth.
1.5WhyRequirementsMustComeBefore
Code
Requirements come before code because they define the standard
that the code must satisfy. Without requirements, you may still get
working code, but you cannot know whether it is the right code.
A requirement should be specific enough that you can test it. For
example, "users should manage tasks" is not strong enough. It does
not say what managing means. A better requirement says: "A
signed-in user must be able to create, update, complete, and delete
only their own tasks." That requirement tells you more about
behavior, ownership, permissions, and future tests.

Requirements also protect you from accidental feature growth. If the
requirement says personal tasks only, the AI should not add teams,
comments, file uploads, or billing. Those may be useful later, but
they are not part of the current scope.
Requirement Beginner-friendly
Example
element meaning
| Actor | Whousesthefeature. | Asigned-inuser |
| --- | --- | --- |
| Action | Whattheactormustbe abletodo. | createatask |
| Object | Whattheactionaffects. | apersonaltask |
| Rule | Whatmustalwaysbe | thetaskbelongsonlyto true. thecreator |
| Acceptancecriterion | Howyouknowthe | missingtitlereturnsa featureworks. validationerror A useful requirement becomes the seed for every later document. The product specification expands the user behavior. The technical specification explains the implementation approach. The task card defines the work. The test plan proves the behavior. The code implements the decision. The review checks that nothing drifted away from the original need. Figure1.2Afeatureshouldbetraceablefromrequirementto specification,task,test,code,andreview. |

Quality Rule: Testability is the first quality filter
Ifyoucannottestarequirement,rewriteit.Arequirementthatcannotbetested
willeventuallybecomeadebateinsteadofanengineeringtarget.
1.6HowAIAgentsChangeSoftware
Development
AI agents change software development because they can do more
than answer questions. Depending on the tool you use, an agent
may inspect files, propose changes, edit code, generate tests, run
commands, explain failures, and suggest improvements. This makes
the agent powerful, but it also increases the need for control.
A simple chatbot usually waits for your next message. A coding
agent may continue working across several files. If your instruction
is vague, the agent may make broad changes. Ifyour instruction is
specific, the agent can become a disciplined implementation partner.
In spec-driven AI engineering, you do not treat the agent as the
project owner. You treat the agent as an assistant that receives
bounded work. The specification is the boundary. The task card is
the next move. The test plan is the proof. Your review is the quality
gate.
| Agentcapability | Riskwithoutspecs | Howyoucontrolit |
| --- | --- | --- |
| Generatecode | Thecodemaysolvethe | Givetherequirementand |
| quickly | wrongproblem. | acceptancecriteriafirst. |
| Modifyseveralfiles | Theagentmaychange | Limitthetasktospecific unrelatedareas. filesormodules. |
| Generatetests | Thetestsmayonlyconfirm thecurrentimplementation. requirementsbeforecode. | Askfortestsfrom |
| Explainerrors | Theexplanationmayguess withoutenoughcontext. behavior,andtherelated requirement. | Providelogs,expected |
| Refactorcode | Therefactormaybreak | Requiretestsandaclear hiddenbehavior. refactoringgoal. |

Figure1.3AIagentsaremostusefulwhenrequirements,
specs,tasks,andtestsactasguardrails.
This is why the book does not teach you to simply "ask better
prompts." It teaches you to build a complete working system around
the prompts. The prompt is only one part of the process.
1.7TheNewRoleoftheDeveloperinAI-
AssistedEngineering
AI does not remove your responsibility as a developer. It changes
where your responsibility is most valuable. Instead of spending all
your effort typing every line of code, you spend more effort defining
the right problem, shaping the design, controlling the workflow,
reviewing output, and protecting quality.
This new role requires discipline. You must be able to say: "This is
the requirement. This is the scope. This is the design constraint. This
is the test. This is the smallest safe change. This is not part of the
task."
Oldemphasis NewemphasiswithAIagents
Writingmostcodemanually. Directing,reviewing,andimprovingAI-
assistedimplementation.
Startingfromimplementation Startingfromrequirementsand
details. acceptancecriteria.

Oldemphasis NewemphasiswithAIagents
Testingafterthefeatureisbuilt. Planningtestsbeforecodegeneration.
Relyingonmemoryforproject Writingdecisionsintospecs,taskcards,
decisions. andchecklists.
Fixingissuesaftertheyspread. Usingtraceabilityandreviewtocatch
driftearly.
You still need technical judgment. In fact, AI makes judgment more
important. The faster code appears, the faster mistakes can enter
the project. Your job is to make sure speed does not outrun clarity.
Professional Rule: You are the engineer, not the passenger
AnAIagentcandraft,implement,test,andexplain.Butyouarestillresponsible
fordirection,correctness,safety,andreleasedecisions.
1.8TheCompleteSpec-DrivenAIEngineering
Workflow
The workflow used throughout this book is simple enough for
beginners and structured enough for serious software work. You will
use it repeatedly until it becomes natural.
Step 1 - Capture the idea:Write the rough product or
feature idea in plain language.
Step 2 - Define requirements:Convert the idea into
specific behavior, rules, constraints, and acceptance criteria.
Step 3 - Write the product specification:Clarify the user
flow, feature scope, out-of-scope items, and success
conditions.
Step 4 - Write the technical specification:Define
architecture, data, APIs, validation, security, and error
handling.
Step 5 - Create tasks:Break the work into small, ordered,
testable units.
Step 6 - Plan tests:Write the checks that prove each
requirement is satisfied.

Step 7 - Generate or write code:Implement one task at a
time using the spec and test plan as context.
Step 8 - Review the result:Compare the implementation
against the requirement, spec, and tests.
Step 9 - Prepare for deployment:Check configuration,
errors, logging, rollback, and production readiness.
Step 10 - Maintain the spec:Update documentation when
decisions or behavior change.
| Stage | Mainquestion | Outputyoucreate |
| --- | --- | --- |
| Idea | Whatareyoutryingto build? | Projectbrief |
| Requirements | Whatmustthesoftwaredo? acceptancecriteria | Requirementlistwith |
| Productspec | Howshouldtheuser | Productrequirements experiencework? document |
| Technicalspec | Howshouldthesystembe | Architecture,data,API,and built? securitynotes |
| Tasks | Whatisthenextsmall | Agent-friendlytasklist change? |
| Tests | Howwillyouproveit | Unit,integration,anduser- works? flowtests |
| Code | Whatimplementsthetask? | Focusedimplementation |
| Review | Doesitmatchthespec? | Reviewnotesandfixes |
| Deployment | Canitrunsafelyoutside yourmachine? | Deploymentchecklist |
| Maintenance | Didthespecstaycurrent? | Updateddocumentationand decisionlog You can use this workflow whether you are working alone or with a team, whether the project is small or large, and whether you use a simple AI assistant or a more advanced coding agent. The important thing is that you never ask AI to guess the whole project at once. |

Template:AsmalltaskcardanAIagentcanfollow
Spec-driventaskcard:
TaskID:TASK-001
Relatedrequirement:REQ-001
Goal:Implementtaskcreationforsigned-inusers.
Scope:
-Createtaskwithtitle,optionaldescription,andoptionaldue
date.
-Savethetaskunderthecurrentuser'saccount.
-Returnvalidationerrorwhentitleismissing.
Outofscope:
-Teamtasks
-Notifications
-Fileattachments
Testsrequired:
-Validtaskiscreatedsuccessfully.
-Missingtitlereturnsvalidationerror.
-Usercannotcreateataskforanotheraccount.
Reviewchecklist:
-CodematchesREQ-001.
-Nounrelatedfeaturewasadded.
-Testspass.
-Errormessagesareclear.
1.9WhatYouWillLearninThisBook
This book will guide you through the full journey from a rough idea
to a production-ready software workflow. You will not be asked to
depend on external companion files. The templates, prompts,
examples, task cards, checklists, and project materials you need will
be included directly in the book.
You will begin by learning how to write requirements and product
specifications. Then you will learn how to create technical
specifications, architecture decisions, data models, API contracts,
task plans, and test plans. After that, you will learn how to use AI
agents within those boundaries to implement features, debug

failures, review code, prepare deployment, and maintain the system
after release.
The goal is not to make you dependent on AI. The goal is to help
you become a better engineering leader for AI-assisted work. You
will learn how to direct the machine instead of being directed by its
output.
As you move through the book, keep one question in mind:
Reflection: The central question
Canthisfeaturebetracedfromrequirementtospecification,task,test,code,
review,anddeployment?Iftheanswerisyes,youarepracticingSpec-DrivenAI
Engineering.Iftheanswerisno,thereisagaptofix.
KeyTakeaways
Random AI coding is fast, but it often hides assumptions that
become bugs, rework, and confusion.
Spec-driven AI engineering gives the AI a clear target before
it writes or changes code.
Requirements must come before code because they define
what correct behavior means.
A good workflow connects idea, requirement, specification,
task, test, code, review, deployment, and maintenance.
AI agents are powerful, but they need guardrails: specs, task
cards, test plans, and human review.
Your role shifts from typing every line to directing,
constraining, reviewing, and improving the work.

ReviewQuestions
1.Why does a vague prompt often produce weak software?
2.What is the difference between exploration and
implementation?
3.Why should a requirement be testable?
4.What is the purpose of a task card in an AI-assisted
workflow?
5.How does traceability help you find missing or incomplete
work?
6.What responsibilities remain with you even when an AI agent
writes code?
PracticalExercises
Use these exercises to practice the core idea of the chapter. Keep
your answers short and specific. The purpose is not to write a long
document. The purpose is to make the next engineering step clear.
| Exercise | Yourtask | Suggesteddirection |
| --- | --- | --- |
| 1.Rewritea | Turn"Buildmeanotesapp" | Definetheactor,action, |
| vagueprompt | intooneclearrequirement withacceptancecriteria. successcondition. | object,businessrule,and |
| 2.Createatask | Createonesmalltaskfor | Statethescope,out-of- |
| card | implementingthenote | scopeitems,requiredtests, creationfeature. andreviewchecklist. |
| 3.Findhidden | ListfivequestionstheAI | Thinkaboutauthentication, |
| assumptions | wouldneedansweredbefore buildingthenotesapp. permissions,anddeletion rules. | storage,validation, |
| 4.Traceone | Tracenotecreationfrom | WriteREQ-001,TASK-001, |
| feature | requirementtotest. | andonetestcase. |

ModelAnswer:Avaguepromptrewrittenasarequirement
SuggestedanswerforExercise1:
REQ-001:Asigned-inusermustbeabletocreateapersonalnotewitha
requiredtitleandoptionalbodytext.
Acceptancecriteria:
-Thetitleisrequired.
-Thebodytextisoptional.
-Thenotebelongsonlytothesigned-inuser.
-Thesystemreturnsaclearvalidationerrorwhenthetitleismissing.
-Thenewnoteappearsintheuser'spersonalnoteslistaftercreation.
ChapterChecklist
You can explain why random AI coding creates risk.
You can describe the spec-driven workflow in the correct
order.
You can turn a rough idea into one clear requirement.
You can explain why tests should be planned before
implementation.
You can describe how an AI agent should be controlled with
specs, tasks, and review.
You understand that every chapter in this book builds on the
requirement-to-code chain.
InSummary
Spec-Driven AI Engineering helps you move from unpredictable AI
output to controlled software delivery. Instead of asking an AI agent
to guess the product, you define requirements, specifications, tasks,
and tests first. This chapter showed why vague prompts create
hidden assumptions, why requirements must come before code, and
why AI agents become safer when they work inside guardrails. In
the next chapter, you will take the first practical step: turning a
rough idea into clear engineering intent.

Chapter2
From Ideas to Engineering
Intent
Turn a rough idea into a clear build direction before you ask an AI
agent to create software.
In Chapter 1, you saw why random AI coding creates fragile
software. This chapter gives you the first practical skill in the spec-
driven workflow: turning a rough idea into engineering intent.
Engineering intent is the clear build direction that sits between an
idea and a formal specification. It does not describe every screen,
database table, or function. Instead, it explains what problem you
are solving, who you are solving it for, what outcome matters, what
constraints must be respected, and what kind of system should be
built next.
You will use this chapter every time you begin a new project. Before
you write requirements, before you prompt an AI agent, and before
you create tasks, you will first clarify intent.
BEGINNERRULE
DonotaskanAIagenttobuildfromavagueidea.First,converttheideainto
engineeringintent.Aclearintentdocumentbecomesthestartingpointfor
requirements,specifications,tasks,tests,andcode.
Bytheendofthischapter,you
Whyitmatters
willbeableto
Separatearawideafromabuild- YouavoidaskingAItoguessimportant
readydirection. productdecisions.
Definetherealproblembefore Youreducewasteandavoidbuilding
choosingfeatures. thewrongsystem.
Identifyusers,goals,andconstraints. Youmakethesoftwareuseful,realistic,
andtestable.

Bytheendofthischapter,you
Whyitmatters
willbeableto
WriteanEngineeringIntent Youcreatethebridgefromideato
Document. requirements.
Turnoneroughappideaintoaclear Youpracticethesameworkflowused
builddirection. throughoutthebook.
Figure2.1:Arawideabecomesusefulonlyafteryouclarifythe
problem,users,goals,andconstraints.
2.1UnderstandingtheRawProductIdea
Every software project starts as a rough idea. The idea may come
from a business owner, a customer complaint, a team meeting, your
own observation, or a quick message such as, "I need an app that
helps people manage tasks."
That sentence sounds useful, but it is not ready for engineering
work. It does not tell you who will use the app, what problemit
solves, what features are required, what must be excluded, how
success will be measured, or what limits the system must respect.
A raw idea is valuable because it contains direction. It is risky
because it also hides assumptions. Your first job is not to code. Your
first job is to make the hidden assumptions visible.
Rawideaquestion Whatyouaretryingtouncover
Whoisthisfor? Theactualuser,notjusttheperson
requestingthesystem.
Whatproblemhurtsenoughto Thebusinessoruserpainbehindtheproject.
solve?

Rawideaquestion Whatyouaretryingtouncover
Whatoutcomeshould Themeasurableresultthesoftwareshould
improve? produce.
Whatmustthesystemnotdo? Boundariesthatpreventscopecreep.
Whatconstraintsalreadyexist? Budget,time,device,data,security,process,
orteamlimits.
Promptbox2.1—Clarifyarawidea
Youarehelpingmeclarifyarawsoftwareideabeforewritingrequirements.
Idea:[pastetheideahere]
Askmethesmallestsetofquestionsneededtoidentifytheproblem,users,
goals,constraints,andscopeboundaries.Donotdesignthesolutionyet.
2.2SeparatingVisionfromImplementation
A common beginner mistake is to mix the product vision with
implementation decisions too early. Vision explains what the
software should achieve. Implementation explains how you might
build it.
For example, "small businesses need to track customer orders more
accurately" is vision. "Build it with a dashboard, a PostgreSQL
database, and a payment integration" is implementation. Both
matter, but they do not belong in the same thinking stage.
If you jump into implementation too early, you may choose tools,
screens, or data structures before you understand the real problem.
Spec-driven AI engineering slows you down at the right moment so
that you can move faster later.

Figure2.2:Keepthevisionclearbeforeyoucommitto
implementationchoices.
Visionstatement Implementationstatement
Youwantcustomerstoplaceorders Youmayneedanorderform,database,
withoutcallingtheoffice. notifications,andadmindashboard.
Youwantstudentstofindclass Youmayneedsearch,categories,file
materialsfaster. upload,andaccesscontrol.
Youwantsupportagentstoanswer Youmayneedaknowledgebase,
repeatedquestionsfaster. retrievalworkflow,andconversation
logs.
PRACTICALRULE
Writethevisioninplainlanguagefirst.Thenwritepossibleimplementation
ideasseparately.Thisprotectsyoufromforcingasolutionbeforetheproblemis
clear.
2.3DefiningtheProblemClearly
A weak project begins with a feature request. A strong project
begins with a problem statement. A feature request says what
someone thinks should be built. A problem statement explains why
something needs to be built.
You can use a simple formula: Who is affected, what difficulty do
they face, what happens because of that difficulty, and what
improvement should the software create?
This formula keeps you focused on the real need. It also gives your
AI agent better context later because the agent can reason from the

problem instead of guessing from a feature name.
Weak problem
Stronger problem statement
statement
We need a task app. Small project teams lose track of task ownership and
deadlines, which causes missed work and repeated status
meetings. The system should help each person see
assigned work, due dates, and progress clearly.
We need a chatbot. Support staff answer the same basic questions every day,
which slows response time. The system should help
customers get accurate answers from approved knowledge
before escalating to a person.
We need a dashboard. Managers cannot see sales, refunds, and customer activity
in one place, which delays decisions. The system should
summarize key metrics in a clear daily view.
Promptbox2.2—Improveaproblemstatement
Rewritethisvaguesoftwarerequestasaclearproblemstatement.
Request:[pasterequest]
Usethisstructure:affecteduser,currentdifficulty,consequence,desired
improvement.Keepitspecificanddonotinventfeatures.
2.4IdentifyingUsers,Goals,andConstraints
After you define the problem, you need to identify three things:
users, goals, and constraints. These three elements prevent the
project from becoming too broad.
Users tell you who the system must serve. Goals tell you what
success looks like. Constraints tell you what limits the design.
Without these three elements, your specification will look complete
while still being unclear.
Do not describe users as "everyone." A system built for everyone
usually satisfies no one well. Start with the primary user, then add
secondary users only when their needs are different enough to
matter.
| Element | Question to answer | Example |
| --- | --- | --- |
| Primary user | Who uses the system most often? updates assigned tasks. | A project team member who |
| Secondary user | Who reviews, manages, or supports the system? progress and deadlines. | A team lead who checks |

| Element | Question to answer | Example |
| --- | --- | --- |
| Goal | What should improve after the system exists? clearer task ownership. | Fewer missed deadlines and |
| Constraint | What must limit the design? | The first version must work on mobile and desktop browsers. |
| Risk | What could make the project fail? updating tasks takes too long. | Users may ignore the app if |
IMPORTANTDISTINCTION
Agoalisnotthesameasafeature."Createtaskcomments"isafeature."Make
taskdiscussionseasiertofollow"isagoal.Featuresaredesignchoices.Goals
explaintheresultyouwant.
2.5TurningBusinessNeedsintoSoftware
Direction
Business needs are usually written in human language: reduce
delays, improve reporting, serve customers faster, avoid errors, save
money, increase trust, or make work easier. Your job is to translate
those needs into software direction.
Software direction does not yet mean final code. It means you can
now say what type of system should be specified. You can identify
the main capabilities, the important data, the user actions, and the
quality expectations.
This step is where the project starts becoming buildable. The
business need becomes a product direction, the product direction
becomes requirements, and the requirements later become tasks
and tests.
Businessneed Softwaredirection
Reducemisseddeadlines. Buildtaskownership,duedatetracking,
reminders,andprogressvisibility.
Answercustomerquestions Buildacontrolledsupportassistantthatretrieves
faster. answersfromapprovedknowledge.
Improvedailydecision- Buildadashboardthatsummarizesthemost
making. importantmetricsandchanges.
Reducemanualapproval Buildaworkflowsystemwithstatustracking,
delays. reviewsteps,andaudithistory.

Promptbox2.3—Translatebusinessneedintosoftwaredirection
Convertthisbusinessneedintosoftwaredirection.
Businessneed:[pasteneed]
Return:primaryusers,maincapabilities,keydata,qualityexpectations,and
whatshouldbeexcludedfromthefirstversion.
2.6AvoidingAmbiguousProjectRequests
Ambiguity is one of the biggest causes of poor AI-generated
software. AI agents are very good at filling gaps. The problem is that
they may fill those gaps differently from what you actually need.
Your goal is not to remove every unknown before you start. That
would be unrealistic. Your goal is to remove dangerous ambiguity:
the type of unclear statement that can cause the wrong feature,
wrong workflow, wrong data model, or wrong security behavior.
When a request feels simple, test it by asking what could be
interpreted in more than one way. If different people could build
different systems from the same sentence, the request is not clear
enough yet.
| Ambiguous request | Why it is dangerous | Clearer version |
| --- | --- | --- |
| Users can create tasks. | It does not define fields, | A signed-in user can create a ownership,deadlines, or task with title, description, due permissions. date, priority, and assignee. |
| Admins can manage | It does not say what manage | An admin can view users, |
| users. | means. | deactivate accounts, reset roles, and see account status. |
| The dashboard should | It does not define the | The dashboard shows daily |
| show reports. | reports or time period. | totals for active users, completed tasks, overdue tasks, and new comments. |
| The app should be | It is too broad to test. | The app requires login, role- secure. based access, input validation, and safe error messages. |
AMBIGUITYTEST
Beforemovingforward,ask:Couldtwocompetentdevelopersbuildtwo
differentthingsfromthisinstruction?Ifyes,theinstructionneedsmoredetail.

2.7WritinganEngineeringIntentDocument
The Engineering Intent Document is the first formal artifact in your
spec-driven workflow. It is shorter than a product requirements
document and simpler than a technical specification. Its job is to
capture the build direction before you expand it into detailed
requirements.
Think of it as a one-page agreement with yourself. It tells you what
you are trying to build, why it matters, who it is for, what success
means, what should be included first, what should wait, and what
limits the project.
This document is also a strong input for AI. Instead of prompting
from a vague idea, you can give the AI agent a clear intent
document and ask it to help generate requirements, user stories,
acceptance criteria, or a technical specification.
Figure2.3:TheEngineeringIntentDocumentgiveseverylater
specificationastablefoundation.
Engineering Intent field What to write
Project name A simple working name for the system.
Problem statement The pain, consequence, and desired improvement.
Primary users The people who will use the system most often.
Business or user goals The outcomes the system should improve.
Core capabilities The first set of capabilities the system must support.
Out of scope Features or ideas you will not build in the first version.
Constraints Limits involving time, device, data, security, budget, or
process.

Engineering Intent field What to write
Success criteria How you will know the first version is useful.
Promptbox2.4—CreateanEngineeringIntentDocument
UsetheinformationbelowtodraftanEngineeringIntentDocument.
Projectidea:[pasteidea]
Knownusers:[pasteusers]
Knownbusinessneed:[pastebusinessneed]
Knownconstraints:[pasteconstraints]
Returnaconcisedocumentwith:problemstatement,users,goals,core
capabilities,outofscope,constraints,risks,andsuccesscriteria.
2.8PracticalExample:TurningaRoughApp
IdeaintoaClearBuildDirection
Now you will walk through the full process using a simple example.
The rough idea is: "Build an app that helps small teams manage
tasks."
This idea is useful, but it is not ready for AI coding. If you gave it
directly to an AI agent, the agent would probably create a generic
task app. It might work, but it may not match the team problem you
actually care about.
The step-by-step improvement below shows how the idea becomes
engineering intent.
Ste
Question Answer for the example
p
| 1 | Who is affected? | Small teams with 3 to 15 members. |
| --- | --- | --- |
| 2 | What problem do they face? | They lose track of task ownership, due dates, and progress. |
| 3 | What happens because of | Deadlines are missed and meetings are spent the problem? asking for status updates. |
| 4 | What outcome should | Each team member should know what to do next improve? and team leads should see progress quickly. |
| 5 | What should the first | Tasks, assignees, due dates, status, priority, version include? comments, and a basic dashboard. |
| 6 | What should wait? | File uploads, chat, billing, calendar sync, and advanced automation. |
| 7 | What constraints matter? | The first version should be simple enough for a small team to start using without training. |

Engineering Intent
Filled example
Document
Project name TeamTask Lite
Problem statement Small teams lose track of task ownership, due dates, and
progress. This causes missed deadlines and repeated status
meetings. The system should make responsibilities and
progress visible in one simple workspace.
Primary users Team members who create, update, and complete tasks.
Secondary users Team leads who review progress and identify blocked work.
Core capabilities Create tasks, assign owners, set due dates, set status, add
priority, comment on tasks, and view a simple progress
dashboard.
Out of scope Billing, file uploads, private chat, calendar sync, advanced
analytics, and mobile app store release.
Constraints The first version must be simple, browser-based, and
understandable without formal training.
Success criteria A team member can create and update a task in under one
minute, and a team lead can see overdue and completed
tasks from the dashboard.
At this point, you still have not written code. That is intentional. You
now have enough direction to write requirements. You know the
problem, users, first version, exclusions, constraints, and success
criteria.
In the next chapter, this kind of intent becomes part of the full Spec-
Driven AI Engineering lifecycle. Later, you will expand it into
requirements, product specifications, technical design, task lists,
tests, and implementation steps.
SELF-CHECK
IfyourEngineeringIntentDocumentdoesnotmakethenextstepeasier,itis
toovague.Agoodintentdocumentshouldmakerequirementseasiertowrite,
notharder.
Keytakeaways
•A raw idea is not ready for engineering work until you clarify the
problem, users, goals, constraints, and scope.
•Vision explains what outcome the software should create;
implementation explains how you might build it.

•A clear problem statement is stronger than a feature request
because it explains why the software matters.
•Ambiguity is dangerous because AI agents will fill gaps with
assumptions.
•The Engineering Intent Document is the bridge between a rough
idea and formal requirements.

Chapterchecklist
Beforeyoumovetorequirements,confirmthatyouhave: Done
Aclearproblemstatement. ☐
Definedprimaryandsecondaryusers. ☐
Separatedvisionfromimplementationdetails. ☐
Listedfirst-versioncapabilities. ☐
Listedwhatisoutofscope. ☐
Identifiedconstraintsandrisks. ☐
Definedsimplesuccesscriteria. ☐
Reviewquestions
1. Why should you avoid prompting an AI agent directly from a raw
idea?
2. What is the difference between vision and implementation?
3. Why is a problem statement usually stronger than a feature
request?
4. What makes a project request ambiguous?
5. What is the purpose of an Engineering Intent Document?
Practicalexercises
Exercise What you should produce
Take a vague idea such as "build a school One clear problem statement using
management app" and rewrite it as a affected user, difficulty, consequence, and
problem statement. desired improvement.
List users, goals, and constraints for a A three-column table with at least two
small inventory app. users, three goals, and three constraints.
Write your own Engineering Intent A concise one-page document using the
Document for a project you want to build. template from this chapter.
InSummary
This chapter showed you how to turn a rough idea into engineering
intent. You learned that a raw idea is useful but incomplete. It needs
clarification before it can become requirements, specifications, tasks,
tests, or code.
You also learned how to separate vision from implementation, define
the problem clearly, identify users, goals, and constraints, and avoid

ambiguous project requests. The Engineering Intent Document gives
you a simple but powerful bridge between the idea stage and the
specification stage.
In the next chapter, you will connect this intent to the full Spec-
Driven AI Engineering lifecycle so you can see how each artifact
leads to the next one.

Chapter3
The Spec-Driven AI
Engineering Lifecycle
Move step by step from intent to requirements, specs, tasks, tests,
code, deployment, and continuous improvement.
In Chapter 2, you learned how to turn a rough idea into an
Engineering Intent Document. That document gives you the first
stable direction for a project. This chapter shows you what happens
next.
The Spec-Driven AI Engineering lifecycle is a step-by-step workflow
that helps you move from intent to requirements, product
specification, technical design, task planning, test planning,
implementation, review, deployment, and maintenance. Each stage
creates an artifact that supports the next stage.
You do not need to master every stage at once. You will learn the
full path first, then practice the stages deeply in later chapters. The
goal here is simple: you should always know where you are in the
workflow and what the next useful document should be.
BEGINNERRULE
DonotlettheAIagentchoosethelifecycleforyou.Youdecidethestage,
providethecorrectartifact,andasktheagenttohelponlywiththecurrent
step.
Bytheendofthischapter,you
Whyitmatters
willbeableto
ExplainthefullSpec-DrivenAI Youunderstandhoweachstage
Engineeringlifecycle. connectstothenext.
Identifythepurposeofeachstage. Youknowwhatshouldbecreated
beforemovingforward.

Bytheendofthischapter,you
Whyitmatters
willbeableto
Connectrequirements,specs,tasks, Youpreventmissingfeaturesandweak
tests,andcode. implementation.
UsestagegatestocontrolAI-assisted Youreduceguessing,drift,and
development. uncontrolledcodechanges.
PlaceAIagentscorrectlyinsidethe YouuseAIasanassistantwithout
lifecycle. givingupengineeringcontrol.
Figure3.1:ThelifecyclekeepsyourAI-assistedprojectmoving
throughcontrolledstagesinsteadofrandomcodingsessions.
3.1TheRoleofSpecificationsinModern
Software
A specification is a written agreement about what the software
should do, how it should behave, and what limits itmust respect. In
traditional development, specifications help people coordinate. In AI-
assisted development, specifications do something even more
important: they control what the AI is allowed to assume.
Modern software is rarely one file or one feature. It includes users,
permissions, workflows, data, APIs, errors, tests, deployment
settings, and future maintenance. If you ask an AI agent to build
from a vague prompt, it may create code that looks useful but does
not match the real project.

A good specification gives you memory, control, and traceability. It
remembers decisions. It controls implementation choices. It lets you
trace a feature from the original need to the final code and tests.
| Specification role | What it gives you | Why AI needs it |
| --- | --- | --- |
| Project memory | A record of decisions, | The agent does not have to constraints, and expected guess what was already behavior. decided. |
| Control system | Boundaries for what should | The agent is less likely to add and should not be built. random features. |
| Communication tool | A shared source of truth for product, design, code, and context and fewer mixed testing. instructions. | The agent receives clearer |
| Quality reference | A way to check whether the software matches the intent. against something concrete. | The output can be reviewed |
KEYIDEA
Specificationsarenotextrapaperwork.InAIengineering,specificationsarethe
steeringwheel.Withoutthem,theagentmaymovequicklyinthewrong
direction.
3.2TheRequirementsStage
The requirements stage answers the question: What must the
system do? It is the first stage where your project becomes testable.
You take the Engineering Intent Document and convert it into clear
statements of expected behavior.
A requirement should be specific enough that you can later decide
whether it has been satisfied. If a requirement cannot be tested, it is
usually too vague.
At this stage, avoid implementation details. Do not decide the
database, framework, or deployment method yet. Focus on user
actions, system behavior, business rules, permissions, constraints,
and acceptance criteria.
| Input | Main work | Output | Done when |
| --- | --- | --- | --- |
| Engineering | Convert goals and | Requirements list | You can test each |
| Intent Document | capabilities into clear required behavior. criteria. | with acceptance | requirement later. |

Weak requirement Better requirement
The app should manage A signed-in user can create a task with title, description,
tasks. assignee, due date, priority, and status.
The dashboard should be A team lead can view overdue, completed, and in-
useful. progress tasks from one dashboard screen.
The system should be Only authenticated users can access project tasks, and
secure. only project members can view tasks in that project.
Promptbox3.1-Draftrequirementsfromintent
Use this Engineering Intent Document to draft clear software requirements.
Intent: [paste intent document]
Return functional requirements, non-functional requirements, business rules,
permissions, constraints, and acceptance criteria. Do not choose implementation tools
yet.
3.3TheProductSpecificationStage
The product specification stage answers the question: How should
the software work for the user? Requirements tell you what the
system must do. The product specification explains the user
experience, feature scope, workflows, and success conditions.
This stage is important because software is not only logic. It is also
the way a user moves through a task. If the workflow is unclear, the
AI agent may create screens or interactions that satisfy the
requirement technically but feel confusing in practice.
Your product specification should describe user roles, user journeys,
major screens, feature boundaries, and first-version priorities. It
should also make clear what is not included yet.
Product spec
Question it answers
element
User role Who is using this part of the system?
User goal What is the user trying to accomplish?
User journey What steps does the user take from start to finish?
Feature scope What belongs in the first version?
Out of scope What should the AI not build yet?
Success measure How will you know the experience works?

STAGEGATE
Donotmoveintotechnicaldesignuntilthemainuserflowsandfirst-version
scopeareclear.Iftheworkflowisunclear,thearchitecturewillbebuilton
unstableassumptions.
3.4TheTechnicalDesignStage
The technical design stage answers the question: How shouldthe
system be built? This is where you translate product behavior into
engineering structure.
You define the architecture, data model, API contracts, validation
rules, authentication approach, error handling, performance
expectations, and important trade-offs. You do not need to over-
design. You need enough structure so implementation does not
become guesswork.
This is also where AI can be useful as a reviewer. You can ask it to
compare possible designs, identify missing risks, or check whether
your design matches the requirements. You should still make the
final engineering decision.
Technical design area What you define
Architecture Major parts of the system and how they interact.
Data model Entities, fields, relationships, and constraints.
APIs Endpoints, request data, response data, and errors.
Security Authentication, authorization, validation, and sensitive
data handling.
Reliability Expected failures, recovery paths, logs, and retries.
Performance Expected load, response time goals, and bottlenecks to
avoid.

Figure3.2:Eachstageproducesanartifactthatsupportsthe
nextstageandpreservestraceability.
3.5TheTaskPlanningStage
The task planning stage answers the question: What should be built
first, second, and next? A technical specification may describe the
system, but an AI agent still needs small, controlled work items.
A good task is small enough to complete and review. It has a clear
purpose, a clear input, a clear expected output, and a clear test or
acceptance check. This matters because large vague tasks
encourage the agent to change too much at once.
Task planning turns the technical specification into an ordered build
path. It protects the project from scope creep and makes review
easier.
Task field What to write
Task ID A short label such as TASK-001.
Goal The specific outcome of the task.
Related requirement The requirement this task supports.
Files or modules Where the change should happen, when known.
Acceptance check How you will know the task is complete.
Do not change Boundaries that prevent unnecessary edits.
Promptbox3.2-Turnaspecintotasks
Use the technical specification below to create an ordered task plan.
Technical specification: [paste spec]
Each task must include: task ID, goal, related requirement, expected output,
acceptance check, and do-not-change boundaries. Keep each task small enough to
review.

3.6TheTestPlanningStage
The test planning stage answers the question: How will you prove
the software works? This stage should happen before
implementation because tests force you to clarify expected behavior.
You do not need to write every final test before coding starts, but
you should know what must be verified. At minimum, you need
acceptance tests for the main requirements, unit tests for important
logic, integration tests for connected parts, and failure tests for risky
behavior.
When you plan tests before implementation, you give the AI agent a
target. The agent is no longer just writing code that looks correct. It
is writing code that must satisfy defined checks.
| Test type | What it checks | Example |
| --- | --- | --- |
| Acceptance test | The requirement works from the user or business view. task and assign it to another user. | A team member can create a |
| Unit test | A small piece of logic behaves correctly. dates in the past. | A due-date validator rejects |
| Integration test | Two or more parts work | The task form saves data together. through the API and returns the created task. |
| Failure test | The system handles errors | A non-member cannot view a safely. private project task. |
QUALITYRULE
Ifyoucannotdescribehowtotestarequirement,youprobablydonot
understandtherequirementwellenoughyet.
3.7TheImplementationStage
The implementation stage answers the question: How will the
planned tasks become working software? This is the stage where
coding finally happens.
In spec-driven AI engineering, implementation is not the beginning
of the project. It is the result of earlier clarification. The agent
should receive a focused task, the related requirements, the relevant
design section, the expected tests, and the boundaries for what
should not change.

Work in small steps. After each task, review the result before moving
to the next one. This keeps the project stable and makes mistakes
easier to find.
| Before implementation | During implementation | After implementation |
| --- | --- | --- |
| Provide task, requirement, | Limit the agent to the task | Review output against the |
| design notes, and tests. | and relevant files. | requirement and tests. |
| Confirm what should not | Ask for explanation of | Update the task status and |
| be changed. | important choices. | record any spec changes. Promptbox3.3-Implementonecontrolledtask Implement only this task. Task: [paste task] Related requirement: [paste requirement] Relevant design notes: [paste design notes] Expected tests or checks: [paste tests] Boundaries: Do not change unrelated files, do not add unrequested features, and explain any assumption before applying it. 3.8TheReviewandDeploymentStage The review and deployment stage answers the question: Is the software safe and ready to run outside your development environment? Review comes before deployment because working code is not always correct code. Review checks whether the implementation matches the requirements, follows the technical design, passes the test plan, handles errors safely, and avoids unapproved changes. Deployment prepares the system to run in a real environment with configuration, data, logs, and rollback planning. For a beginner, the most important idea is this: do not deploy simply because the code runs. Deploy only after you can connect the code back to the spec and show that the expected checks pass. Review question What you are checking Does it match the requirement? The implemented behavior satisfies the original requirement. Does it follow the design? The implementation respects the planned architecture and data model. Do the tests pass? Expected behavior and important failures are verified. Were unrelated changes made? The agent did not modify areas outside the task. |

Review question What you are checking
Is deployment prepared? Configuration, environment variables, data migration,
logs, and rollback are considered.
3.9TheMaintenanceandImprovement Stage
The maintenance and improvement stage answers the question:
How will the system stay correct after it changes? Software does not
stop evolving after deployment. Users find problems,business needs
change, bugs appear, and new features become necessary.
This is where many projects lose their connection to the original
plan. The code changes, but the specs stay old. Over time, nobody
knows whether the documentation describes the current system or a
past version. This is called spec drift.
To prevent spec drift, update the relevant requirement, product
spec, technical spec, task list, or test plan whenever the behavior
changes. You do not need to rewrite everything. You need to keep
the important artifacts aligned with reality.
Change type Artifact to update
A new user behavior is added. Requirements and product specification.
A data field or relationship changes. Technical specification and data model.
A new security rule is added. Requirements, technical specification, and test
plan.
A bug reveals missing expected Requirement, test plan, and task history.
behavior.
Deployment process changes. Deployment checklist and maintenance notes.
MAINTENANCERULE
Whenbehaviorchanges,updatethespec.Ifthespecdoesnotchangewiththe
system,itslowlystopsbeinguseful.
3.10HowAIAgentsFitintoEachStage
AI agents can help at every stage, but they should not control every
stage. You remain responsible for direction, approval, and judgment.
The agent can ask questions, draft documents, suggest tasks,
generate tests, write code, explain errors, and review outputs
against the spec.

The safest way to use an agent is to assign it a stage-specific role.
Do not say, "Build the whole app." Say, "Review this Engineering
Intent Document for missing users, goals, and constraints," or
"Generate test cases from these acceptance criteria."
A stage-specific instruction keeps the agent focused. It also makes
the output easier to review because you know what kind of help you
requested.
Figure3.3:Youdirectthework,specificationsconstrainthe
work,andAIagentsassistinsidethoseboundaries.
| Lifecycle stage | Useful AI role | What you should review |
| --- | --- | --- |
| Engineering intent | Clarifying assistant | Missing users, goals, constraints, and scope boundaries. |
| Requirements | Requirements drafter | Vague, untestable, or conflicting requirements. |
| Product specification | Workflow assistant | User journeys, scope, and out-of- scope features. |
| Technical design | Design reviewer | Architecture risks, missing data, APIs, and security gaps. |
| Task planning | Task planner | Task size, order, dependencies, and acceptance checks. |
| Test planning | Test generator | Shallow tests, missing failure cases, and unclear expected results. |
| Implementation | Coding assistant | Unapproved changes, missing tests, and design violations. |
| Review/deployment | Review assistant | Requirement coverage, risks, deployment readiness, and rollback needs. |

| Lifecycle stage | Useful AI role | What you should review |
| --- | --- | --- |
| Maintenance | Change analyst | Spec drift, missing documentation updates, and regression risks. Promptbox3.4-Stagegatereview Act as a spec-driven AI engineering reviewer. Current stage: [stage name] Artifact: [paste artifact] Check whether this artifact is ready for the next stage. Identify missing information, vague statements, risky assumptions, and the exact corrections needed. Do not move to implementation. Lifecyclemapyoucanreuse |
| Stage | Main question | Main artifact Move forward when |
| Intent | Why should this | Engineering Intent The problem, users, goals, |
| exist? | Document | scope, and constraints are clear. |
| Requirements | What must it do? | Requirements list Each requirement is specific and testable. |
| Product spec | How should it work | Product specification User flows and feature for users? boundaries are clear. |
| Technical design | How should it be | Technical specification Architecture, data, APIs, built? security, and errors are defined. |
| Tasks | What should be built | Task plan Tasks are small, ordered, next? and reviewable. |
| Tests | How will it be | Test plan Expected behavior and verified? failure cases are covered. |
| Implementation | What code should | Working code The task is completed within change? its boundaries. |
| Review/deployment | Is it ready to run? | Review and deployment Code matches the spec and checklist deployment risks are handled. |
| Maintenance | How will it stay | Updated specs and Changes are reflected in the |
| correct? | maintenance notes Keytakeaways -The lifecycle gives you a controlled path from intent to working software. -Each stage should produce an artifact that supports the next stage. -Requirements define what the system must do; product specs define how it should work for users; technical specs define how it should be built. | right artifacts. |

-Task planning and test planning protect you from large, vague AI
coding requests.
-Implementation should happen in small controlled tasks, not broad
uncontrolled prompts.
-Maintenance keeps specs aligned with the real system and
prevents spec drift.
-AI agents are assistants inside the lifecycle, not replacements for
your engineering judgment.

Chapterchecklist
Beforeyoumovetothenextchapter,confirmthatyoucan: Done
Explainthepurposeofeachlifecyclestage. []
Namethemainartifactcreatedbyeachstage. []
Describehowrequirementsconnecttotasks,tests,andcode. []
Explainwhyimplementationshouldnotcomefirst. []
Useastagegatereviewbeforemovingforward. []
ExplainhowanAIagentshouldassistwithouttakingcontrol. []
Reviewquestions
1. Why does spec-driven AI engineering use stages instead of
jumping directly into code?
2. What is the difference between requirements, product
specification, and technical design?
3. Why should test planning happen before implementation?
4. What is spec drift, and why is it dangerous?
5. How should you use AI agents safely at each lifecycle stage?
Practicalexercises
Exercise What you should produce
Choose a simple app idea and place it into A one-row summary for each stage: intent,
the lifecycle. requirements, product spec, technical
design, tasks, tests, implementation,
review, and maintenance.
Take one requirement and trace it through A short chain showing requirement -> task
the lifecycle. -> test -> implementation review.
Write a stage gate prompt for the A prompt that asks an AI agent to review
requirements stage. requirements for clarity, testability, missing
rules, and ambiguity.
InSummary
This chapter showed you the full Spec-Driven AI Engineering
lifecycle. You saw how the Engineering Intent Document leads into
requirements, product specifications, technical design, task planning,
test planning, implementation, review, deployment, and
maintenance.

The key lesson is that each stage should create something useful for
the next stage. When you follow this chain, you reduce ambiguity
and make AI-assisted development easier to control.
In the next chapter, you will set up the workspace that supports this
lifecycle. You will organize project folders, specification files, task
files, test files, and agent instruction files so everything stays
contained inside your project.

Chapter4
Setting Up the Spec-Driven AI
Engineering Workspace
Create a clean local workspace where specs, tasks, tests, code, and
agent instructions stay organized from the first day.
In Chapter 3, you learned the full lifecycle: intent, requirements,
product specification, technical design, tasks, tests, implementation,
review, deployment, and maintenance. This chapter turns that
lifecycle into a practical workspace you can use immediately.
A workspace is more than a folder on your computer. It is the place
where you keep the project direction, the specifications, the task list,
the test plan, the code, and the rules that guide your AI assistant. If
the workspace is messy, the AI assistant receives messy context and
produces messy output.
Everything in this chapter stays inside the book and inside your local
project folder. You do not need an external repository, a companion
download, or an online platform to follow the workflow. You will
build a repeatable structure that can support any small or medium
software project.
BEGINNERRULE
DonotstartanewAI-assistedprojectwithonlyablankprompt.Startwitha
workspacethatseparatesintent,specs,tasks,tests,code,andreviewnotes.
By the end of this chapter, you will be
Why it matters
able to
Choose an AI coding assistant based on You avoid treating every tool as if it does
the kind of work you need. the same job.
Set up a clean local project workspace. You keep documents, tasks, tests, and
code from becoming mixed together.
Create folders for specs, tasks, tests, agent You make it easier for both you and the AI
context, review, and operations. assistant to find the right context.

By the end of this chapter, you will be
Why it matters
able to
Write an agent instruction file. You give the AI assistant clear rules before
it touches the project.
Use local change tracking without You can preserve history, compare
depending on any external repository. changes, and stay in control.
Apply a reusable workspace template. You can begin new projects with less
confusion and fewer missing pieces.
Figure4.1:Acleanworkspaceseparatesspecifications,tasks,
tests,code,agentinstructions,reviewnotes,andoperations
files.
4.1ChoosingYourAICodingAssistant
Your AI coding assistant is the tool that helps you draft
specifications, create tasks, generate tests, write code, explain
errors, and review changes. You do not need the most advanced tool
to learn spec-driven AI engineering. You need a tool you can control.
A beginner mistake is choosing a tool only because it can generate
code quickly. Speed is useful, but control is more important. The
assistant should allow you to provide project context, ask focused
questions, review output, and stop before it changes too much.
Think of the assistant as a skilled junior teammate. It can help you
move faster, but it needs clear instructions, boundaries, examples,
and review.

| Assistant type | Best use | Watch out for |
| --- | --- | --- |
| Chat assistant | Explaining concepts, drafting requirements, improving prompts, full project unless you paste reviewing small snippets. the right context. | It may not understand your |
| Editor assistant | Suggesting code inside your editor and helping with small improvements while missing implementation tasks. larger design rules. | It can produce local |
| Agentic coding | Planning and changing multiple | It can overreach if task |
| assistant | files under instruction. | boundaries are weak. |
| Testing assistant | Drafting unit, integration, and failure test cases from tests unless acceptance requirements. criteria are clear. | It may generate shallow |
SELECTIONRULE
Choosethesimplestassistantthatcanhelpwiththecurrentstage.Youdonot
needanagentictoolforeverytask.Sometimesanormalchatassistantissafer
forrequirementsandreview.
Promptbox4.1-CompareAIassistantfit
I am setting up a spec-driven AI engineering workflow.
Project type: [describe project]
My skill level: beginner
Current stage: [intent, requirements, specs, tasks, tests, code, review]
Compare what type of AI assistant is appropriate for this stage and explain the safest
way to use it. Do not recommend external files or downloads.
4.2SettingUptheProjectRepository
In this book, a project repository simply means your local project
workspace: the folder where your documents, tasks, tests, code, and
notes live together. It does not mean you must publish anything
online.
Your goal is to create one controlled place for the project. If your
requirements are in one folder, your prompts are in another app,
your tasks are in a note file, and your code is somewhere else, you
will lose traceability. The AI assistant will also receive incomplete
context.
Start every project with a local root folder. Give it a short name that
describes the product, not the technology. For example, use task-

manager instead of react-fastapi-test because the product identity
will last longer than the first technology choice.
| Workspace rule | Good example | Weak example |
| --- | --- | --- |
| Use one project root. | task-manager/ | files scattered across Desktop, Downloads, and Notes. |
| Name by product | support-ticket-system/ | python-ai-app-v2-final-new/. purpose. |
| Keep specs beside | project/docs and project/src. code. document nobody updates. | requirements in a separate |
| Keep tasks small and | project/tasks/TASK-001.md. visible. no task records. Localprojectrootexample task-manager/ docs/ tasks/ tests/ src/ review/ agent/ ops/ 4.3CreatingaCleanProjectFolderStructure A clean folder structure helps you answer one question quickly: Where does this kind of information belong? When every artifact has a home, the project becomes easier to review, easier to explain, and easier to give to an AI assistant as context. Do not create too many folders at the beginning. You need enough structure to separate responsibilities, but not so much structure that a beginner gets lost. The recommended structure below is intentionally simple. The structure works because it mirrors the lifecycle from Chapter 3. Your docs folder holds intent and specs. Your tasks folder holds work items. Your tests folder holds quality checks. Your src folder holds implementation. Your review folder records what was accepted, rejected, or changed. | a long prompt history with |

| Folder | Purpose | Typical contents |
| --- | --- | --- |
| /docs | Stores project direction and | intent.md, requirements.md, product- specifications. spec.md, technical-spec.md. |
| /tasks | Stores small controlled work | TASK-001.md, TASK-002.md, task- items for you or the AI index.md. assistant. |
| /tests | Stores test plans, expected | test-plan.md, acceptance-tests.md, checks, and test cases. failure-tests.md. |
| /src | Stores the application code. | frontend, backend, scripts, modules, or app files. |
| /review | Stores review notes and | review-log.md, change-log.md, decision records. decisions.md. |
| /agent | Stores AI assistant | AGENT.md, context-pack.md, prompt- instructions and context library.md. summaries. |
| /ops | Stores deployment and | deployment-checklist.md, maintenance- maintenance notes. notes.md. |
KEEPITSIMPLE
Youcanaddmorefolderslater,butdonotbeginwithacomplexenterprise
structure.Startwiththefoldersthatsupporttheworkflowyouareactually
using.
4.4Creatinga/docsFolderforSpecifications
The /docs folder is the memory of your project. It keeps the
documents that explain why the software exists, what it must do,
how it should work, and how it should be built.
For a beginner, the most important rule is this: do not put every idea
into one giant document. Separate documents by purpose. This
makes it easier to give the AI assistant only the context it needs for
the current task.
You can write these documents in plain text, Markdown, or a word
processor. The format matters less than clarity and consistency. The
book will include the full templates directly in later chapters and
appendices.
File	Purpose	When you use it
intent.md	Captures problem, users, goals,	Before writing
scope, and constraints. requirements.

| File | Purpose | When you use it |
| --- | --- | --- |
| requirements.md | Lists functional and non-functional requirements. technical specs. | Before product and |
| product-spec.md | Explains user flows, feature scope, and user experience. implementation. | Before design and |
| technical-spec.md | Defines architecture, data, APIs, security, and errors. coding. | Before task planning and |
| traceability.md | Links requirements to tasks, tests, and code areas. | Throughout the project. |
| decisions.md | Records important design trade-offs. one option over another. /docsstarterfiles docs/ intent.md requirements.md product-spec.md technical-spec.md traceability.md decisions.md 4.5Creatinga/tasksFolderforAgentWork Items The /tasks folder holds the small work items that guide implementation. This folder is important because AI assistants perform better when you give them one focused task at a time. A task file should not be a vague instruction like build authentication. It should explain the goal, the related requirement, the expected output, the boundaries, and the checks that prove the task is complete. When you keep tasks as separate files, you also create a useful history of what the project attempted. This makes review easier and prevents the same unclear request from being repeated again and again. Task file section What you write Task ID A short identifier such as TASK-001. Goal The specific outcome you want. Related requirement The requirement this task supports. | Whenever you choose |

Task file section What you write
Inputs Spec sections, files, or test notes the assistant should use.
Expected output What should exist after the task is complete.
Boundaries What the assistant must not change.
Acceptance check How you will verify completion.
TASK-001.mdstartertemplate
# TASK-001: [short task name]
Goal:
[what this task should accomplish]
Related requirement:
[REQ-ID and short description]
Inputs:
- [spec section]
- [test note]
Expected output:
[what should exist after the task]
Boundaries:
- Do not change unrelated files.
- Do not add unrequested features.
Acceptance check:
[how you will verify the task]
4.6Creatinga/testsFolderforQualityControl
The /tests folder holds the checks that prove the softwarebehaves
correctly. Even before you write code, you can use this folder to
describe what must be tested.
Do not wait until the end of a project to think about testing. In spec-
driven AI engineering, tests are part of the design. They help you
clarify expected behavior before implementation begins.
Your first test files can be simple written checklists. Later, those
checklists can become automated tests. The key is to make expected
behavior visible early.
Test file Purpose
test-plan.md Summarizes the overall testing strategy.
acceptance-tests.md Checks whether requirements work from the user or
business view.
unit-tests.md Lists important logic that should be tested in isolation.
integration-tests.md Checks whether connected parts work together.

Test file Purpose
failure-tests.md Checks invalid inputs, permissions, missing data, and error
paths.
Promptbox4.2-Createatestchecklistfromrequirements
Use the requirements below to create a beginner-friendly test checklist.
Requirements: [paste requirements]
Return acceptance tests, unit test ideas, integration test ideas, and failure tests. Each
test must say what action is performed and what result is expected.
4.7CreatingAgentInstructionFiles
An agent instruction file tells your AI assistant how to behave inside
the project. It is one of the most important files in a spec-driven
workspace because it sets the rules before code generation starts.
You can name the file AGENT.md, assistant-rules.md, or project-
instructions.md. The name is less important than the content. The
file should explain the project goal, the current stage, the folders to
use, the style rules, the testing expectations, and the boundaries.
The instruction file should be short enough to reuse often. If it
becomes too long, the assistant may ignore parts of it. Keep the
rules practical and direct.
Figure4.2:Theagentinstructionfileturnsprojectcontextand
boundariesintopracticalguardrailsforAI-assistedwork.

AGENT.mdstartertemplate
# AGENT INSTRUCTIONS
Project goal:
[one paragraph describing the product]
Current stage:
[intent, requirements, specification, task planning, testing, implementation, review]
Use these folders:
- docs/ for specifications
- tasks/ for work items
- tests/ for quality checks
- src/ for code
- review/ for review notes
Rules:
1. Follow the current task only.
2. Do not add unrequested features.
3. Do not change unrelated files.
4. Ask before making assumptions that affect scope, security, data, or architecture.
5. Explain important changes in simple language.
6. Connect every implementation change to a requirement and a test check.
Output format:
- Summary of changes
- Files affected
- Requirement covered
- Tests or checks to run
- Risks or assumptions
Promptbox4.3-Improveanagentinstructionfile
Review this agent instruction file for a beginner spec-driven AI engineering project.
Instruction file: [paste AGENT.md]
Find vague rules, missing boundaries, missing test expectations, and anything that
could allow the assistant to make uncontrolled changes. Return a cleaner version.
4.8UsingGittoTrackSpecs,Code,and
Changes
Git is a version control tool. You can use it locally on your own
computer to track changes in specs, tasks, tests, code, and review
notes. This book does not require GitHub or any external repository.
You can still learn the core idea even if you do not use Git yet: every
important change should leave a record. When a requirement

changes, record it. When an agent completes a task, record it. When
you accept or reject a change, record why.
If you choose to use Git locally, think of it as a project time machine.
It lets you save meaningful checkpoints and return to earlier
versions if something goes wrong.
| Tracking method | Best for beginners | How to use it |
| --- | --- | --- |
| Simple change log | If you are not ready for Git. review/change-log.md. | Write dated entries in |
| Local Git | If you want version history | Commit after meaningful spec, without publishing online. task, test, or code changes. |
| Manual snapshots | If you need a simple backup | Copy the project folder before method. major changes and label it clearly. Change type Suggested local commit or log message New intent document Add engineering intent for task manager project. Updated requirements Refine task creation requirements and acceptance criteria. New task file Add TASK-001 for task creation API. Test plan added Add acceptance and failure tests for task creation. Implementation completed Implement TASK-001 task creation workflow. Review notes added Record review results for TASK-001. Figure4.3:Localchangetrackinghelpsyoukeepspecs,tasks, tests,code,andreviewnotesalignedwithoutdependingonan externalrepository. |

NOEXTERNALDEPENDENCY
Thisbookwillnotaskyoutodownloadarepositoryordependonanonline
platform.Localtrackingisenoughforlearningtheworkflowandcompletingthe
projectsinsidethebook.
4.9RecommendedWorkspaceTemplate
You now have the pieces of a complete workspace. The template
below is the starting point you can reuse for every project in this
book.
Do not worry if some files are empty at the beginning. Empty files
are placeholders that remind you what needs to be created as the
project moves through the lifecycle.
The most important habit is consistency. Use the same structure
each time so your project remains easy to understand, easy to
review, and easy to guide with AI assistance.

Recommendedworkspacetemplate
project-name/
docs/
intent.md
requirements.md
product-spec.md
technical-spec.md
traceability.md
decisions.md
tasks/
task-index.md
TASK-001.md
tests/
test-plan.md
acceptance-tests.md
unit-tests.md
integration-tests.md
failure-tests.md
src/
README.md
review/
change-log.md
review-log.md
agent/
AGENT.md
context-pack.md
prompt-library.md
ops/
deployment-checklist.md
maintenance-notes.md
When you start a
What to do first
new project
Step 1 Create the project-name folder.
Step 2 Create the seven main folders: docs, tasks, tests, src, review,
agent, and ops.
Step 3 Write the Engineering Intent Document in docs/intent.md.
Step 4 Create AGENT.md with project rules and boundaries.
Step 5 Create task-index.md so every future task has a record.
Step 6 Create test-plan.md before implementation begins.
Step 7 Use change-log.md to record important changes and decisions.

Promptbox4.4-Generateaworkspaceplan
I am starting a new spec-driven AI engineering project.
Project idea: [describe idea]
Create a local workspace plan using docs, tasks, tests, src, review, agent, and ops. For
each folder, list the first files I should create and what each file should contain. Keep
everything self-contained inside the book workflow.
Keytakeaways
-A clean workspace gives your AI assistant clean context.
-A project repository in this book means a local project workspace,
not an external online repository.
-Separate folders help you keep intent, requirements, specs, tasks,
tests, code, review notes, agent instructions, and operations notes
organized.
-The /docs folder is the memory of the project.
-The /tasks folder keeps AI work small, focused, and reviewable.
-The /tests folder makes expected behavior visible before
implementation.
-The agent instruction file gives your AI assistant boundaries and
output rules.
-Local change tracking is enough for learning and for completing
the projects inside this book.

Chapterchecklist
Beforeyoumovetothenextchapter,confirmthatyoucan: Done
ExplainwhyacleanworkspacemattersinAI-assisteddevelopment. []
ChooseasuitableAIassistantforthecurrentstage. []
Createalocalprojectrootfolder. []
Createdocs,tasks,tests,src,review,agent,andopsfolders. []
WriteastarterAGENT.mdinstructionfile. []
Createasimplechange-log.mdfilefortrackingdecisions. []
ExplainhowlocalGitcantrackchangeswithoutusinganexternal []
repository.
Reviewquestions
1. Why should specs, tasks, tests, and code be stored in separate
places?
2. What is the difference between a local project workspace and an
external online repository?
3. Why is an agent instruction file important before implementation
starts?
4. What should be included in a good task file?
5. How can you track important changes even if you do not use Git?
Practicalexercises
Exercise What you should produce
Create a workspace for a task manager A folder tree with docs, tasks, tests, src,
app. review, agent, and ops.
Write a starter AGENT.md file. A one-page instruction file with project
goal, current stage, folders, rules, and
output format.
Create TASK-001.md for a simple feature. A task file with goal, related requirement,
inputs, expected output, boundaries, and
acceptance check.
Create a test-plan.md checklist. Acceptance, unit, integration, and failure
test ideas for one feature.
InSummary
This chapter showed you how to set up the workspace that supports
spec-driven AI engineering. You learned how to choose an assistant,

create a local project root, separate folders by purpose, create
specification files, write task files, plan tests, and define agent
instructions.
The main lesson is simple: structure comes before assistance. If
your workspace is clear, your AI assistant receives better context and
produces more controllable output.
In the next chapter, you will begin writing clear software
requirements. The workspace you created here will give those
requirements a proper home and connect them to the rest of the
engineering workflow.

Part II
Requirements, Specifications,
and System Design

Chapter5
Writing Clear Software
Requirements
_______________________________________________________
__________________
CHAPTERPROMISE
Bytheendofthischapter,youwillknowhowtoturnalooseideaintoclear
softwarerequirementsthatanAIassistantcanunderstand,thatyoucantest,
andthatyoucancarryintoproductspecs,technicaldesign,tasks,andcode
withoutlosingcontrol.
InChapter4,yousetupaworkspacewherespecifications,tasks,tests,andcode
canstayorganized.Nowyouwillfillthatworkspacewiththemostimportantinput
ofall:clearrequirements.Arequirementtellsyouwhatthesoftwaremustdo,how
wellitmustwork,whoitmustserve,andwhatlimitsitmustrespect.
Thischapterkeepstheprocessbeginner-friendly.Youwillstartwithsimple
wording,thenaddstructure.Youwilllearnhowtowritefunctionalrequirements,
non-functionalrequirements,userroles,businessrules,constraints,and
acceptancecriteria.Thesepieceswillbecomethefoundationfortheproduct
requirementsdocumentinChapter6.
By the end of this chapter, you will be
Why it matters
able to
Write useful requirements using clear, AI agents produce better output when
testable language. your instructions are specific.
Separate functional and non-functional You avoid mixing features with quality
requirements. expectations.
Define user roles and permissions before You prevent access-control confusion later
design begins. in development.
Capture business rules and system You keep policy decisions separate from
constraints. code decisions.
Write acceptance criteria for each You can test whether the software actually
requirement. meets the requirement.
HOWTHISCHAPTERCONNECTS
Chapter2gaveyoutheEngineeringIntentDocument.Chapter3showedthe
fulllifecycle.Chapter4gaveyoutheworkspace.Inthischapter,youcreatethe

firstseriousengineeringartifactinsidethatworkspace:requirements.md.In
Chapter6,youwillusetheserequirementstobuildaProductRequirements
Document.
Figure5.1:Ausefulrequirementmustbeclear,testable,
bounded,andtraceable.
5.1WhatMakesaRequirementUseful
Arequirementisnotjustawish.Itisaclearstatementaboutwhatthesoftware
mustdoorhowitmustbehave.Ifyoucannottestit,limitit,orconnectittolater
work,itisnotreadyforAI-assisteddevelopment.
Ausefulrequirementhasfourqualities.Itisclear,soyoucanunderstandit
withoutguessing.Itistestable,soyoucanprovewhetherithasbeensatisfied.It
isbounded,soitdoesnotsecretlyexpandintomanyfeatures.Itistraceable,so
youcanconnectittotasks,tests,andcodelater.
Why the stronger version
Weak wording Stronger requirement
is better
| The app should be | The app must allow a new user | It replaces vague quality |
| --- | --- | --- |
| easy to use. | to create an account in three steps or fewer. behavior. | language with observable |
| Users should manage | A team member must be able to | It states the actor and the |
| tasks. | create, edit, complete, and delete their own tasks. | actions clearly. |
| The system should be | The task list page must load | It makes performance |
| fast. | within two seconds for up to 500 tasks. | measurable. |
BEGINNERRULE
Writeeachrequirementasifacarefuldeveloper,tester,orAIagentwillask:
Whoisthisfor?Whatexactlymusthappen?HowwillIknowitworks?Whatis

outsidethescope?
Figure5.2:Clearsoftwaredirectioncomesfromseveral
requirementtypesworkingtogether.
5.2FunctionalRequirements
Functionalrequirementsdescribewhatthesystemmustdo.Theyarethefeature-
levelbehaviorsyouexpectthesoftwaretoprovide.WhenyouaskanAIagentto
buildafeature,functionalrequirementsbecomethemainsourceofdirection.
Agoodfunctionalrequirementusuallyincludesanactor,anaction,anobject,and
aresult.Forexample:“Aprojectmanagermustbeabletoassignatasktoateam
membersotheteammembercanseetheirresponsibility.”
| Element | Question to ask | Example |
| --- | --- | --- |
| Actor | Who performs the action? | Project manager |
| Action | What must they do? | Assign a task |
| Object | What is being acted on? | A task record |
| Result | What should happen after the | The assigned user can see the task action? Functionalrequirementformat REQ-F-001: [Actor] must be able to [action] [object] so that [business or user outcome]. Example: REQ-F-001: A team member must be able to create a task with a title, description, due date, and status so that work can be tracked clearly. |

5.3Non-FunctionalRequirements
Non-functionalrequirementsdescribehowwellthesystemmustwork.Theydo
notusuallydescribeafeature.Instead,theydescribequalityconditionssuchas
speed,security,reliability,accessibility,usability,privacy,andmaintainability.
Manybeginnerprojectsfailbecausenon-functionalrequirementsareignoreduntil
theend.Inspec-drivenAIengineering,youstatethemearlysotheAIassistant
doesnotbuildsomethingthatworksonlyintheeasiestsituation.
Category Requirement example
Performance The dashboard must load within three seconds for a workspace
with up to 1,000 tasks.
Security Only authenticated users may access workspace data.
Reliability If task creation fails, the system must show an error and
preserve the user’s input.
Usability A new user must be able to create their first task without
reading a separate manual.
Maintainability Task-related logic must be separated from user-authentication
logic.
DONOTWRITEIMPOSSIBLEQUALITYCLAIMS
Avoidstatementssuchas“theappmustneverfail”or“thesystemmustalways
befast.”Replacethemwithmeasurableexpectations,knownlimits,andgraceful
failurebehavior.
5.4UserRolesandPermissions
Userrolesdefinewhousesthesystem.Permissionsdefinewhateachrolecando.
Ifyouskipthisstep,theAIassistantmaybuildfeaturesthatexposedatatothe
wrongusersorallowactionsthatshouldberestricted.
Youdonotneedacomplexpermissionsystematthebeginning.Youneedaclear
tablethatshowseachrole,whattherolecando,andwhattherolemustnotdo.
| Role | Can do | Cannot do |
| --- | --- | --- |
| Owner | Create workspace, invite users, manage billing, delete workspace. another workspace. | Bypass audit rules or view |
| Project manager | Create projects, assign tasks, update project settings. workspace. | Manage billing or delete the |
| Team member | Create tasks, update assigned tasks, comment on work. workspace settings. | Invite users or change |
| Viewer | Read permitted projects and tasks. assign tasks. Rolerequirementexample | Create, edit, delete, or |

REQ-R-001: The system must support four roles: Owner, Project Manager, Team Member,
and Viewer.
REQ-R-002: A Viewer must be able to read assigned project information but must not
create, edit, assign, or delete tasks.
5.5BusinessRules
Businessrulesaredecisionsabouthowtheorganizationorproductshould
operate.Theyarenotjusttechnicalchoices.Theydescribepoliciesthesoftware
mustenforce.
Abusinessruleshouldbewrittenseparatelyfromcodeinstructions.Thishelpsyou
avoidhidingpolicydecisionsinsideimplementationdetails.Whentherule
changes,youcanupdatethespecfirst,thenupdatetheaffectedtestsandcode.
Business rule Why it matters
A completed task cannot be edited unless it is Protects completed work from
reopened. accidental changes.
Only an Owner can delete a workspace. Prevents destructive actions by
lower-permission users.
A task due date cannot be earlier than today when Prevents invalid planning data.
the task is created.
A user can belong to multiple workspaces, but Protects data boundaries.
workspace data must remain separate.
PromptBox:ExtractBusinessRules
You are helping me prepare software requirements.
Project idea:
[paste the project idea]
List the business rules that the system should enforce.
Do not write code.
For each rule, explain what user behavior it controls and what could go wrong if the
rule is missing.
5.6SystemConstraints
Aconstraintisafixedconditionthatlimitsthesolution.Constraintsmaycome
frombudget,deadlines,technologychoices,complianceneeds,devicesupport,
teamskills,hostinglimits,orintegrationrequirements.
ConstraintsareimportantbecauseAIagentsofteninventidealsolutions.Yourjob
istostatethereal-worldlimitsbeforeimplementationbegins.
Constraint type Example
Technology The frontend must be built with plain HTML, CSS, and
JavaScript for the first version.

Constraint type Example
Time The first working version must be small enough to build in one
week.
Data The system must not store payment card details.
Environment The application must run on a low-cost cloud instance.
Integration The system must export task data as CSV.
PRACTICALWARNING
Donotletaconstraintbecomeanexcuseforpoordesign.Aconstraintshould
guidethesolution,notloweryourqualitystandards.
5.7AcceptanceCriteria
Acceptancecriteriadescribehowyouwillknowarequirementhasbeenmet.They
turnarequirementintosomethingtestable.Withoutacceptancecriteria,youmay
thinkafeatureisdonewhiletheAIassistanthasonlybuiltpartofit.
AsimplewaytowriteacceptancecriteriaistheGiven-When-Thenformat.Given
describesthestartingcondition.Whendescribestheaction.Thendescribesthe
expectedresult.
Requirement Acceptance criteria
A team member must be able to Given a signed-in team member, when they submit
create a task. a valid task form, then the task is saved and shown
in the task list.
A viewer must not edit tasks. Given a signed-in viewer, when they open a task,
then edit controls are hidden or disabled.
Task creation must handle errors. Given a network failure, when the user submits the
form, then the system shows an error and keeps
the typed values.
Acceptancecriteriaformat
AC-001:
Given [starting condition],
When [user action or system event],
Then [expected result].
AC-002:
Given [edge case or failure condition],
When [action occurs],
Then [safe behavior or error response].

Figure5.3:Arequirementbecomesusefulwhenitcanleadto
criteria,tasks,tests,andcode.
5.8CommonRequirementMistakes
Mostrequirementproblemsbeginbeforecodeexists.Iftherequirementisvague,
toolarge,untestable,ormixedwithhiddenassumptions,theAIassistantwillfill
thegaps.Thatishowrandomfeatures,brokenflows,andinconsistentbehavior
enteraproject.
| Mistake | Weak example | Better approach |
| --- | --- | --- |
| Vague wording | The dashboard should be | State what the dashboard must nice. show and how users will use it. |
| No actor | Tasks can be deleted. | Say which role can delete tasks and under what condition. |
| No boundary | Users can manage | List the allowed project actions projects. for each role. |
| No acceptance criteria | Users can reset | Add the expected email flow, passwords. token expiry, and failure behavior. |
| Implementation hidden | Use a modal with React | Describe the behavior first; save |
| in requirement | state. | implementation details for the technical spec. |
THESAFESTHABIT
BeforeyousendrequirementstoanAIagent,readeachoneandask:“Could
twopeopleinterpretthisdifferently?”Iftheanswerisyes,rewriteit.

5.9RequirementTemplateforAI-Assisted
Development
Usethefollowingtemplatewheneveryouneedtodefinerequirementsfora
feature.Keepitinsideyour/docsfolderasrequirements.md.Thegoalisnotto
createbureaucracy.ThegoalistogiveyourselfandtheAIassistantaclearsource
oftruth.
requirements.mdstartertemplate
# Requirements Document
Project name:
[Name of the project]
Problem statement:
[What problem this software solves]
Primary users:
- [Role 1]
- [Role 2]
Functional requirements:
REQ-F-001: [Actor] must be able to [action] [object] so that [outcome].
REQ-F-002: [Actor] must be able to [action] [object] so that [outcome].
Non-functional requirements:
REQ-NF-001: [Quality condition with measurable limit].
REQ-NF-002: [Security, reliability, usability, or performance expectation].
User roles and permissions:
- [Role]: [allowed actions] / [restricted actions]
Business rules:
BR-001: [Policy or product rule the system must enforce].
BR-002: [Another rule].
System constraints:
CON-001: [Technology, budget, time, environment, or integration limit].
Acceptance criteria:
AC-001:
Given [starting condition],
When [action happens],
Then [expected result].
Open questions:
- [Anything that must be clarified before design or coding begins].
PracticalExample:WritingRequirementsfora
TaskManagementApp
Assumeyourengineeringintentissimple:youwanttobuildasmalltask
managementappforaconsultingteam.Donotbeginwithscreensorcode.Begin

withrequirements.
Requirement
Example requirement
type
Functional REQ-F-001: A team member must be able to create a task with a
title, description, due date, and status.
Functional REQ-F-002: A project manager must be able to assign a task to
one team member.
Non-functional REQ-NF-001: The task list must load within two seconds for up to
500 tasks.
Role rule REQ-R-001: A viewer must not create, edit, assign, or delete
tasks.
Business rule BR-001: A completed task cannot be edited unless it is reopened.
Constraint CON-001: The first version must support web use only.
Acceptance criteria AC-001: Given a signed-in team member, when they submit a valid
task form, then the task is saved and displayed in the task list.
PromptBox:RequirementsReview
Act as a strict software requirements reviewer.
Review the requirements below for ambiguity, missing actors, missing acceptance
criteria, hidden implementation details, and untestable language.
Return your response in three sections:
1. Problems found
2. Revised requirements
3. Questions that must be answered before design begins
Requirements:
[paste your requirements here]
ASimpleRequirementWritingWorkflow
1. StartwiththeproblemstatementfromyourEngineeringIntentDocument.
2. Listtheprimaryuserrolesbeforelistingfeatures.
3. Writefunctionalrequirementsusingactor,action,object,andoutcome.
4. Addnon-functionalrequirementsthatdefinequalityexpectations.
5. Writebusinessrulesseparatelyfromimplementationchoices.
6. ListconstraintssotheAIassistantdoesnotinventunrealisticsolutions.
7. Addacceptancecriteriaforeveryimportantrequirement.
8. Reviewthedocumentforambiguitybeforemovingtotheproduct
requirementsdocument.

RequirementQualityChecklist
Check Question
Clear Can you understand the requirement without guessing?
Actor defined Does the requirement say who performs the action?
Action defined Does it say exactly what must happen?
Bounded Does it avoid hidden extra features?
Testable Can you prove whether it works?
Traceable Can it become a task, test, and code change later?
No implementation Does it avoid technical decisions that belong in the technical
leak spec?
KeyTakeaways
Arequirementisusefulwhenitisclear,testable,bounded,andtraceable.
Functionalrequirementsdescribewhatthesystemmustdo.
Non-functionalrequirementsdescribehowwellthesystemmustwork.
Rolesandpermissionsmustbewrittenbeforeimplementationbegins.
Businessrulescapturepolicydecisionsthatthesoftwaremustenforce.
Acceptancecriteriaturnrequirementsintotestableexpectations.
ReviewQuestions
1. Whyis“theappshouldbeeasytouse”notastrongrequirement?
2. Whatisthedifferencebetweenafunctionalrequirementandanon-functional
requirement?
3. Whyshouldrolesandpermissionsbedefinedbeforecodingstarts?
4. Whatisthepurposeofacceptancecriteria?
5. HowcanavaguerequirementcauseanAIassistanttoproducethewrong
output?

PracticalExercises
Rewritethisweakrequirement:“Usersshouldmanageprojects.”Makeit
specific,testable,androle-based.
Writethreefunctionalrequirementsforasimpleappointmentbooking
app.
Writethreenon-functionalrequirementsforthesameappointment
bookingapp.
CreateasmallrolesandpermissionstablewithAdmin,Staff,and
Customerroles.
ChooseonerequirementandwritetwoacceptancecriteriausingGiven-
When-Thenformat.
InSummary
Clearrequirementsarethefirstrealcontrolpointinspec-drivenAIengineering.
Theyprotectyourprojectfromvagueprompts,randomAIoutput,hidden
assumptions,andincompletefeatures.Whenyoudefinewhatthesoftwaremust
do,howwellitmustwork,whocanuseit,whatrulesitmustfollow,andhow
successwillbetested,yougivebothyourselfandtheAIassistantareliablepath
forward.
Inthenextchapter,youwilltaketheserequirementsandorganizethemintoa
ProductRequirementsDocument.Thatdocumentwillconnecttheproblem,users,
goals,featurescope,out-of-scopedecisions,andsuccessmeasuresintoaclear
productdirectionbeforetechnicaldesignbegins.

Chapter6
Building a Product
Requirements Document
_______________________________________________________
__________________
CHAPTERPROMISE
Bytheendofthischapter,youwillknowhowtoturnclearrequirementsintoa
ProductRequirementsDocument,orPRD,thatexplainswhatyouarebuilding,
whoitisfor,whatisinscope,whatisoutofscope,howfeaturesareprioritized,
andhowsuccesswillbemeasured.
InChapter5,youlearnedhowtowriteclearsoftwarerequirements.Those
requirementsexplainedwhatthesystemmustdo,howwellitmustwork,whocan
useit,whatrulesitmustfollow,andhowsuccesscanbetested.Nowyouwill
organizethoserequirementsintoaProductRequirementsDocument.
APRDhelpsyoumovefromscatteredrequirementstoafocusedproductdirection.
Itdoesnotreplacetechnicaldesign.Instead,itpreparesyoufortechnicaldesign
byansweringtheproductquestionsfirst:Whatproblemareyousolving?Whoare
yousolvingitfor?Whichfeaturesmattermost?Whatwillyoudeliberatelyleave
outfornow?
By the end of this chapter, you will be
Why it matters
able to
Explain what a PRD does in spec-driven AI You will know why product direction must
engineering. come before technical design.
Define product goals and measurable You avoid building features that do not
success metrics. support a clear outcome.
Describe user personas, use cases, stories, You help yourself and the AI assistant
and flows. understand real user behavior.
Separate feature scope from out-of-scope You keep the project focused and prevent
work. unnecessary expansion.
Prioritize features for a first useful version. You build the most valuable parts before
adding extras.
Complete a self-contained PRD template. You can prepare a practical product
document without external files.

HOWTHISCHAPTERCONNECTS
Chapter5gaveyourequirements.Thischapterturnsthoserequirementsinto
productdirection.Chapter7willusethePRDasinputforthetechnical
specification,whereyouwilldecidehowthesystemshouldbedesignedand
built.
Figure6.1:ThePRDbridgesclearrequirementsandlater
technicaldesign.
6.1WhataProductRequirementsDocument
Does
AProductRequirementsDocumentexplainstheproductdirectionbeforeyouask
anyone,includinganAIagent,todesignorbuildthesystem.Itgathersthe
productgoal,targetusers,usecases,scope,userstories,flows,priorities,and
successmetricsinoneplace.
ThinkofthePRDastheproductagreement.Itsays,“Thisistheproblem.These
aretheusers.Thisisthevaluewewant.Thesearethefeatureswewillbuildnow.
Thesearethefeatureswewillnotbuildyet.”
A PRD should answer Simple meaning
Why are you building this? The product goal and business reason.
Who is it for? The users, roles, and main use cases.
What will it include? The features and behaviors in scope.
What will it exclude? The features you will not build in this version.
How will users experience it? The user stories and user flows.
How will you know it The success metrics and acceptance signals.
worked?

BEGINNERRULE
DonotusethePRDtodescribedatabasetables,frameworks,endpoints,orfile
structure.Savethosedecisionsforthetechnicalspecification.ThePRDshould
explaintheproductclearlybeforethetechnicalsolutionbegins.
Figure6.2:AstrongPRDcombinesgoals,users,scope,stories,
flows,priorities,andmetrics.
6.2ProductGoalsandSuccessMetrics
Aproductgoaldescribestheoutcomeyouwantthesoftwaretocreate.Asuccess
metrictellsyouhowyouwillmeasurewhetherthatoutcomeishappening.
Withoutgoalsandmetrics,youmaybuildmanyfeatureswithoutknowingwhether
theproductisactuallyuseful.
Astrongproductgoalisspecificenoughtoguidedecisions.Itdoesnotneedtobe
complicated.Itonlyneedstoexplaintheresultyouwantfortheuserorbusiness.
| Weak goal | Stronger goal | Possible success metric |
| --- | --- | --- |
| Build a task app. | Help small teams create, assign, and track daily work in one place. create their first task within five minutes. | 80 percent of new users |
| Make customer | Help support teams answer repeated | Average first response time |
| support better. | questions faster with an AI-assisted knowledge base. | is reduced by 30 percent. |
| Create an | Help managers see key business | Managers can view the five |
| analytics | numbers without opening | core metrics on one |
| dashboard. | spreadsheets. | dashboard. |

Goalandmetricformat
Product goal:
[This product helps] [target user] [achieve outcome] [under important constraint or
context].
Success metrics:
- Metric 1: [measurable user or business result]
- Metric 2: [quality or adoption signal]
- Metric 3: [failure or risk signal to monitor]
6.3UserPersonasandUseCases
Apersonaisasimpledescriptionofausertype.Ithelpsyourememberthat
softwareisnotbuiltforanabstractcrowd.Itisbuiltforpeoplewithgoals,
frustrations,limits,andresponsibilities.
Ausecasedescribeswhatauserneedstoaccomplishwiththeproduct.Personas
helpyouunderstandwhotheuseris.Usecaseshelpyouunderstandwhatthe
useristryingtodo.
Persona field Example
Name or role Project manager
Goal Assign work and know what is delayed.
Frustration Tasks are scattered across messages and notebooks.
Main use cases Create project, assign task, review task status, follow up on
overdue work.
Success condition Can see all active work without asking every team member.
PromptBox:CreatePersonasandUseCases
You are helping me prepare a Product Requirements Document.
Project idea:
[paste the project idea]
Known requirements:
[paste the requirements]
Create 3 user personas. For each persona, include goal, frustration, main use cases,
and success condition. Keep the wording simple and practical. Do not invent technical
implementation details.
6.4FeatureScope
Featurescopedefineswhatyouwillbuildinthecurrentversion.Scopematters
becauseeveryfeatureconsumestime,attention,testingeffort,andmaintenance.
Ifeverythingisincluded,theprojectbecomeshardtofinish.

Ausefulscopestatementshoulddescribethefeature,theuseritsupports,and
thereasonitbelongsintheversionyouarebuildingnow.
Why it belongs
Feature In-scope behavior
now
| Task creation | A signed-in user can create a task with title, description, status, and due date. value if work cannot be captured. | The product has no |
| --- | --- | --- |
| Task list | A user can view tasks assigned to them or created by them. place to see current work. | Users need a simple |
| Basic assignment | A project manager can assign a task to one team member. ownership. | Team work requires |
| Status update | A user can mark a task as pending, in progress, or complete. core to the product. | Progress tracking is |
SCOPECONTROLHABIT
Foreveryfeatureyouinclude,writeonesentenceexplainingwhyitbelongsin
thisversion.Ifyoucannotexplainthevalue,moveittolaterwork.
6.5Out-of-ScopeFeatures
Out-of-scopefeaturesarefeaturesyoudeliberatelychoosenottobuildinthe
currentversion.Thissectionisnotnegative.Itprotectsyourprojectfrom
becomingtoolargeandhelpsanAIassistantavoidaddingfeaturesyoudidnot
approve.
Whenafeatureisoutofscope,saywhetheritisexcludedpermanently,delayedto
alaterversion,orwaitingformoreinformation.
| Out-of-scope item | Reason | Future status |
| --- | --- | --- |
| Real-time chat | The first version focuses on task tracking, not conversation. | Possible later version. |
| Mobile app | The first version will be web-only to reduce complexity. web workflow is stable. | Future version after |
| Advanced reporting | Basic task status is enough for the first version. request specific reports. | Consider after users |
| Multiple assignees per | Single ownership is simpler for version | Revisit after testing |
| task | 1. | real team workflows. 6.6UserStories Auserstorydescribesafeaturefromtheuser’spointofview.Itconnectsauser,a need,andareason.Userstoriesareusefulbecausetheypreventfeaturesfrom |

becomingdisconnectedtechnicaltasks.
Theclassicformatissimple:Asa[user],Iwant[capability],sothat[benefit].Do
notmakethestorytoolarge.Astoryshoulddescribeoneusefuluseroutcome.
Weak story Stronger story
As a user, I want tasks. As a team member, I want to create a task with a due
date so that I can record work that needs attention.
As an admin, I want control. As an owner, I want to invite team members so that
work can be shared inside one workspace.
As a manager, I want reports. As a project manager, I want to see overdue tasks so
that I can follow up quickly.
Userstoryformat
US-001:
As a [specific user role],
I want [one clear capability],
so that [specific benefit].
Acceptance link:
This story supports requirement [REQ-ID] and will later produce task [TASK-ID] and test
[TEST-ID].
6.7UserFlows
Auserflowshowsthestepsausertakestocompleteagoal.Youdonotneeda
complexdesigntool.Forthisbook,aclearwrittenflowisenough.Thegoalisto
understandthepathbeforescreensandcodearecreated.
Agoodflowincludesthestartpoint,theuseraction,thesystemresponse,the
successpath,andatleastonefailurepath.Failurepathsmatterbecauserealusers
makemistakes,loseconnection,forgetfields,orlackpermission.
Flow step Example: Create a task
Start Team member opens the task dashboard.
Action Team member selects Add Task.
Input Team member enters title, description, due date, and status.
System response System validates required fields.
Success path Task is saved and appears in the task list.
Failure path If the title is missing, the system shows a clear error and keeps
the typed values.

Figure6.3:Auserstorybecomesstrongerwhenitislinkedto
flow,scope,priority,andsuccess.
6.8PrioritizingFeatures
Prioritizationhelpsyoudecidewhattobuildfirst.Inaspec-drivenworkflow,thisis
especiallyimportantbecauseAIcangeneratealotofcodequickly.Speedcan
becomedangerousifyoubuildlow-valuefeaturesbeforethecoreproductworks.
Useasimpleprioritymodel:Must-have,Should-have,Could-have,andLater.This
givesyouenoughstructurewithoutturningthePRDintoacomplicatedplanning
system.
| Priority | Meaning | Example |
| --- | --- | --- |
| Must-have | The first useful version fails without it. | Create and view tasks. |
| Should-have | Important, but the product can still be tested without it. | Filter tasks by status. |
| Could-have | Useful improvement if time allows. | Add task labels. |
| Later | Not needed for the first version. real-time chat. | Advanced analytics and |
PRACTICALPRIORITIZATIONTEST
Ask:Ifthisfeatureismissing,canyoustilltestthemainproductidea?Ifthe
answerisyes,itmaynotbeamust-haveforthefirstversion.

6.9ProductRequirementsDocumentTemplate
UsethefollowingPRDtemplateinsideyourbookworkflow.Youdonotneedan
externalfileoronlinerepository.Copythestructureintoyourownproject
documentandfillitinstepbystep.

prd.mdstartertemplate
# Product Requirements Document
Product name:
[Name of the product]
1. Product summary
[Explain the product in 3 to 5 sentences.]
2. Problem statement
[What problem are you solving and why does it matter?]
3. Product goal
[This product helps] [target user] [achieve outcome].
4. Success metrics
- [Metric 1]
- [Metric 2]
- [Metric 3]
5. Primary users
Persona 1:
- Role:
- Goal:
- Frustration:
- Main use cases:
- Success condition:
6. Feature scope
In scope for this version:
- [Feature 1 and reason]
- [Feature 2 and reason]
- [Feature 3 and reason]
7. Out of scope
Not included in this version:
- [Feature or capability and reason]
- [Feature or capability and reason]
8. User stories
US-001: As a [role], I want [capability], so that [benefit].
US-002: As a [role], I want [capability], so that [benefit].
9. User flows
Flow name:
- Start:
- Action:
- System response:
- Success path:
- Failure path:
10. Feature priorities
Must-have:
- [Feature]
Should-have:
- [Feature]
Could-have:
- [Feature]
Later:
- [Feature]
11. Open questions
- [Question that must be answered before technical design]

12. Links to requirements
- Supports REQ-F-001
- Supports REQ-NF-001
- Supports BR-001
6.10PracticalExample:WritingaPRDfora
SaaSApplication
NowyouwillturnaroughSaaSideaintoacompactPRD.Theproductisasmall
taskmanagementapplicationforconsultingteams.Thegoalisnottodesignevery
technicaldetail.Thegoalistocreateaclearproductdirectionthatcanlater
becomeatechnicalspecification.
PRD section Example content
Product summary A web-based task management tool that helps small consulting
teams create, assign, track, and complete work in one shared
workspace.
Problem statement Small teams often track work in scattered chats, notebooks, and
spreadsheets. This causes missed deadlines and unclear
ownership.
Product goal Help consulting teams capture work, assign ownership, and track
progress without complex project-management setup.
Success metrics A new user creates a task within five minutes; a manager can see
overdue tasks; task list loads within two seconds for 500 tasks.
Primary users Owner, project manager, team member, viewer.
Must-have scope Create task, view task list, assign task, update task status, enforce
basic permissions.
Out of scope Mobile app, real-time chat, advanced reporting, multi-assignee
tasks.
PromptBox:PRDReview
Act as a strict product requirements reviewer.
Review the PRD below for unclear goals, missing users, weak success metrics, bloated
scope, missing out-of-scope decisions, vague user stories, and missing user flows.
Return your response in four sections:
1. Problems found
2. Suggested improvements
3. Missing questions
4. Revised compact PRD
PRD:
[paste your PRD here]

ASimplePRDWritingWorkflow
1. StartwiththerequirementsdocumentfromChapter5.
2. Writeashortproductsummaryinplainlanguage.
3. Defineonemainproductgoalbeforelistingfeatures.
4. Addtwoorthreesuccessmetricsthatcanbeobservedormeasured.
5. Describethemainpersonasandtheirusecases.
6. Separatein-scopefeaturesfromout-of-scopefeatures.
7. Writeuserstoriesforthemostimportantuseroutcomes.
8. Writesimpleuserflowsforthemust-havefeatures.
9. Prioritizefeaturesbeforemovingtothetechnicalspecification.
PRDQualityChecklist
Check Question
Clear product goal Can you explain the product outcome in one sentence?
Known users Have you identified the primary users and their goals?
Useful success metrics Can you tell whether the product is working for users?
Controlled scope Does the PRD clearly state what is included now?
Protected focus Does it clearly state what is out of scope?
User stories Are the most important features written from the user point
of view?
User flows Can you follow the user path from start to success or failure?
Ready for technical spec Can a technical designer use this PRD without guessing the
product direction?
KeyTakeaways
APRDturnsclearrequirementsintoproductdirectionbeforetechnical
designbegins.
AgoodPRDexplainstheproblem,users,goals,scope,stories,flows,
priorities,andsuccessmetrics.
Out-of-scopedecisionsarejustasimportantasin-scopedecisions
becausetheyprotectfocus.
Userstoriesexplainvaluefromtheuserpointofview,whileuserflows
explainthepathausertakes.
Featureprioritizationhelpsyoubuildthefirstusefulversionbeforeadding
extracomplexity.

ReviewQuestions
1. WhatdoesaProductRequirementsDocumentdoinaspec-drivenAI
engineeringworkflow?
2. WhyshouldaPRDavoidtechnicalimplementationdetails?
3. Whatisthedifferencebetweenaproductgoalandasuccessmetric?
4. Whyshouldout-of-scopefeaturesbewrittenclearly?
5. Howdoesauserstorydifferfromauserflow?
PracticalExercises
Writeaproductgoalforasimpleappointmentbookingapplication.
Createthreesuccessmetricsfortheappointmentbookingapplication.
Writetwopersonasforthesameapplication:onecustomerandonestaff
member.
Listfivein-scopefeaturesandfiveout-of-scopefeaturesforversion1.
Writeoneuserstoryandoneuserflowforbookinganappointment.
InSummary
AProductRequirementsDocumentgivesyourprojectaclearproductdirection
beforedesignandcodingbegin.Ithelpsyouexplainwhatyouarebuilding,who
youarebuildingitfor,whatvalueitshouldcreate,whatbelongsinthecurrent
version,andwhatshouldwaituntillater.
Inthenextchapter,youwillusethisPRDtocreateatechnicalspecification.That
iswhereyouwilltranslateproductdirectionintosystemstructure,frontend
behavior,backendresponsibilities,databaseneeds,APIrequirements,security
expectations,anderror-handlingrules.

Chapter7
Creating Technical
Specifications
_______________________________________________________
__________________
CHAPTERPROMISE
Bytheendofthischapter,youwillknowhowtoturnaProductRequirements
DocumentintoapracticalTechnicalSpecificationthatexplainsthesystem
overview,architecture,frontend,backend,database,API,security,performance,
anderror-handlingdecisionsbeforeimplementationbegins.
InChapter6,youlearnedhowtowriteaProductRequirementsDocument.The
PRDexplainswhatyouarebuilding,whoitserves,whatbelongsintheproduct,
whatisoutofscope,andhowsuccesswillbemeasured.Thenextstepisto
decidehowtheproductshouldbedesignedtechnically.
ATechnicalSpecification,ortechspec,turnsproductdirectionintobuilddirection.
ItgivesyouenoughstructuretoguideanAIcodingassistantwithoutlettingit
guessthearchitecture,databasedesign,APIcontracts,securityrules,
performancetargets,orerrorbehavior.
By the end of this chapter, you will be
Why it matters
able to
Explain what a Technical Specification must You will know what belongs in the
cover. document before code begins.
Write a clear system and architecture You give yourself and your AI assistant a
overview. stable design map.
Define frontend, backend, database, and You reduce guessing during
API requirements. implementation.
Document security, performance, and error- You build quality into the system before
handling rules. code is written.
Use a complete Technical Specification You can prepare a self-contained build
template. document inside the book workflow.

HOWTHISCHAPTERCONNECTS
Chapter6gaveyouthePRD.ThischapterturnsthatPRDintotechnical
direction.Chapter8willusethetechnicalspecificationtoreasonabout
architecturemoredeeply,comparedesignoptions,andrecordarchitecture
decisions.
Figure7.1:Thetechnicalspecificationbridgesproduct
directionandcontrolledimplementation.
7.1WhataTechnicalSpecificationMust
Explain
ATechnicalSpecificationexplainshowthesystemwillbeorganizedandhowthe
mainpartsshouldbehave.Itisnotafullcodelisting.Itisadesigndocumentthat
preparesyoutogeneratetasks,tests,andimplementationworkwithmuchless
confusion.
YoushouldwritethetechspecbeforeaskinganAIassistanttobuildafeature.
Withoutit,theassistantmaychooseitsownarchitecture,inventmissingdata
fields,createinconsistentendpoints,orignoreimportantsecurityanderror-
handlingrules.
Question the tech spec
What you should define
answers
What is the system? The purpose, users, boundaries, and main
capabilities.
How is it organized? The architecture style, layers, components, and data
flow.
What does the user interact Screens, forms, states, and validation rules.
with?

Question the tech spec
What you should define
answers
What logic runs behind the Services, workflows, permissions, background jobs,
scenes? and integrations.
How is data stored? Entities, relationships, constraints, indexes, and
retention rules.
How do parts communicate? API endpoints, request formats, response formats,
and status codes.
How is quality protected? Security, performance, reliability, and error-handling
requirements.
BEGINNERRULE
APRDsayswhatproductyouwant.ATechnicalSpecificationsayshowthe
systemshouldbestructuredsothatproductcanbebuiltsafelyandconsistently.
7.2SystemOverview
Thesystemoverviewisthestartingpointofyourtechspec.Itgivesasimple
technicaldescriptionofthesoftwarewithoutgoingtoodeepintoimplementation.
Youuseittostatewhatthesystemis,whousesit,whatitconnectsto,andwhere
itsboundariesare.
AgoodsystemoverviewpreventsacommonAIcodingproblem:theassistant
buildsmorethanyouaskedforbecausethesystemboundarywasunclear.
Boundariestelltheassistantwhatbelongsinsidethisprojectandwhatshould
remainoutside.
System overview field What to write
System name The working name of the application or feature.
Purpose The main technical purpose of the system in one or two
sentences.
Primary users The roles that interact with the system.
Core capabilities The main actions the system must support.
System boundary What this system will handle and what it will not handle.
External dependencies Services, APIs, file systems, email providers, payment
systems, or AI models it may depend on.
Assumptions Conditions you are accepting for this version.

Systemoverviewmini-template
System name:
[Name]
Purpose:
[One or two sentences describing what the system does technically]
Primary users:
- [Role 1]
- [Role 2]
Core capabilities:
- [Capability 1]
- [Capability 2]
System boundary:
This system includes [included areas].
This system does not include [excluded areas].
External dependencies:
- [Dependency 1]
- [Dependency 2]
Assumptions:
- [Assumption 1]
- [Assumption 2]
7.3ArchitectureOverview
Thearchitectureoverviewexplainshowthesystemisdividedintomajorparts.You
donotneedadvancedarchitecturelanguagetostart.Youonlyneedtoshowthe
mainpieces,theirresponsibilities,andhowdatamovesbetweenthem.
Formanybeginnerprojects,asimplelayeredarchitectureisenough:user
interface,APIlayer,applicationlogic,database,andexternalservices.The
importantthingisnottosoundcomplex.Theimportantthingistomake
responsibilityclear.

Figure7.2:Thecoreareascoveredbyapracticaltechnical
specification.
Architecture item Decision to document
Architecture style For example: simple web app, modular monolith, client-
server app, or service-based design.
Main components Frontend, backend, database, worker, external service, or AI
model layer.
Responsibility of each What each part owns and what it must not own.
component
Data flow How data moves from user action to response.
State ownership Where important state is stored and updated.
Trade-offs Why this design is acceptable for the current version.
PromptBox:ExploreArchitectureOptions
You are helping me write a Technical Specification.
Product Requirements Document:
[paste the PRD]
Suggest 2 simple architecture options for this project. For each option,
explain:
1. Main components
2. Data flow
3. Advantages
4. Risks
5. Which option is better for a beginner-friendly first version
Do not write code yet. Do not add features outside the PRD.

7.4FrontendRequirements
Frontendrequirementsdescribewhattheuserseesandhowtheinterfaceshould
behave.Youarenotdesigningeverypixel.Youaredefiningthescreens,forms,
states,validations,anduserinteractionsthatmustexistfortheproducttowork.
Whenfrontendrequirementsaremissing,anAIassistantmaybuildscreensthat
lookreasonablebutdonotsupporttheactualworkflow.Yourjobistotellthe
assistantwhatscreensmatterandwhateachscreenmustallowtheusertodo.
Frontend requirement
What you should specify
area
Screens or pages Dashboard, login page, settings page, list view, detail
view, or form page.
Components Navigation, table, card, modal, form, search bar, filter, or
status badge.
Form fields Required fields, optional fields, input type, placeholder, and
validation rule.
UI states Loading, empty, error, success, disabled, and permission-
denied states.
User actions Create, edit, delete, save, cancel, search, filter, export, or
retry.
Accessibility basics Readable labels, keyboard-friendly navigation, and clear
error messages.
Frontendrequirementexample
Screen: Create Task
Purpose: Allow a signed-in team member to create a new task.
Fields:
- Title: required, text, maximum 120 characters
- Description: optional, text area
- Due date: optional, date input
- Assignee: required, selected from workspace members
States:
- Loading: show saving indicator
- Success: return to task list and show the new task
- Error: explain what failed and keep the user input on screen
7.5BackendRequirements
Backendrequirementsdescribetheserver-sidebehaviorthatsupportstheproduct.
Thisincludesbusinesslogic,permissionchecks,datavalidation,serviceoperations,
backgroundwork,andintegrationswithothersystems.
Thebackendshouldnotsimplyacceptanythingthefrontendsends.Itmust
enforcetherulesofthesystem.Ifthefrontendforgetstovalidateafield,the

backendstillneedstoprotectthedataandrejectinvalidrequests.
Backend area Example decision
Business logic A task cannot be marked complete if it has no title.
Authorization Only workspace members can view tasks in that workspace.
Validation The backend rejects invalid due dates and missing required
fields.
Service layer Task creation is handled by a task service, not scattered
across routes.
Background jobs Daily reminder jobs may run separately from normal
requests.
Integrations Email notification service is called only after task creation
succeeds.
BACKENDDISCIPLINE
Writebackendrulesinplainlanguagefirst.Later,eachrulecanbecomeatask,
atest,andthencode.Thisishowspec-drivenworkstaysconnected.
7.6DatabaseRequirements
Databaserequirementsdescribetheinformationthesystemmuststore,howthat
informationisrelated,andwhatrulesprotectitfrombecominginconsistent.You
donotneedaperfectschemaatfirst,butyouneedacleardatamodelbefore
implementationbegins.
Startwithentities.Anentityisathingyoursystemneedstoremember,suchasa
user,workspace,project,task,invoice,file,ormessage.Thendefinethefields,
relationships,constraints,anddeletionrules.
Database requirement
What to define
area
Entities The main things stored by the system.
Fields The information each entity contains.
Relationships How entities connect to each other.
Constraints Required fields, unique fields, valid values, and limits.
Indexes Fields that should be searchable or frequently filtered.
Retention and deletion What happens when data is deleted or archived.

Databaserequirementexample
Entity: Task
Purpose: Stores a unit of work inside a project.
Fields:
- id: unique task identifier
- project_id: required, links task to project
- title: required, max 120 characters
- description: optional
- status: pending, in_progress, completed
- assignee_id: optional, links task to user
- due_date: optional
- created_at: required timestamp
Relationship:
One project can have many tasks.
One user can be assigned many tasks.
7.7APIRequirements
APIrequirementsdefinehowthefrontend,backend,andotherpartsofthesystem
communicate.AclearAPIspecificationpreventsinconsistentroutes,unclear
requestbodies,mixedresponseformats,andweakerrorhandling.
Foreachendpoint,definethemethod,path,purpose,authenticationrule,request
body,successresponse,errorresponses,andvalidationrules.ThisgivesyourAI
assistantacontracttofollowinsteadoflettingitinventone.
Endpoint item Example
Method and path POST /api/tasks
Purpose Create a task inside a project.
Authentication Signed-in workspace member required.
Request body project_id, title, description, due_date, assignee_id.
Success response 201 Created with the created task object.
Error responses 400 for invalid input, 401 for missing login, 403 for no
access, 404 for project not found.
Validation Title is required and cannot exceed 120 characters.

APIcontractexample
POST /api/tasks
Purpose: Create a new task.
Auth: Required
Request:
{
"project_id": "string",
"title": "string",
"description": "string",
"due_date": "YYYY-MM-DD",
"assignee_id": "string"
}
Success response: 201 Created
Error responses: 400, 401, 403, 404
7.8SecurityRequirements
Securityrequirementsdescribehowthesystemprotectsusers,data,permissions,
secrets,andimportantactions.Securityshouldnotbeaddedasanafterthought.
YoushoulddefinesecurityexpectationsbeforeimplementationbecauseAI-
generatedcodemayotherwisechooseweakdefaults.
Forbeginnerprojects,focusonthebasics:authentication,authorization,input
validation,sensitivedatahandling,secretsmanagement,andsafeerrormessages.
Security area Requirement example
Authentication Users must sign in before accessing private project data.
Authorization Users can only view tasks in workspaces they belong to.
Input validation All user input must be validated on the backend before
storage.
Sensitive data Passwords must never be stored as plain text.
Secrets API keys and tokens must not appear in source files or
examples.
Safe errors Error messages must not reveal stack traces or private data
to users.
7.9PerformanceRequirements
Performancerequirementsdefinehowfastorefficientthesystemshouldbeunder
expectedconditions.Youdonotneedenterprise-levelperformancetargetsfor
everysmallproject,butyoushoulddefinepracticalexpectationssothesystemis
notdesignedblindly.
Goodperformancerequirementsaremeasurable.Avoidvaguephrasessuchas
“theappshouldbefast.”Instead,definesimpletargetsthatmatchthesizeofyour

firstversion.
Weak performance
Stronger performance requirement
statement
The dashboard should load The task dashboard should load within 2 seconds for a
fast. workspace with up to 1,000 tasks.
Search should be quick. Task search should return results within 1 second for
common filters.
The app should support many The first version should support 50 active users in one
users. workspace without visible slowdown.
PERFORMANCETIP
Setrealistictargetsfortheversionyouarebuildingnow.Overengineering
performancetooearlycanmakethesystemhardertofinishandharderto
understand.
7.10ErrorHandling Requirements
Errorhandlingrequirementsexplainwhatshouldhappenwhensomethinggoes
wrong.Thisincludesinvalidinput,missingpermission,networkfailure,database
failure,unavailableservices,duplicateactions,andunexpectedservererrors.
Gooderrorhandlingprotectstheuserexperienceandhelpsyoudebugthe
system.Theusershouldreceiveaclearmessage.Thesystemshouldlogenough
informationfordiagnosis.Privatetechnicaldetailsshouldnotbeexposedpublicly.
Figure7.3:Technicaldecisionsshouldleadtorulesthatcanbe
implemented,reviewed,andtested.
Error situation Expected behavior
Missing required field Reject the request, explain the missing field, and keep
the user input on screen.
Not signed in Return 401 and ask the user to sign in.

Error situation Expected behavior
No permission Return 403 and explain that the user cannot access the
resource.
Resource not found Return 404 with a safe message.
External service failure Retry if safe, otherwise show a temporary failure
message.
Unexpected server error Return a general error message and log the details
internally.
7.11TechnicalSpecificationTemplate
UsethefollowingtemplatewheneveryouneedtoturnaPRDintobuilddirection.
Youcancopyitinsideyourownprojectdocumentandfillitsectionbysection.
Keepthefirstversionsimple.Aclearsimpletechspecisbetterthanalarge
documentnobodycanfollow.
TechnicalSpecificationTemplate
1. System Overview: name; purpose; users; capabilities; boundaries; dependencies;
assumptions.
2. Architecture Overview: style; components; responsibilities; data flow; trade-offs.
3. Frontend Requirements: screens; components; forms; validation; UI states;
accessibility basics.
4. Backend Requirements: services; business rules; authorization rules; validation; jobs;
integrations.
5. Database Requirements: entities; fields; relationships; constraints; indexes;
retention/deletion rules.
6. API Requirements: endpoint; method; path; purpose; auth rule; request; success
response; errors.
7. Security Requirements: authentication; authorization; input validation; sensitive data;
secrets; safe errors.
8. Performance Requirements: expected users/data size; response targets; search
targets; known limits.
9. Error Handling Requirements: user messages; internal logging; retry rules; fallback
behavior.
10. Open Questions: question; decision owner; whether it must be answered before
implementation.
PracticalExample:TechnicalSpecfora Task
CreationFeature
HereisacompactexamplethatshowshowonePRDfeaturebecomestechnical
direction.Noticethatitdoesnotattempttowriteallthecode.Itdefinesenough
structureforthenextstage:taskplanning,testplanning,andimplementation.

Spec area Example decision
Feature Create a task inside a project.
Frontend Create Task screen with title, description, assignee, due date,
and save button.
Backend Task service validates input, checks project membership, and
creates the task.
Database Task belongs to one project and may be assigned to one user.
API POST /api/tasks creates a task and returns 201 on success.
Security Only signed-in project members can create tasks in that project.
Performance Task creation should complete within 1 second under normal
use.
Errors Missing title returns 400; unauthorized access returns 403;
missing project returns 404.
PromptBox:DraftaTechnicalSpecfromaPRD
You are helping me create a Technical Specification.
Use this PRD:
[paste PRD]
Create a concise Technical Specification with these sections:
1. System Overview
2. Architecture Overview
3. Frontend Requirements
4. Backend Requirements
5. Database Requirements
6. API Requirements
7. Security Requirements
8. Performance Requirements
9. Error Handling Requirements
10. Open Questions
Rules:
- Do not write implementation code yet.
- Do not add features outside the PRD.
- Use beginner-friendly language.
- Make each decision clear enough to become tasks and tests
later.

ChapterChecklist
YoucanexplainthedifferencebetweenaPRDandaTechnical
Specification.
Youcanwriteasimplesystemoverviewwithboundariesand
assumptions.
Youcandescribethearchitectureatthecomponentlevelwithout
overcomplicatingit.
Youcandefinefrontend,backend,database,andAPIrequirements
clearly.
Youcandocumentsecurity,performance,anderror-handlingexpectations
beforecoding.
YoucanusetheTechnicalSpecificationtemplateasacompletein-book
workflowtool.
KeyTakeaways
ATechnicalSpecificationturnsproductdirectionintobuilddirection.
ThetechspecreducesAIguessingbydefiningarchitecture,data,APIs,
security,performance,anderrorsupfront.
Youdonotneedcomplexlanguagetowriteausefultechspec.Youneed
cleardecisions.
Everyimportanttechnicaldecisionshouldlaterconnecttoataskanda
test.
ReviewQuestions
1. WhatisthemaindifferencebetweenaPRDandaTechnicalSpecification?
2. Whyshouldyoudefinesystemboundariesbeforeimplementationbegins?
3. WhatinformationshouldanAPIrequirementinclude?
4. Whyshouldsecurityanderrorhandlingbeincludedbeforecodegeneration?
5. HowdoesaTechnicalSpecificationhelpcontrolanAIcodingassistant?
PracticalExercises
1. Chooseasmallappideaandwriteaone-paragraphsystemoverviewforit.
2. Listthemainfrontendscreenstheappneedsinitsfirstversion.
3. Createonedatabaseentitywithfields,relationships,andconstraints.

4. WriteoneAPIendpointspecificationusingmethod,path,purpose,request,
response,anderrors.
5. Writethreesecurityrequirementsandthreeerror-handlingrequirementsfor
thesameapp.
InSummary
Inthischapter,youmovedfromproductdirectiontotechnicaldirection.You
learnedwhataTechnicalSpecificationmustexplain,howtodefinethesystem
overview,howtodescribearchitecture,andhowtodocumentfrontend,backend,
database,API,security,performance,anderror-handlingrequirements.
YoualsoreceivedacompleteTechnicalSpecificationtemplatethatyoucanuse
insidethebookworkflow.Inthenextchapter,youwillgodeeperintosoftware
architecturewithAIsupportsoyoucancomparedesignoptions,identifytrade-
offs,andmakearchitecturedecisionsthatareeasiertoexplain,test,andmaintain.

Chapter8
Designing Software
Architecture with AI Support
In Chapter 7, you learned how a Technical Specification turns
product decisions into build direction. This chapter takes the next
step: you will learn how to shape the structure of the software
before any code is generated.
Architecture is not a decoration added after coding. It is the map
that tells you where responsibilities belong, how parts communicate,
what should stay separate, and what rules an AI assistant must
follow when it creates code.
Learning Objectives
Bytheendofthischapter,youwill
Whyitmatters
beableto
YoupreventAI-generatedcodefrom
Explainwhyarchitectureshouldbe
becomingscatteredandhardto
decidedbeforeimplementation.
maintain.
Youchooseastructurethatfitsthe
Comparemonoliths,modularmonoliths,
realprojectinsteadofcopying
andmicroservices.
trends.
Definecomponentsandboundaries YouhelpAIplacecodeintheright
clearly. partofthesystem.
UseAItoexplorearchitectureoptions YoutreatAIasadesignassistant,
withoutlosingcontrol. notasthefinaldecision-maker.
Youpreservethereasonbehind
WriteanArchitectureDecisionRecord.
importantdecisionsforfuturework.
Beginner Mindset:Architecture answers one simple question:
how should this system be organized so you can build it, test it,
change it, and trust it later?

Figure8.1:Architectureturnsintentintobuilddirection.
8.1 Why Architecture Should Not Be Left to
Guesswork
When you ask an AI assistant to build without architecture guidance,
it may still produce code that appears to work. The problem is that
working code is not the same as well-organized software.
Without architecture, the assistant may put business rules inside
screen components, mix database logic with user interface code,
duplicate validation in different places, or create files that do not
follow a clear structure. These mistakes may not look serious at first,
but they make future changes harder.
Architecture gives your project a shape before implementation
begins. It helps you decide where each responsibility belongs. It also
gives your AI assistant rules to follow instead of forcing it to guess.
RandomAIcoding Spec-drivenarchitecture
Theassistantdecidesthestructureas Youdefinethestructurebefore
itwritescode. implementationstarts.
Filesareorganizedaround
Filesgrowbasedonconvenience.
responsibilities.
Rulesliveinpredictablemodulesor
Rulesarescatteredacrosstheproject.
layers.
Changesbecomeriskybecause Changesaresaferbecauseboundaries
dependenciesareunclear. arevisible.

8.2 Choosing the Right Architecture Style
The right architecture is not always the most advanced one. It is the
one that matches your project size, team skill, expected growth, and
operational capacity.
For a beginner, the safest question is not, “What architecture is
popular?” The better question is, “What architecture gives this
project enough structure without creating unnecessary complexity?”
Decisionquestion Whatyouarechecking
Asmallproductusuallyneedsasimple
Howlargeisthefirstversion?
structurefirst.
Howmanypeoplewillworkon Moredevelopersmayneedclearermodule
it? boundaries.
Frequentchangesrequireseparation
Willfeatureschangeoften?
betweenareas.
Howmuchdeployment Microservicescreateoperational
complexitycanyoumanage? responsibilities.
Security-sensitivefeaturesneedstrong
Whatmustbeprotected?
boundaries.
Prompt Box 8.1 - Ask AI to compare architecture options
Giventhisprojectsummary,comparethreearchitectureoptions:monolith,
modularmonolith,andmicroservices.Foreachoption,explainthebenefits,
risks,complexitylevel,andwhenIshouldavoidit.Donotchooseformeuntil
youhavecomparedthetrade-offs.
8.3 Monoliths, Modular Monoliths, and Microservices
A monolith is one deployable application. It can be a good starting
point because it is simple to build, run, and understand. The risk is
that it can become messy if you do not separate responsibilities
inside it.
A modular monolith is also one deployable application, but the inside
is organized into clear modules. This is often the best choice for a
serious beginner project because it keepsdeployment simple while
still giving the code a disciplined structure.
Microservices split the system into separate services. This can be
powerful for large systems, but it also introduces network calls,

service communication, independent deployments, monitoring
complexity, and more failure points.
Figure8.2:Monolith,modularmonolith,andmicroservicescompared
forbeginners.
| Architecturestyle | Bestuse | Beginnerwarning Smalltools,MVPs,internal Donotallowalllogicto Monolith apps,simpleproducts. mixinonefileorlayer. GrowingSaaSapps, Youmustdefine |
| --- | --- | --- |
| Modularmonolith | dashboards,business systems. theirboundaries. Largesystemswith Donotchooseitonly | modulesandrespect |
| Microservices | independentteamsand scalingneeds. advanced. 8.4 Designing Components and Boundaries A component is a meaningful part of the system with a clear responsibility. A boundary explains what that component owns and what it should not touch directly. Boundaries are important because AI assistants often connect things too quickly. If you do not define boundaries, the assistant may allow any part of the system to depend on any other part. That creates hidden coupling. | becauseitsounds |

A beginner-friendly way to design boundaries is to use three
questions: What does this part own? What does it need from other
parts? What is it forbidden to do?
Component	Owns	Mustnotdo
Mustnotcontaindatabase
Screens,forms,display
UserInterface queriesorsecretbusiness
states,useractions.
rules.
Mustnothidecomplex
Routes,requestvalidation,
APILayer domainlogicinsideroute
responseformatting.
handlers.
Businessrulesandcore Mustnotdependdirectly
DomainModule
decisions. onscreenlayout.
Databaseaccess,queries, Mustnotdecideuser-
DataLayer
persistence. facingbusinessbehavior.
Architecture Rule:A boundary is useful only when you can tell
whether a piece of code belongs inside or outside it.
8.5 Creating Architecture Diagrams
An architecture diagram does not need to be beautiful. It needs to
be understandable. Your goal is to show the importantparts of the
system, how they communicate, and where responsibilities are
separated.
For this book, diagrams are kept black-and-white friendly so they
remain readable in paperback. When you create your own diagrams,
use large labels, simple boxes, clear arrows, and short names.
Diagramelement Useittoshow
Acomponent,module,service,database,or
Box
externalsystem.
Arrow Adependencyorcommunicationpath.
Whereoneresponsibilityareaendsandanother
Boundaryline
begins.
Thepurposeofthecomponent,notevery
Shortlabel
implementationdetail.

Figure8.3:AsimpleSaaSarchitecturewithclearcomponentsand
boundaries.
8.6 Using AI to Explore Architecture Options
AI is useful during architecture work because it can quicklycompare
options, expose missing concerns, and suggest risks you may not
have considered. However, you should not let AI make architecture
decisions silently.
Your job is to guide the comparison. Give the AI your requirements,
expected users, constraints, security concerns, and deployment
limits. Then ask it to explain trade-offs before suggesting an option.
Prompt Box 8.2 - Use AI as an architecture reviewer
Reviewthearchitecturebelow.Identifymissingcomponents,unclear
boundaries,securityrisks,performancerisks,andplaceswherebusinesslogic
maybecomescattered.Explainyourreasoninginbeginner-friendlylanguage.
Donotrewritethearchitectureuntilyouhavelistedtheissues.
Youprovide AIshouldreturn
Projectgoal Architectureoptionsthatfitthegoal.
Userroles Securityandpermissionconcerns.
Featurelist Suggestedmodulesandboundaries.
Dataneeds Databaseandintegrationconcerns.
Constraints Trade-offsandrisks.

8.7 Comparing Architecture Trade-Offs
Every architecture decision has a cost. A simple design may be
easier to build but harder to scale later. A distributed design may
scale better but become harder to deploy and debug. Spec-driven AI
engineering helps you make these choices deliberately.
A trade-off comparison should not only say which option is best. It
should explain why the option fits the current project and what risk
you accept by choosing it.
Whentochoose
Option	Strength	Cost
it
Canbecome
Fasttobuildand Chooseitforvery
Simplemonolith messywithout
easytorun. smallapplications.
internalstructure.
Balanced
Chooseitformost
structurewith Requiresdiscipline
Modularmonolith earlySaaSand
simple aroundmodules.
businessapps.
deployment.
Chooseitonly
Independent
Moreinfrastructure whenscaleor
Microservices scalingand
andcoordination. teamstructure
ownership.
demandsit.
Practical Guidance:For most beginner-to-intermediate projects,
start with a modular monolith. It gives you structure without
forcing you into advanced deployment complexity too early.
8.8 Writing Architecture Decision Records
An Architecture Decision Record, or ADR, is a short document that
explains an important architecture decision. It does not need to be
long. It needs to capture the context, the options considered, the
decision made, and the consequences of that decision.
ADRs are valuable when you work with AI because they become
durable instructions. Instead of explaining the same decision
repeatedly, you can include the ADR in your project context and tell
the assistant to follow it.
ADRsection Whatyouwrite
Title Ashortnameforthedecision.

ADRsection Whatyouwrite
Status Proposed,accepted,replaced,orrejected.
Context Theproblemandconstraintsbehindthedecision.
Optionsconsidered Therealisticchoicesyoucompared.
Decision Theoptionyouselected.
Thebenefits,costs,andresponsibilitiescreatedby
Consequences
thedecision.
Architecture Decision Record Template
ADR-001:[DecisionTitle]
Status:Proposed|Accepted|Replaced|Rejected
Context:
[Explaintheproblem,projectconstraints,andwhyadecisionisneeded.]
OptionsConsidered:
1.[OptionA]-[Benefitandcost]
2.[OptionB]-[Benefitandcost]
3.[OptionC]-[Benefitandcost]
Decision:
[Statetheselectedoptionclearly.]
Reason:
[Explainwhythisoptionfitsthecurrentproject.]
Consequences:
-[Positiveconsequence]
-[Trade-offorlimitation]
-[RuletheAIassistantmustfollowduringimplementation]
Prompt Box 8.3 - Generate an ADR draft
Usingtheprojectrequirementsandtechnicalspecificationbelow,draftan
ArchitectureDecisionRecordforthearchitecturestyle.Includecontext,
optionsconsidered,decision,reason,consequences,andimplementationrules
fortheAIassistant.

8.9 Practical Example: Designing aSaaS Application
Architecture
Now you will connect the chapter concepts into a small example.
Imagine you are building a SaaS task management application for
small teams. Users can create projects, assign tasks, invite team
members, and view activity updates.
Decisionarea Exampledecision
Useamodularmonolithbecausethefirstversion
Architecturestyle
needsstructurewithoutmicroservicecomplexity.
Useseparatescreensfordashboard,projects,tasks,
Frontend
members,andsettings.
Usemodulesforauthentication,projects,tasks,
Backend
members,notifications,andreporting.
Usetablesforusers,teams,projects,tasks,
Database
assignments,comments,andauditevents.
Userole-basedaccess:owner,admin,member,and
Security
viewer.
Paginatetasklistsandactivitylogstoavoidslow
Performance
pages.
Returnclearvalidationmessagesandlogunexpected
Errorhandling
failures.
Example ADR
ADR-001:UseaModularMonolithfortheSaaSTaskApp
Status:Accepted
Context:
Thefirstversionmustsupportprojects,tasks,roles,andteamcollaboration.The
systemneedsclearorganization,buttheteamdoesnotneedseparate
deploymentsforeachfeatureyet.
OptionsConsidered:
1.Simplemonolith-fast,butrisksmixingresponsibilities.
2.Modularmonolith-onedeploymentwithclearinternalboundaries.
3.Microservices-flexible,buttoocomplexforthefirstversion.
Decision:
Useamodularmonolith.

Reason:
Thisgivestheprojectenoughstructureforlong-termgrowthwhilekeeping
development,testing,anddeploymentsimple.
Consequences:
-Eachfeatureareamustliveinsideanamedmodule.
-Routehandlersmustnotcontaincomplexbusinessrules.
-TheAIassistantmustplacebusinesslogicindomainmodules,notinsideUI
components.

Chapter Checklist
Che
Question
ck
[] Haveyouchosenanarchitecturestylebasedonrealprojectneeds?
[] Haveyoudefinedthemaincomponentsofthesystem?
[] Haveyoudescribedwhateachcomponentowns?
[] Haveyouidentifiedwhateachcomponentmustnotdo?
[] Haveyoucomparedarchitecturetrade-offsbeforedeciding?
[] HaveyouwrittenatleastoneADRforthemainarchitecturedecision?
HaveyoucreatedrulesthatanAIassistantcanfollowduring
[]
implementation?
Key Takeaways
Architecture gives your software a clear shape before code is
generated.
A modular monolith is often the best starting point for serious
beginner projects.
Component boundaries tell you where responsibilities belong
and where they do not belong.
Architecture diagrams should be simple, readable, and useful
in black-and-white print.
AI can compare architecture options, but you must make the
final decision.
ADRs preserve the reason behind important architecture
choices.

Review Questions
1.Why is working code not always the same as well-architected
software?
2.When might a monolith be a better choice than
microservices?
3.What makes a modular monolith useful for early SaaS
products?
4.Why should you define component boundaries before using
an AI coding assistant?
5.What should an Architecture Decision Record include?
Practical Exercises
Exercise Whatyoushouldproduce
Chooseanarchitecturestyleforasmallonlinebookingappand
Exercise1
explainwhy.
Listfivecomponentsforthebookingappanddefinewhateach
Exercise2
oneowns.
Exercise3 WriteoneADRexplainingyourchosenarchitecturestyle.
Createasimpletext-basedarchitecturediagramusingboxes
Exercise4
andarrows.
In Summary
Architecture is how you turn product and technical direction into an
organized system. When you design architecture before
implementation, you reduce confusion, guide your AI assistant more
clearly, and make the project easier to test, change, and maintain.
You do not need to over-engineer the first version. You need a
structure that fits the project, protects important boundaries, and
gives every part of the system a clear responsibility. In the next
chapter, you will continue this design work by planning data models,
APIs, and integration specifications.

Chapter9
Data Models, APIs, and
Integration Specs
_____________________________________
_________________________________
In Chapter 8, you learned how architecture gives your system a clear
structure. This chapter takes that structure deeper: you will learn
how to design the data the system must store, the APIs that expose
that data, and the integration rules that connect your system to
outside services.
Data and API design are where vague product ideas become
concrete engineering contracts. If these contracts are unclear, an AI
assistant may invent fields, create inconsistent endpoints, skip
validation, or connect services in unsafe ways. Your goal is to
remove guesswork before implementation begins.

Learning Objectives
Bytheendofthischapter,you
Whyitmatters
willbeableto
Explainwhydatadesignshould Youpreventhiddenassumptionsfrom
happenbeforecoding. becomingbrokentablesandendpoints.
Youdefinewhatthesystemmust
Modelcoreentitiesandrelationships.
rememberandhowitemsconnect.
Planabeginner-friendlydatabase Yougiveimplementationastable
schema. storagestructure.
WriteAPIendpointspecificationsand Youmakerequestsandresponses
contracts. predictablebeforecodeisgenerated.
Definevalidation,integration,and Youprotectreliabilityasthesystem
versioningrules. growsandchanges.
Beginner Mindset:Data design answers this question: what
must your software remember, protect, validate, and return
consistently?
Figure9.1:DataandAPIdesignconnectsuserneedstoimplementation
andtests.
9.1 Why DataDesign Matters Early
Data design matters early because most software features are built
around information. A task app stores users, projects, tasks,
comments, due dates, and permissions. A support system stores
customers, tickets, messages, labels, and status changes.

If you start coding before you understand the data, the AI assistant
may create tables and fields based on convenience instead of
meaning. That can produce duplicated data, missing relationships,
weak validation, and endpoints that are difficult to test.
Good data design gives every later step a foundation. Requirements
tell you what the software must do. Data design tells you what the
software must remember. API design tells you how other parts of the
system will read and change that information.
Weakstart Spec-drivenstart
"Buildprojectmanagement "Storeusers,projects,tasks,roles,
features." assignments,andstatuschanges."
AIinventsfieldswhilecoding. Youdefinefieldsbeforeimplementation.
Validationisaddedonlyafterbugs Validationrulesarewrittenbefore
appear. endpointsarebuilt.
APIresponsesvaryfromfeatureto
Everyresponsefollowsaclearcontract.
feature.
9.2 Entity Modeling
An entity is something your system needs to remember. In a task
management application, common entities include User, Project,
Task, Comment, Team, and Notification.
Entity modeling is not the same as database coding. At this stage,
you are identifying the important objects, their key details, and how
they relate to one another. You are still designing meaning before
implementation.
Question Exampleanswer
Whatobjectsmustthesystem
Users,projects,tasks,andcomments.
remember?
Ataskhasatitle,status,duedate,and
Whatdetailsdescribeeachobject?
project.
Aprojectcontainsmanytasks.Auser
Howdoobjectsrelate?
canownmanyprojects.
Whatrulemustalwaysbetrue? Ataskcannotexistwithoutaproject.
Prompt Box 9.1 - Ask AI to identify entities
Usingtherequirementsbelow,listthemainentitiesthissystemmuststore.
Foreachentity,identifyimportantfields,relationships,andbusinessrules.Do

Question Exampleanswer
notcreatedatabasetablesyet.Focusonlyonmeaningandrelationships.
Figure9.2:AsimpleUser,Project,andTaskentitymodel.
9.3 Database SchemaPlanning
A database schema turns your entity model into a storage plan. It
defines tables, fields, data types, relationships, unique constraints,
indexes, and deletion rules.

For a beginner, the safest schema is simple, explicit, and easy to
test. Do not design clever storage that you cannot explain. Each
table should represent one clear idea. Each relationship should
support a real requirement.
Schemaitem	Whatitmeans	Example
Auniqueidentifierforone
Primarykey users.id
row.
Afieldthatpointstoanother
Foreignkey tasks.project_id
table.
Arulethatprevents users.emailmustbe
Uniqueconstraint
duplicates. unique
Ahelperthatmakescommon
Index indextasksbyproject_id
lookupsfaster.
Acontrolledvaluethatshows
Statusfield todo,doing,done
state.
Beginner Rule:A schema should make invalid data harder to
store. Do not rely only on code to protect important rules.
9.4 API Endpoint Specification
An API endpoint is a named way for another part of the system to
ask for data or request an action. In a web application, the frontend
may call an endpoint to create a task, list projects, update a status,
or delete a comment.
An endpoint specification should make the behavior clear before
code is written. It should explain the method, path, purpose,
required permission, request body, response body, validation rules,
and possible errors.
Endpointpart Example
Methodandpath POST/api/v1/projects/{project_id}/tasks
Purpose Createanewtaskinsideaproject.
Permission Onlyprojectmemberswithwriteaccess.
Requestbody title,description,assignee_id,due_date
Successresponse 201Createdwiththenewtaskobject.
400validationerror,403forbidden,404projectnot
Errorresponses
found.

9.5 Request and Response Contracts
A contract defines the exact shape of data that enters and leaves an
endpoint. Contracts are important because they let the frontend,
backend, tests, and AI assistant agree on the same structure.
A request contract explains what the client must send. A response
contract explains what the API will return. A good contract also
explains what happens when the request is invalid.
Figure9.3:AnAPIcontractdefineswhatenters,whatisvalidated,and
whatreturns.
Example Request Contract
The following request creates a task. Keep examples like this inside
your technical specification so the AI assistant does not invent a
different shape later.
POST/api/v1/projects/{project_id}/tasks
Content-Type:application/json
{
"title":"Preparelaunchchecklist",
"description":"Confirmreleasetasksbeforedeployment.",
"assignee_id":"user_102",
"due_date":"2026-07-15"
}

Example Success Response Contract
201Created
{
"id":"task_501",
"project_id":"project_200",
"title":"Preparelaunchchecklist",
"status":"todo",
"assignee_id":"user_102",
"due_date":"2026-07-15",
"created_at":"2026-06-26T10:15:00Z"
}
Example Error Response Contract
400BadRequest
{
"error":{
"code":"VALIDATION_ERROR",
"message":"Thetasktitleisrequired.",
"field":"title"
}
}
9.6 Validation Rules
Validation rules protect the system from bad or incomplete data.
They also make the API predictable. Without validation, invalid
information can enter the database and create bugs that are hard to
trace later.
Validation should happen before data is saved. It should check
required fields, length limits, allowed values, ownership rules, date
rules, and permission rules.
Ruletype Examplerule
Requiredfield Atasktitleisrequired.
Lengthrule Atasktitlemustbe3to120characters.
Allowedvalue Statusmustbetodo,doing,blocked,ordone.
Relationshiprule Theassigneemustbelongtotheproject.
Permissionrule Onlymemberswithwriteaccesscancreatetasks.

Ruletype Examplerule
Daterule Duedatecannotbebeforetheprojectstartdate.
Prompt Box 9.2 - Ask AI to review validation coverage
ReviewtheAPIendpointbelow.Listallvalidationrulesthatshouldexist
beforedataissaved.Groupthemintorequiredfields,allowedvalues,
relationshiprules,permissionrules,anderrorresponses.Donotwritecode
yet.
9.7 External Service Integration
An integration connects your system to something outside it.
Examples include payment services, email providers, calendar
systems, identity providers, storage services, analytics tools, and AI
model APIs.
You should specify integrations before implementation because
outside services can fail, change, rate-limit requests, or return
unexpected responses. Your specification should explain whatyou
send, what you receive, what you store, and what happens when
the external service fails.
Integrationspecitem Whatyoudefine
Provider Theexternalservicebeingused.
Purpose Whythesystemneedstheservice.
Datasent Theexactfieldssentoutofyoursystem.
Datareceived Theexactfieldsreturnedtoyoursystem.
Failurebehavior Retry,showmessage,logerror,orqueueforlater.
Howsecrets,tokens,andsensitivedataare
Securityrule
protected.
Security Reminder:Never design an integration that exposes
secrets to the frontend or stores tokens in plain text.
9.8 Versioning and Compatibility
Versioning protects your API when the system changes. If other
parts of the application depend on an endpoint, changing its
response shape without warning can break existing features.
A simple beginner-friendly approach is to place a version in the API
path, such as /api/v1/tasks. You can then introduce /api/v2/tasks
later if the contract changes in a breaking way.

| Changetype | Usuallysafe? | Example |
| --- | --- | --- |
| Addoptionalfield | Usuallysafe | Addprioritytoataskresponse. |
| Renamefield | Breakingchange | Changedue_datetodeadline. Removeassignee_idfromtask Removefield Breakingchange response. Returndue_dateasanobjectinstead Changedatatype Breakingchange ofastring. |
| Addnewendpoint | Usuallysafe | AddGET/api/v1/tasks/{id}/history. Prompt Box 9.3 - Ask AI to check compatibility risk ReviewthisAPIchangeandtellmewhetheritisbackwardcompatible. Identifyanyfrontend,test,documentation,orintegrationupdatesthatmay beneeded.Ifitisabreakingchange,suggestasaferversioningstrategy. 9.9 Practical Example: Designing aUser, Project, and Task API Now you will combine the chapter into one practical example. Imagine you are building a task management application. Users can create projects, add tasks to projects, assign tasks to users, and update task status. Step 1: Define the Entities |
| Entity | Purpose | Keyfields Representsapersonusing id,name,email,role, User thesystem. created_at id,owner_id,name,status, Project Groupstasksaroundagoal. created_at Representsworkinsidea id,project_id,title,status, Task project. assignee_id,due_date Step 2: Draft the Database Schema users -id:string,primarykey -name:string,required -email:string,required,unique -role:string,required -created_at:datetime,required |

projects
-id:string,primarykey
-owner_id:string,foreignkeytousers.id
-name:string,required
-status:string,required
-created_at:datetime,required
tasks
-id:string,primarykey
-project_id:string,foreignkeytoprojects.id
-title:string,required
-status:string,required
-assignee_id:string,optionalforeignkeytousers.id
-due_date:date,optional
-created_at:datetime,required
Step 3: Specify the Endpoints
| Endpoint | Purpose | Mainvalidation Listprojectsvisibleto Usermustbe GET/api/v1/projects thecurrentuser. authenticated. Nameisrequiredand |
| --- | --- | --- |
| POST/api/v1/projects | Createanewproject. theowner. GET Usermustbea Listtasksinaproject. /api/v1/projects/{id}/tasks projectmember. Titleisrequiredand POST Createataskina assigneemust /api/v1/projects/{id}/tasks project. belongtoproject. PATCH Statusmustbean Updatetaskstatus. /api/v1/tasks/{id}/status allowedvalue. | mustbeuniquefor |

Step 4: Write the Contract Rules
Rule Specification
Everysuccessresponsereturnsapredictableobject
Responseconsistency
shape.
Everyerrorresponseusescode,message,and
Errorconsistency
optionalfield.
Everyprojectandtaskendpointchecksuseraccess
Permissioncheck
beforereturningdata.
Validationtiming Validationhappensbeforesavingdata.
Importantcreateandstatus-changeeventsshouldbe
Audittrail
recorded.
Technical Specification Template: Data, API, and
Integration
Use this template when you need to describe data and API behavior
before implementation.
DataandAPISpecificationTemplate
1.FeatureName:
[Nameofthefeatureormodule]
2.Entities:
-[Entityname]:[Purpose]
-Keyfields:[Fieldlist]
-Relationships:[Howitconnectstootherentities]
3.DatabaseRules:
-Primarykeys:
-Foreignkeys:
-Uniqueconstraints:
-Requiredindexes:
-Deletionbehavior:
4.APIEndpoints:
-Methodandpath:
-Purpose:
-Permission:
-Requestbody:
-Successresponse:
-Errorresponses:

5.ValidationRules:
-Requiredfields:
-Allowedvalues:
-Relationshipchecks:
-Permissionchecks:
6.IntegrationRules:
-Externalservice:
-Datasent:
-Datareceived:
-Failurebehavior:
-Securityrequirements:
7.VersioningRules:
-Currentversion:
-Breaking-changepolicy:
-Compatibilitynotes:

Chapter Checklist
Che
Question
ck
[] Haveyouidentifiedthecoreentitiesthesystemmustremember?
[] Haveyoudefinedrelationshipsbetweenentitiesclearly?
[] Haveyouplanneddatabasefields,keys,constraints,andindexes?
[] Haveyouwrittenendpointspecsbeforeimplementation?
[] Haveyoudefinedrequestandresponsecontracts?
[] Haveyouwrittenvalidationrulesbeforecodeisgenerated?
Haveyoudocumentedexternalintegrationbehaviorandfailure
[]
handling?
[] HaveyouconsideredversioningbeforechangingAPIcontracts?
Key Takeaways
Data design tells you what your software must remember and
protect.
Entity modeling helps you define meaning before database
implementation.
Database schema planning should include fields,
relationships, constraints, and indexes.
API endpoint specifications make behavior clear before code
is generated.
Request and response contracts keep frontend, backend,
tests, and AI agents aligned.
Validation rules protect your system from bad data before it
reaches the database.
Versioning helps you change APIs without breaking existing
behavior.

Review Questions
1.Why should you design data before asking AI to generate
implementation code?
2.What is the difference between an entity model and a
database schema?
3.What should an API endpoint specification include?
4.Why are request and response contracts important?
5.What makes an API change a breaking change?
Practical Exercises
Exercise Whatyoushouldproduce
Chooseasimpleappideaandlistitsfivemostimportant
Exercise1
entities.
Exercise2 Createatableofrelationshipsbetweenthoseentities.
Exercise3 WritethreeAPIendpointspecificationsforonefeature.
Writerequest,successresponse,anderrorresponsecontracts
Exercise4
foroneendpoint.
Listvalidationrulesandversioningrisksfortheendpointyou
Exercise5
designed.
In Summary
Data models and API contracts turn your architecture into something
the system can actually build. They tell you what must be stored,
how information connects, how clients request changes, and how
the system should respond.
When you specify entities, schemas, endpoints, validation rules,
integrations, and versioning before implementation, you give your AI
assistant a clear path to follow. In the next chapter, you will learn
how to connect these requirements, decisions, tasks, tests, and code
through requirements traceability.

Chapter 10
Requirements Traceability
from Spec to Code
_____________________________________
_________________________________
In the previous chapters, you learned how to move from product
requirements to technical specifications, architecture decisions, data
models, and API contracts. This chapter shows you how to connect
those pieces so nothing gets lost. You will build a traceability chain
that follows each requirement from its original statement to the
design decision, task, test, and code that satisfies it.
This matters because AI-generated software can look complete while
quietly missing important behavior. Traceability gives you a simple
way to check whether every important requirement has actually
been designed, planned, tested, and implemented.
LearningObjectives
Bytheendofthischapter,you
Whyitmatters
willbeableto
Explainrequirementstraceabilityin Youneedaclearwaytoconnect
simpleterms. businessneedstoworkingsoftware.
YoucancontrolAI-assisted
Linkrequirementstodesigndecisions,
developmentinsteadoftrustingvague
tasks,tests,andcode.
output.
CreateaRequirementsTraceability Youcanseewhatiscomplete,
Matrix. missing,orunclear.
Usetraceabilitytofindmissing Youcancatchgapsbeforereviewor
features. deployment.

Figure10.1:Atraceabilitychainconnectsrequirementstothe
workthatprovesandimplementsthem.
10.1WhatRequirementsTraceabilityMeans
Requirements traceability means you can follow a requirement
through the whole engineering process. You do not leave the
requirement as a sentence in a document. You connect it to the
design decision that supports it, the task that implements it, the test
that verifies it, and the code location where it lives.
Think of traceability as a chain of evidence. When you say, “The
system allows users to sign in securely,” you should be able to point
to the technical design, the work item, the test case, and the code
that make that statement true.
Note:Beginnermentalmodel
Arequirementisapromise.Traceabilityishowyouprovethatthepromisedid
notdisappearwhilethesoftwarewasbeingbuilt.
Traceability
Simplequestionitanswers
item
Requirement Whatmustthesystemdo?
Designdecision Howwillthesystemsupportit?
Task Whatworkmustbecompleted?
Test Howwillyouverifyit?
Codereference Whereisitimplemented?
Reviewstatus Isthechaincompleteandapproved?

10.2WhyTraceabilityMattersinAI-Generated
Software
AI agents can generate large amounts of code quickly. That speed is
useful, but it can also hide mistakes. An agent may implement a
feature partly, misunderstand a rule, skip an edge case, or create a
different solution from the one your specification required.
Traceability helps you slow the project down at the right points. You
are not slowing down the whole build. You are creating checkpoints
that force the work to stay aligned with the original intent.
Rule:AIcontrolpoint
NeveraskanAIagentto“justbuildthefeature”whentherequirementhasnot
beenlinkedtoataskandatest.Atasktellstheagentwhattodo.Atesttells
youwhethertheresultisacceptable.
AIrisk Traceabilityresponse
Theagentbuildsarelatedbut Checkwhetherthetasklinksbacktothe
wrongfeature. exactrequirement.
Checkwhethertheacceptancecriteria
Theagentskipsanedgecase.
producedatestcase.
Thecodepassesbasictestsbut Checkwhetherbusinessrulesappearinthe
breaksarule. testlinks.
Theimplementationchangesthe Checkwhetherthecodestillfollowsthe
architecturesilently. designdecision.
10.3LinkingRequirementstoDesign
Decisions
A requirement explains what the system must achieve. A design
decision explains how you will support that requirement. Without
this link, an AI agent may choose a convenient implementation that
does not match your intended architecture.
Use this simple pattern:
Requirement ID: REQ-AUTH-001
Requirement: A registered user must be able to sign in with an email and password.
Design Decision ID: DD-AUTH-001
Decision: Use server-side authentication with hashed passwords and a short-lived
session token.

The requirement says what must happen. The design decision tells
the implementation how to approach it. You are not writing every
line of code yet. You are removing dangerous freedom before the
agent starts building.
Checkpoint:Practicalcheck
Ifarequirementhasnodesigndecision,ask:“Canthisrequirementbe
implementedinmultipleways?”Iftheanswerisyes,documentthechosen
directionbeforemovingtotasks.
10.4LinkingDesignDecisionstoTasks
A task turns a design decision into a small piece of work. This is
where you make the work agent-friendly. A good task should be
narrow enough that an AI assistant can complete it without guessing
across the whole project.
Weak task Better task
Create a POST /auth/login endpoint that accepts email and
Build login. password, validates input, checks the password hash, and
returns a session token on success.
Return a safe invalid-credentials error without revealing
Add errors.
whether the email exists.
Make sessions work. Create session expiration logic and reject expired tokens.
The better tasks are still short, but they are specific. They link back
to the design decision and reduce the chance that the agent will
invent behavior outside the spec.
10.5LinkingTaskstoTests
Every task should have at least one test that proves it was
completed correctly. This is one of the strongest habits in spec-
driven AI engineering: you do not only ask the agent to build; you
ask it to build something that can be checked.
| Task ID | Task summary TASK-AUTH- TEST-AUTH-01: missing email or Validate login request body. 01 password returns 400. | Linked test |
| --- | --- | --- |
| TASK-AUTH- | Check password hash and create | TEST-AUTH-02: valid credentials |
| 02 | session token. TASK-AUTH- TEST-AUTH-03: invalid Return safe login failure. 03 credentials return generic error. | return token. |

TASK-AUTH- TEST-AUTH-04: expired token
Reject expired session token.
04 returns unauthorized.
Warning:Whythismatters
Ataskwithoutatestmaystillproducecode,butyouhavenoclearproofthat
thecodesatisfiestherequirement.
10.6LinkingTeststoCode
After the test exists, you link it to the code that makes the test pass.
This does not need to be complicated. You can use file names,
function names, module names, or short code references. The goal
is to make the implementation easy to locate later.
Test ID: TEST-AUTH-02
Test: Valid credentials return a session token.
Code link: auth/login.py -> login_user()
Supporting code: auth/passwords.py -> verify_password_hash()
Status: Passing
This link becomes useful during review. If a test fails, you know
where to inspect first. If a requirement changes, you know which
code area is affected.
10.7CreatingaRequirementsTraceability
Matrix
A Requirements Traceability Matrix, often called an RTM, is a table
that shows the complete chain. It does not need special software.
You can create it as a normal table in your specification document.
For a beginner, the best version is simple and readable.

Figure10.2:ARequirementsTraceabilityMatrixshowseach
requirementandtheworkconnectedtoit.
RequirementsTraceabilityMatrixTemplate
Req Design
| Requirement | Task ID | Test ID | Code link ID ID Draft / | Status |
| --- | --- | --- | --- | --- |
| REQ- | Write the requirement in | TASK- | TEST- |  |
| DD-___ | file/function | Ready / |  |  |
| ___ | one clear sentence. Done Draft / | ___ | ___ |  |
| REQ- | Add one row for each | TASK- | TEST- |  |
| DD-___ | file/function | Ready / |  |  |
| ___ | important requirement. Done Keep the matrix close to the requirement document or technical specification. If it is hidden in another tool, you are less likely to maintain it. Since this book is self-contained, you can copy the template directly into your own project document. Prompt:PromptBox:Generateafirsttraceabilitymatrix Usethispromptafteryouhavewrittenyourrequirementsandtechnical specification: “Usingtherequirementsandtechnicalspecificationbelow,createa RequirementsTraceabilityMatrix.Foreachrequirement,includearequirement ID,linkeddesigndecision,suggestedengineeringtask,suggestedtestcase, likelycodearea,andstatus.Donotinventfeaturesoutsidetheprovided specification.” | ___ | ___ |  |

10.8UsingTraceabilitytoFindMissing
Features
The matrix becomes a quality tool when you look for gaps. A gap is
any missing link. You may find a requirement with no test, a task
with no requirement, or code that does not connect back to any
approved feature.
Figure10.3:Blanklinksinthematrixhelpyoufindmissingor
unclearworkbeforethebuildistrusted.
| Gap found | What it may mean | What you should do |
| --- | --- | --- |
| Requirement has no | The implementation | Write or confirm the design |
| design link. | approach is unclear. The work has not been Create a small agent-friendly Design has no task. planned. task. | decision. |
| Task has no test. | You cannot verify completion. The implementation may be Add file/function reference after Test has no code link. missing or hard to locate. implementation. | Write at least one test case. |
| Code has no | The agent may have added | Remove it or document and |
| requirement. | unapproved behavior. 10.9PracticalExample:TrackingaLogin FeaturefromRequirementtoCode Now you will trace a small login feature. The goal is not to build a full authentication system in this chapter. The goal is to see how one feature moves from requirement to code without losing meaning. | approve it. |

Step1:Startwiththerequirement
REQ-AUTH-001
A registered user must be able to sign in using an email address and password.
Step2:Linkthedesigndecision
DD-AUTH-001
Use server-side email/password authentication.
Passwords must be stored as hashes.
A successful login returns a short-lived session token.
Step3:Createimplementationtasks
TaskID Task
TASK-AUTH- Createtheloginrequestcontractwithemailandpassword
001 fields.
TASK-AUTH-
Validateemailandpasswordinputbeforecheckingcredentials.
002
TASK-AUTH-
Verifythepasswordhashandcreateasessiontoken.
003
TASK-AUTH-
Returnasafeerrormessageforinvalidcredentials.
004
Step4:Createtests beforetrustingthe code
Test ID	Test case	Expected result
TEST-AUTH-
Missing password in request. Return 400 with validation error.
001
TEST-AUTH-
Valid email and password. Return 200 with session token.
002
TEST-AUTH-
Wrong password. Return 401 with generic error.
003

Step5:Linkthecode
# auth/login.py
def login_user(email, password):
if not email or not password:
return {"error": "email and password are required"}, 400
user = find_user_by_email(email)
if user is None or not verify_password_hash(password, user.password_hash):
return {"error": "invalid email or password"}, 401
token = create_session_token(user.id)
return {"token": token}, 200
This code is intentionally small so you can focus on the traceability
chain. In a production project, you would also include rate limiting,
audit logging, session expiration, secure cookie settings, and
stronger security review. Those additions should appear as separate
requirements, tasks, and tests rather than hidden assumptions.
Step6:Completethetraceabilityrow
Design
Req ID	Task IDs	Test IDs	Code link	Status
ID
| REQ- | DD- | Ready |
| --- | --- | --- |
| TASK-AUTH- | TEST-AUTH- | auth/login.py -> |
| AUTH- | AUTH- | for |
| 001 to 004 | 001 to 003 | login_user() |
| 001 | 001 | review Checkpoint:Reviewquestionfortheexample Whatismissingfromtheloginfeature?Agoodanswerissessionexpiration.If sessionexpirationmatters,itshouldbecomeanewrequirement,notahidden assumptioninsidethesamerow. TraceabilityReviewChecklist • Every important requirement has a unique ID. • Every requirement links to at least one design decision or implementation approach. • Every design decision links to one or more small tasks. • Every task links to at least one test case. • Every implemented feature has a code link. |

• Any code without a requirement has been removed, documented,
or approved.
• Any blank matrix cell has been reviewed before moving forward.
KeyTakeaways
• Traceability turns requirements into a chain of evidence.
• AI-generated software needs traceability because fast output can
hide missing behavior.
• A Requirements Traceability Matrix can be simple and still
powerful.
• Blank links in the matrix help you find missing design, tasks, tests,
or code.
• You should treat code with no requirement as suspicious until it is
approved.
ReviewQuestions
1. In your own words, what does requirements traceability mean?
2. Why is traceability especially useful when AI agents generate
code?
3. What is the difference between a requirement and a design
decision?
4. Why should every task have a linked test?
5. What should you do when you find code that does not link back to
an approved requirement?
PracticalExercises
Exercise Whattodo
1.Traceone Chooseonerequirementfromaprojectideaandlinkitto
requirement adesigndecision,task,test,andcodelocation.
Createasmalltraceabilitymatrixwithfiverows.Leave
2.Findmissing
twocellsblank,thenexplainwhatriskeachblankcell
links
creates.
3.ImproveanAI WriteapromptthatasksanAIassistanttogenerate
prompt implementationtasksonlyfromapprovedrequirements.

InSummary
Requirements traceability helps you keep control of the build.
Instead of hoping that your AI agent understood the requirement,
you create a visible chain from requirement to design decision, task,
test, and code. This makes missing features easier to find, reviews
easier to perform, and changes safer to manage.
In the next chapter, you will move deeper into working with AI
coding agents. You will learn what they can do, what they should
not be trusted to do without guidance, and how to use your
specifications as guardrails for agent-driven work.

Part III
AI Agents, Prompts, and
Controlled Spec-to-Code
Workflows

Chapter 11
Working with AI Coding
Agents
_______________________________________________________
_______________
In the previous chapter, you learned how traceability connects a
requirement to design decisions, tasks, tests, and code. This chapter
shows you how to bring AI coding agents into that chain without
losing control of the project.
You will learn what an AI coding agent can do, where it can fail, how
it reads context, and how to give it rules that keep its work aligned
with your specifications. The goal is not to let the agent “take over.”
The goal is to make the agent useful, narrow, reviewable, and safe.
LearningObjectives
Bytheendofthischapter,youwill
Whyitmatters
beableto...
Explainthedifferencebetweenachat Youwillknowwhichtooltousefor
assistantandanAIcodingagent. thinking,drafting,editing,and
implementation.
Giveanagentusefulprojectcontext. Bettercontextreducesguessingand
improvesthequalityofgenerated
code.
Writeclearinstructionsthatlimitwhat Thishelpsyoupreventsurprise
theagentmaychange. edits,brokenfiles,andunapproved
scopeexpansion.
Usespecificationsasguardrailsforagent Theagentwillfollowyour
work. requirementsinsteadofinventing
behavior.
Buildareusableagentinstructionfile. Youwillhaveastandardstarting
pointforeverycontrolledAI
developmenttask.

Figure11.1:Achatassistanthelpsyouthinkanddraft;a
codingagentcanchangeprojectfiles,soitneedsstronger
guardrails.
11.1WhatAICodingAgentsCanandCannot
Do
An AI coding agent is a software assistant that can work across a
project, not just inside a single answer. Depending on the tool, it
may read files, suggest edits, create code, update tests, run
commands, and summarize what changed.
This sounds powerful, but you should treat the agent as a fast junior
collaborator, not as an independent engineer. It can move quickly,
but it does not automatically understand your business rules, hidden
constraints, long-term architecture, or quality standard unless you
give those things clearly.
Agentsaregoodat... Agentsareweakat...
Generatingboilerplatecodefromclear Readingyourmindwhenrequirements
instructions. arevague.
Followingsmall,well-scoped Knowingwhichtrade-offyourbusiness
implementationtasks. prefers.
Creatingtestsfromacceptancecriteria. Detectingeverysecurityor
performanceriskwithoutguidance.
Explainingcodeandproposing Understandingundocumentedlegacy
refactors. behavior.

Agentsaregoodat... Agentsareweakat...
Speedinguprepetitiveedits. Protectingyourarchitectureifyougive
itnoboundaries.
NOTE:Beginnerrule
Donotaskanagentto“buildthewholeapp.”Askittocompleteonespecific
taskthatislinkedtoarequirement,adesigndecision,andatestexpectation.
11.2Chat-BasedAssistantsvsCodingAgents
A chat-based assistant is best when you want explanation, planning,
comparison, review, or help writing a document. A coding agent is
best when you want controlled changes inside a project workspace.
You can use both, but you should not confuse their roles. First, use
chat to think through the problem. Then use the agent to perform a
narrow, approved implementation task.
Useachatassistant Useacodingagent
Situation
when... when...
| Planning | Youneedtounderstand options,risks,orstructure. andneedchangesapplied. | Youalreadyhaveatask |
| --- | --- | --- |
| Specificationwork | Youaredrafting | Youwanttheagentto requirements,PRDs,or updatelocalspecfilesfrom technicalspecs. approvedtext. |
| Implementation | Youwantpseudocodeoran explanationbeforebuilding. madeinapprovedfiles. | Youwantcodechanges |
| Review | Youwantanindependent critiqueofadesignorcode checksandreport snippet. mismatches. 11.3HowAgentsReadContext An agent does not understand your project the way you do. It builds a working picture from the context you provide: instructions, specifications, task files, existing code, tests, and review notes. If that context is incomplete, the agent fills gaps by guessing. Good context should answer five questions: What is this project? What task should be done now? Which files matter? What must not change? How will you know the work is correct? | Youwanttheagenttorun |

Figure11.2:Theagentcontextstackshouldmovefromstable
projectrulestotheexacttaskyouwantcompletednow.
NOTE:Contextisnotvolume
Givinganagentmoretextisnotalwaysbetter.Giveittherightdocuments,the
exacttask,therelevantfiles,andtherulesthatlimitthework.
11.4GivingAgentstheRightInstructions
A weak instruction tells the agent what you want in broad language.
A strong instruction tells the agent the task, the boundary, the
source of truth, the expected output, and the review standard.
Use this pattern when you assign work:

Task: [State the exact task]
Source of truth: [Requirement ID, spec section, or task file]
Allowed files: [List files or folders the agent may inspect or edit]
Do not change: [List files, behavior, or design choices that are off-limits]
Expected output: [Code, tests, documentation, or review notes]
Completion check: [How the work will be verified]
Weakinstruction Strongerinstruction
Addauthentication. ImplementREQ-AUTH-001only:email-and-
passwordlogin.Usetheexistingusermodel.Do
notaddsociallogin.Addvalidationandtests.
Fixthedashboard. FixTASK-DASH-004:theprojectcountshould
excludearchivedprojects.Updatetheservice
functionanditsunittestonly.
ImprovetheAPI. UpdatethePOST/projectscontracttorequire
nameandownerId.Donotchangeresponse
fields.Addvalidationerrorsformissingfields.
11.5PreventingAgentsfromMaking
UnapprovedChanges
An agent may try to be helpful by changing more than you asked.
That can create hidden risk. Your job is to reduce the agent’s
freedom until the task is small enough to review clearly.
Use a simple approval loop: first ask the agent to explain the
planned change; then approve or correct the plan; then allow
implementation; then review the result against the requirement and
tests.

Figure11.3:Acontrolledagentworkflowkeepseverychange
small,approved,testable,andreviewable.
Controlrule Howyouapplyit
Onetaskatatime Donotcombinelogin,registration,passwordreset,
androlesinonerequest.
Approvedfilesonly Telltheagentwhichfoldersorfilesitmayedit.
Planbeforeedit Askforashortplanbeforeallowingimplementation.
Nosilentassumptions Requiretheagenttoreportunclearrequirements
beforecoding.
Testsrequired Everybehaviorchangeshouldincludeorupdatea
test.
Reviewbeforenexttask Donotmovetothenexttaskuntilyouhavechecked
thecurrentresult.

11.6UsingSpecsasGuardrails
A specification is a guardrail because it limits what the agent is
allowed to build. Without a spec, the agent may choose its own
behavior. With a spec, the agent must follow an approved source of
truth.
When you assign a task, point the agent to the exact requirement,
technical decision, API contract, or acceptance criterion that controls
the work. This helps you avoid features that sound good but were
never approved.
Specartifact Howitguardstheagent
Requirement Definesthebehaviorthatmustexist.
Acceptancecriteria Defineshowyouknowthebehavioriscorrect.
Technicalspecification Definesthesystemdesigntheagentmustfollow.
APIcontract Definesrequestfields,responsefields,anderror
rules.
Traceabilitymatrix Showswhetherthetask,test,andcodearelinked
totherequirement.
11.7DefiningAgentWorkflowRules
Workflow rules tell the agent how to behave before, during, and
after implementation. These rules should be simple enough to reuse
in every project.
For beginner-friendly control, use three stages: prepare, implement,
and report. The agent should not skip any stage.
| Stage | Agentmustdothis | Youcheckthis |
| --- | --- | --- |
| Prepare | Restatethetask,listrelevantfiles, andidentifyassumptions. thescopeandisnot expandingit. | Theagentunderstands |
| Implement | Changeonlyapprovedfilesand keepthesolutionsmall. specanddoesnotcreate surprisebehavior. | Thecodematchesthe |
| Report | Summarizechanges,tests,risks, andunresolvedquestions. withouthuntingthrough everyfileblindly. | Youcanreviewthework |

NOTE:Practicalrule
Ifanagentcannotexplainwhatitchanged,whyitchangedit,andhowtoverify
it,thetaskisnotcomplete.
11.8BuildinganAgentInstructionFile
An agent instruction file is a reusable set of rules you keep inside the
project workspace. It tells the agent how to behave every time it
works on the project.
Because this book is fully self-contained, you do not need an
external repository to use this idea. You can create a local file such
as /docs/agent-instructions.md and copy the following template into
it.
# Agent Instruction File
## Project rule
You are assisting with a spec-driven AI engineering project. Do not invent features.
Follow the approved requirements, specifications, tasks, and tests.
## Source-of-truth order
1. Engineering Intent Document
2. Product Requirements Document
3. Technical Specification
4. API and Database Specs
5. Current Task File
6. Existing Code and Tests
## Workflow rule
Before making changes, restate the task, list the files you plan to inspect, and identify
assumptions. Wait for approval if the task is unclear.
## Change rule
Change only files needed for the approved task. Do not refactor unrelated code. Do not
rename public interfaces unless the task explicitly requires it.
## Testing rule
For behavior changes, add or update tests. If tests cannot be run, explain what should
be tested manually.

## Reporting rule
After the work, report: files changed, reason for each change, tests added or updated,
risks, and unanswered questions.
Instructionsection Purpose
Projectrule Setstheoverallbehaviorexpectation.
Source-of-truthorder Tellstheagentwhichdocumentwinswhen
informationconflicts.
Workflowrule Forcesplanningbeforeediting.
Changerule Stopsunnecessaryeditsandscopeexpansion.
Testingrule Connectsimplementationtoqualitycontrol.
Reportingrule Makesrevieweasieraftertheagentfinishes.
PracticalMiniWorkflow:AssigningOneSafe
AgentTask
Use the following example when you want the agent to implement a
small login validation rule from Chapter 10’s traceability example.
Task: Implement REQ-AUTH-001 validation for login.
Source of truth: Requirements section REQ-AUTH-001 and API error rules.
Allowed files: auth-service, login-controller, login-validation-test.
Do not change: user registration, password reset, database schema, or user roles.
Expected output: validation logic and tests for missing email and missing password.
Completion check: tests pass and error responses match the API contract.
Notice how this task does not say “build authentication.” It says
exactly which part of authentication to work on. This is the
difference between uncontrolled AI coding and spec-driven agent
work.

ChapterChecklist
Beforeyouletanagentwork,confirmthat... Done
Thetaskislinkedtoarequirement,specification,ortraceabilityrow. []
Thetaskissmallenoughtoreviewinonesitting. []
Theagentknowswhichfilesitmaychange. []
Theagentknowswhatnottochange. []
Theagentmustexplainitsplanbeforeimplementation. []
Theexpectedtestsormanualchecksareclear. []
Theagentmustsummarizechanges,risks,andopenquestions. []
KeyTakeaways
AI coding agents are useful, but they need boundaries
because they can make project-wide changes.
A chat assistant helps you think; a coding agent helps you
apply controlled changes.
Context quality controls output quality. Give the agent the
right specs, task, files, constraints, and review standard.
Specs act as guardrails by telling the agent what is approved
and what is not approved.
ReviewQuestions
1.Why should you treat an AI coding agent differently from a
chat-based assistant?
2.What five questions should good agent context answer?
3.Why is “plan before edit” an important rule?
4.How does a specification act as a guardrail?
5.What should an agent report after completing a task?
PracticalExercises
Exercise1:Rewriteaweakinstruction
Take this weak instruction: “Improve the project dashboard.” Rewrite
it using task, source of truth, allowed files, do-not-change rules,

expected output, and completion check.
Exercise2:Createyourfirstagentinstruction
file
Using the template in this chapter, create a local instruction file for a
simple task management application. Keep it under one page.
Exercise3:Buildasafetaskrequest
Choose one requirement from Chapter 5 or Chapter 6 and write an
agent task request that is narrow, testable, and reviewable.
InSummary
AI coding agents can speed up implementation, but they must work
inside a controlled process. You should not give an agent a vague
request and hope it builds the right thing. You should give it a clear
task, approved context, specific boundaries, and a review standard.
In this chapter, you learned how agents differ from chat assistants,
how agents read context, how to prevent unapproved changes, and
how to write a reusable agent instruction file.

Chapter 12
Context Engineering for AI
Development
_____________________________________
_________________________________
In Chapter 11, you learned that an AI coding agent is only useful
when you control its instructions, permissions, and workflow. In this
chapter, you go one level deeper: you learn how to control the
context the agent receives. Context is the background information,
project structure, requirements, technical decisions, and task details
that guide the agent before it writes or changes code.
A beginner mistake is to give an agent everything at once or almost
nothing at all. Both approaches cause problems. Too little context
makes the agent guess. Too much context makes the agent
confused. Your goal is to give the agent the right information, in the
right order, for the current task.
By the end of this chapter, you will be able to build a compact
project context pack that helps an AI agent produce focused,
aligned, and reviewable work without depending on any external
repository or companion files.

LearningObjectives
Bytheendofthischapter,youwillbe
Whyitmatters
ableto...
ExplainwhycontextcontrolsAIoutput Youwillknowwhybetterpromptsfail
quality. whentheprojectbackgroundisweak.
Createausefulprojectbackgroundfor Youwillreduceguessingbeforethe
anagent. agentbeginswork.
Supplyrequirements,specs,filemaps, Youwillhelptheagentfollowyour
andcodingstandardsclearly. actualdesigninsteadofinventingone.
Youwillavoidconfusingtheagent
Keepcontextsmallbutuseful.
withunnecessaryinformation.
Updatecontextsafelyastheproject Youwillpreventoldassumptionsfrom
changes. causingnewdefects.
Youwillhaveareusabletemplateyou
Buildacompleteprojectcontextpack.
canapplyinlaterchapters.
12.1WhyContextControlsAIOutputQuality
When you ask an AI agent to build or change software, the agent
does not automatically understand your whole project. It works from
the information you provide, the files it can inspect, and the
instructions you give it. That information becomes its working
context.
Context engineering means deliberately shaping that information so
the agent can make better decisions. It is not justprompting.
Prompting tells the agent what to do now. Context tells the agent
what world it is working inside.
For example, the instruction “build the login page” is weak by itself.
The agent does not know your user roles, your authentication rules,
your file structure, your naming style, your error handling rules, or
what already exists. A better instruction gives the task and the
relevant context around the task.
RULE: Beginner Rule
Beforeyouaskanagenttowritecode,askyourself:“Whatdoestheagentneed
toknowtoavoidguessing?”Iftheanswerisnotintheprompt,contextpack,or
visiblefiles,theagentmayinventit.

Figure12.1:Thequalityoftheagentoutputdependsonthequalityof
thecontextitreceives.
12.2GivingtheAgenttheRightProject
Background
Project background is the short explanation that tells the agent what
the system is, who it is for, and what problem it solves. Thisshould
be short enough to read quickly but specific enough to guide
decisions.
A useful project background usually answers five questions:
What are you building?
Who will use it?
What problem does it solve?
What is the current stage of the project?
What should the agent avoid changing?
Notice the last question. Context is not only about what the agent
should do. It also defines what the agent should not touch. This
protects existing decisions and keeps the project stable.

WeakBackgroundvsUsefulBackground
Weakbackground Usefulbackground
YouarebuildingasmallSaaS
dashboardforprojectteams.Users
Buildadashboardapp.
cancreateprojects,addtasks,assign
tasks,andviewbasicprogress.
Thefirstversionmustsupportonly
threeroles:owner,manager,and
Makeitsimple.
member.Donotaddbilling,chat,or
advancedanalyticsyet.
Useclearfunctionnames,small
modules,server-sidevalidation,simple
Usenormalcodingstyle.
errormessages,andtheexistingfolder
structureshownbelow.
12.3SupplyingRequirementsandTechnical
Specs
The agent should not receive only a general idea. It should receive
the specific requirement or technical decision related to the current
work. You do not need to paste the entire book-sized project plan
into every prompt. You need to supply the relevant slice.
A relevant slice includes the requirement being implemented, the
acceptance criteria, the technical decision that affects the
implementation, and the expected output. This creates a straight line
from spec to work.
PATTERN: Context Slice Pattern
Usethispatternwhenyougiveanagentafocusedtask:
1.Currentgoal:whatyouwantdonenow.
2.Relevantrequirement:therequirementbeingimplemented.
3.Technicalrule:architecture,API,database,orstyleconstraint.
4.Acceptancecriteria:howyouwilljudgetheresult.
5.Restrictions:whattheagentmustnotchange.

Here is a compact example for a login feature:
Currentgoal:Implementtheloginvalidationlogic.
Relevantrequirement:Usersmustloginwithemailandpassword.
Acceptancecriteria:
-Emailisrequiredandmustbevalid.
-Passwordisrequired.
-Invalidcredentialsreturnasafeerrormessage.
Technicalrule:Donotrevealwhethertheemailorpasswordwaswrong.
Restriction:Donotchangethedatabaseschemainthistask.
12.4SupplyingFileStructureandCoding
Standards
An AI agent can damage a project when it does not understand
where files belong. It may create duplicate folders, place code in the
wrong layer, or ignore the structure you already chose. A simple file
map prevents this.
The file map does not need to list every file in a large project. For a
beginner-friendly workflow, list the folders the agent needs for the
current task and explain what belongs in each folder.
project-board/
docs/
requirements.md #user-facingandsystemrequirements
technical-spec.md #architecture,API,data,andsecuritydecisions
context-pack.md #compactagentcontextforcurrentwork
src/
pages/ #screen-levelfrontendpages
components/ #reusableinterfacepieces
api/ #APIroutehandlersorclientcalls
services/ #businesslogic
data/ #dataaccessandschemahelpers
tests/
unit/ #smallbehaviortests
integration/ #APIandworkflowtests

Coding standards tell the agent how to write work that matches your
project. Keep them short. The goal is not to write a full style manual.
The goal is to prevent avoidable inconsistency.
Standardarea Examplerule
UseclearnamessuchascreateProject,
Naming
validateTaskInput,andgetUserById.
Functions Prefersmallfunctionsthatdoonejob.
Validateinputsbeforesavingor
Validation
processingdata.
Returnsafeuser-facingmessages.Do
Errors
notexposeinternaldetails.
Addorupdatetestsforeverybehavior
Tests
change.
12.5KeepingContextSmallbutUseful
Good context is not the same as maximum context. If you give the
agent too much information, it may focus on the wrong part of the
project, follow old instructions, or mix unrelated decisions together.
Your job is to make the useful context easy to find.
Use the smallest context that still allows the agent to complete the
task safely. If the agent is working on the task creation API, it
probably needs task requirements, relevant data fields, the API
contract, validation rules, and test expectations. It does not need the
full deployment plan.
| Tasktype | Include | Usuallyexclude Userstory,UIbehavior, Databasemigration Frontendscreen componentrules,error details states Request/responsecontract, |
| --- | --- | --- |
| APIendpoint | validationrules,authrule, tests Entityfields,relationships, UIcopyandscreen Databasechange constraints,migrationnotes layout Acceptancecriteria, | Fullproductroadmap |
| Testwriting | expectedbehavior,edge cases | Unrelatedfeatures |

Figure12.2:Ausefulcontextpackislayered,focused,andtask-specific.
12.6PreventingContextConfusion
Context confusion happens when the agent receives mixed, stale,
incomplete, or conflicting information. The agent may then follow
the wrong instruction even when your current prompt seems clear.
For example, your earlier spec may say that tasks only have two
statuses: open and done. Later, you decide to use three statuses:
todo, in progress, and done. If both instructions remain in the agent
context, the agent may choose either one. That is context conflict.
WATCH OUT: Common Context Confusion Triggers
-Oldrequirementsthatwereneverremoved.
-Twodifferentnamesforthesamefeature.
-Apromptthatconflictswiththetechnicalspecification.
-Filemapsthatnolongermatchtheactualstructure.
-Acceptancecriteriathatarenotlinkedtothecurrenttask.
To prevent confusion, use a simple rule: when a decision changes,
update the context before you ask the agent for more work. Do not
rely on the agent to guess which instruction is newer.

12.7UpdatingAgentContextastheProject
Changes
A project context pack is not permanent. It should change as your
project changes. But you should update it carefully so it remains a
trusted source of direction.
The safest method is to update context after review, not during
uncontrolled generation. First, let the agent complete a small task.
Next, review the output. Then decide whether any requirement,
design decision, file map, or rule needs to change. Finally, update
the context pack before the next task begins.
Figure12.3:Updatethecontextonlyafteryoureviewwhatchanged.
ContextUpdateChecklist
Did the requirement change?
Did the technical decision change?
Did the file structure change?
Did a new rule need to be added?
Did an old rule become false?
Does the next task need a smaller context slice?

12.8PracticalExample:CreatingaProject
ContextPack
Now you will create a project context pack for a small SaaS
application called ProjectBoard. The goal is not to include every
detail. The goal is to give the agent enough context to work safely
on one feature at a time.
Assume you want the agent to implement the task creation API.
Your context pack should include the project background, the
current goal, the relevant requirements, the technical decisions, the
file map, the coding standards, and the restrictions.

ProjectContextPackTemplate
#ProjectContextPack
##1.ProjectBackground
Projectname:[Name]
Purpose:[Whatthesystemhelpsusersdo]
Primaryusers:[Userroles]
Currentstage:[Planning/building/testing/improving]
##2.CurrentTask
Task:[Onefocusedtask]
Expectedoutput:[Whatshouldbecreatedorchanged]
Donotchange:[Files,schema,features,ordecisionsto
protect]
##3.RelevantRequirements
RequirementID:[REQ-###]
Requirementstatement:[Whatthesystemmustdo]
Acceptancecriteria:
-[Criterion1]
-[Criterion2]
-[Criterion3]
##4.TechnicalDecisions
Architecturerule:[Relevantarchitecturedecision]
Datarule:[Relevantdatabaseormodelrule]
APIrule:[Relevantendpointorcontractrule]
Securityrule:[Relevantauthenticationorauthorizationrule]
##5.FileMap
[Showonlythefoldersandfilesrelevanttothistask]
##6.CodingStandards
-Keepfunctionssmallandreadable.
-Validateallinputs.
-Returnsafeerrormessages.
-Addorupdatetestsforchangedbehavior.
##7.ReviewRules
Beforefinishing,explain:
-Whatchanged

-Whichrequirementwasimplemented
-Whichtestsshouldpass
-Anyassumptionmade

CompletedExample:ProjectBoardTask
CreationAPI
#ProjectContextPack
##1.ProjectBackground
Projectname:ProjectBoard
Purpose:Helpssmallteamscreateprojects,addtasks,assignwork,andtrack
progress.
Primaryusers:owner,manager,member
Currentstage:Buildingthefirstworkingversion
##2.CurrentTask
Task:CreatetheAPIbehaviorforaddinganewtasktoaproject.
Expectedoutput:APIhandlerlogic,validationrules,andunittests.
Donotchange:Userauthentication,projectschema,ordashboardUI.
##3.RelevantRequirements
RequirementID:REQ-TASK-001
Requirementstatement:Amanagercancreateataskinsideanexistingproject.
Acceptancecriteria:
-Titleisrequired.
-ProjectIDisrequired.
-Duedateisoptional.
-Statusdefaultsto"todo".
-Amembercannotcreatetasksunlessgivenmanagerpermission.
##4.TechnicalDecisions
Architecturerule:KeepAPIhandlingseparatefrombusinesslogic.
Datarule:Taskbelongstooneprojectandmaybeassignedtooneuser.
APIrule:POST/api/projects/{projectId}/taskscreatesatask.
Securityrule:Checkthecurrentuser'srolebeforecreatingthetask.
##5.FileMap
src/api/tasks/createTaskHandler.js #requesthandling
src/services/tasks/createTask.js #businesslogic
src/services/tasks/validateTaskInput.js#validationrules
tests/unit/createTask.test.js #unittests
##6.CodingStandards
-Keepvalidationseparatefromrequesthandling.

-Useclearerrormessages.
-Donotexposeinternaldatabaseerrors.
-Addtestsforvalidinput,missingtitle,missingprojectID,andunauthorizeduser.
##7.ReviewRules
Beforefinishing,explainwhatchangedandshowhowtheworkmapstoREQ-TASK-
001.
PROMPT: Prompt You Can Use
UsingtheProjectContextPackabove,implementonlythecurrenttask.Donot
addunrelatedfeatures.Donotchangeprotectedfilesordecisions.After
completingthework,summarizewhatchanged,listtherequirement
implemented,andidentifytheteststhatshouldpass.

ChapterChecklist
You can explain why context controls AI output quality.
You can write a short project background for an AI agent.
You can supply only the requirements and specs needed for
the current task.
You can describe a file map and coding standards clearly.
You can keep context small without making it incomplete.
You can identify and fix context confusion.
You can update a context pack as the project changes.
You can create a complete project context pack inside the
book workflow.
KeyTakeaways
Context is the project knowledge an agent uses before it
acts.
Prompting tells the agent what to do now; context tells the
agent what world it is working in.
Too little context causes guessing; too much context causes
confusion.
A good context pack includes background, requirements,
technical decisions, file map, standards, current task, and
review rules.
Context should be updated after review so old assumptions
do not damage new work.
ReviewQuestions
1.What is the difference between a prompt and context?
2.Why can too much context create weak AI output?
3.What should you include in a project background?
4.How does a file map help an AI coding agent?
5.What is context confusion?
6.When should you update the context pack?

PracticalExercises
Exercise 1: Write a project background: Choose a simple app
idea and write a five-sentence background that explains what you
are building, who will use it, and what the agent must avoid
changing.
Exercise 2: Create a context slice: Pick one feature from your
idea. Write the current goal, relevant requirement, acceptance
criteria, technical rule, and restrictions.
Exercise 3: Build a mini context pack: Use the template in this
chapter to create a one-page context pack for one task. Keep it
focused and remove unrelated details.
InSummary
Context engineering is how you control what an AI coding agent
understands before it works. You learned that better output does not
come from longer prompts alone. It comes from focused project
background, relevant requirements, clear technical decisions, useful
file maps, coding standards, restrictions, and review rules.
You also learned how to keep context small but useful, how to
prevent stale or conflicting instructions, and how to update the
context pack as your project changes. In the next chapter, you will
use this context foundation to write stronger prompts directly from
specifications.

Chapter 13
Prompting from
Specifications
_______________________________________________________
_____________________________AI does not become reliable
because you write longer prompts. It becomes more useful when
your prompt is connected to clear specifications. In this chapter, you
will learn how to turn requirements, product specs, technical specs,
API contracts, and test plans into focused instructions that an AI
coding agent can follow without guessing.
In Chapter 12, you learned how to prepare context for an AI agent.
Now you will learn how to turn that context into precise prompts. A
prompt is not a replacement for a specification. A prompt is the
short instruction that tells the agent what to do with the
specification.
This chapter keeps the workflow beginner friendly. You will start with
weak prompts, improve them step by step, and then build reusable
prompt templates that you can use inside your own project folder.

LearningObjectives
Bytheendofthischapter,you
Whyitmatters
willbeableto
YouwillavoidaskingAIforsoftware
Explainwhynormalpromptsoften
withoutgivingitaclearsourceof
produceweakcode
truth.
Youwillguidetheagentusing
Promptfromrequirements,product
documentsyoualreadycreatedearlier
specs,andtechnicalspecs
inthebook.
PromptfromAPIcontractsandtest YouwillmakeAIoutputeasierto
expectations verify.
Askforrefactoringwithoutbreaking Youwillimproveexistingcodewhile
behavior protectingapprovedfunctionality.
Youwillcreaterepeatableworkflows
Usereusableprompttemplates insteadofrewritinginstructionsevery
time.
Figure13.1:Thespec-drivenpromptpipeline.
13.1WhyNormalPromptsProduceWeakCode
A normal prompt is usually written as a request. It may say, "Build a
login page" or "Create a task API." That kind of promptis easy to
write, but it gives the AI agent too much room to guess.
When the agent guesses, it may choose the wrong fields, ignore
security rules, create extra features, or build code that does not
match your product direction. The problem is not always the AI
model. Often, the problem is that the prompt does not tell the agent
what the software must do, what it must not do, and how the output
will be checked.
Rule:Promptingrule

Donotasktheagenttoinventtheproduct.Askittoimplementaspecificpart
ofanalreadydefinedproduct.
A weak prompt starts with the desired output. A strong prompt
starts with the approved specification. This means you should first
show the agent the requirement, feature scope, technical
constraints, and expected result. Then you ask for a specific
deliverable.
Weakprompt
Buildaloginfeatureformyapp.
Strongerspec-drivenprompt
Usingtheloginrequirementsbelow,createonlythebackendloginendpoint.
Donotcreatethefrontend.Donotaddsociallogin.
FollowtheAPIcontractandvalidationrulesexactly.
Returntheendpointcode,thevalidationlogic,andashortexplanationofhow
thecodesatisfieseachacceptancecriterion.
The second prompt is better because it controls scope, references
the specification, sets boundaries, and defines the output format.
13.2HowtoPromptwithRequirements
A requirement tells the agent what the system must do. Whenyou
prompt from requirements, your goal is to make sure the agent
implements the required behavior and does not add unrelated
behavior.
Use this simple structure: state the requirement, state the task,
state the boundary, and state the acceptance check.
| Promptpart | Whatyouinclude Usersmustloginwith Requirement Theapprovedbehavior emailandpassword. Theexactworkto Createthelogin Task complete validationfunction. | Example |
| --- | --- | --- |
| Boundary | Whatnottochange registrationorpassword | Donotmodify |

reset.
Returnhoweach
Check	Howyouwillverifyit	acceptancecriterionis
handled.
PromptTemplate:Requirement-to-Implementation
Youareworkingfromthisapprovedrequirement:
[PASTEREQUIREMENT]
Yourtask:
[STATEONESMALLTASK]
Boundaries:
-Donotchange:[LISTFILESORFEATURES]
-Donotadd:[LISTOUT-OF-SCOPEITEMS]
Acceptancecriteria:
[PASTEACCEPTANCECRITERIA]
Outputrequired:
-Implementationsteps
-Codeorstructureddraft
-Ashorttraceabilitynoteshowinghowtheoutputsatisfiestherequirement
13.3HowtoPromptwithProductSpecs
A product specification explains why the feature exists, who uses it,
what is in scope, and what is outside the current release. When you
prompt from a product spec, you help the agent understand the user
experience and the business goal behind the feature.
This matters because a feature can be technically correct but still
wrong for the product. For example, a dashboard may work, but if it
shows the wrong metrics for the target user, the product
requirement is not satisfied.
Tip:Product-specpromptfocus
Whenyouuseaproductspec,asktheagenttorespectusergoals,feature
scope,out-of-scopeitems,andsuccessmetrics.
PromptTemplate:Product-Spec-to-FeaturePlan
Usingtheproductrequirementsbelow,createafeatureplanfor[FEATURE
NAME].

Productgoal:
[PASTEPRODUCTGOAL]
Targetuser:
[PASTEUSERPERSONA]
Inscope:
[PASTEFEATURESCOPE]
Outofscope:
[PASTEOUT-OF-SCOPEITEMS]
Return:
1.Thefeaturebehaviorinsimplesteps
2.Thescreensorendpointsneeded
3.Themainuserflow
4.Risksorunclearpointsthatmustbeclarifiedbeforecoding
13.4HowtoPromptwithTechnicalSpecs
A technical specification tells the agent how the softwareshould be
built. It includes architecture, frontend rules, backend rules,
database decisions, security expectations, performance expectations,
and error-handling behavior.
When prompting from a technical spec, do not simply ask the agent
to "build the feature." Ask it to implement one technical unit while
following the relevant constraints.
Figure13.2:Acompletepromptstack.

PromptTemplate:Technical-Spec-to-Code
Usethetechnicalspecificationbelowasthesourceoftruth.
Technicalareatoworkon:
[FRONTEND/BACKEND/DATABASE/API/SECURITY]
Approvedtechnicaldecisions:
[PASTERELEVANTTECHNICALSPECEXCERPT]
Task:
[STATEONESMALLIMPLEMENTATIONTASK]
Constraints:
-Followtheexistingfolderstructure.
-Usetheexistingnamingstyle.
-Donotchangeunrelatedmodules.
-Donotintroduceanewlibraryunlessthespecsaysso.
Return:
-Theproposedfilestocreateoredit
-Theimplementation
-Ashortexplanationofhowthecodefollowsthetechnicalspec

13.5HowtoPromptwithAPIContracts
An API contract defines how one part of the system talks to another.
It should describe the endpoint, method, request body, response
body, status codes, validation rules, and error messages.
API contract prompts are useful because they reduce disagreement
between frontend and backend work. If the frontend expects one
response format and the backend returns another, the system breaks
even if both sides are individually well written.
Whatyourpromptshould
APIcontractitem
preserve
Endpointandmethod TheexactrouteandHTTPmethod
Requestbody Therequiredandoptionalfields
Validationrules Whatmustbeacceptedorrejected
Theexactdatashapetheclient
Responsebody
expects
Thestatuscodesandmessagesfor
Errorresponses
failurecases
PromptTemplate:APIContractImplementation
ImplementtheAPIendpointusingthiscontractonly:
Endpoint:
[PASTEENDPOINTANDMETHOD]
Requestcontract:
[PASTEREQUESTBODY]
Responsecontract:
[PASTERESPONSEBODY]
Validationrules:
[PASTEVALIDATIONRULES]
Errorbehavior:
[PASTEERRORRESPONSES]
Importantboundaries:
-Donotchangethecontract.
-Donotrenamefields.
-Donotaddextraresponsefields.
-Ifsomethingisunclear,listthequestionbeforewritingcode.
Return:
-Endpointlogic

-Validationlogic
-Examplesuccessresponse
-Exampleerrorresponse
13.6HowtoPromptforTests
Tests are where your specifications become measurable. If a
requirement says "a user must receive a clear error when the
password is wrong," then a test should prove that behavior.
When prompting for tests, do not ask for generic tests. Ask for tests
that map to acceptance criteria, edge cases, error cases, and
expected outputs. This keeps the tests connected to the requirement
instead of becoming shallow checks.
PromptTemplate:Acceptance-Criteria-to-Tests
Createtestsfromtheacceptancecriteriabelow.
Donottestbehaviorthatisnotlisted.
Feature:
[FEATURENAME]
Acceptancecriteria:
[PASTEACCEPTANCECRITERIA]
Edgecases:
[PASTEEDGECASES]
Errorcases:
[PASTEERRORCASES]
Returnatablewith:
-TestID
-Scenario
-Input
-Expectedresult
-RequirementIDcovered
Thenprovidethetestcodeortestpseudocode.

Miniexample
| TestID | Scenario | Input | Expectedresult | ReqID |
| --- | --- | --- | --- | --- |
| Correctemail | Returnsuccess T-LOGIN-01 Validlogin | REQ- |  |  |
| andpassword | andusersession Correctemail, Return Wrong REQ- | LOGIN-01 |  |  |
| T-LOGIN-02 | wrong | authentication password LOGIN-02 password error |  |  |
| Noemail | Returnvalidation T-LOGIN-03 Missingemail | REQ- |  |  |
| provided | error | LOGIN-03 13.7HowtoPromptforRefactoring Refactoring means improving the structure of existing code without changing its approved behavior. This is one of the places where AI agents can be helpful, but it is also risky. If the prompt is too broad, the agent may rewrite working code, remove edge cases, or change public behavior. A safe refactoring prompt must include the existing behavior, the reason for refactoring, the boundaries, and the tests that must still pass. Figure13.3:Saferefactoringfromaspecification. PromptTemplate:SafeRefactoring Refactorthecodebelowwithoutchangingitsapprovedbehavior. Currentbehaviorthatmustremaintrue: [PASTEREQUIREMENTSORACCEPTANCECRITERIA] Reasonforrefactoring: [SIMPLIFY/REMOVEDUPLICATION/IMPROVENAMING/IMPROVEERROR HANDLING] |  |  |

Boundaries:
-Donotchangepublicfunctionnamesunlessrequested.
-Donotchangerequestorresponseformats.
-Donotremovevalidationrules.
-Donotintroduceunrelatedfeatures.
Teststhatmuststillpass:
[PASTETESTLIST]
Return:
1.Refactoredcode
2.Explanationofwhatchanged
3.Confirmationofwhatbehaviorstayedthesame
4.Anyriskthatstillneedsmanualreview
13.8PromptTemplatesforSpec-DrivenAI
Engineering
You do not need to write every prompt from scratch. You can keep a
small prompt library inside your book workflow orproject folder. The
goal is not to create fancy prompts. The goal is to create repeatable
prompts that connect to specifications.
Template1:Clarifybeforebuilding
Beforewritingcode,reviewthespecificationbelow.
Listanymissingdetails,contradictions,riskyassumptions,orunclear
requirements.
Donotimplementanythingyet.
Specification:
[PASTESPEC]
Return:
-Missingdetails
-Contradictions
-QuestionsIshouldanswer
-Safeassumptions,ifany

Template2:Generateimplementationplan
Usingtheapprovedspecificationbelow,createastep-by-stepimplementation
plan.
Donotwritecodeyet.
Specification:
[PASTESPEC]
Return:
-Filesormoduleslikelyinvolved
-Tasksinthecorrectorder
-Teststowritebeforeorduringimplementation
-Riskstoreviewbeforecoding
Template3:Implementonetask
Implementthisonetaskonly:
[TASKIDANDTASKDESCRIPTION]
Sourceoftruth:
[PASTEREQUIREMENT/TECHNICALSPEC/APICONTRACT]
Boundaries:
-Donotworkonothertasks.
-Donotchangeunrelatedfiles.
-Donotaddfeaturesoutsidethespecification.
Return:
-Codechanges
-Shortexplanation
-RequirementIDscovered
-Suggestedtests

Template4:Reviewagainstthespec
Reviewtheoutputbelowagainsttheapprovedspecification.
Donotrewritethewholesolutionunlessnecessary.
Approvedspecification:
[PASTESPEC]
Outputtoreview:
[PASTECODEORPLAN]
Return:
-Whatmatchesthespec
-Whatismissing
-Whatisextraoroutofscope
-Whatshouldbecorrectedfirst
PracticalExample:Promptingforthe
ProjectBoardLoginFeature
Now connect the full idea. Suppose you are building ProjectBoard, a
small project management app used throughout this book. You
already have a login requirement and an API contract. Your job is
not to ask the agent to build"authentication" in general. Your job is
to ask for one controlled piece of work.
Approvedrequirement:
REQ-LOGIN-01:Aregisteredusermustbeabletologinwithemailand
password.
REQ-LOGIN-02:Thesystemmustrejectmissingfieldsandincorrectcredentials.
REQ-LOGIN-03:Theloginresponsemustnotexposethepasswordorpassword
hash.
APIcontract:
POST/api/login
Request:{"email":string,"password":string}
Successresponse:{"userId":string,"name":string,"token":string}
Errorresponse:{"error":string}
Prompt:
Implementonlythebackendloginendpointforthecontractabove.
Followtherequirementsexactly.
Donotbuildregistration,passwordreset,sociallogin,orfrontendscreens.
Returnthevalidationlogic,endpointlogic,successresponseexample,error

responseexamples,andatraceabilitynoteforREQ-LOGIN-01toREQ-LOGIN-
03.
This prompt is controlled because it gives the agent the exact
requirements, the exact API contract, the exact boundary, and the
exact output format. You can review the result without guessing
what the agent was trying to do.
PromptQualityChecklist
☐Have you provided the approved requirement or specification?
☐Have you limited the task to one clear unit of work?
☐Have you stated what the agent must not change?
☐Have you included acceptance criteria or review criteria?
☐Have you requested a clear output format?
☐Have you asked the agent to identify unclear details before
coding?
☐Have you connected the output back to requirement IDs or spec
sections?
KeyTakeaways
• A prompt is strongest when it is connected to a specification.
• Requirements tell the agent what behavior must exist.
• Product specs keep the work aligned with user goals and scope.
• Technical specs control architecture, file structure, and
implementation rules.
• API contracts prevent mismatches between parts of the system.
• Test prompts should come from acceptance criteria, edge cases,
and error cases.
• Refactoring prompts must protect existing behavior.
ReviewQuestions
1. Why does a normal prompt often produce weak or unpredictable
code?

2. What should you include when prompting from a requirement?
3. How does a product specification change the way you prompt an
AI agent?
4. Why should API contract prompts forbid field renaming or extra
response fields?
5. What makes a refactoring prompt safer?
PracticalExercises
Exercise1:Rewriteaweakprompt
Take the prompt "Build a dashboard" and rewrite it using aproduct
goal, scope boundary, and output format.
Exercise2:Createatestprompt
Write a prompt that turns three acceptance criteria into a table of
test cases.
Exercise3:Makeasaferefactoringprompt
Write a prompt that asks an agent to simplify a function without
changing request or response behavior.
InSummary
In this chapter, you learned how to prompt from specifications
instead of prompting from vague ideas. You saw how requirements,
product specs, technical specs, API contracts, test expectations, and
refactoring goals each require a slightly different prompt style. The
main lesson is simple: your prompt should not carry the whole
project in its words. Your specifications should carry the project, and
your prompt should tell the AI agent exactly how to use them.
In the next chapter, you will turn specifications into engineering
tasks. That is where the work becomes smaller, safer, and easier for
both you and the AI agent to complete step by step.

Chapter 14
Turning Specifications into
Engineering Tasks
_______________________________________________________
__________________
A specification explains what the software must do. A task explains
what you or an AI coding agent should build next. If the task is too
large, vague, or unordered, the agent may change too many files,
skip important details, or build features that do not match the
approved specification.
In this chapter, you will learn how to turn a feature specification into
small, testable, ordered engineering tasks. You will also learn how to
define dependencies, set implementation priorities, prevent scope
creep, and write task lists that are safe for AI-assisted development.
LearningObjectives
Bytheendofthischapter,you
Whyitmatters
willbeableto...
Breakafeaturespecificationinto Youcanmovefromplanningto
engineeringtasks implementationwithoutguessing.
YoureduceAImistakesandmake
Createsmall,testableworkunits
eachchangeeasiertoreview.
Youbuildinthecorrectorderinstead
Definetaskdependencies ofaskingtheagenttodoeverythingat
once.
Youfocusonthemostimportant
Prioritizeimplementationwork foundationbeforepolishingsecondary
details.
Yougivetheagentclearboundaries,
Writeagent-friendlytasklists
inputs,outputs,anddonecriteria.
Youstopnewideasfromenteringthe
Preventscopecreep
buildwithoutapproval.

Figure14.1:Aspecificationbecomesusefulwhenitisbroken
intosmall,ordered,testableengineeringtasks.
14.1WhyTaskBreakdownControlsProject
Quality
Task breakdown is the point where your specification becomes
executable. Before this stage, you know what the system should do.
After this stage, you know what should be built first, what should be
tested, and what should not be touched yet.
AI agents perform better when work is narrow. A broad instruction
such as "build the login system" can cause the agent to edit many
files, invent missing rules, or ignore security details. A narrow task
such as "create the login request validator according to API-LOGIN-
002" gives the agent a clear boundary.
Good task breakdown improves quality because it gives you control
over sequence, scope, testing, review, and rollback. If a task goes
wrong, you can fix one small area instead of untangling a large
uncontrolled change.
14.2BreakingFeaturesintoEngineeringTasks
Start with one approved feature from your specification. Do not
begin with the whole product. A feature is easier to manage when
you split it into the pieces needed to make it real: data, rules, API
behavior, interface behavior, tests, and review.
For example, a login feature may contain a user table, password
rules, a login endpoint, error responses, a frontend form, validation

behavior, and tests. Each of those pieces should become a task or a
small group of related tasks.
Use this question as your guide: "What is the smallest useful piece
of work that can be completed, tested, and reviewed without
building the entire feature?"
| Featurearea | Possibletask Createusertable Userrecordcan Data Schemaormodel fields bestored Definepassword Invalidpassword Rules Validationfunction validation isrejected Createlogin Correctresponse API Endpointcontract endpoint isreturned Screenor Usercansubmit UI Buildloginform component credentials Wrongcredentials Errorresponse | Output | Testsignal |
| --- | --- | --- | --- |
| Errorhandling | Maploginerrors rules message 14.3CreatingSmall,TestableWorkUnits A work unit is small when it has one clear outcome. It is testable when you can prove whether it works. It is ready for an AI agent when the instruction includes the source requirement, expected files, constraints, and done criteria. Avoid tasks that use broad words such as "handle everything", "make it robust", or "finish the feature". Those phrases sound helpful, but they leave too much room for interpretation. Replace them with specific expected behavior. A useful task should answer five questions: What should be changed? Why is it needed? Which spec does it come from? How will you know it is done? What should not be changed? Rule: The one-outcome rule Ifonetaskhasmorethanonemajoroutcome,splitit.Ataskthatcreatesa databasemodel,endpoint,screen,andtestsisnotonetask.Itisamini-project. | returnsafe |  |

14.4DefiningDependencies
A dependency is a task that must happen before another task can be
completed correctly. If the database model is not defined, the API
cannot be implemented safely. If the API contract is not approved,
the frontend may call the wrong endpoint.
Dependencies help you avoid building in the wrong order. They also
help you explain work to an AI agent without giving it permission to
improvise. You can say, "Complete Task 14-03 only after Task 14-01
and Task 14-02 are complete."
When you are unsure whether one task depends on another, ask:
"Can this task be tested correctly if the earlier task does not exist?"
If the answer is no, there is a dependency.
Figure14.2:Adependencymaphelpsyoubuildtasksinthe
rightorderinsteadofaskingtheagenttocompleteeverything
atonce.
14.5PrioritizingImplementationOrder
After you define dependencies, you need a practical build order.
Priority is not only about what is exciting. It is about what unlocks
the rest of the work. Foundation tasks usually come first: data
models, contracts, validation rules, and security rules.
A simple priority system is enough for most projects: P0 means
required before anything else can work; P1 means required for the

feature to be usable; P2 means useful improvement; P3 means
polish or future enhancement.
When using an AI agent, start with P0 and P1 tasks. Do not give it
P2 or P3 work until the foundation is implemented, tested, and
reviewed.
Priority	Meaning	Example
Mustexistbeforerelated Usermodel,database
P0
workcanbegin table,APIcontract
Requiredforthefeature Loginendpoint,form
P1
tobeusable validation,errorbehavior
Usefulimprovementafter Remember-meoption,
P2
corebehaviorworks betterloadingstate
Animation,theme
P3	Futureorpolishitem	variation,optional
shortcut
14.6CreatingAgent-FriendlyTaskLists
An agent-friendly task list is not a normal to-do list. It gives the
agent instructions in a format that reduces guessing. Each task
should include an ID, source spec, goal, files likely to change,
constraints, steps, done criteria, and review notes.
The task should also tell the agent what not to do. This is important.
Many AI coding mistakes happen because the instruction only says
what to build, not what to preserve. If authentication exists, the task
should say whether to reuse it, extend it, or leave it unchanged.
The best task list is boring, specific, and controlled. It may not look
exciting, but it protects your project.
PROMPTBOX:AskanAIagenttoturnaspecintotasks
Usingtheapprovedspecificationbelow,createacontrolledengineeringtasklist.
Foreachtask,include:taskID,sourcerequirement,goal,expectedfiles,
constraints,dependencies,donecriteria,andreviewnotes.
Donotaddfeaturesthatarenotinthespecification.Ifsomethingisunclear,
markitasaquestioninsteadofinventingbehavior.

14.7PreventingScopeCreep
Scope creep happens when new features enter the work without
being approved in the specification. With AI agents, scope creep can
happen quickly because the agent may "helpfully" add extra fields,
extra screens, or extra logic that was never requested.
To prevent this, every task must point back to an approved
requirement or design decision. If a requested change has no
matching spec entry, pause the implementation. Either reject it,
defer it, or update the spec first.
This rule keeps your project honest: no new code without a
matching approved reason.
Figure14.3:Newideasshouldpassthroughthespecification
beforetheybecomeimplementationtasks.

TaskPlanningTemplateforSpec-DrivenAI
Engineering
Use this template whenever you turn a specification into
implementation work. You can copy it directly into your project
notes, your agent instruction file, or your task document.
Agent-FriendlyEngineeringTaskTemplate
Task ID:
Task title:
Source requirement or spec section:
Business reason:
Goal:
Expected files or components:
Inputs:
Outputs:
Dependencies:
Constraints:
Step-by-step instructions:
Done criteria:
Tests to run or create:
Review checklist:
Out of scope:
14.8PracticalExample:TurningaFeature
SpecintoaDeveloperTaskPlan
Now you will turn a simple login feature specification into a task
plan. This example continues the same beginner-friendly chain used
across the book: requirement, specification, task, test, code, and
review.
Assume the approved requirement is: "A registered user must be
able to log in using an email address and password. The system
must reject invalid credentials with a safe error message and must
not reveal whether the email address exists."

LoginFeatureTaskPlan
Depends
| TaskID | Tasktitle | Donecriteria on Emailand Defineuser passwordfields | Outofscope |
| --- | --- | --- | --- |
| AUTH-01 | credential aredefined fields withconstraints Write Weak password Nopassword | None | NoUIwork |
| AUTH-02 | AUTH-01 | passwordsare validation reset rejectedbyrule rules Requestand |  |
| Createlogin | response AUTH-03 AUTH-01 | Notoken |  |
| APIcontract | shapesare documented Valid credentials | refresh |  |
| Implement | AUTH-02, | returnsuccess; AUTH-04 Noregistration |  |
| loginendpoint | AUTH-03 | invalidones returnsafe error Formsubmits emailand Createlogin Novisual |  |
| AUTH-05 | AUTH-03 | passwordto formbehavior redesign approved endpoint Happypathand |  |
| Createlogin | AUTH-04, | Nounrelated AUTH-06 failurecases |  |
| tests | AUTH-05 | authtests arecovered PROMPTBOX:Generateonlythenextsafetask Youareworkingfromtheapprovedloginspecification. GeneratetheimplementationinstructionsforTaskAUTH-04only. Usetheseconstraints: -Donotcreateregistration,passwordreset,orprofilefeatures. -Donotchangetheusertableunlessthetaskrequiresit. -FollowtheapprovedAPIcontract. -Includetestsforvalidlogin,invalidpassword,missingemail,andsafeerror messages. Return:filestoedit,steps,donecriteria,andreviewchecklist. |  |

Why this works: What makes this example safe
Thetaskplaniscontrolledbecauseeachitemhasasource,dependency,done
criteria,andout-of-scopeboundary.Theagentcanwork,butitcannotfreely
redesignthefeature.
TaskBreakdownChecklist
[ ]Each task has one clear outcome.
[ ]Each task points back to a requirement, specification, or design
decision.
[ ]Each task has done criteria that can be checked.
[ ]Dependencies are listed before implementation begins.
[ ]P0 and P1 tasks are completed before optional improvements.
[ ]Each task says what is out of scope.
[ ]No task gives the agent permission to rewrite unrelated code.
[ ]Tests are planned before or alongside implementation.
KeyTakeaways
•A specification becomes useful when you convert it intosmall,
ordered, testable tasks.
•Task breakdown controls quality because it limits what the AI
agent is allowed to change.
•Dependencies protect your build order and prevent the agent
from working on missing foundations.
•Priority helps you focus on core behavior before optional
improvements.
•Scope creep is prevented by linking every task back to an
approved spec entry.
ReviewQuestions
1. Why is "build the login system" too broad as an AI agent task?
2. What five questions should a good task answer?
3. How do dependencies improve task order?
4. What is the difference between P0 and P2 work?

5. Why should every task include an out-of-scope section?
PracticalExercises
1. Choose one feature from your own idea and split it into at least
five engineering tasks.
2. Write dependencies for those tasks and mark each task as P0, P1,
P2, or P3.
3. Rewrite one vague task into an agent-friendly task using the
template in this chapter.
4. Add an out-of-scope section to each task to prevent the agent
from building extra features.
InSummary
In this chapter, you learned how to turn specifications into
engineering tasks that are small, testable, ordered, and safe for AI-
assisted development. You saw why task breakdown controlsproject
quality and why a vague task can lead to uncontrolled AI output.
You also learned how to define dependencies, prioritize
implementation work, create agent-friendly task lists, and prevent
scope creep. The key lesson is simple: do not ask an AI agent to
build a feature until you have converted the specification into clear
work units with boundaries, tests, and done criteria.
In the next chapter, you will build on this task discipline by learning
how to manage code changes and version control in a controlled
spec-driven workflow.

Chapter 15
GitHub and Version Control
for AI Agent Workflows
AI coding agents can change files quickly. That speed is useful only
when you can see what changed, connect each change to a
requirement, review the result, and safely return to a previous state
when something goes wrong. This chapter teaches you how to use
version control discipline to keep AI-generated work organized and
reviewable.
BeginnerNote
ThischapterusesGitandGitHubbecausetheyarecommontoolsfortracking
softwarechanges.Youdonotneedanexternalrepositorytounderstandthe
workflow.Everycommand,template,andreviewhabityouneedisincluded
insidethischapter.
In the last chapter, you learned how to turn a specification into small
engineering tasks. Now you need a safe way to manage the changes
produced by those tasks. A task plan tells the agent what to do.
Version control shows you what the agent actually changed.

LearningObjectives
Bytheendofthischapter,youwill
Whyitmatters
beableto
Youcanpreventhiddenchanges,
ExplainwhyAI-generatedcodeneeds
brokenfiles,anduncontrolledscope
strictchangecontrol
expansion.
SetupacleanGitrepositoryforaspec- Youcantrackrequirements,specs,
drivenproject tasks,tests,andcodetogether.
Writeusefulcommitmessagestiedto Youcanunderstandwhyachange
requirements existsmonthslater.
YoucanisolateAIworkbeforeit
Usebranchesandreviewstepssafely
affectsstablecode.
Youcantraceeverycodechange
Connectissues,pullrequests,andspecs
backtotheoriginalrequirement.
Figure15.1:AcontrolledchangeloopkeepsAIworktiedto
requirements,tests,review,andcommits.
15.1WhyAICodingNeedsVersionControl
Discipline
When you work manually, you usually change one or two files at a
time. An AI coding agent may change routes, components, tests,
configuration files, and documentation in one attempt. Without

version control, you may not know exactly what changed or why it
changed.
Version control gives you a safety record. It does not replace
specifications, tests, or code review. Instead, it gives those practices
a place to live. A good commit should answer three simple
questions: what changed, why it changed, and which requirement
caused it.
AIcodingrisk Versioncontrolresponse
Theagentchangesmorefilesthan Reviewthediffbeforeacceptingthe
expected change.
Theagentmixesmultiplefeatures
Useonebranchorchangesetpertask.
together
Theagentremovesworking Compareagainstthepreviouscommit
behavior andrestoresafely.
Theagentfixesabugbutbreaksa RuntestsandchecktherequirementID
requirement beforemerging.
Useclearcommitmessageslinkedto
Youforgetwhyafilechanged
specsandtasks.
WorkingRule
Donotlettheagentmakealargeuncontrolledchangeandthenaskyouto
trustit.Lettheagentworkinsmallsteps.Revieweachstep.Commitonlythe
workyouunderstand.
15.2SettingUpaCleanGitRepository
A Git repository is a folder whose changes are tracked. In a spec-
driven project, you should track more than code. You should also
track the documents that explain why the code exists.

A simple beginner-friendly structure looks like this:
projectboard/
docs/
requirements.md
product-requirements.md
technical-spec.md
traceability-matrix.md
tasks/
task-plan.md
tests/
test-plan.md
src/
app code goes here
README.md
.gitignore
You can initialize Git from inside the project folder:
git init
git status
git add docs tasks tests src README.md .gitignore
git commit -m "chore(project): create initial spec-driven workspace"
The first commit should not contain random code. It should create a
clean baseline: folders, starter documentation, and a clear place for
future work. This gives you a safe point to return to before the AI
agent starts changing files.
15.3WritingUseful CommitMessages
A commit message is not decoration. It is a short engineering
record. Weak messages such as "fix stuff" or "update code" do not
help you understand the project later. A strong commit message
connects the change to a feature, requirement, or task.

Use this simple format:
type(scope): action linked to requirement ID
Examples:
feat(auth): add failed login lockout for REQ-AUTH-006
test(auth): add lockout tests for REQ-AUTH-006
docs(spec): update auth error handling for REQ-AUTH-006
fix(api): return 401 for invalid login credentials
Weakcommitmessage Bettercommitmessage
feat(auth):addloginvalidationforREQ-
updatelogin
AUTH-002
fix(api):rejectmissingprojectnamefor
fixbug
REQ-PROJ-003
test(tasks):adddue-datevalidationtests
tests
forREQ-TASK-004
docs(spec):updatetaskstatusrulesafter
changes
review
15.4WorkingwithFeatureBranches
A branch lets you isolate work before it affects your stable code.
Think of a branch as a safe workspace for one feature or one task. If
the agent makes a mistake, the mistake stays inside that branch
until you choose what to keep.

Figure15.2:AfeaturebranchisolatesAI-generatedworkuntil
reviewandtestsarecomplete.
A simple branch workflow looks like this:
git checkout main
git pull                 # if you use a remote repository
git checkout -b feature/REQ-AUTH-006-login-lockout
# Let the agent work on one task.
# Review the files.
# Run the tests.
git status
git diff
git add src tests docs
git commit -m "feat(auth): add login lockout for REQ-AUTH-006"
If you are not using a remote repository, you can still use branches
locally. The important habit is not the hosting platform. The
important habit is isolation, review, and traceability.
15.5ConnectingIssuestoRequirements
An issue is a work request. In spec-driven AI engineering, an issue
should not be vague. It should point to the requirement, the

expected behavior, the files likely involved, and the acceptance
criteria.
Use this issue template inside the book, a local document, or a
GitHub issue:
Issue Title: Implement failed login lockout
Requirement ID: REQ-AUTH-006
Spec Source: docs/technical-spec.md, Authentication section
Goal: Lock the account for 10 minutes after 5 failed login attempts.
Acceptance Criteria:
- Failed attempts are counted per user account.
- The sixth attempt within the window is blocked.
- A locked account receives a safe error message.
- A successful login resets the failed-attempt count.
Files likely affected:
- src/auth/login.py
- src/auth/models.py
- tests/test_login_lockout.py
This issue gives the agent a controlled target. It also gives you a
clear review checklist before you accept the change.
15.6CreatingPullRequestsforAI-Generated
Changes
A pull request is a review packet. It collects the code changes, test
evidence, requirement links, and review notes before work is merged
into the stable branch. Do not treat it as a formality. Treat it as your
final safety gate.

Figure15.3:Agoodreviewpacketconnectsrequirements,
issues,commits,tests,andspecupdates.

Use this pull request template:
Pull Request Title: Implement REQ-AUTH-006 login lockout
Requirement Link:
- REQ-AUTH-006: Failed login lockout
What Changed:
- Added failed-attempt tracking.
- Added account lockout rule.
- Added tests for lockout and reset behavior.
How I Tested It:
- Ran unit tests for authentication.
- Tested 5 failed attempts followed by a blocked attempt.
- Tested successful login reset.
Files Changed:
- src/auth/login.py
- src/auth/models.py
- tests/test_login_lockout.py
- docs/traceability-matrix.md
Review Notes:
- Confirm error message does not reveal sensitive details.
- Confirm lockout duration matches the technical spec.
Important
Ifapullrequestcannotexplainwhatchangedandwhy,itisnotreadytomerge.
Thereviewpacketshouldmaketheworkunderstandablewithoutguessing.
15.7ReviewingAgentChangesBeforeMerging
AI-generated changes should be reviewed in a fixed order. If you
review randomly, you may miss hidden scope changes. Start with
the requirement, then inspect the diff, then check tests, then update
the traceability records.

1. Readtherequirementandacceptancecriteriaagain.
2. Checkthelistofchangedfilesbeforereadingthecode.
3. Inspectthediffforunexpecteddeletionsorunrelatededits.
4. Runorreviewthetestsconnectedtotherequirement.
5. Checkerrorhandling,validation,andsecurity-sensitivepaths.
6. Updatethetraceabilitymatrixandspecsiftheimplementationchangeda
documenteddecision.
7. Commitormergeonlyafteryouunderstandthechange.
You can ask the agent to explain its work before you merge:
Review your own changes before I accept them.
Explain:
1. Every file you changed.
2. Which requirement each change supports.
3. Which tests prove the change works.
4. Any assumptions you made.
5. Any files you changed that were not listed in the task plan.
15.8UpdatingSpecsAfterCodeChanges
Sometimes implementation reveals something the specification did
not say clearly. For example, you may discover that a lockout rule
needs a time window, a maximum attempt count, and a reset
condition. When this happens, do not leave the code and spec
separated. Update the spec so future work remains aligned.
Whenthishappens Updatethisdocument
Arulebecomesclearerduring
Updatetherequirementsdocument.
implementation
Updatethetechnicalspecificationor
Adesigndecisionchanges
ADR.
Anewtestcaseisdiscovered Updatethetestplan.
Updatethetaskplanandtraceability
Ataskproducesextrawork
matrix.
Abehaviorisremovedorpostponed Updatescopeandout-of-scopenotes.

SpecDriftWarning
Specdrifthappenswhenthecodechangesbutthespecificationstaysbehind.
Thelongeryouallowdrift,theharderitbecomestotrustthebookoftruthfor
yourproject.
15.9PracticalExample:ManaginganAI-Built
FeaturewithGitHub
Now connect the full workflow with a simple feature: failed login
lockout for a SaaS application. You will start from a requirement,
create a work request, isolate the change, ask the agent to
implement it, review the result, and update the spec.
Ste
Action Output
p
REQ-AUTH-006:Lockaccountfor10
1 Writetherequirement
minutesafter5failedattempts.
Afocusedworkrequestwithacceptance
2 Createtheissue
criteriaandlikelyfiles.
3	Createthebranch	feature/REQ-AUTH-006-login-lockout
Acontrolledimplementationrequesttied
4 Prompttheagent
tothespec.
Confirmonlyauthcode,tests,and
5 Reviewthediff
traceabilityfileschanged.
6	Runtests	Authenticationtestspass.
feat(auth):addloginlockoutforREQ-
7 Committhework
AUTH-006
Areviewpacketwithrequirement,tests,
8 Openthepullrequest
files,andnotes.
Traceabilitymatrixandtechnicalspec
9 Updatespecs
matchthefinalbehavior.

Here is the agent prompt you can use for the implementation step:
You are working on requirement REQ-AUTH-006.
Goal:
Implement failed login lockout for user accounts.
Rules:
- Lock the account for 10 minutes after 5 failed login attempts.
- A successful login resets the failed-attempt count.
- Do not change unrelated authentication behavior.
- Do not modify files outside the listed scope unless you explain why first.
Likely files:
- src/auth/login.py
- src/auth/models.py
- tests/test_login_lockout.py
Before coding:
1. Summarize the requirement.
2. List the files you plan to change.
3. List the tests you will add.
After coding:
1. Summarize the changes.
2. Explain how each change maps to REQ-AUTH-006.
3. Explain how the tests prove the behavior.
This prompt gives the agent context, boundaries, and a reporting
structure. It also protects you from silent scope expansion.

ChapterChecklist
YoucanexplainwhyAIcodingneedsversioncontroldiscipline.
YoucancreateacleanGitrepositoryforspecs,tasks,tests,andcode.
YoucanwriteusefulcommitmessagestiedtorequirementIDs.
YoucanuseafeaturebranchtoisolateAI-generatedwork.
Youcanconnectrequirementstoissues,commits,pullrequests,andspec
updates.
Youcanreviewagentchangesbeforemergingthemintostablecode.
KeyTakeaways
VersioncontrolisyoursafetysystemwhenAIchangescodequickly.
Agoodbranchkeepsonetaskseparatefromunrelatedwork.
Agoodcommitexplainswhatchangedandwhyitchanged.
Agoodpullrequestconnectsrequirements,code,tests,andreview
evidence.
Specsmustbeupdatedwhenimplementationchangesthedocumented
truth.
ReviewQuestions
1. WhyisitriskytoletanAIagentmakelargeunreviewedchanges?
2. Whatinformationshouldausefulcommitmessagecontain?
3. Whyshouldonebranchusuallyfocusononerequirementortask?
4. Whatshouldapullrequestexplainbeforeyoumergeit?
5. Whatisspecdrift,andwhyisitdangerous?
PracticalExercises
1. Writethreecommitmessagesforapasswordresetfeatureusingtheformat
showninthischapter.
2. CreateanissuetemplateforataskcreationfeatureusingarequirementID,
acceptancecriteria,andlikelyfiles.
3. Writeapullrequestdescriptionforafeaturethataddsprojectarchiving.
4. CreateashortreviewchecklistforanAI-generatedAPIchange.
5. Updateasampletraceabilityrowafteracodechangerevealsanewvalidation
rule.

InSummary
AI agents can produce code quickly, but you should not measure
engineering quality by speed alone. You need a controlled workflow
that lets you trace every change from requirement to task, test,
commit, review, and spec update. Git gives you a change history.
GitHub can give you a structured review layer. Together, they help
you turn AI-generated code into accountable engineering work.
In the next chapter, you will connect these habits into the complete
spec-to-code pipeline. You will see how requirements, specifications,
tasks, tests, implementation, review, and deployment fit into one
repeatable workflow.

Chapter 16
Building the Spec-to-Code
Pipeline
A spec-to-code pipeline is the complete path from a project idea to
reviewed, deployable software. It helps you avoid a common
beginner mistake: asking an AI agent to code before you have
decided what the software must do, how it should behave, and how
you will prove it works.
In this chapter, you will connect the pieces you have already learned.
You will start with a project brief, turn it into requirements, convert
those requirements into product and technical specifications, break
the work into tasks, plan tests, implement carefully, review the
result, and prepare it for deployment. Everything stays inside the
book: templates, prompts, examples, and review checks are included
here.
The previous chapters taught you how to write requirements,
product documents, technical specifications, context packs, prompts,
and task lists. This chapter shows you how to connect them into one
repeatable system. Instead of treating each document as separate
paperwork, you will treat every artifact as controlled input for the
next engineering step.

LearningObjectives
Bytheendofthischapter,you
Whyitmatters
willbeableto...
Explain the full spec-to-code process from You need a reliable path before you ask an
brief to deployment. AI agent to make changes.
Convert one artifact into the next artifact Each stage should reduce confusion, not
without losing context. create more documents.
Use quality gates before moving to Quality gates catch missing requirements
implementation and deployment. before they become broken code.
Build a reusable workflow you can apply to A repeatable pipeline helps you move
any future project. faster without losing control.
Figure16.1:Thespec-to-codepipelineturnsonecontrolled
artifactintothenext.
16.1TheEnd-to-EndSpec-to-CodeProcess
The end-to-end process is simple in shape but powerful in practice.
You begin with a short project brief. That brief becomes
requirements. The requirements become a product specification. The
product specification becomes a technical design. The technical
design becomes tasks. The tasks become tests. The tests guide
implementation. The implementation is reviewed against the original
intent before deployment.

This order matters because AI agents are very sensitive to missing
context. If you give an agent only a vague request, it may invent
architecture, ignore edge cases, skip validation, or change files
outside the intended scope. If you give it a clear pipeline, the agent
has less room to guess.
Beginner Rule
DonotaskanAIagenttobuildthewholeprojectatonce.Askittoworkfrom
oneapprovedartifactatatime.Yourjobistocontrolthesequence:brief,
requirements,productspec,technicalspec,tasks,tests,code,review,
deployment.
16.2ProjectBrieftoRequirements
A project brief explains the idea in plain language. It does not need
to be technical. It should answer four beginner-friendly questions:
what are you building, who is it for, what problem does it solve, and
what result should exist at the end?
Requirements turn that brief into clear statements of expected
behavior. A good requirement is specific, testable, and tied to a user
or system need. This stage prevents you from building features that
sound interesting but do not support the actual goal.
Briefstatement Requirementcreatedfromit
Users need a simple way to manage The system shall allow an authenticated
project tasks. user to create, update, and delete tasks.
The system shall mark a task as overdue
Teams need to know what work is
when its due date has passed and its status
overdue.
is not complete.
Managers need a quick summary of The system shall display counts for open,
progress. in-progress, blocked, and completed tasks.
PROJECT BRIEF TEMPLATE
Project name:
Problem you want to solve:
Primary users:
Main outcome:
Must-have features:
Out-of-scope features:
Known constraints:
Success signal:

16.3RequirementstoProductSpecification
Requirements say what the system must do. A product specification
explains why those requirements matter to the user and how the
feature should feel from the user side. This is where you connect
behavior to value.
A product specification should not describe code structure. It should
describe goals, users, user flows, feature scope, out-of-scope items,
and success metrics. When you move from requirements to product
specification, ask: what experience should this create for you or your
users?
Requirement Productspecdetail
A user can add a task from the project
Users can create tasks. page using a short form with title,
description, due date, and priority.
A project member can assign a task to
Tasks can be assigned.
another member so responsibility is visible.
The dashboard should show overdue work
Overdue tasks are visible.
clearly so teams can act quickly.
Prompt Box: Requirement to Product Spec
Usethispromptinsideyourworkflow:
Youarehelpingmeturnrequirementsintoaproductspecification.Useonlythe
requirementsbelow.Donotinventnewfeatures.Foreachrequirement,explain
theusergoal,userflow,successmetric,andout-of-scopenotes.Returna
conciseproductspecsection.
16.4ProductSpecificationtoTechnicalDesign
The technical design explains how the system will support the
product specification. This is where you decide the architecture,
components, data model, APIs, validation rules, security
requirements, and error handling approach.
The technical design should not be a mystery document. You should
be able to point to a product requirement and show which technical
decision supports it. For example, if the product spec says users can
only see projects they belong to, the technical design must include

authentication, authorization, and database relationships that make
this possible.
Productneed Technicaldesignresponse
Use authentication plus project_members
Only project members can view a project.
table for access checks.
Add indexes on project_id, status, due_date,
Task data must load quickly.
and assignee_id.
Return structured API errors with code,
Errors must be clear.
message, and field details.
16.5TechnicalDesigntoTaskList
A task list turns design into action. Each task should be small
enough to complete and review. If a task is too large, the agent may
change too much code at once. If a task is too vague, the agent
may guess.
A strong engineering task includes a task ID, source requirement,
goal, files likely to change, implementation notes, acceptance
criteria, and test expectation. This connects the task back to the
specification and forward to the test plan.
ENGINEERING TASK TEMPLATE
Task ID:
Source requirement:
Goal:
Files or modules likely to change:
Implementation notes:
Acceptance criteria:
Required tests:
Do not change:
Review checklist:
Weaktask Bettertask
TASK-04: Add task assignment using
assignee_id, enforce project membership,
Build task assignment.
update create/update task API, and add
tests for valid and invalid assignees.
TASK-07: Return structured validation
Make errors better. errors for task create/update requests
using code, message, and field values.
Add dashboard. TASK-09: Add dashboard counts for task
status categories using existing task status

values only.
16.6TaskListtoTestPlan
A test plan explains how you will prove that each task works. In
spec-driven AI engineering, tests are not an afterthought. They are
a safety layer that prevents the agent from producing code that
looks correct but fails important behavior.
For every task, write tests for the happy path, failure path, edge
cases, and permission rules. You do not need hundreds of tests for a
small feature. You need the right tests tied to the requirement.
Task Testfocus
Valid task creates successfully; missing title
Create task
fails; unauthenticated request fails.
Valid project member can be assigned; non-
Assign task
member cannot be assigned.
Past due incomplete task is overdue;
Overdue tasks
completed task is not overdue.
Counts match task status values for the
Dashboard counts
current project only.
Quality Gate
Beforeyouimplementatask,confirmthatthetestplananswersthisquestion:
HowwillIknowthistaskworkswithouttrustingtheAIagentblindly?
16.7TestPlantoImplementation
Implementation should begin only after the task and test plan are
clear. Your prompt should tell the agent the exact task, the source
requirement, the files it may edit, the tests it must create or update,
and the behavior it must not change.
This is where the pipeline protects you. The agent is no longer
responding to a vague request like "build the task feature." It is
responding to a controlled task with a testable outcome.
IMPLEMENTATION PROMPT TEMPLATE
You are implementing one task from the approved spec-to-code pipeline.
Task ID:
Source requirement:
Technical design reference:

Allowed files to change:
Files not allowed to change:
Expected behavior:
Required tests:
Acceptance criteria:
Instructions:
1. Make the smallest safe change.
2. Do not add unrelated features.
3. Explain changed files after implementation.
4. Show how the tests prove the requirement.
16.8ImplementationtoReview
Review is where you compare the implemented work against the
original intent. You are not only checking whether the code runs.
You are checking whether the code satisfies the requirement,
respects the technical design, passes the planned tests, and avoids
unintended changes.
A useful review has three layers: requirement review, technical
review, and change review. Requirement review asks whether the
user behavior is correct. Technical review checks architecture,
validation, security, and error handling. Change review checks
whether the agent modified only what it was allowed to modify.
Reviewlayer Questiontoask
Does the implemented behavior satisfy the
Requirement review
source requirement?
Does the solution follow the technical
Technical review
design and constraints?
Do the tests prove the expected success
Test review
and failure paths?
Change review Did the agent avoid unrelated changes?

Figure16.2:Eachstagehasanartifactandaqualitygate
beforethenextstagebegins.
16.9ReviewtoDeployment
Deployment is not just uploading code to a server. Deployment
means the system is ready to run safely in an environment where
real users may depend on it. Before deployment, you should check
configuration, environment variables, database migrations, error
handling, rollback steps, and monitoring expectations.
For beginners, the most important deployment habit is simple: never
deploy a feature that you cannot explain, test, and roll back. If you
cannot describe what changed, why it changed, how it was tested,
and what you will do if it fails, the feature is not ready.
DEPLOYMENT READINESS CHECKLIST
[ ] Requirements were satisfied.
[ ] Technical design was followed.
[ ] Tests passed.
[ ] No unrelated files were changed.
[ ] Configuration values are known.
[ ] Database changes are documented.
[ ] Error handling is acceptable.
[ ] Rollback steps are written.
[ ] Monitoring or manual checks are planned.

16.10CreatingaRepeatableWorkflowforAny
Project
A pipeline becomes powerful when you can reuse it. You should not
create a new process for every project. Instead, keep a consistent
set of artifacts: project brief, requirements, product specification,
technical specification, task list, test plan, implementation prompt,
review checklist, deployment checklist, and maintenance notes.
The first time you use this workflow, it may feel slower than simply
prompting an agent to code. But after one or two projects, the
workflow becomes faster because your decisions are clearer, your
prompts are stronger, and your reviews are more focused.
Figure16.3:Arepeatableworkflowimprovesthenextproject,
notonlythecurrentone.
Reusableartifact Whenyouuseit
Project brief At the start of every project or feature.
Requirements list Before product or technical planning.
Product specification Before designing architecture or tasks.
Technical specification Before asking the agent to implement.
Task list Before test planning and coding.
Test plan Before implementation.
Review checklist Before accepting the agent output.
Deployment checklist Before release.

PracticalExample:OneFeatureThroughthe
Pipeline
Use this compact example to see the pipeline as one connected
chain. The feature is a login flow for a project management app.
Pipelinestage Exampleoutput
Users need to sign in before accessing
Brief
their projects.
The system shall allow a registered user to
Requirement
sign in using email and password.
The sign-in page should show clear errors
Product spec for invalid credentials and allow the user to
retry.
POST /auth/login validates credentials,
Technical spec creates a session token, and returns the
current user profile.
TASK-01: Implement login endpoint,
Task credential validation, session creation, and
error responses.
Test valid login, invalid password, missing
Test plan
email, and unknown account.
Add endpoint, validation, authentication
Implementation
service, and tests.
Confirm endpoint behavior, error format,
Review
tests, and no unrelated changes.
Confirm environment secrets, session
Deployment
settings, logs, and rollback notes.
PipelineControlChecklist
SPEC-TO-CODE PIPELINE CHECKLIST
[ ] I can explain the project in one paragraph.
[ ] I have clear, testable requirements.
[ ] I have a product specification that defines users, scope, and flows.
[ ] I have a technical specification that explains architecture and behavior.
[ ] I have small tasks with acceptance criteria.
[ ] I have tests planned before implementation.
[ ] I have an implementation prompt that limits scope.
[ ] I have reviewed the output against the source requirement.
[ ] I have deployment checks before release.
[ ] I have updated the relevant specs after changes.

KeyTakeaways
- A spec-to-code pipeline connects every decision from idea to
deployment.
- Each artifact should become controlled input for the next artifact.
- AI agents perform better when you give them small, testable tasks
instead of broad project requests.
- Tests should be planned before implementation, not added after
you hope the code works.
- A repeatable pipeline helps you move faster because you make
fewer hidden decisions during coding.
ReviewQuestions
- Why should a project brief come before requirements?
- What is the difference between a product specification and a
technical specification?
- Why should test planning happen before implementation?
- What should you check during review before accepting AI-
generated code?
- How does a repeatable workflow reduce risk in future projects?
PracticalExercises
Exercise Whatyoushouldproduce
Write a brief for a small app you want to A one-paragraph project brief with users,
build. problem, and desired outcome.
Five clear requirements that are specific
Turn the brief into five requirements.
and testable.
Three small tasks with source
Create three engineering tasks. requirement, acceptance criteria, and
required tests.
A scoped prompt that tells the agent what
Write one implementation prompt.
to change and what not to change.
A short release checklist for your chosen
Create one deployment checklist.
feature.

InSummary
The spec-to-code pipeline is the operating system for this book. It
gives you a disciplined way to move from idea to reliable software
without handing control to the AI agent too early. You start with
intent, clarify requirements, describe the product, design the system,
break the work into tasks, plan tests, implement carefully, review the
output, and deploy only when the work can be explained and
verified.
In the next part of the book, you will apply this discipline to quality.
You will learn how to plan tests before code generation so your AI-
assisted workflow produces software that can be checked, trusted,
and improved.

Part IV
Test-Driven and Quality-
Driven AI Engineering

Chapter 17
Test Planning Before Code
Generation
Before you ask an AI agent to write code, you need to know how
you will judge the code. A test plan gives you that judgment system.
It tells you what the software must prove before you accept it.
This chapter shows you how to plan tests before implementation.
You will not try to test everything. You will learn how to identify the
important behaviors, risks, edge cases, and failure conditions that
protect the requirement.
In the previous chapter, you built the spec-to-code pipeline. Now you
add a quality gate before the code stage. This is where your
requirements become test expectations, and those expectations
guide the AI agent toward safer implementation choices.
LearningObjectives
Bytheendofthischapter,youwill
Whyitmatters
beableto
PlantestsbeforeaskinganAIagentto Yougivetheagentacleartarget
generatecode. insteadofacceptingrandomoutput.
Separateunit,integration,end-to-end, Youchoosetherightkindoftestfor
security,andperformancetests. theriskyouarechecking.
Writeedgecasesandfailureconditions Youcatchhiddenbehaviorbeforeit
inplainlanguage. becomesaproductionbug.
Createatestspecificationthatconnects Youcanprovewhetherarequirement
requirementstoevidence. hasbeenimplementedcorrectly.

Figure17.1:Testplanningcreatesaqualitygatebefore
implementationbegins.
17.1WhyTestsShouldComeBefore
Implementation
A test is not only a way to find bugs after code is written. In spec-
driven AI engineering, a test is a design signal. It tells you and the
AI agent what correct behavior looks like before implementation
starts.
When you write tests after code, you may accidentally test what the
code already does. When you plan tests before code, you test what
the requirement promised. That difference is important because AI-
generated code can look complete while quietly missing important
behavior.
NOTE: Beginner rule -Do not ask an AI agent to build a feature
until you can write at least three checks for that feature: one
normal case, one edge case, and one failure case.
Withouttestplanning Withtestplanning
Theagentdecideswhat“done” Youdefinewhat“done”meansbefore
means. implementation.
Bugsarefoundlate,oftenduring Expectedbehaviorischeckedearlyand
manualreview. repeatedly.
Thecodemaysatisfythepromptbut Thecodemustsatisfyvisibleacceptance
nottherequirement. criteria.
Youmayapprovefeaturesbasedon Youapprovefeaturesbasedon
appearance. evidence.

17.2UnitTestPlanning
Unit tests check small pieces of logic. You use them when a rule can
be tested without running the entire application. A unit test is useful
for calculations, validators, permission checks, formatting rules, and
small helper functions.
A good unit test plan names the rule, the input, the expected
output, and the reason the rule matters. You do not need to write
the final test code yet. You only need to define the behavior clearly
enough that code can later be generated against it.
Requirementdetail Unittestidea
Apasswordmustcontainatleast Passshortpasswordsandconfirmthey
eightcharacters. arerejected.
Aprojecttitlecannotbeempty. Passanemptytitleandconfirm
validationfails.
Ataskstatusmustbetodo, Passanunsupportedstatusandconfirm
in_progress,ordone. itisrejected.
UNITTESTPLAN:Taskstatusvalidation
RequirementID:REQ-TASK-04
Rule:Ataskstatusmustbeoneoftodo,in_progress,ordone.
Normalcase:status="todo"shouldbeaccepted.
Edgecase:status="DONE"shouldberejectedornormalizedonlyifthespec
allowsit.
Failurecase:status="archived"shouldberejectedwithaclearvalidationerror.
17.3IntegrationTestPlanning
Integration tests check whether separate parts of the system work
together. In a spec-driven workflow, you use integration tests when
a requirement depends on more than one component, such as an
API endpoint, a database table, and an authentication rule.
For example, creating a task is not just a database operation. The
API must accept the request, validate the fields, check the user, save
the task, and return the correct response. That is an integration
behavior.

Integrationpoint Whatyoushouldverify
API+database Avalidrequestcreatestherightrecordand
returnsthecorrectresponse.
Authentication+API Onlyanauthenticatedusercanperformthe
action.
Validation+responsehandling Invalidinputreturnsaclearerrorwithout
creatingbaddata.
Service+externaldependency Thesystemhandlesdependencysuccess,
failure,andtimeoutcases.
17.4End-to-EndTestPlanning
End-to-end tests check a complete user flow. You use them when
you want to prove that the system works from the user’s point of
view, not only from the code’s point of view.
You should keep end-to-end tests focused. Do not try to cover every
tiny rule with them. Use them for the flows that define whether the
product is usable: sign up, log in, create a project, add a task,
update a task, and view the result.
RULE: Practical rule -If a user would complain loudly when a
flow breaks, that flow deserves an end-to-end test plan.
Userflow End-to-endtestgoal
Login Avalidusercansigninandreachthedashboard.
Createproject Ausercancreateaprojectandseeitintheproject
list.
Createtask Ausercanaddatasktoaprojectandseethetask
immediately.
Permissionboundary Ausercannotopenanotheruser’sprivateproject.

Figure17.2:Abalancedtestplancoversdifferentrisksat
differentlevels.
17.5SecurityTestPlanning
Security tests check whether the system protects users, data, and
permissions. In AI-generated software, security tests are especially
important because an agent may implement the happy path and
forget the denial path.
For every important feature, ask: who is allowed to do this, who is
not allowed to do this, what input must be rejected, and what
information must never be exposed?
Securityrisk Testplanningquestion
Unauthorizedaccess Whathappenswhenausertriestoaccess
datatheydonotown?
Brokenvalidation Whathappenswhentherequestcontains
unexpectedfieldsordangerousinput?
Informationleakage Doesanerrormessagerevealprivatedataor
systemdetails?
Weakauthorization Cananormaluserperformanadmin-only
action?
17.6PerformanceTestPlanning
Performance tests check whether the system remains usable under
expected load. You do not need enterprise-level load testing in every
beginner project, but you should still define simple performance
expectations before code generation.

A useful performance plan begins with a plain-language target: how
fast should the key action feel, how many records should the page
handle, and what should happen when the system becomes slow?
Feature Simpleperformanceexpectation
Dashboardloading Thedashboardshouldloadwithintwosecondsfor
anormalaccount.
Tasklist Thetasklistshouldhandleatleast100tasks
withoutfreezing.
Search Searchresultsshouldappearquicklyforcommon
queries.
Externalservicecall Thesystemshouldshowafriendlymessageifthe
servicetimesout.
17.7EdgeCasesandFailureConditions
An edge case is an unusual but possible situation. A failure condition
is a situation where the system cannot complete the request safely.
Both must be planned before implementation because they are easy
for AI agents to miss.
Start with the normal case, then ask what could be empty, too long,
duplicated, expired, unavailable, unauthorized, or invalid. This simple
habit will catch many problems before they appear in code.
Questiontoask Example
Whatifthevalueisempty? Atasktitleisblank.
Whatifthevalueistoolong? Aprojectnamehas500characters.
Whatiftheuserisnot Ateammembereditsanowner-onlysetting.
allowed?
Whatifthedependencyfails? Anemailservicecannotsendaninvitation.
Whatiftheactionis Auserclicksthesubmitbuttontwice.
repeated?

EDGEANDFAILURETESTPROMPT
Usingtherequirementbelow,listthenormalcase,edgecases,andfailure
cases.
Donotwriteimplementationcodeyet.
Requirement:Ausercancreateataskinsideaprojecttheyown.
Returntheanswerasatestplanningtablewith:casetype,input,expected
result,andriskcovered.
17.8TestSpecificationTemplate
A test specification is the document that tells you how a requirement
will be verified. It does not need to be long. It must be clear enough
that you, another developer, or an AI agent can later create the
actual tests from it.
Use the template below whenever you turn requirements into test
plans. Keep the language plain. The goal is not to sound advanced.
The goal is to remove uncertainty.
Figure17.3:Asimpletestspecificationmatrixkeeps
requirementsconnectedtotestevidence.
Field Whattowrite
RequirementID TheIDoftherequirementbeingtested,suchasREQ-
LOGIN-01.
Testscenario Thebehaviororsituationyouwanttoverify.
Testtype Unit,integration,end-to-end,security,performance,
edge,orfailure.
Preconditions Whatmustalreadybetruebeforethetestbegins.
Input/action Whattheuser,system,ortestdoes.

Field Whattowrite
Expectedresult Theresultthatprovesthebehavioriscorrect.
Riskcovered Theproblemthistestprotectsagainst.
Status Planned,written,passing,failing,orblocked.
PracticalExample:PlanningTestsfor
ProjectBoardLogin
Assume you are building ProjectBoard, the sample SaaS application
used throughout this book. The requirement is simple: a registered
user must be able to log in with a valid email and password.
SPEC: Requirement -REQ-LOGIN-01: A registered user can log
in with a valid email and password and is redirected to the
dashboard.
| Scenario | Testtype | Expectedresult |
| --- | --- | --- |
| Validuserlogsin | Integration | Theuserreceivesa sessionandis redirectedtothe dashboard. |
| Wrongpasswordis | Integration/security submitted loginandshowsasafe errormessage. | Thesystemrejectsthe |
| Emptyemailissubmitted | Unit/validation | Thesystemrejectsthe requestbefore checkingcredentials. |
| Unregisteredemailis | Security | Thesystemrejectsthe submitted loginwithoutrevealing whethertheemail exists. |
| Dashboardisopened | End-to-end/security withoutlogin totheloginpage. | Theuserisredirected |

PROMPT:TURNREQUIREMENTINTOATESTSPEC
Youarehelpingmeplantestsbeforecodegeneration.
RequirementID:REQ-LOGIN-01
Requirement:Aregisteredusercanloginwithavalidemailandpasswordand
isredirectedtothedashboard.
Createatestspecificationtablewith:
-normalcase
-edgecases
-failurecases
-securitycases
-expectedresultforeachcase
Donotwriteimplementationcodeyet.

ChapterChecklist
You can explain why tests should be planned before
implementation.
You can separate unit, integration, end-to-end, security, and
performance test plans.
You can identify edge cases and failure conditions before
code is generated.
You can create a simple test specification matrix.
You can use tests as quality gates for AI-generated software.
ReviewQuestions
Why can writing tests after implementation hide requirement
mistakes?
When should you use a unit test instead of an end-to-end
test?
What is the difference between an edge case and a failure
condition?
Why are security tests especially important when working
with AI-generated code?
What fields should appear in a useful test specification?
PracticalExercises
Choose one requirement from your own project and write
three test scenarios: normal, edge, and failure.
Create a test specification table for a password reset feature.
Write a prompt that asks an AI agent to generate tests from
a requirement without writing implementation code.
Review an existing feature idea and identify one missing
security test and one missing performance test.

InSummary
Test planning before code generation helps you guide AI agents with
evidence, not hope. You define what correct behavior means before
the implementation begins. This keeps the agent focused, makes
review easier, and protects your requirements from being quietly
changed by the code.
You have now added a quality gate to the spec-to-code pipeline. In
the next chapter, you will learn how to use AI to generate and
improve tests from the test plans you create here.

Chapter 18
UsingAItoGenerateand
ImproveTests
_______________________________________________________
_______________
In Chapter 17, you planned tests before implementation. Now you
will use AI to help turn that plan into actual test cases. The goal is
not to let the AI invent random tests. The goal is to give the AI clear
acceptance criteria, review what it produces, and improve the tests
until they prove the required behavior.
By the end of this chapter, you will know how to prompt for useful
tests, detect weak AI-generated tests, improve test coverage, and
connect each test back to a requirement.
AI can generate test cases quickly, but speed is not the same as
quality. A weak prompt usually produces shallow tests. A spec-driven
prompt produces tests that check rules, edge cases, error messages,
API contracts, and user behavior. This chapter teaches you how to
guide that process in a controlled way.
LearningObjectives
Objective WhatYouWillPractice
Generatetestsfrom Userequirementsasthesourceoftruthinsteadof
acceptancecriteria vaguetestingrequests.
ReviewAI-generated Findmissingcases,weakassertions,andteststhat
tests donotprovebehavior.
Improveshallowtests AsktheAItostrengthentestswithrealisticinputs,
failurepaths,andexpectedoutcomes.
Testdifferentlayers Planunit,API,business-rule,error-handling,andUI
testsfromthesamefeaturespec.
Usereusabletemplates Applyprompttemplatesthatyoucanreuse
throughouttherestofthebook.

Figure18.1:YouuseAItodrafttests,butyourreviewturns
thosedraftsintoareliablequalitygate.
18.1PromptingAItoGenerateTestCases
When you ask an AI agent to “write tests,” you leave too much room
for guessing. The agent may test only the happy path, ignore edge
cases, or create tests that pass without provingthe requirement. A
better approach is to give the AI the exact behavior you expect.
Your prompt should include four things: the requirement, the
acceptance criteria, the target test level, and the expected output
format. This keeps the test generation process controlled and easy
to review.

PromptTemplate:GenerateTestsfromAcceptanceCriteria
Youarehelpingmegeneratetestsfromasoftwarerequirement.Donotinvent
behavioroutsidethespecification.
RequirementID:[REQ-ID]
Requirement:[pastetherequirement]
AcceptanceCriteria:
[pasteacceptancecriteria]
TestLevel:[unit/API/integration/UI]
OutputFormat:
-Testname
-Scenario
-Input
-Expectedresult
-Notesaboutedgecases
Generateonlyteststhatdirectlyprovetheacceptancecriteria.
Prompt Input Example
Requirement User can log in with a valid email and password.
Acceptance criterion 1 Valid credentials return a success response and user session.
Acceptance criterion 2 Invalid password returns a clear error without creating a
session.
Acceptance criterion 3 Missing email or password returns validation errors.
Test level API tests for POST /login
18.2ReviewingAI-GeneratedTests
You should never accept AI-generated tests just because they look
professional. A test can be well formatted and still be weak. Your job
is to check whether each test proves a specific requirement.
A useful test has a clear purpose, a realistic input, a strong
assertion, and a connection to the acceptance criteria. If any of
those parts are missing, the test needs improvement before it
becomes part of your quality gate.
| Review Area | Question to Ask | How to Fix Weakness |
| --- | --- | --- |
| Requirement link | Does this test prove a specific requirement or acceptance the test. criterion? | Add the requirement ID beside |
| Clear assertion | Does the test check a real expected result? exact status codes, messages, | Replace vague checks with |

| Review Area | Question to Ask | How to Fix Weakness values, or state changes. |
| --- | --- | --- |
| Failure path | Does the test cover what | Add invalid input, missing happens when something goes data, permission failure, or wrong? timeout cases. |
| No invented behavior | Did the AI add behavior that is not in the spec? first. | Remove it or update the spec |
| Stable data | Can the test run repeatedly | Use controlled test data and with predictable results? reset state when needed. 18.3AvoidingShallowTests Shallow tests are tests that give you confidence without giving you proof. They may check that a page loads, a function runs, or a response exists, but they do not verify the important behavior. Spec-driven testing pushes you to ask: what exact promise does this feature make, and how can a test prove that promise? Figure18.2:Betterpromptsproduceteststhatprovebehavior, notjustactivity. PromptTemplate:ImproveShallowTests Reviewthefollowingtestcasesagainsttherequirementandacceptancecriteria. Requirement:[pasterequirement] AcceptanceCriteria:[pastecriteria] CurrentTests:[pastetests] Identify: 1.Teststhataretooshallow 2.Missingsuccesscases 3.Missingfailurecases |

PromptTemplate:ImproveShallowTests
4.Weakassertions
5.Anybehaviorthatisnotsupportedbythespec
Thenrewritethetestssoeachoneprovesaspecificacceptancecriterion.
18.4TestingBusinessRules
Business rules describe decisions the software must enforce. They
are easy for AI to miss because they often sound like small
conditions. In reality, these rules protect the product from wrong
behavior.
When you prompt for business-rule tests, do not only ask for success
cases. Ask for boundary cases, invalid combinations, and rule
conflicts.
Business Rule Test Item Example
Rule Only active users can create projects.
Allowed case Active user creates a project successfully.
Blocked case Suspended user receives a permission error.
Boundary case User becomes suspended after opening the create-project
screen but before submitting.
Expected proof No project record is created for the blocked case.
18.5TestingErrorHandling
Error-handling tests confirm that the system fails safely and clearly.
A feature is not complete just because it works when everything is
correct. It must also respond properly when input is missing, invalid,
expired, duplicated, or unauthorized.
AI-generated error tests are often too simple. You should ask for
exact expected messages, status codes, and recovery behavior.
| Error Type | Example Scenario | Expected Behavior |
| --- | --- | --- |
| Missing required input | Email field is empty during | Validation error explains that login. email is required. |
| Invalid input format | Email does not contain a valid format. format problem. | Validation error explains the |
| Wrong credentials | Password does not match | Authentication fails without account. creating a session. |
| Unauthorized access | User tries to access a private project. and hides private data. | System returns an access error |

| Error Type | Example Scenario | Expected Behavior |
| --- | --- | --- |
| Temporary service | External email service is | System retries or reports failure |
| issue | unavailable. | without corrupting data. 18.6TestingAPIs API tests check the contract between the client and the backend. A strong API test does not only ask whether the endpoint responds. It checks the method, URL, request body, status code, response body, validation rules, and side effects. When you test APIs with AI support, give the AI the endpoint specification from your technical spec. That endpoint specification becomes the source of truth for the tests. PromptTemplate:GenerateAPITestsfromanEndpointContract UsethefollowingAPIcontracttogenerateAPItestcases.Donotaddendpoints orfieldsthatarenotlisted. Endpoint:[methodandpath] Purpose:[whatitdoes] RequestBody:[fieldsandvalidationrules] SuccessResponse:[statuscodeandbody] ErrorResponses:[statuscodesandbodies] SideEffects:[database/session/email/etc.] Returnatablewithtestname,requestinput,expectedstatus,expected responsebody,andsideeffectstoverify. #Example:simpleAPItestideainPython-stylepseudocode deftest_login_rejects_missing_password(api_client): response=api_client.post('/login',json={ 'email':'ada@example.com' }) assertresponse.status_code==400 assertresponse.json()['error']=='Passwordisrequired' assertresponse.json().get('session')isNone 18.7TestingUserInterfaces User interface tests check what you can see and do on the screen. They should focus on important user flows, not every tiny visual detail. A good UI test proves that the user can complete a required |

task and that the interface responds correctly when something goes
wrong.
For AI-generated UI tests, describe the screen, the user action, and
the visible result. This prevents the AI from writing tests that depend
on imaginary buttons, labels, or flows.
UI Test Input Example
Screen Login page
User action Enter valid email and password, then click Sign in.
Expected visible result Dashboard opens and the user name is visible.
Failure path Enter wrong password.
Expected error result Error message appears; password field is cleared; user stays
on login page.
Figure18.3:Youcantestthesamefeatureatdifferentlevels,
buteverytestshouldtracebacktotherequirement.
18.8PracticalExample:GeneratingTestsfrom
AcceptanceCriteria
Now you will turn one acceptance criterion into a useful test set. The
feature is simple, but the process is the same for larger systems.
Item Value
Feature Login
Requirement ID REQ-AUTH-001
Requirement You must be able to log in with a valid email and password.
Acceptance criterion If the email and password are correct, the system returns a
success response and creates a session.
Test target API behavior for POST /login

PromptUsedintheExample
GenerateAPItestcasesforREQ-AUTH-001.
Requirement:Ausermustbeabletologinwithavalidemailandpassword.
AcceptanceCriteria:
1.Correctcredentialsreturnstatus200.
2.Asessiontokenisreturned.
3.Incorrectpasswordreturnsstatus401.
4.Missingemailorpasswordreturnsstatus400.
5.Nosessioniscreatedforfailedloginattempts.
Returnthetestsinatablewithtestname,input,expectedstatus,expected
response,andsideeffecttoverify.
Expected
| Test Name | Input | Expected Response Status | Side Effect |
| --- | --- | --- | --- |
| Valid credentials | {email, correct | 200 | Session token Session |
| create session | password} created | exists | record |
| Wrong password | {email, wrong | 401 | Authentication No session |
| is rejected | password} | error | created |
| Missing email is | {password | 400 | Email required No session |
| rejected | only} | error | created |
| Missing password | {email only} | 400 | Password required No session |
| is rejected | error | created |  |
| Unknown email is | {unknown | 401 | Authentication No session |
| rejected | email, | error | created password} This is a good start, but you still review it. You may add tests for locked accounts, rate limits, password trimming rules, or session expiry only if those behaviors exist in your requirement or technical spec. If they are not specified, you either leave them out or update the spec first. |

Chapter18Checklist
Step QualityCheck
1 DidyougivetheAItherequirementandacceptancecriteria?
2 Dideverygeneratedtestconnecttoaspecificbehavior?
3 Didyouremoveinventedbehaviorthatwasnotinthespec?
4 Didyoustrengthenvagueassertions?
5 Didyouincludesuccess,failure,validation,andedgecases?
6 Didyoucheckbusinessrulesanderrorhandling?
7 DidyouconfirmAPIrequestandresponsecontracts?
8 DidyoukeepUItestsfocusedonimportantuserflows?
ReviewQuestions
1.  Why is “write tests for this feature” usually too weak as a
prompt?
2.  What should you check before accepting AI-generated tests?
3.  What is the difference between a shallow test and a useful test?
4.  Why should business rules be tested directly?
5.  How do API tests help protect request and response contracts?
PracticalExercises
1.  Take one requirement from your own project and write three
acceptance criteria for it.
2.  Use the prompt template in this chapter to generate unit, API, or
UI test cases from those criteria.
3.  Review the generated tests and mark each one as strong, weak,
missing, or invented.
4.  Rewrite one shallow test so that it checks an exact expected
result.
5.  Create a small test table that links each test back to the
requirement it proves.
InSummary
AI can help you generate tests faster, but you are still responsible for
test quality. A useful test proves a requirement. A weak test only

checks that something happened. In spec-driven AI engineering, you
guide AI with acceptance criteria, review the output, remove
invented behavior, strengthen weak assertions, and connect tests
back to the original specification.
You now have the foundation for using AI as a test assistant instead
of a careless test generator. In the next chapter, you will continue
this quality-driven workflow by learning how to debug AI-generated
software when the tests reveal a problem.

Chapter 19
Debugging AI-Generated
Software
AI-generated code can look correct while hiding broken assumptions,
missing edge cases, weak validation, or incomplete error handling.
In this chapter, you will learn how to debug AI-built software without
guessing. You will move from symptom to evidence, from evidence
to root cause, and from root cause to a controlled fix that is
reflected in your tests and specifications.
Youwilllearn HowtodiagnoseAI-generatedbugs
usinglogs,stacktraces,tests,root-
causeprompts,andadebugging
specification.
Mainworkflow Reproduce->collectevidence->
identifycause->fixonecause->test-
>updatethespec.
Practicaloutput Areusabledebuggingspecificationand
anauthentication-flowdebugging
example.
Whyitmatters YoustopaskingtheAIto“tryagain”
andstartguidingitwithevidenceand
constraints.

LearningObjectives
Bytheendofthischapter,you Whatthishelpsyoudo
can...
ExplainwhyAI-generatedcodefails. Recognizethatmanybugscomefrom
unclearspecs,hiddenassumptions,
andincompletetests.
Readlogsandstacktracescalmly. Usefailureevidenceinsteadof
guessing.
AskanAIagentforroot-cause Getusefuldiagnosiswithoutlettingthe
analysis. agentrewriteeverything.
Fixbrokenassumptions. Updatecode,tests,andspecs
together.
Writeadebuggingspecification. Createarepeatablerecordfor
preventingthesamebugfrom
returning.
Figure19.1:AcontrolleddebuggingloopforAI-generated
software.
19.1WhyAI-GeneratedCodeFails
AI-generated code usually fails for ordinary engineering reasons. The
difference is that the failure can be hidden behind polished-looking
output. The code may be syntactically clean, but it can still
misunderstand the business rule, skip a validation path, use the
wrong data shape, or handle only the happy path.

When you debug AI-generated software, do not begin by asking the
agent to rewrite the feature. First, ask what evidence you have. A
bug report, failing test, log line, error message, stack trace, and
requirement ID give you control. Without evidence, the agent may
guess in a new direction and create more confusion.
Beginner Rule
Neverdebugfrommemoryalone.Writedownthefailure,theexpected
behavior,theactualbehavior,andtheevidencebeforeyouchangecode.
19.2CommonAICodingMistakes
Most AI coding mistakes fall into patterns. If you can name the
pattern, you can debug faster. The goal is not to blame the agent.
The goal is to find where the instruction, context, code, or test
coverage was incomplete.
Figure19.2:CommonAIcodingmistakesandthefirst
evidencetocheck.
19.3DebuggingwithLogsandStackTraces
Logs tell you what the application was doing before it failed. A stack
trace tells you where the runtime error happened. Both are
evidence, but neither automatically tells the full root cause. A stack
trace may point to a line of code, while the true cause may be a

missing validation rule or an incorrect assumption in the
specification.
Read the failure from bottom to top and then connect it back to the
requirement. Ask: what did the system receive, what did it expect,
what did it do, and where did the actual behavior first differ from the
expected behavior?
Example failure evidence
Requirement ID: AUTH-REQ-03
Expected: A user with a valid email and password receives a session token.
Actual: Login returns 500 Internal Server Error.
Log: TypeError: cannot read property "id" of null
Likely area: user lookup, password check, or token creation.

19.4AskingAIforRootCauseAnalysis
A useful root-cause prompt is narrow. It gives the AI the
requirement, the failing behavior, the relevant log, and the rule that
it must not rewrite unrelated code. You are asking for diagnosis first,
not immediate code changes.
Root-Cause Prompt Template
Youaredebuggingonefeatureonly.
Feature:[featurename]
RequirementID:[requirementID]
Expectedbehavior:[whatshouldhappen]
Actualbehavior:[whathappened]
Evidence:[log,stacktrace,failingtest,orerrormessage]
Relevantfilesorfunctions:[listonlywhatmatters]
Task:
1.Explainthemostlikelyrootcause.
2.Listtwoalternativecausestocheck.
3.Donotrewritecodeyet.
4.Suggestthesmallestsafefix.
5.Statewhichtestshouldprovethefix.
This prompt keeps the agent in analysis mode. After you review the
diagnosis, you can ask for a small patch. This prevents the agent
from solving one bug by changing unrelated behavior.
19.5FixingBrokenAssumptions
A broken assumption happens when the code believes something
that the real system does not guarantee. For example, the code may
assume a user always exists, an API always returns a field, a
password value is never empty, or a database record always has a
related project.
To fix a broken assumption, update four things together: the code,
the test, the requirement, and the agent instruction. If you only

patch the code, the same mistake can return when the agent edits
the feature later.
| Assumption | Risk | SpecUpdate | TestUpdate |
| --- | --- | --- | --- |
| User always exists | Null error | Define missing- | Test invalid email user behavior |
| Token is always valid | Unauthorized access expiry rule | Define token | Test expired token |
| API field is always | Crash or bad data | Define required | Test missing field present fields |
| Password is always | Weak validation | Define empty | Test empty |
| supplied | input rule 19.6PreventingRepeatedErrors A repeated error means the system learned nothing from the first failure. In spec-driven AI engineering, a fix is incomplete until you add a regression test and update the document that should have prevented the bug. Use a simple prevention rule: every serious bug must create at least one new test, one note in the debugging specification, and one correction to the requirement, technical spec, or agent instruction file. Repeat-Error Prevention Checklist Afterabugisfixed,confirmthat: -Atestnowfailsbeforethefixandpassesafterthefix. -Therequirementexplainstheexpectedbehaviorclearly. -Thetechnicalspecexplainsthesystemruleclearly. -Theagentinstructionwarnsagainstthepreviousmistake. -Thesamebugcannotsilentlyreturninafutureedit. 19.7CreatingaDebuggingSpecification A debugging specification is a short document that records how a bug was diagnosed, what evidence proved the cause, what changed, and how you will prevent the same problem from returning. You do not need a long report. You need a clear trace from symptom to fix. | password |  |

Debugging Specification Template
BugID:[BUG-001]
RelatedRequirement:[REQ-ID]
Feature:[featurename]
Symptom:[whatfailed]
ExpectedBehavior:[whatshouldhavehappened]
ActualBehavior:[whathappenedinstead]
Evidence:[logs,stacktrace,failingtest,screenshotdescription,orreproduction
steps]
RootCause:[therealcause,notjusttheerrormessage]
SmallestSafeFix:[whatchanged]
RegressionTest:[testnameortestcase]
SpecUpdateNeeded:[requirement,technicalspec,APIcontract,oragent
instruction]
PreventionNote:[whatyouwillnotrepeat]
19.8PracticalExample:DebuggingaBroken
AuthenticationFlow
Now you will debug a broken login feature using the same method.
The feature should allow a user to submit an email and password,
validate the credentials, and receive a session token. The AI-
generated implementation looks complete, but login fails for
unknown users.

Figure19.3:Astep-by-stepdebuggingflowforabroken
authenticationfeature.
Start with the symptom. Login returns a server error when the email
is not found. The expected behavior is different: the system should
return a controlled authentication error without revealing whether
the email exists.

Debugging note
Requirement: AUTH-REQ-04
Expected: Invalid credentials return a safe authentication error.
Actual: Unknown email causes a server error.
Evidence: user is null before password comparison.
Root cause: code assumes the user lookup always returns a user object.
Smallest safe fix: check for missing user before password comparison.
Regression test: unknown email returns 401 with a generic error message.
The important lesson is not only the missing null check. The deeper
lesson is that the original requirement did not clearly define how the
system should behave when a login email is unknown. Once you
update the requirement and add the regression test, the AI agent
has less room to repeat the mistake.
PracticalWorkflow:DebuggingOneAI-
GeneratedFeature
| Step | Action | Output |
| --- | --- | --- |
| 1 | Reproduce the failure | A clear failure description |
| 2 | Collect logs, traces, and failing tests | Evidence |
| 3 | Compare evidence to | Gap or contradiction requirement |
| 4 | Ask AI for root-cause analysis only | Diagnosis |
| 5 | Patch one cause at a time | Controlled fix |
| 6 | Run old and new tests | Proof |
| 7 | Update spec and prevention note KeyTakeaways • AI-generated code often fails because of unclear requirements, missing edge cases, or hidden assumptions. • Debugging should start with evidence, not rewriting. • Logs and stack traces help you locate symptoms, but the root cause may be in the spec. • A good root-cause prompt asks for diagnosis before code changes. | Future guardrail |

• A fix is complete only when the code, tests, and specification
agree.
ReviewQuestions
1. Why should you avoid asking an AI agent to rewrite a feature
before you understand the bug?
2. What is the difference between a stack trace and a root cause?
3. Why should a bug fix update the test plan and the specification?
4. What information should you include in a root-cause prompt?
5. How can a debugging specification prevent repeated errors?
PracticalExercises
1. Write a debugging specification for a failed user registration
feature.
2. Create a root-cause prompt for a failing API endpoint that returns
the wrong status code.
3. List three assumptions an AI agent might make when building a
password reset feature.
4. Write one regression test idea for an expired session token.
5. Review one feature specification and identify where unclear
wording could lead to a bug.
InSummary
Debugging AI-generated software is not about fighting the agent. It
is about creating a disciplined path from failure to evidence, from
evidence to root cause, and from root cause to a small safe fix.
When you also update the tests and specifications, each bug
becomes a learning point for the project. In the next chapter, you
will use thesame discipline to review and refactor AI-generated code
without breaking the behavior you already proved.

Chapter 20
Code Review and Refactoring
with AI Agents
_____________________________________
_________________________________
AI-generated code can look complete even when it hides weak
assumptions, missing validation, poor boundaries, and unsafe error
handling. In this chapter, you learn how to review AI-built code
against the specification before you trust it. You also learn how to
refactor code safely without changing the behavior that your
requirements and tests already defined.
The goal is not to reject AI coding. The goal is to use AI with
engineering control. You will review first, refactor in small steps, and
keep every improvement connected to requirements, tests, and the
technical design.
LearningObjectives
Bytheendofthischapter,youwillbeableto:
ReviewAI-generatedcodeagainstrequirements,architecture,security,and
performanceexpectations.
Useapracticalchecklisttodetectmissingvalidation,unclearboundaries,and
hiddenbehaviorchanges.
AskanAIagentforfocusedreviewandrefactoringhelpwithoutgivingit
permissiontorewriteeverything.
RefactoranAPImodulesafelywhilepreservingbehaviorandtestcoverage.

Figure20.1:ReviewAIcodethroughlayeredqualitygates.
20.1WhyAICodeStillNeedsReview
AI agents can produce code quickly, but speed is not the same as
correctness. A generated module may compile, pass a few simple
tests, and still violate the product requirement, ignore a security
rule, or place logic in the wrong layer of the system.
Your job is to review the code as an engineer, not as someone
impressed by output. You compare the generated result against the
artifacts you already created: requirements, product specification,
technical specification, task list, test plan, and acceptance criteria.
A requirement tells you what behavior must exist.
A technical specification tells you where that behavior should
live.
A test plan tells you how the behavior should be verified.
A code review checks whether the implementation obeys all
three.
Practice Box: Beginner rule
Do not review AI code by asking, “Does it look okay?” Review it by
asking, “Which requirement, design decision, and test does this code
satisfy?”

20.2ReviewingCodeAgainstRequirements
The first review layer is requirement fit. Before you discuss style,
cleverness, or framework choices, confirm that the code actually
delivers the agreed behavior.
ReviewItem QuestiontoAsk
Requiredbehavior Doesthecodeimplementtheexactbehaviorfromthe
requirement,notaguessedversion?
Acceptancecriteria Canyoupointtotheconditionthatprovesthefeature
works?
Userrole Doesthecoderespectwhoisallowedtoperformthe
action?
Failurepath Doesthecodehandlewhathappenswhenthe
requirementcannotbecompleted?
Traceability CanyouconnectthecodetoarequirementIDor
taskID?
For example, if the requirement says a user must confirm their email
before accessing a project, an API endpoint that only checks
whether the user is logged in is incomplete. It may be working code,
but it is not requirement-complete code.
Prompt Box: Requirement review prompt
Review this code only against the listed requirements. Identify each
requirement that is fully satisfied, partially satisfied, missing, or
implemented with extra behavior that was not requested.
20.3ReviewingCodeAgainstArchitecture
The second review layer is architecture fit. AI agents often place
code where it is easiest to generate, not where it belongs. This can
create modules that work today but become hard to extend
tomorrow.
A clean architecture review asks whether each responsibility is in the
right place. Request handling should not contain deep business
rules. Database access should not be scattered across unrelated
files. Validation should not be hidden inside random helper functions.

Layer MainResponsibility
Endpointorcontroller Receiveinput,calltheservicelayer,returnthe
response.
Validationlayer Rejectinvalidinputbeforebusinesslogicruns.
Servicelayer Applybusinessrulesandcoordinatetheusecase.
Dataaccesslayer Readandwritedatathroughaclearboundary.
Errorhandlinglayer Turnexpectedfailuresintosafe,clearresponses.
When code crosses these boundaries, refactoring becomes harder.
You are not refactoring because the code is ugly. You are refactoring
because the structure no longer supports reliable change.
Figure20.2:ReviewinganAI-builtAPImodulebeforerefactoring.
20.4ReviewingSecurityandValidation
Security review checks whether the AI-generated code protects the
system from unsafe input, unauthorized actions, exposed secrets,
and confusing error messages. Validation review checks whether the
code rejects invalid data before it causes damage.

You do not need to be a security expert to start reviewing basic
issues. Begin with simple questions: who is allowed to do this, what
input is accepted, what input is rejected, and what information is
exposed when something fails?
SecurityArea ReviewQuestion
Authentication Doesthecodeconfirmwhotheuseris?
Authorization Doesthecodeconfirmwhattheuserisallowedto
do?
Inputvalidation Aremissing,malformed,ordangerousvaluesrejected
early?
Secrets Aretokens,keys,andcredentialskeptoutofsource
codeandlogs?
Errors Areerrorssafeanduseful?
Prompt Box: Security review prompt
Inspect this module for authentication, authorization, validation,
secrets exposure, and unsafe error handling. Do not rewrite the code
yet. Return a table of risks, severity, and suggested fixes.
20.5ReviewingPerformance
Performance review does not mean premature optimization. It
means checking whether the generated code contains obvious
choices that will slow down the system under normal use.
AI agents may generate repeated database queries, load too much
data, call external services inside loops, or perform expensive work
inside request handlers. These problems may not appear in a tiny
demo, but they matter when real users arrive.
PerformanceRisk WhattoCheck
Repeatedqueries Doesthecodequerythedatabaseinsidealoop?
Overfetching Doesitloadfieldsorrecordsthatarenotneeded?
Slowexternalcalls Doesonerequestdependonmanynetworkcalls?
Missinglimits Canauserrequestunlimitedrecords?

PerformanceRisk WhattoCheck
Blockingwork Shouldheavyworkmovetoabackgroundjob?
You should only refactor for performance when the change supports
a clear goal: faster response, lower cost, fewer failures, or simpler
scaling. Avoid asking the agent to optimize everything without a
target.
20.6RefactoringWithoutBreakingFeatures
Refactoring means improving the internal structure of code without
changing what the code does. This is important because AI-
generated code often starts as a working draft, not a maintainable
design.
Safe refactoring is controlled. You freeze the expected behavior,
change one part at a time, run tests, review the difference, and only
then continue. If the agent changes behavior while refactoring, you
stop and correct the instruction.
Figure20.3:SaferefactoringloopforAI-assistedcodechanges.
1.  Start with a passing test or a clear expected behavior statement.
2.  Choose one refactoring goal, such as separating validation from
business logic.
3.  Ask the agent to modify only the selected file or function.
4.  Run the relevant checks and compare behavior before and after.
5.  Accept the change only if the behavior remains correct.

Prompt Box: Safe refactoring prompt
Refactor only the selected API module. Preserve all existing behavior
and response shapes. Do not add new features. Separate validation
from business logic. After the refactor, explain what changed and list
which tests should still pass.
20.7CreatingaCodeReviewChecklist
A checklist turns code review into a repeatable habit. Without a
checklist, you may review whatever is easiest to notice. With a
checklist, you review what matters every time.
ChecklistItem PassCondition
Requirementfit Everyrequirementisfullyimplementedand
traceable.
Acceptancecriteria Eachacceptancecriterionhasamatchingtestor
manualcheck.
Architecture Responsibilitiesareplacedinthecorrectmoduleor
layer.
Validation Invalidinputisrejectedbeforebusinesslogicruns.
Security Authentication,authorization,secrets,anderrorsare
handledsafely.
Performance Noobviousloops,overfetching,orunlimitedqueries.
Readability Namesareclearandthecodecanbeexplained
simply.
Refactoringsafety Behaviorremainsunchangedafterrefactoring.
You can include this checklist directly in your project documentation.
When the agent produces code, paste the checklist into your review
prompt and require the agent to evaluate its own output before you
inspect it manually.
CodeReviewChecklistTemplate
CodeReviewChecklist
Featureormodule:
RequirementIDs:

TaskIDs:
Reviewer:
[]Requirementbehavioriscomplete.
[]Acceptancecriteriaarecovered.
[]Architectureboundariesarerespected.
[]Inputvalidationandauthorizationarepresent.
[]Errorsaresafeanduseful.
[]Performancerisksarechecked.
[]Testsstillpassafterrefactoring.

20.8PracticalExample:RefactoringanAI-
BuiltAPIModule
Now you will review and refactor a small API module. The example
is intentionally simple so you can see the process clearly. The feature
allows a user to create a task inside a project.
The requirement says: An authenticated project member can create
a task with a title inside a project. The title is required. The task
must belong to the selected project. A non-member must not create
a task in that project.
BeforeReview:AI-BuiltDraft
@app.post('/projects/{project_id}/tasks')
defcreate_task(project_id,request):
user=get_current_user(request)
data=request.json()
task=Task(
project_id=project_id,
title=data.get('title'),
status='todo'
)
db.session.add(task)
db.session.commit()
return{'id':task.id,'title':task.title,'status':task.status}
This code looks clean, but the review reveals serious gaps. It does
not reject an empty title. It does not check whether the user is a
member of the project. It does not handle missing or invalid input
clearly. It also mixes request handling, validation, business rules, and
persistence in one place.
Requirement	Review	Reason
Result
Titleisrequired	Missing	ThecodeacceptsNoneoranempty
title.

| Requirement | Review Result | Reason |
| --- | --- | --- |
| Onlyprojectmembers | Missing | Thecodegetstheuserbutnever cancreatetasks checksprojectmembership. |
| Taskbelongsto | Partial | Theproject_idisused,buttheproject selectedproject isnotverified. |
| Clearerrorhandling | Missing | Invalidrequestsdonotreturn controllederrors. |

AfterRefactoring:SaferStructure
defvalidate_task_input(data):
title=data.get('title','').strip()
ifnottitle:
raiseValidationError('Tasktitleisrequired.')
return{'title':title}
defcreate_task_for_project(project_id,user_id,data):
ifnotis_project_member(project_id,user_id):
raisePermissionError('Youcannotaddtaskstothisproject.')
clean_data=validate_task_input(data)
task=Task(project_id=project_id,title=clean_data['title'],status='todo')
db.session.add(task)
db.session.commit()
returntask
@app.post('/projects/{project_id}/tasks')
defcreate_task(project_id,request):
user=get_current_user(request)
try:
task=create_task_for_project(project_id,user.id,request.json())
return{'id':task.id,'title':task.title,'status':task.status}
exceptValidationErroraserror:
return{'error':str(error)},400
exceptPermissionErroraserror:
return{'error':str(error)},403
The refactored version is still compact, but it is easier to review.
Validation has a clear function. Business rules live in a service
function. The endpoint coordinates the request and response. The
code now matches the requirement more closely and gives you
better test targets.

Check ExpectedResult
Validationtest Emptytitlereturnsacontrolled400response.
Authorizationtest Non-memberreceivesa403response.
Successtest Projectmembercreatesataskwithstatustodo.
Structurereview Endpointdelegatesvalidationandbusinesslogic.
PracticalWorkflow:Reviewingand
RefactoringAICode
1.  Identify the requirement and acceptance criteria behind the code.
2.  Review the code for requirement fit before judging style.
3.  Check architecture boundaries and security rules.
4.  List defects as review comments, not vague complaints.
5.  Choose one safe refactoring goal.
6.  Ask the agent to refactor only that area.
7.  Run tests and compare behavior before accepting the change.
8.  Update the specification if the refactor introduces a clearer
structure.
KeyTakeaways
AI code still needs review because generated output can be
confident but incomplete.
Start review with requirements, then architecture, then
security, validation, performance, and maintainability.
Refactoring should improve structure without changing
agreed behavior.
Small, focused refactoring prompts are safer than broad
cleanup requests.
A checklist makes code review repeatable and easier for
beginners.

ReviewQuestions
1.  Why should you review AI-generated code against requirements
before reviewing style?
2.  What is the difference between reviewing architecture fit and
reviewing code formatting?
3.  Why is validation important before business logic runs?
4.  What makes a refactoring request unsafe for an AI agent?
5.  How does a checklist improve code review quality?
PracticalExercises
1.  Write three review questions for a login endpoint generated by
an AI agent.
2.  Create a code review checklist for a user registration feature.
3.  Take a small function from any project idea and list one safe
refactoring goal.
4.  Write a prompt that asks an AI agent to refactor code without
changing behavior.
InSummary
Code review is where you protect the quality of an AI-assisted
project. You do not trust code because it was generated quickly or
because it looks professional. You test it against the requirements,
the architecture, the security rules, and the expected behavior.
Refactoring helps you turn working draft code into maintainable
engineering code. When you refactor in small steps, keep tests
stable, and give the AI agent clear boundaries, you can improve the
design without losing control of the feature.
In the next part of your workflow, this review discipline becomes the
foundation for security-first engineering, reliability, deployment
planning, and long-term maintenance.

PartV
Security, Reliability, and
Production Workflows

Chapter 21
Security-First Spec-Driven
Engineering
Security is not a feature you add after the application works. It is a
set of rules you define before code is generated, before tests are
written, and before an AI agent starts changing files.
In this chapter, you will learn how to turn security from a vague
concern into clear requirements. You will define authentication rules,
authorization rules, validation rules, data protection rules, secrets
handling, and safe error behavior. By the end, you will have a
reusable security specification template you can place directly inside
your project documentation.
LearningObjectives
Bytheendofthischapter,youwill
Whyitmatters
beableto
Writesecurityrequirementsbefore AIagentsneedclearlimitsbefore
implementationbegins. theygeneratecode.
Separateauthenticationfrom Auserbeingsignedindoesnotmean
authorization. theusercandoeverything.
Definevalidation,dataprotection,and Theserulespreventcommonsecurity
secretsrules. gapsfromenteringgeneratedcode.
Youcanhelpuserswithoutexposing
Reviewsecureerrorhandling.
internalsystemdetails.
Createasecurityspecificationfora Youwillhaveareusablepatternfor
SaaSapplication. realprojects.

Figure21.1:Securityiseasiertobuildwhenitstartsinthe
specification.
21.1WhySecurityMustStartinthe
Specification
When you ask an AI agent to build a feature, the agent usually
focuses on visible behavior first. If the request says “create a login
page,” the agent may build a form, a route, and a simple success
response. But it may not automatically define session expiry, role
checks, password rules, rate limits, secret handling, or safe error
messages.
That is why security must start in the specification. A specification
tells the agent what must be protected, who can perform each
action, what inputs are allowed, what data must never leak, and
what the system should do when something goes wrong.
Practice Box: Beginner rule
Donotwrite“makeitsecure”asarequirement.Writetheexactsecurity
behavioryouexpect.Aclearsecurityrulecanbereviewed,tested,and
implemented.Avaguesecuritywishcannot.
A security-first specification does not make you a security expert
overnight. It gives you a practical way to avoid common mistakes by
writing protective rules early enough for the AI agent to follow them.
21.2AuthenticationRequirements
Authentication answers one question: who are you? Before your
system allows a user to access protected data, it must identify that
user in a reliable way.

For a beginner, the simplest way to think about authentication is
this: the system should never assume identity. It must verify identity,
create a controlled session, and end that session safely when
needed.
| Authentication | Requirement | Examplesecurity |
| --- | --- | --- |
| area | question | requirement Ausermustsigninwithaverified Howdoesausersign Accountaccess emailandpasswordbefore in? accessingprivateprojectdata. Howlongshould Asessionmustexpireaftera Sessionlifetime accesslast? definedperiodofinactivity. Howarepasswords Plain-textpasswordsmustnever Passwordhandling protected? bestoredorlogged. Passwordresetlinksmustexpire Howcanaccessbe Accountrecovery andmustnotrevealwhetheran recovered? accountexists. Ausermustbeabletoendthe |
| Logout | Howdoesaccessend? | currentsessionfromtheaccount menu. Prompt Box: Authentication prompt Usingtheproductrequirementsbelow,identifyeveryplacewherethesystem mustverifyuseridentity.Converteachidentityrequirementintoaclear authenticationrule,acceptancecriterion,andtestidea.Donotinventextra features. 21.3AuthorizationandRole-BasedAccess Control Authorization answers a different question: what are you allowed to do? A user may be authenticated but still not allowed to perform a specific action. Role-based access control, often shortened to RBAC, is a practical way to define permissions. Instead of writing a separate rule for every user, you define roles such as Owner, Admin, Member, and Viewer. Each role receives a specific set of allowed actions. |

Figure21.2:Authenticationverifiesidentity;authorization
controlsallowedactions.
| Action | Owner | Admin | Member | Viewer |
| --- | --- | --- | --- | --- |
| Createproject | Yes | Yes | No | No |
| Createtask | Yes | Yes | Yes | No |
| Editanytask | Yes | Yes | No | No |
| Editowntask | Yes | Yes | Yes | No |
| Inviteusers | Yes | Yes | No | No |
| Viewbilling | Yes A role table is useful because it gives the AI agent a precise boundary. The agent does not need to guess whether a Member can invite users. The table already says no. # Defensive authorization example for a task feature # The rule is simple: check the user's role before allowing the action. ALLOWED_TO_CREATE_TASK = {"owner", "admin", "member"} def can_create_task(user, project): if user is None: return False if user.project_id != project.id: return False return user.role in ALLOWED_TO_CREATE_TASK 21.4InputValidation Input validation checks whether data entering your system follows the rules you defined. Every form, API request, file upload, search field, and configuration value is an input boundary. | No | No | No |

A strong specification tells the AI agent what valid input looks like
before code is written. Without those rules, the agent may accept
anything that fits the data type, even if it breaks the business logic.
| Input | Validationrule Returnaclearmessage: Required;3to120characters; “Tasktitlemustbe Tasktitle trimmedbeforesaving. between3and120 characters.” Optional;whenprovided,mustbe Returnavalidationerror Taskduedate avalidfuturedate. withoutsavingthetask. Returnasafenot-found Required;mustbelongtoaproject ProjectID oraccess-denied thecurrentusercanaccess. response. Mustmatchanapprovedrole Rejectunknownrole Userrole value. values. Practice Box: Validation rule Validationshouldhappenatsystemboundaries.Donotrelyonlyonthe frontend.ThebackendmustalsovalidatebecauseAPIrequestscancomefrom outsidethevisibleuserinterface. 21.5DataProtection Data protection means deciding what information your system collects, how it stores that information, who can access it, how long it is kept, and where it must not appear. You should define data protection rules before implementation because AI-generated code may otherwise log too much information, return sensitive fields in API responses, or store data that the product does not actually need. Dataprotection Specification Examplerule area question Donotcollectpersonaldata | Errorbehavior |
| --- | --- | --- |
| Dataminimization | Doyouneedthisdata? | thatisnotneededforthe feature. Sensitiveaccountdatamustbe Howshoulddatabe Storage protectedusingapproved stored? storagemechanisms. |
| Transport | Howdoesdatamove? | Privateuserdatamustonlybe sentthroughprotected |

Dataprotection Specification
Examplerule
area question
applicationchannels.
Whatmustnotbe Donotlogpasswords,tokens,
Logging
logged? resetlinks,orfullsecretvalues.
Deletedprojectdatashould
Retention	Howlongisdatakept?	followtheretentionruledefined
intheproductspecification.
21.6SecretsManagement
Secrets are values that allow access to protected systems. Examples
include API keys, database passwords, signing keys, and private
tokens. A secret should never be hardcoded into source code,
templates, screenshots, logs, or example output.
In a book project or beginner project, it is tempting to paste real-
looking keys into examples. Do not do that. Use placeholders and
document where the real value should be configured in a safe
environment.
# Example environment template with placeholders only
# Keep this inside documentation as a pattern, not as real credentials.
APP_ENV=development
DATABASE_URL=<set_in_your_local_environment>
JWT_SIGNING_KEY=<set_in_your_local_environment>
EMAIL_API_KEY=<set_in_your_local_environment>
Prompt Box: Secrets prompt
Reviewthisspecificationandidentifyeveryvaluethatshouldbetreatedasa
secret.Foreachone,statewhereitshouldbeconfigured,whereitmustnot
appear,andhowthecodeshouldrefertoitwithoutexposingit.
21.7SecureErrorHandling
Error handling has two responsibilities. It should help the user
recover, and it should protect the system from exposing internal
details.
A raw stack trace, database message, private path, token value, or
configuration detail should not be returned to the user. The system
can log useful technical information internally while showing a safe,
simple message externally.

Figure21.3:Secureerrorhandlingkeepsinternaldetails
separatefromusermessages.
Problem	Unsaferesponse	Saferresponse
Detailedaccountor Theemailorpasswordis
Loginfailed
passwordreason. incorrect.
Internalpermissionrule Youdonothavepermission
Accessdenied
details. toperformthisaction.
Stacktraceordatabase Somethingwentwrong.
Serverfailure
error. Pleasetryagainlater.
Thesubmittedvaluedoes
Rawparserorframework
Validationfailure notmatchtherequired
error.
format.
21.8SecurityReviewChecklist
A checklist turns security review into a repeatable process. You
should use it before implementation, after AI-generated code is
produced, and again before deployment.
SecurityReviewChecklistTemplate
[ ] Every protected feature has an authentication requirement.
[ ] Every sensitive action has an authorization rule.
[ ] Role permissions are documented in a table.
[ ] User input rules are specific and testable.
[ ] Backend validation is required, not only frontend validation.
[ ] Sensitive data is not logged or returned unnecessarily.
[ ] Secrets are not stored in source code or examples.

[ ] Error messages are safe for users and useful enough for
recovery.
[ ] Security requirements are linked to tests.
[ ] The AI agent has clear instructions not to add unapproved
access paths.
21.9PracticalExample:WritingaSecurity
SpecforaSaaSApp
Now you will turn a basic SaaS requirement into a security
specification. The example uses the same style of project you have
seen in earlier chapters: a project management application where
users create projects and tasks.
Example Box: Raw product requirement
Ausershouldbeabletoinviteteammemberstoaprojectandassigntasksto
them.
That requirement is not enough for implementation. It tells you the
visible feature, but it does not define who is allowed to invite users,
what role the invited user receives, what data is exposed, or what
happens when an unauthorized user tries the same action.
Securityarea Securityspecification
Authentication Onlysigned-inuserscaninviteteammembers.
OnlyprojectOwnersandAdminscaninviteuserstothe
Authorization
project.
Theinvitermustselectoneapprovedrole:Admin,
Roleassignment
Member,orViewer.
Theinviteemailisrequired,mustbeavalidemail
Validation
format,andmustnotalreadybelongtotheproject.
Invitationtokensmustnotappearinlogsoruser-facing
Dataprotection
errormessages.
Unauthorizedusersreceiveasafeaccess-denied
Secureerrors
response.
Testsmustcoverallowedinviter,disallowedinviter,
Testing
invalidemail,duplicateinvite,andsafeerrorresponse.

SecuritySpecificationExcerpt
Feature: Invite team member to project
Requirement ID: SEC-INVITE-001
Only authenticated project Owners and Admins can invite a new team member.
Acceptance criteria:
1. A signed-out user cannot send an invitation.
2. A Viewer cannot send an invitation.
3. A Member cannot send an invitation.
4. An Owner or Admin can invite a user with a valid email address.
5. The system does not expose invitation tokens in logs or error messages.
6. Unauthorized requests return a safe access-denied response.
Prompt Box: Agent prompt for the example
Usingthesecurityspecificationabove,createonlythetestsfortheinvite-team-
memberfeature.Donotimplementthefeatureyet.Includetestsfor
authentication,authorization,validation,duplicateinvites,andsafeerror
responses.
This is the core pattern of security-first engineering: write the
protective rule, connect it to acceptance criteria, generate tests,
then implement the code against those tests. The agent should not
decide the security policy. You decide the policy in the specification.
KeyTakeaways
Security must be written into the specification before
implementation begins.
Authentication verifies identity; authorization controls allowed
actions.
Role tables make permission rules easier for you and the AI
agent to follow.
Input validation should be defined at every system boundary.
Secrets must use placeholders in documentation and safe
configuration in real projects.
Secure error handling helps users without exposing internal
details.

ReviewQuestions
1. Why is “make it secure” not a useful requirement?
2. What is the difference between authentication and authorization?
3. Why should backend validation still exist when the frontend
already validates input?
4. What types of values should be treated as secrets?
5. What makes an error message safe?
PracticalExercises
Exercise Whatyoushouldproduce
Writethreeauthentication
Ashortlistofidentityrulesandexpected
requirementsforasimpletask
behavior.
app.
CreatearoletableforOwner,
Apermissionmatrixforatleastsixactions.
Admin,Member,andViewer.
Writevalidationrulesfora
Fieldrulesandsafeerrormessages.
create-projectform.
Writeasecurityspecificationfor Authentication,authorization,validation,
deletingaproject. dataprotection,andtestideas.
InSummary
Security-first spec-driven engineering means you do not wait for the
AI agent to guess what safe behavior should look like. You define
the security rules before code generation begins.
In this chapter, you learned how to specify authentication,
authorization, validation, data protection, secrets management, and
secure error handling. You also created a reusable security review
checklist and saw how to turn a SaaS feature into a clear security
specification.
The next chapter continues this production mindset by focusing on
reliability and error handling, where you will design software that
behaves predictably even when things go wrong.

Chapter 22
Reliability and Error Handling
_______________________________________________________
_________________
Reliable software does not only work when everything is perfect. It
keeps behaving safely when users make mistakes, networks fail,
databases slow down, background jobs crash, or an external service
becomes unavailable.
In this chapter, you will learn how to describe reliability before code
generation begins. You will define failure states, recovery paths,
logging rules, retry behavior, timeouts, queues, and user-friendly
error messages so an AI coding agent has clear engineering rules to
follow.
LearningObjectives
Bytheendofthischapter,you
Whyitmatters
willbeableto
Define reliability in practical software You can avoid vague goals such as "make it
terms. stable" and replace them with testable
behavior.
Plan how your system should behave when You can guide AI-generated code toward
something fails. safe recovery instead of random error
handling.
Write logging, timeout, retry, queue, and You can make failures visible, diagnosable,
error-message requirements. and recoverable.
Create a reliability specification template. You can reuse the same reliability planning
method in future projects.

Figure22.1:Reliabilityimproveswhenfailurebehavioris
specifiedbeforeimplementation.
22.1WhatReliableSoftwareMeans
Reliable software is not software that never fails. Every real system
can fail. Reliable software fails in controlled, understandable, and
recoverable ways.
When you work with AI coding agents, this distinction matters. If
you only ask an agent to build a feature, it may focus on the happy
path. The happy path is the normal situation where every input is
valid, every service responds, and every database operation
succeeds. Real users and real systems do not stay on the happy
path for long.
In spec-driven AI engineering, you define reliability as behavior. You
describe what the system should do when the normal path breaks.
Reliability
Whatyouspecify Simpleexample
quality
Availability	Whether the feature should keep	If the notification service
responding when one part slows fails, the main task should
down. still be saved.
Recoverability	How the system returns to a safe	If payment confirmation fails,
state after failure. mark the order as pending
instead of successful.

Reliability
Whatyouspecify Simpleexample
quality
| Observability | What the system records so you can understand a failure. user role, and error type. | Log the request ID, action, |
| --- | --- | --- |
| Predictability | How the system behaves | Invalid input always returns consistently under known failure the same validation response conditions. format. |
| User clarity | What the user sees when something goes wrong. withoutexposing stack traces or secrets. 22.2DesigningforFailure Designing for failure means you assume that some part of the system will eventually fail. This does not make your design negative. It makes your design realistic. Before implementation, ask a simple question for each important feature: “What can go wrong here, and what should the system do next?” SpecRule Donotdescribereliabilityasageneralwish.Writeitasaspecificrule:“IfX fails,thesystemmustdoY,recordZ,andshowmessageM.” | Show a helpful message |
| Failuresource | Questiontoask | Examplerecoveryrule |
| User input | What if the user enters missing, invalid, or unexpected data? level validation messages. | Reject the request with field- |
| Database | What if the database write fails or takes too long? retry-safe error and log the failure. | Do not show success. Return a |
| Network | What if the request times out? the user to try again safely. | Use a timeout rule and allow |
| External service | What if a third-party API is | Queue the action for later or unavailable? mark it as pending. |
| Background job | What if the job fails after the user has left the page? and expose the final result. | Store job status, retry if safe, |

22.3ErrorStatesandRecoveryPaths
An error state is a named situation where the system cannot
continue normally. A recovery path is the rule that explains how the
system should respond.
Do not let an AI agent invent recovery behavior while it is coding.
Give it a small map of the expected failure states first.
Figure22.2:Everyimportanterrorstateshouldhavea
recoverypath.
| Errorstate | Recoverypath | Whattotest |
| --- | --- | --- |
| Invalid login input | Reject the request and show clear field-level feedback. password returns a validation error. | Submitting an empty |
| Wrong credentials | Return a safe message without revealing which field was wrong. password produces the same message. | Incorrect email or |
| Database timeout | Stop the request, log the timeout, and ask the user to try again. not show successful login. | A simulated timeout does |
| Expired session | Redirect the user to login and preserve the next safe destination. instead of crashing. | A protected route redirects |

22.4LoggingRequirements
Logging is how your software tells you what happened. Without
logs, debugging becomes guesswork. With poor logs, you may have
data but still not understand the failure.
A good reliability specification tells the AI agent what to log, when to
log it, and what must never be logged. This is especially important
for security because logs should not expose passwords, tokens,
private keys, or sensitive personal data.
Logrequirement Goodpractice
Event name Use a clear name such as AUTH_LOGIN_FAILED or
JOB_RETRY_SCHEDULED.
Severity Use levels such as info, warning, error, or critical consistently.
Request or correlation ID Attach a request ID so related events can be traced together.
Safe context Log user ID, role, and action when useful, but avoid secrets
and raw credentials.
Failure reason Record the error type or safe error code, not a full sensitive
dump.
Outcome Record whether the system recovered, retried, queued, or
stopped safely.
PromptBox:AskAIforLoggingRules
Usingthereliabilityrequirementsbelow,proposesafeloggingrulesforthis
feature.Includeeventnames,severitylevels,usefulcontextfields,andfields
thatmustneverbelogged.Donotwriteimplementationcodeyet.
22.5RetryLogicandTimeouts
A retry means the system tries an operation again after it fails. A
timeout means the system stops waiting after a defined period. Both
are useful, but both can cause problems when they are not
specified.
If an AI agent adds retries without rules, it may retry unsafe
operations, create duplicate records, or hide real problems. Your

specification should explain which operations are safe to retry and
which operations must stop immediately.
Decision Beginner-friendlyrule
Timeout Set a maximum wait time so the system does not hang forever.
Retry count Limit retries. Do not retry endlessly.
Retry delay Wait briefly before retrying instead of hammering the same
service.
Idempotency Only retry operations that will not create duplicate harmful effects.
Stop condition Define when the system should give up and report a controlled
failure.
Reliability Rule Example: External Email Service
- Timeout: stop waiting after 5 seconds.
- Retry: retry up to 2 times for temporary network errors.
- Do not retry: invalid email address or rejected permission.
- If retries fail: mark the email as pending_review.
- Log: EMAIL_SEND_FAILED with request_id, user_id, and safe error_code.
- User message: "Your action was saved, but the email could not be sent yet."
22.6BackgroundJobsandQueues
A background job is work that happens outside the immediate user
request. A queue is the place where that work waits until a worker
process handles it.
Background jobs are useful for slow or unreliable work such as
sending emails, processing uploads, generating reports, syncing
records, and calling third-party services. They make the user
experience smoother, but they also require reliability rules.

Figure22.3:Abackgroundjobneedsstatus,retries,failure
handling,andlogs.
Queuerequirement Whatyoudefine
Job name What work the job performs.
Trigger What event creates the job.
Input data The minimum safe data the job needs.
Retry rule When and how the job should retry.
Failure state What status is stored if the job cannot complete.
User visibility Whether the user can see pending, failed, or completed
status.
22.7User-FriendlyErrorMessages
A user-friendly error message explains what happened in plain
language and tells the user what they can do next. It should not
expose internal technical details.
This is another area where specs are important. If you do not
specify user-facing error behavior, an AI agent may return raw
exception text, confusing messages, or inconsistent responses.
| Weakmessage | Bettermessage | Whyitisbetter |
| --- | --- | --- |
| DatabaseError: | We could not save your | It is understandable and |
| connection refused | changes right now. Please try | does not reveal internals. |

| Weakmessage | Bettermessage again. | Whyitisbetter |
| --- | --- | --- |
| Invalid request | Please enter a project name | It tells the user exactly what before saving. to fix. |
| Unauthorized | You do not have permission to edit this project. without exposing security details. | It explains the problem |
| Job failed | Your report could not be generated. You can try again or contact support. | It gives a next action. |

22.8ReliabilitySpecificationTemplate
A reliability specification gives your AI agent the rules it needs
before implementation. You can place this template inside your
specifications folder or include it directly under a feature
specification.
Reliability Specification Template
Feature Name:
Requirement ID:
Normal Behavior:
Important Failure States:
- Failure State 1:
- Trigger:
- Recovery Path:
- User Message:
- Log Event:
- Test Case:
- Failure State 2:
- Trigger:
- Recovery Path:
- User Message:
- Log Event:
- Test Case:
Timeout Rules:
Retry Rules:
Background Job Rules:
Queue Failure Rules:
Data Safety Rules:
Monitoring or Alerting Notes:
Definition of Done:
- All expected failure states are handled.
- Logs are safe and useful.

- User-facing errors are clear.
- Tests cover normal behavior and failure behavior.
PracticalExample:ReliabilitySpecforReport
Generation
Imagine your SaaS application lets a user generate a project report.
The normal behavior is simple: the user clicks Generate Report, the
system creates a background job, and the report becomes available
when the job completes.
The reliability behavior is where the feature becomes production-
ready. The system must handle slow processing, job failure, missing
data, and user visibility.
Specitem Example
Normal behavior When a user requests a report, the system creates a background
job and shows Pending.
Timeout rule If report generation takes longer than 60 seconds, keep the job
pending and continue in the background.
Retry rule Retry up to 2 times if the failure is temporary.
Failure state If all retries fail, mark the report as Failed and allow the user to try
again.
Log event REPORT_GENERATION_FAILED with request_id, project_id,
user_id, and safe error_code.
User message Your report could not be generated. Please try again.
Test case Simulate a worker failure and confirm the report status changes to
Failed.
AIAgentInstruction
Implementthereportgenerationreliabilitybehaviorexactlyasspecified.Donot
inventadditionalfailurestates.Addtestsforpending,completed,failed,retry,
anduser-visiblestatusbehaviorbeforechangingproductioncode.

ReliabilityReviewChecklist
Check Yes/No
Each important feature has known failure states.
Each failure state has a recovery path.
Timeouts are defined for slow operations.
Retry rules are limited and safe.
Background jobs have status and failure handling.
Logs are useful and do not expose secrets.
User-facing error messages are clear and safe.
Tests cover both normal behavior and failure behavior.
ReviewQuestions
1.Why is reliable software not the same as software that never
fails?
2.What is the difference between an error state and a recovery
path?
3.Why can uncontrolled retry logic create new problems?
4.What should you avoid placing in logs?
5.Why should user-facing error messages be specified before
implementation?
PracticalExercises
Exercise Whattodo
Exercise 1 Choose one feature from your current project and list three possible
failure states.
Exercise 2 Write a recovery path, log event, and user message for each failure
state.
Exercise 3 Use the reliability specification template to write a complete reliability
spec for a file-upload feature.
Exercise 4 Ask an AI agent to review your reliability spec and identify missing
failure states before you ask it to write code.

InSummary
Reliability is not something you add after coding. You design it by
defining what should happen when normal behavior breaks.
In this chapter, you learned how to specify failure states, recovery
paths, logging rules, retry behavior, timeouts, queues, and user-
friendly error messages. You also created a reusable reliability
specification template that can guide AI coding agents before
implementation begins.
In the next chapter, you will continue building production discipline
by planning deployment and DevOps workflows. You will learn how
to prepare an AI-built application for environments, configuration,
CI/CD, containers, migrations, rollback, and release checks.

Chapter 23
Deployment Planning and
DevOps Workflows
A software feature is not finished when the code works on your
machine. It is finished when it can be released safely, configured
correctly, monitored after launch, and rolled back if something goes
wrong. This chapter shows you how to plan deployment before you
ask an AI agent to produce production-ready code.
Inthepreviouschapter,youlearnedhowreliabilityanderrorhandlingprotect
softwarefromexpectedfailure.Inthischapter,youturnthatthinkingintoa
releaseworkflow.Youwillplanenvironments,configuration,CI/CD,containers,
databasemigrations,rollback,anddeploymentchecksbeforeimplementation
reachesproduction.
Thegoalissimple:youshouldneverletanAIagentbuildcodethathasno
clearpathtorelease.
LearningObjectives
Bytheendofthischapter,youwill
Whyitmatters
beableto...
YourAIagentcanbuildtowardreal
Plandeploymentbefore
releaseconstraintsinsteadofonly
implementationbegins.
localexecution.
Defineenvironments,configuration, Youreducesurpriseswhenmoving
andreleasegates. fromdevelopmenttoproduction.
DescribeCI/CDwithoutdependingon Youcanunderstandtheworkflowasa
anexternalrepository. repeatableengineeringprocess.
PrepareDocker,databasemigration, Youmakereleasessaferandeasierto
androllbackplans. recoverfrom.
UseadeploymentchecklistforAI-built Youturndeploymentintoacontrolled
applications. qualitygate.

23.1WhyDeploymentMustBePlannedEarly
Deployment planning should not wait until the end of a project. If
you wait until the code is already written, you may discover that the
application depends on hard-coded settings, manual database
changes, missing environment variables, or assumptions that only
work on one machine.
In spec-driven AI engineering, deployment planning starts before
code generation because deployment affects design. A feature may
need configuration values, health checks, startup scripts, database
migrations, background workers, or logging rules. If those needs are
not written down, an AI agent may ignore them.
PracticalRule
DonotaskanAIagentto“makethisproductionready”afterthecodeisalready
messy.Instead,givetheagentdeploymentrequirementsbeforeimplementation
begins.
Figure23.1:Deploymentplanninggivesyouacontrolled
releaseloopinsteadofariskyfinalstep.
A deployment plan answers five beginner-friendly questions:
Wherewilltheapplicationrun?
Whatconfigurationdoesitneed?
Howwillitbebuiltandtestedbeforerelease?
Howwillyouknowthedeploymentsucceeded?
Howwillyourecoverifitfails?

23.2EnvironmentSetup
An environment is a place where your application runs under a
specific purpose. You can keep this simple. You do not need a
complex cloud platform to understand the idea. You only need to
separate “where you build” from “where you verify” and “where
users depend on the result.”
Figure23.2:Areleaseshouldmovethroughenvironmentsonly
afterpassingcleargates.
For most beginner projects, you can start with three environments:
| Environment | Purpose | TypicalData Youbuildandrun Fastchangesare | ReleaseRule |
| --- | --- | --- | --- |
| Local | theappwhile | Smallfakedata allowed. developing. Yourunautomated Onlytested Controlled |  |
| Test | checksandverify sampledata expectedbehavior. forward. Realusersdepend Onlyreviewed, | changesmove |  |
| Production | onthis | Realuserdata environment. changesenter. BeginnerTranslation Anenvironmentisnotjustaserver.Itisapromiseabouthowcarefullycode shouldbehandledinthatplace.Localcanbeflexible.Productionmustbe controlled. | deployable |

23.3ConfigurationManagement
Configuration means the values that change between environments
without changing the code. Examples include database connection
strings, API URLs, feature flags, log levels, upload limits, and email
provider settings.
Good configuration management prevents a common AI-generated-
code mistake: placing environment-specific values directly inside
source files. When values are hard-coded, youcannot safely move
the same application between local, test, and production.
Self-containedexample:environmentvariabletemplate
# .env.example
APP_ENV=local
APP_PORT=3000
DATABASE_URL=replace_with_environment_database_url
JWT_SECRET=replace_with_secure_secret
LOG_LEVEL=info
FEATURE_REPORT_EXPORT=false
A configuration specification should define each value before
implementation. Use a small table like this:
Security
| ConfigKey | Purpose | ExampleValue Note Identifiesthe |
| --- | --- | --- |
| APP_ENV | current | local/test/production Notsecret. environment. |
| Connectstheapp | databaseconnection DATABASE_URL | Secretin |
| toitsdatabase. | string | production. Signs Mustneverbe |
| JWT_SECRET | authentication | longrandomvalue printedin tokens. logs. Controlslogging Avoiddebug LOG_LEVEL info/warn/error detail. inproduction. 23.4CI/CDPipelinePlanning CI/CD means continuous integration and continuous delivery. In simple terms, it is a repeatable path that checks your code before release. You can use hosted tools for this, but the concept does not |

depend on any one platform. The book keeps it self-contained by
focusing on the workflow, not on a required external service.
A useful pipeline for an AI-built project should answer: what must
pass before the code is allowed to move forward?
| Pipeline | QuestionIt Gate | Example |
| --- | --- | --- |
| Stage | Answers Cantheproject Nomissing | Command |
| Install | dependenciesbe dependencies. installed? Doesthecode Noblockingstyleor Lint npmrunlint followbasicrules? syntaxerrors. Doesexpected Allrequiredtests Test npmtest behaviorstillwork? pass. Cantheappbe Buildcompletes | npminstall |
| Build | packagedfor withouterrors. release? Doestheappstart Basicendpointor SmokeTest npmrunsmoke andrespond? pageworks. PromptBox:AsktheAgentforaPipelinePlan Usethispromptafteryouhaverequirements,technicalspecs,andatestplan: “Usingtherequirements,technicalspecification,andtestplanbelow,createa simpledeploymentpipeline.Includeinstall,lint,test,build,smoketest, deploymentverification,androllbackreadiness.Donotassumeanyexternal repository.Keepthestepsexecutablefromtheprojectfolder.” 23.5DockerandContainerization A container packages an application with the runtime instructions it needs to run consistently. Docker is a common container tool. You do not need to become a DevOps expert to understand the value: a container reduces the gap between “it works here” and “it works there.” In a spec-driven workflow, you should tell the AI agent what the container must do. Do not only ask for “a Dockerfile.” Describe the runtime, port, build command, startup command, environment variables, and health check expectations. | npmrunbuild |

Self-containedexample:basicDockerfile
# Example Dockerfile for a simple Node.js web app
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
This example is intentionally simple. In a real project, your final
container design should match your application type, security
requirements, and deployment environment. The important lesson is
that container behavior should be specified before the agent writes
release files.
23.6DatabaseMigrationPlanning
A database migration is a controlled change to your database
structure. For example, adding a table, renaming a column, creating
an index, or adding a required field. Migrations are risky because the
code and the database must change in the correct order.
AI-generated code may create models or queries but forget the
release path. Your job is to require migration planning in the
specification.
MigrationQuestion	WhyItMatters	SpecExample
Rollbackisharderifthe
Isthemigration Provideanupanddown
schemacannotreturnto
reversible? migration.
apreviousstate.
Backfillmissingvalues
Oldrowsmaynotfit
Willexistingdatabreak? beforemakingthefield
newrules.
required.
Acodechangemay Deployschemachange
Cancodeanddatabase
expectacolumnthat beforecodethat
deploysafely?
doesnotexistyet. dependsonit.
Somechangeslock Useastagedmigration
Isdowntimerequired?
tablesorinterruptusers. forlargetables.
DeploymentCaution

MigrationQuestion	WhyItMatters	SpecExample
Nevertreatdatabasechangesasordinarycodechanges.Abrokenfilecanbe
fixedandredeployed.Acarelessdatabasechangecandamageproductiondata.
Yourspecshouldforcetheagenttoplanmigrationscarefully.
23.7RollbackStrategy
Rollback means returning to a previous safe version after a release
causes problems. A rollback strategy should exist before deployment
begins. If you only start thinking about rollback after users are
affected, you are already late.
Figure23.3:Arollbackdecisionshouldbebasedonclear
healthchecksanderrorlimits.
A basic rollback strategy should include:
thelastknownstableversion,
thecommandormanualstepforrestoringit,
thedatabaserollbackrule,
thehealthchecksthattriggerrollback,
thepersonorroleresponsibleforapprovingrollback,and
thecommunicationmessageifusersareaffected.

23.8DeploymentChecklist
A checklist turns deployment from a stressful memory test into a
repeatable engineering process. You can use the following checklist
directly inside your own projects.
Check	Question	Status
Doreleasedfeatures
Notstarted/Ready/
Requirements matchapproved
Blocked
requirements?
Dounit,integration,and
Notstarted/Ready/
Tests keyend-to-endtests
Blocked
pass?
Arerequiredenvironment Notstarted/Ready/
Configuration
variablesdocumented? Blocked
Aresecretsstoredoutside Notstarted/Ready/
Secrets
sourcecode? Blocked
Doestheproductionbuild Notstarted/Ready/
Build
completesuccessfully? Blocked
Aredatabasechanges
Notstarted/Ready/
Migration plannedandreversible
Blocked
wherepossible?
Arelogsanderrorchecks
Notstarted/Ready/
Monitoring availableafter
Blocked
deployment?
Istherollbackpathclear Notstarted/Ready/
Rollback
beforerelease? Blocked
23.9PracticalExample:PreparinganAI-Built
AppforDeployment
Imagine you have used the spec-driven process to build a smalltask
management app. The app allows users to register, log in, create
projects, add tasks, and mark tasks as complete. Before deployment,
you prepare a release plan instead of asking the AI agent to guess
the final steps.

Step1:DefinetheReleaseGoal
Releasegoalexample
Release Goal
Deploy version 1.0 of ProjectBoard so authenticated users can create projects,
create tasks under projects, and update task status from todo to done.
Release must include:
- login and registration
- project CRUD
- task CRUD
- basic dashboard page
- production configuration template
- smoke test for /health
Step2:DefineEnvironmentConfiguration
Configurationexample
Required configuration
APP_ENV=production
DATABASE_URL=<production database URL>
JWT_SECRET=<secure random value>
LOG_LEVEL=info
APP_BASE_URL=<production application URL>
Step3:DefinetheDeploymentPipeline
1.Installdependencies.
2.Runlintingandstaticchecks.
3.Rununitandintegrationtests.
4.Buildtheproductionapplication.
5.Applydatabasemigrations.
6.Starttheapplication.
7.Runasmoketestagainstthehealthendpoint.
8.Monitorlogsforthefirstreleasewindow.

Step4:GivetheAIAgentaControlled
DeploymentTask
Agenttaskprompt
Task for AI Agent
Using the approved technical specification and deployment checklist,
create the deployment support files for ProjectBoard.
You must produce:
1. A production environment variable template.
2. A simple Dockerfile.
3. A smoke test script for /health.
4. A deployment checklist in markdown.
5. A rollback note explaining how to return to the previous stable version.
Do not change application behavior unless a required deployment file exposes a missing
requirement.
Step5:ReviewBeforeRelease
Before release, you check that the agent did not introduce hidden
behavior changes. You compare the generated files against your
requirements, technical specification, test plan, and security rules. If
anything is missing, you update the deployment task rather than
letting the agent improvise.
WhatThisExampleTeaches
Deploymentisnotafinalbuttonpress.Itisachainofdecisions.Whenyou
writethosedecisionsdown,yourAIagentcanhelpyoupreparetherelease
withoutinventingunsafeshortcuts.

DeploymentPlanningTemplate
Use this template whenever you prepare an AI-built application for
release.
Reusabletemplate
Deployment Planning Template
1. Release name:
2. Release goal:
3. Approved requirements included:
4. Environments:
- Local:
- Test:
- Production:
5. Required configuration values:
6. Secrets that must not appear in code:
7. Build command:
8. Test command:
9. Database migration plan:
10. Deployment steps:
11. Smoke test:
12. Monitoring checks:
13. Rollback steps:
14. Final approval checklist:
KeyTakeaways
Deploymentplanningshouldbeginbeforecodegeneration,notafter
implementation.
Configurationshouldchangebetweenenvironmentswithoutchanging
sourcecode.
CI/CDisarepeatablequalityworkflow,evenwhenyouarenotusinga
hostedplatform.
Containershelpmakeruntimebehaviormoreconsistentacross
environments.
Databasemigrationsneedspecialplanningbecausetheycanaffect
productiondata.
Rollbackplanningispartofresponsibledeployment,notasignoffailure.

ReviewQuestions
1.Whyshoulddeploymentbeplannedbeforeimplementationbegins?
2.Whatisthedifferencebetweenlocal,test,andproductionenvironments?
3.Whyshouldconfigurationvaluesnotbehard-codedintosourcefiles?
4.WhatdoesaCI/CDpipelinecheckbeforedeployment?
5.Whyaredatabasemigrationsmoreriskythanordinarycodechanges?
6.Whatinformationshouldarollbackplancontain?
PracticalExercises
1.Writeadeploymentchecklistforasmallnotesapplicationwithloginand
notecreation.
2.Createaconfigurationtablewithatleastsixenvironmentvariablesfora
SaaSapp.
3.WriteapromptthatasksanAIagenttocreatedeploymentsupportfiles
withoutchangingbusinesslogic.
4.Designarollbackplanforareleasethatintroducesanewdatabase
column.
5.Rewriteavaguedeploymentrequestintoacleardeploymenttaskwith
acceptancecriteria.
InSummary
In this chapter, you learned how to move from working software to
deployable software. You saw why deployment planning must
happen early, how environments control release risk, how
configuration keeps code portable, and how CI/CD, Docker,
migrations, and rollback planning create a safer path to production.
The most important lesson is that deployment is part of the
specification. When you describe how the software should be built,
configured, released, verified, and recovered, you give your AI agent
the structure it needs to help you build production-ready software
instead of local-only code.

Chapter 24
Monitoring, Maintenance, and
Spec Drift
_______________________________________________________
__________________
Chapter Bridge: Continuity from Chapter 23
In Chapter 23, you prepared an AI-built application for
deployment. In this chapter, you learn what happens after release.
You will define monitoring requirements, read production signals,
update specifications after real-world feedback, and prevent the
system from drifting away from the documented design.
Production is not the finish line. It is the point where your software
begins meeting real users, real traffic, real errors, and real
maintenance pressure. If you stop updating your specifications after
deployment, your documentation becomes outdated, your AI agent
receives stale instructions, and future changes become risky.
This chapter shows you how to treat production as a feedback
system. You will plan what to monitor, what to log, how to track
errors, how to measure performance, how to collect user feedback,
and how to keep your specifications aligned with the system you are
actually running.
Bytheendofthischapter,you
Whyitmatters
willbeableto:
Definemonitoringrequirements Youcandetectproblemsearlierinstead
beforeproductionissuesoccur. ofwaitingforuserstocomplain.
Planlogs,metrics,errortracking,and Yougiveyourselftheevidenceneeded
performancechecks. todebugandimprovethesystem.
Useuserfeedbacktoimproveboth Youavoidtreatingproductionlearning
productbehaviorandspecifications. asinformalmemory.

Bytheendofthischapter,you
Whyitmatters
willbeableto:
Updatespecsafterreleasewithout YoukeepfutureAI-assistedwork
losingcontrol. groundedincurrenttruth.
Youreduceconfusionbetweenwhatthe
Identifyandpreventspecdrift. systemdoesandwhatthe
documentationsays.
Figure24.1:Aproductionfeedbackloopkeepsthesystem,
specs,tasks,andreleasesaligned.
24.1WhyProductionIsNottheEnd
When you deploy an application, you are not done engineering it.
You have only moved the system from a controlled build
environment into a real operating environment. Users will enter
unexpected data. Networks will fail. Background jobs may slow
down. External services may become unavailable. Requirements that
looked clear during planning may need adjustment after real use.
In spec-driven AI engineering, production teaches you what your
earlier documents missed. The important discipline is to capture
those lessons in the specification, not only in quick fixes. A code fix
without a spec update solves today's bug but creates tomorrow's
confusion.
Principle: The production rule

Every meaningful production lesson should answer one question:
does the spec still describe the system you need to maintain?
24.2MonitoringRequirements
Monitoring requirements describe what you must observe after
release. You are not trying to watch everything. You are choosing
the signals that tell you whether the system is healthy, useful,
secure, and aligned with its requirements.
A beginner mistake is to add monitoring only after a failure. A better
approach is to define monitoring in the spec before deployment.
Start with the features that matter most: login, payments,
dashboards, file uploads, background jobs, API calls, and anything
connected to user trust.
Areato Questionyouaretryingto
Examplesignal
monitor answer
Uptimechecks,failed
| Availability | Canusersreachthesystem? endpoints Failedworkflows,invalid Isthesystemproducingthe Correctness outputs,failedtest expectedresult? probes Responsetime,page Performance Isthesystemfastenough? loadtime,queuedelay Exceptioncount,error | requests,unavailable |
| --- | --- | --- |
| Errors | Whatisbreakingandhowoften? traces Areusersusingthefeatureas Featureusage,drop-off Usage intended? points,completionrate Repeatedfailedlogins, Aresuspiciousactions Security permissionfailures, happening? unusualaccesspatterns Prompt Box: Prompt: create monitoring requirements from a feature spec Use this prompt inside the book workflow when you want an AI assistant to help you plan production signals: | rate,repeatedstack |

You are reviewing the feature specification below. Create
monitoring requirements for this feature. Include availability,
correctness, performance, error tracking, security, and user-facing
impact. Do not invent features outside the specification. Return
the result as a table with Signal, Reason, Trigger, and Response.
24.3LoggingandObservability
Logging records what happened inside the system. Observability is
broader: it helps you understand why the system behaved the way it
did. For a beginner, the simple difference is this: logs are the
messages, while observability is the ability to use those messages
with metrics, traces, and alerts to understand the system.
Your logs should be useful but not noisy. A useful log tells you what
happened, where it happened, and which request or user action
caused it. A noisy log repeats low-value information until important
signals become hard to find.
Figure24.2:Productiondecisionsshouldcombinelogs,
metrics,errorreports,performancedata,feedback,andspec
changes.
Logtype	Useitwhen	Whattoinclude
Operationname,request
Anormalimportantevent
Infolog ID,status,relevantobject
occurs.
ID

| Logtype | Useitwhen | Whattoinclude Somethingunusualhappens Condition,recoveryaction, Warninglog butthesystemrecovers. affectedworkflow Errormessage,stacktrace, Aworkflowfailsorproduces Errorlog requestID,user-safe anunexpectedresult. context Actor,action,target,time, Auditlog Asensitiveactionoccurs. permissionresult Duration,endpoint,query |
| --- | --- | --- |
| Performancelog | Ataskorrequestisslow. exceeded #Example:structuredlogentryforafailedreportexport { "level":"error", "event":"report_export_failed", "request_id":"REQ-20491", "user_id":"USER-118", "project_id":"PROJ-42", "reason":"database_timeout", "duration_ms":12000, "recovery_action":"user_can_retry" } 24.4ErrorTracking Error tracking helps you group failures so you can see patterns instead of treating every error as a separate surprise. If ten users hit the same broken workflow, you do not want ten disconnected reports. You want one grouped issue with enough evidence to diagnose the root cause. A good error tracking specification defines what counts as an error, what information should be captured, who should review it, and when the issue becomes urgent. | orjobtype,threshold |

Severity
| Errorcondition | Capture | Response guide |
| --- | --- | --- |
| Usercannotlogin | RequestID,user | Investigate |
| withvalid | ID,authstep,error | High immediately;protect |
| credentials. | class | accountaccess. ProjectID,jobID, Checkqueue, Reportexportfails |
| duration,timeout | Medium | database,andretry aftertimeout. value logic. Unauthorizeduser Reviewauthorization Actor,endpoint, |
| reachesrestricted | Critical | ruleandsecurity permissionresult endpoint. logs. |
| ExternalAPIcallfails | Provider,status Medium | Applyfallbackor |
| repeatedly. | code,retrycount | degradegracefully. 24.5PerformanceMonitoring Performance monitoring tells you whether the system is fast enough for the people using it. A feature can be technically correct but still frustrating if it takes too long. You should define performance expectations in plain terms before you ask an AI agent to optimize anything. Do not begin with random optimization. Begin with a specific performance question: which user action is slow, how slow is it, what is the target, and what part of the system is likely responsible? |
| Workflow | Metric | Target Actionifexceeded Checkauthservice, Under2seconds |
| Login | Responsetime | databaselookup,and fornormaltraffic tokencreation. Under3seconds Reviewquerydesign, Dashboard Initialpagedata forstandard caching,andAPI load load projects payloadsize. Moveworkto Jobcompletion Under60seconds Reportexport backgroundjobor time fornormalreports improvequeryplan. Addpagination, |
| APIlist | Average | Under500msfor indexes,orfiltering |
| endpoint | responsetime | paginatedlists rules. |

24.6UserFeedbackLoops
Monitoring tells you what the system is doing. User feedback tells
you how the system feels and where it fails to meet real
expectations. You need both. A system can have no errors and still
be confusing. A dashboard can load quickly and still show the wrong
information for a user's decision.
Treat feedback as engineering input, not casual opinion. When a
user reports confusion, map that feedback to a requirement, a user
flow, a design decision, or a missing acceptance criterion. This keeps
improvement work disciplined.
| Feedbacktype | Example | Specaction Idonotknowwhichbutton UpdateuserflowandUI Confusion savesmychanges. requirement. Ineedtoexportonly Addorrejectnew Missingbehavior completedtasks. requirementexplicitly. |
| --- | --- | --- |
| Wrong | Iexpectedprojectmembers | Clarifyrolepermissionsand |
| expectation | toseesharedreports. Addperformance Performance Thedashboardisslowevery requirementandmonitoring complaint morning. signal. 24.7UpdatingSpecsAfterRelease A specification is not a one-time document. It is a living source of truth. After release, you update the spec when the system behavior changes, when a requirement is corrected, when a decision is revised, or when production teaches you something important. You should not update specs randomly. Use a simple change record so future you can understand why the document changed. A small change record protects you from silent drift. Specupdatefield Whattowrite Changedate Whenthespecwasupdated. Bugfix,userfeedback,performanceissue,security Reason finding,orproductdecision. Affectedrequirement TherequirementIDorsectionthatchanged. Affectedtests Whichtestsneedtobeaddedorchanged. | accessrules. |

Specupdatefield Whattowrite
Themodule,endpoint,page,job,orserviceconnected
Affectedcodearea
tothechange.
Reviewstatus Draft,reviewed,approved,implemented,orreleased.
Prompt Box: Prompt: update the spec after production
feedback
You are helping me update a software specification after
production feedback. Use the current requirement, the observed
production behavior, and the proposed change. Return: updated
requirement text, affected acceptance criteria, affected tests,
affected code areas, and a short change note. Do not add
unrelated features.
24.8PreventingSpecDrift
Spec drift happens when the system and the specification stop
matching. Sometimes the code changes but the spec stays old.
Sometimes the spec changes but the code never catches up.
Sometimes an AI agent makes a working change that solves one
issue while quietly breaking the documented design.
You prevent drift by checking alignment regularly. The goal is not
paperwork. The goal is to make sure your next change, your next
prompt, and your next AI-assisted task are based on current truth.

Figure24.3:Aspecdriftloophelpsyoudecidewhetherto
updatethespec,fixthecode,ordoboth.
Driftsignal	Whatitmaymean	Whatyoushoulddo
Compareproduction
Thecodechanged
Codebehaviordoes behaviorwiththe
withoutamatchingspec
notmatchacceptance requirementandchoose
update,orthe
criteria. thecorrectsourceof
requirementwaswrong.
truth.
Updateacceptance
Testspassbutusers Thetestsmaynotcover
criteriaandaddtestsfor
complain. therealuserexpectation.
themissingbehavior.
AIagentsuggests Thecontextortask
Narrowthetaskand
changesoutside instructionmaybetoo
restatetheboundaries.
scope. broad.
Abugfixcreatesa
Thefixchangedproduct Updatetheproductspec,
newworkflow
behavior,notjustcode. technicalspec,andtests.
behavior.
24.9MaintenanceChecklist
Use this checklist after each release, after each serious production
issue, and before asking an AI agent to make a major change to an
existing system. It keeps your production signals, specifications,
tests, and code aligned.
Maintenancecheck Done?
Keyworkflowshavemonitoringrequirements. Yes/No
Errorsaregroupedandreviewedbyseverity. Yes/No

Maintenancecheck Done?
LogsincluderequestIDsandusefulcontext. Yes/No
Performancetargetsexistforimportantworkflows. Yes/No
Userfeedbackismappedtorequirementsordecisions. Yes/No
Specsareupdatedafterproductionbehaviorchanges. Yes/No
Neworchangedbehaviorhasmatchingtests. Yes/No
AIagentinstructionsusethecurrentspec,notoutdatedcontext. Yes/No
Specdriftreviewiscompletedbeforemajorchanges. Yes/No
PracticalExample:MaintainingaProject
DashboardAfterRelease
Imagine you released a project dashboard built through the spec-to-
code workflow. In production, users report that the dashboard loads
slowly when a project has many tasks. No major error appears, but
the experience is poor.
Step Youraction
1.Readthe PerformancelogsshowthedashboardAPItakes7secondsfor
signal largeprojects.
2.Compare Thetechnicalspecsaysdashboarddatashouldloadunder3
withthespec seconds.
3.Identifythe TheAPIreturnsalltasksatonceinsteadofpaginatedor
likelycause summarizeddata.
4.Updatethe Addaperformancerequirementandresponse-sizerulefor
spec largeprojects.
Createtestsforpaginatedtaskloadingandlargeproject
5.Addtests
responsetime.
6.AsktheAI
Refactoronlythedashboarddataendpointandpreserve
agentfora
existingauthorizationrules.
narrowfix
7.Reviewand
Checktests,logs,anddashboardbehaviorafterdeployment.
release
#NarrowmaintenancepromptfortheAIagent
Usethecurrenttechnicalspecificationandperformancerequirement.
Refactoronlythedashboarddataendpoint.
Donotchangeauthentication,authorization,orunrelatedAPIresponses.
Goal:reducelarge-projectdashboardloadtimebyreturningpaginatedtask

data.
Alsoupdateoraddtestsforthenewpaginationbehavior.
MonitoringandMaintenanceSpecification
Template
Templatesection Whatyoushoulddefine
Featureorworkflow Nametheproductionworkflowbeingmonitored.
Listlogs,metrics,errors,performancevalues,and
Monitoringsignals
userfeedbacksources.
Healthexpectations Statewhathealthybehaviorlookslike.
Alertconditions Statewhenasignalshouldtriggerattention.
Ownerorreviewer Namewhoreviewsthesignalorissue.
Specupdaterule Statewhenthespecificationmustbeupdated.
Testupdaterule Statewhentestsmustbeaddedorchanged.
Statewhatmustbecheckedafterthenext
Releasefollow-up
deployment.
KeyTakeaways
Production is the beginning of real learning, not the end of
engineering.
Monitoring requirements should be defined before serious
problems happen.
Logs, metrics, errors, performance data, and user feedback
should lead to controlled maintenance decisions.
Every meaningful production change should update the
relevant specification and tests.
Spec drift is dangerous because it causes future AI-assisted
work to rely on outdated truth.

ReviewQuestions
1.Why is deployment not the final step in spec-driven AI
engineering?
2.What is the difference between logging and observability?
3.Why should performance requirements be written in the
specification?
4.What is spec drift, and why is it dangerous when working
with AI agents?
5.How can user feedback become a formal engineering input?
PracticalExercises
Exercise Whattodo
Chooseonefeaturefromapreviouschapterandwritethree
Exercise1
monitoringrequirementsforit.
Writeastructuredlogexampleforafailedlogin,failedexport,
Exercise2
orfailedpaymentworkflow.
Createasmallspecupdaterecordforaproductionbugyou
Exercise3
discoveredafterrelease.
Usethespecdriftchecklisttocomparearequirement,atest
Exercise4
case,andacodebehavior.
InSummary
In this chapter, you learned how to keep software reliable after
deployment. You defined monitoring requirements, planned logs and
observability, tracked errors, measured performance, collected user
feedback, and updated specifications after release. Most importantly,
you learned that production should improve your specifications, not
replace them with hidden knowledge.
You now have a maintenance loop that keeps requirements, specs,
tests, code, and production behavior aligned. In the next part of the
book, you will use the full workflow in practical projects so you can
see how spec-driven AI engineering works from idea to production-
ready implementation.

Part VI
Real-World Spec-Driven AI
Engineering Projects

Chapter 25
Project1-BuildingaTask
ManagementAppfrom
RequirementstoTestedCode
_______________________________________________________
______________________________________A complete beginner-
friendly project that turns intent into requirements, specifications,
tests, agent tasks, implementation, review, and a final checked
feature set.
This chapter begins the project section of the book.You will
now apply the full spec-driven AI engineering lifecycle to a small but
realistic task management app. The goal is not to build the largest
possible application. The goal is to build a complete, traceable,
testable workflow that you can repeat on any future project.

The app will allow a user to register, create projects, create tasks,
update task status, and view tasks by project. You will define the
engineering intent, turn it into requirements, convert the
requirements into technical design, write database and API
specifications, plan tests, create an agent task list, and review the
implementation before calling the project complete.
Youwillproduce Whyitmatters
Engineeringintent Definestheprojectpurposebeforefeatures
document multiply.
Productrequirements Convertstheideaintousergoalsandacceptance
document criteria.
TellstheAIagenthowthesystemshouldbe
Technicalspecification
structured.
DatabaseandAPI
Definesthedataboundaryandbehaviorcontract.
specification
Testplanandagenttask
Turnsqualityexpectationsintoexecutablework.
list
Preventstheprojectfrombecomingunfinished
Reviewandfinalchecklist
democode.
LearningObjective PracticalOutcome
Connectprojectintentto Youcanexplainwhyeachfile,endpoint,andtest
workingcode exists.
Writeusableproject YoucancreateacompactPRD,technicalspec,
artifacts databasespec,APIspec,andtestplan.
GuideanAIcodingagent Youcanbreaktheprojectintosmalltaskswith
safely clearboundariesandacceptancechecks.
Youcancompareimplementationagainst
Reviewgeneratedcode requirements,design,tests,andreliability
expectations.

Figure25.1:Thetaskappprojectmovesthroughacontrolledartifact
chainbeforecodeisaccepted.
25.1ProjectOverview
The project is a simple task management application for individuals
and small teams. It is intentionally small enough to understand but
complete enough to show the entire spec-driven workflow. A user
can register, sign in, create a project, create tasks inside that
project, update task status, and view tasks by project.
Project Rule: Project boundary
This project is not a full enterprise project management platform.
It does not include billing, chat, file uploads, calendar sync, or
complex team permissions. Those features are intentionally
excluded so you can focus on the corelifecycle: requirements ->
specifications -> tasks -> tests -> code -> review.
Area Decision
Applicationtype SmallwebAPIwithasimplefront-endlaterifneeded.
Primaryusers Individualsandsmallteamsmanagingprojectsandtasks.
Coreentities User,Project,Task.
Register,login,createproject,createtask,updatetask
Coreflows
status,listtasks.
Payments,fileuploads,real-timechat,complexanalytics,
Outofscope
mobileapp.

Area Decision
Correctbehavior,clearvalidation,usefultests,andsafe
Qualitypriority
errorhandling.
A beginner mistake is to begin by asking an AI agent to "build a task
app". That prompt sounds simple, but it is not an engineering
instruction. The agent has no stable definition of users, entities,
permissions, data rules, error states, test expectations, or
deployment assumptions. In a spec-driven workflow, you first define
the shape of the work, then let AI help you implement it.
25.2EngineeringIntentDocument
The engineering intent document explains why the system exists,
who it serves, what outcome it should produce, and what tradeoffs
are acceptable. It is shorter than a PRD. It is the project compass.
Field ProjectAnswer
Userslosetrackofsmallprojecttasksbecausetasksare
Problem
scatteredacrossnotes,messages,andmemory.
Ausercancreateprojectsandtasks,updateprogress,
Desiredoutcome
andseewhatneedsattention.
Ausercanmanageatleastoneprojectwithseveraltasks
Successdefinition
withoutconfusionordataloss.
Keepthefirstversionsimple,understandable,testable,
Mainconstraint
andsecureenoughforrealuse.
Engineering Everyfeaturemusthavearequirement,acceptance
principle criteria,tests,andreviewnotes.
Prompt: Turn the project idea into engineering intent
Youarehelpingmeprepareaspec-drivensoftwareproject.
Projectidea:Ataskmanagementappforindividualsandsmallteams.
Createaconciseengineeringintentdocumentwith:
-problemstatement
-targetusers
-intendedoutcome
-successcriteria
-non-goals
-engineeringconstraints
Keepitpracticalandsuitableforabeginnerproject.

Guideline: Intent before scope
The intent document protects the project from uncontrolled
expansion. When a new feature idea appears, you compare it with
the intent. If it does not support the first version, it waits.
25.3ProductRequirementsDocument
The PRD turns intent into user-facing behavior. For this project,the
PRD should be clear enough for a developer, a tester, and an AI
agent to understand the expected product without guessing.
Requiremen
Requirement AcceptanceCriteria
tID
Givenavalidname,email,and
Userscancreatean
password,thesystemcreatesa
REQ-001 accountusingname,
newuserandrejectsduplicate
email,andpassword.
emails.
Givenvalidcredentials,thesystem
Userscanloginwith returnsanauthenticatedsession
REQ-002
emailandpassword. ortoken;invalidcredentialsreturn
asafeerror.
Givenavalidprojectname,the
REQ-003	Userscancreateprojects.	authenticatedusercancreatea
projectownedbythatuser.
Givenaprojectownedbytheuser,
Userscancreatetasks theusercanaddataskwithtitle,
REQ-004
insideaproject. optionalduedate,status,and
priority.
Ataskstatuscanmovebetween
Userscanupdatetask
REQ-005 Todo,InProgress,andDoneonly
status.
fortaskstheuserowns.
Theprojecttasklistreturnsonly
Userscanlisttasksby tasksbelongingtothe
REQ-006
project. authenticateduserandselected
project.

Notice how each requirement has a stable ID. These IDs will appear
again in the technical specification, database design, API
specification, test plan, and agent task list. This traceability is what
turns a project from a loose conversation into an engineering
workflow.
UserStory AcceptanceNotes
Asauser,Iwanttocreatea Theprojectnameisrequired;project
projectsoIcangrouprelated ownershipistiedtotheauthenticated
tasks. user.
Asauser,Iwanttocreateatask
Tasktitleisrequired;defaultstatusis
soIcantrackworkthatneedsto
Todo;invalidprojectIDsarerejected.
bedone.
Asauser,Iwanttomarkataskas Onlyallowedstatusesareaccepted;users
donesoIcantrackprogress. cannotupdateanotheruser'stask.
25.4TechnicalSpecification
The technical specification explains how the system will be built. It
does not need to be huge. It needs to remove ambiguity before
implementation begins.
TechnicalArea SpecificationDecision
SmallmodularwebAPIwithauthentication,project
Architecture
service,taskservice,databaselayer,andtests.
REST-styleendpointswithJSONrequestand
Backendstyle
responsebodies.
Relationaldatabasebecauseusers,projects,and
Datastorage
taskshaveclearrelationships.
Passwordhashingandtoken-basedauthenticated
Authentication
requests.
Validaterequiredfields,emailformat,allowedstatus
Validation
values,andownershiprules.
Unittestsforbusinessrules,integrationtestsforAPI
Testing
flows,anderror-pathtests.
Singleapplicationserviceplusdatabase;environment
Deploymentassumption
variablesforconfiguration.
Prompt: Create the technical specification from the PRD
Usethefollowingrequirementstocreateatechnicalspecificationforasmall
taskmanagementapp.

Requirements:REQ-001toREQ-006fromthePRD.
Include:
-architectureoverview
-moduleresponsibilities
-databaseentities
-APIboundary
-validationrules
-authenticationapproach
-teststrategy
-implementationconstraints
Donotgeneratecodeyet.Produceadesignthatcanguidecodegeneration.
Professional Rule: No code before design
When you ask for implementation too early, the AI agent fills gaps
with assumptions. A technical specification reduces those gaps
before the agent creates files, functions, database tables, or
endpoints.
25.5DatabaseDesign
The database design should reflect the product behavior. If users
own projects and projects contain tasks, the schema shouldmake
those relationships clear. The first version uses three main tables.
Figure25.2:ThedatamodelandAPIboundarydefinehowusers,
projects,andtasksinteractsafely.

Table	Fields	Rules
Emailmustbeunique.
id,name,email,password_hash,
users Passwordsarenever
created_at
storedasplaintext.
owner_idreferences
id,owner_id,name,description,
projects users.id.Aproject
created_at
belongstooneuser.
project_idreferences
id,project_id,title,description,
projects.id.Statusis
tasks status,priority,due_date,
limitedtoTodo,In
created_at,updated_at
Progress,Done.
Databaseschemasketch
users
id: primary key
name: required text
email: required unique text
password_hash: required text
created_at: datetime
projects
id: primary key
owner_id: foreign key -> users.id
name: required text
description: optional text
created_at: datetime
tasks
id: primary key
project_id: foreign key -> projects.id
title: required text
description: optional text
status: Todo | In Progress | Done
priority: Low | Medium | High
due_date: optional date
created_at: datetime
updated_at: datetime
25.6APISpecification
The API specification describes the contract between the client and
the server. It tells the AI agent what endpoints to create, what

inputs to validate, what responses to return, and which requirements
each endpoint supports.
Metho Requiremen
Endpoint Purpose
d t
Createanewuser
| /auth/register | POST | REQ-001 account. Authenticateauser |
| --- | --- | --- |
| /auth/login | POST | andreturna REQ-002 session/token. Createaprojectfor |
| /projects | POST | theauthenticated REQ-003 user. Listprojectsowned |
| /projects | GET | bythe REQ-003 authenticateduser. Createatask |
| /projects/{project_id}/tasks | POST | insideaproject REQ-004 ownedbytheuser. Listtasksinsidea |
| /projects/{project_id}/tasks | GET | REQ-006 selectedproject. Updateatask |
| /tasks/{task_id}/status | PATCH | REQ-005 status. ExampleAPIcontract:createtask POST /projects/{project_id}/tasks Authentication: required Request body: { "title": "Prepare project report", "description": "Write first draft before Friday", "priority": "High", "due_date": "2026-07-10" } Expected behavior: - Reject unauthenticated requests. - Reject if project_id does not belong to the authenticated user. - Reject empty title. - Default status to "Todo". - Return the created task with id, status, and timestamps. |

Guideline: API specs as guardrails
An API specification prevents the AI agent from inventing endpoint
names, request formats, response formats, or ownership behavior
while coding.
25.7TestPlan
The test plan turns acceptance criteria into checks that can catch
shallow or incorrect AI-generated implementation. The goal is not
only to test happy paths. You also test validation, ownership, and
failure behavior.
Test Requiremen
TestScenario ExpectedResult
ID t
Useraccountis
T- Registerwithvalidname,
REQ-001 createdand
001 email,andpassword.
passwordishashed.
Requestisrejected
T- Registerwithanemailthat
REQ-001 withasafeduplicate-
002 alreadyexists.
emailerror.
T- Authenticated
REQ-002 Loginwithvalidcredentials.
003 responseisreturned.
Requestisrejected
T- withoutrevealing
REQ-002 Loginwithwrongpassword.
004 whethertheemail
exists.
Projectiscreatedand
T- Createaprojectwhile
REQ-003 linkedtothecurrent
005 authenticated.
user.
T-	Createataskwithanempty	Requestisrejected
REQ-004
006	title.	withvalidationerror.
T- Taskstatuschanges
REQ-005 UpdatetaskstatustoDone.
007 toDone.
Accessisrejectedor
T- Listtasksforanotheruser's
REQ-006 returnsno
008 project.
unauthorizeddata.
Prompt: Generate tests from acceptance criteria
Generateatestplanforthetaskmanagementappusingtheserequirements:
REQ-001throughREQ-006.

Foreachrequirement,produce:
-happypathtests
-validationtests
-authorizationtests
-errorhandlingtests
-edgecases
ReturntheresultasatablewithTestID,RequirementID,Scenario,Inputs,
ExpectedResult,andPriority.
25.8AgentTaskList
The agent task list converts the technical work into small
implementation units. Each task should have a clear input artifact,
expected output, acceptance checks, and stop condition. This
prevents the AI agent from changing too much at once.
Task Acceptance
AgentTask InputArtifacts
ID Check
| Createprojectstructure | Technicalspec, | Projectrunslocally |
| --- | --- | --- |
| A-001 | andconfiguration | deployment withemptyapp |
| loading. | assumptions. Registrationtests Implementusermodel DBspec,REQ-001, A-002 pass;passwords andregistrationflow. testsT-001toT-002. arehashed. REQ-002,APIspec, Loginsucceedsand A-003 Implementloginflow. testsT-003toT-004. failssafely. | healthcheck. |
| Implementproject | REQ-003,DBspec, | Projectsarelinked |
A-004
| creationandlisting. | APIspec. | tocurrentuser. Tasksrequiretitle Implementtaskcreation REQ-004,REQ-006, A-005 andrespectproject andlisting. taskAPIspec. ownership. Onlyallowedstatus Implementtaskstatus REQ-005,status A-006 valuesare update. rules. accepted. Nobehavior |
| --- | --- | --- |
| Runreview,refactor,and | Allartifactsandtest | changeswithout |
A-007
updatespecs.	results.	updatedspec
notes.
Prompt: Convert the specs into agent tasks

Convertthetaskmanagementappspecificationsintoasmallimplementation
tasklist.
Rules:
-Onetaskshouldchangeoneboundedpartofthesystem.
-Everytaskmustnameinputartifacts,acceptancechecks,andteststorun.
-Donotcombineauthentication,projects,tasks,andreviewintoonelargetask.
25.9ImplementationWorkflow
Implementation should be incremental. You do not ask the agent to
build the entire system in one pass. You give it one task, provide the
context pack, run the relevant tests, review the changed files, and
then update the specification if implementation uncovered a useful
detail.
Figure25.3:TheimplementationworkflowkeepsAIcodingworksmall,
testable,andreviewable.
1.    Select one agent task from the task list, such as A-002
registration flow.
2.    Create a context pack containing the relevant requirement, API
contract, database rules, and tests.
3.    Ask the agent to implement only that task and to list changed
files.
4.    Run the tests linked to the task before moving forward.
5.    Review the implementation against requirements, architecture,
security, validation, and error handling.

6.    Record any approved spec update before starting the next task.
ContextpackfortaskA-005:taskcreationandlisting
Task ID: A-005
Goal: Implement task creation and listing.
Requirements: REQ-004 and REQ-006
Database rules:
- tasks.project_id must reference projects.id
- task.title is required
- status defaults to Todo
- status values: Todo, In Progress, Done
API endpoints:
- POST /projects/{project_id}/tasks
- GET /projects/{project_id}/tasks
Tests to satisfy:
- T-006 empty title is rejected
- user cannot create or list tasks for another user's project
Stop condition:
- Do not modify authentication or project creation unless a failing test proves it is
necessary.
25.10CodeReviewandImprovement
After the agent generates code, review it as an engineer, not as a
spectator. Your job is to compare the implementation against the
artifacts. A working demo is not enough if the code violates
ownership rules, skips validation, hides errors, or cannot be tested.
ReviewArea QuestionstoAsk
Doeseachimplementedbehaviormaptoa
Requirementsmatch
requirementID?Isanythingmissingorinvented?
Arerelationshipsbetweenusers,projects,andtasks
Dataintegrity
enforcedcorrectly?
Authenticationand Canauseraccessanotheruser'sprojectortaskby
ownership guessinganID?
Areemptytitles,invalidstatuses,andduplicateemails
Validation
rejected?
Areerrorssafe,useful,andnotleakingsensitive
Errorhandling
details?
Dotestscoverhappypaths,failurepaths,and
Tests
authorizationboundaries?

ReviewArea QuestionstoAsk
Isthecodemodularenoughtochangewithout
Maintainability
breakingunrelatedbehavior?
Prompt: Review the generated implementation
Reviewtheimplementationagainstthetaskmanagementappspecs.
Usethesereviewcategories:
1.requirementscoverage
2.architecturematch
3.dataintegrity
4.authenticationandownership
5.validationanderrorhandling
6.testcoverage
7.refactoringopportunities
Foreveryissue,provide:
-theaffectedrequirementorartifact
-therisk
-therecommendedfix
-whetherthefixchangesthespec
Refactoring Rule: Refactor after tests exist
Refactoring should improve structure without changing behavior. If
behavior changes, it is not only refactoring; it is a requirement or
design change and must be documented.
25.11FinalProjectChecklist
The final checklist confirms that the project is not just coded, but
engineered. Use it before you move to the next project chapter.
ChecklistItem DoneWhen
Engineeringintentis Problem,outcome,successcriteria,constraints,
complete andnon-goalsareclear.
PRDiscomplete RequirementshaveIDsandacceptancecriteria.
Architecture,modules,validation,
Technicalspeciscomplete
authentication,andteststrategyaredefined.
Tables,relationships,constraints,and
Databasedesigniscomplete
ownershiprulesaredocumented.
Endpoints,methods,inputs,outputs,anderrors
APIspecificationiscomplete
aredocumented.

ChecklistItem DoneWhen
Happypath,validation,authorization,error,and
Testplaniscomplete
edgecasesareincluded.
Tasksaresmall,traceable,andhaveacceptance
Agenttasklistiscomplete
checks.
Codeiscomparedagainstrequirements,
Implementationisreviewed
architecture,security,andtests.
Specsareupdatedafter
Noapprovedbehaviorexistsonlyincode.
changes
Projectisreadyfor Thesystemcanbeextendedwithoutlosing
continuation traceability.

ProjectArtifactMap
MainRiskIf
| Artifact | PrimaryOwner Missing Theproject | UsedBy |
| --- | --- | --- |
| Engineering | Product/engineering growswithouta | PRDandscope |
| intent | lead | decisions clearreason. Theagent |
| Product/engineering | Tests,APIspec, | implements |
PRD
| lead | andreview behavior. Thecode | guessed |
| --- | --- | --- |
| Technical | Agenttasksand Developer/architect | structure |
| spec | implementation inconsistent. Dataownership Database and Developer APIandtestdesign spec relationships becomeunsafe. Endpointsand Implementation responses | becomes |
| APIspec | Developer/tester become tests unstable. Shallowdemos Implementation | andintegration |
| Testplan | Tester/developer acceptance risksremain. Theagent Agenttask | passwhilereal |
| Developer | AIcodingagent list muchatonce. Buggyor Review insecurecodeis Developer/reviewer Finalacceptance checklist acceptedtoo early. | changestoo |

KeyTakeaways
A project chapter should produce artifacts, not only
explanations.
The task management app is small by design so you can
understand the full lifecycle.
Requirement IDs create traceability across PRD, technical
design, database design, API design, tests, agent tasks,
implementation, and review.
AI agents work better when each task has a context pack,
acceptance checks, and a stop condition.
A feature is not complete until the requirement, test, code,
review notes, and updated specification agree.
ReviewQuestions
1.    Why is "build a task management app" not enough as an AI
coding instruction?
2.    What is the difference between engineering intent and a PRD?
3.    How do requirement IDs help you review AI-generated code?
4.    Why should user ownership rules appear in the database, API,
and test plan?
5.    What should an agent task include before it is given to an AI
coding agent?
6.    When should a code change cause an update to the
specification?

PracticalExercises
Exercise Instruction
Addarequirementfortaskpriorityfilteringandwriteits
Exercise1
acceptancecriteria.
Exercise2 CreateanAPIcontractforupdatingatasktitle.
Writethreeauthorizationteststhatpreventoneuserfrom
Exercise3
readinganotheruser'stasks.
Breakthetaskpriorityfilteringfeatureintothreeagenttasks
Exercise4
withacceptancechecks.
Reviewthedatabaseschemaandproposeonesafe
Exercise5
improvementwithoutexpandingtheproductscope.
InSummary
You have now completed the first full project workflow in the book.
The task management app began as a simple idea, but you
transformed it into a controlled engineering system: intent,
requirements, specifications, database design, API contracts, tests,
agent tasks, implementation workflow, review, and final checklist.
This matters because AI-assisted development can move quickly in
the wrong direction when the work is vague. Spec-driven AI
engineering gives speed a track to run on. In the next project
chapters, you will repeat this pattern on more advanced systems
while keeping the same core discipline: define the behavior, specify
the design, plan the tests, guide the agent, review the output, and
keep the specification alive.

Chapter 26
Project 2 — Building an AI
Customer Support System
from Specs to Deployment
Project 2 - Building an AI Customer Support System from Specs to Deployment
_______________________________________________________
______________________________________A practical project
that turns customer-support requirements into a safe, tested,
retrieval-based AI assistant that can be reviewed, deployed,
monitored, and improved.
This chapter builds the second real-world project in the
book.You will design an AI customer support system from the first
project idea to a deployment-ready workflow. The goal is not to
create a flashy chatbot that guesses answers. The goal is to build a
controlled support assistant that follows specifications, retrieves
approved knowledge, respects privacy rules, escalates uncertain
cases, and produces answers that can be tested and reviewed.
The project uses the same spec-driven chain you have been
practicing: requirements -> conversation flow -> knowledge base ->
retrieval design -> security rules -> tests -> agent tasks ->
deployment -> production review. By the end of the chapter,you will
have a complete set of artifacts that can guide an AI coding agent
without depending on an external repository.
ProjectArtifact Purpose
Definewhatcustomersandsupportstaffneedfrom
Userrequirements
thesystem.

ProjectArtifact Purpose
Conversationflow Definehowtheassistantshouldgreet,clarify,
specification answer,andescalate.
Knowledgebase Definewhatinformationtheassistantisallowedto
requirements use.
Definehowquestionsarematchedtoapproved
Retrievalworkflowdesign
supportcontent.
Preventunsafehandlingofpersonal,account,or
Securityandprivacyrules
confidentialinformation.
Testcasesand Verifyqualitybeforelaunchandcontrolriskafter
deploymentplan launch.
LearningObjective PracticalOutcome
SpecifyanAIsupport Youcandescribetheassistantbehaviorbefore
assistant implementationbegins.
Designatrustedretrieval Youcanrequireanswerstocomefromapproved
workflow supportknowledge.
Writeprivacyand Youcanpreventtheassistantfrominventing
escalationrules policyorexposingsensitivedata.
Youcanmovefromdesigntoproductionreview
Plantestsanddeployment
withoutlosingtraceability.
Figure26.1:TheAIcustomersupportsystemmovesthrougha
controlledspecchainbeforedeployment.

26.1ProjectOverview
This project is an AI customer support system for a small SaaS
product. The assistant answers common questions about accounts,
plans, billing rules, password resets, product features,
troubleshooting steps, and escalation paths. It does not replace
human support. It handles routine questions, gathers context, and
passes uncertain or sensitive issues to a human support agent.
Project Rule: Project boundary
This project does not connect to real customer accounts, payment
systems, or private production data in the first version. It uses a
controlled knowledge base and sample support scenarios. That
keeps the project safe, testable, and suitable for learning.
Area ProjectDecision
Retrieval-basedAIsupportassistantwithasmallsupport
Applicationtype
dashboardorAPIboundary.
Customersaskingquestionsandsupportstaffreviewing
Primaryusers
unresolvedcases.
Answercommonquestionsfromapprovedknowledgeand
Corecapability
escalatewhenconfidenceislow.
FAQarticles,policypages,troubleshootingsteps,and
Coredatasources
escalationrules.
Directrefunds,accountchanges,legaladvice,private
Outofscope
paymentdata,andunrestrictedwebbrowsing.
Groundedanswers,clearprivacyhandling,safeerror
Qualitypriority
messages,andmeasurableescalationbehavior.
A weak version of this project would begin with a prompt such as,
"build me a customer support chatbot." A spec-driven version begins
by deciding what the system is allowed to know, what it is allowed
to say, when it must ask for clarification, and when it must stop and
escalate. This is the difference between a demo and an engineering
workflow.
26.2UserRequirements
User requirements define what different people need from the
system. For this project, you have two main user groups: customers

and support staff. Customers need fast, helpful, accurate answers.
Support staff need clear escalation records and enough context to
continue the conversation.
Requiremen
Requirement AcceptanceCriteria
tID
Thesystemacceptsamessage,
Customerscanask
detectsthelikelysupporttopic,
REQ-001 supportquestionsinplain
andreturnsahelpfulresponseor
language.
clarificationquestion.
Theassistantanswers Everysubstantiveanswerisbased
REQ-002	onlyfromapproved	onretrievedknowledgecontentor
supportknowledge. adefinedfallbackrule.
Ifthequestionlackstheneeded
Theassistantasks
productarea,accountcontext,or
REQ-003 clarifyingquestionswhen
issuetype,theassistantasksone
therequestisunclear.
focusedquestion.
Low-confidence,billingdispute,
Theassistantescalates
accountaccess,privacy,orpolicy-
REQ-004 sensitiveoruncertain
exceptioncasesaremarkedfor
issues.
humanreview.
Escalatedconversationsinclude
Supportstaffcanreview summary,userissue,attempted
REQ-005
unresolvedcases. answer,confidencereason,and
suggestednextstep.
Theassistantdoesnotrequest
Thesystemprotects passwords,fullpaymentdetails,
REQ-006
sensitiveinformation. secretkeys,orunnecessary
personalinformation.
Prompt: Convert project idea into support requirements
You are helping me specify an AI customer support assistant.
Project goal: answer common SaaS customer questions using approved knowledge and
escalate uncertain or sensitive issues.
Create user requirements for:
- customers
- support staff
- security and privacy
- escalation behavior
- answer quality
Include requirement IDs and acceptance criteria. Do not generate implementation code
yet.

Guideline: Requirement quality check
Every requirement should be testable. If you cannot test whether
the assistant followed the requirement, the requirement is too
vague.
26.3ConversationFlowSpecification
The conversation flow specification defines how the assistant
behaves during a support interaction. This is important because AI
support systems fail when they answer too quickly, ask too many
questions, or pretend to know things that are not in the approved
knowledge base.
Conversation
AssistantBehavior ExitCondition
State
Theusersubmits
Welcometheuserandaskhowitcan
Greeting asupport
helpinasimple,professionaltone.
question.
Identifythelikelytopic:account, Atopicisselected
| Intentdetection | billing,featureuse,troubleshooting, policy,orother. needed. Theuserprovides Askonefocusedquestionifthe enoughdetailor Clarification requestisincompleteorambiguous. theissueis escalated. Searchapprovedknowledgefor Relevantsources | orclarificationis |
| --- | --- | --- |
| Retrieval | relevantpolicy,FAQ,or troubleshootingcontent. confidenceislow. Answeris Explaintheanswerinplainlanguage, Answerdrafting groundedand withstepswherehelpful. safe. Summarizetheissueandrouteitto Caseismarked Escalation supportstaffwhenrequired. forreview. Conversationflowsketch | arefoundor |
START
-> greet user
-> receive question
-> classify support topic
-> if unclear: ask one clarifying question

-> retrieve approved knowledge
-> if high confidence and safe: answer with steps
-> if low confidence or sensitive: escalate to human support
-> log outcome for review
END
The assistant should not behave like a general chatbot. It should
behave like a support workflow. That means it follows defined states
and has clear conditions for moving from one state to the next.
26.4KnowledgeBaseRequirements
The knowledge base is the approved information the support
assistant is allowed to use. In a spec-driven project, you define the
knowledge base before designing retrieval or generation. This
prevents the assistant from mixing official support policy with
guesses.
| KnowledgeType | ExampleContent Reviewedwhenever | UpdateRule |
| --- | --- | --- |
| FAQarticle | HowdoIresetmypassword? changes. Reviewedby Whenrefundsareallowedand Billingpolicy supportleadbefore whenhumanreviewisrequired. release. Updatedwhen Troubleshooting Stepsforfixingfailedemail productbehavior guide verification. changes. Updatedwhenever UsagelimitsforFree,Pro,and Planlimits pricingorplanrules Businessplans. change. Whentheassistantshouldstop Reviewedafter | authenticationflow |
| Escalationrule | answeringandcreateasupport case. orpolicychange. Expiresoris Temporaryoutages,bugs,or Knownissues reviewedona workarounds. defineddate. RequiredMetadata WhyItMatters article_id Letstheanswertracebacktoaknownsource. | productionincident |

RequiredMetadata WhyItMatters
Helpssupportstaffunderstandwhatsourcewas
title
used.
category Improvesretrievalbygroupingrelatedcontent.
last_updated Preventsoldpolicyfrombeingtreatedascurrent.
Showswhoisresponsibleformaintainingthe
owner
article.
Explainswhenthearticleisreliableandwhen
confidence_notes
escalationisneeded.
Professional Rule: Knowledge base rule
If the answer is not in the knowledge base, the assistant should
not invent it. It should ask a clarifying question, explain the
limitation, or escalate.
26.5RetrievalWorkflowDesign
Retrieval is the process of finding the best approved support content
for a user question. In this project, retrieval is not just search. It
includes topic detection, safety checks, source selection, confidence
evaluation, and fallback behavior.
Figure26.2:Theretrievalworkflowkeepssupportanswersgroundedin
approvedknowledge.

RetrievalStep Specification
Cleantheusermessage,preserveimportantterms,and
Normalizequestion
avoidchangingmeaning.
Assignthequestiontoaccount,billing,troubleshooting,
Classifytopic
featurehelp,policy,orunknown.
Findthemostrelevantapprovedknowledgearticlesfor
Retrievecandidates
thetopic.
Ranksources Preferrecent,official,andtopic-matchedarticles.
Useadefinedthresholdorruletodecidewhetherto
Checkconfidence
answerorescalate.
Answerusingonlytheselectedsourcesandavoid
Draftanswer
unsupportedclaims.
SavesourceIDs,confidencereason,andwhether
Recordtrace
escalationwasused.
Prompt: Design the retrieval workflow
Create a retrieval workflow design for an AI SaaS support assistant.
The assistant must answer only from approved knowledge base articles.
Include:
- question normalization
- topic classification
- article retrieval
- source ranking
- confidence checks
- fallback behavior
- escalation behavior
- traceability fields
Do not include external repository instructions.

26.6SecurityandPrivacyRules
Security and privacy rules must be written before implementation. A
support assistant may receive account questions, billing concerns,
screenshots, or personal details. The system should handle these
safely, even in the learning version of the project.
RuleID	SecurityorPrivacyRule	RequiredBehavior
Ifauserofferssensitivesecrets,
Neverrequestpasswordsor tellthemnottosharethemand
SEC-001
secretkeys. routeaccountrecoverythrough
theapprovedflow.
Askonlyforinformationnecessary
SEC-002 Minimizepersonaldata.
tounderstandthesupportissue.
Theassistantshouldnotreveal
Donotexposeprivateaccount accountdataunlesstheuseris
SEC-003
details. authenticatedandtheusecaseis
explicitlysupported.
Refunds,chargebacks,andplan
| SEC-004 | Escalatebillingdisputes. | exceptionsrequirehumansupport review. Showusefuluser-facingerrors |
| --- | --- | --- |
| SEC-005 | Usesafeerrorresponses. | withoutexposinginternalsystem details. Logsshouldcapturesupport |
| SEC-006 | Logcarefully. | contextwithoutstoring unnecessarysensitivedata. Safety Rule: Safe project version For this chapter, the assistant uses sample support messages and sample knowledge articles. It should not be connected to live customer records, payment systems, or private production databases. |

26.7TestCases
Test cases prove that the assistant follows the specification. For an
AI support system, tests should cover normal answers, unclear
questions, missing knowledge, low confidence, privacy concerns, and
escalation. Do not test only happy paths.
Test
Scenario ExpectedResult
ID
Assistantretrievesthepassword
Useraskshowtoreseta
T-001 resetarticleandgivesapproved
password.
steps.
Userasksavaguequestion:"Itis Assistantasksonefocused
T-002
notworking." clarificationquestion.
Assistantexplainsthatsupport
T-003	Userasksforarefundexception.	staffmustreviewandcreatesan
escalationsummary.
Assistanttellstheusernotto
Usersharesapasswordinthe sharepasswordsandavoids
T-004
message. storingorrepeatingthe
password.
Assistantadmitsitdoesnothave
Questionhasnomatching
T-005 enoughapprovedinformation
knowledgearticle.
andescalates.
Assistantavoidsusingoutdated
T-006	Retrievedarticleisoutdated.	contentifanewersourceor
escalationruleexists.
Assistantrefusestoexpose
Userasksforinternalsystem
T-007 internaldetailsandofferssafe
details.
supporthelp.
Caseincludesissuesummary,
Supportstaffopensanescalated topic,attemptedanswer,source
T-008
case. IDs,confidencereason,andnext
step.
Prompt: Generate tests from acceptance criteria
Using the support assistant requirements REQ-001 to REQ-006 and security rules SEC-
001 to SEC-006, create a test plan.
Include:
- normal support questions
- unclear questions
- low confidence retrieval

- missing knowledge
- privacy-sensitive messages
- escalation review
For each test, include input, expected behavior, and pass/fail criteria.
26.8AgentImplementationTasks
Agent implementation tasks turn the specification into small
controlled work units. Each task should have a purpose, source
artifact, implementation boundary, and acceptance checks. This
prevents the AI agent from trying to build the entire system in one
uncontrolled pass.
Task
AgentTask AcceptanceCheck
ID
Foldersexistforapi,retrieval,
Createprojectstructureand
A-001 knowledge,tests,anddocs;no
configurationfiles.
secretsarehardcoded.
ArticlesincludeID,title,
Createknowledgebasearticle
A-002 category,body,owner,and
formatandsamplearticles.
last_updatedfields.
Greeting,intentdetection,
Implementconversationstate clarification,answer,and
A-003
handler. escalationstatesare
represented.
Givenaquestion,theservice
Implementretrievalservice
A-004 returnscandidatearticleswith
boundary.
sourceIDsandscores.
AnswersciteselectedsourceIDs
A-005	Implementanswerdraftingrules.	internallyandavoidunsupported
claims.
Escalationsincludesummary,
Implementescalationrecord
A-006 reason,topic,sourceIDs,and
creation.
suggestednextstep.
Addtestsforrequirementsand Allrequiredtestcasespassand
A-007
privacyrules. includenegativecases.
Environmentconfigurationis
A-008	Preparedeploymentconfiguration.	separatedfromcodeand
documented.
Self-containedprojectstructure

ai-support-system/
docs/
requirements.md
conversation-flow.md
security-rules.md
deployment-plan.md
app/
main.py
conversation.py
retrieval.py
escalation.py
config.py
knowledge_base/
account-password-reset.md
billing-refund-policy.md
plan-limits.md
troubleshooting-email-verification.md
tests/
test_conversation_flow.py
test_retrieval.py
test_privacy_rules.py
test_escalation.py
Professional Rule: Task sizing rule
A good agent task should be small enough to review in one sitting.
If the task touches conversation logic, retrieval, privacy,
deployment, and tests at the same time, split it.
26.9DeploymentPlan
The deployment plan explains how the support assistant moves from
local development to a controlled environment. Even if you do not
deploy the learning project to a public server, writing the deployment
plan teaches you to think like a production engineer.

Figure26.3:Deploymentshouldincludemonitoringandafeedbackloop
forknowledgeandspecupdates.
DeploymentArea Plan
Runthesupportassistantasasmallwebservicewitha
Runtime
clearAPIboundary.
Useenvironmentvariablesformodelsettings,retrieval
Configuration
thresholds,andloggingoptions.
Deployapprovedarticlefilesoracontrolledknowledge
Knowledgebase
storewithupdatedates.
Runconversation,retrieval,privacy,andescalationtests
Testinggate
beforedeployment.
Keepthepreviousapprovedknowledgebaseand
Rollback
applicationversionavailable.
Trackunansweredquestions,escalations,retrieval
Monitoring
confidence,errorrates,andresponsetime.
Reviewsamplesofanswersandallescalatedcases
Humanreview
beforeexpandingusage.
Deploymentconfigurationsketch
APP_ENV=staging
LOG_LEVEL=info
RETRIEVAL_TOP_K=3
MIN_CONFIDENCE_TO_ANSWER=0.72
ENABLE_ESCALATION=true
STORE_RAW_MESSAGES=false
KNOWLEDGE_BASE_PATH=./knowledge_base

SUPPORT_REVIEW_QUEUE=local-review-queue
Prompt: Create a deployment plan from the specs
Use the AI support assistant requirements, retrieval workflow, privacy rules, and test
plan to create a deployment plan.
Include:
- staging environment setup
- configuration variables
- test gates
- knowledge base release process
- rollback plan
- monitoring metrics
- human review process
Keep the plan self-contained and suitable for a small project.
26.10ProductionReview
Production review is the habit of checking what the system does
after release. A support assistant can appear successful because it
responds quickly, while still giving incomplete answers, missing
escalation cases, or using outdated knowledge. Production review
catches those problems.
ActionifProblem
ReviewArea QuestiontoAsk
Appears
Updateretrievalranking,
Areanswersgroundedin
Answeraccuracy improvesourcecontent,or
approvedknowledge?
adjustconfidencethreshold.
Aresensitiveanduncertain Tightenescalationrulesand
Escalationquality
casesbeingescalated? addmissingtests.
Whatquestionsrepeatedly Createorupdateknowledge
Knowledgegaps
failretrieval? basearticles.
Updateprivacyrules,
Istheassistantavoiding
Privacyhandling loggingbehavior,andtest
sensitivedatacollection?
cases.
Profileretrieval,reduce
Areresponsesfastenough
Performance unnecessarysteps,orcache
forsupportuse?
safecontent.
Doesproductionbehavior Updateimplementationor
Specdrift	stillmatchthewritten	revisespecsthrougha
specification? controlledchangeprocess.

Guideline: Production is evidence
Real customer questions reveal missing cases that design meetings
often miss. Use production review to improve the specification, not
to blame the implementation.
26.11FinalProjectChecklist
Use the final checklist before you call the AI customer support
project complete. The checklist protects you from launching a
system that answers quickly but cannot be trusted.
ChecklistItem PassCondition
Userrequirementsare Customerandsupportstaffneedsarewritten
complete withacceptancecriteria.
Conversationflowis Greeting,clarification,retrieval,answer,and
specified escalationstatesaredefined.
Knowledgebaserulesare Approvedcontenttypes,metadata,updaterules,
written andsourceownershipareclear.
Retrievalworkflowis Questionhandling,sourceselection,confidence
traceable checks,andfallbackrulesaredocumented.
Securityandprivacyrules Sensitivedata,account,billing,andloggingrules
areexplicit arecovered.
Happypath,unclearquestion,lowconfidence,
Testscovernormaland
missingknowledge,privacy,andescalationtests
failurepaths
exist.
Agenttasksaresmalland Eachtaskhassourceartifactsandacceptance
reviewable checks.
Configuration,testgates,rollback,monitoring,
Deploymentplanisready
andreviewprocessaredefined.
Productionreviewloop Feedbackupdatesknowledge,tests,specs,and
exists implementationinacontrolledway.

KeyTakeaways
An AI customer support system should be specified as a
support workflow, not as a general chatbot.
The knowledge base is the source of truth; the assistant
should answer from approved content or escalate.
Privacy and security rules must be written before
implementation because support conversations often contain
sensitive details.
Retrieval design should include confidence checks, fallback
rules, traceability, and production review.
Deployment is not the end of the project; monitoring and
review improve the knowledge base and prevent spec drift.
ReviewQuestions
1.    Why is it risky to let a support assistant answer without an
approved knowledge base?
2.    What is the difference between a clarification question and an
escalation?
3.    Which types of support issues should be escalated instead of
answered automatically?
4.    Why should retrieved sources include IDs and update dates?
5.    How does production review help prevent spec drift?
PracticalExercises
1.    Write three additional user requirements for a support assistant
used by an online learning platform.
2.    Create five sample knowledge base article titles and metadata
fields for a small SaaS product.
3.    Write a test case for a user who asks an unclear billing
question.
4.    Create an escalation rule for a support request involving
account ownership.

5.    Draft a deployment checklist for moving the assistant from local
testing to a staging environment.
InSummary
In this chapter, you built the complete specification workflow for an
AI customer support system. You started with user requirements,
defined the conversation flow, described the knowledge base,
designed retrieval, added security and privacy rules, created test
cases, planned agent implementation tasks, prepared deployment,
and closed the loop with production review.
The important lesson is that a useful support assistant is not created
by simply connecting AI to a chat box. It is created by specifying
what the assistant should know, how it should respond, when it
should ask for help, how it should protect users, how it should be
tested, and how it should be improved after release. That is spec-
driven AI engineering in practice.

Chapter 27
Project 3 - Building a SaaS
Analytics Dashboard with a
Spec-First Workflow
In this project, you will build the specification package for a SaaS
analytics dashboard before allowing an AI agent to generate
implementation code. The goal is not to rush into charts and
screens. The goal is to define the product goals, dashboard
requirements, data model, API design, frontend components, role-
based access rules, testing strategy, deployment workflow, and
maintenance plan so the generated system has a clear engineering
target.
You will work as if you are preparing a real product feature for a
SaaS company. By the end of the chapter, you will have a complete
workflow you can reuse for dashboards, reporting tools, internal
admin panels, and analytics features.
LearningObjectives
Bytheendofthischapter,youwill Whyitmatters
beableto
Translateproductgoalsinto AIagentsgeneratebettersoftware
measurabledashboardrequirements. whensuccessisdefinedinbusiness
anduserterms.
Designasimpleanalyticsdatamodel Dashboardsfailwhendatameaningis
beforeAPIorUIworkbegins. unclearorinconsistent.
SpecifyAPIendpoints,frontend Eachlayermustsupportthesame
components,andRBACrulesas requirementsinsteadofdriftingapart.
connectedartifacts.
Plantests,deployment,monitoring, Productiondashboardsneedaccuracy,
andmaintenancebefore performance,privacy,andlong-term
implementation. reliability.

Figure27.1:Thedashboardprojectisbuiltfromgoalstomaintenance,
notfromUImockupsalone.
27.1ProjectOverview
You will build a SaaS analytics dashboard called TeamPulse Analytics.
The application helps a SaaS company understand user activity,
subscription health, and customer engagement across different
accounts. The dashboard is not a toy chart page. It is a product
feature with requirements, access control, test coverage,
deployment planning, and maintenance rules.
The project is intentionally narrow enough to complete, but realistic
enough to teach a repeatable workflow. You will specify the system
before implementation so the AI agent knows what to build, what
not to build, and how the finished product will be judged.
ProjectRule
DonotaskanAIagentto"buildananalyticsdashboard"asavagueinstruction.
Giveitapackageofconnectedspecifications:goals,datamodel,APIs,UI
components,RBAC,tests,deployment,andmaintenancerules.
ProjectArea Decisionforthischapter
Applicationtype SaaSanalyticsdashboardforproduct
andaccountactivity.
Primaryusers Accountowners,administrators,
analysts,andread-onlyviewers.

ProjectRule
DonotaskanAIagentto"buildananalyticsdashboard"asavagueinstruction.
Giveitapackageofconnectedspecifications:goals,datamodel,APIs,UI
components,RBAC,tests,deployment,andmaintenancerules.
ProjectArea Decisionforthischapter
Mainvalue Helpteamsseeusagetrends,active
users,churnsignals,andfeature
adoption.
Coreconstraint Everydashboardresultmustbescoped
tothecorrecttenantanduserrole.
Qualitytarget Accuratedata,fastloading,safe
exports,clearerrors,andmaintainable
specs.
27.2ProductGoals
Product goals explain why the dashboard should exist. They are not
the same as features. A feature might say, "show a chart." A product
goal says, "help account owners identify declining usage before
renewal risk increases." The second statement gives the AI agent a
much stronger direction.
For this project, the dashboard should support three product goals:
show account health, reveal usage patterns, and help teams act on
changes. Each goal should connect to measurable dashboard
behavior.
| GoalID | ProductGoal | Dashboard | SuccessSignal Evidence |
| --- | --- | --- | --- |
| PG-1 | Showaccount | Healthscore, | Accountownercan |
| healthata | activeusers,usage | understand |  |
| glance. | trend,renewalrisk label. underoneminute. | accountstatusin |  |
| PG-2 | Revealproduct | Featureadoption | Analystcanidentify |
| usagepatterns. | chart,session volume,activeuser leastusedfeatures. trend. | thetopusedand |  |
| PG-3 | Supportaction | Exportreport,save | Admincanshareor |
| afterinsight. | filter,copy | actondashboard summary,view findingswithout accountdetail. manualdata cleanup. |  |

GoalID	ProductGoal	Dashboard	SuccessSignal
Evidence
PromptBox:TurnProductGoalsintoDashboardRequirements
YouareassistingwithaSaaSanalyticsdashboard.
Usetheproductgoalsbelowtoproducemeasurabledashboardrequirements.
Foreachrequirement,include:requirementID,userrole,metricoraction,acceptance
criteria,datasource,andfailurecondition.
Productgoals:
1.Showaccounthealthataglance.
2.Revealproductusagepatterns.
3.Supportactionafterinsight.

27.3DashboardRequirements
Dashboard requirements define what users must be able to see,
filter, compare, export, and understand. A dashboard requirement
should not simply say, "display analytics." It should define the
metric, the user role, the filter behavior, the loading state, the empty
state, and the acceptance criteria.
A strong dashboard requirement is specific enough that a developer,
tester, and AI agent can all understand the same expected behavior.
QualityRule
Everydashboardrequirementmustsaywhathappenswhendataismissing,
delayed,filteredtozero,orblockedbypermission.Theseconditionsarewhere
shallowAI-generateddashboardsusuallyfail.
| ReqID | Requirement | Role | Acceptance | Failure/Empty Criteria State |
| --- | --- | --- | --- | --- |
| DR-1 | Displayaccount | Owner, | Cardsshow | Ifnodataexists, |
| healthsummary | Admin | activeusers, | show"No |  |
| cards. | usagechange, | activityyet"and riskstatus,and explainhowdata plantierfor appears. selecteddate range. |  |  |
| DR-2 | Filteranalytics | Admin, | Changingfilters | Iffilterreturns |
| bydaterange | Analyst | refreshesall | norecords,keep |  |
| andfeature. | visiblecharts | filtersvisibleand andtables showanempty- consistently. statemessage. |  |  |
| DR-3 | Showproduct | Admin, | Chartdisplays | IftheAPIfails, |
| usagetrend | Analyst, | dailyactive | showasafe |  |
| chart. | Viewer | usersand | errorandretry sessionsforthe option. selectedperiod. |  |
| DR-4 | Export | Owner, | Exportrespects | Ifexportistoo |
| dashboarddata. | Admin | currentfilters anduser backgroundjob permissions. andshowstatus. | large,queue |  |

27.4DataModel
A dashboard is only as reliable as its data model. Before you design
screens, define the objects that hold accounts, users, events,
reports, exports, and audit records. This prevents the AI agent from
inventing fields differently in the database, API, and frontend.
Figure27.2:Thedatamodel,APIlayer,frontendcomponents,and
RBACboundarymustsupportthesamedashboardrequirements.
| Entity | Purpose | ImportantFields | Rules |
| --- | --- | --- | --- |
| Tenant | Representsa | id,name,plan, | Alldashboarddata |
| customer | status,created_at account. bytenant_id. | mustbescoped |  |
| User | Representsa | id,tenant_id, | Rolecontrolswhat |
| personusingthe | email,role, | theusercanview |  |
| SaaSproduct. | last_active_at | orexport. |  |
| Event | Storesproduct | id,tenant_id, | Eventsdrive |
| activity. | user_id, | chartsandusage event_type, metrics. feature, occurred_at |  |
| Report | Storessaved | id,tenant_id, | Savedreports |
| dashboardviews. | owner_id,name, filters,created_at dataoutside tenantscope. | mustnotexpose |  |

| Entity | Purpose | ImportantFields | Rules |
| --- | --- | --- | --- |
| ExportJob | Tracksqueued | id,tenant_id, | Exportsrunas |
| exports. | requested_by, | backgroundjobs status,file_url andrequire permission checks. |  |
| AuditLog | Recordssensitive | id,tenant_id, | Exports,role |
| actions. | actor_id,action, target,created_at failedaccess attemptsare logged. DataModelSketch tenant(id,name,plan,status,created_at) user(id,tenant_id,email,role,last_active_at) event(id,tenant_id,user_id,event_type,feature,occurred_at) report(id,tenant_id,owner_id,name,filters_json,created_at) export_job(id,tenant_id,requested_by,status,file_url,created_at) audit_log(id,tenant_id,actor_id,action,target_id,created_at) 27.5APIDesign The API design explains how the frontend will request dashboard data. In a spec-first workflow, endpoints are not guessed after the screen is built. They are defined from requirements and data needs. For this dashboard, every API request must include tenant context, role validation, filter validation, and safe error handling. The response should be predictable so frontend components can handle loading, success, empty, and error states. | changes,and |  |
| Endpoint | Metho | Purpos | KeyInputs Response d e |
| /api/metrics/summary | GET | Return | tenant_id, active_users, |
| KPI | date_range cards. risk_status, usage_change | sessions, |  |
| /api/metrics/trends | GET | Return | tenant_id, dailyactive |
| chart | date_range, | users,sessions, |  |
| series. | feature | featureusage |  |
| /api/reports | GET | List | tenant_id reportid, saved name,owner, |

| Endpoint | Metho | Purpos | KeyInputs d e reports. filters | Response |
| --- | --- | --- | --- | --- |
| /api/reports | POST | Create | name,filters | createdreport saved record report. |
| /api/exports | POST | Queue | date_range, | jobid,status, |
| export | filters, | estimated |  |  |
| job. | format | availability |  |  |
| /api/exports/{id} | GET | Check | jobid | status, export downloadlink status. whenready APIDesignRule DonotallowtheAIagenttoinventAPIresponsesinsidethefrontendcode. Defineresponseshapesfirst,thenasktheagenttoimplementbothsides againstthesamecontract. |

27.6FrontendComponentSpecification
The frontend component specification turns dashboard requirements
into a visible interface plan. It tells the AI agent what components to
create, what data they receive, what states they must handle, and
how they behave when filters change.
| Component | Purpose Needed | Data | States | Rules |
| --- | --- | --- | --- | --- |
| DashboardShell | Pageframe | current | loading,ready, | Donotshow |
| for | user, | unauthorized | dashboard |  |
| navigation, | tenant, | contentuntil |  |  |
| title,tenant | route | tenantaccess selector. isconfirmed. |  |  |
| FilterBar | Date, | available | ready, | Changing |
| feature, | filters, | validating | filters |  |
| plan,and | current | refreshesall |  |  |
| user-role | filterstate filters. views. | dependent |  |  |
| KpiCardGrid | Shows | summary | loading, | Cardsmust |
| summary | metrics | success, | explainwhat |  |
| metrics. | empty,error means. | eachmetric |  |  |
| TrendChart | Displays | daily | loading, | Emptycharts |
| time-series | metric | success, | mustnot |  |
| metrics. | points | empty,error | appearaszero performance. |  |
| ReportTable | Listssaved | reportlist | loading, | Onlyshow |
| reports. | success, | reportsvisible empty,error tothecurrent role. |  |  |
| ExportPanel | Queuesand | exportjob | idle,queued, | Exportbutton |
| tracks | status | ready,failed exports. forpermitted roles. PromptBox:GenerateFrontendComponentsfromtheSpec Usethedashboardrequirements,APIspecification,andRBACrulesbelow. Createafrontendcomponentplanbeforewritingcode. Foreachcomponent,includeprops,state,loadingbehavior,emptystate,errorstate,and accessibilitynotes. Donotinventnewmetrics,roles,orendpoints. | onlyappears |  |

27.7Role-BasedAccessControl
Analytics dashboards often contain sensitive business data. Role-
based access control prevents users from seeing metrics, reports,
exports, or account information they are not allowed to access.
RBAC must be part of the specification, not an afterthought.
| Role | View | Manage | ExportData | Manage |
| --- | --- | --- | --- | --- |
| Dashboard | Reports | Access |  |  |
| Owner | Yes | Yes | Yes | Yes |
| Admin | Yes | Yes | Yes | Limited |
| Analyst | Yes | Create | No,unless personal granted reports | No |
| Viewer | Read-only SecurityRule RBACmustbeenforcedontheserver.Hidingabuttoninthefrontendishelpful fortheuserinterface,butitisnotsecuritybyitself. | No | No | No |

27.8TestingStrategy
A dashboard test strategy must check more than whether
components render. It must verify metric calculations, API contracts,
role permissions, empty states, error states, export rules, and
performance under realistic data volume.
| TestLevel | WhattoTest | ExampleTest | WhyItMatters |
| --- | --- | --- | --- |
| Unit | Metriccalculation | Givenevents | Preventsincorrect |
| helpersandfilter | acrossthreedays, | numbersfrom |  |
| parsing. | dailyactiveusers aregrouped dashboard. correctly. | reachingthe |  |
| API | Endpoint | Viewercannot | Protectssensitive |
| contractsand | createanexport | dataandkeeps |  |
| permission | job. | responses checks. predictable. |  |
| Integration | Database,API, | Filterchange | Preventslayer |
| andfrontend | updatesKPIcards flow. andtrendchart consistently. | mismatch. |  |
| End-to-end | Userjourney | Adminlogsin, | Confirmsthe |
| acrossthe | filtersmetrics, | systemworksas |  |
| dashboard. | savesreport, | aproductfeature. queuesexport. |  |
| Security | Tenantisolation | Userfromtenant | Preventsdata |
| andaccess | Acannotrequest control. tenantBmetrics. | leaks. |  |
| Performance | Loadtimeand | Dashboard | Keepsanalytics |
| querybehavior. | summaryreturns withintarget production. underexpected eventvolume. | usefulin |  |

TestCaseTemplate
TestID:
Requirementcovered:
Role:
Preconditions:
Inputoruseraction:
Expectedresult:
Permissionexpectation:
Errororempty-stateexpectation:
Evidencetocapture:
Status:Notrun/Pass/Fail/Needsreview
27.9DeploymentWorkflow
Deployment planning ensures the dashboard can move safely from
development to production. For this project, the workflow includes
environment configuration, database migration, build verification,
release checks, rollback planning, and post-release monitoring.
Figure27.3:Adashboardreleaseisnotfinisheduntilmonitoringand
specupdatesfeedthenextimprovementcycle.

| Stage | RequiredAction | QualityGate | RollbackTrigger |
| --- | --- | --- | --- |
| Prepare | Confirm | Configchecklist | Missingorinvalid |
| environment | complete. | configuration. variablesand analyticsdata sources. |  |
| Migrate | Applydatabase | Migrationtested | Migrationerroror |
| changesfor | onstagingdata. reportsandexport jobs. | datamismatch. |  |
| Build | Runtestsand | Allrequiredtests | Failingtestor |
| createdeployment | pass. | unsafewarning. package. |  |
| Release | Deployto | Healthchecks | Higherrorrateor |
| productionwith | andcore | brokendashboard |  |
| monitoring | dashboardroute enabled. pass. | route. |  |
| Verify | Checkmetrics | Smoketest | Dataleakrisk, |
| accuracy, | evidence | wrongmetric,or |  |
| permissions,and | captured. | severeperformance logs. issue. DeploymentRule Adashboardshouldnotbedeployedonlybecausethepageloads.Itshouldbe deployedwhendataaccuracy,permissionboundaries,performance,error behavior,androllbackstepsareready. 27.10MaintenancePlan Maintenance keeps the dashboard trustworthy after release. Analytics systems drift when product events change, metrics are renamed, filters no longer match user needs, or new roles are added without updating the specification. |  |
| Maintenance | WhattoWatch Area Required? | Action | SpecUpdate |
| Metricaccuracy | Suddenmetric | Investigateevent | Yes,ifmetric |
| drops,impossible | ingestionand | meaning |  |
| values,mismatch | calculationrules. withsourcedata. | changes. |  |
| Performance | Slowsummaryor | Reviewqueries, | Yes,iflimitsor |
| trendendpoints. | indexes,cache | targetschange. |  |

| Maintenance | WhattoWatch Area Required? rules,anddate ranges. | Action | SpecUpdate |
| --- | --- | --- | --- |
| Errortracking | APIfailures,failed | Classifycauseand | Yes,ifnewerror |
| exports, | createfixtasks. permissionerrors. introduced. | statesare |  |
| Userfeedback | Confusingcharts, | Convertrepeated | Yes,when |
| missingfilters, | feedbackinto | acceptedinto |  |
| exportrequests. | requirements. | roadmap. |  |
| Specdrift | Codebehaviorno longermatches refactorcodeto requirements. matchapproved behavior. MaintenancePrompt Reviewtheproductiondashboardnotesbelow. Identifywhethereachitemisabug,missingrequirement,performanceissue,security issue,orspecdrift. Foreachitem,propose:affectedrequirement,evidenceneeded,fixtask,testupdate, andspecificationupdate. | Updatespecsor | Always. |

27.11FinalProjectChecklist
Product goals are defined and measurable.
Dashboard requirements include roles, filters, acceptance
criteria, and failure states.
Data model entities support the required metrics and tenant
boundaries.
API endpoints have clear inputs, outputs, permission checks,
and error behavior.
Frontend components define props, states, empty views,
errors, and accessibility notes.
RBAC rules are specified for viewing, saving, exporting, and
managing access.
Tests cover metrics, API contracts, UI behavior, security,
performance, and role boundaries.
Deployment workflow includes configuration, migration,
quality gates, rollback, and verification.
Maintenance plan explains how monitoring, feedback, and
spec drift will be handled.
Agent tasks can be created directly from the connected
specifications.
ProjectExercise:BuildYourOwnDashboard
SpecPack
Use the structure in this chapter to create a spec pack for a different
dashboard, such as a finance dashboard, learning dashboard,
operations dashboard, or customer success dashboard. Keep the
project narrow. Define the goals first, then the requirements, data
model, API design, frontend components, RBAC rules, tests,
deployment workflow, and maintenance plan.
Step	YourArtifact	CompletionRule
1	Productgoals	Atleastthreegoalswith
measurablesuccess
signals.

| Step | YourArtifact | CompletionRule |
| --- | --- | --- |
| 2 | Dashboardrequirements | Atleastfiverequirements withacceptancecriteria andfailurestates. |
| 3 | DataandAPIdesign | Entitiesandendpoints matchtherequirements. |
| 4 | Frontendspecification loading,empty,error,and permissionstates. | Componentsinclude |
| 5 | Testinganddeployment | Testsandrolloutstepsare plan tiedtorequirements. ReviewQuestions 1.Why should dashboard product goals be written before charts are designed? 2.What can go wrong if the frontend invents its own API response shapes? 3.Why is tenant isolation critical in SaaS analytics dashboards? 4.Which dashboard states should be tested besides the happy path? 5.How does a maintenance plan help prevent spec drift after release? KeyTakeaways A spec-first dashboard starts with product goals, not charts. Data, APIs, frontend components, RBAC, tests, and deployment must all trace back to dashboard requirements. Useful dashboard specs include empty states, error states, permission rules, and performance expectations. AI agents are more reliable when they receive a complete project context pack instead of vague UI instructions. Production dashboards require maintenance because metrics, users, roles, and product events change over time. |

InSummary
In this chapter, you built the specification package for a SaaS
analytics dashboard. You moved from product goals to dashboard
requirements, then into data modeling, API design, frontend
components, RBAC, tests, deployment, and maintenance. This is the
practical value of spec-driven AI engineering: you do not ask the AI
agent to guess the product. You give it a clear system of artifacts
that guide implementation and review.
The next project in the book uses everything you have practiced so
far in a larger capstone workflow. By now, you can see the pattern:
clear intent creates clear specs, clear specs create better tasks,
better tasks create better code, and better review keeps the system
aligned after release.

Chapter 28
Capstone Project - Building a
Production-Ready AI-
Powered Web Application
_______________________
__________________
This capstone brings the entire book together. You will design a
production-ready AI-powered web application from vision to
deployment, using the full spec-driven chain: requirements, product
specification, technical specification, architecture decisions, database
and API design, traceability, test planning, agent task planning,
implementation, deployment, monitoring, and final review.
The project app is called ProjectMate AI. It is a team workspace that
lets users create projects, store notes, ask questions about approved
project knowledge, receive task suggestions, and review AI-
generated summaries before saving them. The goal is not to build
the largest possible app. The goal is to show how a disciplined
engineering workflow can turn an AI idea into a controlled, testable,
secure, maintainable product.
CapstonePrinciple
Aproduction-readyAI-poweredwebapplicationisnotjustapromptattachedto
awebsite.Itneedsrequirements,permissions,databoundaries,tests,logging,
rollback,monitoring,andamaintenanceprocessthatkeepsthespecification
alive.

LearningObjectives
By the end of this chapter, you will be Why it matters in a production AI
able to... project
Assemble every major spec-driven artifact Production work depends on connected
into one coherent capstone workflow. artifacts, not isolated documents.
Define requirements, product behavior, AI agents perform better when the work is
technical design, database, APIs, and AI bounded by clear instructions and
workflow before implementation. constraints.
Use traceability to connect requirements, Traceability prevents hidden gaps between
tasks, tests, and review evidence. what was requested and what was built.
The system must remain understandable
Plan deployment, monitoring, rollback, and
and maintainable after users begin using
spec updates before release.
it.
Review the final project using quality gates The capstone should teach a repeatable
and lessons learned. workflow you can use on future projects.
Figure 28.1: The capstone artifact chain from project vision to final lessons
learned.

28.1CapstoneProjectVision
ProjectMate AI is a web application for small teams that need one
place to manage project notes, tasks, decisions, and AI-assisted
summaries. Users can create a project, add approved notes or
documents, ask questions about the project context, ask the
assistant to suggest tasks, and review generated summaries before
saving them.
| Vision Area | Decision | Reason | Success Measure They need simple A user can create a Small product, project memory and project and get useful Target users operations, or task support without AI assistance in one engineering teams. complex setup. session. Turn project |
| --- | --- | --- | --- |
| knowledge into | The AI should support | Users accept, edit, or |  |
| Core value | reviewed summaries, | work, not replace | reject AI suggestions |
| answers, and task | review. | before saving. suggestions. The AI may produce Every AI answer cites Production AI needs unsupported, approved project Main risk boundaries and review overconfident, or context or clearly says points. private information. it lacks support. Ship a secure |  |
| minimum viable | The first release should | Core flows pass tests |  |
| Release goal | product with | be safe, observable, | and production |
| monitoring and | and maintainable. rollback. PromptBox-CapstoneVision YouarehelpingmerefineanAI-poweredprojectworkspace.Donotwritecode. Convertthisvisionintoscope,non-goals,usergroups,risks,assumptions,and measurablereleasesuccesscriteria. 28.2RequirementsDocument The requirements document defines what the system must do. At this stage, avoid implementation language. Focus on user needs, constraints, acceptance criteria, and risks. Req Priorit | checks. |  |
| Requirement | Acceptance Criteria ID y | Risk Controlled |  |
| REQ- | Users can create and | A signed-in user can | Unauthorized Must |
| 01 | manage projects. | create, rename, archive, | project access. |

Req Priorit
| Requirement | Acceptance Criteria ID y and view only their authorized projects. A user can add notes Users can add AI using REQ- and mark them as | Risk Controlled |
| --- | --- | --- |
| approved project | unapproved 02 approved for AI knowledge. context. retrieval. Answers must use Users can ask approved project REQ- Hallucinated | Must |
| project-specific | context or state that the 03 answers. questions. answer is not supported. Suggestions remain | Must |
| REQ- | AI can suggest tasks draft until a user Must | Unreviewed AI |
| 04 | from project notes. approves them. Project creation, AI System records audit REQ- generation, approval, | actions. |
| events for important | No accountability. 05 deletion, and role actions. changes are logged. Requirements Document Snippet Requirement Format ID: REQ-03 Name: Project-specific AI question answering User need: A user needs answers based only on approved project context. Acceptance criteria: - Answer must cite approved notes or documents. - If context is missing, answer must say it is not supported. - User must belong to the project. Constraints: - Do not use private data from another project. - Do not save generated text until the user reviews it. 28.3ProductSpecification The product specification turns requirements into feature behavior. It describes screens, flows, user roles, non-goals, and release priorities. It should be detailed enough for design and engineering, but not overloaded with code. | Should |

Non-Goal for
Feature	User Flow	Product Rule
MVP
User creates a project, Project data is private
Project No advanced
opens its dashboard, to authorized
workspace team billing.
and adds notes. members.
User adds a note, Only approved
Knowledge No automatic
reviews it, then marks knowledge enters
approval external crawling.
it approved for AI use. retrieval.
User asks a question Unsupported answers
AI question No autonomous
and receives an answer must be clearly
panel external actions.
with context references. flagged.
User asks AI to suggest
AI suggestions are No automatic
Task suggestion tasks from notes, then
drafts until human assignment to
flow approves selected
approval. teammates.
tasks.
ProductScopeRule
TheMVPshouldprovetheworkflowsafely:createproject,addapproved
knowledge,askgroundedquestions,suggestdrafttasks,reviewoutput,deploy,
monitor.Anythingoutsidethatchainshouldwait.
28.4TechnicalSpecification
The technical specification explains how the system will be built. It
should define components, responsibilities, interfaces, security
boundaries, AI workflow rules, error handling, and operational
concerns.

Figure 28.2: A production-oriented architecture for the capstone AI-powered
web application.
Failure
| Component | Responsibility Handling | Key Rules |
| --- | --- | --- |
| Displays projects, | Never treat AI output as | Show user- |
| Web app | notes, AI panel, and | saved until user friendly errors and |
| review screens. | approval. | retry options. |
| Validates requests, | Every request checks | Return safe error |
| Backend API | applies permissions, | user, role, and project messages and log |
| stores data. | membership. | details internally. Return Builds prompts, unsupported |
| AI orchestration | retrieves approved | Use approved project response when |
| layer | context, formats draft evidence is outputs. missing. Stores users, Tenant/project Transactions projects, notes, tasks, | knowledge only. |
| Database | ownership required on approvals, audit all records. writes. records. Indexes approved Failed jobs are Background Jobs are idempotent knowledge and runs logged and visible jobs and retry safely. non-blocking work. to maintainers. Technical Specification Snippet AI Workflow Rule 1. Receive user question. 2. Verify user has access to the project. 3. Retrieve only approved project knowledge. | protect multi-step |

4. Build a bounded prompt with citations and refusal rule.
5. Generate a draft answer.
6. Validate that the answer is supported by retrieved context.
7. Return answer as reviewable output, not automatic truth.
28.5ArchitectureDecisionRecords
Architecture Decision Records, or ADRs, prevent important design
choices from disappearing into chat history. Each ADR should state
the decision, context, options considered, consequences, and review
date.
Options
| ADR | Decision | Reason | Consequence Considered Auto-save, Human review Use review-before- More clicks, but |
| --- | --- | --- | --- |
| ADR- | review-before- | reduces risk from save for AI safer production |  |
| 01 | save, disabled outputs. behavior. saving. output. Users must Prevents accidental | unsupported AI |  |
| Separate approved | Index all notes, ADR- retrieval of | approve |  |
| knowledgefrom | index approved 02 unreviewed | knowledge |  |
| draft notes. | notes only. | before AI can content. use it. Inline indexing, Requires job |  |
| ADR- | Use background | scheduled batch, monitoring and | Keeps the app |
| 03 | jobs for indexing. retry handling. queue. Architecture Decision Record Template ADR Template Title: ADR-02 - Separate approved knowledge from draft notes Status: Accepted Context: The AI must not use unreviewed project material. Decision: Only approved notes and documents enter the knowledge store. Alternatives: Index everything; require manual copy-paste; disable retrieval. Consequences: Safer answers, but one extra approval step for users. Review trigger: Revisit if users report too much friction. 28.6DatabaseandAPIDesign The database and API design must protect ownership and support the core workflows. A small number of well-designed tables and endpoints is better than a large, unclear design. | background | responsive. |

Security
| Entity | Purpose | Important Fields Rule Only members Container for id, owner_id, name, may Project notes, tasks, status, created_at access and AI activity. project records. Role controls Defines who project_id, user_id, editing, ProjectMember can access a role approval, project. and admin actions. Only Stores project_id, source_id, approved approved notes |
| --- | --- | --- |
| KnowledgeItem | content, | items are or document approved_by retrievable chunks. by AI. AI-created |
| Stores human- | project_id, title, | tasks |
| Task | approved work | status, remain |
| items. | source_ai_run_id approval. Audit logs must not Records expose actor_id, action, | draft until |
| AuditEvent | important | secrets or project_id, metadata system actions. raw sensitive content. |
| Endpoint | Purpose | Method Permission Key Test User cannot see |
| Create and | GET/POS | Signed-in another /projects |
| list projects. | T | user user's private project. Non- Create member GET/POS Project |
| /projects/{id}/notes | project | receives T member notes. access denied. |
| /projects/{id}/knowledge/approv | Approve | POST Editor/Admin Viewer |
| e | note for AI use. approve | cannot |

Security
| Entity | Purpose | Important Fields Rule knowledge . Answer Ask a uses grounded Project |
| --- | --- | --- |
| /projects/{id}/ai/ask | POST | approved project member context question. only. Generate Suggested draft task tasks are |
| /projects/{id}/tasks/suggest | POST | Editor/Admin suggestions drafts until . approved. 28.7RequirementsTraceabilityMatrix The requirements traceability matrix proves that the capstone is not just a collection of features. It links every requirement to design artifacts, tests, implementation tasks, and review evidence. |
| Req | Agent | Review Design Artifact Test Evidence |
| ID | Task | Evidence Project and Code review |
| REQ- | Project access unit ProjectMember data confirms | TASK-01, |
| 01 | and API tests. model; project API. ownership checks. Review confirms Knowledge approval Approval permission | TASK-02 |
| REQ- | TASK-03, | only approved flow; KnowledgeItem test; retrieval |
| 02 | TASK-04 | items are entity. exclusion test. indexed. Grounded answer Review confirms |
| REQ- | AI question workflow; test; unsupported citation and | TASK-05, |
| 03 | retrieval rules. answer test. fallback behavior. Review confirms | TASK-06 |
| REQ- | Task suggestion flow; TASK-07 AI cannot auto- | Draft task test; |
| 04 | draft status rules. finalize tasks. Review confirms | approval test. |
| REQ- | AuditEvent model and | Audit event tests for TASK-08 no secrets in audit |
| 05 | logging rules. metadata. TraceabilityRule Ifarequirementhasnotest,notask,ornoreviewevidence,itisnotreadyfor production.Thematrixshouldrevealgapsbeforeusersfindthem. | key actions. |

28.8TestSpecification
The test specification describes how quality will be proven before
release. Because this is an AI-powered app, tests must cover normal
behavior, permission failures, unsupported AI answers, retrieval
boundaries, review-before-save behavior, and production smoke
checks.
| Test Layer | What to Prove Only approved Draft notes never Small rules work knowledge | Example Test | Requirement | Pass Criteria |
| --- | --- | --- | --- | --- |
| Unit | REQ-02 | appear in AI correctly. items are context. retrievable. |  |  |
| Endpoints | Viewer cannot | 403-style response |  |  |
| API | enforce | approve | REQ-02 | with safe |
| permissions. | knowledge. Answers are Ask a question System says grounded or with no | message. |  |  |
| AI workflow | REQ-03 | answer is not clearly approved supported. unsupported. context. Review screens AI task User must approve prevent suggestions |  |  |
| UI | REQ-04 | before task is accidental appear as saved as active. saving. drafts. User A cannot Project isolation No cross-project |  |  |
| Security | query User B is enforced. content returned. project. Create project, Core flow Deployment | REQ-01 |  |  |
| Production | add note, | succeeds in works after All |  |  |
| smoke | approve, ask, | production-like release. review. environment. Test Specification Snippet AI Grounding Test Case Given a project has no approved knowledge about budget When the user asks: "What is the project budget?" Then the AI response must say the answer is not supported by approved project context And the response must not invent a number And the event must be logged as an unsupported-answer case 28.9AgentTaskPlan The agent task plan breaks the capstone into small, reviewable work units. Each task should have inputs, constraints, expected outputs, |  |  |

tests, and review instructions. Do not ask the AI agent to build the
whole app in one instruction.
Task
Agent Task	Inputs	Expected Output	Review Focus
ID
Project and member
| TASK- | Create project models with | Requirements, | Tenant/project |
| --- | --- | --- | --- |
| 01 | data model. | database design. ownership rules. Create/list project | isolation. |
| TASK- | Create project | API spec, security endpoints with | Access checks |
| 02 | API endpoints. | rules. | and safe errors. validation. |
| Create note | Notes can be added TASK- Product spec, | Draft vs |  |
| and knowledge | and approved for 03 ADR-02. | approved |  |
| approval flow. | retrieval. | separation. Technical spec, Approved knowledge |  |
| TASK- | Create indexing | Retry and failure background job is indexed |  |
| 04 | job. | logging. rules. asynchronously. Grounded answer Create AI |  |
| TASK- | AI rules, retrieval question | endpoint with | No unsupported |
| 05 | design, tests. workflow. fallback. Review screen for AI | unsupported | claims. |
| TASK- | Create review- | Product spec, test answers and task | Human approval |
| 06 | before-save UI. suggestions. Add audit Important actions No secrets or | spec. | before saving. |
| TASK- | events and | Reliability and logged with safe sensitive raw text |  |
| 07 | monitoring | monitoring specs. metadata. in logs. hooks. Agent Task Template Agent Task Instruction Format Task ID: TASK-05 Goal: Build the AI question workflow. Inputs: Requirements REQ-03, retrieval rules, API spec, test spec. Constraints: - Use only approved knowledge items. - Return unsupported response when evidence is missing. - Do not save AI output automatically. Expected output: - Endpoint logic - Prompt construction helper - Tests for grounded and unsupported answers Review checklist: |  |

- Permission check before retrieval
- Context boundary enforced
- Safe error and logging behavior
28.10GitHubWorkflow
This workflow is GitHub-compatible, but the capstone does not
depend on an external repository. You can follow the same discipline
with local Git branches, a shared review folder, or any version-
control platform. The important point is not the brand of the tool.
The important point is controlled change.
Workflow
| Purpose | Required Evidence Step Separate one | AI-Agent Rule |
| --- | --- | --- |
| change from the | Branch name includes | Agent works on one task Create branch |
| main working | task ID. version. Commit message | only. |
| Commit small | Make progress | No large mystery names requirement |
| changes | reviewable. and task. | commits. |
| Open review | Explain what | Summary, tests, AI output must be |
| request | changed and why. | screenshots if useful. reviewed by a human. |
| Prove the change | Tests, linting, security Run checks | Do not merge failing |
| is safe. | review, smoke check. Move verified Reviewer approval Merge after Update specs if behavior change into main and updated approval changed. line. traceability. GitHub-Compatible Review Template Pull Request or Review Request Template Title: TASK-05 - Add grounded AI question workflow Linked requirements: REQ-03 Summary: - Added project permission check before retrieval. - Added approved-knowledge retrieval boundary. - Added unsupported-answer fallback. Tests run: - Grounded answer test - Missing-context test - Cross-project access test Reviewer checklist: | checks. |

[ ] Requirement is satisfied
[ ] Tests prove the behavior
[ ] Security boundary is preserved
[ ] Spec and traceability matrix are updated
28.11ImplementationWorkflow
Implementation should follow the artifact chain. The safest workflow
is to build one thin slice at a time: data model, API, tests, UI, AI
workflow, review, then integration. Each slice should pass its tests
before the next slice begins.
| Phase | Build Activity | Verification | Exit Rule |
| --- | --- | --- | --- |
| Create app structure, | Model tests and | No business feature |  |
| Foundation | configpattern, | configuration | begins until |
| database models. | checks. | ownership rules exist. Build project create/list |  |
| Core project | API tests for allowed and membership | Project isolation is |  |
| flow | and denied access. checks. Draft exclusion and | proven. |  |
| Knowledge | Build notes, approval, approved retrieval | AI cannot retrieve |  |
| flow | and indexing job. | unapproved content. tests. Build question endpoint Grounding, fallback, AI output remains |  |
| AI workflow | and task suggestion reviewable. endpoint. save tests. Add logging, monitoring Smoke tests and Production Release gates are hooks, deployment deployment readiness complete. config, rollback notes. checklist. ImplementationRule Buildthesmallestusefulverticalslice,thentestandreviewit.Donotletthe agentgeneratealargeapplicationallatonce,becauselargechangeshide brokenassumptions. 28.12DeploymentandMonitoring Deployment planning turns the capstone into a production workflow. You need documented configuration, migration checks, rollback steps, smoke tests, logging, metrics, error tracking, and feedback loops. | and review-before- |  |

Figure 28.3: Final release quality gates for the production-ready capstone
project.
Example Failure
| Area | Requirement Signal Response | Owner |
| --- | --- | --- |
| All environment | Missing config | Block |
| Configuration | variables are | detected before deployment and Developer |
| documented. | start. | fix config. Database Migration Rollback changes are |
| Migration | succeeds on | migration or Developer tested before staging data. restore backup. production. |
| Important actions | AI ask, | Investigate logs |
| Logging | have safe | approve, reject, without exposing Maintainer |
| structured logs. | save, error. Unhandled errors Rollback or Spike in AI | secrets. |
| Error tracking | are captured and | disable affected Maintainer workflow errors. grouped. feature. Slow question Profile, scale, Core flows meet |
| Performance | endpoint or | cache,or Developer response targets. queue delay. degrade safely. Repeated Users can report Update specs, feedback on Product |
| Feedback | unclear AI | prompts, and unsupported owner output. tests. answers. Deployment and Monitoring Checklist Snippet Production Smoke Test 1. Sign in as a test user. |

2. Create a project.
3. Add a project note.
4. Approve the note for AI use.
5. Ask a question answerable from the note.
6. Ask a question not supported by the note.
7. Generate draft task suggestions.
8. Approve one task and reject another.
9. Confirm logs and audit events exist.
10. Confirm monitoring shows no critical errors.
28.13FinalReviewandLessonsLearned
The final review is where you decide whether the capstone is truly
production-ready. Do not judge the project only by whether the
interface opens. Judge it by whether the evidence chain is complete.
| Review Area | Question to Ask | Evidence Required | Decision |
| --- | --- | --- | --- |
| Did we build what was | Requirements document Requirements | Pass / Fix |  |
| requested? | and traceability matrix. Pass / Are answers grounded AI workflow tests and AI behavior Improve and reviewable? review screens. prompts | gaps |  |
| Can users access only | Permission tests and Security | Pass / Block |  |
| allowed project data? | code review evidence. Pass / Add Does the system recover Retry, timeout, queue, Reliability failure from common failures? and logging tests. handling | release |  |
| Can we release and roll | Deployment checklist and Deployment | Pass / Delay |  |
| back safely? | rollback plan. Feedback loop, Pass / Will the spec stay | release |  |
| Maintenance | monitoring, and spec- current after release? drift process. owner LessonLearned Thecapstoneteachesarepeatablehabit:defineintent,writespecs,design carefully,plantests,breakworkintoagenttasks,revieweverychange,deploy withevidence,monitorproduction,andupdatethespecwhenrealityteaches yousomethingnew. | Assign |  |

FinalProjectChecklist
Stat
Area Checklist Item
us
Project purpose, users, risks, success measures, and non-
Vision [ ]
goals are defined.
| Requirements | Every requirement has acceptance criteria and priority. User flows, screen behavior, and review-before-save rules Product spec [ ] are clear. Architecture, AI workflow, security, reliability, and operations Technical spec [ ] are specified. | [ ] |
| --- | --- | --- |
| ADRs | Important design decisions are recorded with consequences. Ownership, permissions, validation, errors, and response Database/API [ ] shapes are defined. | [ ] |
| Traceability | Requirements map to tasks, tests, and review evidence. Unit, API, AI workflow, UI, security, performance, and smoke Tests [ ] tests are planned. | [ ] |
| Agent tasks | Work is split into small, reviewable implementation tasks. Branch, commit, review, and merge rules are followed locally Change control [ ] or on GitHub. Configuration, migrations, rollback, and monitoring are Deployment [ ] ready. | [ ] |
| Maintenance | Feedback and spec-drift processes are active. PracticalExercises 1.RewritetheProjectMateAIvisionforadifferentdomain,suchas classroomprojects,constructionprojectrecords,orcustomeronboarding. 2.Createthreenewrequirementsandaddthemtothetraceabilitymatrix withtests,tasks,andreviewevidence. 3.WriteoneADRforamajordesignchoice,suchaswhetherAIoutputs shouldbeautomaticallysavedorreviewedfirst. 4.DraftfiveAPItestcasesforprojectaccess,knowledgeapproval,andAI questionanswering. 5.Createadeploymentsmoketestchecklistforyourowncapstoneversion. | [ ] |

ReviewQuestions
1.Whyisacapstoneprojectmoreusefulwhenitincludesthefullartifact
chaininsteadofonlyimplementationcode?
2.WhyshouldAI-generatedanswersbetreatedasreviewableoutputsrather
thanautomatictruth?
3.Howdoesarequirementstraceabilitymatrixreduceproductionrisk?
4.WhatisthepurposeofanArchitectureDecisionRecord?
5.WhyshouldtheGitHubworkflowbeunderstoodasacontrolled-change
workflowratherthanonlyaplatformfeature?
6.Whatmonitoringsignalswouldtellyouthatthecapstoneisdriftingaway
fromitsspecification?
KeyTakeaways
Thecapstonecombinesthecompletespec-drivenworkflowfromproject
visiontoproductionmonitoring.
Aproduction-readyAI-poweredwebappneedsboundariesarounddata,
permissions,retrieval,prompts,review,logging,anddeployment.
Traceabilityconnectsrequirementstodesign,tasks,tests,codereview,
andreleaseevidence.
GitHubcansupporttheworkflow,buttherealdisciplineiscontrolled
change,smalltasks,review,anddocumentedevidence.
Productionisnottheendoftheproject.Monitoring,feedback,
maintenance,andspecupdateskeepthesystemtrustworthy.
InSummary
This chapter completed the capstone project by showing how to
build a production-ready AI-powered web application through a full
spec-driven workflow. You defined the vision, requirements, product
specification, technical specification, ADRs, database and API design,
traceability matrix, test specification, agent task plan, GitHub-
compatible workflow, implementation workflow, deployment and
monitoring plan, and final review process. The most important

lesson is that AI-assisted development becomes reliable only when
every generated change is guided by a clear specification, verified by
tests, reviewed by humans, and monitored after release.

Part VII
Scaling Spec-Driven AI
Engineering

Chapter 29
Working with Product
Managers, Developers, and AI
Agents
Spec-driven AI engineering becomes more valuable when a team
uses it together. A solo developer can keep intent in their head for a
short time, but a team needs shared specifications so product
managers, developers, reviewers, and AI agents are all working from
the same source of truth.
This chapter explains how to scale the workflow beyond individual
prompting. You will learn how product ideas become engineering
handoffs, how developers give AI agents bounded tasks, how teams
review AI output, how feedback and scope changes are managed,
and how a shared workflow template keeps everyone aligned.
TeamPrinciple
AIagentsdonotremovetheneedforteamwork.Theyincreasetheneedfor
clearhandoffs,sharedcontext,explicitdecisions,anddisciplinedreview.

LearningObjectives
By the end of this chapter, you will be Why it matters when teams use AI
able to... agents
Explain why shared specifications are A shared spec prevents each person or
essential for product managers, developers, agent from building from a different
reviewers, and AI agents. version of the truth.
Create product-to-engineering handoffs A weak handoff creates hidden
that are clear enough to become tasks, assumptions, rework, and confusing AI
tests, and implementation work. outputs.
Prepare developer-to-agent handoffs that AI agents perform better when they
include context, constraints, expected receive bounded work instead of vague
outputs, and review rules. instructions.
Review AI output as a team without turning Team review turns generated output into
review into blame or confusion. accountable engineering evidence.
Scaling requires a process that survives
Manage feedback, scope changes, and
changing priorities and multiple
alignment through repeatable templates.
contributors.
Figure 29.1: A shared specification hub keeps product, engineering, AI agents,
reviewers, and stakeholders aligned.
29.1WhyTeamsNeedSharedSpecifications
A team needs shared specifications because every role sees the
product from a different angle. A product manager focuses on user
value and priority. A developer focuses on structure, constraints, and
maintainability. A reviewer focuses on correctness and risk. An AI

agent focuses only on the context it receives. Without a shared
specification, those views drift apart.
The shared specification is not a pile of documents. It is the working
memory of the project. It explains what is being built, why it
matters, what should not be built, how quality will be checked, and
what changed after review.
| What the Role | What Can Go Wrong | Spec Artifact That Role |
| --- | --- | --- |
| Needs | Without Specs | Helps |
| Clear scope, user | Features are built that Product | Product Requirements |
| needs, priorities, | do not match the manager | Document and |
| acceptance criteria. | product goal. Architecture, Code works locally but Technical specification | change log. |
| Developer | constraints, data | breaks design, security, and task list. model, APIs, tests. or maintainability. Bounded context, The agent guesses, explicit instructions, Agent context pack AI agent overbuilds, or changes examples, forbidden and task brief. unrelated code. changes. Requirements, Review becomes expected behavior, Review checklist and Reviewer opinion-based instead of tests, risks, traceability matrix. evidence-based. evidence. |
| Visible progress, | Feedback arrives late | Decision log, demo |
| Stakeholder | tradeoffs, decisions, | and causes major notes, and feedback |
| and impact. | rework. | register. PracticalRule Asharedspecificationshouldanswerthreequestionsforeveryone:Whatarewe building?Howwillweknowitworks?Whathaschangedsincethelastdecision? 29.2Product-to-EngineeringHandoff The product-to-engineering handoff is where product intent becomes buildable engineering work. The goal is not to hand developers a vague idea and ask them to figure it out. The goal is toprovide enough clarity for the engineering team to design, test, task, and review the work. |

Figure 29.2: A clear handoff chain moves from product intent to updated
specifications after team review.
What It Should Question It
Handoff Item Common Weakness
Contain Answers
User pain, business The problem is
Problem Why should this be
reason, current described as a feature
statement built?
limitation. request only.
User goal, action,
| User | What must the user | The requirement has outcome, acceptance |
| --- | --- | --- |
| requirement | be able to do? | no pass/fail condition. criteria. |
| Must-have, should- | What should the | The team overbuilds Priority and |
| have, later, explicitly | team not build | because boundaries non-goals |
| out of scope. | now? | are missing. Security, privacy, What could go Risks are discovered Risk notes reliability, usability, wrong? after implementation. compliance concerns. Unknowns that need What needs The AI agent fills gaps Open questions decision before or clarification? with guesses. during design. Product Handoff Template Product-to-Engineering Handoff Template Feature name: Problem statement: Target users: User goals: Must-have requirements: |

Acceptance criteria:
Non-goals for this release:
Known constraints:
Risks and sensitive areas:
Open questions:
Decision owner:
Date of handoff:
29.3Developer-to-AgentHandoff
The developer-to-agent handoff is different from a normal task
assignment. An AI agent has no hidden project memory unless you
provide it. It needs the exact task, the relevant specifications, the
code area or artifact area to work on, the constraints, the expected
output, and the review criteria.
Handoff Bad Example to
What to Include Why It Matters
Element Avoid
One feature, one bug, Prevents the agent
Task "Improve the whole
onetest set, or one from changing
boundary app."
document section. unrelated work.
Requirements, design
| Relevant | Gives the agent the notes, API rules, | "You know what I |
| --- | --- | --- |
| context | source of truth. examples, tests. Files, behavior, data, | mean." |
| Forbidden | roles, or APIs the | Protects stable parts No boundaries |
| changes | agent must not | of the system. mentioned. change. Code, tests, Expected Makes completion explanation, checklist, "Do it well." output reviewable. or questions. What humans will Keeps accountability |
| Review rules | check before accepting with the team. output. Agent Handoff Template Developer-to-Agent Handoff Template Task ID: Linked requirement(s): Goal: Relevant context to use: Files or modules in scope: Files or modules out of scope: | No review criteria. |

Constraints:
Expected output:
Tests to create or update:
Questions to ask before changing code:
Review checklist:
Do not proceed if:
AgentControlRule
Theagentshouldneverreceiveataskthattheteamcannotreview.Ifthe
outputcannotbecheckedagainstrequirements,tests,orarchitecture,thetask
istoovague.
29.4ReviewingAIOutputasaTeam
Team review is where AI-generated output becomes accountable
engineering work. The review should not ask only, "Does this look
good?" It should ask whether the output satisfies requirements,
respects architecture, passes tests, protects users, and keeps future
maintenance clear.
Evidence
| Review Layer | Main Question Needed Requirement ID Product Does this solve Accept / | Who Helps | Decision |
| --- | --- | --- | --- |
| Requirement fit | and acceptance the user need? revise. criteria. developer. Does this follow Technical spec, Developer, Accept / | manager, |  |
| Architecture fit | the agreed | ADRs, module architect. refactor. design? boundaries. Does this expose |  |
| Security and | Security checklist, data or weaken | Developer, | Block if |
| privacy | permission tests. controls? Do tests prove Unit, integration, | reviewer. | unsafe. |
| expected | Developer, Test evidence UI, and edge-case | Accept / |  |
| behavior and | QA. | add tests. tests. failure paths? Clear naming, Can the next |  |
| comments where | Team | Accept / Maintainability developer |  |
| useful, updated | reviewer. understand this? specs. Review Prompt Box Team Review Prompt for AI-Generated Output Review this output against the linked requirement and technical specification. Do not rewrite yet. | simplify. |  |

Report:
1. Requirement gaps
2. Architecture mismatches
3. Security or privacy concerns
4. Missing tests
5. Overbuilt or out-of-scope changes
6. Questions for the product manager
7. Safe refactoring suggestions
29.5ManagingFeedback
Feedback becomes useful when it is specific, traceable, and
assigned. A vague comment such as "make this better" gives the
team and the AI agent very little to act on. Good feedback identifies
the affected requirement, explains the gap, proposes a decision, and
states who owns the next action.
Feedback Where to
| Example | Owner | Next Action Type Record It Define label |
| --- | --- | --- |
| The task status | Feedback | meanings and Product |
| Clarification | labels are unclear | register and update manager. |
| to users. | product spec. criteria. | acceptance |
| A viewer can | Issue list, test | Fix permission |
| Bug | access an edit- | plan, security Developer. logic and add |
| only screen. | checklist. | regression test. The AI answer Add AI behavior |
| Design | appears too | Product + unsupported- spec and |
| concern | confident without | developer. answer rule and prompt rules. enough context. test. Stakeholders |
| Scope | Scope change | Product Decide now, want team |
| request | log. | manager. later, or reject. notifications. |
| Errors are hard | Reliability spec Operational | Add structured |
| to diagnose in | and monitoring | Engineering. logs and error concern |
| production. | plan. | tracking. Feedback Template Feedback Record Template Feedback ID: Date: Source: |

Affected requirement or artifact:
Feedback summary:
Evidence or example:
Decision needed:
Owner:
Status: New / Under review / Accepted / Rejected / Deferred
Spec update required: Yes / No
Test update required: Yes / No
29.6HandlingScopeChanges
Scope changes are not automatically bad. They become dangerous
when they enter the project without a decision trail. In a spec-driven
workflow, a scope change should be evaluated against value, risk,
effort, timing, and impact on requirements, design, tests, and
deployment.
| Change | Why It | Artifact to Decision Option | Risk if |
| --- | --- | --- | --- |
| Question | Matters Prevents The team attractive | Update | Ignored |
| Does it support | Accept / reject / but | Project vision | builds low- |
| the project goal? | defer. | and PRD. distracting features. work. Prevents Tests no | value |
| Does it affect | Revise | Requirements hidden longer match |  |
| existing | requirement or | and traceability behavior expected |  |
| requirements? | create new one. changes. behavior. Prevents The code | matrix. |  |
| Does it affect | rushed | Update design or becomes | Technical spec |
| architecture? | design | create ADR. | and ADR log. inconsistent. damage. Prevents The team Move release, |
| Does it affect | false | Roadmap and reduce scope, or | ships |
| release timing? | delivery | task plan. defer. promises. work. Prevents Add test cases | unfinished |
| Does it require | Test spec and unverified before | New behavior |  |
| new tests? | checklist. | breaks silently. changes. implementation. ScopeControlRule Ascopechangeisnotaccepteduntiltherelevantrequirement,design,tests, tasks,andreviewchecklistareupdated.Otherwise,thechangeisonlya conversation,notacontrolleddecision. |  |

29.7KeepingEveryoneAligned
Alignment is not a one-time meeting. It is a rhythm. Teams stay
aligned by using the same source of truth, reviewing the same
evidence, asking clear questions, and updating specs after decisions.
AI agents should also be aligned through refreshed context packs
and task briefs.
Alignment
| When to Use It | What to Check Practice Before implementation Requirements, non- Spec review Approved spec starts or after major goals, risks, open session or action list. changes. questions. Before assigning work Task boundary, | Output |
| --- | --- | --- |
| Task kickoff | to a developer or AI | context, tests, review Clear task brief. agent. rule. When an agent or |
| Mid-work | Assumptions, blockers, developer finds | Decision or |
| checkpoint | design choices. ambiguity. Requirements, After a meaningful AI- Accept, revise, or Review meeting architecture, tests, generated change. reject. security. | revised task. |
| Spec update | After feedback or | Changed behavior, Updated source |
| review | release learning. | tests, docs, traceability. of truth. Figure 29.3: A repeatable team workflow keeps specifications, AI output, feedback, and review connected. Alignment Prompt Box |

Weekly Alignment Questions
1. What requirement changed this week?
2. What decision did we make that must be recorded?
3. Which AI outputs were accepted, revised, or rejected?
4. Which tests were added because of feedback?
5. Which task is too vague for an AI agent to execute safely?
6. What is now out of scope?
7. What must be updated before the next implementation cycle?

29.8TeamWorkflowTemplate
The team workflow template brings the chapter together. It gives
product managers, developers, reviewers, and AI agents a
repeatable way to move from product idea to reviewed output
without losing the source of truth.
| Step | Owner | Input | Output | Quality Gate Idea, user Problem Non-goals and |
| --- | --- | --- | --- | --- |
| 1. Clarify | Product | problem, statement, users, risks are |  |  |
| product intent | manager | stakeholder success measure. stated. input. Requirements Each |  |  |
| 2. Write | Product + | Product intent with acceptance requirement is |  |  |
| requirements | engineering | and constraints. criteria. testable. Technical spec, Design 3. Prepare Requirements tasks, tests, matches |  |  |
| engineering | Developers | and product architecture scope and plan spec. decisions. constraints. Agent has 4. Create Relevant specs Bounded AI task enough |  |  |
| agent context | Developer brief. context and pack boundary. clear limits. 5. Generate Output passes | and task |  |  |
| Agent + | Task brief and | Draft code, tests, and review review |  |  |
| team | source artifacts. | docs, or analysis. output checklist. Every Review notes, Feedback 6. Capture feedback item |  |  |
| Team | user input, test feedback has owner results. decisions. and status. Updated Accepted Source of | register and |  |  |
| 7. Update | Assigned | requirements, feedback and truth reflects |  |  |
| specs | owner | tasks, tests, and decisions. reality. traceability. |  |  |
| Reviewed output | Accepted change 8. Release or | No unresolved |  |  |
| Team lead | and updated | or next task | high-risk gaps iterate |  |
| specs. | cycle. | remain. Reusable Team Workflow Template Team Workflow Pack Project: Current release goal: Source-of-truth location: Decision owner: Product owner: |  |  |

Engineering owner:
Reviewer(s):
AI agent role:
Current requirements:
Current technical spec:
Active tasks:
Test plan:
Open questions:
Scope changes:
Feedback items:
Next review date:
Definition of done:

PracticalExample:CoordinatingaTeam
FeaturewithanAIAgent
Imagine your team is adding a "project activity summary" feature to
the ProjectMate AI app. The product manager wants users to see a
weekly summary of project notes, completed tasks, blockers, and AI-
generated suggestions. Instead of asking an AI agent to build it
immediately, the team uses the workflow template.
AI-Agent
| Artifact | Team Action | Review Evidence Action PM defines weekly summary goal, users, PRD section Product handoff None yet. acceptance criteria, approved. and non-goals. Developer defines summary endpoint, Agent is asked to Technical spec |
| --- | --- | --- |
| Technical plan | permissions, data updated. sources, and design for gaps. scheduling rules. Developer creates one task: generate Agent drafts test Tests reviewed before Task brief summary API tests cases only. code. from acceptance criteria. Agent generates Developer assigns one Code reviewed draft code and | critique the |
| Implementation | bounded | against requirements notes implementation task. and architecture. assumptions. Reviewer finds the Agent updates |
| summary should | tests and draft Feedback | Regression test |
| exclude private draft | code after spec notes. update. | added. |
| Team updates data- | Agent receives | Source of truth |
| Spec update | source rule and | refreshed context matches |
| traceability matrix. | for next task. | implementation. |

TeamWorkflowChecklist
Stat
Area Checklist Item
us
The team agrees where requirements, specs, tasks, tests,
Shared source [ ]
decisions, and feedback live.
Each feature has a problem statement, users, acceptance
Product handoff [ ]
criteria, risks, and non-goals.
Engineering Developers convert product intent into technical design,
[ ]
handoff tasks, and tests.
Each AI-agent task includes scope, context, constraints,
Agent handoff [ ]
expected output, and review rules.
AI output is reviewed against requirements, architecture,
Review [ ]
security, tests, and maintainability.
Feedback items have affected artifacts, owners, decisions,
Feedback [ ]
and status.
Accepted changes update requirements, design, tests, tasks,
Scope change [ ]
and traceability.
Alignment The team has regular reviews for open questions, decisions,
[ ]
rhythm drift, and next tasks.
PracticalExercises
1.Chooseafeaturefromoneoftheprojectchaptersandwriteaproduct-to-
engineeringhandoffforit.
2.Createadeveloper-to-agenthandoffforonesmallimplementationtask,
includingforbiddenchangesandreviewrules.
3.Writefivefeedbackitemsusingthefeedbackrecordtemplate,thendecide
whichrequirespecupdates.
4.Takeascopechangerequestandidentifyeveryartifactthatmustbe
updatedbeforeimplementationbegins.
5.RunamockteamreviewofanAI-generatedoutputandclassifyissuesas
requirementgaps,designgaps,securityconcerns,ormissingtests.

ReviewQuestions
1.WhydoesateamneedsharedspecificationswhenusingAIagents?
2.Whatinformationshouldbeincludedinaproduct-to-engineeringhandoff?
3.Whyisadeveloper-to-agenthandoffdifferentfromanormaltask
assignment?
4.WhatmakesteamreviewofAIoutputevidence-basedinsteadofopinion-
based?
5.Howshouldfeedbackberecordedsoitbecomesactionable?
6.Whyshouldscopechangesupdatetestsandtraceabilitybefore
implementation?
KeyTakeaways
Sharedspecificationskeepproductmanagers,developers,reviewers,
stakeholders,andAIagentsaligned.
Product-to-engineeringhandoffsshouldexplaintheproblem,users,
requirements,acceptancecriteria,risks,andnon-goals.
Developer-to-agenthandoffsmustincludeboundedcontext,forbidden
changes,expectedoutputs,andreviewcriteria.
AIoutputshouldbereviewedasaccountableengineeringwork,not
acceptedjustbecauseitlookspolished.
Feedbackandscopechangesmustupdatethesourceoftruth,orthe
teamwilldriftawayfromthespecification.
InSummary
This chapter showed how spec-driven AI engineering scales across a
team. You learned why shared specifications matter, how product
managers hand work to engineering, how developers hand bounded
tasks to AI agents, how teams review AI output, and how feedback
and scope changes should be managed. The main lesson is simple:
AI agents can accelerate team delivery only when the team protects
the shared source of truth. Clear handoffs, reviewable artifacts,

updated specs, and repeatable workflows turn AI from a guessing
tool into a disciplined engineering collaborator.

Chapter 30
Building a Repeatable Spec-
Driven AI Engineering
System
A single successful AI-assisted project is useful. A repeatable system
is much more valuable. When you can move from idea to
requirements, specs, tasks, tests, code, review, deployment,
monitoring, and maintenance in a consistent way, you stop relying
on lucky prompts and start operating like an engineering
organization.
This final chapter turns everything you have learned into a reusable
operating system for spec-driven AI engineering. You will learn how
to organize project documentation, version requirements and
specifications, build a template library, define agent rules and coding
standards, connect every artifact, measure engineering quality, and
help a team adopt the process over time.
FinalChapterPrinciple
ThegoalisnottouseAImore.Thegoalistobuildbettersoftwarewithclearer
intent,strongertests,saferreview,andaprocessyoucanrepeatonany
project.

LearningObjectives
By the end of this chapter, you will be
Why it matters
able to...
Create a reusable engineering process that A repeatable process reduces confusion
turns ideas into tested, reviewable, and makes AI-assisted delivery
production-ready work. dependable.
Organize project documentation so
Good organization prevents lost context
requirements, specs, tasks, tests, decisions,
and spec drift.
and releases stay connected.
Version requirements and specifications
Versioned specs make change visible and
without depending on any external
reviewable.
platform.
Build a template library for briefs, PRDs,
Templates make quality easier to repeat
technical specs, tests, reviews, and agent
across projects.
tasks.
Define agent rules, coding standards, Standards help humans and AI agents
quality metrics, and team adoption steps. work within clear boundaries.
Figure 30.1: A repeatable spec-driven AI engineering system turns each project
into a better starting point for the next one.
30.1CreatingaReusableEngineeringProcess
A reusable engineering process is a defined path that your project
follows from first idea to production learning. It does not remove
judgment. It gives your judgment a structure. Instead of asking an

AI agent to build from a loose idea, you guide the work through
clear artifacts and quality gates.
The process should be simple enough to use on a small feature and
strong enough to support a full production application. If the process
is too heavy, people will avoid it. If it is too weak, the AI agent will
fill gaps with assumptions. The best process is lightweight, visible,
and strict at the points where failure is expensive.
| Stage | Main Artifact Problem, users, The team knows Engineering intent | Quality Gate | Result |
| --- | --- | --- | --- |
| Idea intake | constraints, and non- document goals are clear. exists. The team knows PRD and Each requirement can Requirements what success acceptance criteria be tested or rejected. means. Architecture choices The team knows Technical spec and | why the work |  |
| Design | are explicit and ADRs justified. should be built. Each task is small, The agent receives | how the system |  |
| Tasking | Agent task plan controlled work. reviewable. Expected behavior, Implementation has | bounded, and |  |
| Testing | Test specification a target. cases are covered. Code matches specs The feature Code and test | failures, and edge |  |
| Implementation | and does not change changes unrelated behavior. software. Output is checked Review checklist The team decides against requirements, | becomes real |  |
| Review | and traceability architecture, security, evidence forward. and tests. Deployment notes, Production feedback Release and The process monitoring, becomes a spec learning improves over time. updated specs update. ReusableProcessRule Donotdesigntheprocessaroundonetool.Designitaroundartifacts,decisions, tests,andreviewevidence.Toolscanchange;theengineeringsystemshould remainuseful. 30.2OrganizingProjectDocumentation Project documentation should be organized so a human or AI agent can quickly find the current source of truth. The structure does not | what can move |  |

need to be complicated. It needs to be consistent. Every project
should have the same broad sections, even if some sections are
short.
Figure 30.2: A clear documentation and template library structure keeps the full
engineering lifecycle connected.
Folder or
| Purpose | Typical Contents Section A new product idea, Captures why the Brief, goals, users, 01-intent feature, orchange project exists. constraints, non-goals. request arrives. PRD, technical spec, API Requirements or Defines what and | Update Trigger |
| --- | --- | --- |
| 02-specs | spec, database spec, how to build. ADRs. change. Task list, agent briefs, A feature is broken Turns specs into | design decisions |
| 03-tasks | status notes, handoff work. records. steps. Test plan, test cases, A requirement, API, Defines proof of | into implementable |
| 04-tests | edge cases, security correctness. tests, regression tests. changes. Code review checklist, | or failure path |
| Stores human | security review, QA | AI output is ready for 05-reviews |
| review evidence. | notes, traceability checks. | acceptance. |
| 06-release | Captures | Deployment plan, A release is prepared |
| deployment and | rollback plan, monitoring production learning. feedback arrives. | or production |

Folder or
Purpose	Typical Contents	Update Trigger
Section
notes, maintenance
checklist.
Self-Contained Documentation Structure
Recommended Project Documentation Structure
/project-name
/01-intent
engineering-intent.md
constraints-and-non-goals.md
/02-specs
product-requirements.md
technical-specification.md
architecture-decisions.md
api-specification.md
database-design.md
/03-tasks
agent-task-list.md
task-handoff-notes.md
/04-tests
test-specification.md
edge-cases-and-failures.md
/05-reviews
code-review-checklist.md
security-review.md
traceability-review.md
/06-release
deployment-plan.md
monitoring-plan.md
maintenance-log.md
30.3VersioningRequirementsandSpecs
Versioning requirements and specifications means every important
change is named, dated, and explained. You do not need a
complicated platform to do this. A clear version label, a change log,
and a decision owner are enough to prevent silent drift.

The important rule is this: code should not quietly move ahead of
the specification. When behavior changes, the requirement, test,
task, and review evidence should change with it.
| Version | Who | Evidence Item What Changes It |
| --- | --- | --- |
| Example | Approves New requirement, Change note and Product | Needed |
| PRD | PRD v1.2 | changed priority, affected owner. clarified non-goal. requirement IDs. Architecture, API, |
| Technical | Technical lead TECH v1.4 data model, or | ADR or design |
| spec | or reviewer. integration decision. New behavior, bug Developer New or updated | note. |
| Test spec | TEST v1.3 | fix, edge case, failure and reviewer. test cases. path. Repeated AI mistake Reason and |
| Agent rules | AGENT v1.1 | or new coding Team lead. example. boundary. Deployment target, Release Release |
| REL v1.0 | rollback strategy, plan owner. monitoring rule. Specification Versioning Template Specification Change Log Template Change ID: Date: Changed artifact: Old version: New version: Reason for change: Affected requirements: Affected tests: Affected tasks or code areas: Decision owner: Reviewer: Status: proposed / accepted / rejected / deferred Notes: | Checklist update. |

30.4BuildingaTemplateLibrary
A template library is one of the easiest ways to scale quality. A
template does not replace thinking. It makes sure important thinking
is not skipped. When every project begins with a proven engineering
intent template, PRD template, technical spec template, test spec
template, and review checklist, your AI workflow becomes more
consistent.
Improvement
| Template | Used When | Minimum Sections Signal Problem, users, value, People ask fewer Engineering A new idea or project constraints, non-goals, basic scope intent begins. success. questions. Requirements, Product behavior Tests map clearly PRD acceptance criteria, must be defined. to requirements. priorities, risks. Architecture, data, Implementation AI output respects Technical spec APIs, integrations, needs design. boundaries. errors, security. Task, context, Agent changes AI receives |
| --- | --- | --- |
| Agent task brief | constraints, files, tests, implementation work. expected output. files. Unit, integration, end- | fewer unrelated |
| Test | Work is ready for to-end, failure, | Bugs are caught |
| specification | implementation. security, performance. Requirements, design, Output is ready for Review is evidence- Review checklist security, tests, acceptance. based. maintainability. Config, migration, Deployment is Release Work is ready for rollback, monitoring, calmer and checklist production. owner. recoverable. TemplateLibraryRule Aftereveryproject,askonequestion:Whichtemplateshouldbeimprovedso thesameconfusiondoesnothappenagain? 30.5CreatingAgentRulesandCoding Standards AI agents need rules because they are powerful pattern generators, not responsible engineers. Your standards tell the agent how code should be structured, what it must not change, how errors should be | before release. |

handled, how tests should be written, and what output must be
explained before review.
Standard
| Rule Example | Why It Matters | Review Evidence Area Do not modify files Prevents hidden File-change Scope control outside the task scope unrelated changes. summary. unless asked first. Use clear names, small |
| --- | --- | --- |
| functions, and | Keeps generated Code style | Reviewer |
| predictable module | code maintainable. boundaries. Return safe user messages and log Protects users and Error handling Error-path tests. technical details helps diagnosis. internally. Never hard-code secrets Prevents serious Security review Security or bypass authorization production risk. checklist. checks. Every behavior change Makes output Passing test list and Testing must include relevant provable. coverage notes. tests. Summarize Makes review faster Agent completion Explanation assumptions, tradeoffs, and safer. note. and files changed. Agent Rules and Coding Standards Template Reusable Agent Rules Template General behavior: - Follow the linked requirement and technical specification. - Ask questions before filling major gaps. - Do not expand scope without approval. Coding standards: - Keep functions small and readable. - Use clear names and simple control flow. - Add comments only where they explain non-obvious decisions. Security rules: - Do not hard-code secrets. - Do not weaken authentication or authorization. - Validate all external input. Testing rules: | readability check. |

- Add or update tests for every behavior change.
- Include success paths, failure paths, and edge cases.
Completion note:
- List files changed.
- List assumptions.
- List tests added or updated.
- List remaining risks or questions.
30.6ConnectingSpecstoTasks,Tests,and
Code
A repeatable system depends on traceability. Traceability means you
can follow a requirement from its original purpose into the product
spec, technical design, task list, test plan, implementation, review,
deployment, and production update. If you cannot trace the work,
you cannot confidently say it was built for the right reason.
| Requirement | Task | Test |
| --- | --- | --- |
| Code Area | Review Evidence | Status |
| ID | ID Review note TASK- TEST- | ID |
| REQ-01 | Auth module | confirms role Accepted 01 01 check. Integration test TASK- TEST- |
| REQ-02 | Task API | covers Accepted 04 05 create/update. |
| TASK- | TEST- | UI test covers Needs REQ-03 Dashboard UI |
| 07 | 09 | empty state. update |
| TASK- | TEST- | Notification Retry test and REQ-04 Accepted |
| 10 | 12 | worker queue log checked. TraceabilityRule Everyacceptedcodechangeshouldpointbacktoarequirementandatest. Everyrequirementshouldpointforwardtoatleastonetaskandonereviewable proof. 30.7MeasuringEngineeringQuality You should measure the quality of the engineering system, not just the amount of AI usage. AI can generate many files quickly, but speed alone does not prove quality. A strong system measures clarity, correctness, safety, maintainability, and production learning. |

Figure 30.3: Quality measurement and team adoption improve the process
through repeated learning loops.
How to Measure
| Metric | What It Shows | Healthy Direction Simply Whether specs are Fewer basic Requirement Count questions raised usable before clarifying questions clarity during task handoff. coding. over time. How often generated work Track tasks reopened Rework rate Lower reopen rate. must be heavily after review. corrected. Whether tests More meaningful Track bugs found by |
| --- | --- | --- |
| Test usefulness | catch real | failures before tests before release. problems. production. Where AI or Tag review comments Repeated categories Review findings humans commonly by category. decrease. miss issues. Check if released Fewer Whether code and |
| Spec drift | behavior is reflected in specs stay aligned. docs. behavior changes. Track errors, incidents, | undocumented |
| Production | Whether releases | Fewer incidents and rollback events, and |
| stability | behave reliably. response time. Quality Review Template Monthly Engineering Quality Review Template Period reviewed: | faster recovery. |

Projects or features shipped:
Requirements that changed:
Tasks completed with AI support:
Defects found before release:
Defects found after release:
Most common review issue:
Most common AI mistake:
Template that needs improvement:
Agent rule that needs improvement:
Spec drift found:
Action items for next month:
30.8MovingfromIndividualUsetoTeam
Adoption
Team adoption works best when the process proves its value before
it is forced on everyone. Start with one project, one small template
set, and one review habit. Show that the workflow reduces
confusion, improves review, and helps AI output become safer and
easier to accept.
Adoption
| What to Do | What to Avoid | Proof of Progress Step |
| --- | --- | --- |
| Use the process on | Forcing a heavy | One feature moves |
| Start small | one feature or | process on every team from spec to tested |
| project. | at once. | code cleanly. Show completed |
| Create | Giving blank templates specs, tasks, tests, | Team members copy |
| examples | without guidance. and reviews. | good examples. |
| Review AI output | Accepting AI output Make review | Review comments |
| against specs in the | privately without visible | become more |
| open. | evidence. | specific. |
| Improve | Update templates | Treating templates as Repeated confusion |
| templates | after real use. | permanent. decreases. Teach the process People use the Train through Long abstract training during actual project workflow without work with no project. delivery. being reminded. AdoptionRule Ateamwilladoptthesystemwhenitmakestheirworkclearerandsafer.Ifthe processfeelslikepaperwork,simplifyituntilitprotectsqualitywithoutslowing usefulprogress. |

30.9TheFutureofSpec-DrivenAIEngineering
AI engineering will keep changing. Agents will become better at
planning, coding, testing, reviewing, and operating software. Tools
will become more automated. But the need for clear intent will not
disappear. The more powerful the agent becomes, the more
important the specification becomes.
In the future, strong teams will not be the teams that simply use the
newest AI tool. Strong teams will be the teams that can express
product intent clearly, convert it into reliable engineering artifacts,
supervise AI-generated work, and keep production systems aligned
with changing reality.
| Likely Direction | What It Means for You Agents will handle larger More autonomous Write stronger boundaries, workflows with less manual agents rules, and review gates. prompting. Tools will read requirements, Spec-aware Keep artifacts structured and tests, and architecture development tools current. together. | Skill to Build Now |
| --- | --- | --- |
| Continuous production | Monitoring and user feedback | Treat production learning as |
| feedback | will update plans faster. | part of the spec lifecycle. Humans will spend more time Improve product thinking, Human review judging intent, risk, and systems thinking, and review becomes higher level tradeoffs. discipline. 30.10FinalGuidancefortheReader You have now walked through the full spec-driven AI engineering lifecycle: idea, requirements, specs, tasks, tests, code, review, deployment, monitoring, maintenance, and team adoption. The most important lesson is simple: do not ask AI to replace engineering discipline. Use AI inside engineering discipline. Start with small projects. Build your template library. Improve your agent rules. Keep requirements connected to tests. Review generated work with evidence. Update specifications after release. When a mistake repeats, improve the system instead of only fixing the immediate bug. 1. Begineveryprojectwithengineeringintentbeforeaskingforcode. 2. Turnintentintorequirementsthatcanbetested. |

3. Writetechnicalspecificationsbeforeimplementationdecisionsbecome
scattered.
4. GiveAIagentsboundedtaskswithcontext,constraints,andexpectedoutputs.
5. Plantestsbeforegenerationsotheagentbuildstowardclearproof.
6. Reviewgeneratedcodeagainstrequirements,architecture,security,and
maintainability.
7. Deploywithrollback,monitoring,andmaintenanceinmind.
8. Treatproductionfeedbackaspartofthespecificationlifecycle.
9. Keepimprovingtemplates,rules,andchecklistsaftereachproject.
FinalGuidance
YouradvantageisnotthatyoucanaskanAIagenttowritecode.Your
advantageisthatyoucanguideAIwithclearspecifications,verifyitsoutput
withtests,andbuildarepeatablesystemthatkeepsimproving.
RepeatableSystemChecklist
Area	Question to Ask	Ready?
Can you explain the path from idea to production
Process Yes / No
review?
Can a new human or AI agent find the current source
Documentation Yes / No
of truth?
Are requirement and spec changes named, dated,
Versioning Yes / No
and explained?
Do projects reuse proven briefs, specs, test plans,
Templates Yes / No
and review checklists?
Do agents receive clear constraints, coding standards,
Agent rules Yes / No
and completion rules?
Can each feature be traced from requirement to task,
Traceability Yes / No
test, code, review, and release?
Do you measure defects, rework, review findings,
Quality metrics Yes / No
drift, and production stability?
Does the workflow help the team work with less
Adoption Yes / No
confusion and better evidence?

KeyTakeaways
Arepeatablesystemismorevaluablethanasinglesuccessfulpromptor
project.
Projectdocumentationshouldbeorganizedaroundintent,specs,tasks,
tests,reviews,release,andlearning.
Requirementsandspecificationsmustbeversionedsochangesarevisible
andreviewable.
Templatelibrariesturnlessonsfromoneprojectintoastrongerstarting
pointforthenextproject.
AgentrulesandcodingstandardshelpAIagentsworkwithinsafeand
reviewableboundaries.
Traceabilityconnectsrequirementstotasks,tests,code,review,
deployment,andmaintenance.
Qualityshouldbemeasuredthroughdefects,rework,reviewfindings,
specdrift,andproductionstability.
ThefuturebelongstoteamsthatcombineAIspeedwithhumanintent,
discipline,andaccountablereview.
ReviewQuestions
1. Whyisarepeatableengineeringprocessmorevaluablethanacollectionof
strongprompts?
2. Whatshouldbeincludedinaprojectdocumentationstructureforspec-driven
AIengineering?
3. Howdoesversioningrequirementshelppreventspecdrift?
4. Whyshouldatemplatelibrarybeimprovedafterrealprojectuse?
5. Whatkindsofrulesshouldbeincludedinanagentruledocument?
6. HowdoestraceabilityhelpreviewerstrustAI-generatedcode?
7. Whichqualitymetricswouldyoutrackfirstonasmallteam?
8. WhatisthesafestwaytomovefromindividualAIusetoteamadoption?

PracticalExercises
Exercise	Task	Expected Output
A self-contained folder outline with
Create a documentation folder
1 intent, specs, tasks, tests,
structure for a small app project.
reviews, and release sections.
Write a change log entry for a A versioned change entry with
2	requirement that changed after user	affected requirements, tests, and
feedback. owner.
A one-page rule sheet covering
Create an agent rule document for your
3 scope, coding, testing, security,
next AI-assisted coding task.
and completion notes.
A table linking each requirement
Build a mini traceability matrix for three
4 to a task, test, code area, and
requirements.
review evidence.
A short quality measurement plan
Choose five quality metrics for a team
5 with metric purpose and healthy
adopting AI agents.
direction.
InSummary
Spec-driven AI engineering is not only a way to write better
prompts. It is a way to build software with clear intent, visible
decisions, testable requirements, bounded AI work, human review,
production feedback, and continuous improvement.
As AI tools become more capable, the value of discipline increases
rather than decreases. The teams that win will be the teams that
can describe what they want, prove that it works, review what
changed, learn from production, and repeat the process with
confidence. That is the system you have built throughout this book.

A Small Request from the
Author
Thank you for reading Spec-DrivenAI
Engineering.
I hope this book has helped you understand how to
move from an ideato requirements, specifications,
tasks, tests, code, review, deployment, and long-
term maintenance with more confidence and control.
If this book helped you, please consider leaving an
honest review on Amazon. Your review helps other
readers decide whether this book is right for them,
and it also helps me understand what was most
useful and what can be improved in future editions.
Your feedback does not have to be long. A few
sentences about what you learned, what you found
practical, or how the book helped your workflow
would be greatly appreciated.
Thank you for your support, your time, and your
trust.
— The Author

Appendices
_______________________________________________________
__________________
FigureA-S.1:Appendixsystemmapshowinghowthereusable
templatessupportthecompletespec-drivenAIengineeringworkflow.

HowtoUseTheseAppendices
These appendices are designed as practical working documents. You
can copy each template into your project notes, fill it out, and give
the completed artifact to an AI coding agent, a developer, a product
manager, a reviewer, or a deployment owner. The templates are
intentionally platform-neutral. Where GitHub is mentioned, treat it as
a common example rather than a required dependency.
Start with Appendix A when the project idea is still rough.
Move through Appendices B to G before code generation
begins.
Use Appendices H to J to control how AI agents receive
context and instructions.
Use Appendices K to Q to protect architecture decisions,
quality, deployment, debugging, and maintenance.
Use Appendices R and S as quick reference material while
building projects.

AppendixIndex
| Appendix | Title | Purpose |
| --- | --- | --- |
| Appendix A | Engineering Intent Document Template reusable artifact for the project workflow. | Use this when you need a |
| Appendix B | Product Requirements Document Template reusable artifact for the project workflow. | Use this when you need a |
| Appendix C | Technical Specification Template reusable artifact for the project workflow. | Use this when you need a |
| Appendix D | API Specification Template reusable artifact for the project workflow. | Use this when you need a |
| Appendix E | Database Design Template reusable artifact for the project workflow. | Use this when you need a |
| Appendix F | Requirements Traceability Matrix Template reusable artifact for the project workflow. | Use this when you need a |
| Appendix G | Test Specification Template reusable artifact for the project workflow. | Use this when you need a |
| Appendix H | AI Agent Instruction Template reusable artifact for the project workflow. | Use this when you need a |
| Appendix I | Project Context Pack Template reusable artifact for the project workflow. | Use this when you need a |
| Appendix J | Prompt Library for Spec-Driven AI Engineering reusable artifact for the project workflow. | Use this when you need a |
| Appendix K | Architecture Decision Record Template reusable artifact for the project workflow. | Use this when you need a |
| Appendix L | GitHub Workflow Checklist reusable artifact for the project workflow. | Use this when you need a |

| Appendix | Title | Purpose |
| --- | --- | --- |
| Appendix M | Security Review Checklist reusable artifact for the project workflow. | Use this when you need a |
| Appendix N | Production Readiness Checklist reusable artifact for theproject workflow. | Use this when you need a |
| Appendix O | Debugging Checklist for AI-Generated Code reusable artifact for the project workflow. | Use this when you need a |
| Appendix P | Code Review Checklist | Use this when you need a reusable artifact for the project workflow. |
| Appendix Q | Maintenance and Spec Drift Checklist reusable artifact for the project workflow. | Use this when you need a |
| Appendix R | Glossary of Key Terms | Use this when you need a reusable artifact for the project workflow. |
| Appendix S | Recommended Tools and Resources reusable artifact for the project workflow. | Use this when you need a |

AppendixA:EngineeringIntentDocument
Template
The engineering intent document captures the purpose of the
project before detailed requirements are written. It prevents the AI
agent from optimizing for random implementation details before the
real problem is understood.
EngineeringIntentFields
Field Whattowrite
Projectname Givetheprojectashortworkingname.
Problemstatement Describetheprobleminplainlanguage.Avoid
implementationdetails.
Primaryusers Listthepeoplewhowilluseorbenefitfromthe
system.
Businessgoal Explainwhatsuccessmeansfortheorganizationor
projectowner.
Usergoal Explainwhatusersshouldbeabletoachievemore
easily.
Currentpainpoints Listthefrustrations,delays,risks,ormanualsteps
thatexisttoday.
Desiredoutcome Describethestatethatshouldbetrueafterthe
solutionworks.
Outofscope Listwhattheprojectmustnotattemptinthisrelease.
Successmeasures Define3-5measurablesignsthattheprojectis
working.
Constraints Includebudget,timeline,platform,privacy,
compliance,orteamconstraints.

Template:EngineeringIntentStarter
Project Name:
Problem Statement:
Primary Users:
Business Goal:
User Goal:
Pain Points:
Desired Outcome:
Out of Scope:
Success Measures:
Constraints:
Open Questions:
IntentQualityChecklist
[ ]The problem is stated without assuming a specific
technical solution.
[ ]The intended users are named clearly.
[ ]The desired outcome can be measured or observed.
[ ]Out-of-scope items are written before implementation
begins.
[ ]Open questions are captured instead of being hidden.

AppendixB:ProductRequirementsDocument
Template
The product requirements document turns the intent into concrete
product behavior. It explains what the system must do, why it
matters, who it serves, and how acceptance will be judged.
PRDFields
Field Whattowrite
Overview Summarizetheproductorfeatureinoneshort
paragraph.
Goals Listthemainoutcomesthereleasemustachieve.
Non-goals Listrequestsorideasthataredeliberatelyexcluded.
Userpersonas Describeusertypes,needs,permissions,and
workflows.
Userstories Writestoriesintheform:Asa...,Iwant...,sothat...
Functionalrequirements Listspecificbehaviorsthesystemmustsupport.
Non-functional Listsecurity,performance,reliability,usability,and
requirements complianceneeds.
Acceptancecriteria Statehoweachrequirementwillbeverified.
Dependencies Listservices,datasources,APIs,teams,orapprovals
needed.
Risks Identifymajorproduct,technical,security,or
operationalrisks.
Template:PRDRequirementFormat
Requirement ID: REQ-001
Title:
Description:
User Value:
Priority: Must / Should / Could
Acceptance Criteria:
Dependencies:
Notes:

| Priority | Meaning | Howtouseit |
| --- | --- | --- |
| Must | Requiredforthefirstusable | Donotstartimplementationuntil release. thisisclear. |
| Should | Importantbutnotrelease- | PlanafterMustrequirements. blocking. |
| Could | Usefulimprovement. | Keepforlaterunlesscapacity remains. |
| Won't | Notincludedinthisrelease. | Protectsscopefromuncontrolled growth. |

AppendixC:TechnicalSpecificationTemplate
The technical specification turns product behavior into a safe
engineering plan. It describes how the system will be structured,
how components interact, and what engineering decisions must be
respected by AI-generated code.
TechnicalSpecificationFields
Field Whattowrite
Systemoverview Describethemaincomponentsandtheir
responsibilities.
Architecturestyle Statewhetherthesystemismonolithic,modular,
service-based,event-driven,oranotherstyle.
Coremodules Listmodulesandwhateachowns.
Dataflow Explainhowinputmovesthroughthesystemand
becomesoutput.
Externalintegrations ListAPIs,databases,queues,filesystems,orexternal
tools.
Securityapproach Summarizeauthentication,authorization,validation,
dataprotection,andsecretshandling.
Errorhandlingapproach Explainexpectederrors,recoverybehavior,retries,
andusermessages.
Testingapproach Explainunit,integration,end-to-end,security,and
performanceteststrategy.
Deploymentapproach Describeenvironment,configuration,migration,
rollback,andmonitoringneeds.
Opendecisions Listunresolvedchoicesthatmustnotbeguessedby
theAIagent.

Rule:TechnicalSpecGuardrail
Before generating code, verify:
- Requirements are mapped to modules.
- Data models are named.
- API contracts are defined.
- Error states are documented.
- Tests exist before implementation.
- Security rules are explicit.
- Open questions are not treated as assumptions.

AppendixD:APISpecificationTemplate
An API specification prevents AI-generated endpoints from becoming
inconsistent, insecure, or difficult to test. Use this template for each
endpoint before implementation begins.

APIEndpointFields
Field Whattowrite
Endpointname ShortnamesuchasCreateTaskorGetUserProfile.
Methodandpath Example:POST/api/tasks.
Purpose Explainwhattheendpointdoesandwhyitexists.
Authentication Statewhetherlogin,token,orroleisrequired.
Authorizationrules Describewhocanaccesstheendpointandunder
whatconditions.
Requestbody Definefields,types,requiredstatus,andvalidation
rules.
Responsebody Definesuccessresponsefieldsandtypes.
Errorresponses Listexpectedstatuscodesandsafeuser-facing
messages.
Businessrules Listrulesthatmustbeenforcedbeyondbasic
validation.
Testsrequired Listunit,integration,andedge-casetestsforthe
endpoint.
| Status | Use | Response principle |
| --- | --- | --- |
| 200 / 201 | Successful read or creation. | Return only the fields the user is allowed to see. |
| 400 | Invalid request data. | Explain the invalid field without exposing internals. |
| 401 | User is not authenticated. | Ask user to sign in again. |
| 403 | User is authenticated but not | Do not reveal protected resource allowed. details. |
| 404 | Resource not found. | Avoid confirming whether another user's resource exists. |
| 500 | Unexpected server failure. | Use a safe generic message and log the internal reason. |

AppendixE:DatabaseDesignTemplate
A database design template helps you define entities, relationships,
constraints, indexes, and migration rules before the AI agent writes
schema code.
DatabaseDesignFields
Field Whattowrite
Entity/tablename Namethetableorcollection.
Purpose Explainwhatreal-worldobjectorconcepttheentity
stores.
Fields Listfieldname,type,requiredstatus,defaultvalue,
andvalidationrule.
Primarykey Definetheuniqueidentifier.
Relationships Describeone-to-one,one-to-many,ormany-to-many
links.
Indexes Listfieldsthatneedindexingforlookuporfiltering.
Constraints Stateuniqueness,foreignkeys,requiredfields,and
allowedvalues.
Sensitivedata Identifypersonal,confidential,orsecurity-sensitive
fields.
Migrationnotes Explainhowschemachangeswillbeappliedsafely.
Retentionrules Definehowlongdatashouldbekeptandwhenit
shouldbedeleted.

Template:EntityDefinitionExample
Table: tasks
Purpose: Stores user-created work items.
Fields:
- id: UUID, required, primary key
- owner_id: UUID, required, foreign key to users
- title: string, required, max 120 chars
- description: text, optional
- status: enum(todo, doing, done), required
- due_date: date, optional
- created_at: timestamp, required
- updated_at: timestamp, required
Indexes: owner_id, status, due_date
Sensitive Data: no secrets; user ownership must be enforced.

AppendixF:RequirementsTraceabilityMatrix
Template
The requirements traceability matrix connects requirements to
specifications, tasks, tests, code modules, and review evidence. It is
the simplest way to prove that the final software still matches the
original intent.
| Req | Requirement | Spec | Task | Test | Code Area | Review |
| --- | --- | --- | --- | --- | --- | --- |
| ID | Section | ID | ID | Status |  |  |
| REQ- | User can create a | PRD 4.1 / | TASK- | TEST- | tasks module | Approved |
| 001 | task. | API 2.1 | 004 | 012 |  |  |
| REQ- | User can only see | Security 3.2 | TASK- | TEST- | auth | Needs |
| 002 | own tasks. | 006 | 021 | middleware | review |  |
| REQ- | Task title is | Validation | TASK- | TEST- | task schema | Approved |
| 003 | required. TraceabilityChecklist [ ]Every Must requirement has at least one task. [ ]Every Must requirement has at least one test. [ ]Every security rule maps to validation or authorization code. [ ]Every released feature maps back to a PRD requirement. [ ]Every changed behavior is reflected in updated specs. AppendixG:TestSpecificationTemplate The test specification explains how requirements will be verified before code is generated. It helps the AI agent create tests that prove behavior, not just tests that increase coverage numbers. | 5.1 | 007 | 030 |  |  |

TestSpecificationFields
Field Whattowrite
TestID UniqueidentifiersuchasTEST-001.
Relatedrequirement RequirementIDthistestverifies.
Testlevel Unit,integration,end-to-end,security,performance,
orregression.
Scenario Plain-languagebehaviorbeingtested.
Preconditions Statesetuprequiredbeforethetestruns.
Inputdata Definevalid,invalid,boundary,ormaliciousinputs.
Expectedresult Stateobservableoutcome.
Failuremeaning Explainwhatitmeansifthistestfails.
Automationstatus Manual,planned,automated,orblocked.
Owner Personorroleresponsibleformaintainingthetest.
| Test Type | Question it answers | Example |
| --- | --- | --- |
| Unit | Does one small function | Title validation rejects an empty task behave correctly? title. |
| Integration | Do connected parts work | API creates a task and stores it in the together? database. |
| End-to-end | Can a user complete the | User signs in, creates a task, marks it workflow? done. |
| Security | Can rules be bypassed? | User cannot access another user's task. |
| Performance | Does the system respond | Task list loads within the target under expected load? response time. |

AppendixH:AIAgentInstructionTemplate
AI agents need clear working rules. This template tells the agent
what to build, what to avoid, how to handle uncertainty, and how to
report changes.
Template:AgentInstructionTemplate
Role:
You are assisting with a spec-driven software project.
Project Context:
[Paste the project context pack or summary.]
Allowed Work:
- Implement only tasks listed in the current task list.
- Follow the PRD, technical spec, API spec, database design, and test spec.
- Keep changes small and reviewable.
Not Allowed:
- Do not invent requirements.
- Do not remove tests to make code pass.
- Do not introduce new dependencies without approval.
- Do not expose secrets, tokens, or private data.
Required Output:
1. Summary of changes.
2. Files changed.
3. Tests added or updated.
4. Risks or assumptions.
5. Questions that need human decision.
AgentRuleChecklist
[ ]The agent is given the correct project context.
[ ]The task has a clear acceptance criterion.
[ ]The agent knows what it must not change.
[ ]The agent must explain assumptions before acting on
them.
[ ]The agent must preserve tests and security rules.
AppendixI:ProjectContextPackTemplate
A project context pack gives the AI agent enough background to
work safely without dumping the entire project into the prompt.

Keep it concise, current, and linked to the active task.
ContextPackSections
Field Whattowrite
Projectsummary One-paragraphdescriptionofthesystem.
Currentobjective Thefeature,bugfix,orreviewgoalforthissession.
Relevantrequirements Pasteonlyrequirementsconnectedtothecurrent
task.
Relevantspecs PastetheAPI,database,architecture,ortestdetails
needed.
Existingstructure Summarizefiles/modulestheagentshould
understand.
Codingstandards Listnaming,style,errorhandling,logging,and
validationrules.
Securityconstraints Stateauthentication,authorization,privacy,and
secretsrules.
Teststorun Listrequiredtestsandexpectedoutcomes.
Donottouch Namefiles,behaviors,data,ordecisionsthatmust
notbechanged.
Expectedresponse Definethereportformattheagentshouldreturn.
Rule:ContextPackRule
Give the agent enough context to succeed, but not so much that it loses the task. The
best context pack is specific, traceable, and current.
AppendixJ:PromptLibraryforSpec-DrivenAI
Engineering
Use these prompts as starting points. Replace bracketed sections
with your project details. The strongest prompts connect the agent
to requirements, specs, tests, and review expectations.

Prompt Purpose Reusable Prompt
Clarify intent Review this project idea and identify missing business goals, user
goals, constraints, risks, and open questions. Do not propose
implementation yet.
Create PRD Turn this engineering intent into a PRD with goals, non-goals,
user stories, functional requirements, non-functional
requirements, and acceptance criteria.
Improve Review these requirements for ambiguity, missing acceptance
requirements criteria, hidden assumptions, and testability problems.
Create technical spec Convert this PRD into a technical specification with architecture,
modules, data flow, API needs, error handling, security rules, and
test strategy.
Create task list Break this technical specification into small implementation tasks.
Each task must map to a requirement and include acceptance
criteria.
Create test plan Generate unit, integration, end-to-end, security, and edge-case
tests from these acceptance criteria. Avoid shallow tests.
Review generated Review these tests against the requirements. Identify shallow
tests tests, missing edge cases, and tests that assert implementation
details instead of behavior.
Implement one task Implement only TASK-[ID]. Follow the specs, preserve existing
behavior, add tests first, and report changed files and
assumptions.
Code review Review this code against requirements, architecture, security,
validation, performance, and maintainability. Do not rewrite yet;
provide findings first.
Debug Use the logs, stack trace, failing tests, and expected behavior to
identify the likely root cause. Explain evidence before suggesting
a fix.
Security review Review this feature for authentication, authorization, input
validation, data protection, secrets exposure, and secure error
handling.
Deployment review Review this deployment plan for environment setup,
configuration, migrations, rollback, monitoring, and production
readiness.
Spec drift review Compare current behavior with the original specs. Identify drift,
undocumented changes, and specs that need updating.

Rule:PromptSafetyRule
Never ask an AI agent to “just fix everything.” Ask it to work from one requirement, one
task, one failing test, or one review checklist at a time.
AppendixK:ArchitectureDecisionRecord
Template
An architecture decision record captures important technical
decisions so that future developers and AI agents understand why a
choice was made.
Template:ADRTemplate
ADR ID: ADR-001
Title:
Status: Proposed / Accepted / Rejected / Superseded
Date:
Context:
Decision:
Alternatives Considered:
Consequences:
Security Impact:
Reliability Impact:
Performance Impact:
Related Requirements:
Related Technical Spec Sections:
Review Date:
ADRField Whyitmatters
Context Preventsfuturereviewersfromjudgingthedecision
withoutknowingtheproblem.
Decision Statestheactualchoiceclearly.
Alternatives Showsthattheteamconsideredotheroptions.
Consequences Makestrade-offsvisible.
Relatedrequirements Keepsarchitecturetiedtoproductvalue.

AppendixL:GitHub WorkflowChecklist
This checklist is GitHub-compatible but not GitHub-dependent. You
can use the same flow with any version-control platform, a local Git
repository, or a structured review folder. The important habit is
controlled change, not a specific website.
BeforeWorkStarts
[ ]Requirement ID and task ID are known.
[ ]The branch or working copy has a clear purpose.
[ ]The agent has the current context pack.
[ ]Acceptance criteria and tests are listed.
[ ]Out-of-scope files and behaviors are named.
DuringWork
[ ]Changes are small enough to review.
[ ]Commit or change notes explain why the change exists.
[ ]Tests are added or updated with the code.
[ ]No unrelated formatting or dependency changes are
mixed in.
[ ]Secrets and credentials are not committed.
PullRequestorReviewPackage
[ ]Summary explains the requirement and behavior changed.
[ ]Linked issue/task references the requirement ID.
[ ]Test results are included.
[ ]Security and data changes are called out clearly.
[ ]Reviewer can see files changed, risks, assumptions, and
rollback notes.

Template:ReviewPackageFormat
Title: [REQ-ID] Short behavior summary
Summary:
Related Requirement:
Related Task:
Tests Added/Updated:
Security Notes:
Database or API Changes:
Rollback Notes:
Open Questions:
AppendixM:SecurityReviewChecklist
Use this checklist before accepting AI-generated code that handles
users, data, files, APIs, payments, or administrative actions.
Authentication
[ ]Protected actions require authentication.
[ ]Session or token handling is defined.
[ ]Expired or invalid credentials are handled safely.
[ ]Authentication errors do not reveal sensitive information.
AuthorizationandAccessControl
[ ]Each protected action checks the user's role or ownership.
[ ]Users cannot access another user's data by changing IDs.
[ ]Admin actions are separated from normal user actions.
[ ]Default access is deny unless explicitly allowed.
Validation,Data,andSecrets
[ ]All user input is validated at the boundary.
[ ]Sensitive fields are protected in storage and logs.
[ ]Secrets are not hardcoded or printed.
[ ]Errors are safe for users and useful for internal logs.
[ ]Security tests cover abuse cases, not only happy paths.

AppendixN:ProductionReadinessChecklist
Use this before deployment. A feature is not production-ready just
because it works locally. It must be configured, observable,
recoverable, secure, and maintainable.
Area Readiness Questions
Requirements Do released behaviors match approved requirements and
acceptance criteria?
Tests Have unit, integration, end-to-end, security, and regression tests
passed?
Configuration Are environment variables documented and separated by
environment?
Database Are migrations reversible or safely recoverable?
Security Have authentication, authorization, validation, and secrets been
reviewed?
Reliability Are timeouts, retries, recovery paths, and background jobs
specified?
Monitoring Are logs, metrics, traces, and alerts available for critical workflows?
Rollback Is there a clear rollback or roll-forward plan?
Support Are known issues, user messages, and operational runbooks
documented?
DeploymentApproval
[ ]The release owner has reviewed the final checklist.
[ ]A rollback owner is named.
[ ]Monitoring is active before users depend on the feature.
[ ]The team knows what signals indicate failure.
[ ]Specs are updated to match the deployed behavior.
AppendixO:DebuggingChecklistforAI-
GeneratedCode
Debugging AI-generated software requires evidence. Do not ask the
agent to guess. Give it logs, failing tests, expected behavior, actual
behavior, and the relevant specification.

BeforeAskingtheAIAgent
[ ]State the expected behavior from the spec.
[ ]State the actual behavior observed.
[ ]Provide the failing test name and output.
[ ]Provide the relevant stack trace or log excerpt.
[ ]Identify recent changes that may have introduced the
issue.
[ ]Name files or modules that are likely involved.
RootCauseReview
[ ]The proposed root cause is supported by evidence.
[ ]The fix addresses the cause, not only the symptom.
[ ]The fix does not weaken validation, tests, or security.
[ ]A regression test is added or updated.
[ ]The debugging specification records the lesson learned.
Template:DebuggingPrompt
Here is the expected behavior, actual behavior, failing test output, logs, and relevant
spec.
Identify the most likely root cause using evidence only.
Do not edit code yet.
Return:
1. probable root cause,
2. evidence,
3. files to inspect,
4. safest fix plan,
5. regression test to add.
AppendixP:CodeReviewChecklist
Use this checklist when reviewing code written by a human, an AI
agent, or both. The review should verify behavior, maintainability,
security, and alignment with the specification.

SpecificationAlignment
[ ]The code implements only approved requirements.
[ ]Every behavior change maps to a requirement or task.
[ ]The code does not introduce hidden product decisions.
[ ]Specs are updated if the accepted behavior changed.
CodeQuality
[ ]Names are clear and consistent.
[ ]Functions are focused and not overloaded with unrelated
behavior.
[ ]Duplicated logic is removed when safe.
[ ]Error handling is explicit and tested.
[ ]Logs are useful without exposing sensitive data.
TestingandSafety
[ ]Tests cover happy paths, failures, edge cases, and
permissions.
[ ]Tests verify business behavior, not only implementation
details.
[ ]Security-sensitive paths have negative tests.
[ ]Refactoring does not change behavior unless the spec
approves it.
AppendixQ:MaintenanceandSpecDrift
Checklist
Spec drift happens when production behavior changes but the
specification does not. This checklist helps you keep documentation,
tests, and implementation aligned after release.

AfterEveryRelease
[ ]Update requirements to reflect accepted changes.
[ ]Update API, database, and technical specs if contracts
changed.
[ ]Update the traceability matrix with released test evidence.
[ ]Record architecture decisions that changed the design
direction.
[ ]Add monitoring observations or known limits to the
maintenance notes.
MonthlyMaintenanceReview
[ ]Compare top user feedback with current requirements.
[ ]Review frequent errors and decide whether specs or code
need updates.
[ ]Review performance trends and capacity assumptions.
[ ]Remove obsolete tasks and mark superseded decisions.
[ ]Refresh the project context pack before giving it to an AI
agent.
Template:SpecDriftReviewPrompt
Compare the current behavior, tests, user feedback, and monitoring notes against the
approved specs. Identify drift, missing documentation, obsolete assumptions, and specs
that need revision before the next release.
AppendixR:GlossaryofKeyTerms
This glossary defines key terms used throughout the book in
practical language.
Term Definition
Acceptance criteria Clear conditions that prove a requirement has been met.
Agent An AI system or assistant that performs a defined
engineering task using context and instructions.

Term Definition
Architecture decision A short document explaining an important technical decision
record and its trade-offs.
Context pack A focused package of project information given to an AI
agent for a specific task.
Continuous integration A workflow that checks code changes with automated tests
and validation.
Database migration A controlled change to the database structure or data.
Deployment The process of releasing software into an environment
where users or systems can use it.
Engineering intent The early statement of why a project exists and what
outcome it should create.
Integration test A test that checks whether connected components work
together.
Non-functional A requirement about quality attributes such as security,
requirement reliability, performance, or usability.
Product requirements A document describing what the product or feature must do
document and why it matters.
Refactoring Improving code structure without changing intended
behavior.
Requirements traceability A table connecting requirements to specs, tasks, tests, code,
matrix and review evidence.
Rollback A planned way to return to a safer previous state after a
failed release.
Spec drift The gap that appears when actual software behavior no
longer matches the written specification.
Technical specification A document explaining how approved product requirements
will be designed and implemented.
Unit test A test for one small piece of behavior, usually a function or
class.
Version control A disciplined way to track, review, and recover changes to
files over time.

AppendixS:RecommendedToolsand
Resources
The book is designed so that the workflow does not depend on a
specific external platform. Choose tools that fit your team, budget,
privacy needs, and deployment environment. The categories below
matter more than any single brand name.
| Category | What you need from it | Examples or options |
| --- | --- | --- |
| Writing and specs | A place to create PRDs, technical specs, templates, and decision editor, internal wiki, shared records. document folder. | Word processor, Markdown |
| Version control | A way to track changes, review work, and recover older versions. compatible platforms, internal version-control systems. | Local Git, GitHub- |
| AI coding assistant | A tool that can work from project context, generate code, explain assistant, IDE assistant, changes, and help review tests. agentic coding tool. | Chat-based coding |
| Code editor | A reliable editor with search, formatting, terminal access, and editor. project navigation. | Any modern IDE or code |
| Test runner | A repeatable way to run unit, integration, end-to-end, security, and frameworks and regression tests. command-line test tools. | Language-specific test |
| Container runtime | A way to package and run applications consistently across environments. container tools or platform-native containers. | Docker-compatible |
| Database tooling | Tools for local development, migrations, backup, restore, and scripts, admin consoles. inspection. | Database clients, migration |
| CI/CD | A repeatable workflow for checks, builds, tests, deployment, and scripts, internal build rollback. system. | Platform pipeline, local |
| Monitoring and | Visibility into errors, performance, | Logging system, metrics |
| logs | usage, and production health. uptime checks. | dashboard, error tracker, |
| Security review | Support for dependency checks, secret detection, access review, and dependency scanner, | Static analysis, |

Category	What you need from it	Examples or options
validation testing. secrets scanner, manual
checklist.
ToolSelectionChecklist
[ ]The tool supports your workflow without forcing
unnecessary complexity.
[ ]The team can use it consistently.
[ ]It supports review, traceability, and rollback where
needed.
[ ]It does not require exposing private data unnecessarily.
[ ]It fits the project's budget, skill level, and deployment
environment.
Final note: tools will change, but the engineering discipline remains
the same. Start with clear intent, write testable specs, connect specs
to tasks and tests, review AI output carefully, deploy with rollback
plans, and keep the specs alive after release.

InSummary
These appendices give you a complete reusable operating system for
spec-driven AI engineering. They are not meant to sit at the back of
the book unused. They are working documents: copy them, fill them
out, improve them, and use them to keep AI-assisted software
development controlled, traceable, testable, secure, reliable, and
maintainable.
Use templates before code generation so agents have clear
boundaries.
Use checklists during review so quality is not left to memory.
Use traceability after release so software does not drift away
from the approved specification.
Use the prompt library to keep AI work focused on evidence,
requirements, and tests.
Use the glossary and resources as quick references while
practicing the workflow.
