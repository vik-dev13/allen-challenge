/** @format */

import Post from "@/components/Post";
import React, { useContext } from "react";
import { PostContext } from "./_app";
import Link from "next/link";

const SavedPosts = () => {
	const { savedPost } = useContext(PostContext);

	return (
		<div>
			<div className=" flex flex-row justify-between p-3 border border-b-2 w-full">
				<Link href={"/"}>
					<div className>All Posts</div>
				</Link>
			</div>
			<div className="flex flex-col md:mx-[30%] gap-3 justify-center items-center">
				{savedPost.length === 0 ? (
					<div>No saved Post</div>
				) : (
					savedPost?.map((post) => <Post post={post} />)
				)}
			</div>
		</div>
	);
};

export default SavedPosts;
