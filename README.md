# General Admission

[Heroku link][heroku]

[heroku]: http://generaladmission.herokuapp.com/

## Minimum Viable Product

General Admission (GA) is a web application inspired by Untappd.com built using Ruby on Rails and React.js. GA allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [x] Create an account
- [x] Log in / Log out
- [x] Search for artists
- [x] Search results page
- [x] View artist rating, info, other check-ins, and other details
- [x] Check-In for an artist and submit review and other details
- [ ] Edit User Details/Settings
- [x] View user's profiles, details, and other stats (including self)
- [ ] Add friend
- [ ] View feed (global, friends, & self) (if time permits)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages
- [x] blank landing page after signin

### Phase 2: Artists Model & Search Index, API, and basic APIUtil (1.5 days)

**Objective:** Artists can be created, read, edited and destroyed through
the API.

- [x] create `Artist` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for artists (`ArtistsController`)
- [x] Artists indexed on root page
- [x] jBuilder views for Artists (single Artist Page)
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.
- [ ] API interaction with Songkick (if time permits)
- [x] Basic search index on root/landing page

### Phase 3: Attends Model, API, and basic APIUtil (1.5 days)

**Objective:** Attends can be created, read, edited and destroyed through
the API. Attends = one Activity React component.

- [x] create `Attend` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for artists (`AttendsController`)
- [x] jBuilder views for Attends (single User Page)
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.
- [x] create `Activity` React component
- [x] Artist aggregated rating on show page
- [x] create `Check In` React component
- [ ] Ability to delete review (later phase)

### Phase 4: Flux Architecture and Router (1.5 days)

**Objective:** Artists and Attends can be created, read, edited and destroyed with the
user interface.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each component, building out the flux loop as needed.
  - [x] `User Profile`
  - [x] `Artist Profile`
  - [x] `Activity`

### Phase 5: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 6: User Profiles & Friends (1.5 days)

**Objective:** Users have profiles that show their activity and stats and users have friends.

- [ ] Add friend button/action on user profiles.
- build out API, Flux loop, and components for:
  - [ ] get recent activity
  - [ ] statistics about attendance
  - [ ] user details
- [ ] Style new elements

### Phase 7: Styling Cleanup and Seeding (1.5 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Research easy UI fixes / advice that can increase look (Product Hunt?)
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus: The Feed (TBD)

**Objective:** Users have a feed that can be filtered globally or friends only.

- build out API, Flux loop, and components for:
  - [ ] Updated Feed
  - [ ] Filtering feed

### Bonus Features (TBD)
- [ ] Songkick API integration for artists and venues, and similar artists
- [ ] Extra stats on user profile such as Top Artists & Venues
- [ ] Extra stats on artists such as loyal fans, similar artists, and popular venues
- [ ] Extra stats on artists such as loyal fans, similar artists, and popular venues

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-six]: ./docs/phases/phase6.md
