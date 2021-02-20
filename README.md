# What is mc8?

mc8 is a node.js and javascript tool for creating Minecraft datapacks.
it comes with utility such as:

* All items

* All entities

* All blocks (comming soon)

It also gives a min and max number (-2147483647, 2147483647), along with an auto-building random number generator!

It has commands as well. it uses minecraft commands that can be put into your datapack through functions, and I automatically writes the files for you.

# How do I Intall it?

First, download [node.js](https://nodejs.org/en/download/)

Then in your file, open command promt and 'cd' into your file, then type:

```markdown
$ npm install mc8 --save
```

(*without the dollar sign*)

Now that you have it installed, to begin, type this in your javascipt file:

```javascript
const mc8 = require("mc8");
```

Then type:

```javascript
mc8.init();
```

What this does is initialize mc8, and creates public variables for each of the custom functions so that you don't have to type 'mc8.' before each of the function (you can still do that though)

# How do I Use it?
