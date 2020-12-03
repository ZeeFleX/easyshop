import gql from 'graphql-client';
import { GraphQLAPIURL } from '../config/config';

export default gql({
    url: GraphQLAPIURL
})