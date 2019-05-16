const dev = {
  awsRegion:          'us-east-1',
  cognitoClientId:    '7i4fcjv6mv61reikl3fj3021cg',
  cognitoUserPoolId:  'us-east-1_1kAKJNA7n',
  originContext:      'http://blakes-desktop:5500'
};

const uat = {
  awsRegion:          'us-east-1',
  cognitoClientId:    '',
  cognitoUserPoolId:  '',
  originContext:         ''
};

const prod = {
  awsRegion:          'us-east-1',
  cognitoClientId:    '7i4fcjv6mv61reikl3fj3021cg',
  cognitoUserPoolId:  'us-east-1_1kAKJNA7n',
  originContext:         'http://OriginApiProd.yruxtjdgwg.us-east-1.elasticbeanstalk.com'
};

console.log(process.env.NODE_ENV);

export let environment = dev;

if (process.env.REACT_APP_ENV === 'uat') {
  environment = uat;
} else if (process.env.NODE_ENV === 'production' || process.env.REACT_APP_ENV === 'production') {
  environment = prod;
}
