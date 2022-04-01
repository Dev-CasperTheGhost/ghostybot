import { time } from "@discordjs/builders";
import * as DJS from "discord.js";
import { request } from "undici";
import { Bot } from "structures/Bot";
import { SubCommand } from "structures/Command/SubCommand";

export default class NpmInfoCommand extends SubCommand {
  constructor(bot: Bot) {
    super(bot, {
      commandName: "info",
      name: "npm",
      description: "Search packages on npm by their name",
      options: [
        {
          name: "query",
          description: "The search query",
          type: "STRING",
          required: true,
        },
      ],
    });
  }

  async execute(
    interaction: DJS.CommandInteraction<"cached">,
    lang: typeof import("@locales/english").default,
  ) {
    await interaction.deferReply();

    const query = interaction.options.getString("query", true);
    const data = (await request(`http://registry.npmjs.com/-/v1/search?text=${query}&size=5`).then(
      (res) => res.body.json(),
    )) as any;

    const foundPackages = data.objects.map(({ package: pkg, searchScore }) => {
      return { ...pkg, searchScore };
    });

    if (foundPackages.length <= 0) {
      return interaction.editReply({
        content: this.bot.utils.translate(lang.UTIL.NPM_NOT_FOUND, { query }),
      });
    }

    // most accurate package
    const foundPackage = foundPackages.find((d) => d.searchScore > 10000);

    // if it was found, show more info about the package, otherwise return a list of the top 5
    if (foundPackage) {
      const updatedAt = time(new Date(foundPackage.date), "F");

      const maintainers = foundPackage.maintainers.map(({ username }) => username).join(", ");
      const downloads = (await request(`${this.APIs.npm}${foundPackage.name}`)
        .then((res) => res.body.json())
        .catch(() => null)) as { downloads: number } | null;

      const embed = this.bot.utils
        .baseEmbed(interaction)
        .setURL(foundPackage.links.npm)
        .setTitle(foundPackage.name)
        .setDescription(foundPackage?.description ?? lang.GLOBAL.NONE)
        .addField(lang.UTIL.VERSION, foundPackage.version, true)
        .addField(lang.UTIL.LAST_MODIFIED, updatedAt, true)
        .addField(lang.UTIL.MAINTAINERS, maintainers);

      if (downloads?.downloads) {
        embed.addField(
          lang.UTIL.DOWNLOADS,
          `${this.bot.utils.formatNumber(downloads.downloads)}/week`,
          true,
        );
      }

      return interaction.editReply({ embeds: [embed] });
    }

    const embed = this.bot.utils
      .baseEmbed(interaction)
      .setTitle(lang.UTIL.NPM_SEARCH)
      .setDescription(this.bot.utils.translate(lang.UTIL.NPM_TOP_5, { query }));

    foundPackages.forEach((pkg) => {
      embed.addField(
        pkg.name,
        `
**${lang.UTIL.VERSION}:** ${pkg.version}
**${lang.UTIL.AUTHOR}:** ${pkg?.publisher.username}
[**${lang.UTIL.VIEW_ON_NPM}**](${pkg.links.npm})
        `,
      );
    });

    await interaction.editReply({ embeds: [embed] });
  }
}
