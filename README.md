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

```bash
$ npm install mc8 --save
```

(*without the dollar sign*)

Now that you have it installed, to begin, type this in your javascipt file:

```javascript
const mc8 = require('mc8');
```

Then type:

```javascript
mc8.init();
```

What this does is initialize mc8, and creates public variables for each of the custom functions so that you don't have to type 'mc8.' before each of the function (you can still do that though)

# How do I Use it?

First, your file should look like this to begin with:

```javascript
const mc8 = require('mc8');

mc8.init();

currentFile('mc8.mcfunction');
```

Your 'currentFile()' is the current file you are writing to, typically an mcfunction file. This can also be a path (eg. *path/filename.mcfunction*)

To start, we can create 'for' loops for the utility:

```javascript
for(let i = 0; i < util.item.length; i++) {

}
```

The 'util.item' has a list of all of the items in Minecraft 1.16.

We can add a 'say()' function, which is just the Minecraft 'say' command, with each of the items in minecraft.

```javascript
for(let i = 0; i < util.item.length; i++) {

  say(util.item[i]);

}
```

The file should look like this:

```javascript
const mc8 = require('mc8');

mc8.init();

currentFile('mc8.mcfunction');

// saying every 1.16 item
for(let i = 0; i < util.item.length; i++) {

  say(util.item[i]);

}
```

We can then run that on command prompt using node:

```bash
$ node int.js
```

In this case, I named my file 'int.js'

In the same folder as my 'int.js' file, a new file will be created; 'mc8.mcfunction', and will have everything that we put in it, a small axample of that code would be:

```mcfunction
#mc8
say minecraft:acacia_boat
say minecraft:acacia_button
say minecraft:acacia_door
say minecraft:acacia_fence
say minecraft:acacia_fence_gate
say minecraft:acacia_leaves
say minecraft:acacia_log
say minecraft:acacia_planks
say minecraft:acacia_pressure_plate
say minecraft:acacia_sapling
say minecraft:acacia_sign
say minecraft:acacia_slab
say minecraft:acacia_stairs
say minecraft:acacia_trapdoor
say minecraft:acacia_wood
say minecraft:activator_rail
say minecraft:air
say minecraft:allium
say minecraft:ancient_debris
say minecraft:andesite
say minecraft:andesite_slab

# and so on...
```

We can do the same thing with entities too, we just have to change the 'for' loop:

```javascript
// saying every 1.16 entity
for(let i = 0; i < util.entity.length; i++) {

  say(util.entity[i]);

}
```

Then run, and we will get this:

```mcfunction
#mc8
say minecraft:area_effect_cloud
say minecraft:armor_stand
say minecraft:arrow
say minecraft:bat
say minecraft:bee
say minecraft:blaze
say minecraft:boat
say minecraft:cat
say minecraft:cave_spider
say minecraft:chest_minecart
say minecraft:chicken
say minecraft:cod
say minecraft:command_block_minecart
say minecraft:cow
say minecraft:creeper
say minecraft:dolphin
say minecraft:donkey

# and so on...
```

mc8 also has the minimum and maximum numbers that Minecaft can handle:

*input*

```javascript
console.log(util.number.min);
console.log(util.number.max);
```

*output*

```bash
-2147483647
2147483647
```
