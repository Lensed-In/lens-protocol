import { createClient } from "urql";

const APIURL =
  "https://api.thegraph.com/subgraphs/name/lensed-in/subgraph_matic";

const postQuery = `
{
  posts(first: 20) 
  {
    id
    pubId
    contentURI
    timestamp
    fromProfile 
    {
      profileId
      handle
      owner 
      {
        id
      }
    }
  }
}

`;

const client = createClient({
  url: APIURL,
});

const data = await client.query(tokensQuery).toPromise();
