// No it will not be garbage collected. The counter variable references the function that is
// returned by the function makeCounter. This function creates a closure that keeps the local
// variable count within scope, so as long as count references that function, it will be kept 
// from GC
