export const getAuthorizationHeader = () => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmNmU5MTlhYS1hNjU5LTQwYTktOTZlYi1kOTBmNjhhNmY2MDQiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2NzkwNzc2NTgsImV4cCI6MTY3OTk3NzY1OH0.bqcENQzwxWVjVieKD-QElugYpNjdNsIQyWiHAVPAzhU';
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};
