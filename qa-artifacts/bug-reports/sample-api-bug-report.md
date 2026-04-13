# Sample API Bug Report — PATCH /posts/1 Returns 200 but Does Not Persist Updated Data

## Title
PATCH request returns a successful response but updated post data is not persisted

## ID
BUG-002

## Type
API / Functional Bug

## Severity
Medium

## Priority
Medium

## Environment
- API: JSONPlaceholder
- Method: PATCH
- Endpoint: `/posts/1`
- Test Environment: Playwright API test
- OS: macOS

## Summary
A PATCH request to update a post returns HTTP 200 and echoes the updated payload in the response, but the change is not actually persisted. A follow-up GET for the same resource still returns the original data.

## Preconditions
- API is reachable
- Post with ID `1` exists

## Steps to Reproduce
1. Send a PATCH request to `/posts/1` with:
   - `title: Updated QA portfolio title`
2. Verify the response returns status `200`
3. Verify the response body contains the updated title
4. Send a GET request to `/posts/1`
5. Compare the returned title to the patched value

## Expected Result
The updated title should persist, and a follow-up GET should return the new value.

## Actual Result
The PATCH response returns the updated title, but a follow-up GET returns the original post content.

## Impact
This creates a false sense of successful update behavior and could mislead testers or client teams into thinking write operations are persisted correctly.

## Suggested Root Cause
The API appears to simulate update responses rather than persisting changes to underlying data.

## Notes
This is a useful example of why API testing should not stop at status code and immediate response validation. Follow-up verification may be needed to confirm true persistence behavior.