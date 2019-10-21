"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_1 = require("@yarnpkg/cli");
const clipanion_1 = require("clipanion");
// eslint-disable-next-line arca/no-default-export
class UnplugCommand extends cli_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.patterns = [];
    }
    async execute() {
        this.context.stdout.write("Testing!");
    }
}
UnplugCommand.usage = clipanion_1.Command.Usage({
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
__decorate([
    clipanion_1.Command.Rest()
], UnplugCommand.prototype, "patterns", void 0);
__decorate([
    clipanion_1.Command.Path(`Testing`)
], UnplugCommand.prototype, "execute", null);
exports.default = UnplugCommand;
