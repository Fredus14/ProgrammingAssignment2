##Assignment: Caching the Inverse of a Matrix

## The two functions below were writen to cache the inverse of a matrix:

#1.makeCacheMatrix: This function creates a special "matrix" object that can cache its inverse.
#This is done by the following activities:
## 1.   set the value of the Matrix
## 2.   get the value of the Matrix
## 3.   set the value of the Inverse of matrix
## 4.   get the value of the Inverse of matrix

makeCacheMatrix <- function(x = matrix()) {

        inv <- "No value has been set for the matrix yet"
        set <- function(y) {
                x <<- y
                inv <<- NULL
        }
        get <- function() x
        setinv <- function(solve) inv <<- solve
        getinv <- function() inv
        list(set = set, get = get,
             setinv = setinv,
             getinv = getinv)
        
}


#2.cacheSolve:  This function computes the inverse of the special "matrix" returned by makeCacheMatrix above. 
#If the inverse has already been calculated (and the matrix has not changed), then the cachesolve should skip the computation 
#and retrieve the inverse from the cache.


cacheSolve <- function(x, ...) {
        
        inv <- x$getinv()
        if(!is.null(inv)) {
                message("getting cached data")
                return(inv)
        }
        data <- x$get()
        inv <- solve(data, ...)
        x$setinv(inv)
        inv
}


## Testing the above functions
x <- matrix(rnorm(25, 2, 1), 5, 5) ## Create a random normal matrix with 5 rows and 5 collumns and atribute it to variable x
X<- makeCacheMatrix(x) ## apply the functions above to x and atribute it to the variable X
X$get() ## Get the matrix x
X$getinv() ## The inverse matrix has not yet been calculated so it returns the inv value "There is not value for the inverse matrix yet"
X$setinv(solve(x)) ## Set the inverse of the matrix calculating it.
X$getinv() ## Return the calculated inverse of the matrix. If this function is called again it will and the matrix has not been changed
           ## it will skip the calculation and return the cached inverse matrix again.

