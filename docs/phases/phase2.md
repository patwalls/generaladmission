# Phase 2: Artists Model, API, and basic APIUtil (1.5 days)

## Rails
### Models
* Artist model

### Controllers
* ArtistsController

### Views
artists/show.json.jbuilder

## Flux
### Views (React Components)
* ArtistPanel
  - ArtistHeader
  - ArtistInfo
  - ArtistActivity
    - CheckIn (in later phase)
    - Activity (in later phase)

### Stores
* Artist

### Actions
* ApiActions.receiveAllArtists -> triggered by ApiUtil
* ApiActions.receiveSingleArtist
* ApiActions.deleteArtist
* ArtistActions.fetchAllArtists -> triggers ApiUtil
* ArtistActions.fetchSingleArtist
* ArtistActions.createArtist
* ArtistActions.editArtist
* ArtistActions.destroyArtist

### ApiUtil
* ApiUtil.fetchAllArtists
* ApiUtil.fetchSingleArtist
* ApiUtil.createArtist
* ApiUtil.editArtist (TO DO WHEN EXTERNAL API HOOKED UP)
* ApiUtil.destroyArtist (TO DO WHEN EXTERNAL API HOOKED UP)

## Gems/Libraries
* Flux Dispatcher (npm)
