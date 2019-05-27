
exports.handler = (event, context, callback) => {
    const faunaDBResponse = 'This is from faunadb, but actually not';

    callback(null, {
        statusCode: 200,
        body: faunaDBResponse,
        headers: {
        'Access-Control-Allow-Origin': '*'
        },
    })
}