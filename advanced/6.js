function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let subArray1 = array.slice(0, array.length / 2);
  let subArray2 = array.slice(array.length / 2);

  subArray1 = mergeSort(subArray1);
  subArray2 = mergeSort(subArray2);

  return merge(subArray1, subArray2);
}
