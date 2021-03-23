## P5 Sketches

### To run the Project

In your terminal window type:

```
git clone git@github.com:neontribe/sketches.git
cd sketches
yarn
yarn dev
```

The last command will start [browser-sync](https://browsersync.io/) which will allow you to run the project in your browser. Your terminal will tell you the address of your sketch, it will look something like this:

```
[Browsersync] Access URLs:
 ---------------------------------------
       Local: http://localhost:3000
```

Your browser should open your sketch in a new tab automatically. If for any reason the window closes, copy and paste this address into your browser and you should see your sketch.

If a window opens, but you don't see your sketch, hit f12 or right-click and select 'inspect' in your browser window and look for error messages in your console.

Bugs:
Why are some trees lower than others (and why do they get cut off) - must be that tree trunk is being drawn lower for some

Features:

- Adding fog
- Adding floor stuff
- Adding branches
- Simulating brush strokes

Tweaks:

- Improve natural tree density
- Colours of trees as they get further away
- Trees are at a more consistent level
- Trees start at the bottom of the page

- Branches:
  Make a shape with vertices to taper towards the end
  Use transform to make them tilt
  draw multiple branches on both sides
