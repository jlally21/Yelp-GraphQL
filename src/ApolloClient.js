import ApolloClient, { gql } from 'apollo-boost';

const API_KEY =
  'M788Ey5SLnJUvqP35OEfVTIKUWgZDSTLpfJT1zdLYKSdbl4oNOwL90-zTvPY3V-kcQS3Cws6_n_zZdnhdjxRl3XGVS_ky7yUfdYbfSsh23mpw1uefsnihRcQoNszXXYx';

const client = new ApolloClient({
  uri: 'https://api.yelp.com/v3/graphql',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Accept-Language': 'en_US'
  }
});

export default client;
