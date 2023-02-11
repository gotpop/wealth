# Wealth Demo

Live demo hosted on Vercel and the database on Railway.app

https://gotpop-wealth.vercel.app

## Notes & Features

* Uses Prisma to save data to a PostgreSQL db.
* Using the Types from Prisma throughout app.
* Using Tailwind. No raw CSS.
* Uses Cypress for testing.
* Because I used Tailwind I used the Web Animation API for animations.
* I've used custom hooks to shift logic into separate files.
* The page is statically generated as it wouldn't make sense to fetch any of this data from the client.
* Uses GitHib actions to run Cypress tests & ESLint.

## Caveats

* There isn't a free version of the body font `Avenir`, so I've found the closest subsitute `Montserrat`. You can see they're almost identical in this [blog post](https://www.learnui.design/blog/avenir-similar-fonts.html).
* The icons in the tab section are raster images so may look blurry if you have a higher resolution monitor.
* I've added web animations. Some clients like the front end developer to add page interactions and "interpret" the design and others not. Either way is fine with me.
* Wealthfront logo was an image so I pulled a vector from thier website. Normally in cases like this I would check with the designer. Worst case I would just use the .png. 




