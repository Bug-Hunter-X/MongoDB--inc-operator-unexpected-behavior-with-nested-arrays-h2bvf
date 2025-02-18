```javascript
// Correct usage of $inc operator with array filter for targeted updates
db.collection.updateOne( { _id: 1, 'arr.elementId': 'specificElement' }, { $inc: { 'arr.$.count': 1 } } );
```