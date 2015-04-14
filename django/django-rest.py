''' 
REST Framework

1. Authentication
2. Serialization
3. Function-based views

Serialization: What's it's relationship to ORM?

'''
# Authentication: The mechanism of associating an incoming request with a set
# of credentials

# An instance of User class (from contrib.auth)
request.user 

# For additional authentication info
request.auth 

# Serialization: Allows querysets and model instances to be converted to
# native Python datatypes

