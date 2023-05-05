/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async rewrites() {
  //   return [
   
  //     {
  //       source: "/graphql",
  //       destination: "https://pwa.hypernode.frontrunneroutfitters.com/graphql",
  //     },
  //   ];
  //  },
// async headers()
// {
//   return [
//     {
//       source: "https://pwa.hypernode.frontrunneroutfitters.com",
//       headers:[
//         {key:'Access-Control-Allow-Origin', value:'true'},
//         {key:'Access-Control-Allow-Methods', value:'*'},
//         {
//           key:'Access-Control-Allow-Headers',
//           value:'GET,OPTIONS,PATCH,DELETE,POST,PUT'
//         },
//         {
//           Key:'Access-Control-Allow-Headers',
//           value:
//           'XCSRF-Token,X-Requested-With,Accept,Accept-Version,Content-Length,Content-Type,Cotent-MDS,Date,X-Access'
//         }
//       ]
//     }
//   ]
// }
}

module.exports = nextConfig
