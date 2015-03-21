makeVector <- function(x = vector()) {  # a longer but more descriptive function name might have been                                                                  # "make methods to enable cachemean function to determine                                                                     # whether or not one needs to calculate a mean or if one is already                                                            # available to return
        
        answer <- NULL                              # at the onset, clearly we have no answer
        
        #  These next three functions are'methods' that can be used by cacheSolve
        
        get_original_data <- function() { x }   # when called, this function returns the value of the original object x                                                              that is passed to makeVector.  Called bigVec in example run below
        
        super_assign_answer <- function(answer) { # when called this function will 
                answer <<- answer }               # superassign, or cache, the value of answer to new answer object                                                               # (i.e. stores answer using  <<- superassignment_
        
        return_answer <- function() { answer }  # when called this function will return the cached value of answer
        
        # Lastly, makeVector returns a list of method objects holding above  functions.   
        # making a list is essential because a function can   only return one 
        # object and we have multiple things we want to store multiple method functions
        list(get_original_data = get_original_data,   
             super_assign_answer = super_assign_answer,     
             return_answer = return_answer)                  
        
}

cachemean <- function(output_makeVector = list, ...) { # this function takes a list (generated from                                                                                                    # makeVector)  
        answer <- output_makeVector$return_answer()    # accesses the answer object  # note I forgot to close ")" in original post
        if(!is.null(answer)) {                         # if mean was already cached (not NULL) ...
                
                message("getting cached data")         # ... send this message to the console
                return(answer)                         # ... and returns the mean ... "return" ends the                                                                                             $ function right here
        } else {                                                                                              # if the answer was NULL above
                original_data <- output_makeVector$get_original_data() # we access the original data...     
                answer <- mean(original_data, ...)             #  calculate the mean (assign to  answer)....
                output_makeVector$super_assign_answer(answer)  # store answer  (see                                                                                                                                   # super_assign_answer() in makeVector)
                answer                                         # return the answer to the console for user review
                
        }                       #close else
        
}                               #close function

# example running functions
bigVec <- makeVector(1:1000)        #after running you will notice a stored list object names 'bigVec' 
cachemean(bigVec)                         #cachemean accesses that stored object and makes some decisions
