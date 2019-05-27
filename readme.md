## 1) The most basic netlify functions example:
https://flaviocopes.com/netlify-functions/

## 2) Add CORS (Access-Control-Allow-Origin header) to the response header so you can access your function as needed from a front end hosted from another url
A value of '&ast;' isn't recommended, but it sure is convenient  
In the above example, this would get added to the test.js file

```javascript
exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: 'No worries, all is working fine!',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  })
}
```

## 3) Connect your netlify function up to faunadb
???

profit
