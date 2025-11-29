import { Command, CommandRunner } from 'nest-commander';
import chalk from 'chalk';

@Command({
  name: 'hello',
  description: 'Hello',
  aliases: ['h'],
})
export class HelloCommand extends CommandRunner {
  run(prams: string[], options?: Record<string, any>): Promise<void> {
    console.log(chalk.yellow('Hello'), { prams, options });

    return Promise.resolve();
  }
}
