import client from './';

export function getContentsAction() {
  const query = `#graphql
    {
      allContents {
        blockContent
      }
    }
  `;

  const variables = {};

  return client.query(query, variables).then((response) => response.data);
}
