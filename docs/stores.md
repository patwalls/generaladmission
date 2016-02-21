# Flux Stores

### UserStore

Holds all persisted user data.

##### Actions:
- `receiveAllUsers`
- `receiveSingleUser`
- `receiveSingleUsersFriends`
- `removeUser`

##### Listeners:
- `FriendsIndex`
- `AddAttend`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`

### ArtistStore

Holds all persisted artist data.

##### Actions:
- `receiveAllReviews`
- `receiveSingleReviews`
- `receiveArtistDetails`
- `receiveUpcomingShows`
- `receiveSimilarArtists` (if time permits)
- `receiveSimilarArtists` (if time permits)

##### AttendStore:
- `receiveAllReviews`
- `receiveSingleUsersFriends`

### AttendFormStore

Holds un-persisted venue data to send to the API.

##### Actions:
- `receiveVenueFormParams`

##### Listeners:
- `AttendForm`
