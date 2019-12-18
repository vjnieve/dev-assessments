# Test #2 - Data Filtering

This is a continuation of the first test.

Your task will be to filter the output from your first test so that only characters with the `last_name` of "Simpson" will be returned.  The results should now match what's in the `expected_output.json` file:

```
[
  {
    "first_name": "Homer",
    "last_name": "Simpson",
    "catchphrase": "Doh!",
    "example": "Homer Simpson says Doh!"
  },
  {
    "first_name": "Bart",
    "last_name": "Simpson",
    "catchphrase": "Ay Carumba",
    "example": "Bart Simpson says Ay Carumba"
  }    
]
```

## Instructions

Open up the `index.js` file.  Write your code there.  

Note: You are not limited to writing the entirety of the code in `index.js`, feel free to break the code out into modules.


## Testing your Solution

Check out the `index.spec.js` file for the assertion our test suite runs to check solution. To run the test script in your terminal:

```bash
# From the Project Root (Recommended)
$: npm test

# Or, to run it specifically from this test's folder
$: ../node_modules/.bin/mocha index.spec.js

```

## Hints and notes to help you out

- Lookup the various JavaScript Array functions for filtering elements

