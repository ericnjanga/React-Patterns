
/**
 * Basic utility functions
 * --------------------------
 * - database firebase function needed
 */

/**
 * Toggle property of a specific item of a collection (give the opposite value to the rest)
 * - Operation is done of a copy of the collection (which will be returned)
 * 
 * @arrCollection: collection that will be mapped
 * @itemIdProp: string identifying the item whose property will be toggled  
 * @itemProp: property we want to toggle
 * @itemVal: value that the target item which get
 * @itemOppVal: opposite value (items which aren't qualifying will have it)
*/
export const toggleCollectionProperty = ({
  arrCollection, 
  targetId, 
  itemIdProp,
  itemProp, 
  itemVal, 
  itemOppVal,
}) => {
  const tplCollection = [...arrCollection];
  for(let i = 0, l=tplCollection.length; i < l; i += 1) {
    if(tplCollection[i][itemIdProp] === targetId) {
      tplCollection[i][itemProp] = itemVal;
    } else {
      tplCollection[i][itemProp] = itemOppVal;
    }
  }
  
  return tplCollection;
};


/**
 * Get an from array, an item which property @ppt has the value @pptValue
 * - collection structure: arr = [{ppt1:pptValue1, ppt2:pptValue2}, {ppt3:pptValue3}, ...]
 * @param {*} arrColl 
 * @param {*} ppt 
 * @param {*} pptValue 
 */
export function getCollItemByPptVal(arrColl, ppt, pptValue) {
  return arrColl.filter((collItem) => {
    return collItem[ppt] === pptValue;
  });
}


/**
 * Within an array of multiple objects
 * - Return an array of all objects within that array which property @ppt has the value @pptValue
 * - (resuses getCollItemByPptVal())
 * - collection structure: arr = [{
 *    ppt1: [{ppt1:pptValue1, ppt2:pptValue2}, {ppt3:pptValue3}, ...],
 *    ppt2: [{ppt1:pptValue1, ppt2:pptValue2}, {ppt3:pptValue3}, ...],
 *  }]
 * @param {*} arrColl 
 * @param {*} ppt 
 * @param {*} pptValue 
 */
export function getAllItemsOfCollByPptVal(arrCollection, collItemPpt, ppt, pptValue) {

  return arrCollection.map((arrColl) => {
    return getCollItemByPptVal(arrColl[collItemPpt], ppt, pptValue)[0];
  });

}


/*
 * Returns a text depending on the boolean value
*/
export const toggleText = (bool, val1, val2) => {
  return bool ? val1 : val2;
};


