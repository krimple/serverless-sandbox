import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const shout: APIGatewayProxyHandler = async (event, context) => {
    /*  console.log('Got event from my call. Body is:');
      console.log(JSON.stringify(event.body));
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: `AAAAHHH ${event.body}!`,
          input: event,
        }, null, 2),
      };

     */

    let message: string;

    switch (event.pathParameters.key) {
        case 'shk':
            message = 'AAAAHH SHARK!';
            break;
        case 'py':
            message = 'AAAAHH PYTHON!';
            break;
        default:
            message = 'AAAAHH LAZY!';
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `AAAAHHH ${message}`
        })
    };
};
