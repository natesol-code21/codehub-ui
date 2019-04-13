var yaml = require("js-yaml");
var fs = require("fs");
var appspec = yaml.load(fs.readFileSync("appspec.yaml"));
var task_version = process.argv.slice(2)[0];
appspec.Resources[0].TargetService.Properties.TaskDefinition = task_version;
fs.writeFileSync('appspec.yaml',yaml.safeDump(appspec))
