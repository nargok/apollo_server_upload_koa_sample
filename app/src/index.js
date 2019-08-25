import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from "apollo-link";

import App from './components/App';

// TODO client系の設定は別ファイルにする
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";

// GraphQLで連携するサーバーのURL


// headerの設定などを担当するライブラリの設定
const httpLink = new HttpLink({
    uri: process.env.API_URL
});

// const authLink = setContext((_, { headers }) => {
//     const token = localStorage.getItem(AUTH_TOKEN);
//     return {
//         headers: {
//             ...headers,
//             "x-token": token ? `${token}` : ''
//         }
//     }
// });
//
// const errorLink = onError(({ graphQLErrors, networkError }) => {
//     if (graphQLErrors) {
//         for (let err of graphQLErrors) {
//             switch (err.extensions.code) {
//                 case 'BAD_USER_INPUT':
//                     console.log("もう一度入力内容を確認させよう");
//                     break;
//                 case 'UNAUTHENTICATED':
//                     console.log("認証が必要");
//                     localStorage.removeItem(AUTH_TOKEN);
//                     alert("ログインしてください");
//                     browserHistory.push("/login");
//                     break;
//                 case 'FORBIDDEN':
//                     console.log('認証が必要');
//                     localStorage.removeItem(AUTH_TOKEN);
//                     alert("ログインしてください");
//                     browserHistory.push("/login");
//                     break;
//                 default:
//             }
//         }
//     }
//     if (networkError) console.log(`[Network error]: ${networkError}`);
// });
//
// GraphQLの通信結果をキャッシュする設定
const cache = new InMemoryCache();

// ApolloClientの設定
const client = new ApolloClient({
    link: ApolloLink.from([httpLink]),
    cache,
});

// ApolloClientをrootコンポーネントに適用する
ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root')
);

