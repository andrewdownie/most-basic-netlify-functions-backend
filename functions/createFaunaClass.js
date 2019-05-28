/* createFaunaClass.js
    An example connecting to faunadb by using a fauna key from an environment variable,
    and creating a class, followed by creating an item in that class.

    This is meant to be bare bones for increased utility as an example,
    no checks are done, no errors reported, nothing is flexible or clever here.
*/

import faunadb from 'faunadb';
const q = faunadb.query;

const key = process.env.FAUNADB_SERVER_SECRET;
const client = new faunadb.Client({
    server: key
});

//for this example, we're just going to hard code this as straight forwardly as possible
const className = 'frontEndMessage';
const frontEndMessage = 'Hello front end';

exports.handler = (event, context, callback) => {

    /* Create the class */
    return client.query(q.Create(q.Ref('classes')), {name: className})
    .then(classResponse => {
            return callback(null, {
                statusCode: 200,
                body: 'response message goes here',
                headers: {
                'Access-Control-Allow-Origin': '*'
                },
            })

        /* Create an item in the class */
        // return client.query(q.Create(q.Ref(`classes/${className}`), {data: {message: frontEndMessage}}))
        // .then(itemResponse => {

        // });

    });
    

}