import { Command } from '../../../command';
import type { Message, Client } from 'discord.js';
import { isAdmin, isOwner } from '../../../utils';
import { CommandError } from '../../../errors';
import dedent from 'dedent';
import { welcome } from '../../welcome';

class ShowConfig implements Command {
    public name = 'show-config';

    run(client: Client, message: Message, args: string[]): void {
        // Bail unless we're in a guild and a member ran this
        if (!message.guild || !message.member) return;

        // Command is owner/admin only
        if (!isOwner(message.guild, message.member) && !isAdmin(message.guild, message.member)) {
            throw new CommandError('You\'re not an admin or the owner, sorry!');
        }

        // Get guild's config, if missing we'll return the defaults
		const guildConfig = client.settings.get(message.guild.id)!;
        const header = dedent`
            Here is the server's current configuration, to update it use \`${guildConfig.prefix}set-config <property> <value>\`.
            **Tip**: you can edit sub-properties via dot notation e.g. \`${guildConfig.prefix}set-config welcome.enabled true\`
        `;
        const config = '```json\n' + JSON.stringify(guildConfig, null, 2) + '```';
        message.channel.send(`${header}\n${config}`);
    }
};

export const showConfig = new ShowConfig();