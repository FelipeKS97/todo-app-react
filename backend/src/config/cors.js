module.exports = function(req, res, next) {
    res.headers('Allow-Control-Origin','*')
    res.headers('Allow-Control-Methods','GET, POST, OPTIONS, DELETE')
    res.headers('Allow-Control-Headers','Origin, X-Requested-With, Content-Type, Accept')
    next()

}