Haan, problem sirf CSS ki nahi hai. Agar **navbar mobile me overlap kar raha hai**, **menu ek dusre ke upar aa raha hai**, **elements float kar rahe hain**, to iska matlab website ka **responsive architecture hi galat hai**.

Antigravity ko sirf "make responsive" bolne se kaam nahi hoga. Usko clearly batana padega ki **poori website ko responsive architecture ke hisaab se rebuild karo**, patch mat lagao.

Is prompt ko use karo:

---

# THE SCHOLAR EDGE - RESPONSIVENESS & UI REBUILD (HIGH PRIORITY)

You are a Senior Frontend Engineer, UI/UX Designer and Responsive Web Expert.

Do NOT simply edit the existing CSS.

I want you to completely rebuild the responsive structure of the entire website.

Current website has multiple responsive issues.

## Existing Problems

* Navbar items overlap each other.
* Menu text comes on top of each other.
* Mobile navbar is broken.
* Tablet layout breaks.
* Sections overflow horizontally.
* Cards overflow outside screen.
* Images stretch.
* Buttons float randomly.
* Content alignment is inconsistent.
* Different sections have different spacing.
* Website is not mobile friendly.
* Horizontal scrolling appears.
* Some text goes outside containers.
* Footer alignment breaks.
* Hero section breaks on small screens.
* Components have inconsistent widths.
* Overall responsiveness is poor.

I DO NOT WANT CSS PATCHES.

I WANT A COMPLETE RESPONSIVE REBUILD.

---

## RESPONSIVE FIRST APPROACH

Rebuild the complete UI using

Mobile First Design.

Start from

320px

then

375px

390px

414px

480px

576px

640px

768px

820px

992px

1024px

1200px

1440px

1600px

1920px

The website must look perfect on every screen.

---

# NAVBAR (MOST IMPORTANT)

The navbar MUST NEVER BREAK.

Requirements:

Desktop

* Logo left
* Menu right
* Equal spacing
* No overlap
* Sticky navbar
* Blur background while scrolling
* Smooth shadow on scroll

Tablet

If menu cannot fit

Automatically convert into hamburger.

Never wrap menu into two lines.

Never overlap.

Never compress.

Mobile

Hamburger only.

Clicking hamburger opens

Full Screen Navigation Drawer

NOT dropdown.

Drawer slides from right.

Background becomes blurred.

Menu items vertically aligned.

Each menu item has large spacing.

Large touch targets.

Animated close icon.

Auto close after clicking menu.

Current page highlighted.

Smooth animations.

No floating text.

No overlap.

No hidden menu.

No clipping.

No scrolling inside navbar.

---

# LAYOUT SYSTEM

Rebuild entire layout using

CSS Grid

*

Flexbox

No absolute positioning unless absolutely necessary.

No fixed widths.

Use

max-width

min-width

clamp()

flex-wrap

grid-template

gap

container queries where needed.

Everything should resize naturally.

---

# SECTION RESPONSIVENESS

Every section should automatically adapt.

Hero

About

Services

Portfolio

Courses

Online Classes

Testimonials

Blog

Contact

Footer

Everything.

Desktop

3-4 columns.

Tablet

2 columns.

Mobile

1 column.

No exceptions.

---

# IMAGES

Images should

Never stretch.

Never overflow.

Never become blurry.

Always maintain aspect ratio.

Lazy loading.

Responsive image sizing.

Rounded corners.

Professional shadows.

---

# TYPOGRAPHY

Use responsive typography.

No fixed font sizes.

Use clamp()

Example

Heading

clamp(2rem,5vw,4rem)

Body

clamp(1rem,2vw,1.2rem)

Paragraph width maximum 70 characters.

Perfect readability.

---

# SPACING

Create one spacing system.

Do NOT manually use random padding.

Use consistent spacing variables.

Example

XS

S

M

L

XL

XXL

Entire website must follow same spacing scale.

---

# BUTTONS

Every button

Same height.

Same radius.

Responsive width.

Proper hover.

Ripple animation.

Focus animation.

Touch friendly.

Minimum height 48px.

---

# CARDS

Cards should never overflow.

Equal height.

Responsive.

Hover animation.

Glass effect.

Soft shadow.

Perfect spacing.

---

# FORMS

Responsive forms.

One column on mobile.

Two columns desktop.

Validation.

Modern inputs.

Floating labels.

Proper spacing.

---

# FOOTER

Responsive footer.

Desktop

4 columns.

Tablet

2 columns.

Mobile

1 column.

Everything centered.

No overlap.

No text clipping.

---

# PERFORMANCE

Optimize CSS.

Remove duplicate CSS.

Remove unused CSS.

Remove layout shifts.

Avoid CLS.

Avoid unnecessary re-render.

Lazy load images.

Optimize animations.

Use GPU accelerated animations.

---

# ACCESSIBILITY

WCAG AA.

Keyboard navigation.

Visible focus.

Proper contrast.

Large tap targets.

ARIA labels.

Semantic HTML.

---

# TEST RESPONSIVENESS

The website MUST be tested on

320px

375px

390px

414px

480px

576px

768px

820px

992px

1024px

1200px

1366px

1440px

1600px

1920px

No horizontal scroll.

No overlap.

No clipping.

No floating elements.

No broken layout.

No broken navbar.

No broken footer.

No image overflow.

No text overflow.

No content cut off.

Everything pixel-perfect.

---

# FINAL REQUIREMENT

Do not stop after fixing the navbar.

Inspect every page and every component.

If you find ANY responsive issue anywhere, fix it automatically.

Treat this as a production-ready redesign, not a bug fix.

The final website should look like a premium modern educational platform comparable to Coursera, Udemy, Harvard Online, or Stanford Online, with flawless responsiveness on every device.
