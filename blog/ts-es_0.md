---
title: TypeScript Discord Bot Tutorial #0
subtitle: "Making a Discord Bot with TypeScript and Eris-Sharder: Setting Things Up"
publishedAt: 6/20/2021
---

# Tools

- Node.js
- TypeScript
- Visual Studio Code (or a text editor of your choice)
- Discord

# Installing the Dependencies

Open up your terminal by pressing `` Ctrl + ` `` (the backtick key) or by going to `Terminal > New Terminal`. Type

```bash
npm init
```

and hit Enter. You can just press enter through all of the questions, since the default settings are fine. This initializes your project so you can install external libraries. Next, type

```bash
npm install eris-sharder eris dotenv-safe & npm install @types/eris-sharder @types/node
```

or if you're using Yarn:

```bash
yarn add eris-sharder eris dotenv-safe & yarn add -D @types/eris-sharder @types/node
```

to install the necessary libraries. You're now good to go!

# Setting up TypeScript

When using TypeScript, you should create a tsconfig.json file at the base of your project, which tells the compiler what to do. First, create a file in the same directory as your package.json, and name it `tsconfig.json`. Next, you can take a look at [the tsconfig options](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) and create your own tsconfig, or you can copy the one I have below:

```json
{
	"compilerOptions": {
		"target": "es6",
		"module": "commonjs",
		"outDir": "dist",
		"strict": true,
		"esModuleInterop": true,
		"skipLibCheck": true,
		"removeComments": true
	},
	"include": ["src"],
	"exclude": ["node_modules"]
}
```

and paste it into the file you just made.

# Creating an index.ts

All bots have an entry file, which I like to call "index.ts", or "bot.ts". This is the file you run to start up your bot. Make a new folder in the same directory as your package.json and tsconfig.json, and name it `src`. You can then make a new file in the src folder you just created, and name it `index.ts` (or `bot.ts` if you want).

To import Eris-Sharder, type this into `index.ts`:

```ts
import { Master } from "eris-sharder";
```

This allows you to use the `Master` class, which is used for sharding purposes. Then type:

```ts
const _ = new Master("", "/dist/main.js", {
	name: "your_bot_name",
	debug: true,
	clientOptions: {}
});
```

After doing this, your index.ts is almost ready! We just need to make a bot application first.

# Making a Bot Application

Head over to the [Discord Developer Portal](https://discord.com/developers/applications) and sign in to Discord. From there, click `New Application` and give your bot a name. After you do so, go to the Bot tab and click `Add a Bot`. This is all you have to do to create a bot on Discord!

<br />

We need to do one more thing. Click on `Copy` under the Token section, and that should copy a long string of characters onto your clipboard. This is your bot token, which you should **_never_** share with anyone else. It's sort of like your bot's login details, so anyone who can access that also has full control over your bot.

<br />

Back in Visual Studio Code, you want to add another line under your first import statement. In this line, write:

```ts
import "dotenv-safe/config";
```

dotenv-safe is a library that can get details from a .env file, which are environment files. We will use to hide our bot token. In the same directory as your package.json, create a new file called `.env` and write

```
BOT_TOKEN=
```

and paste your bot token there. Finally, go to `index.ts` and type:

```ts
const _ = new Master(process.env.BOT_TOKEN!, "/dist/main.js", {
	name: "your_bot_name",
	debug: true,
	clientOptions: {}
});
```

`process.env` is a variable that contains all your environment information, including the bot token you just set. We need to add an exclamation mark `!` to the end of it, since TypeScript thinks that process.env.BOT_TOKEN might be undefined, while we know it is. (We just set it!)

# Creating a main.ts

The main.ts file will contain information about your bot. Start off by making a new file in src and naming it `main.ts`. We will then import 2 things: `Client` from Eris and `Base` from Eris-Sharder

```ts
import { Client } from "eris";
import { Base } from "eris-sharder";
```

Client is the main class from Eris, and describes a Discord bot client. Base is used for our index.ts to detect that this is the bot we are making. Under that, write:

```ts
export = class Bot extends Base {
	public constructor(options: { bot: Client; clusterID: number }) {
		super(options);
	}
};
```

Since we are exporting this Bot class to be used in index.ts, we need to extend it off of Base. `constructor()` is a function that is used in JavaScript and Typescript, and is used to create a new instance of a class. We need this, since the Eris Client uses these options when setting up the bot. We can pass those options to the bot with `super(options)`.

<br />

You may be getting an error in TypeScript, saying that "launch()" is not implemented. That is because `launch()` is a method of Base that is called when the bot first logs in to Discord. We can implement it by saying:

```ts
export = class Bot extends Base {
	public constructor(options: { bot: Client; clusterID: number }) {
		super(options);
	}

	public launch() {
		console.log("Bot is online!");
	}
};
```

Now, whenever the bot logs in to Discord, we should see a message in our console saying "Bot is online!".

# Running the Bot

To run the bot, open up your terminal again and run the following command:

```bash
tsc
```

This will compile your TypeScript code into JavaScript code that can run on Node. To start your bot run:

```bash
node dist/index.js
```

You should see an ASCII image of your bot name pop up, along with a message saying "Bot is online!". You've done it! If you made it to this point, your bot is now online!

# Final Result

`tsconfig.json`

```json
{
	"compilerOptions": {
		"target": "es6",
		"module": "commonjs",
		"outDir": "dist",
		"strict": true,
		"esModuleInterop": true,
		"skipLibCheck": true,
		"removeComments": true
	},
	"include": ["src"],
	"exclude": ["node_modules"]
}
```

`.env`

```text
BOT_TOKEN=your_token
```

`src/index.ts`

```ts
import "dotenv-safe/config";
import { Master } from "eris-sharder";

const _ = new Master(process.env.BOT_TOKEN!, "/dist/main.js", {
	name: "yt-bot",
	stats: true,
	clientOptions: {}
});
```

`src/main.ts`

```ts
import { Client, TextChannel } from "eris";
import { Base } from "eris-sharder";

export = class Bot extends Base {
	public constructor(options: { bot: Client; clusterID: number }) {
		super(options);
	}

	public launch() {
		console.log("Bot is online!");
	}
};
```
