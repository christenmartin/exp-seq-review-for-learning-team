# Sequelize and Express Review for Hannah's Learning Team

Doing stuff! This is a review of backend technology for the upcoming checkpoint.

## Getting started


1. Fork and clone this repo
2. cd into the repo
3. `npm install`
4. Create a database called `dog-time` on your machine by running `createdb dog-time` in your command line (it doesn't matter what directory you're in when you run this)
5. I've created a seed file that populates your database with dummy data so that you don't have to make a million post requests in order to have data. DO NOT WORRY AT ALL about how to make a seed file right now. In order to populate your database with this seed file, run `node scripts/seed.js` to seed your database. Only do this after you've created your db in step 4. Until you do this, you won't have any data to work with.
6. Look at your new database in Postico and see what data you have
7. Start the application with: `npm start`
8. Start looking at routes! Remember that all routes that serve up data in this project are prepended with `localhost:3000/api`, i.e. the full all dogs route is `localhost:3000/api/dogs/`
9. Use your browser to test out get routes and use Postman to test out put, post, and delete routes. Play around with the different ways you can add data with the existing setup, for example:
    1. You can pass in an ownerId when you create a dog and an association will be made automatically (as long as an owner with that id exists in the database)
    2. You can also post a dog with a dogYearsAge property and it will automatically create an age field based on the virtual setter we have
    3. Aaaand you can create a dog without specifying a breed and your dog will be assigned the breed 'mutt' by default
