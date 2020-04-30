import client, { localDB } from '../build/yuque'

// apis
const { users, groups, repos, docs } = client;

// router.get('/docs/:id', async (req, res) => {
//   const { id } = req.params;
//   if (!localDB[`docs_${id}`]) {
//     localDB[`docs_${id}`] = await docs.list({ namespace: `restry/${id}` });
//   }

//   res.json(localDB[`docs_${id}`]);
// })

export async function handler(event, context) {
  const { id } = event.queryStringParameters;
  if (!localDB[`docs_${id}`]) {
    localDB[`docs_${id}`] = await docs.list({ namespace: `restry/${id}` });
  }

  console.log('[event.headers]', event, context)
  return {
    statusCode: 200,
    body: JSON.stringify(localDB[`docs_${id}`]),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*', //  event.headers.referer,
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept',
    },
  };
}