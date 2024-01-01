//@ts-nocheck

import { readFileSync } from "fs"
import yargs from "yargs"

type buildJSON = {
  Name: string
  ServiceType: string
}

function main() {
  const argv = yargs(process.argv.slice(2)).argv

  const buildPath = argv["config"] as any

  const configurations = readFileSync(buildPath, { encoding: "utf-8" })

  const configurationData = JSON.parse(configurations) as buildJSON

  console.log(configurationData)
}

main()
