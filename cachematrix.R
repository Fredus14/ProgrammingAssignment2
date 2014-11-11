##Assignment: Caching the Inverse of a Matrix

## The two functions below were writen to cache the inverse of a matrix:

#1.makeCacheMatrix: This function creates a special "matrix" object that can cache its inverse.
#This is done by the following activities:
## 1.   set the value of the Matrix
## 2.   get the value of the Matrix
## 3.   set the value of the Inverse of matrix
## 4.   get the value of the Inverse of matrix


makeCacheMatrix <- function(x = matrix()) { # input x will be a matrix
        
        m <- NULL    #  m will store our 'inverse' and it's reset to NULL every 
        #    time makeVCacheMatrix is called
        
        set <- function(y) {    # takes an input matrix
                x <<- y         # saves the input matrix 
                m <<- NULL      # resets the inverse to NULL, basically what happens when a new object is generated.
        }
        
        #  note these next three functions are not run when makeCacheMatrix is called.
        #   instead, they will be used by cacheSolve() to get values for x or for
        #   m (solve) and for setting the inverse.  These are usually called object 'methods'
        
        get <- function() { x }   # x$get() this function returns the value of the original matrix
        
        setinverse <- function(solve) { #x$setinverse() this is called by cachemean() during the first cacheSolve() access
                m <<- solve }  #  and it will store the value using superassignment
        
        getinverse <- function() { m } # x$getmean this will return the cached value to cacheSolve() on
        #  subsequent accesses
        
        list(set = set,                #   This list is returned with the newly created list object.  
             get = get,                #   It lists all the functions ("methods") that are part of
             setinverse = setinverse,  #   the object.  If a function is not on the list then it cannot
             getinverse = getinverse)  #   be accessed externally.
        
}


#2.cacheSolve:  This function computes the inverse of the special "matrix" returned by makeCacheMatrix above. 
#If the inverse has already been calculated (and the matrix has not changed), then the cachesolve should skip the computation 
#and retrieve the inverse from the cache.

## Usage format: cacheSolve(special_matrix)

cacheSolve <- function(x, ...) {
        ## Return a matrix that is the inverse of matrix 'x'
        
        ## Retrieve inverse and assign to m
        m <- x$getinverse()
        
        ## Check if m has a value (i.e. if the inverse has been calculated before),
        ## indicate if so
        if(!is.null(m)) {
                message("getting cached data")
                return(m)
        }
        
        ## Else, calculate inverse
        data <- x$get() ##x$get() returns the value of the original matrix and then its assigned to data
        m <- solve(data, ...) ##solve creates the inverse of original matrix stored in data and asssign it to m
        
        ## Store inverse in special_matrix to m in makeCacheMatrix setinverse <- function(solve) { m <<- solve }
        x$setinverse(m)
        
        ## Return m
        m
}

## Testing the above functions
set.seed(1)
x <- matrix(rnorm(25, 2, 1), 5, 5) ## Create a random normal matrix with 5 rows and 5 collumns and atribute it to variable x
X<- makeCacheMatrix(x)
cacheSolve(X)


