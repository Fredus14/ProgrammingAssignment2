##Frome (https://class.coursera.org/rprog-006/forum/thread?thread_id=626)

> bigVec <- makeVector(1:1000)        # now we have an object 'bigVec' of type list
> biggerVec <- makeVector(1:100000)   # 'biggerVec' of type list with 100,000 numbers
>
        > cachemean(bigVec)                   # first time so this function will compute 'mean', store it and return it
[1] 500.5

> cachemean(bigVec)           # 2nd access, value is cached so compute time is saved
getting cached data           #  note that a messsage is returned for cached values
[1] 500.5


> cachemean(biggerVec)  # different object so different mean value returned
[1] 50000.5
> cachemean(biggerVec)  # 2nd access so we get the reminder that this is cached
getting cached data
[1] 50000.5

>bigVec <- makeVector(1:2) # changing the vector values so makes a new object (but with same
#     name, note)

> cachemean(bigVec)        # the code is smart enough to figure out there's a new vector
[1] 1.5                    #    so a new mean is calculated and cached
> cachemean(bigVec)
getting cached data
[1] 1.5


### OK, this is all you should be doing with these functions since a key 'object-oriented programming' principle is to only access the objects from the outside.  That is, don't directly access the functions ("methods" in OOP speak) or data inside.  I'm shaky on OOP terminology but I think the buzz word is "encapsulation".


makeVector <- function(x = numeric()) {      # input x will be a vector
        
        m <- NULL    #  m will store our 'mean' and it's reset to NULL every 
        #    time makeVector is called
        
        #  note these next three functions are not run when makeVector is called.
        #   instead, they will be used by cachemean() to get values for x or for
        #   m (mean) and for setting the mean.  These are usually called object 'methods'
        
        get <- function() { x }   # this function returns the value of the original vector
        
        setmean <- function(mean)  # this is called by cachemean() during the first cachemean()
        { m <<- mean }  #  access and it will store the value using superassignment
        
        getmean <- function() { m } # this will return the cached value to cachemean() on
        #  subsequent accesses
        
        list(get = get,          #  This list is returned with the newly created object.       
             setmean = setmean,  #   It lists all the functions ("methods") that are part of
             getmean = getmean)  #   the object.  If a function is not on the list then it cannot
        #   be accessed externally.
        
        #  NOTE: I described the function of this list incorrectly at first.  Thanks to several
        #   student posters below (Richard Brandt, Michael Bellhouse, Getinet and Anonymous) for 
        #   helping me understand it correctly.  You can read a more detailed explanation in their
        #   comments below.  Thanks guys! 