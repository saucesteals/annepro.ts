import {
  Discord,
  Client,
  Command,
  CommandMessage,
  Guard,
} from "@typeit/discord";
import { colors, defaultKeys, randomRGB } from "../helpers/utils"; 
import { LEDController } from "../controller/controller";

@Discord("!")
export class MainCog {
  @Command("rgb :r :g :b")
  private rgb(message: CommandMessage) {
    const { r, g, b } = message.args;
    LEDController.setSingleColorLed([r, g, b]);
    message.reply(`Successfully colored your keyboard to ${r}, ${g}. ${b}`);
  }

  @Command("color :requestedColor")
  private color(message: CommandMessage) {
    const requestedColor: string = message.args.requestedColor;
    LEDController.setSingleColorLed(colors[requestedColor.toLowerCase()]);
    message.reply(`Successfully colored your keyboard to ${requestedColor}`);
  }

  @Command("random")
  private random(message: CommandMessage) {
    var randomized = {};
    for (var key of Object.keys(defaultKeys)) {
      randomized[key] = randomRGB();
    }
    LEDController.setIndividualKeys(randomized);
    message.reply(`Successfully randomized the color of your keyboard!`);
  }

  @Command("reset")
  private reset(message: CommandMessage) {
    LEDController.setIndividualKeys(defaultKeys);
    message.reply(`Successfully reset the color of your keyboard!`);
  }
}
