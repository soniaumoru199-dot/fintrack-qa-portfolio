# FinTrack Test Plan

## Objective
Validate that core FinTrack functionality works correctly, is understandable to users, and handles invalid input safely.

## Scope
- Authentication
- Dashboard calculations
- Transaction creation
- Transaction search
- API health and transaction retrieval
- Basic responsive behaviour

## Test types
- Functional
- Negative
- Boundary
- Regression
- Exploratory
- Usability
- API

## Out of scope
- Real payment processing
- Production security testing
- Load testing against public systems

## Risks
- Incorrect financial calculations
- Invalid transaction data
- Authentication failures
- Search/filter regressions
- API response changes breaking the UI

## Entry criteria
Application is available locally and requirements are understood.

## Exit criteria
Critical and high-severity defects are addressed or documented; automated regression tests pass.
