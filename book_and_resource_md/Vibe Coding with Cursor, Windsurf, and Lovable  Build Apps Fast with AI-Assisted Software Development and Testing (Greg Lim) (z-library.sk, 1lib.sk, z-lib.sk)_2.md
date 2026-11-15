# Vibe Coding with Cursor, Windsurf, and Lovable  Build Apps Fast with AI-Assisted Software Development and Testing (Greg Lim) (z-library.sk, 1lib.sk, z-lib.sk)_2

Vibe Coding with Cursor,
Windsurf, and Lovable
Build Apps Fast with AI-Assisted Software Development
and Testing
Greg Lim

Vibe Coding with Cursor, Windsurf, and Lovable
Copyright © 2026 Packt Publishing
All rights reserved. No part of this book may be reproduced, stored in a retrieval system, or transmitted in
any form or by any means, without the prior written permission of the publisher, except in the case of brief
quotations embedded in critical articles or reviews.
Every  effort  has  been  made  in  the  preparation  of  this  book  to  ensure  the  accuracy  of  the  information
presented.  However,  the  information  contained  in  this  book  is  sold  without  warranty,  either  express  or
implied. Neither the author, nor Packt Publishing or its dealers and distributors, will be held liable for any
damages caused or alleged to have been caused directly or indirectly by this book.
Packt Publishing has endeavored to provide trademark information about all of the companies and products
mentioned in this book by the appropriate use of capitals. However, Packt Publishing cannot guarantee
the accuracy of this information.
Portfolio Director:Ashwin Nair
Relationship Lead:Nitin Nainani
Content Engineer:Kinnari Chohan
Project Manager:Ruvika Rao
Technical Editor:Rohit Singh
Indexer:Rekha Nair
Production Designer:Shankar Kalbhor
Growth Lead: Anamika Singh
First published: February 2026
Production reference: 1060226
Published by
Packt Publishing Ltd.
Grosvenor House
11 St Paul’s Square
Birmingham
B3 1RB, UK.
ISBN 978-1-80730-163-7
www.packtpub.com

About the author
Greg Limis a technologist and author of several programming books. Greg has many years in
teaching programming in tertiary institutions and he places special emphasis on learning by doing.
Contact Greg atsupport@i-ducate.com.

Table of Contents
Preface ix
Chapter 1:Introduction 1
Requirements����������������������������������������������������������������������������������������������������������������������4
AI-Powered Coding Tools����������������������������������������������������������������������������������������������������4
Chapter 2:Installing Software (Cursor, NodeJS, Git) 9
Opening the Terminal  ���������������������������������������������������������������������������������������������������������9
Tool 1: Node�js�������������������������������������������������������������������������������������������������������������������10
Tool 2: Git   �������������������������������������������������������������������������������������������������������������������������10
Tool 3: Cursor  ���������������������������������������������������������������������������������������������������������������������11
Pricing Note  ����������������������������������������������������������������������������������������������������������������������12
Chapter 3:Vibe Coding with Cursor 13
Reviewing and Accepting Changes������������������������������������������������������������������������������������16
Understanding that LLMs are Non-Deterministic�������������������������������������������������������������20
Embracing Randomness • 20
Choosing a Model in Cursor • 20
Chapter 4:Software Development - Traditional vs Vibe Coding workflow 23
1� Planning������������������������������������������������������������������������������������������������������������������������23
2� Design���������������������������������������������������������������������������������������������������������������������������24
3� Implementation (Coding)���������������������������������������������������������������������������������������������24
4� Testing���������������������������������������������������������������������������������������������������������������������������24
5� Deployment�������������������������������������������������������������������������������������������������������������������24
6� Maintenance & Iteration�����������������������������������������������������������������������������������������������24

vi Table of Contents
Summary  ��������������������������������������������������������������������������������������������������������������������������25
Choosing a Tech Stack�������������������������������������������������������������������������������������������������������25
1. JavaScript (Full Stack) • 25
2. Python (Backend-Focused) • 26
Chapter 5:Vibe Coding Fundamentals with Cursor 27
Writing a Software Specification���������������������������������������������������������������������������������������28
Creating a TODO List��������������������������������������������������������������������������������������������������������33
Building the First Feature  �������������������������������������������������������������������������������������������������34
Starting the Project�����������������������������������������������������������������������������������������������������������35
Chapter 6:Configuring Version Control with Git 41
Rolling Back to a Working Version  ������������������������������������������������������������������������������������43
Ways to Revert Changes����������������������������������������������������������������������������������������������������44
1. Reject Changes in Cursor • 44
2. Ask the Agent to Discard Changes • 45
Chapter 7:Iterating with New Features 47
Chapter 8:Adding Automated Tests 53
Types of Tests��������������������������������������������������������������������������������������������������������������������53
Running and Debugging Tests������������������������������������������������������������������������������������������56
Final Steps: Git and Housekeeping������������������������������������������������������������������������������������57
Summary  ��������������������������������������������������������������������������������������������������������������������������58
Chapter 9:Rules for Controlling the AI Behavior 59
Testing the Rules���������������������������������������������������������������������������������������������������������������62
Beyond Testing: Other Use Cases��������������������������������������������������������������������������������������63
Chapter 10:Code Refactoring 65

Table of Contents vii
Chapter 11:Providing Context by Referencing Resources 69
Chapter 12:GitHub Integration 71
Chapter 13:Deployment 77
1� Asking Cursor for Deployment Guidance�����������������������������������������������������������������������78
2� Build the Project������������������������������������������������������������������������������������������������������������79
3� Set Up a Vercel Account�������������������������������������������������������������������������������������������������81
4� Build and Deploy with Cursor  ���������������������������������������������������������������������������������������81
Chapter 14:Building Apps with Lovable (No-code/Low-code) 85
Pricing  ������������������������������������������������������������������������������������������������������������������������������86
Supabase���������������������������������������������������������������������������������������������������������������������������87
Exporting Your Project������������������������������������������������������������������������������������������������������87
First Lovable Project��������������������������������������������������������������������������������������������������������88
History  ������������������������������������������������������������������������������������������������������������������������������94
Chapter 15:Creating the Software Specifications Document 95
Adding Instructions and Guidelines  ���������������������������������������������������������������������������������101
Chapter 16:Supabase Integration 107
Storing Data in the Database  �������������������������������������������������������������������������������������������110
Chapter 17:Adding Functionality 115
Chapter 18:Source Code Extraction via GitHub Integration 121
Chapter 19:Deploying Your Application with Lovable 127
Resolving Security Issues������������������������������������������������������������������������������������������������130

viii Table of Contents
Chapter 20:Domain and External Hosting Options 137
Additional Integrations���������������������������������������������������������������������������������������������������138
Conclusion�����������������������������������������������������������������������������������������������������������������������139
Chapter 21:Working on Existing Code Bases with Windsurf 141
Setting Up Windsurf��������������������������������������������������������������������������������������������������������142
First Project in Windsurf��������������������������������������������������������������������������������������������������143
Creating a New Project����������������������������������������������������������������������������������������������������144
Chapter 22:Analyzing an Existing Code Base 147
Chapter 23:Adding Features 157
Chapter 24:Windsurf Rules 163
Chapter 25:Windsurf Workflows 169
Chapter 26:Deploying Your Application with Windsurf 175
Pricing  ����������������������������������������������������������������������������������������������������������������������������178
Conclusion�����������������������������������������������������������������������������������������������������������������������179
Final Words����������������������������������������������������������������������������������������������������������������������179
Index 181

Preface
In this book, we take you on a fun, hands-on, and pragmatic journey to Vibe Coding with Cursor,
Lovable, and Windsurf. You’ll start building your first app within minutes.
We will discover how to shift from traditional programming to a ‘vibe coding’ approach, where
we will prompt AI Agents using natural language to build, test, and deploy our applications.
We will use AI tools like Cursor and Windsurf to guide and refine AI output rather than wrestling
with every line of code manually.
In the course of this book, we will cover:
• Introduction to the Vibe Coding Approach
• Vibe Coding with Cursor
• Software Development - Traditional vs Vibe Coding workflow
• Iterating with New Features
• Adding Automated Tests
• Rules for Controlling the AI Behavior
• Providing Context by Referencing Resources
• GitHub Integration and Deployment
• Building Apps with Lovable (No-code/Low-code)
• Creating the Software Specifications Document
• Supabase Integration
• Domain and External Hosting Options
• Working on Existing Code Bases with Windsurf
• Windsurf Rules and Workflows
and more..

x Preface
Whether you are a complete beginner, curious to build your own apps with AI, or an experienced
developer eager to speed up prototyping and learn to guide AI output, this book is for you.
What will you learn
• Build apps from scratch by describing ideas in plain English and turning them into work-
ing code
• Identify, debug, and refine AI-generated code
• Version control, track changes, and roll back safely with Git and GitHub
• Add automated tests to check your app functions well
• AI-guided deployment to launch your app
Working through this book
The book takes a practical hands on approach to learning through practice. You learn best when
you code along with the examples in the book.
Get in touch
Feedback from our readers is always welcome.
General feedback: If you have questions about any aspect of this book or have any general feed-
back, please email us atcustomercare@packt.comand mention the book’s title in the subject
of your message.
Errata: Although we have taken every care to ensure the accuracy of our content, mistakes do
happen. If you have found a mistake in this book, we would be grateful if you reported this to us.
Please visithttp://www.packt.com/submit-errata, clickSubmit Errata, and fill in the form.
Piracy: If you come across any illegal copies of our works in any form on the internet, we would
be grateful if you would provide us with the location address or website name. Please contact us
atcopyright@packt.comwith a link to the material.
If you are interested in becoming an author: If there is a topic that you have expertise in and you
are interested in either writing or contributing to a book, please visithttp://authors.packt.com/.

Preface xi
Download a free PDF copy of this book
Thanks for purchasing this book!
Do you like to read on the go but are unable to carry your print books everywhere?
Is your eBook purchase not compatible with the device of your choice?
Don’t worry, now with every Packt book you get a DRM-free PDF version of that book at no cost.
Read anywhere, any place, on any device. Search, copy, and paste code from your favorite technical
books directly into your application.
The perks don’t stop there, you can get exclusive access to discounts, newsletters, and great free
content in your inbox daily
Follow these simple steps to get the benefits:
1. Scan the QR code or visit the link below
https://packt.link/free-ebook/9781807301637
2. Submit your proof of purchase
3. That’s it! We’ll send your free PDF and other benefits to your email directly

1
Introduction
Welcome to this book where we’ll explore this new and exciting way of building software called
Vibe Coding. Vibe coding lets you build apps by simply describing them in plain English. No need
to worry about programming languages like JavaScript or Python.
If you’ve ever copied code from ChatGPT, pasted it into your editor, and then sent back the errors
that  occurred—congratulations!  You’ve  already  done  some  coding.  But  in  this  book,  you’ll  be
blown away by what else is possible.
Vibe coding isn’t just a new tool. It’s more of a mindset—an approach to writing code and building
applications. The term was coined by Andrej Karpathy, who describes vibe coding as fully giving
into the vibes, embracing exponentials, and forgetting the code even exists:

2 Introduction
On the front lines of this movement are tools like Cursor andWindsurf. Let’s briefly walk through
a simple project.
In Cursor (which is based on VS Code), to create a new project, you simply chat with Cursor. Be-
hind the scenes, it uses an LLM and immediately gets to work. I can ask it to recreate my favorite
childhood game, a car dodging game where a player drives a car down a highway and dodges
oncoming traffic.
So I can prompt it:
Here’s the cool part: because it’s an agent, it can take a lot of actions on its own—creating files,
executing commands, installingdependencies, deploying, and more:
In less than a few minutes, you’ll have your first working iteration:

Chapter 1 3
It might not look great at first, but still, it’s amazing what you can do in just one minute.
In traditional programming, you need to know every line, every file. But today, the way we build
software is changing fast. Writing code itself isn’t the main skill anymore. AI can do that. Instead,
the most important skills now are being able to experiment, understand, debug, guide and work
side by side with AI.
This book is for anyone curious about how AI is changing software development. Whether you’re
a  complete  beginner  or  already  a  developer,  we  will  see  how  AI  can  help  us  build  faster—and
how to do it right.
We’ll explore different tools and build multiple projects. We’ll talk about prototyping apps, spot-
ting bad code, and which skills matter most in this new era.
We’ll also see firsthand why strong fundamentals are still important—especially if you want to
build advanced, production-ready apps.
By the end of this book, you’ll be able to describe your app ideas in natural language and turn
them into working prototypes using AI-powered tools.
Essential software development practices such as using Git for version control, organizing projects
into clear and maintainable structures, writing and running tests, and automating parts of the
process such as deployments.
This isn’t just about writing code faster—it’s also about learning how to build real-world, pro-
duction-ready apps with confidence.
Even if you’re just starting out, it still takes time, practice, and patience. But with the right mindset
and the help of AI, you can go from idea to working prototype—and potentially a product—in
record time.
That said, don’t expect magic from a single prompt. It’s like telling a builder, “Build me a house.”
You still need to specify the size, style, and materials. The clearer your instructions, the better
the result.
This is how software development works realistically. Except now, English—or your native lan-
guage—becomes your programming language.

4 Introduction
Requirements
Now, if you’ve never written code before, following this book will be a bit challenging. There’s a
lot to learn, and running into hiccups is part of the process. Having basic programming experience
will help you understand the code that the AI generates and able to debut when issues arise. Email
me atsupport@i-ducate.comif you need introductory programming resources.
AI-Powered Coding Tools
This book aims to teach you the skills you need, regardless of which AI coding tools you choose
to use. Right now, there’s an explosion of such tools in this space, and it’s difficult to keep track
of them all. In this section, we will give you some orientation so you know which tools might
work best for you.
If you’re just starting out and don’t have much experience installing Development Tools on your
computer, you can use web-based tools like Lovable, Firebase Studio, Bolt or Replit.
For example, here’s Lovable:
Web-based tools are user-friendly for creating beautiful front-ends without needing to install
anything or leave your browser. We just provide a prompt (optionally attach an image or a Figma
design) and it can generate a working app.

Chapter 1 5
For instance, I created a small app that helps my child with Math Practice. I simply wrote a short
prompt:
I want to build a math practice app for students. Each card should display
a simple arithmetic problem, such as addition or multiplication. When
flipped, it should show the correct answer. The app should randomize
problems and track how many were answered correctly.
And Lovable generates an interface that would have taken us much longer to build from scratch:
From there, we cancontinue refining the app and improving it through conversation.
Lovable even handles deployment—you can use a domain directly from them:

6 Introduction
You can also view the generated code if you’re more technical:
We can even sync it with GitHub:

Chapter 1 7
Beyond  that,  wecan  integrate  with  services  like  Supabase  for  data  storage  and  backend  func-
tionality.
This makes Lovable a great starting point, especially if you don’t want to leave your browser. We
will cover Lovable later in this book.
If  you  want  something  a  little  more  advanced,  Firebase  Studio  (launched  by  Google)  provides
more functionality. Though remember that for beginners, “more” isn’t always “better.”

8 Introduction
In short, if you’re a beginner and want to build entirely in your browser, start with one of these
apps. Lovable is an excellent entry point.
Apart from web-based tools, we haveIntegrated Development Environment(IDE)s where pop-
ular ones include Cursor and Windsurf. Both are Visual Studio Code forks and we will cover them
in this book.
Next, we have a small category of CLI tools, like OpenAI’s Codex CLI but it’s not something we’d
recommend if you’re just getting started.
The  advantage  of  IDEs  is  control—you’re  not  locked  into  a  single  platform  or  technology.  But
with more control comes more responsibility. So we recommend IDEs for those with some pro-
gramming experience or for learners eager to dive deeper into software development.
Regardless of which tools you use, the skills you develop are transferable. Even if this book demon-
strates a specific tool, the concepts apply broadly. Don’t skip a section just because it uses a tool
you’re not planning to adopt. For example, lessons shown with Cursor can still be useful if you
prefer Lovable.
Let’s look at installing Cursor and building our first app in the next few chapters.

2
Installing Software (Cursor,
NodeJS, Git)
Let’s dive right into building our first app. For that, we’ll need a few tools: Cursor, Node.js, and
Git. We’ll explain the role of each in this chapter. All of these tools work on Windows, macOS,
and Linux, so no matter what computer you have, you’re good to go.
Opening the Terminal
Throughout  the  book,  you  will  be  asked  to  open  a  terminal.  If  you’ve  never  used  it  before,  it’s
quite simple. On macOS or Linux, search for a program calledTerminal:
OnWindows, search forCMDorPowerShell.
What you’ll see might look slightly different depending on your system, but the idea is the same:
it’s a place where we can type commands and communicate directly with the computer. We’ll
show you exactly how in a moment.

10 Installing Software (Cursor, NodeJS, Git)
Tool 1: Node.js
The first toolwe’ll install is Node.js (nodejs.org):
Node.js  allows  us  to  run  JavaScript  on  our  computer—it’s  like  the  engine  running  behind  the
scenes. Follow the download instructions innodejs.org/en/downloadto download and install
Node.js.
To check if you have Node.js installed, open your terminal and type:
node -v
It should print something likev22.20.0or another version number. If a version number appears,
you’re all set.
Tool 2: Git
The next tool is Git. Git helps us track changes in our code, save different versions of it, and col-
laborate effectively. We’ll use Git frequently during the book, so it’s important to have it installed.
To check if you already have Git installed, type this into your terminal:
git -v
If you see a version number, you’re good to go.

Chapter 2 11
Tool 3: Cursor
The final tool we’ll use in this section isCursor (cursor.com):
Cursor is an AI-powered code editor, built on top of VS Code, so if you’ve used VS Code before,
Cursor will feel familiar.
To get started, visit the Cursor website (cursor.com) and download the version for your operating
system. After installation, when you open Cursor for the first time, you’ll be asked to go through
a quick setup:
1. Language– Choose English or the language you’re comfortable with.
2. Terminal integration– Optional, but I recommend enabling it.
3. Extensions– I suggest starting from scratch so Cursor doesn’t get cluttered with unnec-
essary extensions.
4. Privacy– I prefer enabling Privacy Mode so my private code isn’t shared.
Finally, you’ll need to create a Cursor account. Sign-up is quick, doesn’t require a credit card, and
once you log in, your account will be connected to your local installation.

12 Installing Software (Cursor, NodeJS, Git)
When Cursor first opens, the interface can feel a little overwhelming. But don’t worry, we will
guide you along. If you look for the small buttons in the top-right corner:
They open and close different panels. Spend a moment exploring these so you feel comfortable.
Pricing Note
Node.js and Git are completely free. Cursor, on the other hand, offers both free and paid plans. At
the time of this book’s writing, new users get a two-week Pro trial:
The free plan works well but has some limits, while the Pro plan unlocks more features. For now,
we can enjoy the free trial. But if you really want to invest in a good learning and coding expe-
rience with Cursor, it is worth signing up with aProplan for one month first, as the free plan
quickly runs out.
Having installed Node.js, Git, and Cursor, we now have all the tools you need. Let’s get started
building our first app.

3
Vibe Coding with Cursor
Let’s build our first mini-projectusing Cursor. Create a new folder on your computer and give it
your project name, e.g.2d-car-race(I am building my favorite childhood game):
Once you create the folder, clickOpen projectin Cursor and select the newly created folder:
There won’t be muchstuff appearing at first since we are opening an empty folder. But on the
top-right, click on theAI Paneicon:

14 Vibe Coding with Cursor
You can toggle it on or off. Similarly, you can open or close the Terminal panel with its icon:
In the Chat panel, by default, the mode should be set toAgent:
An AI agent is like a smart assistant. It can:
• Read your code
• Understand what you’re trying to do
• Write or fix code automatically
• Create files
• Run commands

Chapter 3 15
Let’s see it in action. In the chat panel, I type the instruction:
Build a 2d car dodging game with three.js
PressEnterand  Cursor  begins  generating  code  step  by  step.  Files  start  appearing  as  the  agent
works, such as:
• main.js
• index.html
• style.css
• and other source files needed for the game

16 Vibe Coding with Cursor
Reviewing and Accepting Changes
When theagent has created the files, you can check the Chat history to seewhat was added and
why:
You can also ask follow-up questions, likeWhy do we need main.js:
Asking the AI to explain files or code is a great way to learn.

Chapter 3 17
If you’re happy with the changes, clickKeep All, and the files will be saved into your project:
When I try to open myindex.htmlin a browser, I see the UI:
But thegame fails to load (Your version might behave differently and might produce a working
game).
I prompt it againhow can I run the game:

18 Vibe Coding with Cursor
It tells us that we have to use a simple static server. So let’s follow the easiest method, run the
Python server (as per the instructions – or the AI might ask you to run a Node server). Visit the
localhost URL i.e.localhost:8000/in a browser:
In my version, the game starts but is blocked by the score popup. We can simply ask the agent:
the score popup is blocking the game. The agent recognizes the issue and updates the code:

Chapter 3 19
IKeep Allthe changes. And when I open the browser again (you might be prompted to restart
the server)— the score popup doesn’t block the game play:
As you can see, theagent is quite independent. It actually generated a To-do list of features to
figure out what needs to be done and makes changes automatically:
This example might seem simple but it shows you what coding with an AI agent is really about.
You can continue experimenting, fixing bugs, and adding features simply by talking to the agent.

20 Vibe Coding with Cursor
Understanding that LLMs are Non-Deterministic
Now, your version of thegame generated will look different from mine even though you might
use the exact same prompt. That’s because the large language models that we connect to from
Cursor are non-deterministic.
One reason results vary is something calledtemperature, a setting that controls how creative
the model can be:
• A higher temperature makes responses more random and creative.
• A lower temperature makes them more focused and predictable — which is usually better
for tasks like writing code.
Most tools don’t expose the temperature setting, so don’t worry if you can’t find it. But it’s still
helpful to understand temperature exists.
Another reason for variation is that each large language model has its own “personality,” shaped
by its training data and design. Even if you send the same prompt to two different models with
the same temperature setting, their responses can still differ.
Embracing Randomness
This small amount of randomness is actually useful. It can lead to fresh ideas, alternative solutions,
and new ways of solving a problem.
So if you’re not satisfied with a result, don’t be discouraged. You can simply delete everything, try
the same prompt again, and see if the new answer works better. It’s like rolling the dice — and
sometimes, that’s exactly what sparks the best solution.
Choosing a Model in Cursor
Cursor allows you to usevarious models, and by default, this setting is set toAuto.

Chapter 3 21
If you toggleAutooff, you’ll see a list of available models:
Note
This  list  will  continue  to  change  —  some  models  may  disappear  while  new  ones
appear over time.
Autosimply tells Cursor to automatically choose the best model for you. For most users who don’t
care about which model runs in the background, this option works perfectly fine.
However,  there  are  differences  between  models,  and  if  you  know  exactly  what  you’re  looking
for, you might want to manually select the model that best suits your needs. For now, just keep
Autoenabled.
We have built a simple app with a single prompt in this chapter. But for bigger and more complex
projects, it makes a lot of sense to incorporate software development life cycle principles in our
app building process. More on that in the next chapter.

4
Software Development -
Traditional vs Vibe Coding
workflow
Software development is not just about writing code. There are steps before and after the coding
itself. If you want to build real, production-ready applications, you need to understand all the steps
required to bring an idea to life and deploy to users. This entire process is known as thesoftware
development lifecycle(SDLC). It mightsound boring at first, but it’s important in the long run.
Some parts of the SDLC can be done entirely by AI, but in most cases, you’ll get the best results
when you stay in control and guide the AI — and not the AI guide you. Let’s briefly go over the
main stages of the lifecycle and understand why each one matters.
1. Planning
We start with a plan — understandingwhat we’re trying to build. We move from an idea to fig-
uring out who will use the software and what they need from it. We gather requirements, break
the project down into smaller, more manageable tasks, and estimate costs, timelines and team
availability.
Don’t underestimate the effort involved in planning. It’s the foundation for everything that follows.

24 Software Development - Traditional vs Vibe Coding workflow
2. Design
Planning naturally flows into designwhere we think about the architecture — how we want to
structure the application. What technologies and frameworks will we use? What does the tech
stack look like?
We also plantheuser interface(UI): how it should look and feel, and how users will navigate
through it. On the backend, we decide where data will be stored and whether we’ll need to rely
on external APIs. A lot of thought goes into this stage before a single line of code is written.
3. Implementation (Coding)
Once the planning and design are in place, we move into implementation — writing the actual
code. Here, we can rely heavily on AI to speed things up. But having humans review the code to
ensure quality is still very important.
During  this  phase,  documentation  of  the  code  is  also  essential.  It  allows  us  to  track  decisions,
explain logic, and make future maintenance easier.
4. Testing
Next comes testing, which ensures that quality is maintained, bugs are caught early and everything
works as expected. We will go into more detail like Unit testing and End-to-End testing later.
5. Deployment
Once testing is complete, we’re ready to deploy the application — to launch it into the real world.
We usually go through multiple environments first, such as staging or testing environments,
before deploying to production.
We also use version control to track all changes and maintain a clear history of the project.
6. Maintenance & Iteration
After deployment, the lifecycle doesn’t stop. We continue to iterate as quicklyas possible:
• Fixing bugs as they arise
• Adding new features
• Updating dependencies
• Monitoring performance metrics

Chapter 4 25
We also track how users interact with the application, ensuring everything runs smoothly and
identifying opportunities for improvement.
Summary
This, in a nutshell, is the software development lifecycle. Throughout this book, we’ll implement
many parts of it in practice. Understanding these concepts now will make everything we do later
clearer and easier.
Don’t worry if some of this sounds new or overwhelming. We’ll dive deeper into selected stages
as we progress through the book.
Choosing a Tech Stack
Before we dive deeper into vibe coding, let’s understand what is a tech stack. A tech stack is a
combination of technologies used to build a software product. It typically includes:
• The front end– what theuser sees and interacts with
• The back end– where theprocessing and logic happen
• A database– wheredata is stored
• Plus various tools and services– fordeployment, hosting, and infrastructure
If you already have a favorite tech stack where you can create an app quickly, that’s your answer!
Don’t bother with the latest shiny tech stack, just stick to the one you are most confident in and
can chunk out your best code in the shortest amount of time!
Having said that, here are two great tech stack choices for beginners.
1. JavaScript (Full Stack)
JavaScript is a great choice because it can be used for both the front end and back end:
• Front end: Combinedwith HTML and CSS for building user interfaces. Includes popular
frameworks like React and Vue.
• Back end: WithNode.js to handle server-side logic.
The advantage of JavaScript is that you can build a complete app using just one language. It’s
efficient, has a massive community, tons of free resources, and is beginner-friendly — especially
for web applications.

26 Software Development - Traditional vs Vibe Coding workflow
2. Python (Backend-Focused)
Another excellent option isPython, which is often used for backend development.
Python is easy to read, write, and learn. It’s widely used not only in web development but also in
AI, data science, and automation. While it’s less common for front-end work, it’s flexible, has a
clean syntax, and is extremely popular.

5
Vibe Coding Fundamentals with
Cursor
In this chapter, we’ll build anddeploy a Math Practice application using Cursor:
To follow along, you’ll need to be on the free Cursor Pro trial (which lasts two weeks) or have an
active Pro plan.
This chapter is designed to help you build a strong foundation for working with AI coding tools.
Even though we’re using Cursor, the concepts you’ll learn, like working step by step, writing clear
specifications, and testing your code — can be applied to other tools as well. So if Cursor isn’t the
right fit for you or feels too expensive, don’t worry, what you’ll learn here will still be valuable.

28 Vibe Coding Fundamentals with Cursor
In the next few chapters:
• We’ll start by creating a software specification to guide our project as we build the Math
Practice app.
• After that, we’ll make a features to-do list to help us develop the application iteratively,
improving it step by step.
• To make sure we don’t lose any work, we’ll use Git for version control.
• And since we don’t want to run manual tests every time we make a small change, we’ll
write and run simple automated tests to ensure everything is working correctly.
• We’ll also learn how to write rules for the AI to follow.
Building this app will be fun, but it can also be challenging at times. So if you ever get stuck or
have questions, email me atsupport@i-ducate.com.
Before we begin, make sure you have Cursor, Node, and Git installed and ready.
Writing a Software Specification
How  do  we  get  started  building  anew  app?  First,  let’s  create  a  new  folder  e.g.math-practice
and open it in Cursor.
In Cursor, we could jump straight and say,Build a Math Practice app.Cursor will probably
produce something decent, but it’s unlikely to match our expectations without a long back-and-
forth to nail down details.
A better approach is to invest time up front in a proper specifications document. This is a key
step in building good software, where we specify exactly how the app should look and behave.
If  you’re  unsure  what  to  build  or  which  technologies  to  use,  use  a  general-purpose  LLM  (e.g.
ChatGPT, Gemini or Claude) to ask questions first. Treat it like a consultation: explore options,
outline requirements, and shape what the specification should include. Avoid trying to do every-
thing in one “zero-shot” prompt; that rarely works well.
For the Math Practice application, I can ask ChatGPT to draft a specification in Markdown with
a prompt something like:
Help me come up with a software specification in markdown.
I want to build a Math Practice app for children 7-12 years old with
addition, subtraction, division and multiplication operations.
I want to use React.
The practice questions should come in cards which have multiple choice.

Chapter 5 29
There should be a function to flip the cards to reveal the answer.
After flipping, I should have two buttons asking if I got it right or
wrong.
Remember which questions I got wrong.
There should be a statistics page to track how many questions attempted,
and how many correct vs incorrect answers.
Ask follow-up questions if something is unclear before you start
generating the specification.
I added the last line in that prompt:Ask follow-up questions if something is unclear
before you start generating the specification. to make generating the specification more
efficient, as clarifications produce a better specification:

30 Vibe Coding Fundamentals with Cursor
I answer the follow-up questions:
And I’ll receive asoftware specification for the app (sample below):

Chapter 5 31
I ask ChatGPT to give methe entire specification in markdown:

32 Vibe Coding Fundamentals with Cursor
Next, I’ll copy the entire specification markdown into our project and save it as a filespecifications.
md:
Remember  that  LLMsare  non-deterministic.  Even  with  the  same  prompt  and  model,  outputs
can differ slightly. That’s why it’s essential not to rely blindly on the LLM. Read every line of the
specification and make edits where needed before we start implementing.

Chapter 5 33
Creating a TODO List
Next, we will create a to-do list of features to build for the app (not a to-do list application).
Having a software specification, we could theoretically jump into Cursor and say,Build this. And
for smaller projects, Cursor would probably do a pretty decent job. However, experience shows
that it’s far better to work in small increments, tackling one feature at a time.
So we’ll use our specification and ask an LLM like ChatGPT to generate a step-by-step to-do list.
We prompt it like:
take this specification an create a todo list to implement one feature at
a time. Order the features from easy to hard. Give it in markdown format.
The result will be a to-do list in Markdown format which we copy into aTODO.mdfile in our project:

34 Vibe Coding Fundamentals with Cursor
The  to-do  list  is  structuredinto  multiple  phases,  with  each  phase  containing  individual  tasks.
Each task is marked as “not done” by default.
Just keep in mind: because LLMs are non-deterministic, even if you use the exact same specification
and to-do list, your application might look slightly different and encounter different challenges
from what I’ll show in the next section.
Building the First Feature
In this section, we’re going to build thefirst feature for our Math Practice app. If you check the
to-do file, you’ll see that what we’re building here corresponds to thefirst phaseof the project:
In essence, we’ll initialize the project, set up the folder structure, and create some files. By the
end, we’ll have a simple home page with placeholder pages:HomePage,PracticePage,StatsPage
and aSettingsPage.
The specification may seem like a lot of work for something so basic, but taking things step by
step makes the whole process smoother and more manageable especially for larger projects.

Chapter 5 35
Starting the Project
In Cursor, we then prompt:
Use the software specifications (specification.md) and the todo list
(TODO.md) to complete phase 1. Mark items as done in the TODO list.:
It’s also helpfulto add the file references in Cursor i.e.TODO.mdandspecification.mdso it knows
which files to reference. Cursor will take a while to initialize the React app, install dependencies:
Configure Tailwind CSS:

36 Vibe Coding Fundamentals with Cursor
Create folder structure, placeholder pages and other files:
You  might  encounter  other  issues  e.g.  missing  dependencies,  but  just  follow  the  steps  which
Cursor guides you. Once the project is initialized, Cursor will start a local web server:
When you see an address withlocalhost, that means the app is only available on your comput-
er—it can’t be shared with others. Open the URL in your browser.

Chapter 5 37
At this stage, the app will look basic:
If you are unhappy withyour UI, you can prompt Cursor to fix them. For example, I notice my UI
looks plain, so I asked for a fix:
Cursor responds:

38 Vibe Coding Fundamentals with Cursor
And gives me an improved UI!
As you can see, it might take a few iterations for the UI to improve. This kind of back-and-forth
is normal—if you spot bugs or missing features, go back and refine your prompt.
Over time, you may also want to update the specification and to-do list to include new details
you realize are important (like styling requirements). This will help keep your project consistent
if you ever rebuild from scratch.
We now have a home page with Practice, Stats, and Settings navigation items.

Chapter 5 39
We can also see phase 1 items marked as completed in the to-do list:

40 Vibe Coding Fundamentals with Cursor
Once  you’re  happy  with  the  changes,  clickKeep  Allin Cursor to confirm and save everything
into the project:
This marks the completion of the first phase of our Math Practice app!

6
Configuring Version Control
with Git
When  we’re  working  on  code,  it’s  important  to  keep  track  of  the  changes  we  make,  especially
when coding with an AI agent. This is where Git and version control come in.
The AI might generate code that doesn’t work or could even break the application entirely. With-
out version control, it can be difficult to revert to a previous version. With Git, we can easily roll
back to a working state without losing anything.
So, how does it work? Every time we make progress and reach a state that works — one that we’re
happy with — we can commit those changes. A commit acts as a snapshot, saving how the code
looked at that point in time.
It’s relatively straightforward. The first thing we need to do is initialize the project with Git. To do
this, simply instruct the agent to add Git to the project by prompting:Add Git to the project:

42 Configuring Version Control with Git
The agent will initialize Git tracking for the app, and also creates a.gitignorefile, which is import-
ant because there are certain files we don’t want to track with Git. For example, thenode_modules
folder contains dependencies and should be excluded. There may be other files you don’t want
to include like environment files containing API keys.
If we open the.gitignorefile, we can review what’s been added:
Once we’re satisfied, we can clickKeep.
Next, you should see a prompt to run thegit initcommand:

Chapter 6 43
git initinitializes a Git repository.
The next step is staging the files with:
git add .
Staging simply means adding them to a “ready-to-commit” area. Then we create the initial com-
mit. Cursor might stage and commit in a single command:
This commit will include a message — something the agent will generate automatically for us
— describing what has changed. For example, it will mentioninitialize Vite React+TS app,
Tailwind v4, routing, kid-friendly UIin our case.
Rolling Back to a Working Version
After committing, suppose we introduce a bug that breaks the application. We will see how to re-
vert change — so that if something goes wrong, we know how to roll back to a previously working
version. I’m going to ask the agent tointentionally introduce a bug that breaks the app.

44 Configuring Version Control with Git
The agent has now introduced a bug:
Let’s  test  it  out.  When  I  navigate  back  to  the  app  in  the  browser,  as  expected,  the  homepage
displays an error:
How can we fix this and roll back to a working version?
Ways to Revert Changes
There are ways we can revert the application back to a stable state:
1. Reject Changes in Cursor
One option is to ‘undo’ the changedirectly within Cursor:

Chapter 6 45
This will revertthe file to the previous version. Now, this might be easy now since the change
is only in a single file. But what if the changes are across multiple files and the AI can’t seem to
rectify the bug? That leads us to the second option.
2. Ask the Agent to Discard Changes
The second option is toask the agent to discard any Git changes:
This will restore the project to the last commit, remove any unwanted modifications, and return
the application to a functional state:
After discarding the changes, you’ll see the application works correctly again.

46 Configuring Version Control with Git
Additionally,  Git  keeps  a  history  of  all  commits  and  changes,  so  we  can  revert  to  any  previous
version if necessary. The best part is we can do this quite easily by simply talking directly to the
agent. For example, we can ask it to show us the list of commits:
And from there, we canuse the commit ID and tell it to restore back to that particular commit.
We will revisit Git later on. Let’s continue building our features in the next chapter.

7
Iterating with New Features
Wehave completed phase one of our project, and there’s still quite a lot of work to be done. In
this chapter, we’re going to go ahead and create more features. If I look at Phase 2 features:
I think most have been implemented by Cursor. I can prompt it to verify and check off the list:

48 Iterating with New Features
Let’s implement the unfinished phase two item by instructing the agent:
The agent reports it has implemented Button and Card as reusable components and proceeds to
refactor pages to use them:
We should review the generated code carefully to verify what the AI is telling us is true. We can
also jump directly into the application to test it.
If  all’s  okay,  let’s  prompt  Cursor  to  move  on  to  Phase  3:Use  the  software  specifications
and the TODO list to work on Phase 3 of the project. Mark in the TODO list items
that are done.:

Chapter 7 49
Cursor goes ahead and implements the features in phase 3:
We will revisit unit tests later. For now, if phase 3 items have been implemented, let’s go on to
phase 4 items so that we can start interacting with our app in its UI. I answeryesto start phase 4:
After a while, Cursoris done with phase 4 items:

50 Iterating with New Features
I can then go and trynavigating to the Practice page:
I faced an issue where the app hangs on the Practice page. So I just tell Cursor the problem:
After some back andforth, Cursor finally resolves the hanging issue:

Chapter 7 51
Back in the Practice page, I can now choose an answer:
SelectFlipand I canindicate if I got right or wrong, although this should be automated by the
app. Let’s fix this later.
We can go on to the next question:

52 Iterating with New Features
The app isn’t complete, but things are starting to function well. Looking back at our to-do list,
we’ll notice phase 4 features being marked as complete.
We will re-visit writing automated tests in the next chapter.
So far, we’re satisfied with the results, so the next step is to commit the changes. Prompt:commit
the changes:
The  agent  will  generatea commit message summarizing the changes (e.g. practice, card flip),
stage the files, and handle the Git commit for us.
We can also choose to run Git commands directly if we prefer. With that, this part of the appli-
cation is now complete.

8
Adding Automated Tests
As you can probably tell, manually testing the entire application after every change is time-con-
suming and annoying.
We want to make sure that all the features we’ve built so far continue to work even as we add
new ones. But we also don’t want to test everything from scratch each time. To automate this
process, we should write some tests.
Tests exist for exactly this reason: to replace manual testing with automated checks that can be
run by the agent to tell us whether the application is still functioning correctly or not.
Types of Tests
A well-structured application typically have the following tests:
• Unit Tests: Thesetestsmall parts of the application — usually a single function or file.
• Integration or Component Tests: These check how different components of the applica-
tion worktogether, either individually or in combination with others.
• End-to-End  (E2E)  Tests:  These  tests  simulate  user  interactions  by  actually  opening  a
browser,  clickingbuttons,  and  verifying  that  the  application  behaves  as  expected.  Be-
cause they are more complex and slower to run, we usually write only a few of them for
the most critical features.

54 Adding Automated Tests
Ideally,  an  application  should  have  tests  at  all  three  levels.  If  I  prompt  Cursor,what  kind  of
automated tests can I have in my application, it gives:
In our case, let’s instruct the agent to write end-to-end tests for the functionality we’ve built so
far. We will use Playwright, a popular framework for writing and running E2E tests:

Chapter 8 55
Setting Playwright up involves a bit of work. During installation, we might be asked to run sev-
eral commands:
Writing these tests isn’t always straightforward. The AI might generate tests that fail initially, so
it also needs to figure out how to fix them and install any missing dependencies.
We will let the agent do its thing: initializing Playwright tests, creating the necessary files, and
setting everything up:

56 Adding Automated Tests
Running and Debugging Tests
During testing, you should seeupdates showing which tests passed or failed. In our case, we can
see one of the tests is failing:
Give the agent achance to fix it:

Chapter 8 57
Ultimately, what we want to see is all tests passing. Meaning the application functions correctly..
We can then take a quick look at the application itself — go to the App home screen, check the
buttons — and verify that everything still works.
For every new piece of functionality we implement, we can tell Cursor to write a corresponding test.
Final Steps: Git and Housekeeping
Lastly, we should revisit the.gitignorefileto ensure that any new folders (such astest-results
orplaywright-report) are ignored, as we don’t want to commit them. We’ll simply say:revisit
the .gitignore file:
This ensures nothing unnecessary is tracked in version control.
Once that’s done, we can stage the files and commit the changes:

58 Adding Automated Tests
Summary
Letting the agent assist us with automated testing saves us time, improves reliability, and helps
us catch bugs early. We ensure our application continues to work even as it grows more complex.

9
Rules for Controlling the AI
Behavior
So far, we’ve been controlling the behavior of the AI through the prompts we provide and our
specification.mdandTODO.mdfiles:
We can additionally use rules to define more precise constraints and expectations for how the
AI should behave:
(https://cursor.com/docs/context/rules)

60 Rules for Controlling the AI Behavior
In Cursor, there areProject Rules,User RulesandTeam Rules. They are basically the same just
different in scope. We will illustrateProject Ruleshere.
As  an  example,  we  can  have  rules  that  automatically  run  end-to-end  tests  after  making  some
changes. E.g.:After making a change, run end-to-end tests to ensure everything passes.
This removes the need for us to manually remind the AI with an extra prompt.
Creating rules is straightforward. First, go toCursor Settings:
UnderRules & Memories,Project Rules, selectAdd Rule:
A popup appearsand you’ll be prompted to name the rule — let’s call ittesting:

Chapter 9 61
Cursor will automatically create a.cursordirectory in your project, and inside it, arulesfolder.
In that folder, you’ll find a new file namedtesting.mdc.
This file is written in a Markdown-like format. We can specify the rule type. E.g.Always Apply
means the rule will be attached to every chat. We will select this:
We can then include something like:
Rule 1: After making changes to the codebase, run all tests to ensure they
pass.
Rule 2: After changes, proactively ask the user whether they'd like to
create additional tests to cover the new functionality.

62 Rules for Controlling the AI Behavior
Testing the Rules
Now, let’s test if our rule works. Suppose we make a small change — for example,add confetti
animation each time user clicks "I got it right":
We can see the rule takes effect:

Chapter 9 63
Cursor ran the tests to ensure they passed after adding the confetti animation. This suggests that
the rules were recognized and followed.
Beyond Testing: Other Use Cases
Rules aren’t limited to testing. They can define framework-specific guidelines, code style conven-
tions, architectural preferences, and more.
Many projects even share predefined rules. For example, Cursor’s online directory includes rules
for frameworks like React and TypeScript:
These can serve as inspiration, but don’t blindly copy them into your project. More rules aren’t
always better — especially if you’re not sure what each one does. Start with a few essential rules
and expand as necessary. Adding too much context to the AI doesn’t guarantee better output.
If you notice a recurring mistake or unwanted behavior from the AI, that’s an opportunity to write
a new rule targeting that specific issue.

10
Code Refactoring
Code refactoringis the process of restructuring existing code without changing its behavior. This
means that after refactoring, the application should still look and function exactly the same as
before.
The goal of refactoring is to improve the readability, maintainability, and efficiency of the code.
Think of it like cleaning up a messy room — everything works the same, but it’s now more orga-
nized and easier to manage.
After building a few features, it’s a good idea to ask the AI to review your code and suggest improve-
ments. This is especially effective if you’ve defined rules that enforce a particular coding style or if
you’ve noticed issues that need fixing. For example, I created an additional rule calledcomments:

66 Code Refactoring
I instruct the AI to add comments explaining what specific parts of the code do. So if you notice
that many sections lacked comments, you would therefore expect the AI to add comments during
the refactoring process.
I give it a prompt for the refactoring:Analyze the codebase, refactor it according to clean
code principles while not changing its behavior. Refer to the rules.:
Once the AI applies changes, you’ll startseeing comments appear in the code:

Chapter 10 67
At the end of the refactoring, end-to-end test are run to ensure that the application still works
correctly:
Note
It’s common during refactoring for tests to fail — sometimes for valid reasons, or
because the tests themselves need updating. Once the tests pass, it’s a good idea to
also perform a manual check to confirm the application still behaves as expected.
Finally, you can review the changes the AI made. You’ll likely notice updates across multiple files,
including new file structures:

68 Code Refactoring
Accept the changes you agree with — or review them individually if you prefer more control. It’s
often best to tackle one type of change at a time, but you can also rely on the model to detect and
fix issues automatically.
And that’s the essence of code refactoring with Cursor — cleaning up your codebase, improving
quality, and ensuring everything continues to work as intended.

11
Providing Context by
Referencing Resources
In  general,  Cursor  hasa good understanding of the project and knows which files need to be
modified, even if our instructions are unclear or a bit vague.
However, if you feel the need to be more specific, you can, for example, select a portion of text
from a file and clickAdd to Chat:
You can then ask questions about that part of the code, because it has been added to the context:

70 Providing Context by Referencing Resources
The same approach applies if you want to reference a file — you can do this using the@symbol
and select the file you want:
You can reference documentation, Git, past chat conversations, or even terminal outputs to be
more specific about certain aspects of your project.
For instance, let’s say we have a specific file. We could ask:What does this file do?
This allows us tohave a conversation about that file. That’s how you can reference and interact
with different resources in Cursor.

12
GitHub Integration
Currently, our Git repository exists only locally, but there are reasons to use a service like GitHub
to back up our work. It provides a secure backup in the cloud and also makes collaboration with
others on the same project much easier.
If you don’t yet have a GitHub account, go togithub.comand create an account. It is free and only
takes about two minutes. Once you’re logged in, look for the button to create a new repository:

72 GitHub Integration
The repository is where we’ll store our project’s code on GitHub. I’m going to name my repository
math-practiceand leave itPublic:
Leave the rest of the repository initialization options as default:
Go ahead and create the repository.

Chapter 12 73
Once the repository is created, you’ll see a list of setup options:
ChooseHTTPS, then copy the repository link:
Next,  switch  back  to  Cursor.  We  will  prompt  the  agent  to  push  our  local  changes  to  this  new
remote repository:

74 GitHub Integration
Cursor will prompt you to run:
git remote add origin <repository-url>
This command links our local repository to the remote repository on GitHub.
Next, we push the local changes with:
git push -u origin main
At this point, if your Cursor is not yet authenticated with GitHub, you might see it will try to au-
thenticate with GitHub. You’ll see a message from the GitHub extension requesting permission
to connect. ClickAllow, and then chooseCopy and Continue to GitHub:
A browser window might open. ClickContinueand select your GitHub account. You might be
prompted to paste the authentication code you copied from Cursor, and finally authorize Cursor
to make changes to your GitHub account.

Chapter 12 75
Back in Cursor, you should see a success message confirming that the changes have been pushed
to themainbranch of your GitHub repository:
From  now  on,  whenever  you  want  to  push  your  committed  local  changes,  you  can  simply  tell
Cursor to do it for you.
If you refresh your GitHub repository, you’ll see all your project files stored there:
Now we have an additional layer of security: our code is backed up on GitHub — and this inte-
gration opens up new possibilities forcollaboration, version control, and continuous deployment.

13
Deployment
At this point, we have a pretty decent app. We can start practicing some Math questions, we’ve
implemented a few features, and overall it’s functional enough that we might want to share it
with others.
However,  the  application  is  currently  running  locally.  When  you  see  localhost  in  the  browser
address bar e.g.http://localhost:5175/practice, that means it’s only available on your own
machine. If you try to share that link with someone else, it won’t work.
So if we think this app is useful and we want to share it with others, we need to deploy it. The
good news is Cursor can help us with that process.

78 Deployment
1. Asking Cursor for Deployment Guidance
The first thing I’ll do is switchfromAgenttoAskmode in Cursor. Sometimes, if we stay inAgent
mode, it might start deploying the app automatically — and we don’t want that yet:
We can prompt:I want to deploy this project. What should I do?
Initially, we’rejust gathering information to understand what needs to happen. Cursor might tell
us that a few changes in the code are necessary, and it will also outline the main steps:
We will revisit the deployment options later.

Chapter 13 79
2. Build the Project
One of the key steps is to build the project:
This is essential because it creates a production build — a version of your app optimized and ready
for deployment. This process generates a separate directory in your project structure containing
all the necessary files.
So switch back to Agent mode and runnpm run build:

80 Deployment
Sometimes the build succeeds automatically; other times you’ll need to fix minor issues. But we
can ask Cursor to fix it:
Once the build is complete, you’ll notice a newdistdirectory containing your production-ready
application, including anindex.htmlfile and all required assets.
We’ll deploy that directory to a hosting service. There are several popular options for this, and
Cursor will often list them:
For this example, we’ll use Vercel, one of the simplest platforms to get started with.

Chapter 13 81
3. Set Up a Vercel Account
Go tovercel.com, clickSign Up, and create an account. The process is quick — it takes only a
couple of minutes, and you don’t need to provide a credit card. Once you’re done, you should be
able to log into your new account right away.
4. Build and Deploy with Cursor
Back in Cursor, give the following instruction:deploy to Vercel:
Cursor asks me to go tovercel.comand log in with my GitHub account. In it, clickNew Project:
You’ll see your GitHub repositories listed. Yourmath-practicerepository, e.g.greglim81/math-
practiceand clickImport:

82 Deployment
Vercel willautomatically detect it’s a Vite React app. ClickDeploy(no configuration needed) and.
wait2-3 minutes:
Your deployment might fail and you can look at the errors thrown in the logs:

Chapter 13 83
You can just copy the logs and paste it back into Cursor:
So  for  e.g.,  in  my  case,  Ihaven’t pushed the latest TypeScript fixes to GitHubyet.  So  let’s  ask
Cursor to help us do that:
The deployment process in Vercel will then auto-begin. After a few moments, deployment com-
pletes, and you’ll see links to your live application:

84 Deployment
Just like that, your app is now deployed on Vercel’s cloud infrastructure. You can share this link
with anyone, and they’ll be able to use your app directly in their browser:
It’s also possible toconnect a custom domain to make the link look more professional. But the
most important takeaway here is that you’ve gone from idea→implementation→deployment
— and now you can share your product with the world.

14
Building Apps with Lovable
(No-code/Low-code)
In this chapter, we will explore a popular tool for creating beautiful front ends — Lovable.
We’ll start by building an application from scratch: a Kanban board. The app we create will be
fully functional, but it will also go beyond just building a frontend. We’ll use Supabase to handle
and store data in the backend.
Lovable allows us to build both the frontend and the backend from a chat interface — without
having to interact with the code directly. This makes developing and deploying a web app acces-
sible to everyone, even one without much programming experience.
Before AI, researching and building an app like a Kanban board would have taken a programmer
about a week. Now, with the right guidance, we can create the initial version in 10 to 30 minutes.

86 Building Apps with Lovable (No-code/Low-code)
Pricing
Lovable does not offer a free trial, but it does have a free plan — which unfortunately includes
only five daily credits:
Each message or prompt you send costs one credit meaning you can only send five prompts per
day. It’s not a lot, but still enough to build something useful.
Also, keep in mind any project you create on the free plan will be public. There’s no option for
private projects unless you upgrade. The Pro plan costs $25 per month and provides 100 credits.
This plan also lets you create private projects.

Chapter 14 87
Supabase
The other servicewe’ll use is Supabase. Supabase does offer a free plan, and it includeseverything
we need to get started:
By sticking with the free plans for both Supabase and Lovable, you should be able to build a decent
application (or at least get started and see if you really like Lovable).
However, if you’re on the free plan, it might take you a few days to complete this section since
you’re limited by the daily credit cap — which can be a bit frustrating.
Exporting Your Project
We’ll also learn howto take our application outside of Lovable by connecting it to GitHub:

88 Building Apps with Lovable (No-code/Low-code)
We can also have direct access to the source code of the application:
The registration process for Lovable is straightforward. Supabase, on the other hand, might ask
you a few setup questions since it’s a slightly more technical tool — but nothing too complicat-
ed. In general, just stick with the default options. So, goahead and create both a Lovable and a
Supabase account using the free plans.
First Lovable Project
In this lecture, we will build asimple app using Lovable, and we briefly walk through its interface,
which already looks intuitive. At the center, you can provide a prompt describing what your app
should do:

Chapter 14 89
You can attach a design image or import from Figma which Lovable will use to guide the gener-
ation of your application’s layout and style:
In  terms  of  privacy,  you  can  choose  betweenPublic,WorkspaceorPersonal.  But  for  the  free
account, you can only choosePublic.
Further down, you’ll see projects created by the community:

90 Building Apps with Lovable (No-code/Low-code)
“Remixes” indicate that a public project has been used as a base for creating something new — and
you’ll notice that some projects have been remixed many times.
Now, let’s go back to ourgoal: building a Kanban board to manage tasks. For this, we’ll attach an
image of a Trello Kanban board (you can use your preferred image):
With the attached image, enter a prompt:
Go ahead and create the new project. Initially, you’ll see Lovable start processing — this might
take a few minutes depending on the complexity of your project:

Chapter 14 91
On the left-hand side, you’ll find the chat interface where you can interact with Lovable and
request changes. On the right-hand side, you should ideally see a preview of your app:
Note
Sometimes this preview might not load due to an error, but you can just ask Lovable
to fix it. Often, the issue is something small — like a missing package which Lovable
can fix automatically.

92 Building Apps with Lovable (No-code/Low-code)
Your Kanban board should appear in the preview! You can try adding a new task (e.g.,Read book)
and see it appear on the board. In my case, I can even move tasks around.
Now,  let’s  understand  what’s  happening  under  the  hood.  All  the  generated  code  is  hidden  by
default, but you can click on</> Codeat the top to see it:
This reveals the entire codebase of your app, and you can even edit it if you wish — though I don’t
recommend doing that just yet.
Lovable also allows you to request additional changes directly through chat. It’s quite intuitive,
but there are a few more features worth noting.
• Chat  Mode-Chat  Mode(enable  it  by  clicking  on  it)  lets  you  have  conversations  with
Lovable without applying changes to the project:

Chapter 14 93
• Edit  Mode-Edit  Modeallows  you  to  make  changes  through  the  visual  interface.  For
example, you can rename the board, adjust text size, or modify UI elements:
In the above, I change the background color to ‘zinc-500’.
These changes are recorded asVisual Editsand don’t consume any prompt messages which is
useful if you’re running low on them.
There are alsopromptedits where you prompt the AI to edit the particular area you have pointed
out, and that consumes credits.

94 Building Apps with Lovable (No-code/Low-code)
History
Historylet’s you view the history of all changes — similar to a Git commit history — and even
restore previous versions if needed:
I hope this gives you an introduction to building apps with Lovable. It’s a powerful and user-friend-
ly tool that makes creating, customizing, anddeploying  applications  straightforward  —  even
without deep coding experience.

15
Creating the Software
Specifications Document
The user interface design of Lovable is inviting, encouraging you to jump straight into building
an application. The fact that you can generate something functional with just a simple prompt
gives the impression that everything is quick and effortless.
But it’s also important to be strategic about how we approach building the application. We don’t
want to simply write a single massive prompt containing everything and let Lovable build it all
automatically.
In this chapter, we’re going to break the process into a few key steps, similar to what we have
done earlier in Cursor. First, we’ll use ChatGPT with an initial prompt to help us create a software
specification document that we’ll later provide to Lovable. Based on that specification, we’ll then
create a to-do list. And finally, we’ll also prepare an initial project prompt. We will illustrate these
with a new project.

96 Creating the Software Specifications Document
Let’s first focus on creating the software specification document. We can ask ChatGPT to write
a software specification based on a brief description of what we want to build, along with a list
of important features. I will prompt:
I want to write a software specification. Output should be in markdown. I
want to build a Trello style Kanban board using React with drag and drop
functionality and nice design.
Here are some features:
- multiple columns (To do, in progress, done) that can hold task cards
- Drag and drop functionality between the columns
- able to add new cards to any column
- able to edit a card name
- able to add new columns
- able to rename columns
- able to delete columns
- storage using supabase
Ask follow up questions if anything is unclear before you generate the
specification.

Chapter 15 97
ChatGPT will thengenerate the specification:
After reviewing the generated specification, for our example, I further prompt it:
- don't include user authentication to keep things simple,
- limit the project to a single board,
- keep the cards minimal with just a title.
- collaboration features are not needed
- app should be mobile-optimized.

98 Creating the Software Specifications Document
And I have the resulting specification:
Let’s move on to the next step — creating the to-do list. The goal is to break down all required
features into logical steps.
For this, we’ll use another prompt:Based on the specification — now generate a to-do
list to build features in a logical order.:
And I will get something like:
# Trello-style Kanban Board — Development To-Do List
This to-do list breaks down the project into small, logical development
steps following the simplified specification.

Chapter 15 99
---
##隣Phase 1 — Setup & Environment
* [ ] Initialize project with **React + TypeScript** using Vite.
* [ ] Install dependencies:
* `@supabase/supabase-js`
* `@dnd-kit/core`, `@dnd-kit/sortable`, `@dnd-kit/modifiers`
* `tailwindcss`, `postcss`, `autoprefixer`
* `classnames`, `zustand` (optional for state management)
* [ ] Configure Tailwind CSS.
* [ ] Create `.env` with `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
* [ ] Initialize Git repository.
---
##Phase 2 — Supabase Setup
* [ ] Create Supabase project.
* [ ] Add `columns` and `cards` tables according to the schema.
* [ ] Insert sample data for testing.
* [ ] Enable public access for testing (optional for v1).
...
...
At this point, we have a solid specification and a structured to-do list — both in Markdown. But
there’s one final piece: the initial project prompt. Because Lovable requires an initial prompt to
create a new project, we’ll ask ChatGPT to generate one that focuses on the setup phase. Let’s
prompt:
take phase 1 and transform it into a prompt that can be used to kickstart
the project and create the initial design. Add a bit of context about the
project we are trying to build.

100 Creating the Software Specifications Document
And we will get something like:
Lovable is quite good at UI design on its own, so we don’t need to go into too much detail here.
If the output seems overly detailed, that’s fine — we’ll review and refine it as needed. The main
goal is to provide enough context to kick-start the project.
This section has been more theoretical than hands-on, and writing specifications might not feel
particularly  exciting.  But  promptengineering — and specifically, knowing how to write clear,
detailed specifications — is important. It impacts the quality of the application you’re building.
That’s why we’re spending extra time on this step — to help you avoid major problems later on.

Chapter 15 101
Adding Instructions and Guidelines
In this section, we’re goingto put the specification and the to-do list we created into action by
building a new project from scratch.
Let’s copy our kickstart prompt from ChatGPT that we created in the previous section and paste
it in Lovable:
Give Lovable a bit of time to kick-start the app. Here’s how my initial version of the application
looks:
It  appears  a  bit  different  from  before  —  and  that’s  expected.  Even  if  we  use  the  same  prompt
multiple times, the output will look slightly different each time.

102 Creating the Software Specifications Document
For  my  app,  currently  nothing  is  moving  here  —  the  functionality  isn’t  implemented  yet.  The
task cards are currently hard-coded, which we can see in the code:
So we can’t add or move any tasks around. But for now, that’s fine.
Let’s now see wherewe’re going to store our specifications and todos. Click on your project name
and go toSettings:

Chapter 15 103
Settingsis where you manage the project. You can rename it if you’re not happy with the project
name or even delete it later if needed:
But I want to focus onKnowledge:
Knowledgecontains project-related information. Here, you can specify project-specific rules,
best practices, coding stylepreferences, and more.

104 Creating the Software Specifications Document
So from ChatGPT, copy the entire specification we’ve generated previously and paste it here:

Chapter 15 105
After the specification, also copy-paste the todo-list from ChatGPT:
The big advantage of storing the specification and todo-list here is that it becomes persistent —
the agent is now aware and can reference it any time. Importantly, we can easily go back into
Settings|Knowledgeand edit or add information whenever we want.
If we had placed all of this inside a single prompt, it would have been buried somewhere in the
conversation history and much harder to edit. That’s why storing it here is a much better approach.

16
Supabase Integration
Currently, our application is just a front end. The information you see on the screen is hard-coded,
and we still can’t add a card or reorder them—nothing persists. To persist data, we need a back-
end which is why we’ll useSupabase (supabase.com). Supabase speeds up app development by
providing nearly everything a backend needs, including:
• Database for storing data
• Authentication for user sign-up and sign-in
• APIs so the front end can read and write data
• Storage for images/files,
• plus server-side computation if needed

108 Supabase Integration
Right now, we only need a database to store the cards you see on the screen.
The good news is that Lovable has a direct integrationwith Supabase. UnderProject Settings|
Supabase, there’s aConnect Supabasebutton:
When you clickthe button, you’ll see a window asking you to authorize Lovable to access Supabase.
Authorize it, and next, we need toConnect a projectandCreate project:
In  theCreate  a  new  projectpopup, fill in aProject  namee.g.boardand  generate  a  database
password:

Chapter 16 109
ClickCreate  a  new  projectand  the  project  is  now  created  in  Supabase.  Back  in  Lovable,  you
should see theboardproject appear and you can connect it:
These steps are important—if you skip any, you’ll likely hit issues later.
After connecting, Lovable may show a prompt or sidebar with additional details:
You can reviewthis to understand what features you can add to make your app functional.

110 Supabase Integration
Storing Data in the Database
At this point, we’veconnected our application to Supabase — but there’s no database, no tables,
and we still need to configure a few things. So let’s take a look at our project specifications and to-
do list to see what’s next. UnderSettings|Knowledge, if we scroll down, we’ll see the setup steps.
We’ve completed the first part — creating a supabase project. The next step is to add thecolumns
andcardstable. To do so, in the chat, we can prompt:work on phase 2 – supabase setup:
Note
This might look different for you depending on the specifications and to-do list
ChatGPT gives you.

Chapter 16 111
In the chat, we’ll see theSQL commands needed to create the required tables and insert initial data:
Review  these  commands  and  then  approve  them.  Later,  we  can  verify  whether  they  work  as
expected.

112 Supabase Integration
Note
Lovable sometimes encounters errors when trying to run these SQL commands auto-
matically. If so, we’ll simply go with whatever Lovable suggests, approve the SQL, and
let it proceed. Once the migration is successful, it will apply the necessary changes.
Now, if we click onView Tables:
We should be directed to the Supabase Table editor and there should be two tables: acardstable
and acolumnstable.
Looking at these tables, we’ll see that there are currently some default cards and three columns:

Chapter 16 113
That’s a good sign that the setup is working. But currently, the data displayed in my application
UI is still not coming from the database, but rather still hardcoded in. So, let’s move on to ask
Lovable to implement the next phases of our application.
So for e.g., after I ask Lovable to implement phase 3 in my to-do list:
It now fetches data from Supabase. So say I add a new row incolumnstable:

114 Supabase Integration
You can seethe new column in the app:
This means we have verified that the integration with Supabase is successful.

17
Adding Functionality
Let’s continue adding features to our application step by step by revisiting the to-do list under
Settings|Knowledge. We will continue asking Lovable to implement phases one at a time.
Let’s go on to implement phase 4:

116 Adding Functionality
The good thing about a todo-list is that we can implement our app in small incremental phases
to verify that each phase is implemented well before moving on. And if sometimes, Lovable takes
a while or gets stuck, I prompt it like:
And Lovable normally will resume implementing the app:
I move on to implement phase 5 – CRUD features:

Chapter 17 117
And now, let’s test if data is actually being stored. We’ll try adding a new task called “Learning
Lovable” and clickAdd Card:

118 Adding Functionality
The taskappears on the board:
To confirm that it’s saved in the database, let’s check our Supabase table editor. We should now
see an additional row in thecardstable for theLearning Lovablecard we just created:
We can also try deleting it by clicking on thebinicon:
We are greeted by a nice delete popup:

Chapter 17 119
And when I check the Supabase Table editor, theLearning Lovablerow is not there anymore.
We can also try to edit a card for e.g., I change the below card:
To:
And I see thechange take place in the Table editor:
Let’s move on to implement phase 6 where we can enable drag and drop cards within and across
columns:

120 Adding Functionality
And we candrag-drop cards between and within columns now:
Summary
We have implemented quite a few phases by now and will leave the rest of the phases to you! We
illustrated that the best way forward is to:
• Use the To-Do list to plan and track your next steps.
• Review the changes that have already been implemented.
• Test your application frequently to ensure everything works as expected.
• Tackle the next task incrementally.
If  you  believe  certain  parts  of  the  application  need  to  be  adjusted  or  improved,  go  back  to  the
specification and add more detailed instructions there. Managing everything from a single source
of truth makes it easier to maintain and reuse the specification as the project evolves.
This is how we can continue building and improving this application step by step.

18
Source Code Extraction via
GitHub Integration
In this chapter, we will look at howto extract the code for our application created with Lovable
and save it somewhere else.
If you click onCode, you’ll see our application code:
However, it doesn’t make sense to manually open every single file and copy them or download
them one by one.

122 Source Code Extraction via GitHub Integration
So, in order to export this code and work on it independently of Lovable, we need to copy it into
a GitHub repository. To do that, we’ll use Lovable’s built-in GitHub integration, which allows us
to push our project directly to GitHub.
Click on the GitHub icon and clickConnect GitHub:
GitHub willaskwhether you want to allow Lovable to access your account information — click
Authorize lovable�dev:

Chapter 18 123
Next, link a new GitHub organization. ChooseAll repositoriesand then clickInstall & Authorize:
Now thatyour GitHub account is linked, clickContinue:

124 Source Code Extraction via GitHub Integration
Click onTransfer Project, select your organization, and it should sayProject•Connected:
You can now view your project directly on GitHub. A new repository will be created automatically
—its name matches your project name inside Lovable:

Chapter 18 125
From  now  on,  anychanges  you  make  in  Lovable  will  automaticallysync  to  GitHub.  Likewise,
changes made in GitHub will sync back to Lovable. This two-way integration allows you to work
on your code outside Lovable — without consuming any Lovable credits — and ensures that you
retain ownership of your application code.
If you want your project to remain private, make sure the repository is not public. If you see a lock
icon, it means the repository is private. The repository’s visibility will also be indicated clearly
in its description:
Once everything is connected, you’ll notice that any time you make changes, they are automati-
cally synced to GitHub. This makes the GitHub integration a powerful and useful feature — one
that we highly recommend enabling as early as possible.

19
Deploying Your Application
with Lovable
Let’s assume for a moment that we’ve finished the development and now want to share our cool
application with someone else. Do we simply share the address we see here?
That wouldn’t work as the address is just the Lovable preview of our app. To make the application
accessible to others, we need to deploy it.

128 Deploying Your Application with Lovable
Deploying is straightforward — we can deploy the app using thePublishbutton:
Once we clickPublish, we’ll see a few important things. First of all, we’ll have the domain where
our  application  will  be  hosted  e.g.board-kickstart-forge.lovable.app.  This  will  be  on  the
lovable.appdomain by default. We can also click onCustom Domainto host on your own do-
main. We will revisit own domain hosting later.
Before publishing, importantly, underAdvanced, we might see security issues being flagged:
If we click onReview Securityto understand further, we’ll see that the error is related toAnyone
Can Delete or Modify Your Project Data:

Chapter 19 129
And if weclickUpdateunderSecurity Scan, we get more issues flagged:
This is likely something we didn’t specify in our project requirements or we deliberately omitted
e.g.No authentication. It’s good that the error warning shows up here because it’s something
we should address before deployment.
Before  deploying,  we  should  make  sure  there  are  no  errors,  because  they  could  cause  serious
security issues in our application.
If you really want to, you can go ahead and publish the app even with these security issues, but
ideally, you should resolve them first:
Once deployment is complete, you’ll get a shareable link that you can send to anyone. The whole
process only takes a few seconds.

130 Deploying Your Application with Lovable
Resolving Security Issues
Let’s take a look at how we can resolve the security issues reported by Lovable. UnderDetected
Issues, click onTry to Fix All:
After  clicking  onTry  to  Fix  All, Lovable prioritizes what critical security issues need to be ad-
dressed first:

Chapter 19 131
To  start,  I  will  prompt:Phase  1:  Implement  Authentication  (High  Priority)(not  to  be
confused with phase 1 in to-do list):

132 Deploying Your Application with Lovable
Lovable implements for me a user login and sign up form.
At this point, different users can sign in but they will see the same data. So let’s go on to imple-
ment phase 2:

Chapter 19 133
We might be prompted to apply certain database changes, and Lovable will let us know once the
required SQL commands have been successfully executed.
Now, different users will see only their own set of unique data in their Kanban boards.
I think you get the idea. Just continue prompting Lovable to address the rest of the security phases.
If we do a security scan again (clickRefresh), you can see some of the error warnings have dis-
appeared:

134 Deploying Your Application with Lovable
So back in the Lovable chat, I prompt:Phase 3 – Update RLS Policies:
Andthe RLS issue is now gone:

Chapter 19 135
When all errors have been resolved, go ahead and clickPublishto deploy the project:
The project will be published and the deployed link provided to you. And this is how my deployed
application looks:

20
Domain and External Hosting
Options
While it’s convenient to have everything done via Lovable, we don’t necessarily need to host our
application on Lovable if we’ve already connected it to GitHub. By connecting to GitHub, we open
the door to many other integration possibilities.
For example, we can deploy the application on a service like Vercel (we just need to provide the
repository). We can also deploy on Netlify. Note that the frontend may be hosted on Netlify, Vercel,
or, as in our current case, Lovable, but the same Supabase backend will still be required.
Now, why would we want to deploy on Vercel or Netlify instead of on Lovable?
First, the default Lovable domain ends with alovable.app. For a proper business website, we
will most probably want our own domain. To purchase a new domain or connect an existing one
in Lovable, both options require a paid Lovable subscription:

138 Domain and External Hosting Options
If you already have access to your code via GitHub, it makes a lot of sense to use Vercel or Netlify.
Doing so allows you to bring your own domain and host your site there without needing a paid
Lovable plan. You can still make changes through Lovable if you want — even on the free plan —
provided you’re okay with your code being public.
The main point is: there are many hosting and deployment options available — it’s up to you to
decide which one best fits your needs.
Additional Integrations
Let’s see some of the other integrations that are possible with Lovable. We’ve covered two native
integrations — Supabase and GitHub. They are called native because they work directly from the
Lovable interface without requiring any additional setup or configuration.
However, there are many other powerful integrations worth knowing about:
(docs.lovable.dev/integrations/introduction)
For example, ifyou want to collect payments, you can integrate your application with Stripe. If
you need to send transactional or marketing emails, you might consider using a tool like Resend.
You can connect powerful large language models to build AI features in your application through
integrating platforms like OpenAI or Anthropic.

Chapter 20 139
These topics are outside the main scope of this chapter, but we highlight them so you’re aware
of the many possibilities available.
Conclusion
Lovable  is  a  great  tool  for  creating  and  deploying  applications  with  relatively  little  effort.  It’s
extremely  beginner-friendly,  which  is  why  so  many  people  love  using  it.  Even  with  just  a  sim-
ple prompt, you can build a clean user interface and easily add backend functionality through
Supabase.
However, sometimes the AI model isn’t quite smart enough to fix certain issues on its own. How-
ever, with a bit of targeted prompting and an understanding of the errors, it’s usually possible
to overcome these hiccups.
Of  course,  compared  to  an  IDE  like  Cursor,  Lovable  is  less  capable  —  but  it’s  also  far  more  us-
er-friendly, and that’s exactly the audience it’s designed for.
The biggest pain point with Lovable is its pricing. The free plan is quite limited — it only offers
five daily credits. While that’s fine for small experiments, it’s not particularly useful if you want
to fine-tune your app or if you run into frequent issues.
Even the Pro plan, which costs $25 per month, only gives you 100 credits. If you need more credits,
you’ll have to pay double that price. But even then, 100 messages per month isn’t much — espe-
cially if you’re building something more complex.
Let’s compare this with Cursor. Cursor’s monthly plan costs $20 per month and provides 500
requests, plus unlimited slow requests (which are essentially the same requests, just with slightly
slower responses). That means you can send far more messages for a lower price.
But Lovable has its target audience. It’s a good starting point for web projects — especially for
people who might feel intimidated by tools like Cursor or Windsurf. Thanks to its GitHub inte-
gration, it’s also easy to access your source code. You can kickstart a project in Lovable, then take
ownership of the code and continue working on it outside of the platform if needed.
That’s Lovable in a nutshell. I hope you were able to build a useful project and gain a clearer un-
derstanding of what this tool can (and cannot) do well.

21
Working on Existing Code
Bases with Windsurf
Starting a project from scratch is one thing — but working with an existing codebase is a com-
pletely different challenge. This is where many AI coding tools tend to struggle. However, Windsurf
has started gaining a reputation for handling this scenario better than most of its competitors.
Windsurf is Cursor’s biggestcompetitor. In this chapter, we’ll be using the full IDE version. To
get started, go towindsurf.comand click on theDOWNLOADbutton:

142 Working on Existing Code Bases with Windsurf
In May 2025, Windsurf was acquired by OpenAI, the company behind ChatGPT. Because of this,
we can expect many exciting developments ahead.
In  this  chapter,  we’ll  work  with  an  existing  codebase  and  make  improvements  to  it,  while  ex-
ploring Windsurf ’s key features.
Setting Up Windsurf
After downloading and installing Windsurf, open Windsurf. Windsurf will prompt if you want
to import any settings from VSCode or Cursor. Just starting anew. Choose your preferred theme
(light or dark theme).
Your  local  Windsurf  installation  will  need  to  be  connected  to  your  Windsurf  account.  If  you
don’t have one yet, simply Sign Up for one— the process is straightforward and doesn’t require
a credit card.
Once your account is created, you’ll be redirected to the Windsurf IDE, and you’re ready to start
coding:
You  cancheck  your  current  plan  status  and  usage  at  any  time  by  clicking  on  theTrialbutton
inside the IDE:

Chapter 21 143
Initially, you’ll be on the free plan, which comes with a two-week trial— more than enough time
to explore and experiment with all the main features.
First Project in Windsurf
Let’s createour first project with Windsurf and get a bit of orientation to understand how it works
and where to find everything.
You might notice that the Windsurf interface looks similar to Cursor. Both use VS Code as their
foundation, so many features and layouts are nearly identical. The left-hand side is almost iden-
tical to what you see in Visual Studio Code or Cursor.
The main difference you’ll notice is on the right-hand side, a panel calledCascade:

144 Working on Existing Code Bases with Windsurf
Thisis Windsurf ’s AI component where you’ll write prompts and interact with the AI. Notice the
two modes,CodeandChat:
You’ll useCodemost of the time.Chatallows you to have conversations with the AI but doesn’t
actually make changes to your code.
Creating a New Project
Let’s create a new project. You have two ways to start:
1. Create a new empty folder on your system and open it in Windsurf (similar to what we
did with Cursor).
2. Let Cascade choose a folder — Windsurf will suggest a folder for your project.
For this example, I’ll let Cascade handle it and ask it to build a simple game.
Before we begin, we can see the AI model that will be used for generation at the bottom of the
AI panel:
If you click on it, you’ll see a list of available models along with how many credits they cost. For
example, at time of writing this book, GPT-5 from OpenAI is a relatively affordable and still very
powerful model which consumes 0.5x credit.

Chapter 21 145
Similar to what we did with our Cursor project, we will ask Windsurf toBuild a 2d car dodging
game with three.js:
Since we didn’t provide an empty directory, Windsurf creates for us a project folder structure:
It then asks us to set our active workspace to the created folder:
And you can see your project files on the left hand side:

146 Working on Existing Code Bases with Windsurf
Once the project is built, we can ask Windsurf to run a server to start the game:
When the server runs, we can then open the preview (I opened it in an external browser):
And here’s what I get:
We can move the car around but the score didn’t increment when I passed a red block. But that’s
acceptable for a first attempt. To have more features implemented, it will require more follow
up prompting.
This is the general workflow for starting a project in Windsurf.

22
Analyzing an Existing Code
Base
Let’s put Windsurf to the test by asking it to work on an existing project. That existing project
is  a  Kanban  board  app  that  I’ve  built  using  Lovable  in  the  previous  chapter  (but  it  can  be  any
code base). It is not necessary that youcomplete the previous chapter first (in case you skipped
directly to this chapter).
In the Kanban board app, you can add tasks, move them around, or delete them altogether. Much
of the functionality has been built. But we would like to add features like:
• Add due dates for cards.
• Add column reordering.
This repository is stored on GitHub. We have a specifications document and also a to-do list for
this project.

148 Analyzing an Existing Code Base
First,  let’s  clone  this  repository  locally  and  start  working  on  it.  We  can  do  so  in  Windsurf.  In
Windsurf, close the existing folder that’s open, and from the menu, chooseClone Repository:
We’ll clone it from GitHub using the GitHub extension:
Select it, and hitCopy & Continue to GitHub:

Chapter 22 149
Go to GitHub, and selectContinue:
Paste the one-time code displayed inside Windsurf andAuthorize Exafunction:
Now we’re all set!

150 Analyzing an Existing Code Base
We can close this tab, go back to Windsurf, and we should see the available repositories:
I’ll selectboard-kickstart-forge, chooseCascadeProjectsas the destination, and open it:
We’ll trust all the files inside theCascadeProjectsfolder:

Chapter 22 151
On the left-hand side, you’ll now see the code that we have:
Now, Windsurf doesn’t yet know anything about this codebase. So it doesn’t make much sense
to start making changes right away.
We need to add the specifications and the to-do list. Create adocsfolder, and inside it, add two
new files:
• requirements.md
• todo.md
We created the specifications and the to-do list when creating the Kanban board back in the
Lovable  section.  If  you  didn’t  go  through  the  Lovable  section,  no  worries.  Contactsupport@i-
ducate.comto get the specifications and to-do list files.

152 Analyzing an Existing Code Base
To get the specifications, we’ll go toSettingsin Lovable and copy over the necessary information:
And paste it intorequirements.md:

Chapter 22 153
Take note only to copy till theEnd of specificationsection (first box below):
Copy the rest of the to-do list portion (second box above) intotodo.md:
Having those set up, it’s time for the fun part. We will prompt Windsurf to analyze this codebase
to better understand what’s been built and what still needs to be done.

154 Analyzing an Existing Code Base
Here’s the instruction:
Analyze the current codebase. Identify which features have already been
implemented according to @todo.md and which are still pending. Update @
todo.md accordingly by marking completed tasks as done. @requirements.md"
Note the referencing of files@todo.mdand@requirements.mdso that Windsurf knows exactly
where to look.
Send the prompt and Windsurf should analyze our code base and then update the to-do file.
We can review what’s been updated:
Intodo.md, anything in red has been removed, and anything in green has been added or changed.

Chapter 22 155
You’ll notice that several tasks now have anxnext to them — meaning they’re marked as done.
For example, the setup seems to be completed. Basic CRUD features and column management
also appears to have been done:
So quite a few things are already in place. It’s not perfect, but this is a solid starting point. Now
Windsurf  understands  the  contextof  the  project,  and  we  can  start  working  on  the  remaining
features.

23
Adding Features
We’re going to put Windsurf to the test by working on some features that haven’t yet been im-
plemented in this project. But first, let’s start theproject and ask Windsurf to simplyrun the
application:
When we do that, it figures out that the dependencies aren’t installed — so we’ll need to install
them first. Windsurf will then guide us to re-run our dev server:

158 Adding Features
We can open our app via the provided URL, e.g.localhost:8080in a browser:
The app looks good. You can try adding, rearranging, deleting, modifying tasks to see that the
app is working properly.

Chapter 23 159
Now let’s take a look at the to-do list and figure out what still needs to be done. For example, under
Future Enhancementsthere’s due dates for cards and column reordering not implemented yet:
So we can say,Implement the future enchancements in @todo.md:
We referencetodo.mdfor more accurate results. Windsurf goes ahead and implements the feature:

160 Adding Features
WhenWindsurf is done, let’s check the app to confirm. In my case, both features are still not
working.
So I’ll first address the re-ordering of columns:When i reorder the columns, the columns
snap back into their original position. But after refreshing the page, the columns
are reordered.
I want the columns reordered even without refreshing the page.

Chapter 23 161
We let Windsurf fix the issue:
And if we reorder the columns now, they get ordered without having to refresh the page:
So we can confirmthat the columns reordering functionality is indeed working.
I will let you give your own prompts to Windsurf to rectify any outstanding issues you face, since
you might have a different one from mine. But you get the idea!

24
Windsurf Rules
The agent from Windsurf Cascade is already quite powerful, but to better adapt it to our needs and
preferences, you can specify some rules. This is a more advanced feature and it’s not for everyone.
But if you notice that the AI is doing something you don’t like repeatedly and you want to change
that behavior permanently (instead of constantly correcting it in the chat), then it makes sense
to add some rules.
You can find this feature inWindsurf - Settingsat the bottom:
UnderCustomizations, selectManage:

164 Windsurf Rules
And you’ll see theRulessection:
You  can  haveGlobalrules  andWorkspacerules.  Global  rules  apply  to  all  your  projects,  while
workspace rules apply only to the current project. It’s up to you which one you prefer.
If you click onGlobalyou’ll see examples of what kind of rules you can create:
Because each project tends to have its own specific needs, I preferWorkspacerules overGlobal
rules. And if I ever needto reuse them, I can just copy the configuration from one project to another.
So let’s create a new workspace rule. Click the+ Workspace:

Chapter 24 165
Give the rule a name — for example,comments.
This rule will focus on writing comments for the code that’s generated.
There are a few important settings here. First,Activation Mode. If it’s set toManual, we’ll need
to activate it manually using a shortcut:
This shortcut will be available directly inside the editor.
If you want something that’s always on, selectAlways OninActivation Mode, and in the content,
specify your rule e.g.all functions must have a one-sentence describing the function's
purpose:
Once done, simply save it and the rule will be stored in the.windsurf/rulesdirectory. This rule
will now be part of the project:

166 Windsurf Rules
You can have multiple rule files by clicking again onWorkspaceand adding more rules. That’s
how you create and manage rules.
Now, in Cascade, you can also reference these rules directly within it for e.g.:
Windsurf provides a helpful resource called the Windsurf Rules Directory, which includes rule
examples for different use cases — such as frontend development or general programming guide-
lines which you can take inspiration from to craft your own rules:
(windsurf.com/editor/directory)
For instance, you might find a rule like the below to help you understand the generated code better:

Chapter 24 167
However, don’t just copy every rule you see into your project. Understand what each rule does.
The more rules and text you add, the harder it becomes for the model to follow them effectively.
Too many unnecessary or unclear rules can actually reduce performance. So focus on using rules
to correct specific behaviors you don’t like — that’s where they’re most useful.
Finally,  one  more  thing  worth  mentioning:  underActivation  Mode, you can also findModel
Decision:
This determines whether a specific model should apply a particular rule. You can define condi-
tions, such as:
“If you are model X, apply this rule; if not, ignore it.”
That’s just anexample, but it shows how flexible the system can be.
In short, rules are a powerful but advanced feature. Only add the ones you truly need. Rules are
simply files integrated into the IDE, making them convenient to manage.

25
Windsurf Workflows
In this chapter, wewill look at an interesting functionality in Windsurf, workflows. You can find
workflows in the same settings asRulesi.e.  go  toWindsurf  Settings,  underCustomizations,
clickManage:

170 Windsurf Workflows
Select theWorkflowstab:
You can think of workflows like a bookmark for a set of actions you want to take. Whenever you
find yourself writing the same prompt and going over a series of steps over and over, you should
consider creating a workflow instead.
Let’s look at a simple example. To create a workflow, click on+ Workflowand I’m going to name
the workflownew-change:
new-change.mdwill be created in theworkflowsdirectory:
Provide adescription and also the content innew-change.md:

Chapter 25 171
In the above workflow, I want to use it when I make new changes. For each new change, we want
to implement the changes requested and also commit those changes to GitHub. Save these changes.
To call this workflow, we can do it directly from the prompt with a forward slash/, and you will
seenew-changeappearing and select it:
Let’s  now  try  implementing  a  small  change.  Let’s  change  the  title  fromMy  Kanban  Boardto
Greg’s Board:
We prompt:

172 Windsurf Workflows
It first updates the header text and proceeds to commit and push the change to GitHub:
The header has been updated:

Chapter 25 173
The workflow has completed:
The change has been committed and pushed to GitHub. We can take a look at GitHub and see
the code changes:

174 Windsurf Workflows
With thisworkflow, we now have a quick way of implementing changes, committing them and
pushing them. This is the main idea of workflows. So when you find yourself going through a lot
of repeating steps, you can turn it into a workflow.

26
Deploying Your Application
with Windsurf
Windsurf has made deploying web applications easy. It’s pretty much one prompt and one click.
You can just prompt,deploy this app.
Windsurf haspartnered up with Netlify to make deployment as seamless as possible. Behind the
scenes, Windsurf analyzes all the project files, creates a production build, and then deploys to Netlify:

176 Deploying Your Application with Windsurf
It creates a Netlify configuration file and we’re going to see theDeploybutton:
Click onDeploy. During the deployment, Windsurf might prompt you to log in into Netlify. The
deployment process might also throw up some errors, for e.g.:
But we can letWindsurf take care of it. After some back and forth, we’re going to get a deployed link:

Chapter 26 177
So the deployment has been completed. And our application works fine:
We can also go to the Netlify dashboard and see the deployment details of our app, e.g. build logs
(in case there were some errors):

178 Deploying Your Application with Windsurf
Other project info is described on the Netlify dashboard, e.g. Project ID.
I hope you seehow easy it is to deploy using the Netlify integration in Windsurf. You can of course
use any other provider you want and it will still be a good process.
Pricing
Windsurfprovides a free plan where apart from the two-week Pro trial, you will also get 25 credits
per month:
For some models, it can cost you a bit more than one credit per prompt, and for some models it
can cost you less. For e.g., we can see recommended options in Cascade:

Chapter 26 179
GPT-5 from OpenAI gives you two prompts per credit. If you use only this model in the free account,
you essentially have 50 prompts per month. With OpenAI acquiring Windsurf, we will probably
see even more preferential treatment for OpenAI’s models.
If you need more, go to the Pro plan which has 500 prompt credits per month, or the equivalent
of 1,000 prompt credits if you use the OpenAI GPT-5 model. Apart from this, you can also buy
credits if you run out of them without having to upgrade your plan.
We’re not going to go into the plans for Team and Enterprise. But the main idea is that if you’re
running a team or if a larger company, there are other things that you should consider.
Conclusion
This  chapter  gave  you  a  hands-on  introduction  to  Windsurf,  how  to  use  it  and  what  its  core
features are.
Windsurf  stands  out  for  its  ability  to  work  effectively  with  existing  codebases,  an  area  where
many AI tools still fall short. We explored key functionalities including AI-assisted analysis for
existing projects, feature implementation, rule-based customization, automating workflows and
deployments via Netlify.
The  recent  acquisition  by  OpenAI  adds  even  more  promise  to  Windsurf ’s  future,  especially  in
terms of deeper integration with top-tier models and smarter capabilities.
Final Words
AI assisted coding is a fast-changing industry right now. There’s always more to learn, and for me
personally, that’s exciting. Whether you’re an experienced developer, or just starting out, keep
growing. This book is just the beginning.
Now, think about a problem you face in your day-to-day life—some task you might be able to
solve through an app—and try building it with an AI assisted tool.
Hopefully, you have enjoyed this book and would like to learn more from me. I would love to get
your feedback, learning what you liked and didn’t for us to improve.
If you didn’t like the book, or if you feel that I should have covered certain additional topics, please
email us to let us know. This book can only get better thanks to readers like you.
If you like the book, I would appreciate if you could leave us an Amazon review too. Thank you
and all the best for your learning journey!

Index
A D
AI agent domain options  137
functionalities  14
E
AI behavior
rules, for controlling  59, 60
end-to-end (E2E) tests  53
rules, testing  62, 63
external hosting options  137
AI coding tools  4-8
AI Pane icon  13 F
application deployment
functionality
performing  127-129
adding  115-120
security issues, resolving  130-134
apps, with Lovable project
G
building  85-93
Git  12, 41
pricing  86
housekeeping  57
Supabase  87
installing  10
C GitHub integration
source code extraction, via  121-125
car dodging game example
GitHub repository
changes, accepting  16-19
integration  71-75
changes, reviewing  16-19
code refactoring  65, 66
I
component tests  53
Integrated Development Environment
Cursor  2
(IDE)  8
asking, for deployment guidance  78
integrations
car dodging game example  2, 13, 14
additional integrations  138
installing  11
Math Practice application, building  81-84
Math Practice application, deploying  81-84
model, selecting  20
pricing plans  12

182 Index
J R
JavaScript randomness  20
back end  25
front end  25 S
software development lifecycle (SDLC)  23
L
deployment  24
LLMs design  24
non-deterministic  20 implementation  24
iteration  24
Lovable project
maintenance  24
exporting  87, 88
planning  23
history  94
testing  24
M software specification document
creating  95-100
Math Practice application  27
instructions and guidelines, adding  101-105
agent, asking to discard changes  45, 46
source code extraction
changes, rejecting in cursor  44, 45
via GitHub integration  121-125
context, providing by referencing
resources  69, 70 Supabase  87, 107
first feature  34 data, storing in database  110-114
iterating, with features  47-52 integration  108, 109
project, starting  35-39
specification  28-32 T
to-do list, creating  33, 34
tech stack
back end  25
N
database  25
Node.js  12 front end  25
installing  10 tools and services  25
temperature setting  20
P
Terminal  9
PowerShell  9 tests
project component tests  53
building  79, 80 debugging  56
end-to-end (E2E) tests  53
Python  26
running  56
unit tests  53

Index 183
U
unit tests  53
user interface (UI)  24
V
Vercel account
setting up  81
version control  41
vibe coding  1
W
Windsurf  2, 141
application, deploying  175-178
existing code base, analyzing  147-155
features, adding  157-161
pricing  178
project, creating  143-146
rules  163-167
setting up  142
workflows  169-174
working version
rolling back to  43
