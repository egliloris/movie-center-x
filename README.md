# MovieCenterX

This project is a template to learn [NgRx](https://ngrx.io/)

## Setup

- Run `npm install`
- Install Redux DevTools

## TODO's

### Basics - Movies
- [ ] Run the application and inspect the redux dev tools.
- [ ] Checkout the [Movies](http://localhost:4200/movies) tab. Whats the difference between viewing the movies details vs. the random vote average display.
- [ ] Implement the like button to increase the movie vote count.

### Advanced - Shows

Try to implement the [Shows](http://localhost:4200/shows) tab on your own. The basic architecture has been done and simply awaits your input. 

Here is a small checklist which might help you on your way:

- [ ] Load actions implemented
- [ ] Load effect implemented
- [ ] Load success and failure reducer implemented
- [ ] Load on init dispatched
- [ ] Select all selector implemented

What else can you try?

- [ ] Set a selected show within the state and load given show.
- [ ] Add a loading and loaded phase to the reducer
- [ ] Convert the `shows` array into a dictionary `{ [id: string]: Show }` and improve the selector for the selected show.

### Final - Actors

Repeat the same for actors but be aware, nothing has been done yet.

Here is a small checklist which might help you on your way:

- [ ] Die you add all relevant files? (`*.actions.ts | *.effects.ts | *.reducer.ts | *.selectors.ts`)
- [ ] Did you provide the new state to the application?
- [ ] Die you provide the effects to the application?
- [ ] Have you added an useful initial state?


What else can you try?

- [ ] Open a bottom sheet or dialo using effects only.
- [ ] 


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.
