# PROSPRA.com Cloudflare Pages version

Project notes here with original README below. Then I'll rewrite this if it works. Initially, I want to: 
- deploy to Cloudflare Pages (Deploy CP). 
- configure site basics (1st Config).
- improve & customize 404 page
- start PROSPRA projects for improving admin pages
- produce a version where variables are marked KCT_Template_Field so simply search for site variables and edit in Github as part of first step (Cloudflare Pages Deploy). Note that this is a template for all my new websites. But somewhere, I need to document thw WordPress Transmigration process. Because migration is about moving a WordPress installation between different servers. But transmigration is a "changing nationality" - in this case, from WordPress to Eleventy. Also note that the SIAB template would benefit from some easy theming options (site colors and other styling choices). But this might evolve as I implement on more sites. At which time, the Github suggested topic of `blog-theme` will apply. Also, might be nice to package it with options for Netlify & Cloudflare deployment - otherwise remove all Netlify code to avoid confusion.


Then later:
- add PWA capabilities, including push notifications (OneSignal).
Amend this todo list as project progresses. Adding detailed notes below with latest changes first

To view current progress, visit https://prospra-11ty-11ta.pages.dev/

## yymmdd Post-Switch
- gcse with better logo (click for search tips)


## yymmdd Switch Server
Check and tidy all files, re-write this README, and redirect domain to Cloudflare Pages.

## yymmdd Posts Tidy
- Delete old template posts.
- Complete welcome post next steps and change "Logically organizing activities for less worry and more time." to "Logically organize activities to reach better goals."
- Edit index.md and remove progress notes.
- Start admin routine to evolve or delete old posts
- check meta description length in spreadsheet

## 210925b 404 Content
Mindmup prepared, so change some content. But search engine image needs to be set after server-switch.

## 210925b Workflow Note
For all prior steps, I created a branch in Github, made the changes, then prevcheckediewed the latest automatic Cloudflare Pages preview before Pull Requesting back to main branch. However, this creates issues:
1. Every commit starts a Cloudflare deploy, which can create a backlog where a few files need changing.
2. It's very easy for me to work on the wrong branch in Github.
3. File manipulation is tedious in Github.

Github experts might have great ways round these issues. But in the past, I've found that Gitpod helps me. So I've moved to that. Although I still have to decide if I should Gitpod the main branch, or create a new Github branch first. For this update, I'm working on main branch in Gitpod. Later, as I promote my own templates, I'll consider other editing options. Including forestry.io.

**NB:** I should not have used the main branch in Gitpod. Instead, the workflow should be:
1. Create new branch in Github.
2. Use new branch in Gitpod.
3. Push amended new branch to Github (triggering Cloudflare Pages preview deployment)
4. Push to main branch in Github (triggering live site deployment).

## 210925a Site Logos
There are SVG logos (desktop and mobile) with instructions at <a href="/svg-shortcode/">SVG - Shortcode</a>. But I'm invested in WebP images for this site. So I'll leave learning about SVG (and probably Inkscape) for later. Which means changing `/src/_includes/components/nav.njk`. Also set favicons:
- `src/assets/images/favicon/apple-touch-icon.png` (180x180)
- `src/assets/images/favicon/favicon-16x16.png`
- `src/assets/images/favicon/favicon-32x32.png`

## 210917a New Admin Pages
- Purpose - Current phase: provide examples from my projects. Next phase: prepare generalized templates that help resolve common concerns (Q+A, Professional Consulting for various topics). ✅
- Contact - Raise or comment on <a href="https://github.com/kct2020/prospra-11ty-11ta/issues">PROSPRA Github Issues</a>. ✅
- Privacy - Brave browser, serverless so no Personal Info stored, cookies optional. 3rd parties I use - link to privacy for Cloudflare, Clarity, AdSense. ✅
- T&Cs - Information is presented for you to discuss with your professional advisers. It's up to you and your professional advisers to check my facts and evaluate my opinions and experiences. I'm trying to help you with generalized information. But you and your advisers must take responsibility for how you apply my information to your circumstances. What has worked for me, might not work for you. ✅
- Help. ✅
- Search (including logo for gcse to be linked after server switch). ✅
- News (Notifications). ✅
At this time, I don't want to get bogged down with TailwindCSS. Because the default settings are mostly acceptable. However, there is no `<dt>` styling. So the Definition List titles get lost on the page. Therefore, I'll style dt like one of the heading tags for now. Then I can look deeper into styling once this site and others are up and running.

## 210904a Footer & Search
- /about/ hierarchy on WordPress to be replaced by /about-prospra-com/ folder. Renamed src/about.md to src/about-prospra/about-prospra-com.md
- New admin pages needed. But for now, link to about page dl anchors. 
- `/src/_includes/partials/footer.njk` [Home] | [Contact] | [Purpose] | [Privacy] | [T&Cs] | [Notifications] | [Help] | [Search] links and Clarity script.

## 210823b 1st Post
PROSPRA.com just needs a post to introduce new website features and a heads-up on forthcoming projects. And that's really all the template needs - one post to edit or delete similar to a WordPress install
- /src/blog.njk -> prospra-blog.njk
- /src/posts/*.md - added Welcome to PROSPRA Activities Arranger Blog

## 210823a Import Tidy
One page had bad link as revealed by Simply Static log. Fixed by editing output on new site. Because quicker than editing WordPress and re-importing.

## 210819a Import WP site
Done now to ensure the ideas will work before investing in new content. Also brings images in rather than uploading duplicate assets.
Requires additional passthrough statement in /eleventy.js and unzip in Gitpod (because I can't see how to do that in GitHub web interface).
WordPress index.html renamed as /prospra-wp-2020

## 210819a 1st Content
- about.md Template fields set in my project MindMup. Also default about.md layout update in my Snippets file. Working towards a fast workflow for new 11ty sites.
Note, /about/ should be renamed to /about-domain-tld/ so all admin pages can stay together in that domain folder.

## 210818b 1st Config
Usually, I create a 1st Config branch to get a working site with config changes as per original README instructions and note files changed with any additional notes. Most of this detail is deleted from final README, but it serves to keep track of installation progress. The configuration is described on the Home page:
- /src/_data/meta.js 
   - KCT_TEMPLATE_siteName        PROSPRA Activity Arranger
   - KCT_TEMPLATE_siteDescription 7 Step Problem Solver & Task Organizer using PROSPRA Activity Arranger
   - KCT_TEMPLATE_siteImage       [to set]
   - KCT_TEMPLATE_authorName      Keith Taylor
   - KCT_TEMPLATE_authorURL       keith-taylor
   - KCT_TEMPLATE_authorEmail     shrewdies@gmail.com
   - KCT_TEMPLATE_twitterSite     @KeithTaylor
   - KCT_TEMPLATE_twitterCreator  @KeithTaylor
   - KCT_TEMPLATE_address: {
		street: '123 Main Street',
		city: 'Anytown',
		state: 'KZ',
		zip: '54321',
		phoneDisplay: '+1 (123) 456-7890',
		phoneCall: '+11234567890',
		email: 'hello@domain.com',
	}
- index.md
    - _KCT_TEMPLATE_HomePage_Title_ PROSPRA Activity Arranger
    - _KCT_TEMPLATE_Original_URL_   https://prospra.com/
    - _KCT_TEMPLATE_Source_         11TA - 11ty, TailwindCSS, & Alpine.js Template
    - _KCT_TEMPLATE_headingText_    Did you bite off more tasks<br /> than you can chew?
    - _KCT_TEMPLATE_subheadingText_ Sink your keith into better activity arranging!

authorURL links to authors page, so that needs customizing. 

## 210818a Deploy CP
ISC license added. Note, Cloudflare Pages default settings for Eleventy don't work on this template. Although they could be amended, the easiest way is to change CP defaults to settings from netlify.toml. Namely...
- Build command: npm run build
- Build output directory: /dist 
Otherwise, Tailwind doesn't get installed.

## Original 11TA README below...


***

# 11TA - 11ty, TailwindCSS, & Alpine.js Template

> **UPDATE v2.0.0 - Breaking Changes**
> In order to provide scalability and cleaner frontmatter controls in current Posts _(and upcoming Products)_ collections, the Frontmatter keys were updated which required updates to `/src/_includes/components/*.njk`, `tailwind.config.js`, and other templates.
> I apologize for the inconvenience.

I set out to build a starter project template for 11ty that has TailwindCSS and Alpine.js baked in.

Version 1.0.0 morphed into a deeply customizable, full featured, text-based CMS for managing small websites with easy-to-manage configuration files in the `/src/_data/` directory.

[![Netlify Status](https://api.netlify.com/api/v1/badges/e6eb38e1-d081-46ea-a4f6-4d3d36ab7036/deploy-status)](https://app.netlify.com/sites/11ta/deploys)

![Lighthouse Performance](lighthouse/lighthouse_performance.svg) ![Lighthouse Accessibility](lighthouse/lighthouse_accessibility.svg) ![Lighthouse Best Practices](lighthouse/lighthouse_best-practices.svg) ![Lighthouse SEO](lighthouse/lighthouse_seo.svg)

---

## Live Demo

**The [live demo at "11ta.netlify.app"](https://11ta.netlify.app) provides a feature list, and the evolving blog posts each highlight and provide examples of different features, shortcodes, customizations, and frontmatter controls.**

## :fire: Credit :fire:

First and foremost, I want to credit the [11ty](https://11ty.dev) community, especially those listed in the [starter projects](https://www.11ty.dev/docs/starter/)!

Specifically, the following starter projects helped me understand the power and flexibility of 11ty and from their examples I was able to extend the functionality to build this system:

- :fire: [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog) by [Zach Leatherman](https://twitter.com/zachleat)
- :fire: [eastslopestudio-eleventy-starter](https://github.com/eastslopestudio/eleventy-starter) by [Ryan Scherler](https://twitter.com/ryanscherler)
- :fire: [eleventyone](https://github.com/philhawksworth/eleventyone) by [Phil Hawksworth](https://twitter.com/philhawksworth)
- :fire: [eleventy-tailwind-alpinejs-starter](https://github.com/gregwolanski/eleventy-tailwindcss-alpinejs-starter) by [Greg Wolanski](https://gregwolanski.com/)
- :fire: [jet](https://github.com/marcamos/jet) by [Marc Amos](https://twitter.com/marcamos)

## Deploy and Host at Netlify Automatically

To automatically deploy this Template to [Netlify for free hosting](https://www.netlify.com/pricing/), make sure you're logged in to your Netlify account and then simply click the <kbd>Deploy to netlify</kbd> button below.

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/11ta/11ta-template"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

## Install and Deploy Manually

- Duplicate this repository by clicking <kbd>Use this template</kbd> above
- Clone the repository locally
- Run `npm install` to install dependencies
- `npm run dev` to work locally

## Planned

- Search
- More Structural controls for Index Page
- Easy add Collections: Projects, Services, Jobs, etc.
- "Themed" versions for Portfolios/Creatives, Agencies, Digital Gardens, etc.
- Fully documented migration of Wordpress to 11ty
- [Snipcart](https://snipcart.com/) integration
