[![npm downloads](https://img.shields.io/npm/dt/mc8-util?style=flat-square)](https://www.npmjs.com/package/mc8-util)

<img src='mc8.png' width='250'>

# What is mc8?

mc8 is a node.js and javascript tool for creating Minecraft datapacks.
it comes with utility such as:

* All items

* All entities

* All blocks

It also gives a min and max number (-2147483647, 2147483647), along with an auto-building random number generator!

It has commands as well. it uses minecraft commands that can be put into your datapack through functions, and I automatically writes the files for you.

# How do I Intall it?

First, download [node.js](https://nodejs.org/en/download/)

Then in your file, open command promt and `cd` into your file, then type:

```bash
npm install mc8-util --save
```

Now that you have it installed, to begin, type this in your javascipt file:

```javascript
const mc8 = require('mc8-util');
```

Then type:

```javascript
mc8.init();
```

What this does is initialize mc8, and creates public variables for each of the custom functions so that you don't have to type `mc8.` before each of the function (you can still do that though)

# How do I Use it?

First, your file should look like this to begin with:

```javascript
const mc8 = require('mc8-util');

mc8.init();

currentFile('mc8.mcfunction');
```

Your `currentFile()` is the current file you are writing to, typically an mcfunction file. This can also be a path (eg. *path/filename.mcfunction*)

To start, we can create 'for' loops for the utility:

```javascript
for(let i = 0; i < util.item.length; i++) {

}
```

The `util.item` has a list of all of the items in Minecraft 1.16.

We can add a `say()` function, which is just the Minecraft `say` command, with each of the items in minecraft.

```javascript
for(let i = 0; i < util.item.length; i++) {

  say(util.item[i]);

}
```

The file should look like this:

```javascript
const mc8 = require('mc8-util');

mc8.init();

currentFile('mc8.mcfunction');

// saying every 1.16 item
for(let i = 0; i < util.item.length; i++) {

  say(util.item[i]);

}
```

We can then run that on command prompt using node:

```bash
node int.js
```

In this case, I named my file `int.js`

In the same folder as my `int.js` file, a new file will be created; `mc8.mcfunction`, and will have everything that we put in it, a small axample of that code would be:

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

We can do the same thing with entities too, we just have to change the `for` loop:

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

You can also create datapacks and open them

begin by using `mc8.init()` then use the `datapack` functions:

```javascript
const mc8 = require('mc8-util');
mc8.init();

datapack.path('datapack');      // sets a path for your datapack
datapack.generate('mc8');       // generates a datapack template in the path: 'datapack/mc8'
datapack.open('datapack/mc8');  // opens the datapack so that we can use shortcuts while generating files
```

now when we use `currentFile()`, we will use functions:

```javascript
currentFile('folder:function');
```

this won't currently work because we haven't created the folder for the function, we can do this by using `datapack.addFolder()`:

```javascript
datapack.addFolder('install');
```

now we can set our file to `install:load`:

```javascript
currentFile('install:load');
```

we can also hook it up to the `load.json` file in the minecraft folder so that it starts when we load the datapack:

```javascript
datapack.setFunctionLoad('install:load');
```

and the same with `tick.json`:

```javascript
datapack.setFunctionTick('install:loop');
```

# Commands

Current list of commands in mc8:

* ### say

```javascript
say('message');
```

* ### scoreboard

```javascript
scoreboard.add('objective name', 'objective type');

scoreboard.[objective name].[set | add | remove]('player name', 'number');
scoreboard.[objective name].get('player name');
scoreboard.[objective name].operation('player name').[add | subtract | multiply | divide | remainder | equal]('player 2 name', 'objective 2 name');
scoreboard.[objective name].remove();
```

* ### execute

```javascript
execute.[as | at]('selector')...

execute.if.score('player name', 'objective name').is(['>' | '=' | '<' | '>=' | '<=' | '!='], 'player 2 name', 'player 2 objective')...
execute.if.score('player name', 'objective name').matches('..number..')...

execute.store.[result | success].score('player name', 'objective')...

execute...run({optional function})...
```

this optional function will have a prefix of the execute command for everything inside the function, eg:

```javascript
execute.as('@a').run(() => {

  say('hi!');
  
  say('yay!');

});
```

this will make:

```mcfunction
#mc8
execute as @a run say hi!
execute as @a run say yay!
```

you can also layer up execute function like this:

```javascript
execute.if.score('value', 'athing').matches('..4').at('@r').as('@p').run().say('whoop whoop!');

// or

execute.if.score('value', 'athing').matches('..4').at('@r').as('@p').run(() => {

  say('whoop whoop!');

});
```

and you will get:

```mcfunction
#mc8
execute if score value athing matches ..4 at @r as @p run say whoop whoop!
```

* ### data

```javascript
data.modify.[storage]('name', 'variable').[set | append].value('value');
data.modify.[storage]('name', 'variable').[set | append].from('type', 'name', 'variable');

data.get.[storage]('name', 'variable', [optional: 'multiplier']);
```

* ### kill

```javascript
kill('selector');
```

* ### function

```javascript
_function('function');
```

We have to use `_function` instead of `function` because `function` is a reserved keyword in javascript

* ### tellraw

```javascript
tellraw('selector', [{'json'}]);
```

* ### clear

```javascript
clear('selector', [optional: 'item'], [optional: 'count']);
```

* ### effect

```javascript
effect.give('selector', 'effect id', 'time', 'level', [optional: 'display particles']);
effect.clear('selector', [optional: 'effect id']);
```

# Miscellaneous

* ## datapack

```javascript
datapack.path('path-to-datapack');  // optional

datapack.generate('name' [default: `mc8-unnamed-${count}`], 'description' [default: 'made with mc8!'], 'function-name' [default: `mc8-unnamed-${count}`]);
```

creates a datapack template, and

```javascript
datapack.open('path-to-datapack');
datapack.addFolder('name');
datapack.setFunctionTick('folder:function');
datapack.setFunctionLoad('folder:function');
```

* ### mc8.init();

```javascript
mc8.init();
```

initializes mc8

* ### currentFile();

```javascript
currentFile('current file being writen to');
```

* ### util

```javascript
// every entity in Minecraft 1.16
typeof util.entity == 'array';

// every item in Minecraft 1.16
typeof util.entity == 'array';

//every block in Minecraft 1.16
typeof util.block == 'array';

// minimum and maximum numbers that Minecraft can handle
typeof util.number.min == 'number'; // -2147483647
typeof util.number.max == 'number'; // 2147483647
```

* ### util - minecraft

```javascript
// examples:
minecraft.diamond == 'minecraft:diamond';
minecraft.skeleton == 'minecraft:skeleton';
minecraft.player == 'minecraft:player';

minecraft._skeleton == '!minecraft:skeleton';
minecraft._player == '!minecraft:player';
```

* ### util - ticks

```javascript
tick.s(4) == 80;      // seconds to ticks
tick.m(5) == 6000;    // minutes to ticks
tick.h(3) == 216000;  // hours to ticks

tick.tps == 20;       // ticks per second
tick.tpm == 1200;     // ticks per minute
tick.tph == 72000;    // ticks per hour
```

* ### selectors

```javascript
aa({'selectors'});
```

there are 4 types of this function:

```javascript
aa() == '@a';
ap() == '@p';
ar() == '@r';
ae() == '@e';
```

you can use the selectors like this:

*input*

```javascript
ae({'type': [minecraft.zombie, minecraft._player], 'distance': '..7'});
```

*output*

```
@e[type=minecraft:zombie,type=!minecraft:player,distance=..7]
```

* ### custom();

```javascript
custom('command');
```

* ### comment();

```javascript
comment('comment');
```

* ### newLine();

```javascript
newLine();
```

creates new line

* ### randomNumberGenerator();

```javascript
randomNumberGenerator([{if datapack not opened}: 'path to random number generator file']);
```

creates a random number generator that you can use...

* ### generateRandomNumber();

```javascript
generateRandomNumber('minimum number', 'maximum number', [{if datapack not opened}: 'function name']);
```

the `function name` is the file that you used in `randomNumberGenerator(filename)` (eg: `foldername:filename`). This will generate a random number and put it on `output` from the scoreboard objective `random`. you can get the number form doing this:

```javascript
randomNumberGenerator('rng.mcfunction');

generateRandomNumber(0, 50, 'mc8:rng');

scoreboard.random.get('output');
```

which will make:

```mcfunction
#mc8
scoreboard players set min random 0
scoreboard players set max random 50
function mc8:rng
scoreboard players get output random
```

* ### playerTrackingCompass();

```javascript
playerTrackingCompass();
```

creates a player tracking compass,

to use type command:

```mcfunction
tag {PLAYERNAME} add track
```

and to get compass:

```mcfunction
trigger compass
```

* ### trigger();

```javascript
trigger('name', {function}, 'remove score' [default: true]);

// use

trigger('hello', () => {
	say('hello');
});
```

this creates a `/trigger` scoreboard, and when triggered says hi,

```mcfunction
#mc8
scoreboard objectives add hello trigger
scoreboard players enable @a hello
execute as @a[scores={hello=1..}] run say hello
scoreboard players set @a hello 0
```

setting the remove score to false, will remove the last line of code:

*input*

```javascript
trigger('hi', () => {
	say('hi');
}, false);   // last argument is now false
```

*output*

```mcfunction
#mc8
scoreboard objectives add hi trigger
scoreboard players enable @a hi
execute as @a[scores={hi=1..}] run say hi
```

this will also add an interactive scoreboard that you can use with the `scoreboard.[name]()` function

* ### economy

```javascript
economy.create();  // only works if used datapack.open(), initializes economy

economy.sell('item id', 'price');  // when player uses /trigger sellhand, it will sell the item for the price
```

use `/trigger bal` to get your current balance

[@ephf](https://www.youtube.com/channel/UCqfHbmI7lEK9vHTF4owbt9w) - 1.16