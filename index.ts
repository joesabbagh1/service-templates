import { readFileSync, writeFileSync } from "fs"
import { configure, render } from "nunjucks"
import yargs from "yargs"

type buildJSONDockerFile = {
  InstallCommand: string
  preInstallCommands: string[]
  postInstallCommands: string[]
}

type buildJSON = {
  ServiceName: string
  ServiceType: string
  Dockerfile: buildJSONDockerFile
}

function main() {
  const argv = yargs(process.argv.slice(2)).argv

  //@ts-ignore
  const buildPath = argv["config"] as any

  const configurations = readFileSync(buildPath, { encoding: "utf-8" })

  const configurationData = JSON.parse(configurations) as buildJSON

  configure("templates", { autoescape: true })

  const Dockerfile = render("Dockerfile", configurationData)

  writeFileSync("Dockerfile", Dockerfile)
}

main()
