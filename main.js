'use strict';

const {db} = require('./server/db/models')
const app = require('./server')
const PORT = 3000;


//here i'm syncing my database and once that's done, my server begins to listen on port 3000
db.sync({})
.then(() => {
  console.log('db synced')
  app.listen(PORT, () => console.log(`serving it on port ${PORT}`))
});
