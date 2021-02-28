// made by @ephf on YouTube

var mc8 = {
	fs: require('fs'),
	cfn: false,
	file: [],
	init() {

		let mc8obj = Object.keys(mc8);
		let dontuse = ['fs', 'cfn', 'file', 'mc8_writefile', 'mc8_newfile', 'trigger_prefix', 'at_suffix'];

		for(let i = 0; i < mc8obj.length; i++) {

			let byp = true;

			for(let d = 0; d < dontuse.length; d++) {

				if(mc8obj[i] == dontuse[d]) {

					byp = false;

				}

			}

			if(byp) {

				global[mc8obj[i]] = mc8[mc8obj[i]];

			}

		}

		minecraft = {

			player: 'minecraft:player',
			_player: '!minecraft:player'

		};

		util.entity.forEach(i => minecraft[i.split('minecraft:')[1]] = i);
		util.entity.forEach(i => minecraft['_' + i.split('minecraft:')[1]] = '!' + i);
		util.item.forEach(i => minecraft[i.split('minecraft:')[1]] = i);

		tick = {
			s(sec) {

				return sec * 20;

			},
			m(min) {

				return tick.s(min) * 60;

			},
			h(hour) {

				return tick.m(hour) * 60;

			},
			tps: 20,
			tpm: 20 * 60,
			tph: 20 * 60 * 60
		}

	},
	mc8_writefile(add, byp, du) {

		mc8.file[byp].value += mc8.trigger_prefix;

		mc8.file[byp].value += mc8.execute.prefix;

		mc8.file[byp].value += add;

		mc8.fs.writeFileSync(mc8.cfn, mc8.file[byp].value);

		if(mc8.execute.preprefix) {

			mc8.execute.prefix = mc8.execute.preprefix;
			mc8.execute.preprefix = false;

		}

	},
	mc8_newfile() {

		let byp = 'new'
		for(let i = 0; i < mc8.file.length; i++) {

			if(mc8.cfn == mc8.file[i].name) {

				byp = i;

			}

		}

		if(byp > -1) {

			return byp;

		} else {

			byp = mc8.file.length;
			mc8.file.push({name: mc8.cfn, value: '#mc8\n'});
			return byp;

		}

	},
	util: {

		entity: [
		    'minecraft:area_effect_cloud',
		    'minecraft:armor_stand',
		    'minecraft:arrow',
		    'minecraft:bat',
		    'minecraft:bee',
		    'minecraft:blaze',
		    'minecraft:boat',
		    'minecraft:cat',
		    'minecraft:cave_spider',
		    'minecraft:chest_minecart',
		    'minecraft:chicken',
		    'minecraft:cod',
		    'minecraft:command_block_minecart',
		    'minecraft:cow',
		    'minecraft:creeper',
		    'minecraft:dolphin',
		    'minecraft:donkey',
		    'minecraft:dragon_fireball',
		    'minecraft:drowned',
		    'minecraft:egg',
		    'minecraft:elder_guardian',
		    'minecraft:end_crystal',
		    'minecraft:ender_dragon',
		    'minecraft:ender_pearl',
		    'minecraft:enderman',
		    'minecraft:endermite',
		    'minecraft:evoker',
		    'minecraft:evoker_fangs',
		    'minecraft:experience_bottle',
		    'minecraft:experience_orb',
		    'minecraft:eye_of_ender',
		    'minecraft:falling_block',
		    'minecraft:fireball',
		    'minecraft:firework_rocket',
		    'minecraft:fox',
		    'minecraft:furnace_minecart',
		    'minecraft:ghast',
		    'minecraft:giant',
		    'minecraft:guardian',
		    'minecraft:hoglin',
		    'minecraft:hopper_minecart',
		    'minecraft:horse',
		    'minecraft:husk',
		    'minecraft:illusioner',
		    'minecraft:iron_golem',
		    'minecraft:item',
		    'minecraft:item_frame',
		    'minecraft:leash_knot',
		    'minecraft:lightning_bolt',
		    'minecraft:llama',
		    'minecraft:llama_spit',
		    'minecraft:magma_cube',
		    'minecraft:minecart',
		    'minecraft:mooshroom',
		    'minecraft:mule',
		    'minecraft:ocelot',
		    'minecraft:painting',
		    'minecraft:panda',
		    'minecraft:parrot',
		    'minecraft:phantom',
		    'minecraft:pig',
		    'minecraft:piglin',
		    'minecraft:piglin_brute',
		    'minecraft:pillager',
		    'minecraft:polar_bear',
		    'minecraft:potion',
		    'minecraft:pufferfish',
		    'minecraft:rabbit',
		    'minecraft:ravager',
		    'minecraft:salmon',
		    'minecraft:sheep',
		    'minecraft:shulker',
		    'minecraft:shulker_bullet',
		    'minecraft:silverfish',
		    'minecraft:skeleton',
		    'minecraft:skeleton_horse',
		    'minecraft:slime',
		    'minecraft:small_fireball',
		    'minecraft:snow_golem',
		    'minecraft:snowball',
		    'minecraft:spawner_minecart',
		    'minecraft:spectral_arrow',
		    'minecraft:spider',
		    'minecraft:squid',
		    'minecraft:stray',
		    'minecraft:strider',
		    'minecraft:tnt',
		    'minecraft:tnt_minecart',
		    'minecraft:trader_llama',
		    'minecraft:trident',
		    'minecraft:tropical_fish',
		    'minecraft:turtle',
		    'minecraft:vex',
		    'minecraft:villager',
		    'minecraft:vindicator',
		    'minecraft:wandering_trader',
		    'minecraft:witch',
		    'minecraft:wither',
		    'minecraft:wither_skeleton',
		    'minecraft:wither_skull',
		    'minecraft:wolf',
		    'minecraft:zoglin',
		    'minecraft:zombie',
		    'minecraft:zombie_horse',
		    'minecraft:zombified_piglin',
		    'minecraft:zombie_villager'
		],
		item: [
			'minecraft:acacia_boat',
			'minecraft:acacia_button',
			'minecraft:acacia_door',
			'minecraft:acacia_fence',
			'minecraft:acacia_fence_gate',
			'minecraft:acacia_leaves',
			'minecraft:acacia_log',
			'minecraft:acacia_planks',
			'minecraft:acacia_pressure_plate',
			'minecraft:acacia_sapling',
			'minecraft:acacia_sign',
			'minecraft:acacia_slab',
			'minecraft:acacia_stairs',
			'minecraft:acacia_trapdoor',
			'minecraft:acacia_wood',
			'minecraft:activator_rail',
			'minecraft:air',
			'minecraft:allium',
			'minecraft:ancient_debris',
			'minecraft:andesite',
			'minecraft:andesite_slab',
			'minecraft:andesite_stairs',
			'minecraft:andesite_wall',
			'minecraft:anvil',
			'minecraft:apple',
			'minecraft:armor_stand',
			'minecraft:arrow',
			'minecraft:azure_bluet',
			'minecraft:baked_potato',
			'minecraft:bamboo',
			'minecraft:barrel',
			'minecraft:barrier',
			'minecraft:basalt',
			'minecraft:bat_spawn_egg',
			'minecraft:beacon',
			'minecraft:bedrock',
			'minecraft:bee_nest',
			'minecraft:bee_spawn_egg',
			'minecraft:beef',
			'minecraft:beehive',
			'minecraft:beetroot',
			'minecraft:beetroot_seeds',
			'minecraft:beetroot_soup',
			'minecraft:bell',
			'minecraft:birch_boat',
			'minecraft:birch_button',
			'minecraft:birch_door',
			'minecraft:birch_fence',
			'minecraft:birch_fence_gate',
			'minecraft:birch_leaves',
			'minecraft:birch_log',
			'minecraft:birch_planks',
			'minecraft:birch_pressure_plate',
			'minecraft:birch_sapling',
			'minecraft:birch_sign',
			'minecraft:birch_slab',
			'minecraft:birch_stairs',
			'minecraft:birch_trapdoor',
			'minecraft:birch_wood',
			'minecraft:black_banner',
			'minecraft:black_bed',
			'minecraft:black_carpet',
			'minecraft:black_concrete',
			'minecraft:black_concrete_powder',
			'minecraft:black_dye',
			'minecraft:black_glazed_terracotta',
			'minecraft:black_shulker_box',
			'minecraft:black_stained_glass',
			'minecraft:black_stained_glass_pane',
			'minecraft:black_terracotta',
			'minecraft:black_wool',
			'minecraft:blackstone',
			'minecraft:blackstone_slab',
			'minecraft:blackstone_stairs',
			'minecraft:blackstone_wall',
			'minecraft:blast_furnace',
			'minecraft:blaze_powder',
			'minecraft:blaze_rod',
			'minecraft:blaze_spawn_egg',
			'minecraft:blue_banner',
			'minecraft:blue_bed',
			'minecraft:blue_carpet',
			'minecraft:blue_concrete',
			'minecraft:blue_concrete_powder',
			'minecraft:blue_dye',
			'minecraft:blue_glazed_terracotta',
			'minecraft:blue_ice',
			'minecraft:blue_orchid',
			'minecraft:blue_shulker_box',
			'minecraft:blue_stained_glass',
			'minecraft:blue_stained_glass_pane',
			'minecraft:blue_terracotta',
			'minecraft:blue_wool',
			'minecraft:bone',
			'minecraft:bone_block',
			'minecraft:bone_meal',
			'minecraft:book',
			'minecraft:bookshelf',
			'minecraft:bow',
			'minecraft:bowl',
			'minecraft:brain_coral',
			'minecraft:brain_coral_block',
			'minecraft:brain_coral_fan',
			'minecraft:bread',
			'minecraft:brewing_stand',
			'minecraft:brick',
			'minecraft:brick_slab',
			'minecraft:brick_stairs',
			'minecraft:brick_wall',
			'minecraft:bricks',
			'minecraft:brown_banner',
			'minecraft:brown_bed',
			'minecraft:brown_carpet',
			'minecraft:brown_concrete',
			'minecraft:brown_concrete_powder',
			'minecraft:brown_dye',
			'minecraft:brown_glazed_terracotta',
			'minecraft:brown_mushroom',
			'minecraft:brown_mushroom_block',
			'minecraft:brown_shulker_box',
			'minecraft:brown_stained_glass',
			'minecraft:brown_stained_glass_pane',
			'minecraft:brown_terracotta',
			'minecraft:brown_wool',
			'minecraft:bubble_coral',
			'minecraft:bubble_coral_block',
			'minecraft:bubble_coral_fan',
			'minecraft:bucket',
			'minecraft:cactus',
			'minecraft:cake',
			'minecraft:campfire',
			'minecraft:carrot',
			'minecraft:carrot_on_a_stick',
			'minecraft:cartography_table',
			'minecraft:carved_pumpkin',
			'minecraft:cat_spawn_egg',
			'minecraft:cauldron',
			'minecraft:cave_spider_spawn_egg',
			'minecraft:chain',
			'minecraft:chain_command_block',
			'minecraft:chainmail_boots',
			'minecraft:chainmail_chestplate',
			'minecraft:chainmail_helmet',
			'minecraft:chainmail_leggings',
			'minecraft:charcoal',
			'minecraft:chest',
			'minecraft:chest_minecart',
			'minecraft:chicken',
			'minecraft:chicken_spawn_egg',
			'minecraft:chipped_anvil',
			'minecraft:chiseled_nether_bricks',
			'minecraft:chiseled_polished_blackstone',
			'minecraft:chiseled_quartz_block',
			'minecraft:chiseled_red_sandstone',
			'minecraft:chiseled_sandstone',
			'minecraft:chiseled_stone_bricks',
			'minecraft:chorus_flower',
			'minecraft:chorus_fruit',
			'minecraft:chorus_plant',
			'minecraft:clay',
			'minecraft:clay_ball',
			'minecraft:clock',
			'minecraft:coal',
			'minecraft:coal_block',
			'minecraft:coal_ore',
			'minecraft:coarse_dirt',
			'minecraft:cobblestone',
			'minecraft:cobblestone_slab',
			'minecraft:cobblestone_stairs',
			'minecraft:cobblestone_wall',
			'minecraft:cobweb',
			'minecraft:cocoa_beans',
			'minecraft:cod',
			'minecraft:cod_bucket',
			'minecraft:cod_spawn_egg',
			'minecraft:command_block',
			'minecraft:command_block_minecart',
			'minecraft:comparator',
			'minecraft:compass',
			'minecraft:composter',
			'minecraft:conduit',
			'minecraft:cooked_beef',
			'minecraft:cooked_chicken',
			'minecraft:cooked_cod',
			'minecraft:cooked_mutton',
			'minecraft:cooked_porkchop',
			'minecraft:cooked_rabbit',
			'minecraft:cooked_salmon',
			'minecraft:cookie',
			'minecraft:cornflower',
			'minecraft:cow_spawn_egg',
			'minecraft:cracked_nether_bricks',
			'minecraft:cracked_polished_blackstone_bricks',
			'minecraft:cracked_stone_bricks',
			'minecraft:crafting_table',
			'minecraft:creeper_banner_pattern',
			'minecraft:creeper_head',
			'minecraft:creeper_spawn_egg',
			'minecraft:crimson_button',
			'minecraft:crimson_door',
			'minecraft:crimson_fence',
			'minecraft:crimson_fence_gate',
			'minecraft:crimson_fungus',
			'minecraft:crimson_hyphae',
			'minecraft:crimson_nylium',
			'minecraft:crimson_planks',
			'minecraft:crimson_pressure_plate',
			'minecraft:crimson_roots',
			'minecraft:crimson_sign',
			'minecraft:crimson_slab',
			'minecraft:crimson_stairs',
			'minecraft:crimson_stem',
			'minecraft:crimson_trapdoor',
			'minecraft:crossbow',
			'minecraft:crying_obsidian',
			'minecraft:cut_red_sandstone',
			'minecraft:cut_red_sandstone_slab',
			'minecraft:cut_sandstone',
			'minecraft:cut_sandstone_slab',
			'minecraft:cyan_banner',
			'minecraft:cyan_bed',
			'minecraft:cyan_carpet',
			'minecraft:cyan_concrete',
			'minecraft:cyan_concrete_powder',
			'minecraft:cyan_dye',
			'minecraft:cyan_glazed_terracotta',
			'minecraft:cyan_shulker_box',
			'minecraft:cyan_stained_glass',
			'minecraft:cyan_stained_glass_pane',
			'minecraft:cyan_terracotta',
			'minecraft:cyan_wool',
			'minecraft:damaged_anvil',
			'minecraft:dandelion',
			'minecraft:dark_oak_boat',
			'minecraft:dark_oak_button',
			'minecraft:dark_oak_door',
			'minecraft:dark_oak_fence',
			'minecraft:dark_oak_fence_gate',
			'minecraft:dark_oak_leaves',
			'minecraft:dark_oak_log',
			'minecraft:dark_oak_planks',
			'minecraft:dark_oak_pressure_plate',
			'minecraft:dark_oak_sapling',
			'minecraft:dark_oak_sign',
			'minecraft:dark_oak_slab',
			'minecraft:dark_oak_stairs',
			'minecraft:dark_oak_trapdoor',
			'minecraft:dark_oak_wood',
			'minecraft:dark_prismarine',
			'minecraft:dark_prismarine_slab',
			'minecraft:dark_prismarine_stairs',
			'minecraft:daylight_detector',
			'minecraft:dead_brain_coral',
			'minecraft:dead_brain_coral_block',
			'minecraft:dead_brain_coral_fan',
			'minecraft:dead_bubble_coral',
			'minecraft:dead_bubble_coral_block',
			'minecraft:dead_bubble_coral_fan',
			'minecraft:dead_bush',
			'minecraft:dead_fire_coral',
			'minecraft:dead_fire_coral_block',
			'minecraft:dead_fire_coral_fan',
			'minecraft:dead_horn_coral',
			'minecraft:dead_horn_coral_block',
			'minecraft:dead_horn_coral_fan',
			'minecraft:dead_tube_coral',
			'minecraft:dead_tube_coral_block',
			'minecraft:dead_tube_coral_fan',
			'minecraft:detector_rail',
			'minecraft:diamond',
			'minecraft:diamond_axe',
			'minecraft:diamond_block',
			'minecraft:diamond_boots',
			'minecraft:diamond_chestplate',
			'minecraft:diamond_helmet',
			'minecraft:diamond_hoe',
			'minecraft:diamond_horse_armor',
			'minecraft:diamond_leggings',
			'minecraft:diamond_ore',
			'minecraft:diamond_pickaxe',
			'minecraft:diamond_shovel',
			'minecraft:diamond_sword',
			'minecraft:diorite',
			'minecraft:diorite_slab',
			'minecraft:diorite_stairs',
			'minecraft:diorite_wall',
			'minecraft:dirt',
			'minecraft:dispenser',
			'minecraft:dolphin_spawn_egg',
			'minecraft:donkey_spawn_egg',
			'minecraft:dragon_breath',
			'minecraft:dragon_egg',
			'minecraft:dragon_head',
			'minecraft:dried_kelp',
			'minecraft:dried_kelp_block',
			'minecraft:dropper',
			'minecraft:drowned_spawn_egg',
			'minecraft:egg',
			'minecraft:elder_guardian_spawn_egg',
			'minecraft:elytra',
			'minecraft:emerald',
			'minecraft:emerald_block',
			'minecraft:emerald_ore',
			'minecraft:enchanted_book',
			'minecraft:enchanted_golden_apple',
			'minecraft:enchanting_table',
			'minecraft:end_crystal',
			'minecraft:end_portal_frame',
			'minecraft:end_rod',
			'minecraft:end_stone',
			'minecraft:end_stone_brick_slab',
			'minecraft:end_stone_brick_stairs',
			'minecraft:end_stone_brick_wall',
			'minecraft:end_stone_bricks',
			'minecraft:ender_chest',
			'minecraft:ender_eye',
			'minecraft:ender_pearl',
			'minecraft:enderman_spawn_egg',
			'minecraft:endermite_spawn_egg',
			'minecraft:evoker_spawn_egg',
			'minecraft:experience_bottle',
			'minecraft:farmland',
			'minecraft:feather',
			'minecraft:fermented_spider_eye',
			'minecraft:fern',
			'minecraft:filled_map',
			'minecraft:fire_charge',
			'minecraft:fire_coral',
			'minecraft:fire_coral_block',
			'minecraft:fire_coral_fan',
			'minecraft:firework_rocket',
			'minecraft:firework_star',
			'minecraft:fishing_rod',
			'minecraft:fletching_table',
			'minecraft:flint',
			'minecraft:flint_and_steel',
			'minecraft:flower_banner_pattern',
			'minecraft:flower_pot',
			'minecraft:fox_spawn_egg',
			'minecraft:furnace',
			'minecraft:furnace_minecart',
			'minecraft:ghast_spawn_egg',
			'minecraft:ghast_tear',
			'minecraft:gilded_blackstone',
			'minecraft:glass',
			'minecraft:glass_bottle',
			'minecraft:glass_pane',
			'minecraft:glistering_melon_slice',
			'minecraft:globe_banner_pattern',
			'minecraft:glowstone',
			'minecraft:glowstone_dust',
			'minecraft:gold_block',
			'minecraft:gold_ingot',
			'minecraft:gold_nugget',
			'minecraft:gold_ore',
			'minecraft:golden_apple',
			'minecraft:golden_axe',
			'minecraft:golden_boots',
			'minecraft:golden_carrot',
			'minecraft:golden_chestplate',
			'minecraft:golden_helmet',
			'minecraft:golden_hoe',
			'minecraft:golden_horse_armor',
			'minecraft:golden_leggings',
			'minecraft:golden_pickaxe',
			'minecraft:golden_shovel',
			'minecraft:golden_sword',
			'minecraft:granite',
			'minecraft:granite_slab',
			'minecraft:granite_stairs',
			'minecraft:granite_wall',
			'minecraft:grass',
			'minecraft:grass_block',
			'minecraft:grass_path',
			'minecraft:gravel',
			'minecraft:gray_banner',
			'minecraft:gray_bed',
			'minecraft:gray_carpet',
			'minecraft:gray_concrete',
			'minecraft:gray_concrete_powder',
			'minecraft:gray_dye',
			'minecraft:gray_glazed_terracotta',
			'minecraft:gray_shulker_box',
			'minecraft:gray_stained_glass',
			'minecraft:gray_stained_glass_pane',
			'minecraft:gray_terracotta',
			'minecraft:gray_wool',
			'minecraft:green_banner',
			'minecraft:green_bed',
			'minecraft:green_carpet',
			'minecraft:green_concrete',
			'minecraft:green_concrete_powder',
			'minecraft:green_dye',
			'minecraft:green_glazed_terracotta',
			'minecraft:green_shulker_box',
			'minecraft:green_stained_glass',
			'minecraft:green_stained_glass_pane',
			'minecraft:green_terracotta',
			'minecraft:green_wool',
			'minecraft:grindstone',
			'minecraft:guardian_spawn_egg',
			'minecraft:gunpowder',
			'minecraft:hay_block',
			'minecraft:heart_of_the_sea',
			'minecraft:heavy_weighted_pressure_plate',
			'minecraft:hoglin_spawn_egg',
			'minecraft:honey_block',
			'minecraft:honey_bottle',
			'minecraft:honeycomb',
			'minecraft:honeycomb_block',
			'minecraft:hopper',
			'minecraft:hopper_minecart',
			'minecraft:horn_coral',
			'minecraft:horn_coral_block',
			'minecraft:horn_coral_fan',
			'minecraft:horse_spawn_egg',
			'minecraft:husk_spawn_egg',
			'minecraft:ice',
			'minecraft:infested_chiseled_stone_bricks',
			'minecraft:infested_cobblestone',
			'minecraft:infested_cracked_stone_bricks',
			'minecraft:infested_mossy_stone_bricks',
			'minecraft:infested_stone',
			'minecraft:infested_stone_bricks',
			'minecraft:ink_sac',
			'minecraft:iron_axe',
			'minecraft:iron_bars',
			'minecraft:iron_block',
			'minecraft:iron_boots',
			'minecraft:iron_chestplate',
			'minecraft:iron_door',
			'minecraft:iron_helmet',
			'minecraft:iron_hoe',
			'minecraft:iron_horse_armor',
			'minecraft:iron_ingot',
			'minecraft:iron_leggings',
			'minecraft:iron_nugget',
			'minecraft:iron_ore',
			'minecraft:iron_pickaxe',
			'minecraft:iron_shovel',
			'minecraft:iron_sword',
			'minecraft:iron_trapdoor',
			'minecraft:item_frame',
			'minecraft:jack_o_lantern',
			'minecraft:jukebox',
			'minecraft:jungle_boat',
			'minecraft:jungle_button',
			'minecraft:jungle_door',
			'minecraft:jungle_fence',
			'minecraft:jungle_fence_gate',
			'minecraft:jungle_leaves',
			'minecraft:jungle_log',
			'minecraft:jungle_planks',
			'minecraft:jungle_pressure_plate',
			'minecraft:jungle_sapling',
			'minecraft:jungle_sign',
			'minecraft:jungle_slab',
			'minecraft:jungle_stairs',
			'minecraft:jungle_trapdoor',
			'minecraft:jungle_wood',
			'minecraft:kelp',
			'minecraft:ladder',
			'minecraft:lantern',
			'minecraft:lapis_block',
			'minecraft:lapis_lazuli',
			'minecraft:lapis_ore',
			'minecraft:large_fern',
			'minecraft:lava',
			'minecraft:lava_bucket',
			'minecraft:lead',
			'minecraft:leather',
			'minecraft:leather_boots',
			'minecraft:leather_chestplate',
			'minecraft:leather_helmet',
			'minecraft:leather_horse_armor',
			'minecraft:leather_leggings',
			'minecraft:lectern',
			'minecraft:lever',
			'minecraft:light_blue_banner',
			'minecraft:light_blue_bed',
			'minecraft:light_blue_carpet',
			'minecraft:light_blue_concrete',
			'minecraft:light_blue_concrete_powder',
			'minecraft:light_blue_dye',
			'minecraft:light_blue_glazed_terracotta',
			'minecraft:light_blue_shulker_box',
			'minecraft:light_blue_stained_glass',
			'minecraft:light_blue_stained_glass_pane',
			'minecraft:light_blue_terracotta',
			'minecraft:light_blue_wool',
			'minecraft:light_gray_banner',
			'minecraft:light_gray_bed',
			'minecraft:light_gray_carpet',
			'minecraft:light_gray_concrete',
			'minecraft:light_gray_concrete_powder',
			'minecraft:light_gray_dye',
			'minecraft:light_gray_glazed_terracotta',
			'minecraft:light_gray_shulker_box',
			'minecraft:light_gray_stained_glass',
			'minecraft:light_gray_stained_glass_pane',
			'minecraft:light_gray_terracotta',
			'minecraft:light_gray_wool',
			'minecraft:light_weighted_pressure_plate',
			'minecraft:lilac',
			'minecraft:lily_of_the_valley',
			'minecraft:lily_pad',
			'minecraft:lime_banner',
			'minecraft:lime_bed',
			'minecraft:lime_carpet',
			'minecraft:lime_concrete',
			'minecraft:lime_concrete_powder',
			'minecraft:lime_dye',
			'minecraft:lime_glazed_terracotta',
			'minecraft:lime_shulker_box',
			'minecraft:lime_stained_glass',
			'minecraft:lime_stained_glass_pane',
			'minecraft:lime_terracotta',
			'minecraft:lime_wool',
			'minecraft:lingering_potion',
			'minecraft:llama_spawn_egg',
			'minecraft:lodestone',
			'minecraft:loom',
			'minecraft:magenta_banner',
			'minecraft:magenta_bed',
			'minecraft:magenta_carpet',
			'minecraft:magenta_concrete',
			'minecraft:magenta_concrete_powder',
			'minecraft:magenta_dye',
			'minecraft:magenta_glazed_terracotta',
			'minecraft:magenta_shulker_box',
			'minecraft:magenta_stained_glass',
			'minecraft:magenta_stained_glass_pane',
			'minecraft:magenta_terracotta',
			'minecraft:magenta_wool',
			'minecraft:magma_block',
			'minecraft:magma_cream',
			'minecraft:magma_cube_spawn_egg',
			'minecraft:map',
			'minecraft:melon',
			'minecraft:melon_seeds',
			'minecraft:melon_slice',
			'minecraft:milk_bucket',
			'minecraft:minecart',
			'minecraft:mojang_banner_pattern',
			'minecraft:mooshroom_spawn_egg',
			'minecraft:mossy_cobblestone',
			'minecraft:mossy_cobblestone_slab',
			'minecraft:mossy_cobblestone_stairs',
			'minecraft:mossy_cobblestone_wall',
			'minecraft:mossy_stone_brick_slab',
			'minecraft:mossy_stone_brick_stairs',
			'minecraft:mossy_stone_brick_wall',
			'minecraft:mossy_stone_bricks',
			'minecraft:mule_spawn_egg',
			'minecraft:mushroom_stem',
			'minecraft:mushroom_stew',
			'minecraft:music_disc_11',
			'minecraft:music_disc_13',
			'minecraft:music_disc_blocks',
			'minecraft:music_disc_cat',
			'minecraft:music_disc_chirp',
			'minecraft:music_disc_far',
			'minecraft:music_disc_mall',
			'minecraft:music_disc_mellohi',
			'minecraft:music_disc_pigstep',
			'minecraft:music_disc_stal',
			'minecraft:music_disc_strad',
			'minecraft:music_disc_wait',
			'minecraft:music_disc_ward',
			'minecraft:mutton',
			'minecraft:mycelium',
			'minecraft:name_tag',
			'minecraft:nautilus_shell',
			'minecraft:nether_brick',
			'minecraft:nether_brick_fence',
			'minecraft:nether_brick_slab',
			'minecraft:nether_brick_stairs',
			'minecraft:nether_brick_wall',
			'minecraft:nether_bricks',
			'minecraft:nether_gold_ore',
			'minecraft:nether_quartz_ore',
			'minecraft:nether_sprouts',
			'minecraft:nether_star',
			'minecraft:nether_wart',
			'minecraft:nether_wart_block',
			'minecraft:netherite_axe',
			'minecraft:netherite_block',
			'minecraft:netherite_boots',
			'minecraft:netherite_chestplate',
			'minecraft:netherite_helmet',
			'minecraft:netherite_hoe',
			'minecraft:netherite_ingot',
			'minecraft:netherite_leggings',
			'minecraft:netherite_pickaxe',
			'minecraft:netherite_scrap',
			'minecraft:netherite_shovel',
			'minecraft:netherite_sword',
			'minecraft:netherrack',
			'minecraft:note_block',
			'minecraft:oak_boat',
			'minecraft:oak_button',
			'minecraft:oak_door',
			'minecraft:oak_fence',
			'minecraft:oak_fence_gate',
			'minecraft:oak_leaves',
			'minecraft:oak_log',
			'minecraft:oak_planks',
			'minecraft:oak_pressure_plate',
			'minecraft:oak_sapling',
			'minecraft:oak_sign',
			'minecraft:oak_slab',
			'minecraft:oak_stairs',
			'minecraft:oak_trapdoor',
			'minecraft:oak_wood',
			'minecraft:observer',
			'minecraft:obsidian',
			'minecraft:ocelot_spawn_egg',
			'minecraft:orange_banner',
			'minecraft:orange_bed',
			'minecraft:orange_carpet',
			'minecraft:orange_concrete',
			'minecraft:orange_concrete_powder',
			'minecraft:orange_dye',
			'minecraft:orange_glazed_terracotta',
			'minecraft:orange_shulker_box',
			'minecraft:orange_stained_glass',
			'minecraft:orange_stained_glass_pane',
			'minecraft:orange_terracotta',
			'minecraft:orange_tulip',
			'minecraft:orange_wool',
			'minecraft:oxeye_daisy',
			'minecraft:packed_ice',
			'minecraft:painting',
			'minecraft:panda_spawn_egg',
			'minecraft:paper',
			'minecraft:parrot_spawn_egg',
			'minecraft:peony',
			'minecraft:petrified_oak_slab',
			'minecraft:phantom_membrane',
			'minecraft:phantom_spawn_egg',
			'minecraft:pig_spawn_egg',
			'minecraft:piglin_banner_pattern',
			'minecraft:piglin_brute_spawn_egg',
			'minecraft:piglin_spawn_egg',
			'minecraft:pillager_spawn_egg',
			'minecraft:pink_banner',
			'minecraft:pink_bed',
			'minecraft:pink_carpet',
			'minecraft:pink_concrete',
			'minecraft:pink_concrete_powder',
			'minecraft:pink_dye',
			'minecraft:pink_glazed_terracotta',
			'minecraft:pink_shulker_box',
			'minecraft:pink_stained_glass',
			'minecraft:pink_stained_glass_pane',
			'minecraft:pink_terracotta',
			'minecraft:pink_tulip',
			'minecraft:pink_wool',
			'minecraft:piston',
			'minecraft:player_head',
			'minecraft:podzol',
			'minecraft:poisonous_potato',
			'minecraft:polar_bear_spawn_egg',
			'minecraft:polished_andesite',
			'minecraft:polished_andesite_slab',
			'minecraft:polished_andesite_stairs',
			'minecraft:polished_basalt',
			'minecraft:polished_blackstone',
			'minecraft:polished_blackstone_brick_slab',
			'minecraft:polished_blackstone_brick_stairs',
			'minecraft:polished_blackstone_brick_wall',
			'minecraft:polished_blackstone_bricks',
			'minecraft:polished_blackstone_button',
			'minecraft:polished_blackstone_pressure_plate',
			'minecraft:polished_blackstone_slab',
			'minecraft:polished_blackstone_stairs',
			'minecraft:polished_blackstone_wall',
			'minecraft:polished_diorite',
			'minecraft:polished_diorite_slab',
			'minecraft:polished_diorite_stairs',
			'minecraft:polished_granite',
			'minecraft:polished_granite_slab',
			'minecraft:polished_granite_stairs',
			'minecraft:popped_chorus_fruit',
			'minecraft:poppy',
			'minecraft:porkchop',
			'minecraft:potato',
			'minecraft:potion',
			'minecraft:powered_rail',
			'minecraft:prismarine',
			'minecraft:prismarine_brick_slab',
			'minecraft:prismarine_brick_stairs',
			'minecraft:prismarine_bricks',
			'minecraft:prismarine_crystals',
			'minecraft:prismarine_shard',
			'minecraft:prismarine_slab',
			'minecraft:prismarine_stairs',
			'minecraft:prismarine_wall',
			'minecraft:pufferfish',
			'minecraft:pufferfish_bucket',
			'minecraft:pufferfish_spawn_egg',
			'minecraft:pumpkin',
			'minecraft:pumpkin_pie',
			'minecraft:pumpkin_seeds',
			'minecraft:purple_banner',
			'minecraft:purple_bed',
			'minecraft:purple_carpet',
			'minecraft:purple_concrete',
			'minecraft:purple_concrete_powder',
			'minecraft:purple_dye',
			'minecraft:purple_glazed_terracotta',
			'minecraft:purple_shulker_box',
			'minecraft:purple_stained_glass',
			'minecraft:purple_stained_glass_pane',
			'minecraft:purple_terracotta',
			'minecraft:purple_wool',
			'minecraft:purpur_block',
			'minecraft:purpur_pillar',
			'minecraft:purpur_slab',
			'minecraft:purpur_stairs',
			'minecraft:quartz',
			'minecraft:quartz_block',
			'minecraft:quartz_bricks',
			'minecraft:quartz_pillar',
			'minecraft:quartz_slab',
			'minecraft:quartz_stairs',
			'minecraft:rabbit',
			'minecraft:rabbit_foot',
			'minecraft:rabbit_hide',
			'minecraft:rabbit_spawn_egg',
			'minecraft:rabbit_stew',
			'minecraft:rail',
			'minecraft:ravager_spawn_egg',
			'minecraft:red_banner',
			'minecraft:red_bed',
			'minecraft:red_carpet',
			'minecraft:red_concrete',
			'minecraft:red_concrete_powder',
			'minecraft:red_dye',
			'minecraft:red_glazed_terracotta',
			'minecraft:red_mushroom',
			'minecraft:red_mushroom_block',
			'minecraft:red_nether_brick_slab',
			'minecraft:red_nether_brick_stairs',
			'minecraft:red_nether_brick_wall',
			'minecraft:red_nether_bricks',
			'minecraft:red_sand',
			'minecraft:red_sandstone',
			'minecraft:red_sandstone_slab',
			'minecraft:red_sandstone_stairs',
			'minecraft:red_sandstone_wall',
			'minecraft:red_shulker_box',
			'minecraft:red_stained_glass',
			'minecraft:red_stained_glass_pane',
			'minecraft:red_terracotta',
			'minecraft:red_tulip',
			'minecraft:red_wool',
			'minecraft:redstone',
			'minecraft:redstone_block',
			'minecraft:redstone_lamp',
			'minecraft:redstone_ore',
			'minecraft:redstone_torch',
			'minecraft:repeater',
			'minecraft:repeating_command_block',
			'minecraft:respawn_anchor',
			'minecraft:rose_bush',
			'minecraft:rotten_flesh',
			'minecraft:saddle',
			'minecraft:salmon',
			'minecraft:salmon_bucket',
			'minecraft:salmon_spawn_egg',
			'minecraft:sand',
			'minecraft:sandstone',
			'minecraft:sandstone_slab',
			'minecraft:sandstone_stairs',
			'minecraft:sandstone_wall',
			'minecraft:scaffolding',
			'minecraft:scute',
			'minecraft:sea_lantern',
			'minecraft:sea_pickle',
			'minecraft:seagrass',
			'minecraft:shears',
			'minecraft:sheep_spawn_egg',
			'minecraft:shield',
			'minecraft:shroomlight',
			'minecraft:shulker_box',
			'minecraft:shulker_shell',
			'minecraft:shulker_spawn_egg',
			'minecraft:silverfish_spawn_egg',
			'minecraft:skeleton_horse_spawn_egg',
			'minecraft:skeleton_skull',
			'minecraft:skeleton_spawn_egg',
			'minecraft:skull_banner_pattern',
			'minecraft:slime_ball',
			'minecraft:slime_block',
			'minecraft:slime_spawn_egg',
			'minecraft:smithing_table',
			'minecraft:smoker',
			'minecraft:smooth_quartz',
			'minecraft:smooth_quartz_slab',
			'minecraft:smooth_quartz_stairs',
			'minecraft:smooth_red_sandstone',
			'minecraft:smooth_red_sandstone_slab',
			'minecraft:smooth_red_sandstone_stairs',
			'minecraft:smooth_sandstone',
			'minecraft:smooth_sandstone_slab',
			'minecraft:smooth_sandstone_stairs',
			'minecraft:smooth_stone',
			'minecraft:smooth_stone_slab',
			'minecraft:snow',
			'minecraft:snow_block',
			'minecraft:snowball',
			'minecraft:soul_campfire',
			'minecraft:soul_lantern',
			'minecraft:soul_sand',
			'minecraft:soul_soil',
			'minecraft:soul_torch',
			'minecraft:spawner',
			'minecraft:spectral_arrow',
			'minecraft:spider_eye',
			'minecraft:spider_spawn_egg',
			'minecraft:splash_potion',
			'minecraft:sponge',
			'minecraft:spruce_boat',
			'minecraft:spruce_button',
			'minecraft:spruce_door',
			'minecraft:spruce_fence',
			'minecraft:spruce_fence_gate',
			'minecraft:spruce_leaves',
			'minecraft:spruce_log',
			'minecraft:spruce_planks',
			'minecraft:spruce_pressure_plate',
			'minecraft:spruce_sapling',
			'minecraft:spruce_sign',
			'minecraft:spruce_slab',
			'minecraft:spruce_stairs',
			'minecraft:spruce_trapdoor',
			'minecraft:spruce_wood',
			'minecraft:squid_spawn_egg',
			'minecraft:stick',
			'minecraft:sticky_piston',
			'minecraft:stone',
			'minecraft:stone_axe',
			'minecraft:stone_brick_slab',
			'minecraft:stone_brick_stairs',
			'minecraft:stone_brick_wall',
			'minecraft:stone_bricks',
			'minecraft:stone_button',
			'minecraft:stone_hoe',
			'minecraft:stone_pickaxe',
			'minecraft:stone_pressure_plate',
			'minecraft:stone_shovel',
			'minecraft:stone_slab',
			'minecraft:stone_stairs',
			'minecraft:stone_sword',
			'minecraft:stonecutter',
			'minecraft:stray_spawn_egg',
			'minecraft:strider_spawn_egg',
			'minecraft:string',
			'minecraft:stripped_acacia_log',
			'minecraft:stripped_acacia_wood',
			'minecraft:stripped_birch_log',
			'minecraft:stripped_birch_wood',
			'minecraft:stripped_crimson_hyphae',
			'minecraft:stripped_crimson_stem',
			'minecraft:stripped_dark_oak_log',
			'minecraft:stripped_dark_oak_wood',
			'minecraft:stripped_jungle_log',
			'minecraft:stripped_jungle_wood',
			'minecraft:stripped_oak_log',
			'minecraft:stripped_oak_wood',
			'minecraft:stripped_spruce_log',
			'minecraft:stripped_spruce_wood',
			'minecraft:stripped_warped_hyphae',
			'minecraft:stripped_warped_stem',
			'minecraft:structure_block',
			'minecraft:structure_void',
			'minecraft:sugar',
			'minecraft:sugar_cane',
			'minecraft:sunflower',
			'minecraft:suspicious_stew',
			'minecraft:sweet_berries',
			'minecraft:tall_grass',
			'minecraft:target',
			'minecraft:terracotta',
			'minecraft:tipped_arrow',
			'minecraft:tnt',
			'minecraft:tnt_minecart',
			'minecraft:torch',
			'minecraft:totem_of_undying',
			'minecraft:trader_llama_spawn_egg',
			'minecraft:trapped_chest',
			'minecraft:trident',
			'minecraft:tripwire_hook',
			'minecraft:tropical_fish',
			'minecraft:tropical_fish_bucket',
			'minecraft:tropical_fish_spawn_egg',
			'minecraft:tube_coral',
			'minecraft:tube_coral_block',
			'minecraft:tube_coral_fan',
			'minecraft:turtle_egg',
			'minecraft:turtle_helmet',
			'minecraft:turtle_spawn_egg',
			'minecraft:twisting_vines',
			'minecraft:vex_spawn_egg',
			'minecraft:villager_spawn_egg',
			'minecraft:vindicator_spawn_egg',
			'minecraft:vine',
			'minecraft:wandering_trader_spawn_egg',
			'minecraft:warped_button',
			'minecraft:warped_door',
			'minecraft:warped_fence',
			'minecraft:warped_fence_gate',
			'minecraft:warped_fungus',
			'minecraft:warped_fungus_on_a_stick',
			'minecraft:warped_hyphae',
			'minecraft:warped_nylium',
			'minecraft:warped_planks',
			'minecraft:warped_pressure_plate',
			'minecraft:warped_roots',
			'minecraft:warped_sign',
			'minecraft:warped_slab',
			'minecraft:warped_stairs',
			'minecraft:warped_stem',
			'minecraft:warped_trapdoor',
			'minecraft:warped_wart_block',
			'minecraft:water',
			'minecraft:water_bucket',
			'minecraft:weeping_vines',
			'minecraft:wet_sponge',
			'minecraft:wheat',
			'minecraft:wheat_seeds',
			'minecraft:white_banner',
			'minecraft:white_bed',
			'minecraft:white_carpet',
			'minecraft:white_concrete',
			'minecraft:white_concrete_powder',
			'minecraft:white_dye',
			'minecraft:white_glazed_terracotta',
			'minecraft:white_shulker_box',
			'minecraft:white_stained_glass',
			'minecraft:white_stained_glass_pane',
			'minecraft:white_terracotta',
			'minecraft:white_tulip',
			'minecraft:white_wool',
			'minecraft:witch_spawn_egg',
			'minecraft:wither_rose',
			'minecraft:wither_skeleton_skull',
			'minecraft:wither_skeleton_spawn_egg',
			'minecraft:wolf_spawn_egg',
			'minecraft:wooden_axe',
			'minecraft:wooden_hoe',
			'minecraft:wooden_pickaxe',
			'minecraft:wooden_shovel',
			'minecraft:wooden_sword',
			'minecraft:writable_book',
			'minecraft:written_book',
			'minecraft:yellow_banner',
			'minecraft:yellow_bed',
			'minecraft:yellow_carpet',
			'minecraft:yellow_concrete',
			'minecraft:yellow_concrete_powder',
			'minecraft:yellow_dye',
			'minecraft:yellow_glazed_terracotta',
			'minecraft:yellow_shulker_box',
			'minecraft:yellow_stained_glass',
			'minecraft:yellow_stained_glass_pane',
			'minecraft:yellow_terracotta',
			'minecraft:yellow_wool',
			'minecraft:zoglin_spawn_egg',
			'minecraft:zombie_head',
			'minecraft:zombie_horse_spawn_egg',
			'minecraft:zombie_spawn_egg',
			'minecraft:zombie_villager_spawn_egg',
			'minecraft:zombified_piglin_spawn_egg'
		],
		block: [
			'minecraft:air',
			'minecraft:stone',
			'minecraft:granite',
			'minecraft:polished_granite',
			'minecraft:diorite',
			'minecraft:polished_diorite',
			'minecraft:andesite',
			'minecraft:polished_andesite',
			'minecraft:grass_block',
			'minecraft:dirt',
			'minecraft:coarse_dirt',
			'minecraft:podzol',
			'minecraft:cobblestone',
			'minecraft:oak_planks',
			'minecraft:spruce_planks',
			'minecraft:birch_planks',
			'minecraft:jungle_planks',
			'minecraft:acacia_planks',
			'minecraft:dark_oak_planks',
			'minecraft:oak_sapling',
			'minecraft:spruce_sapling',
			'minecraft:birch_sapling',
			'minecraft:jungle_sapling',
			'minecraft:acacia_sapling',
			'minecraft:dark_oak_sapling',
			'minecraft:bedrock',
			'minecraft:sand',
			'minecraft:red_sand',
			'minecraft:gravel',
			'minecraft:gold_ore',
			'minecraft:iron_ore',
			'minecraft:coal_ore',
			'minecraft:oak_log',
			'minecraft:spruce_log',
			'minecraft:birch_log',
			'minecraft:jungle_log',
			'minecraft:acacia_log',
			'minecraft:dark_oak_log',
			'minecraft:stripped_oak_log',
			'minecraft:stripped_spruce_log',
			'minecraft:stripped_birch_log',
			'minecraft:stripped_jungle_log',
			'minecraft:stripped_acacia_log',
			'minecraft:stripped_dark_oak_log',
			'minecraft:stripped_oak_wood',
			'minecraft:stripped_spruce_wood',
			'minecraft:stripped_birch_wood',
			'minecraft:stripped_jungle_wood',
			'minecraft:stripped_acacia_wood',
			'minecraft:stripped_dark_oak_wood',
			'minecraft:oak_wood',
			'minecraft:spruce_wood',
			'minecraft:birch_wood',
			'minecraft:jungle_wood',
			'minecraft:acacia_wood',
			'minecraft:dark_oak_wood',
			'minecraft:oak_leaves',
			'minecraft:spruce_leaves',
			'minecraft:birch_leaves',
			'minecraft:jungle_leaves',
			'minecraft:acacia_leaves',
			'minecraft:dark_oak_leaves',
			'minecraft:sponge',
			'minecraft:wet_sponge',
			'minecraft:glass',
			'minecraft:lapis_ore',
			'minecraft:lapis_block',
			'minecraft:dispenser',
			'minecraft:sandstone',
			'minecraft:chiseled_sandstone',
			'minecraft:cut_sandstone',
			'minecraft:note_block',
			'minecraft:powered_rail',
			'minecraft:detector_rail',
			'minecraft:sticky_piston',
			'minecraft:cobweb',
			'minecraft:grass',
			'minecraft:fern',
			'minecraft:dead_bush',
			'minecraft:seagrass',
			'minecraft:sea_pickle',
			'minecraft:piston',
			'minecraft:white_wool',
			'minecraft:orange_wool',
			'minecraft:magenta_wool',
			'minecraft:light_blue_wool',
			'minecraft:yellow_wool',
			'minecraft:lime_wool',
			'minecraft:pink_wool',
			'minecraft:gray_wool',
			'minecraft:light_gray_wool',
			'minecraft:cyan_wool',
			'minecraft:purple_wool',
			'minecraft:blue_wool',
			'minecraft:brown_wool',
			'minecraft:green_wool',
			'minecraft:red_wool',
			'minecraft:black_wool',
			'minecraft:dandelion',
			'minecraft:poppy',
			'minecraft:blue_orchid',
			'minecraft:allium',
			'minecraft:azure_bluet',
			'minecraft:red_tulip',
			'minecraft:orange_tulip',
			'minecraft:white_tulip',
			'minecraft:pink_tulip',
			'minecraft:oxeye_daisy',
			'minecraft:brown_mushroom',
			'minecraft:red_mushroom',
			'minecraft:gold_block',
			'minecraft:iron_block',
			'minecraft:oak_slab',
			'minecraft:spruce_slab',
			'minecraft:birch_slab',
			'minecraft:jungle_slab',
			'minecraft:acacia_slab',
			'minecraft:dark_oak_slab',
			'minecraft:stone_slab',
			'minecraft:sandstone_slab',
			'minecraft:petrified_oak_slab',
			'minecraft:cobblestone_slab',
			'minecraft:brick_slab',
			'minecraft:stone_brick_slab',
			'minecraft:nether_brick_slab',
			'minecraft:quartz_slab',
			'minecraft:red_sandstone_slab',
			'minecraft:purpur_slab',
			'minecraft:prismarine_slab',
			'minecraft:prismarine_brick_slab',
			'minecraft:dark_prismarine_slab',
			'minecraft:smooth_quartz',
			'minecraft:smooth_red_sandstone',
			'minecraft:smooth_sandstone',
			'minecraft:smooth_stone',
			'minecraft:bricks',
			'minecraft:tnt',
			'minecraft:bookshelf',
			'minecraft:mossy_cobblestone',
			'minecraft:obsidian',
			'minecraft:torch',
			'minecraft:end_rod',
			'minecraft:chorus_plant',
			'minecraft:chorus_flower',
			'minecraft:purpur_block',
			'minecraft:purpur_pillar',
			'minecraft:purpur_stairs',
			'minecraft:spawner',
			'minecraft:oak_stairs',
			'minecraft:chest',
			'minecraft:diamond_ore',
			'minecraft:diamond_block',
			'minecraft:crafting_table',
			'minecraft:farmland',
			'minecraft:furnace',
			'minecraft:ladder',
			'minecraft:rail',
			'minecraft:cobblestone_stairs',
			'minecraft:lever',
			'minecraft:stone_pressure_plate',
			'minecraft:oak_pressure_plate',
			'minecraft:spruce_pressure_plate',
			'minecraft:birch_pressure_plate',
			'minecraft:jungle_pressure_plate',
			'minecraft:acacia_pressure_plate',
			'minecraft:dark_oak_pressure_plate',
			'minecraft:redstone_ore',
			'minecraft:redstone_torch',
			'minecraft:stone_button',
			'minecraft:snow',
			'minecraft:ice',
			'minecraft:snow_block',
			'minecraft:cactus',
			'minecraft:clay',
			'minecraft:jukebox',
			'minecraft:oak_fence',
			'minecraft:spruce_fence',
			'minecraft:birch_fence',
			'minecraft:jungle_fence',
			'minecraft:acacia_fence',
			'minecraft:dark_oak_fence',
			'minecraft:pumpkin',
			'minecraft:carved_pumpkin',
			'minecraft:netherrack',
			'minecraft:soul_sand',
			'minecraft:glowstone',
			'minecraft:jack_o_lantern',
			'minecraft:oak_trapdoor',
			'minecraft:spruce_trapdoor',
			'minecraft:birch_trapdoor',
			'minecraft:jungle_trapdoor',
			'minecraft:acacia_trapdoor',
			'minecraft:dark_oak_trapdoor',
			'minecraft:infested_stone',
			'minecraft:infested_cobblestone',
			'minecraft:infested_stone_bricks',
			'minecraft:infested_mossy_stone_bricks',
			'minecraft:infested_cracked_stone_bricks',
			'minecraft:infested_chiseled_stone_bricks',
			'minecraft:stone_bricks',
			'minecraft:mossy_stone_bricks',
			'minecraft:cracked_stone_bricks',
			'minecraft:chiseled_stone_bricks',
			'minecraft:brown_mushroom_block',
			'minecraft:red_mushroom_block',
			'minecraft:mushroom_stem',
			'minecraft:iron_bars',
			'minecraft:glass_pane',
			'minecraft:melon',
			'minecraft:vine',
			'minecraft:oak_fence_gate',
			'minecraft:spruce_fence_gate',
			'minecraft:birch_fence_gate',
			'minecraft:jungle_fence_gate',
			'minecraft:acacia_fence_gate',
			'minecraft:dark_oak_fence_gate',
			'minecraft:brick_stairs',
			'minecraft:stone_brick_stairs',
			'minecraft:mycelium',
			'minecraft:lily_pad',
			'minecraft:nether_bricks',
			'minecraft:nether_brick_fence',
			'minecraft:nether_brick_stairs',
			'minecraft:enchanting_table',
			'minecraft:end_portal_frame',
			'minecraft:end_stone',
			'minecraft:end_stone_bricks',
			'minecraft:dragon_egg',
			'minecraft:redstone_lamp',
			'minecraft:sandstone_stairs',
			'minecraft:emerald_ore',
			'minecraft:ender_chest',
			'minecraft:tripwire_hook',
			'minecraft:emerald_block',
			'minecraft:spruce_stairs',
			'minecraft:birch_stairs',
			'minecraft:jungle_stairs',
			'minecraft:command_block',
			'minecraft:beacon',
			'minecraft:cobblestone_wall',
			'minecraft:mossy_cobblestone_wall',
			'minecraft:oak_button',
			'minecraft:spruce_button',
			'minecraft:birch_button',
			'minecraft:jungle_button',
			'minecraft:acacia_button',
			'minecraft:dark_oak_button',
			'minecraft:anvil',
			'minecraft:chipped_anvil',
			'minecraft:damaged_anvil',
			'minecraft:trapped_chest',
			'minecraft:light_weighted_pressure_plate',
			'minecraft:heavy_weighted_pressure_plate',
			'minecraft:daylight_detector',
			'minecraft:redstone_block',
			'minecraft:nether_quartz_ore',
			'minecraft:hopper',
			'minecraft:chiseled_quartz_block',
			'minecraft:quartz_block',
			'minecraft:quartz_pillar',
			'minecraft:quartz_stairs',
			'minecraft:activator_rail',
			'minecraft:dropper',
			'minecraft:white_terracotta',
			'minecraft:orange_terracotta',
			'minecraft:magenta_terracotta',
			'minecraft:light_blue_terracotta',
			'minecraft:yellow_terracotta',
			'minecraft:lime_terracotta',
			'minecraft:pink_terracotta',
			'minecraft:gray_terracotta',
			'minecraft:light_gray_terracotta',
			'minecraft:cyan_terracotta',
			'minecraft:purple_terracotta',
			'minecraft:blue_terracotta',
			'minecraft:brown_terracotta',
			'minecraft:green_terracotta',
			'minecraft:red_terracotta',
			'minecraft:black_terracotta',
			'minecraft:barrier',
			'minecraft:iron_trapdoor',
			'minecraft:hay_block',
			'minecraft:white_carpet',
			'minecraft:orange_carpet',
			'minecraft:magenta_carpet',
			'minecraft:light_blue_carpet',
			'minecraft:yellow_carpet',
			'minecraft:lime_carpet',
			'minecraft:pink_carpet',
			'minecraft:gray_carpet',
			'minecraft:light_gray_carpet',
			'minecraft:cyan_carpet',
			'minecraft:purple_carpet',
			'minecraft:blue_carpet',
			'minecraft:brown_carpet',
			'minecraft:green_carpet',
			'minecraft:red_carpet',
			'minecraft:black_carpet',
			'minecraft:terracotta',
			'minecraft:chest',
			'minecraft:diamond_ore',
			'minecraft:diamond_block',
			'minecraft:crafting_table',
			'minecraft:farmland',
			'minecraft:furnace',
			'minecraft:ladder',
			'minecraft:rail',
			'minecraft:cobblestone_stairs',
			'minecraft:lever',
			'minecraft:stone_pressure_plate',
			'minecraft:oak_pressure_plate',
			'minecraft:spruce_pressure_plate',
			'minecraft:birch_pressure_plate',
			'minecraft:jungle_pressure_plate',
			'minecraft:acacia_pressure_plate',
			'minecraft:dark_oak_pressure_plate',
			'minecraft:redstone_ore',
			'minecraft:redstone_torch',
			'minecraft:stone_button',
			'minecraft:snow',
			'minecraft:ice',
			'minecraft:snow_block',
			'minecraft:cactus',
			'minecraft:clay',
			'minecraft:jukebox',
			'minecraft:oak_fence',
			'minecraft:spruce_fence',
			'minecraft:birch_fence',
			'minecraft:jungle_fence',
			'minecraft:acacia_fence',
			'minecraft:dark_oak_fence',
			'minecraft:pumpkin',
			'minecraft:carved_pumpkin',
			'minecraft:netherrack',
			'minecraft:soul_sand',
			'minecraft:glowstone',
			'minecraft:jack_o_lantern',
			'minecraft:oak_trapdoor',
			'minecraft:spruce_trapdoor',
			'minecraft:birch_trapdoor',
			'minecraft:jungle_trapdoor',
			'minecraft:acacia_trapdoor',
			'minecraft:dark_oak_trapdoor',
			'minecraft:infested_stone',
			'minecraft:infested_cobblestone',
			'minecraft:infested_stone_bricks',
			'minecraft:infested_mossy_stone_bricks',
			'minecraft:infested_cracked_stone_bricks',
			'minecraft:infested_chiseled_stone_bricks',
			'minecraft:stone_bricks',
			'minecraft:mossy_stone_bricks',
			'minecraft:cracked_stone_bricks',
			'minecraft:chiseled_stone_bricks',
			'minecraft:brown_mushroom_block',
			'minecraft:red_mushroom_block',
			'minecraft:mushroom_stem',
			'minecraft:iron_bars',
			'minecraft:glass_pane',
			'minecraft:melon',
			'minecraft:vine',
			'minecraft:oak_fence_gate',
			'minecraft:spruce_fence_gate',
			'minecraft:birch_fence_gate',
			'minecraft:jungle_fence_gate',
			'minecraft:acacia_fence_gate',
			'minecraft:dark_oak_fence_gate',
			'minecraft:brick_stairs',
			'minecraft:stone_brick_stairs',
			'minecraft:mycelium',
			'minecraft:lily_pad',
			'minecraft:nether_bricks',
			'minecraft:nether_brick_fence',
			'minecraft:nether_brick_stairs',
			'minecraft:enchanting_table',
			'minecraft:end_portal_frame',
			'minecraft:end_stone',
			'minecraft:end_stone_bricks',
			'minecraft:dragon_egg',
			'minecraft:redstone_lamp',
			'minecraft:sandstone_stairs',
			'minecraft:emerald_ore',
			'minecraft:ender_chest',
			'minecraft:tripwire_hook',
			'minecraft:emerald_block',
			'minecraft:spruce_stairs',
			'minecraft:birch_stairs',
			'minecraft:jungle_stairs',
			'minecraft:command_block',
			'minecraft:beacon',
			'minecraft:cobblestone_wall',
			'minecraft:mossy_cobblestone_wall',
			'minecraft:oak_button',
			'minecraft:spruce_button',
			'minecraft:birch_button',
			'minecraft:jungle_button',
			'minecraft:acacia_button',
			'minecraft:dark_oak_button',
			'minecraft:anvil',
			'minecraft:chipped_anvil',
			'minecraft:damaged_anvil',
			'minecraft:trapped_chest',
			'minecraft:light_weighted_pressure_plate',
			'minecraft:heavy_weighted_pressure_plate',
			'minecraft:daylight_detector',
			'minecraft:redstone_block',
			'minecraft:nether_quartz_ore',
			'minecraft:hopper',
			'minecraft:chiseled_quartz_block',
			'minecraft:quartz_block',
			'minecraft:quartz_pillar',
			'minecraft:quartz_stairs',
			'minecraft:activator_rail',
			'minecraft:dropper',
			'minecraft:white_terracotta',
			'minecraft:orange_terracotta',
			'minecraft:magenta_terracotta',
			'minecraft:light_blue_terracotta',
			'minecraft:yellow_terracotta',
			'minecraft:lime_terracotta',
			'minecraft:pink_terracotta',
			'minecraft:gray_terracotta',
			'minecraft:light_gray_terracotta',
			'minecraft:cyan_terracotta',
			'minecraft:purple_terracotta',
			'minecraft:blue_terracotta',
			'minecraft:brown_terracotta',
			'minecraft:green_terracotta',
			'minecraft:red_terracotta',
			'minecraft:black_terracotta',
			'minecraft:barrier',
			'minecraft:iron_trapdoor',
			'minecraft:hay_block',
			'minecraft:white_carpet',
			'minecraft:orange_carpet',
			'minecraft:magenta_carpet',
			'minecraft:light_blue_carpet',
			'minecraft:yellow_carpet',
			'minecraft:lime_carpet',
			'minecraft:pink_carpet',
			'minecraft:gray_carpet',
			'minecraft:light_gray_carpet',
			'minecraft:cyan_carpet',
			'minecraft:purple_carpet',
			'minecraft:blue_carpet',
			'minecraft:brown_carpet',
			'minecraft:green_carpet',
			'minecraft:red_carpet',
			'minecraft:black_carpet',
			'minecraft:terracotta',
			'minecraft:brain_coral_fan',
			'minecraft:bubble_coral_fan',
			'minecraft:fire_coral_fan',
			'minecraft:horn_coral_fan',
			'minecraft:dead_tube_coral_fan',
			'minecraft:dead_brain_coral_fan',
			'minecraft:dead_bubble_coral_fan',
			'minecraft:dead_fire_coral_fan',
			'minecraft:dead_horn_coral_fan',
			'minecraft:blue_ice',
			'minecraft:conduit',
			'minecraft:iron_door',
			'minecraft:oak_door',
			'minecraft:spruce_door',
			'minecraft:birch_door',
			'minecraft:jungle_door',
			'minecraft:acacia_door',
			'minecraft:dark_oak_door',
			'minecraft:repeater',
			'minecraft:comparator',
			'minecraft:structure_block',
			'minecraft:white_bed',
			'minecraft:orange_bed',
			'minecraft:magenta_bed',
			'minecraft:light_blue_bed',
			'minecraft:yellow_bed',
			'minecraft:lime_bed',
			'minecraft:pink_bed',
			'minecraft:gray_bed',
			'minecraft:light_gray_bed',
			'minecraft:cyan_bed',
			'minecraft:purple_bed',
			'minecraft:blue_bed',
			'minecraft:brown_bed',
			'minecraft:green_bed',
			'minecraft:red_bed',
			'minecraft:black_bed',
			'minecraft:brewing_stand',
			'minecraft:cauldron',
			'minecraft:flower_pot',
			'minecraft:white_banner',
			'minecraft:orange_banner',
			'minecraft:magenta_banner',
			'minecraft:light_blue_banner',
			'minecraft:yellow_banner',
			'minecraft:lime_banner',
			'minecraft:pink_banner',
			'minecraft:gray_banner',
			'minecraft:light_gray_banner',
			'minecraft:cyan_banner',
			'minecraft:purple_banner',
			'minecraft:blue_banner',
			'minecraft:brown_banner',
			'minecraft:green_banner',
			'minecraft:red_banner',
			'minecraft:black_banner',
			'minecraft:water',
			'minecraft:lava',
			'minecraft:tall_seagrass',
			'minecraft:piston_head',
			'minecraft:moving_piston',
			'minecraft:wall_torch',
			'minecraft:fire',
			'minecraft:redstone_wire',
			'minecraft:wall_sign',
			'minecraft:redstone_wall_torch',
			'minecraft:nether_portal',
			'minecraft:attached_pumpkin_stem',
			'minecraft:attached_melon_stem',
			'minecraft:pumpkin_stem',
			'minecraft:melon_stem',
			'minecraft:end_portal',
			'minecraft:cocoa',
			'minecraft:tripwire',
			'minecraft:potted_oak_sapling',
			'minecraft:potted_spruce_sapling',
			'minecraft:potted_birch_sapling',
			'minecraft:potted_jungle_sapling',
			'minecraft:potted_acacia_sapling',
			'minecraft:potted_dark_oak_sapling',
			'minecraft:potted_fern',
			'minecraft:potted_dandelion',
			'minecraft:potted_poppy',
			'minecraft:potted_blue_orchid',
			'minecraft:potted_allium',
			'minecraft:potted_azure_bluet',
			'minecraft:potted_red_tulip',
			'minecraft:potted_orange_tulip',
			'minecraft:potted_white_tulip',
			'minecraft:potted_pink_tulip',
			'minecraft:potted_oxeye_daisy',
			'minecraft:potted_red_mushroom',
			'minecraft:potted_brown_mushroom',
			'minecraft:potted_dead_bush',
			'minecraft:potted_cactus',
			'minecraft:carrots',
			'minecraft:potatoes',
			'minecraft:skeleton_wall_skull',
			'minecraft:wither_skeleton_wall_skull',
			'minecraft:zombie_wall_head',
			'minecraft:player_wall_head',
			'minecraft:creeper_wall_head',
			'minecraft:dragon_wall_head',
			'minecraft:white_wall_banner',
			'minecraft:orange_wall_banner',
			'minecraft:magenta_wall_banner',
			'minecraft:light_blue_wall_banner',
			'minecraft:yellow_wall_banner',
			'minecraft:lime_wall_banner',
			'minecraft:pink_wall_banner',
			'minecraft:gray_wall_banner',
			'minecraft:light_gray_wall_banner',
			'minecraft:cyan_wall_banner',
			'minecraft:purple_wall_banner',
			'minecraft:blue_wall_banner',
			'minecraft:brown_wall_banner',
			'minecraft:green_wall_banner',
			'minecraft:red_wall_banner',
			'minecraft:black_wall_banner',
			'minecraft:beetroots',
			'minecraft:end_gateway',
			'minecraft:frosted_ice',
			'minecraft:kelp_plant',
			'minecraft:dead_tube_coral_wall_fan',
			'minecraft:dead_brain_coral_wall_fan',
			'minecraft:dead_bubble_coral_wall_fan',
			'minecraft:dead_fire_coral_wall_fan',
			'minecraft:dead_horn_coral_wall_fan',
			'minecraft:tube_coral_wall_fan',
			'minecraft:brain_coral_wall_fan',
			'minecraft:bubble_coral_wall_fan',
			'minecraft:fire_coral_wall_fan',
			'minecraft:horn_coral_wall_fan',
			'minecraft:cornflower',
			'minecraft:lily_of_the_valley',
			'minecraft:wither_rose',
			'minecraft:smooth_stone_slab',
			'minecraft:cut_sandstone_slab',
			'minecraft:cut_red_sandstone_slab',
			'minecraft:brick_wall',
			'minecraft:prismarine_wall',
			'minecraft:red_sandstone_wall',
			'minecraft:mossy_stone_brick_wall',
			'minecraft:granite_wall',
			'minecraft:stone_brick_wall',
			'minecraft:nether_brick_wall',
			'minecraft:andesite_wall',
			'minecraft:red_nether_brick_wall',
			'minecraft:sandstone_wall',
			'minecraft:end_stone_brick_wall',
			'minecraft:diorite_wall',
			'minecraft:polished_granite_stairs',
			'minecraft:smooth_red_sandstone_stairs',
			'minecraft:mossy_stone_brick_stairs',
			'minecraft:polished_diorite_stairs',
			'minecraft:mossy_cobblestone_stairs',
			'minecraft:end_stone_brick_stairs',
			'minecraft:stone_stairs',
			'minecraft:smooth_sandstone_stairs',
			'minecraft:smooth_quartz_stairs',
			'minecraft:granite_stairs',
			'minecraft:andesite_stairs',
			'minecraft:red_nether_brick_stairs',
			'minecraft:polished_andesite_stairs',
			'minecraft:diorite_stairs',
			'minecraft:polished_granite_slab',
			'minecraft:smooth_red_sandstone_slab',
			'minecraft:mossy_stone_brick_slab',
			'minecraft:polished_diorite_slab',
			'minecraft:mossy_cobblestone_slab',
			'minecraft:end_stone_brick_slab',
			'minecraft:smooth_sandstone_slab',
			'minecraft:smooth_quartz_slab',
			'minecraft:granite_slab',
			'minecraft:andesite_slab',
			'minecraft:red_nether_brick_slab',
			'minecraft:polished_andesite_slab',
			'minecraft:diorite_slab',
			'minecraft:scaffolding',
			'minecraft:jigsaw',
			'minecraft:composter',
			'minecraft:oak_sign',
			'minecraft:spruce_sign',
			'minecraft:birch_sign',
			'minecraft:jungle_sign',
			'minecraft:acacia_sign',
			'minecraft:dark_oak_sign',
			'minecraft:bamboo',
			'minecraft:red_dye',
			'minecraft:green_dye',
			'minecraft:yellow_dye',
			'minecraft:blue_dye',
			'minecraft:brown_dye',
			'minecraft:black_dye',
			'minecraft:white_dye',
			'minecraft:loom',
			'minecraft:barrel',
			'minecraft:smoker',
			'minecraft:blast_furnace',
			'minecraft:cartography_table',
			'minecraft:fletching_table',
			'minecraft:grindstone',
			'minecraft:lectern',
			'minecraft:smithing_table',
			'minecraft:stonecutter',
			'minecraft:bell',
			'minecraft:lantern',
			'minecraft:sweet_berries',
			'minecraft:campfire',
			'minecraft:bee_nest',
			'minecraft:beehive',
			'minecraft:honey_block',
			'minecraft:honeycomb_block',
			'minecraft:oak_wall_sign',
			'minecraft:spruce_wall_sign',
			'minecraft:birch_wall_sign',
			'minecraft:acacia_wall_sign',
			'minecraft:jungle_wall_sign',
			'minecraft:dark_oak_wall_sign',
			'minecraft:potted_cornflower',
			'minecraft:potted_lily_of_the_valley',
			'minecraft:potted_wither_rose',
			'minecraft:bamboo_sapling',
			'minecraft:potted_bamboo',
			'minecraft:sweet_berry_bush',
			'minecraft:crimson_nylium',
			'minecraft:warped_nylium',
			'minecraft:crimson_planks',
			'minecraft:warped_planks',
			'minecraft:nether_gold_ore',
			'minecraft:crimson_stem',
			'minecraft:warped_stem',
			'minecraft:stripped_crimson_stem',
			'minecraft:stripped_warped_stem',
			'minecraft:stripped_crimson_hyphae',
			'minecraft:stripped_warped_hyphae',
			'minecraft:crimson_hyphae',
			'minecraft:warped_hyphae',
			'minecraft:crimson_fungus',
			'minecraft:warped_fungus',
			'minecraft:crimson_roots',
			'minecraft:warped_roots',
			'minecraft:nether_sprouts',
			'minecraft:weeping_vines',
			'minecraft:twisting_vines',
			'minecraft:crimson_slab',
			'minecraft:warped_slab',
			'minecraft:crimson_pressure_plate',
			'minecraft:warped_pressure_plate',
			'minecraft:polished_blackstone_pressure_plate',
			'minecraft:crimson_fence',
			'minecraft:warped_fence',
			'minecraft:soul_soil',
			'minecraft:basalt',
			'minecraft:polished_basalt',
			'minecraft:soul_torch',
			'minecraft:crimson_trapdoor',
			'minecraft:warped_trapdoor',
			'minecraft:chain',
			'minecraft:crimson_fence_gate',
			'minecraft:warped_fence_gate',
			'minecraft:cracked_nether_bricks',
			'minecraft:chiseled_nether_bricks',
			'minecraft:crimson_stairs',
			'minecraft:warped_stairs',
			'minecraft:blackstone_wall',
			'minecraft:polished_blackstone_wall',
			'minecraft:polished_blackstone_brick_wall',
			'minecraft:crimson_button',
			'minecraft:warped_button',
			'minecraft:polished_blackstone_button',
			'minecraft:quartz_bricks',
			'minecraft:warped_wart_block',
			'minecraft:crimson_door',
			'minecraft:warped_door',
			'minecraft:crimson_sign',
			'minecraft:warped_sign',
			'minecraft:soul_lantern',
			'minecraft:soul_campfire',
			'minecraft:shroomlight',
			'minecraft:lodestone',
			'minecraft:netherite_block',
			'minecraft:ancient_debris',
			'minecraft:target',
			'minecraft:crying_obsidian',
			'minecraft:blackstone',
			'minecraft:blackstone_slab',
			'minecraft:blackstone_stairs',
			'minecraft:gilded_blackstone',
			'minecraft:polished_blackstone',
			'minecraft:polished_blackstone_slab',
			'minecraft:polished_blackstone_stairs',
			'minecraft:chiseled_polished_blackstone',
			'minecraft:polished_blackstone_bricks',
			'minecraft:polished_blackstone_brick_slab',
			'minecraft:polished_blackstone_brick_stairs',
			'minecraft:cracked_polished_blackstone_bricks',
			'minecraft:respawn_anchor',
			'minecraft:soul_fire',
			'minecraft:soul_wall_torch',
			'minecraft:weeping_vines_plant',
			'minecraft:twisting_vines_plant',
			'minecraft:crimson_wall_sign',
			'minecraft:warped_wall_sign',
			'minecraft:potted_crimson_fungus',
			'minecraft:potted_warped_fungus',
			'minecraft:potted_crimson_roots',
			'minecraft:potted_warped_roots'
		],
		number: {
			min: -2147483647,
			max: 2147483647
		}

	},
	custom(value) {

		mc8.mc8_writefile(value + '\n', mc8.mc8_newfile());

	},
	comment(value) {

		mc8.mc8_writefile('#' + value + '\n', mc8.mc8_newfile());

	},
	newLine() {

		mc8.mc8_writefile('\n', mc8.mc8_newfile());

	},
	currentFile(name) {

		if(!mc8.datapack.file.opened) mc8.cfn = name; else
		mc8.cfn = mc8.datapack.file.folder + '/data/' + name.split(':')[0] + '/functions/' + name.split(':')[1] + '.mcfunction';

	},
	say(value) {

		mc8.mc8_writefile('say ' + value + '\n', mc8.mc8_newfile());

	},
	scoreboard: {

		add(name, type) {

			mc8.scoreboard[name] = {

				mc8_i: Object.keys(mc8.scoreboard).length,
				set(name, value) {

					if(Number(value) > -1e10) {

						this[name] = this.mc8_scores.length;
						this.mc8_scores.push(name);

						mc8.mc8_writefile(`scoreboard players set ${name} ${Object.keys(mc8.scoreboard)[this.mc8_i]} ${value}\n`, mc8.mc8_newfile());

					} else {

						throw 'value isn\'t a number or is not a usable number';

					}
					scoreboard = mc8.scoreboard;

				},
				get(name) {

					this[name] = this.mc8_scores.length;
					this.mc8_scores.push(name);

					mc8.mc8_writefile(`scoreboard players get ${name} ${Object.keys(mc8.scoreboard)[this.mc8_i]}\n`, mc8.mc8_newfile());
					scoreboard = mc8.scoreboard;

				},
				add(name, value) {

					if(Number(value) > -1e10) {

						this[name] = this.mc8_scores.length;
						this.mc8_scores.push(name);

						mc8.mc8_writefile(`scoreboard players add ${name} ${Object.keys(mc8.scoreboard)[this.mc8_i]} ${value}\n`, mc8.mc8_newfile());


					} else {

						throw 'value isn\'t a number or is not a usable number';

					}
					scoreboard = mc8.scoreboard;

				},
				remove(name, value) {

					if(Number(value) > -1e10) {

						this[name] = this.mc8_scores.length;
						this.mc8_scores.push(name);

						mc8.mc8_writefile(`scoreboard players remove ${name} ${Object.keys(mc8.scoreboard)[this.mc8_i]} ${value}\n`, mc8.mc8_newfile());

					} else {

						throw 'value isn\'t a number or is not a usable number';

					}
					scoreboard = mc8.scoreboard;

				},
				operation(name) {

					let self = {

						mc8_i: this.mc8_i,
						add(pname, objective) {

							mc8.mc8_writefile(`scoreboard players operation ${name} ${Object.keys(mc8.scoreboard)[this.mc8_i]} += ${pname} ${objective}\n`, mc8.mc8_newfile());

							return this;

						},
						subtract(pname, objective) {

							mc8.mc8_writefile(`scoreboard players operation ${name} ${Object.keys(mc8.scoreboard)[this.mc8_i]} -= ${pname} ${objective}\n`, mc8.mc8_newfile());

							return this;

						},
						multiply(pname, objective) {

							mc8.mc8_writefile(`scoreboard players operation ${name} ${Object.keys(mc8.scoreboard)[this.mc8_i]} *= ${pname} ${objective}\n`, mc8.mc8_newfile());

							return this;

						},
						divide(pname, objective) {

							mc8.mc8_writefile(`scoreboard players operation ${name} ${Object.keys(mc8.scoreboard)[this.mc8_i]} /= ${pname} ${objective}\n`, mc8.mc8_newfile());
							
							return this;

						},
						remainder(pname, objective) {

							mc8.mc8_writefile(`scoreboard players operation ${name} ${Object.keys(mc8.scoreboard)[this.mc8_i]} %= ${pname} ${objective}\n`, mc8.mc8_newfile());

							return this;

						},
						equal(pname, objective) {

							mc8.mc8_writefile(`scoreboard players operation ${name} ${Object.keys(mc8.scoreboard)[this.mc8_i]} = ${pname} ${objective}\n`, mc8.mc8_newfile());

							return this;

						}

					}

					return self;

				},
				remove() {

					mc8.mc8_writefile(`scoreboard objectives remove ${Object.keys(mc8.scoreboard)[this.mc8_i]}\n`, mc8.mc8_newfile());

					mc8.scoreboard[Object.keys(mc8.scoreboard)[this.mc8_i]] = 'removed';

				},
				mc8_scores: []

			};

			mc8.mc8_writefile(`scoreboard objectives add ${name} ${type}\n`, mc8.mc8_newfile());

		}

	},
	execute: {
		preprefix: false,
		erun: true,
		prefix: '',
		output: 'execute ',
		mc8_testoutput() {

			if(mc8.execute.output != '') {

				mc8.execute.output = mc8.execute.output.split('\n');

				if(mc8.execute.output[mc8.execute.output.length - 1] == '') {

					mc8.execute.ouput = 'execute ';

				} else {

					mc8.execute.output = mc8.execute.output.join('\n');

				}

			}

		},
		as(name) {

			mc8.execute.mc8_testoutput();

			mc8.execute.output += `as ${name} `;

			return mc8.execute;

		},
		at(name) {

			mc8.execute.mc8_testoutput();

			mc8.execute.output += `at ${name} `;

			return mc8.execute;

		},
		run(func, run) {

			mc8.execute.mc8_testoutput();

			if(mc8.execute.erun === false) {

				run = false;

			}

			if(run !== false) {

				mc8.execute.output += 'run ';

			}

			if(func) {

				mc8.execute.prefix += mc8.execute.output;
				let outputex = mc8.execute.output;
				mc8.execute.output = run !== false ? 'execute ' : '';
				mc8.execute.erun = run;

				func();

				mc8.execute.erun = true;
				mc8.execute.prefix = mc8.execute.prefix.substr(0, mc8.execute.prefix.length - outputex.length);
				mc8.execute.preprefix = '';

			} else {

				mc8.mc8_writefile(mc8.execute.output, mc8.mc8_newfile());

				mc8.execute.output = 'execute ';

				mc8.execute.preprefix = mc8.execute.prefix;
				mc8.execute.prefix = '';

				return mc8;

			}

		},
		if: {

			score(name, objective) {

				mc8.execute.mc8_testoutput();

				mc8.execute.output += `if score ${name} ${objective} `;

				let self = {

					is(comp, name, objective) {

						mc8.execute.output += `${comp} ${name} ${objective} `;

						return mc8.execute;

					},
					matches(value) {

						mc8.execute.output += `matches ${value} `;

						return mc8.execute;

					}

				}

				return self;

			}

		},
		store: {

			result: {

				score(name, objective) {

					mc8.execute.output += `store result score ${name} ${objective} `;

					return mc8.execute;

				}

			}

		}
	},
	kill(name) {

		mc8.mc8_writefile('kill ' + name + '\n', mc8.mc8_newfile());

	},
	_function(path) {

		mc8.mc8_writefile('function ' + path + '\n', mc8.mc8_newfile());

	},
	randomNumberGenerator(file) {

		let otherfile = mc8.cfn;

		mc8.cfn = !mc8.datapack.file.opened ? file : mc8.datapack.file.folder + '/data/random/functions/generate';

		if(mc8.datapack.file.opened) {

			if(!mc8.fs.existsSync(mc8.datapack.file.folder + '/data/random')) {
				mc8.fs.mkdirSync(mc8.datapack.file.folder + '/data/random');
			}
			if(!mc8.fs.existsSync(mc8.datapack.file.folder + '/data/random/functions')) {
				mc8.fs.mkdirSync(mc8.datapack.file.folder + '/data/random/functions');
			}

		}

		mc8.scoreboard.add('random', 'dummy');
		mc8.scoreboard.add('randominit', 'dummy');
		mc8.scoreboard.randominit.add('bool', 0);

		mc8.execute.if.score('bool', 'randominit').matches('0').run(() => {

			mc8.scoreboard.random.set('pos', 1);
			mc8.scoreboard.random.set('maxint', 2147483647);

			mc8.execute.store.result.score('mainint', 'random').run().custom('data get entity @r Pos[0] 573820');
			mc8.execute.store.result.score('multint', 'random').run().custom('data get entity @r Pos[2] 561444');

			mc8.scoreboard.random.set('max', 10);
			mc8.scoreboard.random.set('min', 10);

		});

		mc8.scoreboard.randominit.set('bool', 1);
		mc8.scoreboard.random.operation('mainint').multiply('multint', 'random').subtract('pos', 'random');
		mc8.scoreboard.random.operation('multint').subtract('pos', 'random');
		mc8.execute.if.score('mainint', 'random').matches('..0').run().scoreboard.random.operation('mainint').multiply('pos', 'random');
		mc8.scoreboard.random.operation('divint').equal('maxint', 'random');
		mc8.scoreboard.random.operation('dist').equal('max', 'random').subtract('min', 'random');
		mc8.scoreboard.random.operation('divint').divide('dist', 'random');
		mc8.scoreboard.random.operation('output').equal('mainint', 'random').divide('divint', 'random').add('min', 'random');

		mc8.cfn = otherfile;

		mc8.randomNumberGenerator = file.substr(0, file.length - 11);

	},
	generateRandomNumber(min, max, currentDir) {

		let err = 'randomNumberGenerator not created: randomNumberGenerator(<filename>);';

		if(typeof mc8.randomNumberGenerator != 'function') {

			if(mc8.datapack.file.opened) currentDir = mc8.datapack.file.folder + '/data/random/functions/generate';

			mc8.scoreboard.random.set('min', min);
			mc8.scoreboard.random.set('max', max);

			mc8._function(currentDir);

		} else
throw err;

		return 'output random';

	},
	datapack: {

		mc8_path: '',
		mc8_unnamed_datapack_num: 0,
		mc8_unnamed_function_num: 0,
		path(path) {

			this.mc8_path = path;

			let paths = path.split('/');

			let reload = () => {

				if(!mc8.fs.existsSync(paths[0])) {
					mc8.fs.mkdirSync(paths[0]);
				}

				if(paths.length > 1) {
					let currentPath = paths[0];
					paths.shift();
					paths[0] = currentPath + '/' + paths[0];
					reload();
				}

			}

			reload();

		},
		generate(name, desc, _function) {

			let dir = (this.mc8_path == '' ? '.' : this.mc8_path) + '/' + (name ? name : 'mc8-unnamed-' + this.mc8_unnamed_datapack_num);

			if(!name) this.mc8_unnamed_datapack_num ++;

			if(!desc) desc = 'made with mc8';

			if(!mc8.fs.existsSync(dir)) {
				mc8.fs.mkdirSync(dir);
			}

			mc8.fs.writeFileSync(dir + '/pack.mcmeta', `{"pack": {"description": "${desc}", "pack_format": 1 } }`);

			if(!mc8.fs.existsSync(dir + '/data')) {
				mc8.fs.mkdirSync(dir + '/data');
			}

			if(!mc8.fs.existsSync(dir + '/data/minecraft')) {
				mc8.fs.mkdirSync(dir + '/data/minecraft');
			}
			if(!mc8.fs.existsSync(dir + '/data/minecraft/tags')) {
				mc8.fs.mkdirSync(dir + '/data/minecraft/tags');
			}
			if(!mc8.fs.existsSync(dir + '/data/minecraft/tags/functions')) {
				mc8.fs.mkdirSync(dir + '/data/minecraft/tags/functions');
			}

			mc8.fs.writeFileSync(dir + '/data/minecraft/tags/functions/load.json', `{ "values": [ "YOUR-FUNCTION-HERE" ] }`);
			mc8.fs.writeFileSync(dir + '/data/minecraft/tags/functions/tick.json', `{ "values": [ "YOUR-FUNCTION-HERE" ] }`);	

			if(_function) {

				if(!mc8.fs.existsSync(dir + '/data/' + _function)) {
					mc8.fs.mkdirSync(dir + '/data/' + _function);
				}
				if(!mc8.fs.existsSync(dir + '/data/' + _function + '/functions')) {
					mc8.fs.mkdirSync(dir + '/data/' + _function + '/functions');
				}

			}

		},
		addFolder(name) {

			if(!mc8.fs.existsSync(mc8.datapack.file.folder + '/data/' + name)) {
				mc8.fs.mkdirSync(mc8.datapack.file.folder + '/data/' + name);
			}
			if(!mc8.fs.existsSync(mc8.datapack.file.folder + '/data/' + name + '/functions')) {
				mc8.fs.mkdirSync(mc8.datapack.file.folder + '/data/' + name + '/functions');
			}

		},
		setFunctionLoad(name) {

			let loadjson = mc8.fs.readFileSync(mc8.datapack.file.folder + '/data/minecraft/tags/functions/load.json', 'utf-8');
			loadjson = JSON.parse(loadjson);
			if(loadjson.values[0] == 'YOUR-FUNCTION-HERE') loadjson.values[0] = name; else loadjson.values.push(name);
			mc8.fs.writeFileSync(mc8.datapack.file.folder + '/data/minecraft/tags/functions/load.json', JSON.stringify(loadjson));

		},
		setFunctionTick(name) {

			let tickjson = mc8.fs.readFileSync(mc8.datapack.file.folder + '/data/minecraft/tags/functions/tick.json', 'utf-8');
			tickjson = JSON.parse(tickjson);
			if(tickjson.values[0] == 'YOUR-FUNCTION-HERE') tickjson.values[0] = name; else tickjson.values.push(name);
			mc8.fs.writeFileSync(mc8.datapack.file.folder + '/data/minecraft/tags/functions/tick.json', JSON.stringify(tickjson));

		},
		open(name) {

			mc8.datapack.file.opened = true;
			mc8.datapack.file.folder = name;

		},
		file: {
			opened: false,
			folder: undefined,
		}

	},
	playerTrackingCompass() {

		mc8.mc8_writefile('scoreboard objectives add compass trigger\nscoreboard players enable @a compass\nexecute as @a[scores={compass=1..}] run give @s compass{display:{Name:\'[{"text":"Player Tracking Compass","italic":false}]\'}}\nscoreboard players set @a compass 0\nexecute at @e[tag=track] run setworldspawn ~ ~ ~\n', mc8.mc8_newfile());

	},
	trigger_prefix: '',
	trigger(name, func, removescore) {

		mc8.scoreboard.add(name, 'trigger');

		mc8.mc8_writefile(`scoreboard objectives add ${name} trigger\nscoreboard players enable @a ${name}\n`, mc8.mc8_newfile());

		mc8.trigger_prefix = `execute as @a[scores={${name}=1..}] run `;

		func();

		mc8.trigger_prefix = '';

		if(removescore !== false) mc8.mc8_writefile(`scoreboard players set @a ${name} 0\n`, mc8.mc8_newfile());

	},
	tellraw(name, json) {

		mc8.mc8_writefile(`tellraw ${name} ${JSON.stringify(json)}\n`, mc8.mc8_newfile());

	},
	at_suffix(sel) {

		let self = '';

		if(sel) {

			self += '[';

			let tags = Object.keys(sel);
			tags.forEach(t => {

				if(typeof sel[t] == 'object') {

					sel[t].forEach(i => self += t + '=' + i + (t.indexOf(i) == t.length - 1 && tags.indexOf(t) == tags.length - 1 ? '' : ','));

				} else {

					self += t + '=' + sel[t] + (tags.indexOf(t) == tags.length - 1 ? '' : ',');

				}

			});

			self += ']';

		}

		return self;

	},
	aa(sel) { return '@a' +  mc8.at_suffix(sel) },
	ap(sel) { return '@p' +  mc8.at_suffix(sel) },
	ar(sel) { return '@r' +  mc8.at_suffix(sel) },
	ae(sel) { return '@e' +  mc8.at_suffix(sel) },
	clear(name, item, count) {

		mc8.mc8_writefile(`clear ${name}${item ? ' ' + item : ''}${count > mc8.util.number.min ? ' ' + count : ''}\n`, mc8.mc8_newfile());

	},
	effect: {

		give(name, id, time, lvl, display) {

			mc8.mc8_writefile(`effect give ${name} ${id} ${time} ${lvl}${display !== undefined ? ' ' + display : ''}\n`, mc8.mc8_newfile());

		},
		clear(name, id) {

			mc8.mc8_writefile(`effect clear ${name}${id ? ' ' + id : ''}\n`, mc8.mc8_newfile());

		}

	}
}

module.exports = mc8;