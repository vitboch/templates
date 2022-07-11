const getInstallationSettings = async ({confirm}) => {
    const settings = {isGreen: false}
    settings.isGreen = await confirm('Would you like a green background?', true)
    if (settings.isGreen) {
        settings.green = 'body {background-color: green}'
    }
    return settings
}

module.exports = getInstallationSettings