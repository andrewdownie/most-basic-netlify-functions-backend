## 1) The most basic netlify functions example:
https://flaviocopes.com/netlify-functions/

## 2) Add CORS (Access-Control-Allow-Origin header) to the response header so you can access your function as needed from a front end hosted from another url
A value of '&ast;' isn't recommended, but it sure is convenient  
More info on CORS and Access-Control-Allow-Origin: https://stackoverflow.com/a/10636765  
In the above example, this would overwrite the contents of the test.js file

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
