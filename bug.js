```javascript
// Incorrect usage of $inc operator for updating array elements
db.collection.updateOne( { _id: 1 }, { $inc: { 'arr.$[].count': 1 } } );
```