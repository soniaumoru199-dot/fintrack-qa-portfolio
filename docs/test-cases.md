# Test Cases

| ID | Scenario | Steps | Expected Result |
|---|---|---|---|
| TC-001 | Valid login | Enter valid email/password and submit | Dashboard opens |
| TC-002 | Invalid login | Enter invalid credentials | Clear error is shown; dashboard remains hidden |
| TC-003 | Empty login fields | Submit blank form | Browser validation prevents submission |
| TC-004 | Add expense | Enter description, positive amount, expense type | Transaction appears and expense total updates |
| TC-005 | Add income | Enter description, positive amount, income type | Transaction appears and income total updates |
| TC-006 | Zero amount | Enter 0 | Transaction should not be accepted |
| TC-007 | Search by description | Search for an existing description | Matching row remains visible |
| TC-008 | Search by category | Search for a category | Matching rows remain visible |
| TC-009 | No search match | Enter nonexistent term | Empty result state should be clear |
| TC-010 | API health | GET /api/health | HTTP 200 and status=ok |
| TC-011 | Transactions API | GET /api/transactions | HTTP 200 and valid transaction array |
| TC-012 | Invalid API login | POST invalid credentials | HTTP 401 and error message |
