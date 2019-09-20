/*
    We need to write a function(s) that returns the shortest 
    amount of jumps needed to get through the cloudds (c) 
    without jumping on the thundercloud (1)

    
*/

function findPaths(c, paths) {
    // Remaining item in the array
  if (c.length > 1) {
    // making copies of the path 
    let path1 = paths.slice();
    let path2 = paths.slice();

    /* check path1 where we iterate over c by a jump of 1
    check if c[1] is 1, quickly invalidate path1
    or add 1 to the path1
    */
    path1 = c[1] !== 1 ? [...path1, 1] : 0;

    path2 = c[2] !== 1 ? [...path2, 2] : 0;

    // Invalidationg if we can't cointue with jump 1 or 2
    if (path1 === 0 && path2 === 0) {
      paths = 0;
    } else if (path1 !== 0 && path2 === 0) {
      return findPaths(c.slice(1), path1);
    } else if (path1 === 0 && path2 !== 0) {
      return findPaths(c.slice(2), path2);
    } else if (path1 !== 0 && path2 !== 0) {
      path1 = findPaths(c.slice(1), path1);
      path2 = findPaths(c.slice(2), path2);
      // Compare & return shortest path
      return path1.length < path2.length ? path1 : path2;
    }
  }
  
  return paths;
}


function jumpingOnClouds(c) {
  const min = 2;
  const max = 100;
  let jumps = 0;
  if (c.length >= min && c.length <= max) {
    jumps = findPaths(c, []);
  }
  return typeof jumps === "number" ? jumps : jumps.length;
}


jumpingOnClouds([0, 1, 0, 0, 0]); // 2 
jumpingOnClouds([1, 1, 1, 0, 0]); // 0 
jumpingOnClouds([]); // 0 
jumpingOnClouds([1, 0, 1, 0, 0, 1, 0, 1 ... ]); // 0 
jumpingOnClouds([1, 0, 1, 0, 0, 1, 0, 1 ... ]); // 0 
jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]); // 4 
jumpingOnClouds([0, 0, 0, 1, 0, 0]); // 3 