# FreezeTag Marketing Website

This is the marketing website for the FreezeTag capstone project. By pushing to the main branch on this repository, the gitlab runner will automatically build the (static) site and deploy it using Cloudflare Pages via Wrangler. The website deploys to https://freezetag.app.

## Dependencies

You should install `pnpm` through `npm`, and then run `pnpm install`. This will handle any and all node dependencies.

Additionally, we use [mdBook](https://rust-lang.github.io/mdBook/index.html) for the documentation portion of the webpage. So, you will need to install Rust and then use Cargo to install `mdbook`. There are instructions on the mdBook webpage. The mdBook project is handled in `./documentation-book`.