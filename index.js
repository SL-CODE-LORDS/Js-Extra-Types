var types = require('./lib')
module.exports.init = () => {
    types.string.init()
    types.array.init()
    types.object.init()
    types.regex.init()
    types.number.init()
}