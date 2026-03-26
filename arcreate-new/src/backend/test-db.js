const mongoose = require('mongoose');

// Make sure to add the database name at the end
const MONGODB_URI = 'mongodb+srv://ibtefernandezau_db_user:Ilove_69dawg@cluster0.sb5flya.mongodb.net/?appName=Cluster0';

console.log('🔌 Testing MongoDB connection...');
console.log(`URI: ${MONGODB_URI.replace(/:[^:]*@/, ':****@')}`);

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ Connected successfully!');
    console.log('✅ Database is reachable');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Connection failed:');
    console.error(err.message);
    
    if (err.message.includes('bad auth')) {
      console.error('❌ Authentication failed - check username/password');
    }
    if (err.message.includes('ENOTFOUND') || err.message.includes('ECONNREFUSED')) {
      console.error('❌ Cannot reach MongoDB Atlas - check:');
      console.error('   1. Your internet connection');
      console.error('   2. If you need a VPN/proxy');
      console.error('   3. Network Access whitelist in MongoDB Atlas');
    }
    process.exit(1);
  });