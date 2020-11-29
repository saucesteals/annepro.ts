import * as dotenv from "dotenv";
dotenv.config();
import { Client } from "@typeit/discord";

export class Main {
  private static _client: Client;

  static get Client(): Client {
    return this._client;
  }

  static start() {
    this._client = new Client();

    console.log("\x1b[33m")
    this._client.login(
      process.env.TOKEN,
      `${__dirname}/discords/*.ts`, 
      `${__dirname}/discords/*.js` 
    );
    console.log("\x1b[0m")
    console.log(`\x1b[32mLogged in!\x1b[0m`)
  }
}

Main.start();
