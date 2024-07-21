const Store = new Map()

module.exports = {
  getCaptchaStore () {
    return Store
  },
  CaptchaStore: Store
}
