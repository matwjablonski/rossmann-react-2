export const prepareApiUrl = (endpoint: string): string => 
  `${process.env.REACT_APP_API_URL}${endpoint}`; 
