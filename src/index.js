import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
	// This is not a real GraphQL API
	uri: "/gql",
	// Add OperationName as a query string to each /gql call
	fetch: (uri, options) => {
		const { operationName } = JSON.parse(options.body);
		return fetch(`${uri}?operation=${operationName}`, options);
	},
});

const GET_USERS_QUERY = gql`
	query GetUsers {
		users {
			id
			name
		}
	}
`;

const Data = () => {
	const { data, loading } = useQuery(GET_USERS_QUERY);

	return loading ? (
		"Loading..."
	) : (
		<ul>
			{data?.users?.map(({ id, name }) => (
				<li key={id}>{name}</li>
			))}
		</ul>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Data></Data>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
