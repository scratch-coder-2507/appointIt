require('dotenv').config()

const Port = process.env.NODE_ENV === 'test' ? 4001 : (process.env.PORT || 4000);

const MongodbUrl =  process.env.NODE_ENV === 'production' ? process.env.MONGODB_URL_PRODUCTION : (process.env.MONGODB_URL_DEVELOPMENT || 'mongodb+srv://hgadmin:hardik123@cluster0.osahc.mongodb.net/appoint?authSource=admin&replicaSet=atlas-11w40y-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true')

module.exports = {
  Port: Port,
  MongodbUrl: MongodbUrl
}