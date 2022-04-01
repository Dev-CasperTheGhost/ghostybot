import * as DJS from "discord.js";
import { request } from "undici";
import { Bot } from "structures/Bot";
import { SubCommand } from "structures/Command/SubCommand";

interface Data {
  id: string;
  content: string;
  author: string;
  tags: string[];
}

export default class QuoteCommand extends SubCommand {
  constructor(bot: Bot) {
    super(bot, {
      commandName: "fun",
      name: "quote",
      description: "Returns a random quote",
    });
  }

  async execute(
    interaction: DJS.CommandInteraction<"cached">,
    lang: typeof import("@locales/english").default,
  ) {
    await interaction.deferReply();

    const data = (await request(this.APIs.Quote).then((r) => r.body.json())) as Data;

    const embed = this.bot.utils
      .baseEmbed(interaction)
      .setTitle(lang.GAMES.QUOTE)
      .setDescription(data.content)
      .addField(lang.UTIL.AUTHOR, `${data.author} (${data.id})`)
      .addField(lang.GAMES.TAGS, data.tags.join(", "));

    await interaction.editReply({ embeds: [embed] });
  }
}
