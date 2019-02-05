const dev = {
  awsRegion:          'us-east-1',
  cognitoClientId:    '',
  cognitoUserPoolId:  '',
  originContext:      'http://localhost:5500'
};

const uat = {
  awsRegion:          'us-east-1',
  cognitoClientId:    '',
  cognitoUserPoolId:  '',
  originContext:         ''
};

const prod = {
  awsRegion:          'us-east-1',
  cognitoClientId:    '',
  cognitoUserPoolId:  '',
  originContext:         ''
};

console.log(process.env.NODE_ENV);

export let environment = dev;

if (process.env.REACT_APP_ENV === 'uat') {
  environment = uat;
} else if (process.env.NODE_ENV === 'production' || process.env.REACT_APP_ENV === 'production') {
  environment = prod;
}
