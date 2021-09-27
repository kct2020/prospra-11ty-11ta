---
# This is a full listing of available Frontmatter options, available for any content (.md) file.
title: PROSPRA Activities Arranger
layout: post
date: 2021-09-27
excerpt: The PROSPRA website Home Page.
author: keith-taylor
eleventyNavigation: # Required if want to display in Main Nav Bar
  key: main # "main" is required
  title: Welcome # as it will appear in the nav
  order: 1 # order to display in the nav (index = 1)
seo: # SEO values are used for OG and will overwrite 'title' and 'excerpt' above
  title:
  description:
  image: # used for OG:image and Twitter:image. Overrides default set in _data/meta.siteImage
hero: graphic # options: carousel, graphic, video, split (text & image)
heroSettings:
  height:
    mobile: # options = h-1/1 (default = full screen), h-1/2, h-1/3, h-3/4, h-9/10, h-48 (12rem, 192px), h-56 (14rem, 224px), h-64 (16rem, 256px)
    desktop: # leave blank to inherit "mobile" height (default = full screen)
  bg:
    color: # default bg-black
    image: 2021/too-many-activities-to-organize.webp # relative to /assets/images/
    imagePosition: # options = bg-center (default), bg-left, bg-right
    video:  # local relative /assets/video/, or full https://... if remote?
    opacityMobile: opacity-50 # options opacity-n, 5, 10, 15, 20, 25, 50, 75, 100 (default)
    opacityDesktop: opacity-75 # Leave blank to inherit opacityMobile, use same options as opacityMobile
  headingText: Did you bite off more tasks<br /> than you can chew?
  headingTextColor: # default = text-white (can use any TailwindCSS text-[color]-[xxx])
  headingTextCase: # default = as typed - options: uppercase, lowercase, capitalize
  subheadingText: Sink your keith into better activities arranging!
  subheadingTextColor: # Leave empty to inherit headingTextColor or default (text-white) or use any text-[color]-[xxx]
  buttonText: Search Now... # no button generated if left blank
  buttonURL: /about-prospra/search-prospra-com # full url required. Example: https://thisdomain.com/somepage/
  buttonTextColor: # leave blank to inherit from /src/_data/colors.buttonCustom or buttonDefault
  buttonBgColor: # leave blank to inherit from /src/_data/colors.buttonCustom.bg or buttonDefault.bg
  buttonBgHover: # leave blank to inherit from /src/_data/colors.buttonCustom.bgHover or buttonDefault.bgHover
  buttonBorder: # leave blank to inherit from /src/_data/colors.buttonCustom.border or buttonDefault.border
---
## PROSPRA Activities Arranger

Welcome to PROSPRA Activities Arranger

Currently, this site is under construction. Because I'm transmigrating from WordPress to Jamstack.

But there's plenty of content to help you arrange your activities. So I recommend you try one or all of the following...

<dl id="content">
<dt id="search"><p><a href="https://cse.google.com/cse?cx=2bf1e05c3c5da97fa">Search PROSPRA</a></p></dt><dd>I think now is a good time for you to bookmark that search PROSPRA link. Then you can keep asking questions and researching new PROSPRA topics.</dd>
<dt id="old"><p><a href="/prospra-wp-2020">Old PROSPRA Blog</a></p></dt><dd>The articles that have been helping you organize your activities are still here. So please keep reading them and tell me which ones you want me to prioritize for review.</dd>
<dt id="new"><p><a href="/prospra-blog">New PROSPRA Blog</a></p></dt><dd>Week by week, I will be adding new projects. Also, I'll review the old blog and gradually move the content to new articles. So please keep checking back to encourage my progress.</dd>
</dl>

But what if you still have concerns after reading all that? Simply share your questions, experiences, and opinions on the <a href="https://github.com/kct2020/prospra-11ty-11ta/issues">PROSPRA Issues Page</a>.