import client, { localDB } from '../build/yuque'

// apis
const { users, groups, repos, docs } = client;

// const router = express.Router();


// router.get('/books', (req, res) => {
//   if (!localDB.books) {
//     repos.list({ user: 'restry' }).then((books) => {
//       localDB.books = books;
//       res.json(localDB.books);
//     });
//     return;
//   }

//   res.json(localDB.books);
// });

// router.get('/docs/:id', async (req, res) => {
//   const { id } = req.params;
//   if (!localDB[`docs_${id}`]) {
//     localDB[`docs_${id}`] = await docs.list({ namespace: `restry/${id}` });
//   }

//   res.json(localDB[`docs_${id}`]);
// })



export async function handler(event, context) {
  if (!localDB.books) {
    localDB.books = await repos.list({ user: 'restry' })
  }
  console.log('[event.headers]', event.headers, context)
  return {
    statusCode: 200,
    body: JSON.stringify(localDB.books),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*', //  event.headers.referer,
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept',
    },
  };
}