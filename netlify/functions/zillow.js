exports.handler = async (event) => {
  const location = event.queryStringParameters.location || 'Franklin, TN';
  const page = event.queryStringParameters.page || '1';
  
  const url = `https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=${encodeURIComponent(location)}&status_type=ForSale&minPrice=2000000&maxPrice=5000000&page=${page}`;
  
  const response = await fetch(url, {
    headers: {
      'x-rapidapi-host': 'zillow-com1.p.rapidapi.com',
      'x-rapidapi-key': '2fce36f1bamsh4969a56fe56ac45p180e3cjsn208af5507053'
    }
  });
  
  const data = await response.json();
  
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
};
