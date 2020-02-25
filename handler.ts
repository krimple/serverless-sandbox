import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const shout: APIGatewayProxyHandler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'AAAAHHH!',
      input: event,
    }, null, 2),
  };
}
