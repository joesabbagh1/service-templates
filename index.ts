//@ts-nocheck

import { readFileSync } from "fs"
import { configure, render } from "nunjucks"
import yargs from "yargs"

type buildJSONDockerFile = { preInstallCommands: string[] }

type buildJSON = {
  ServiceName: string
  ServiceType: string
  Dockerfile: buildJSONDockerFile
}

function main() {
  const argv = yargs(process.argv.slice(2)).argv

  const buildPath = argv["config"] as any

  const configurations = readFileSync(buildPath, { encoding: "utf-8" })

  const configurationData = JSON.parse(configurations) as buildJSON

  configure("templates", { autoescape: true })

  const res = render("Dockerfile", {
    ServiceName: configurationData.ServiceName,
    ServiceType: configurationData.ServiceType,
  })

  console.log(res)
}

main()
