TODO:
- just cast() and account READ helpers
- do build internally in cast (if no DSA account or if no DSA is assigned)
- remove gnosis code
- remove unused addresses and ABIs
- code cleanup
- any further improvements

The only required functions:
- build()
- cast() (with flashloan implementation)
- spells()
- getAccounts()
- getAuthById()
- getAuthByAddress()
- estimateGas()