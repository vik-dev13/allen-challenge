/** @format */

import "@/styles/globals.css";
import { createContext, useState } from "react";

export const PostContext = createContext();

export default function App({ Component, pageProps }) {
	const [savedPost, setSavedPost] = useState([]);
	return (
		<PostContext.Provider value={{ savedPost, setSavedPost }}>
			<Component {...pageProps} />
		</PostContext.Provider>
	);
}
