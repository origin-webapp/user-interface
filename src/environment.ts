const dev = {
  awsRegion:          'us-east-1',
  cognitoClientId:    '',
  cognitoUserPoolId:  '',
  smsContext:         ''
};

const uat = {
  awsRegion:          'us-east-1',
  cognitoClientId:    '',
  cognitoUserPoolId:  '',
  smsContext:         ''
};

const prod = {
  awsRegion:          'us-east-1',
  cognitoClientId:    '',
  cognitoUserPoolId:  '',
  smsContext:         ''
};

console.log(process.env.NODE_ENV);

export let environment = dev;

if (process.env.REACT_APP_ENV === 'uat') {
  environment = uat;
} else if (process.env.NODE_ENV === 'production' || process.env.REACT_APP_ENV === 'production') {
  environment = prod;
}
