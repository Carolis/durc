const { MongoClient } = require('mongodb')

async function main() {
  const uri = 'Insert cluster URI here'

  const client = new MongoClient(uri)

  try {
    await client.connect()

    // await createListing(client, {
    //   name: 'Listing test Name',
    //   summary: 'Beco do batima',
    //   bedrooms: 3,
    //   bathrooms: 5
    // })

    await createListings(client, [
      {
        name: 'Listing test Name',
        summary: 'Beco do batman',
        bedrooms: 3,
        bathrooms: 5
      },
      {
        name: 'Listing test Name 2',
        summary: 'Beco do coringa',
        bedrooms: 3,
        bathrooms: 5
      },
      {
        name: 'Listing test Name 3',
        summary: 'Beco do aquaman',
        bedrooms: 3,
        bathrooms: 5
      }
    ])
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
}

main().catch(console.error)

//TODO: find() limit() updateOne() deleteMany()

//add many listings
async function createListings(client, newListings) {
  const result = await client
    .db('sample_airbnb')
    .collection('listingsAndReviews')
    .insertMany(newListings)
  console.log(`New listings created with ids: ${result.insertedIds}`)
}

//add just one listing
async function createListing(client, newListing) {
  const result = await client
    .db('sample_airbnb')
    .collection('listingsAndReviews')
    .insertOne(newListing)
  console.log(`New listing created with id: ${result.insertedId}`)
}

//101
async function listDatabases(client) {
  const databaseList = await client.db().admin().listDatabases()
  databaseList.databases.map((db) => {
    console.log(`--------${db.name}`)
  })
}
