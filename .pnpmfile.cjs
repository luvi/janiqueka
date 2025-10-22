function readPackage(pkg, context) {
  // Allow build scripts for these packages
  return pkg
}

module.exports = {
  hooks: {
    readPackage
  }
}
