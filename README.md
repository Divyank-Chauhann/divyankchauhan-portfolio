# Divyank's Digital Canvas

Build an Award-Worthy Interactive UI/UX Designer Portfolio

Create a premium, highly interactive personal portfolio website for Divyank Chauhan, a fresher UI/UX Designer and B.Tech Computer Science graduate.

Use https://creatiie.framer.website/ as the primary visual and interaction reference.

The goal is NOT to create a generic portfolio.

The goal is to reproduce the same level of visual sophistication, editorial composition, spacing, typography, grid system, cursor interaction, motion, hover behavior, and overall browsing experience of the reference website, while using my own identity, portfolio information, projects, and assets.

Do not copy the reference site's personal content, project names, testimonials, images, or branding.

1. CORE DESIGN DIRECTION

The website should feel like:

A premium creative designer portfolio

Editorial

Minimal

Experimental

Typography-driven

High-end digital design studio

Interactive

Smooth

Confident

Sophisticated

Slightly playful

Motion-rich without feeling excessive

Avoid the appearance of:

A generic developer portfolio

A standard Bootstrap website

A SaaS landing page

A template

Excessive rounded cards

Excessive gradients

Excessive shadows

Generic glassmorphism

Excessive colorful UI

Large conventional hero illustrations

The visual experience should be driven primarily by:

Typography

Grid

Whitespace

Large imagery

Motion

Interactive cursor

Micro-interactions

2. TECHNOLOGY

Build this as a production-quality modern web application.

Preferred stack:

React

TypeScript

Tailwind CSS

Framer Motion for animation

Lucide icons where icons are required

Use reusable components and clean architecture.

Do NOT put the entire website into one giant component.

Create reusable components for:

Navigation

EyeCursor

Marquee

Hero

ProjectCard

ProjectGrid

About

Stats

Services

Testimonials

FAQ

CTA

Footer

Keep the code maintainable and easy to edit.

3. GLOBAL VISUAL SYSTEM

Background

Use a very clean light background inspired by the reference.

Primary background:

Warm/off-white or very light neutral

Not pure clinical white

Primary text:

Near-black

Secondary text:

Muted dark gray

Borders:

Extremely thin

Subtle gray/black

Approximately 1px

Do not use heavy shadows.

Do not make every element rounded.

Use square or slightly rounded visual elements where appropriate.

4. GRID SYSTEM

The visible grid is an important part of the design.

Create a consistent responsive grid across the entire website.

Desktop:

12-column grid

Large horizontal margins

Thin vertical grid lines

Thin horizontal section separators

Content aligned consistently to the grid

Tablet:

8-column grid

Mobile:

4-column grid

The grid lines should be subtly visible.

They should feel like part of the design system rather than a decorative overlay.

Some sections should allow content to visually interact with or cross the grid.

Use:

vertical rules

horizontal rules

section dividers

project metadata alignment

footer columns

navigation alignment

The grid should remain visually consistent from hero through footer.

5. TYPOGRAPHY

Typography is one of the most important aspects of the entire website.

Use a premium modern grotesk/sans-serif display font.

Prefer a high-quality font such as:

Inter

Geist

Neue Montreal-like alternative

Space Grotesk if necessary

Use one primary family consistently unless a secondary typeface significantly improves the editorial appearance.

Typography hierarchy:

Hero

Extremely large.

Desktop hero heading should potentially reach:

110px–180px depending on viewport

Use:

tight line-height

slightly negative letter spacing

strong weight

deliberate line breaks

Mobile:

approximately 52px–80px depending on viewport

Do not simply shrink the desktop typography.

Recompose the text for mobile.

6. CUSTOM EYE CURSOR — VERY IMPORTANT

Create a custom interactive eye cursor inspired by the reference website.

This is NOT optional.

Do not replace it with:

a circle cursor

a dot cursor

a normal pointer

a generic magnetic cursor

The cursor must visually resemble an eye.

Eye structure

Create an eye consisting of:

Outer eye shape

White/light eyeball

Iris

Dark pupil

Optional subtle eyelid/outline

The eye should follow the mouse position.

The pupil/iris should dynamically look toward the mouse pointer.

The cursor itself should have smooth interpolation.

Do not make the eye snap directly to the mouse.

Use spring/lerp-style movement.

The eye should feel slightly alive.

Cursor movement

The entire eye should smoothly follow the pointer.

The pupil should independently calculate the pointer direction and move inside the eye.

The pupil must remain constrained within the eye.

Use smooth easing.

The movement should feel:

fluid

responsive

playful

premium

Cursor hover states

Create different cursor behavior for:

Normal page

Normal eye.

Navigation link

Eye subtly changes scale or expression.

Project/image

Eye becomes more prominent.

Potentially show:

VIEW

inside/near the cursor if it fits the design.

CTA

Eye changes state and provides stronger feedback.

Draggable/marquee content

Eye can visually react.

Do not make these interactions cheesy.

Cursor performance

Use requestAnimationFrame or an efficient animation system.

Do not cause excessive React re-renders on every mouse movement.

The cursor should run smoothly at 60fps.

Disable the custom eye cursor on:

touch devices

tablets where appropriate

mobile

Restore the normal pointer on those devices.

7. NAVIGATION

Create a minimal editorial navigation.

Desktop layout:

Left:

DIVYANK CHAUHAN

Center/right:

Work

About

Services

Contact

Also include an availability indicator:

● AVAILABLE FOR WORK

The availability indicator should subtly animate.

Navigation should remain clean and lightweight.

Do not use a huge traditional navbar.

On desktop:

Keep it minimal

Plenty of whitespace

Thin structural borders

On mobile:

Create a clean menu button.

Opening the mobile navigation should have a smooth full-screen animation.

8. HERO SECTION

Create a visually dominant hero.

Use oversized editorial typography.

Hero copy:

I DESIGN DIGITAL EXPERIENCES
PEOPLE REMEMBER.

or a similarly strong statement that clearly positions me as a UI/UX designer.

Include a small supporting statement:

UI/UX Designer · Product Designer · Creative Problem Solver

Add a small availability/status element.

The hero should occupy a large portion of the first viewport.

Do not immediately fill the hero with multiple cards.

Use whitespace aggressively.

9. HERO MOTION

On page load:

Navigation enters subtly

Hero typography reveals progressively

Lines can slide/fade into position

Supporting text appears afterward

Small elements animate with slight delays

Animation should be smooth and restrained.

Avoid:

bouncing

spinning

excessive scaling

flashy effects

Use premium easing.

10. MARQUEE SECTION

Create an infinite horizontal scrolling marquee.

Example content:

UI/UX DESIGN — PRODUCT DESIGN — PROTOTYPING — DESIGN SYSTEMS — INTERACTION DESIGN

The marquee should:

Move continuously

Loop seamlessly

Never visibly jump

Have duplicated content to create an infinite loop

Work at different responsive widths

Use large typography

Be separated by simple symbols/lines

Create at least two marquee moments in the website.

One can move left-to-right.

Another can move right-to-left.

Allow slight speed variation.

11. INTRODUCTION SECTION

Create an editorial statement section.

Large heading:

NOT JUST INTERFACES.
I DESIGN EXPERIENCES.

Add a concise paragraph describing me as a UI/UX designer who combines:

user research

visual design

interaction design

prototyping

frontend understanding

Keep the paragraph relatively small compared with the heading.

The heading should dominate visually.

12. SELECTED WORK

Create a major portfolio section.

Heading:

SELECTED WORK

Subheading:

Projects built around people, problems and meaningful experiences.

Use large project presentations.

Do NOT create generic tiny cards.

Each project should feel like an editorial portfolio piece.

13. PROJECT DATA

Initially create placeholder projects that can easily be replaced.

Use projects such as:

Project 01

Management Dashboard

Category:

UI/UX Design

Tools:

Figma · UX Research · Prototyping

Year:

2026

Description:

A management platform designed to simplify operations, clients, inventory, assets and service workflows.

Project 02

Your Choice Plant

Category:

E-commerce UI/UX

Tools:

Figma · UI Design · Prototyping

Year:

2026

Project 03

Cars Marketplace

Category:

Web Design

Tools:

Figma · HTML · CSS · JavaScript

Year:

2026

Project 04

Psychometric Test Platform

Category:

Product / UX Design

Tools:

Figma · UX Research · Interaction Design

Year:

2026

Create the architecture so I can replace project names, images, descriptions and links easily.

14. PROJECT CARD DESIGN

Each project presentation should contain:

Large image

Project title

Category

Year

Tools

Short description

View project/case study indicator

Use a strong image-to-text hierarchy.

Images should be large.

Avoid excessive card padding.

Avoid heavy borders around every card.

Use the global grid and separators.

15. PROJECT HOVER EFFECT

When hovering over a project:

Image subtly scales

Image position can shift slightly

Typography transitions smoothly

Cursor reacts

Project metadata can move subtly

A visual “View Project” interaction appears

Use smooth easing.

Do not make the entire card dramatically rotate.

Keep it premium.

16. IMAGE REVEAL

When project images enter the viewport:

Use a sophisticated reveal.

Possible effect:

Image container starts clipped

Image reveals vertically

Image itself moves slightly

Opacity increases subtly

The reveal should feel similar to a premium agency portfolio.

17. BIG TYPOGRAPHIC STATEMENT

Create another large editorial section.

Example:

I MAKE DIGITAL
EXPERIENCES
PEOPLE REMEMBER.

Use different text weights/case treatment for emphasis.

Some words can be uppercase while supporting words remain lowercase.

The exact typography should feel designed rather than mechanically uniform.

18. ABOUT SECTION

Create:

ABOUT ME

Large statement:

DESIGNER WITH A DEVELOPER'S UNDERSTANDING.

Explain that I am a B.Tech Computer Science graduate who works across:

UI design

UX design

product design

interaction design

prototyping

frontend fundamentals

Keep the copy concise.

Use editorial composition instead of a conventional profile card.

19. STATS SECTION

Create a large statistics section inspired by the reference.

Use realistic editable values.

For example:

04+
Selected Projects

05+
Core Design Skills

10+
Digital Experiences

100%
Curiosity

Do not invent professional experience or client numbers.

The statistics should be easily editable.

Make numbers extremely large.

Animate numbers subtly when entering the viewport.

20. SKILLS

Create a visual skills section.

Heading:

WHAT I WORK WITH

Include:

UI/UX Design

User Research

Wireframing

Prototyping

Design Systems

Interaction Design

Figma

HTML

CSS

JavaScript

React basics

Present these as typography/list-based content rather than generic skill progress bars.

DO NOT use:

percentage bars

star ratings

circular skill meters

21. SERVICES

Create a major editorial section.

Heading:

WHERE I CAN HELP

Services:

01 — UI/UX DESIGN

02 — PRODUCT DESIGN

03 — WEBSITE DESIGN

04 — DESIGN SYSTEMS

05 — PROTOTYPING

06 — INTERACTION DESIGN

Each service should be a large row.

On hover:

row subtly changes

text shifts

divider animates

eye cursor reacts

Keep everything minimal.

22. SERVICES HOVER

When hovering over a service row:

Background can subtly change

Typography can shift slightly

Arrow/icon can move

Eye cursor reacts

Divider line animates

Use smooth 300–600ms transitions.

23. TESTIMONIALS

Create a testimonials section only as an editable component.

Heading:

WHAT PEOPLE SAY

Do NOT use fake testimonials presented as real clients.

Use clearly marked placeholder content until actual testimonials are supplied.

Structure:

Person

Role

Company

Quote

Use minimal typography.

24. FAQ

Create a clean accordion FAQ.

Heading:

QUESTIONS, ANSWERED.

Questions:

What kind of design work do you do?

What tools do you use?

Can you design complete websites?

Do you create prototypes?

Can you work with developers?

How can I contact you?

Accordion behavior:

Smooth height animation

Plus/minus indicator

Only necessary items open

Strong typography

Thin dividers

25. FINAL CTA

Create a dramatic final section.

Large heading:

LET'S BUILD
SOMETHING
MEMORABLE.

Supporting text:

Have a project, idea, or problem worth solving? Let's talk.

CTA:

LET'S CHAT →

The CTA should have a strong hover interaction.

Use large typography.

This section should feel like the culmination of the entire website.

26. CONTACT

Create a minimal contact area.

Email:

YOUR EMAIL HERE

Social links:

LinkedIn

GitHub

Behance

Dribbble

Use placeholders where actual links have not been provided.

Make email clickable.

27. FOOTER

Footer should continue the same editorial design language.

Include:

DIVYANK CHAUHAN

UI/UX DESIGNER

Navigation:

Work

About

Services

Contact

Social:

LinkedIn

GitHub

Behance

Add copyright.

Use grid lines.

Keep the footer visually connected to the final CTA.

28. SCROLL ANIMATIONS

Every major section should have subtle scroll-triggered motion.

Use:

opacity

translateY

clip-path reveals

scale

image movement

staggered text

Animation timing should generally be around:

300ms–1000ms

depending on the animation.

Use proper viewport triggers.

Do not animate everything simultaneously.

Animation hierarchy matters.

29. TEXT REVEAL

Large headings should have premium text reveals.

Possible implementation:

split heading into words or lines

mask overflow

translate text from below

reveal on viewport entry

Avoid overly complicated letter-by-letter animation unless it genuinely improves the experience.

30. PAGE LOAD

Initial page loading should feel polished.

Sequence:

Minimal loading state

Navigation appears

Hero typography reveals

Supporting elements appear

Main content becomes interactive

Do not create a long loading screen.

Keep perceived loading fast.

31. SMOOTH SCROLL

Implement smooth scrolling where appropriate.

Scrolling should feel premium but should NOT interfere with:

accessibility

keyboard navigation

mobile scrolling

browser behavior

Do not hijack scrolling unnecessarily.

32. CURSOR + IMAGE INTERACTION

The eye cursor should be one of the signature features.

When the pointer enters a project image:

Eye reacts

Pupil tracks pointer

Eye may enlarge slightly

“VIEW” state can appear

When pointer leaves:

return smoothly to normal state

The cursor must always remain visually attached to the user's pointer.

33. MICRO-INTERACTIONS

Include subtle interactions for:

navigation

buttons

project cards

service rows

FAQ

social links

CTA

marquee

cursor

Use consistent easing throughout the site.

Avoid random animation styles.

34. BUTTON DESIGN

Do not use generic rounded SaaS buttons.

Prefer:

typography-based CTA

arrow indicators

underline transitions

subtle border treatment

Example:

LET'S CHAT ↗

On hover:

arrow moves

underline expands

text shifts subtly

35. RESPONSIVE DESIGN

The website must be fully responsive.

Desktop

Use:

12-column grid

huge typography

large imagery

generous whitespace

eye cursor

complex hover interactions

Tablet

Reduce:

typography

margins

grid complexity

Maintain the overall design language.

Mobile

Use:

4-column grid

one-column project layout

smaller hero

simplified navigation

touch-friendly buttons

reduced animation

no custom cursor

Do not simply scale the desktop layout down.

Recompose sections intelligently.

36. ACCESSIBILITY

Despite the experimental visual design, maintain good accessibility.

Include:

semantic HTML

proper headings

alt text

keyboard navigation

visible focus states

accessible buttons

accessible FAQ

sufficient text contrast

prefers-reduced-motion support

If the user has:

prefers-reduced-motion: reduce

dramatically reduce animations.

37. PERFORMANCE

The visual effects must not destroy performance.

Optimize:

images

animation rendering

cursor updates

scroll listeners

large assets

Use:

transform

opacity

requestAnimationFrame

GPU-friendly properties

Avoid constantly triggering layout calculations.

Lazy-load project images below the fold.

38. IMPORTANT: DO NOT MAKE IT LOOK LIKE A TEMPLATE

This is extremely important.

Do NOT produce:

floating glass cards

gradient blobs

generic hero illustration

excessive rounded rectangles

dashboard-style portfolio

skill progress bars

generic blue/purple AI aesthetic

excessive shadows

generic navbar

generic three-column cards

The site should look like an intentional creative portfolio designed by a UI/UX designer.

39. VISUAL PRIORITY

When deciding between functionality and visual fidelity, prioritize the following order:

Typography

Grid

Spacing

Project imagery

Eye cursor

Motion

Hover interactions

Content

Decorative details

Do not sacrifice the grid, typography, or interaction quality for unnecessary decoration.

40. CODE QUALITY

Use reusable components.

Suggested structure:

src/
components/
Navigation.tsx
EyeCursor.tsx
Marquee.tsx
Hero.tsx
SectionHeading.tsx
ProjectCard.tsx
Projects.tsx
About.tsx
Stats.tsx
Skills.tsx
Services.tsx
Testimonials.tsx
FAQ.tsx
CTA.tsx
Footer.tsx

Keep project information in structured data so it can be changed without rewriting components.

41. FINAL QUALITY BAR

Before considering the website complete, verify:

The eye cursor works smoothly.

Pupil follows pointer direction.

Cursor has hover states.

Grid lines are consistently aligned.

Typography feels editorial.

Hero feels visually dominant.

Marquee loops seamlessly.

Project images have strong hover effects.

Scroll animations are smooth.

Service rows react to hover.

FAQ animates smoothly.

CTA feels substantial.

Mobile layout is intentionally designed.

Custom cursor is disabled on touch devices.

Reduced-motion preference works.

No animation causes noticeable lag.

No horizontal overflow exists.

Images are optimized.

All interactive elements are keyboard accessible.

MOST IMPORTANT INSTRUCTION

Do not interpret this as a request for a generic designer portfolio.

Use creatiie.framer.website as the visual reference for the overall design language and interaction quality.

Recreate the feel and interaction principles:

oversized editorial typography

visible grid

thin dividers

minimal neutral palette

strong whitespace

large project imagery

infinite marquee

smooth scroll reveals

sophisticated hover interactions

interactive eye cursor

premium micro-interactions

dramatic final CTA

But make the actual website identity:

DIVYANK CHAUHAN — UI/UX DESIGNER

Use my own portfolio content and editable placeholders where information is missing.

The finished result should feel like a premium award-style interactive design portfolio, not a normal template portfolio.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://divyankchauhan-portfolio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0e8bb4e5-2057-4e5e-a7f1-4c982a7f3952).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
