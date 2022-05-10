module.exports = {
    configureWebpack: config => {
        optimization = {
            concatenateModules: false,
            providedExports: false,
            usedExports: false
        }
    }
}
