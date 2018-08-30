
/**
 * DATABASE UTILITY FUNCTIONS
 * --------------------------
 * - database firebase function needed
 */


/**
 * Returns the node where the @url links
 */
export const dbGetNode = (url) => {

  return database.ref(`${url}`);

};


/**
 * Returns the most recent data from a snapshot
 */
export const dbGetSnapshotData = ({ snapshot, singleData }) => {

  let snapshotVal = snapshot.val();

  return new Promise((resolve) => {

    let finalValue = snapshotVal;

    if(finalValue) {

      if (!singleData) {

        const tempsItems = [];
        const itemsMap = new Map(Object.entries(finalValue));
        itemsMap.forEach((value) => {
          const post = Object.assign({}, value);
          // push values in a regular array
          tempsItems.push(post);
        }); // itemsMap
        // save array in state
        const dataReverse = tempsItems.reverse();
        finalValue = [...dataReverse];

      }

    }

    resolve(finalValue);

  });

}; // dbGetSnapshotData


/**
 * DELETE A RECORD
 * @param {*} url 
 */
export const dbDeleteRecord = (url) => {

  let deleteOk = window.confirm(textCopy['confirm delete']);

  if (deleteOk) {

    database.ref(url).remove();

  }

};


/**
 * Save a record to the database
 * @isSingleRecord: (true) every new record will be updated
 * @isSingleRecord: (false) there will be a list of records
 * @param {*} url 
 */
export const dbSaveRecord = ({ url, record, isSingleRecord, isResolved }) => {

  const listRef = database.ref(url);
  record.createdOn = Date.now();

  return new Promise((resolve) => {

    let updates = {};
    let recordId = '';

    if(!isSingleRecord) {
      if (!record.id) { 
        // Get a key for a new Post.
        recordId = listRef.push().key; 
        // save record "key" as "id"
        record.id = recordId;
      } 
      updates[`${recordId}`] = record;
    } else {
      updates = record; 
    }

    //...
    listRef.update(updates);
    resolve(isResolved)

  });// [end] promise

};

 