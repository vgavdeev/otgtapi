module.exports = ({ env }) => {
  if (env('NODE_ENV') === 'production') {
    return {}
  }

  return {}
}
