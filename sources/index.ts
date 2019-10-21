import {BaseCommand, WorkspaceRequiredError}         from '@yarnpkg/cli';
import {Cache, Configuration, Project, StreamReport} from '@yarnpkg/core';
import {structUtils}                                 from '@yarnpkg/core';
import {Command}                                     from 'clipanion';

// eslint-disable-next-line arca/no-default-export
export default class UnplugCommand extends BaseCommand {
  @Command.Rest()
  patterns: Array<string> = [];

  static usage = Command.Usage({
    description: `testing the command Feature`,
    details: `
      Details....
    `,
    examples: [[
      `Unplug lodash`,
      `yarn unplug lodash`,
    ], [
      `Unplug one specific version of lodash`,
      `yarn unplug lodash@1.2.3`,
    ]],
  });

  @Command.Path(`Testing`)
  async execute() {
    this.context.stdout.write("Testing!")
  }
}
