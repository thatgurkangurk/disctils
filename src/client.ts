import { ConsolaInstance, consola } from 'consola';
import discord from 'discord.js'

interface ExtendedClientOptions extends discord.ClientOptions {
    token: string;
}

export class Client extends discord.Client<true> {
    private extendedOptions: ExtendedClientOptions;
    public readonly console: ConsolaInstance = consola
    constructor(options: ExtendedClientOptions) {
        super(options);
        this.console.wrapConsole();
        this.extendedOptions = options;
    }

    public override async login(): Promise<string> {
        return await super.login(this.extendedOptions.token)
    }
}