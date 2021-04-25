const dev = 'http://192.168.43.130'
const ws = `${dev}:9999`
module.exports = {
  dev,
  ws,
  devIp: {
    platform: `${dev}:29001`,
    schedule: `${dev}:29002`,
    document: `${dev}:29003`,
    process: `${dev}:29004`,
    equip: `${dev}:29005`,
    run: `${dev}:29006`,
    plan: `${dev}:29007`,
    instrument: `${dev}:29008`,
  },
}
