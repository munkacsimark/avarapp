module.exports = {
  productionSourceMap: false,
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/avarapp/'
    : '/'
}
