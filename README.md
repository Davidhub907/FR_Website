# Frontier Restoration Website

Website for **Frontier Restoration LLC**, serving Fairbanks and Interior Alaska.

Built with Next.js, React, Tailwind CSS, and reusable components for the homepage, service pages, testimonials, and restoration results.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Before deploying:

```bash
npm run lint
npm run build
```

## Project Structure

```text
app/
├── page.js                     Homepage
├── layout.js                   Shared layout for every page
├── globals.css                 Global styles
├── water-damage/page.js
├── fire-damage/page.js
├── mold-remediation/page.js
├── sewer-backup/page.js
├── content-restoration/page.js
└── commercial/page.js

components/
├── home/                       Homepage sections
├── layout/                     Header, navigation, footer, CTAs, testimonials
├── results/                    Before-and-after result components
└── service-page/               Reusable service-page sections

config/
└── site.js                     Shared business information

data/
├── results.js                  Restoration project content
└── testimonials.js             Planned testimonial data file

public/
└── images/                     Website images
```

Do not edit `.next` or `node_modules`.

## Where to Make Changes

| Change                                            | File                                     |
| ------------------------------------------------- | ---------------------------------------- |
| Phone, email, address, service area, social links | `config/site.js`                         |
| Homepage sections and their order                 | `app/page.js`                            |
| Homepage hero                                     | `components/home/Hero-Home.js`           |
| Homepage service cards                            | `components/home/ServiceSection.js`      |
| Homepage FAQs                                     | `components/home/CommonQuestions.js`     |
| Insurance assistance section                      | `components/home/InsuranceAssistance.js` |
| Header                                            | `components/layout/Header.js`            |
| Navigation                                        | `components/layout/NavigationBar.js`     |
| Footer                                            | `components/layout/Footer.js`            |
| Emergency CTA                                     | `components/layout/EmergencyCTA.js`      |
| Why Choose Us                                     | `components/layout/WhyChooseUs.js`       |
| Testimonials                                      | `components/layout/Testimonials.js`      |
| Restoration results                               | `data/results.js`                        |
| Global colors and styles                          | `app/globals.css`                        |
| Page title and SEO description                    | `metadata` inside the page's `page.js`   |

## Editing Content

### Business information

Use `config/site.js` for shared company details. Update both the visible and clickable versions of phone numbers and email addresses.

```js
phone: {
  display: "(907) 987-2916",
  href: "tel:+19079872916",
}
```

### Homepage

`app/page.js` controls which homepage sections appear and their order. The content inside each section is stored in the matching file under `components/home/` or `components/layout/`.

### Service pages

Each service has its own `page.js` file under `app/`. These files contain the service-specific text, images, process steps, FAQs, warning signs, and other page content.

Edit files in `components/service-page/` only when changing the shared layout or design used by multiple service pages.

### Testimonials

Testimonials are currently inside `components/layout/Testimonials.js`. The content will be moved to `data/testimonials.js` so names, reviews, locations, and services can be edited separately from the layout.

### Restoration results

Project titles, descriptions, image paths, alt text, and links are stored in `data/results.js`.

The visual layout is controlled by files in `components/results/`.

## Images

Store website images in:

```text
public/images/
```

Reference them from the site with paths beginning with `/images/`:

```js
imageSrc = "/images/services/water-damage1.webp";
```

Replacing an image with a new file using the same filename usually requires no code changes.

## Shared Layout

`app/layout.js` adds the header, navigation, Why Choose Us section, and footer to every page. Changes to these shared components affect the entire website.

## Editing Workflow

1. Pull the latest changes.
2. Run `npm run dev`.
3. Make and review changes locally.
4. Check desktop and mobile layouts.
5. Run `npm run lint` and `npm run build`.
6. Commit and push to GitHub.

## Notes

- The insurance logo scroller and its assets are scheduled for removal and are not documented here.
- Use `config/site.js` instead of repeating business information across components.
- Review multiple pages after changing anything inside `components/layout/` or `components/service-page/`.
