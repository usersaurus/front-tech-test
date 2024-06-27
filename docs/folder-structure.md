# Folder structure

I mostly followed the bulletproof react folder structure, since it's opinionated and depurated during years.

Also, I'm using kebab-case for naming files.

A brief explanation of every folder in `src`:

- **app**: all the application layer. Also includes a `pages` folder including, well, the pages.
- **assets**: for static files
- **components**: for components that are not specific of a single feature
- **features**: contains each of the application features, modularized. Each feature folder can contain other folders if needed (components, hooks, types, etc)
- **hooks**: for shared hooks
- **graphql**: for shared graphql things
- **stores**: for global stores
- **types**: for shared types
- **utils**: for shared functions