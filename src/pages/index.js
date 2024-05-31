/** @format */

import { useEffect, useState } from "react";
import { getPosts } from "./api/fetchPost";
import AllPosts from "@/components/AllPosts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchPosts = async () => {
		setLoading(true);
		try {
			const posts = await getPosts();
			setPosts([...posts]);
		} catch (err) {
			console.log("err---", err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div className="w-full">
			{loading && <div>Loading...</div>}
			<AllPosts posts={posts} />
			<ToastContainer position="top-right" autoClose={3000} />
		</div>
	);
}
