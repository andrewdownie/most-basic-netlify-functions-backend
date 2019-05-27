## 1) The most basic netlify functions example:
https://flaviocopes.com/netlify-functions/

## 2) Add CORS (Access-Control-Allow-Origin header) so you can access your function as needed
A value of '&ast;' isn't recommended, but it sure is convenient

`exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: 'No worries, all is working fine!',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  })
}`

## 3) Connect your netlify function up to faunadb
???

profit
