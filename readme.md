_Description:_ Super simple example of how to use netlify functions as a backend in a seperate repo from a front end. Database integration requires webpack bundling modules and won't be covered here. In fact I don't recommend using this as a starting point other than for learning. For a useful starting point with netlify use the netlify-lambda npm package, which I will be covering here: https://github.com/andrewdownie/netlify-functions-using-netlify-lambda.

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
