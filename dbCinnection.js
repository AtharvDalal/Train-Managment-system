import mongoose from 'mongoose';

const DbConnection = () => {
  const uri = 'mongodb+srv://sangamdalal24:sangam24@cluster0.lhpjvri.mongodb.net/train-management?retryWrites=true&w=majority&appName=Cluster0';

  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Database connected');
    })
    .catch((error) => {
      console.error('Database connection error:', error);
    });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('We are connected to the database');
  });
};

export default DbConnection;
